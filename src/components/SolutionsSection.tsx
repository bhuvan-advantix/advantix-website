
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Bot, FileText, Workflow, BrainCircuit } from 'lucide-react';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  link: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description, delay, link }) => {
  return (
    <div
      className="glass-card p-6 animate-on-scroll hover:translate-y-[-5px] transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-3 bg-gradient-to-br from-neon-purple/20 to-neon-blue/10 rounded-lg w-14 h-14 flex items-center justify-center mb-4 text-neon-purple">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
      <div className="mt-6">
        <Link 
          to={link} 
          className="inline-flex items-center text-neon-purple hover:text-neon-blue transition-colors"
        >
          Learn more
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const SolutionsSection: React.FC = () => {
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
  
  const solutions = [
    {
      icon: <Bot size={24} />,
      title: "Agentic AI Systems",
      description: "Advanced AI systems that can autonomously perform complex tasks and make decisions.",
      delay: 100,
      link: "/solutions/agentic-ai-systems"
    },
    {
      icon: <Workflow size={24} />,
      title: "Business Automations",
      description: "End-to-end automation solutions to streamline your business processes and increase efficiency.",
      delay: 200,
      link: "/solutions/business-automation"
    },
    {
      icon: <FileText size={24} />,
      title: "Consulting & Insights Generation",
      description: "Expert consulting services to generate valuable business insights and strategic guidance.",
      delay: 300,
      link: "/solutions/consulting-insights"
    },
    {
      icon: <BrainCircuit size={24} />,
      title: "Data Analytics & Decision Support",
      description: "Comprehensive data analysis and AI-powered decision support systems for your business.",
      delay: 400,
      link: "/solutions/data-analytics"
    }
  ];
  
  return (
    <section id="solutions" className="section-padding relative z-10" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-neon-purple font-medium animate-on-scroll">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 animate-on-scroll">
            AI-Powered Solutions for Modern Businesses
          </h2>
          <p className="mt-4 text-white/70 animate-on-scroll">
            We provide cutting-edge AI solutions tailored to your business needs, helping you automate processes and make smarter decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              delay={solution.delay}
              link={solution.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
