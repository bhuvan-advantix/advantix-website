import React, { useRef, useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [splineError, setSplineError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center pt-16 section-padding z-10 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Hero Content */}
          <div className="lg:col-span-7 flex flex-col space-y-8 z-10">
            <div className="animate-on-scroll">
              <span className="inline-block bg-white/10 text-neon-purple border border-white/10 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm mb-4">
                Leading AI Automation Agency
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Automate Your Business with <span className="text-gradient">AI Agents</span>
              </h1>
              <p className="mt-6 text-lg text-white/80 max-w-2xl">
                Advantix AGI transforms small and medium businesses with intelligent automation, custom AI agents, and workflow solutions that save time, reduce costs, and drive growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-on-scroll">
              <a href="#solutions" className="px-8 py-3 rounded-md btn-gradient text-white font-medium text-center hover:shadow-lg hover:shadow-neon-purple/30 transition-all duration-300">
                Explore Solutions
              </a>
              <a href="#contact" className="px-8 py-3 rounded-md bg-white/5 border border-white/10 backdrop-blur-sm text-white font-medium text-center hover:bg-white/10 transition-all duration-300">
                Contact Us
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 animate-on-scroll">
              <div className="text-center">
                <span className="block text-3xl font-bold text-neon-purple">100+</span>
                <span className="text-sm text-white/60">Years AI Experience</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-neon-blue">100+</span>
                <span className="text-sm text-white/60">AI Agents Built</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-neon-teal">500+</span>
                <span className="text-sm text-white/60">Automations Built</span>
              </div>
            </div>
          </div>

          {/* 3D Holographic Design — no box, transparent, full bleed */}
          <div className="lg:col-span-5 animate-on-scroll h-[500px] lg:h-[600px] relative">
            {splineError ? (
              <div className="w-full h-full flex items-center justify-center text-white/40 text-sm">
                3D model unavailable
              </div>
            ) : (
              <div className="w-full h-full relative" style={{ mixBlendMode: 'screen' }}>
                {/* The actual Spline holoblobs scene — mix-blend-mode:screen makes the black background disappear */}
                <iframe
                  src="https://my.spline.design/holoblobs-jU0XN6415VaueIH5i96ZnNeK/?muted=1&autoplay=1&sound=0"
                  sandbox="allow-same-origin allow-scripts allow-popups"
                  onError={() => setSplineError(true)}
                  allowFullScreen
                  title="3D Holographic Design"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  allow="autoplay;"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    background: 'transparent',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    pointerEvents: 'auto',
                  }}
                />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
