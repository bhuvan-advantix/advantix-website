import React from 'react';
import { TrendingUp } from 'lucide-react';
import SolutionLayout from '../../components/solutions/SolutionLayout';

const ProcessOptimization = () => {
  const icon = <TrendingUp size={32} className="text-neon-green" />;
  
  const benefits = [
    {
      icon: '📈',
      title: 'Increased Productivity',
      description: 'Eliminate inefficiencies and streamline workflows to get more done with fewer resources.'
    },
    {
      icon: '💰',
      title: 'Cost Reduction',
      description: 'Identify and eliminate waste to significantly reduce operational costs.'
    },
    {
      icon: '⚡',
      title: 'Faster Turnaround',
      description: 'Accelerate your processes to deliver products and services faster to market.'
    },
    {
      icon: '📊',
      title: 'Data-Backed Decisions',
      description: 'Make informed decisions with comprehensive process analytics and insights.'
    }
  ];

  const approach = [
    {
      title: 'Process Mapping & Analysis',
      description: 'We document and analyze your current processes to identify inefficiencies and improvement opportunities.'
    },
    {
      title: 'Solution Design',
      description: 'Our experts design customized optimization strategies tailored to your specific business needs.'
    },
    {
      title: 'Implementation & Training',
      description: 'We help implement changes and provide training to ensure successful adoption across your organization.'
    }
  ];

  return (
    <SolutionLayout
      title="Process Optimization"
      description="Maximize efficiency and productivity with our <span class='font-semibold text-neon-green'>data-driven process optimization</span> solutions that identify bottlenecks and streamline your operations for peak performance."
      icon={icon}
      imageSrc="/images/solutions/process-optimization.png"
      imageAlt="Process Optimization"
      benefits={benefits}
      approach={approach}
      ctaText="Start Optimizing Today"
    >
      <h2>Transform Your Operations with Process Optimization</h2>
      <p>
        Our Process Optimization solutions leverage advanced analytics and industry best practices to analyze, refine, and enhance your business processes, delivering measurable improvements in efficiency and cost savings.
      </p>
    </SolutionLayout>
  );
};

export default ProcessOptimization;
