import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SolutionLayoutProps {
  title: string;
  description: string;
  icon: ReactNode;
  imageSrc: string;
  imageAlt: string;
  benefits: Array<{
    title: string;
    description: string;
    icon: string | ReactNode;
  }>;
  approach: Array<{
    phase: string;
    title: string;
    description: string;
    icon: ReactNode;
    duration: string;
    deliverables: string[];
  }>;
  ctaText?: string;
  gradientFrom?: string;
  gradientTo?: string;
  children?: ReactNode;
}

const SolutionLayout: React.FC<SolutionLayoutProps> = ({
  title,
  description,
  icon,
  imageSrc,
  imageAlt,
  benefits,
  approach,
  ctaText = 'Get Started',
  gradientFrom = 'from-neon-green',
  gradientTo = 'to-neon-blue',
  children
}) => {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
            <div className="lg:w-1/2">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${gradientFrom}/20 ${gradientTo}/10 mb-6`}>
                {icon}
              </div>
              <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent" style={{
                backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`
              }}>
                {title}
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl" dangerouslySetInnerHTML={{ __html: description }} />
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#solutions" 
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white rounded-lg font-medium hover:opacity-90 transition-opacity`}
                >
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-white/20 bg-white/5 rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            
            {/* Image Container */}
            <div className="relative w-full lg:w-1/2 h-[500px] lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-neon-blue/5 rounded-2xl border border-white/10 backdrop-blur-sm p-4 flex items-center justify-center">
                <img 
                  src={imageSrc} 
                  alt={imageAlt}
                  className="w-auto h-full max-w-full object-contain"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-green/20 to-neon-blue/10 -z-10 blur-xl opacity-30"></div>
            </div>
          </div>

          {/* Main Content */}
          <div id="solutions" className="glass-card p-8 rounded-2xl">
            <div className="prose prose-invert max-w-none">
              {children}
              
              {/* Benefits Section */}
              {benefits && benefits.length > 0 && (
                <div className="my-12">
                  <h3 className="text-2xl font-semibold mb-8 text-neon-green flex items-center">
                    {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6 mr-2' })}
                    Why Choose Our {title}?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="p-6 bg-muted/20 rounded-xl border border-border/20 hover:border-neon-green/50 transition-all">
                        <h4 className="font-semibold text-lg mb-2 text-white">{benefit.icon} {benefit.title}</h4>
                        <p className="text-white/80">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Approach Section */}
              {approach && approach.length > 0 && (
                <div className="my-16">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">Our 6-Phase Implementation Process</h3>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                      A structured approach to ensure successful deployment and adoption of Agentic AI in your organization
                    </p>
                  </div>
                  
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue to-neon-purple md:left-1/2 md:-translate-x-1/2"></div>
                    
                    {/* Approach steps */}
                    <div className="space-y-12">
                      {approach.map((step, index) => (
                        <div 
                          key={index} 
                          className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                        >
                          {/* Phase number and icon */}
                          <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border border-white/10 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-white font-bold text-lg">
                              {step.phase}
                            </div>
                          </div>
                          
                          {/* Content card */}
                          <div className="relative flex-1 w-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 shadow-lg hover:border-neon-purple/50 transition-all">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center">
                                <div className="p-2 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 mr-3">
                                  {step.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white">{step.title}</h4>
                              </div>
                              <span className="text-sm px-3 py-1 bg-white/10 rounded-full">{step.duration}</span>
                            </div>
                            
                            <p className="text-white/80 mb-4">{step.description}</p>
                            
                            {step.deliverables && step.deliverables.length > 0 && (
                              <div className="mt-4 pt-4 border-t border-white/10">
                                <h5 className="text-sm font-medium text-white/70 mb-2">DELIVERABLES:</h5>
                                <ul className="space-y-1">
                                  {step.deliverables.map((item, i) => (
                                    <li key={i} className="flex items-start text-sm text-white/70">
                                      <span className="text-neon-purple mr-2">•</span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* CTA Section */}
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-semibold mb-6">Ready to Transform Your Business?</h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our {title} solutions can help you achieve operational excellence and drive growth.
                </p>
                <Link 
                  to="/contact"
                  className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-lg`}
                >
                  {ctaText}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionLayout;
