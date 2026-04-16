import React from 'react';
import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SolutionLayout from '../../components/solutions/SolutionLayout';

const BusinessAutomationSimple = () => {
  const icon = <Zap size={32} className="text-neon-green" />;
  
  const benefits = [
    {
      icon: '⚡',
      title: 'Streamlined Workflows',
      description: 'Automate repetitive tasks and streamline your business processes.'
    },
    {
      icon: '🔄',
      title: 'Efficiency Boost',
      description: 'Increase productivity by reducing manual work and human errors.'
    },
    {
      icon: '📈',
      title: 'Cost Reduction',
      description: 'Lower operational costs through automation of routine tasks.'
    },
    {
      icon: '🔒',
      title: 'Improved Accuracy',
      description: 'Minimize errors and ensure consistent results every time.'
    }
  ];

  const approach = [
    {
      title: 'Process Analysis',
      description: 'We identify automation opportunities in your current workflows.'
    },
    {
      title: 'Solution Design',
      description: 'Our team designs a customized automation strategy for your business.'
    },
    {
      title: 'Implementation',
      description: 'Seamless integration of automation tools into your existing systems.'
    }
  ];

  return (
    <SolutionLayout
      title="Business Automation"
      description="Streamline your operations and boost efficiency with our <span class='font-semibold text-neon-green'>custom automation solutions</span> designed to save time and reduce costs."
      icon={icon}
      imageSrc="/images/solutions/automation.png"
      imageAlt="Business Automation"
      benefits={benefits}
      approach={approach}
      gradientFrom="from-neon-green"
      gradientTo="to-neon-blue"
      ctaText="Explore Automation Solutions"
    >
      <h2>Simplify Your Business Operations</h2>
      <p>
        Our business automation solutions are designed to take the complexity out of your daily operations. 
        By automating routine tasks, we help you focus on what truly matters - growing your business.
      </p>
      <p>
        This simplified version of our Business Automation page demonstrates how we can help transform 
        your business processes for maximum efficiency and productivity.
      </p>
      <div className="mt-8 p-6 bg-muted/20 rounded-xl border border-border/20">
        <h3 className="text-xl font-semibold text-neon-green mb-4">Test Content</h3>
        <p className="text-white/80 mb-6">This section confirms that the page is loading correctly with the new layout.</p>
        <Link 
          to="/solutions" 
          className="inline-block px-6 py-3 bg-gradient-to-r from-neon-green to-neon-blue text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Back to All Solutions
        </Link>
      </div>
    </SolutionLayout>
  );
};

export default BusinessAutomationSimple;
