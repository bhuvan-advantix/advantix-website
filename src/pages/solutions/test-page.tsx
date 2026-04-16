import React from 'react';
import { TestTube2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SolutionLayout from '../../components/solutions/SolutionLayout';

const TestPage = () => {
  const icon = <TestTube2 size={32} className="text-neon-blue" />;
  
  const benefits = [
    {
      icon: '🧪',
      title: 'Component Testing',
      description: 'Verify that all components render and function as expected.'
    },
    {
      icon: '🔄',
      title: 'Routing Verification',
      description: 'Ensure all navigation links work correctly.'
    },
    {
      icon: '🎨',
      title: 'UI Consistency',
      description: 'Check that the design system is applied consistently.'
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Verify that pages load quickly and efficiently.'
    }
  ];

  const approach = [
    {
      title: 'Initial Setup',
      description: 'Configure the testing environment and dependencies.'
    },
    {
      title: 'Test Implementation',
      description: 'Write and run tests for all critical components.'
    },
    {
      title: 'Verification',
      description: 'Confirm that all tests pass and functionality works as expected.'
    }
  ];

  return (
    <SolutionLayout
      title="Test Page"
      description="This is a test page to verify routing and component functionality. If you can see this, the routing is working!"
      icon={icon}
      imageSrc="/images/solutions/test-page.png"
      imageAlt="Test Page"
      benefits={benefits}
      approach={approach}
      gradientFrom="from-neon-blue"
      gradientTo="to-neon-purple"
      ctaText="Back to Solutions"
    >
      <h2>Testing Environment</h2>
      <p>
        This page serves as a testing ground for verifying the functionality and appearance of components.
        It helps ensure that routing, styling, and interactive elements work as intended.
      </p>
      
      <div className="mt-8 p-6 bg-muted/20 rounded-xl border border-border/20">
        <h3 className="text-xl font-semibold text-neon-blue mb-4">Quick Links</h3>
        <div className="flex flex-wrap gap-4 mt-4">
          <Link 
            to="/solutions/business-automation" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Business Automation
          </Link>
          <Link 
            to="/solutions" 
            className="inline-flex items-center px-6 py-3 border border-white/20 bg-white/5 rounded-lg font-medium hover:bg-white/10 transition-colors"
          >
            All Solutions
          </Link>
        </div>
      </div>
    </SolutionLayout>
  );
};

export default TestPage;
