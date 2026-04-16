import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Custom shader material that creates an iridescent, holographic fluid look
const FluidBlobMaterial = () => {
  const shader = useMemo(() => ({
    uniforms: {
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color('#ff00cc') },
      uColor2: { value: new THREE.Color('#8800ff') },
      uColor3: { value: new THREE.Color('#00ccff') },
    },
    vertexShader: `
      uniform float uTime;
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying float vNoise;

      // Simple noise function
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        i = mod289(i);
        vec4 p = permute(permute(permute(
          i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));
        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      void main() {
        vNormal = normal;
        vPosition = position;
        
        float noise = snoise(position * 0.8 + uTime * 0.25);
        float noise2 = snoise(position * 1.5 - uTime * 0.15);
        float combinedNoise = (noise + noise2) * 0.5;
        vNoise = combinedNoise;

        vec3 newPosition = position + normal * combinedNoise * 0.45;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform vec3 uColor3;
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying float vNoise;

      void main() {
        vec3 color = mix(uColor1, uColor2, vNoise * 0.5 + 0.5);
        color = mix(color, uColor3, sin(vPosition.y * 2.0 + uTime * 0.5) * 0.5 + 0.5);

        // Fresnel-like iridescent rim
        float fresnel = pow(1.0 - abs(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0))), 2.5);
        color += vec3(0.4, 0.6, 1.0) * fresnel * 0.8;

        // Glossy specular highlight
        vec3 lightDir = normalize(vec3(1.0, 1.5, 2.0));
        float spec = pow(max(dot(normalize(vNormal), lightDir), 0.0), 80.0);
        color += vec3(1.0) * spec * 0.6;

        gl_FragColor = vec4(color, 0.92);
      }
    `,
  }), []);

  return shader;
};

// Main fluid blob
const MainBlob = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  const shader = FluidBlobMaterial();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.08;
    }
  });

  return (
    <mesh ref={meshRef} position={[0.3, 0, 0]}>
      <sphereGeometry args={[2.0, 128, 128]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={shader.vertexShader}
        fragmentShader={shader.fragmentShader}
        uniforms={shader.uniforms}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// Smaller satellite blob
const SmallBlob = ({ position, scale, speed, colorA, colorB }: {
  position: [number, number, number];
  scale: number;
  speed: number;
  colorA: string;
  colorB: string;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  const shader = useMemo(() => ({
    uniforms: {
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color(colorA) },
      uColor2: { value: new THREE.Color(colorB) },
      uColor3: { value: new THREE.Color('#ffffff') },
    },
    vertexShader: `
      uniform float uTime;
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying float vNoise;
      vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
      vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
      vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
      float snoise(vec3 v){
        const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
        vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
        vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;
        vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
        vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
        i=mod289(i);
        vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
        float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;
        vec4 j=p-49.*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);
        vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);
        vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
        vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));
        vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
        vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
        vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
        p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
        vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
        return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
      }
      void main(){
        vNormal=normal;vPosition=position;
        float n=snoise(position*1.2+uTime*${speed.toFixed(2)});
        vNoise=n;
        vec3 newPos=position+normal*n*0.3;
        gl_Position=projectionMatrix*modelViewMatrix*vec4(newPos,1.);
      }
    `,
    fragmentShader: `
      uniform float uTime;uniform vec3 uColor1;uniform vec3 uColor2;uniform vec3 uColor3;
      varying vec3 vNormal;varying vec3 vPosition;varying float vNoise;
      void main(){
        vec3 col=mix(uColor1,uColor2,vNoise*.5+.5);
        float fr=pow(1.-abs(dot(normalize(vNormal),vec3(0,0,1))),2.5);
        col+=vec3(.6,.8,1.)*fr*.9;
        vec3 l=normalize(vec3(1,1.5,2));
        float sp=pow(max(dot(normalize(vNormal),l),0.),60.);
        col+=vec3(1.)*sp*.8;
        gl_FragColor=vec4(col,.9);
      }
    `,
  }), [colorA, colorB, speed]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.y = t * 0.15;
      // Gentle float effect
      meshRef.current.position.y = position[1] + Math.sin(t * 0.8) * 0.08;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={shader.vertexShader}
        fragmentShader={shader.fragmentShader}
        uniforms={shader.uniforms}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const ThreeDModel = () => {
  return (
    <div className="w-full h-full min-h-[500px] lg:h-[600px] relative" style={{ cursor: 'grab' }}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ff88ff" />
        <directionalLight position={[-5, 2, 3]} intensity={1} color="#00ccff" />
        <pointLight position={[0, -3, 2]} intensity={0.8} color="#aa00ff" />

        {/* Main large blob */}
        <MainBlob />

        {/* Smaller satellite blobs */}
        <SmallBlob
          position={[-2.4, 1.8, 0]}
          scale={0.48}
          speed={0.3}
          colorA="#00ffcc"
          colorB="#0088ff"
        />
        <SmallBlob
          position={[2.8, -1.5, -0.5]}
          scale={0.28}
          speed={0.4}
          colorA="#ff44cc"
          colorB="#6600ff"
        />

        {/* Drag to rotate + scroll to zoom */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.6}
          zoomSpeed={0.8}
          minDistance={4}
          maxDistance={12}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDModel;
