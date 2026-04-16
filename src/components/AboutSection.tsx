
import React, { useEffect, useRef } from 'react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="about" className="section-padding relative z-10" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Image/Visual */}
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="h-[400px] glass-card rounded-lg overflow-hidden flex items-center justify-center">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="absolute w-40 h-40 rounded-full bg-neon-purple/20 -top-10 -left-10 blur-2xl"></div>
                  <div className="absolute w-60 h-60 rounded-full bg-neon-blue/20 -bottom-20 -right-20 blur-3xl"></div>
                </div>
                
                {/* Abstract Code/Algorithm Visualization */}
                <div className="relative z-10 p-6 w-full h-full flex flex-col justify-center">
                  <div className="flex mb-4">
                    <div className="w-3 h-3 rounded-full bg-neon-blue mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-neon-purple mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-neon-teal"></div>
                  </div>
                  
                  {/* Code-like elements */}
                  <div className="font-mono text-xs sm:text-sm opacity-70">
                    <div className="mb-2">
                      <span className="text-neon-purple">class</span> 
                      <span className="text-neon-blue"> AdvantixAI</span> 
                      <span className="text-white">:</span>
                    </div>
                    <div className="mb-2 pl-4">
                      <span className="text-neon-purple">def</span> 
                      <span className="text-neon-teal"> __init__</span>
                      <span className="text-white">(self):</span>
                    </div>
                    <div className="mb-2 pl-8">
                      <span className="text-white">self.mission = </span>
                      <span className="text-neon-teal">"Enable businesses through AI"</span>
                    </div>
                    <div className="mb-2 pl-8">
                      <span className="text-white">self.vision = </span>
                      <span className="text-neon-teal">"AI-native automation for all"</span>
                    </div>
                    <div className="mb-2 pl-4">
                      <span className="text-neon-purple">def</span> 
                      <span className="text-neon-teal"> create_solution</span>
                      <span className="text-white">(self, business_need):</span>
                    </div>
                    <div className="mb-2 pl-8">
                      <span className="text-white">return </span>
                      <span className="text-neon-purple">Automation</span>
                      <span className="text-white">(business_need)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="space-y-6">
            <span className="text-neon-purple font-medium animate-on-scroll">About Advantix AGI</span>
            <h2 className="text-3xl md:text-4xl font-bold animate-on-scroll">
              Leading the AI <span className="text-gradient">Revolution</span>
            </h2>
            <p className="text-white/70 animate-on-scroll">
              Advantix AGI LLP is at the forefront of the AI revolution, dedicated to making advanced automation 
              accessible to small and medium businesses. Our team of AI experts, developers and industry specialists 
              work together to create custom solutions that transform how businesses operate.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="border border-white/10 rounded-lg p-4 animate-on-scroll">
                <h3 className="font-bold text-xl mb-1">Our Mission</h3>
                <p className="text-white/70 text-sm">
                  To enable every business to leverage the power of AI through custom agents and automation solutions.
                </p>
              </div>
              <div className="border border-white/10 rounded-lg p-4 animate-on-scroll">
                <h3 className="font-bold text-xl mb-1">Our Vision</h3>
                <p className="text-white/70 text-sm">
                  A future where AI-native automation is accessible to all businesses regardless of size or industry.
                </p>
              </div>
            </div>
            <div className="animate-on-scroll pt-4">
              <a 
                href="#contact" 
                className="px-8 py-3 inline-block rounded-md btn-gradient text-white font-medium hover:shadow-lg hover:shadow-neon-purple/30 transition-all duration-300"
              >
                Work With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
