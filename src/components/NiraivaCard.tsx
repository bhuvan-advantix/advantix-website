import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const NiraivaCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const usps = [
    "FHIR-first architecture for seamless healthcare integration",
    "Timeline intelligence for chronological health insights",
    "Predictive analytics using longitudinal data",
    "Actionable, personalized recommendations",
    "Explainable AI with clear risk factor tracking"
  ];

  return (
    <div className="w-full mb-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">Niraiva</h3>
              <p className="text-muted-foreground mt-1">
                Preventive Healthcare AI | FHIR-Compliant
              </p>
            </div>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
              />
            </button>
          </div>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-4 overflow-hidden"
              >
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-muted-foreground mb-4">
                    Niraiva transforms historical health data into actionable insights with AI-powered analysis and FHIR-compliant data structures.
                  </p>
                  
                  <h4 className="font-medium mb-2">Key Differentiators:</h4>
                  <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                    {usps.map((usp, index) => (
                      <li key={index} className="text-sm">
                        {usp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default NiraivaCard;
