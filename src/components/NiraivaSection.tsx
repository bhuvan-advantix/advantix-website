import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const NiraivaSection = () => {
  const steps = [
    {
      number: "1",
      title: "Ingest",
      description: "Import lab reports and clinical documents securely"
    },
    {
      number: "2",
      title: "Structure",
      description: "Normalize into a FHIR-aligned health profile + timeline"
    },
    {
      number: "3",
      title: "Predict + Guide",
      description: "Detect risk patterns and generate preventive actions with clear rationale"
    }
  ];

  const usps = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
      title: "Timeline Intelligence",
      description: "A single, chronological view of health signals across years of reports."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
      title: "FHIR-First Interoperability",
      description: "Data structured to integrate with modern healthcare systems and standards."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
      title: "Longitudinal Risk Prediction",
      description: "AI flags early deviations by comparing trends over time, not one-off readings."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
      title: "Explainable Recommendations",
      description: "Every risk flag links back to the exact markers and trend shifts that caused it."
    }
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* How it works section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Niraiva Works</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Timeline-first, not report-first. Prediction from history, not isolated snapshots.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold mb-4 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* USP Tiles */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Built for Preventive Outcomes</h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            FHIR-native by design for seamless healthcare integration
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-border hover:border-primary/20 transition-colors"
              >
                <div className="mb-4">{usp.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{usp.title}</h3>
                <p className="text-muted-foreground text-sm">{usp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl font-medium mb-6">
            Experience the power of timeline-based healthcare insights
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
            Request Demo <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NiraivaSection;
