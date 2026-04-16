
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  expandedContent: string;
  delay?: number;
  link: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description, expandedContent, delay = 0, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`glass-card p-6 animate-on-scroll transition-all duration-300 ${
        isExpanded ? 'shadow-lg shadow-neon-purple/20' : 'hover:translate-y-[-5px]'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-3 bg-gradient-to-br from-neon-purple/20 to-neon-blue/10 rounded-lg w-14 h-14 flex items-center justify-center mb-4 text-neon-purple">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
      
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-40 mt-4' : 'max-h-0'}`}>
        <div className="border-t border-white/10 pt-4">
          <p className="text-white/80">{expandedContent}</p>
        </div>
      </div>
      
      <div className="mt-6 flex justify-between items-center">
        <a
          href={link}
          className="inline-flex items-center text-neon-purple hover:text-neon-blue transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          View details
          <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <button
          onClick={toggleExpand}
          className="text-muted-foreground hover:text-white transition-colors p-1 -mr-2"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Show less" : "Show more"}
        >
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};

export default SolutionCard;
