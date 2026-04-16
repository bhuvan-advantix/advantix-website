import React from 'react';
import { Bot, BrainCircuit, Cpu, ShieldCheck, Zap, BarChart3, Settings, Code2 as Code, Server, Users, Database, Clock, Search, LayoutDashboard, Plug2, GraduationCap, LineChart, ChevronRight } from 'lucide-react';
import SolutionLayout from '../../components/solutions/SolutionLayout';
import { motion } from 'framer-motion';

const AgenticAISystems = () => {
  const icon = <Bot size={32} className="text-neon-purple" />;
  
  const benefits = [
    {
      icon: <Bot className="w-8 h-8 text-neon-purple" />,
      title: 'Autonomous Decision Making',
      description: 'AI agents that can independently analyze situations, make decisions, and take actions to achieve complex business objectives without constant human oversight.'
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-neon-blue" />,
      title: 'Self-Learning Systems',
      description: 'Continuously evolving AI that learns from every interaction, improving performance and adapting to changing business environments and requirements.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Process Automation',
      description: 'End-to-end automation of complex business processes, reducing manual effort and increasing operational efficiency by up to 80%.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: 'Data-Driven Intelligence',
      description: 'Transform raw data into actionable insights and strategic recommendations, enabling smarter business decisions.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security and compliance measures built into every agent, ensuring data protection and regulatory adherence.'
    },
    {
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      title: 'Scalable Architecture',
      description: 'Cloud-native design that scales effortlessly with your business needs, from small tasks to enterprise-wide deployments.'
    }
  ];

  const approach = [
    {
      phase: '1',
      title: 'Discovery & Strategy',
      description: 'We begin by thoroughly understanding your business objectives, challenges, and opportunities where AI can create the most impact.',
      icon: <Search className="w-6 h-6 text-neon-purple" />,
      duration: '1-2 Weeks',
      deliverables: ['Business Needs Analysis', 'AI Opportunity Assessment', 'Strategic Roadmap']
    },
    {
      phase: '2',
      title: 'Agent Architecture',
      description: 'Our experts design a custom AI agent architecture tailored to your specific requirements and technical environment.',
      icon: <LayoutDashboard className="w-6 h-6 text-neon-blue" />,
      duration: '2-3 Weeks',
      deliverables: ['System Architecture', 'Technical Specifications', 'Integration Plan']
    },
    {
      phase: '3',
      title: 'Development & Training',
      description: 'We develop and train specialized AI agents using your data and business logic to ensure optimal performance.',
      icon: <Code className="w-6 h-6 text-green-400" />,
      duration: '4-8 Weeks',
      deliverables: ['Custom AI Agents', 'Model Training', 'Initial Testing']
    },
    {
      phase: '4',
      title: 'Integration & Deployment',
      description: 'Seamless integration with your existing systems and deployment in your preferred environment.',
      icon: <Plug2 className="w-6 h-6 text-yellow-400" />,
      duration: '2-4 Weeks',
      deliverables: ['System Integration', 'API Development', 'Production Deployment']
    },
    {
      phase: '5',
      title: 'Training & Enablement',
      description: 'Comprehensive training for your team to effectively work with and manage the AI agents.',
      icon: <GraduationCap className="w-6 h-6 text-cyan-400" />,
      duration: '1-2 Weeks',
      deliverables: ['User Training', 'Documentation', 'Best Practices']
    },
    {
      phase: '6',
      title: 'Optimization & Scaling',
      description: 'Continuous monitoring, performance optimization, and scaling of the solution as your needs evolve.',
      icon: <LineChart className="w-6 h-6 text-pink-400" />,
      duration: 'Ongoing',
      deliverables: ['Performance Reports', 'Optimization Cycles', 'Scaling Strategy']
    }
  ];

  return (
    <SolutionLayout
      title="Agentic AI Systems"
      description="Transform your business with <span class='font-semibold text-neon-blue'>autonomous AI agents</span> that think, learn, and act independently to solve complex challenges and drive growth."
      icon={icon}
      imageSrc="/images/solutions/agentic-ai-systems.png"
      imageAlt="Agentic AI Systems"
      benefits={benefits}
      approach={approach}
      gradientFrom="from-neon-purple"
      gradientTo="to-neon-blue"
      ctaText="Explore Agentic AI Solutions"
    >
      <div className="space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Future of Business Automation is Here</h2>
          <p className="text-lg mb-6 text-white/80">
            Agentic AI represents a paradigm shift in artificial intelligence, moving beyond simple automation to create intelligent agents capable of independent thought, decision-making, and action. These autonomous systems can understand context, learn from interactions, and take initiative to achieve complex business objectives with minimal human oversight.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/5">
              <h3 className="text-xl font-semibold mb-3 text-neon-blue">Key Capabilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-neon-purple">•</span>
                  <span>Autonomous decision-making and problem-solving</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-neon-purple">•</span>
                  <span>Continuous learning and self-improvement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-neon-purple">•</span>
                  <span>Natural language understanding and generation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-neon-purple">•</span>
                  <span>Multi-step task execution and workflow automation</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/5">
              <h3 className="text-xl font-semibold mb-3 text-neon-blue">Business Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-neon-purple">•</span>
                  <span>80% reduction in manual processes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-neon-purple">•</span>
                  <span>60% faster decision-making cycles</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-neon-purple">•</span>
                  <span>45% increase in operational efficiency</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-neon-purple">•</span>
                  <span>24/7 automated customer and business support</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Use Cases Across Industries</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Financial Services',
                description: 'Automated risk assessment, fraud detection, and personalized financial advice'
              },
              {
                title: 'Healthcare',
                description: 'Patient monitoring, diagnostic assistance, and treatment recommendations'
              },
              {
                title: 'E-commerce',
                description: 'Personalized shopping assistants and dynamic pricing optimization'
              },
              {
                title: 'Manufacturing',
                description: 'Predictive maintenance and supply chain optimization'
              },
              {
                title: 'Customer Service',
                description: '24/7 intelligent support agents with deep product knowledge'
              },
              {
                title: 'Human Resources',
                description: 'Automated candidate screening and employee onboarding'
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-neon-purple/30 transition-all duration-300">
                <h4 className="font-semibold text-lg mb-2">{useCase.title}</h4>
                <p className="text-white/70">{useCase.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SolutionLayout>
  );
};

export default AgenticAISystems;
