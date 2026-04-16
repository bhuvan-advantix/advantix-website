import React from 'react';
import { FileText, BarChart2, Lightbulb, Target, TrendingUp, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SolutionLayout from '../../components/solutions/SolutionLayout';

const ConsultingInsights = () => {
  const icon = <FileText size={32} className="text-neon-purple" />;
  
  const benefits = [
    {
      icon: '📊',
      title: 'Data-Driven Strategies',
      description: 'Leverage comprehensive data analysis to inform your business decisions.'
    },
    {
      icon: '💡',
      title: 'Actionable Insights',
      description: 'Turn complex data into clear, actionable business intelligence.'
    },
    {
      icon: '🎯',
      title: 'Focused Solutions',
      description: 'Customized strategies tailored to your specific business challenges.'
    },
    {
      icon: '🚀',
      title: 'Performance Growth',
      description: 'Drive measurable improvements in your business performance.'
    }
  ];

  const approach = [
    {
      title: 'Discovery & Assessment',
      description: 'We begin by thoroughly understanding your business, challenges, and goals.'
    },
    {
      title: 'Data Analysis',
      description: 'Our experts analyze your data to uncover valuable patterns and opportunities.'
    },
    {
      title: 'Strategy Development',
      description: 'We create a customized strategy with clear, actionable recommendations.'
    },
    {
      title: 'Implementation Support',
      description: 'We provide guidance and support to help you implement the recommended solutions.'
    }
  ];

  return (
    <SolutionLayout
      title="Consulting & Insights Generation"
      description="Transform data into actionable intelligence with our expert <span class='font-semibold text-neon-blue'>consulting services</span> and comprehensive insights generation."
      icon={icon}
      imageSrc="/images/solutions/consult.png"
      imageAlt="Consulting & Insights Generation"
      benefits={benefits}
      approach={approach}
      gradientFrom="from-neon-purple"
      gradientTo="to-neon-blue"
      ctaText="Schedule a Consultation"
    >
      <h2>Data-Driven Decision Making</h2>
      <p>
        Our consulting services help you uncover hidden patterns, identify opportunities, and make 
        informed business decisions based on comprehensive data analysis. We combine industry expertise 
        with advanced analytics to deliver insights that drive real business value.
      </p>
      
      <h3>Service Offerings</h3>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="p-6 bg-muted/20 rounded-xl border border-border/20 hover:border-neon-purple/50 transition-colors">
          <h4 className="font-semibold text-lg mb-2 text-white flex items-center">
            <ClipboardCheck className="w-5 h-5 mr-2 text-neon-purple" />
            Business Intelligence
          </h4>
          <ul className="space-y-2 mt-3 text-white/80">
            <li className="flex items-start">
              <span className="inline-block mr-2">•</span>
              <span>Strategy development</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-2">•</span>
              <span>Performance metrics & KPIs</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-2">•</span>
              <span>Data visualization & reporting</span>
            </li>
          </ul>
        </div>
        
        <div className="p-6 bg-muted/20 rounded-xl border border-border/20 hover:border-neon-purple/50 transition-colors">
          <h4 className="font-semibold text-lg mb-2 text-white flex items-center">
            <BarChart2 className="w-5 h-5 mr-2 text-neon-purple" />
            Market Research
          </h4>
          <ul className="space-y-2 mt-3 text-white/80">
            <li className="flex items-start">
              <span className="inline-block mr-2">•</span>
              <span>Competitive analysis</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-2">•</span>
              <span>Customer behavior insights</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-2">•</span>
              <span>Market trend analysis</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-lg text-white/90 mb-6">
          Ready to transform your data into a strategic asset? Our expert consultants are here to help.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-blue text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-lg"
        >
          Get Expert Consultation
          <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </SolutionLayout>
  );
};

export default ConsultingInsights;
