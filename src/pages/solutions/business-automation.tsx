import React from 'react';
import { Zap, Search, Layout, Code, Plug2, GraduationCap, LineChart, Gauge, BarChart3, Target, Settings, Database } from 'lucide-react';
import SolutionLayout from '../../components/solutions/SolutionLayout';

const BusinessAutomation = () => {
  const icon = <Zap size={32} className="text-neon-green" />;
  
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-neon-green" />,
      title: 'Process Efficiency',
      description: 'Automate up to 80% of repetitive tasks, reducing processing time from hours to minutes and eliminating human errors.'
    },
    {
      icon: <Gauge className="w-8 h-8 text-neon-blue" />,
      title: 'Operational Excellence',
      description: 'Achieve consistent, reliable execution of business processes with 99.9% accuracy and full audit trails.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: 'Actionable Insights',
      description: 'Transform raw operational data into strategic insights with real-time dashboards and analytics.'
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      title: 'Rapid ROI',
      description: 'See significant cost savings and productivity gains within the first 3-6 months of implementation.'
    },
    {
      icon: <Settings className="w-8 h-8 text-cyan-400" />,
      title: 'Seamless Integration',
      description: 'Connect with your existing systems including ERP, CRM, and custom applications without disruption.'
    },
    {
      icon: <Database className="w-8 h-8 text-pink-400" />,
      title: 'Scalable Architecture',
      description: 'Easily scale your automation initiatives as your business grows and evolves.'
    }
  ];

  const approach = [
    {
      phase: '1',
      title: 'Discovery & Assessment',
      description: 'We analyze your current processes to identify automation opportunities and prioritize them based on impact and feasibility.',
      icon: <Search className="w-6 h-6 text-neon-green" />,
      duration: '1-2 Weeks',
      deliverables: ['Process Audit Report', 'Automation Opportunity Map', 'ROI Analysis']
    },
    {
      phase: '2',
      title: 'Solution Design',
      description: 'Our experts design a tailored automation architecture that aligns with your business goals and technical environment.',
      icon: <Layout className="w-6 h-6 text-neon-blue" />,
      duration: '2-3 Weeks',
      deliverables: ['Solution Blueprint', 'Integration Strategy', 'Implementation Roadmap']
    },
    {
      phase: '3',
      title: 'Development & Configuration',
      description: 'We build and configure the automation workflows using industry-leading platforms and custom development.',
      icon: <Code className="w-6 h-6 text-green-400" />,
      duration: '3-6 Weeks',
      deliverables: ['Custom Workflows', 'System Configurations', 'API Integrations']
    },
    {
      phase: '4',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures the automation solution meets all requirements and performs reliably.',
      icon: <GraduationCap className="w-6 h-6 text-yellow-400" />,
      duration: '2-3 Weeks',
      deliverables: ['Test Cases', 'QA Reports', 'Performance Metrics']
    },
    {
      phase: '5',
      title: 'Deployment & Training',
      description: 'We implement the solution in your production environment and train your team on using and maintaining it.',
      icon: <Plug2 className="w-6 h-6 text-cyan-400" />,
      duration: '1-2 Weeks',
      deliverables: ['Deployment Plan', 'Training Materials', 'Knowledge Transfer']
    },
    {
      phase: '6',
      title: 'Optimization & Scaling',
      description: 'Continuous monitoring and optimization to ensure peak performance and scalability as your needs evolve.',
      icon: <LineChart className="w-6 h-6 text-pink-400" />,
      duration: 'Ongoing',
      deliverables: ['Performance Reports', 'Optimization Cycles', 'Scaling Strategy']
    }
  ];

  return (
    <SolutionLayout
      title="Business Automation"
      description="Transform your operations with <span class='font-semibold text-neon-green'>intelligent automation solutions</span> that streamline workflows, reduce manual work, and drive business growth through efficiency and innovation."
      icon={icon}
      imageSrc="/images/solutions/business.png"
      imageAlt="Business Automation"
      benefits={benefits}
      approach={approach}
      ctaText="Get Started with Business Automation"
    >
      <h2>Transform Your Business with Intelligent Automation</h2>
      <p>
        Our Business Automation solutions leverage cutting-edge technology to automate repetitive tasks, streamline workflows, and optimize business processes, allowing your team to focus on strategic initiatives.
      </p>
    </SolutionLayout>
  );
};

export default BusinessAutomation;
