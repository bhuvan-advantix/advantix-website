
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bot, FileText, Workflow, BrainCircuit } from 'lucide-react';
import SolutionCard from '../components/SolutionCard';

const Solutions = () => {
  useEffect(() => {
    // Force immediate activation of animations when the page loads
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements?.forEach((el) => {
      setTimeout(() => {
        el.classList.add('animate-active');
      }, 100); // Small delay to ensure DOM is ready
    });
  }, []);
  
  const solutions = [
    {
      icon: <Bot size={24} />,
      title: "Agentic AI Systems",
      description: "Advanced AI systems that can autonomously perform complex tasks and make decisions.",
      expandedContent: "Our intelligent agents learn from your business processes and adapt to your specific needs, handling everything from customer inquiries to data processing with human-like understanding but machine-like efficiency.",
      link: "/solutions/agentic-ai-systems"
    },
    {
      icon: <Workflow size={24} />,
      title: "Business Automation",
      description: "End-to-end automation solutions to streamline your business processes and increase efficiency.",
      expandedContent: "Transform complex manual workflows into streamlined automated processes. Our solutions connect your existing tools and systems, eliminating repetitive tasks and reducing the risk of human error.",
      link: "/solutions/business-automation"
    },
    {
      icon: <FileText size={24} />,
      title: "Consulting & Insights Generation",
      description: "Expert consulting services to generate valuable business insights and strategic guidance.",
      expandedContent: "Generate high-quality, brand-consistent content across multiple channels and formats. Our AI tools help create marketing copy, technical documentation, emails, and more, while maintaining your unique voice.",
      link: "/solutions/consulting-insights"
    },
    {
      icon: <BrainCircuit size={24} />,
      title: "Data Analytics & Decision Support",
      description: "Comprehensive data analysis and AI-powered decision support systems for your business.",
      expandedContent: "Make better decisions faster with AI-powered analytics and recommendations. Our systems process vast amounts of data to identify patterns, predict outcomes, and suggest optimal courses of action.",
      link: "/solutions/data-analytics"
    }
  ];
  
  return (
    <div className="section-padding pt-32">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-neon-purple font-medium animate-on-scroll">Our Solutions</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 animate-on-scroll">
            AI-Powered Solutions for <span className="text-gradient">Modern Businesses</span>
          </h1>
          <p className="mt-6 text-white/70 animate-on-scroll">
            We provide cutting-edge AI solutions tailored to your business needs, helping you automate processes, 
            generate content, optimize workflows, and make smarter decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {solutions.map((solution, index) => (
            <Link to={solution.link} key={index} className="block h-full">
              <SolutionCard 
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                expandedContent={solution.expandedContent}
                delay={index * 100}
                link={solution.link}
              />
            </Link>
          ))}
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 animate-on-scroll">Ready to Get Started?</h2>
            <p className="text-white/70 mb-8 animate-on-scroll">
              Contact us today to discuss how our AI solutions can help your business automate processes,
              improve efficiency, and make better decisions.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-3 rounded-md btn-gradient text-white font-medium hover:shadow-lg hover:shadow-neon-purple/30 transition-all duration-300 inline-block animate-on-scroll"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
