import React from 'react';
import { BrainCircuit } from 'lucide-react';
import SolutionLayout from '../../components/solutions/SolutionLayout';

const DataAnalytics = () => {
  const icon = <BrainCircuit size={32} className="text-neon-purple" />;
  
  const benefits = [
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Leverage cutting-edge analytics to uncover hidden patterns and insights in your data.'
    },
    {
      icon: '🔍',
      title: 'Data Mining',
      description: 'Discover valuable information and relationships within large datasets.'
    },
    {
      icon: '📈',
      title: 'Real-time Insights',
      description: 'Make decisions based on up-to-the-minute data with our real-time analytics.'
    },
    {
      icon: '🎯',
      title: 'Predictive Modeling',
      description: 'Forecast future trends and behaviors with our advanced predictive models.'
    }
  ];

  const approach = [
    {
      title: 'Data Assessment',
      description: 'We evaluate your current data infrastructure and identify opportunities for improvement.'
    },
    {
      title: 'Solution Design',
      description: 'Our experts design a tailored analytics solution that meets your specific business needs.'
    },
    {
      title: 'Implementation & Training',
      description: 'We deploy the solution and train your team to leverage its full potential.'
    }
  ];

  return (
    <SolutionLayout
      title="Data Analytics & Decision Support"
      description="Harness the power of your data with <span class='font-semibold text-neon-purple'>advanced analytics</span> and AI-driven insights that transform information into action."
      icon={icon}
      imageSrc="/images/solutions/Data.png"
      imageAlt="Data Analytics & Decision Support"
      benefits={benefits}
      approach={approach}
      gradientFrom="from-neon-purple"
      gradientTo="to-neon-blue"
      ctaText="Explore Our Analytics Solutions"
    >
      <h2>Make Smarter Decisions with Data</h2>
      <p>
        Our data analytics solutions provide you with the tools and insights needed to transform raw data into strategic advantages. 
        We help businesses of all sizes unlock the full potential of their data through cutting-edge analytics and visualization.
      </p>
    </SolutionLayout>
  );
};

export default DataAnalytics;
