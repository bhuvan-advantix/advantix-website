import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Niraiva",
      description: "Preventive healthcare AI that transforms historical lab reports and clinical documents into a longitudinal health timeline. Built on FHIR-aligned data structures and AI prediction, it helps users detect early risk signals and take proactive actions before symptoms escalate.",
      category: "Healthcare Technology",
      details: [
        "Timeline intelligence: Automatically creates a chronological health narrative from reports",
        "Predictive insights: Identifies patterns across longitudinal health data",
        "Actionable prevention: Converts risks into clear, step-by-step plans",
        "Clinical reasoning: Provides structured analysis over time, not just data extraction"
      ]
    },
    {
      title: "CareerAI",
      description: "A comprehensive career development platform that helps professionals understand AI's role in their career and provides personalized growth roadmaps.",
      category: "AI-Powered Career Development",
      details: [
        "Role-to-AI mapping: Maps your daily tasks to AI use cases that fit your specific field and role",
        "Readiness scoring: Measures skills, tools, data access, and organizational maturity for safe AI adoption",
        "Use-case recommendations: Suggests the highest-impact AI opportunities tailored to your domain and seniority level",
        "Adoption roadmap: Delivers a phased implementation plan from quick wins to advanced AI copilots/agents with clear next steps"
      ]
    }
  ];

  const automationProjects = [
    {
      title: "Smart Reorder",
      description: "Automated inventory management system that prevents stockouts and optimizes reorder processes.",
      category: "Inventory Automation",
      details: [
        "Stockout risk scoring: Predictive analytics to identify potential stockouts",
        "Days-of-cover alerts: Notifications when inventory falls below threshold",
        "Reorder sheet auto-gen: Automated generation of ready-to-use reorder sheets",
        "Approval workflow: Built-in approval process with audit trail"
      ]
    },
    {
      title: "Price-Tag Updater",
      description: "Automated price synchronization and label generation system for retail operations.",
      category: "Retail Ops Automation",
      details: [
        "POS/Sheet sync: Seamless integration with point-of-sale systems",
        "Rule-based pricing: Automated validation of pricing rules",
        "CSV/PDF label output: Multiple format support for price tags",
        "Change log tracking: Complete audit trail of all price changes"
      ]
    },
    {
      title: "Telegram Price Lookup Bot",
      description: "Internal tool for instant access to product and pricing information.",
      category: "ChatOps / Internal Tools",
      details: [
        "Instant SKU lookup: Quick product information retrieval",
        "Real-time price fetch: Always up-to-date pricing data",
        "Central DB sync: Single source of truth for product data",
        "Sales-ready responses: Pre-formatted messages for customer inquiries"
      ]
    },
    {
      title: "Competitor Price Tracking",
      description: "Automated monitoring and analysis of competitor pricing strategies.",
      category: "Market Intelligence",
      details: [
        "Scheduled price scans: Regular monitoring of competitor prices",
        "Delta change detection: Instant alerts on price changes",
        "Internal vs competitor view: Side-by-side price comparison",
        "Daily decision digest: Summary report for quick decision making"
      ]
    },
    {
      title: "Social Media Posting Automation",
      description: "End-to-end solution for managing social media content workflow.",
      category: "Marketing Automation",
      details: [
        "Topic curation: AI-assisted content ideation",
        "Platform-specific drafts: Tailored content for each social platform",
        "Human approval gate: Ensures quality control before posting",
        "Scheduled publishing: Automated posting at optimal times"
      ]
    },
    {
      title: "Content Creation Pipeline",
      description: "AI-powered content generation system for consistent brand messaging.",
      category: "GenAI Workflow",
      details: [
        "One input → many formats: Generate multiple content types from single source",
        "Hooks + captions + hashtags: Complete social media package",
        "Long-form draft generation: Comprehensive content creation",
        "Brand tone consistency: Maintains voice across all outputs"
      ]
    }
  ];

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">{project.title}</CardTitle>
              {project.title === 'Niraiva' && (
                <p className="text-sm text-muted-foreground mt-1">Preventive Healthcare AI | FHIR-Compliant</p>
              )}
            </div>
            <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full whitespace-nowrap">
              {project.category}
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            {project.description}
          </p>
          
          {project.details && (
            <div className="mt-4 space-y-2 border-t pt-4">
              <h4 className="font-medium text-sm">Key Differentiators:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {project.details.map((detail: string, i: number) => {
                  const [title, ...descParts] = detail.split(':');
                  const description = descParts.join(':').trim();
                  return (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary font-medium">{title}:</span>
                      <span>{description}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore our portfolio of innovative solutions and successful implementations.
        </p>
      </motion.div>

      {/* Main Projects */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Automation Projects */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Automation Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationProjects.map((project, index) => (
            <ProjectCard key={`auto-${index}`} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
