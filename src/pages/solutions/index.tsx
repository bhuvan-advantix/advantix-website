import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Solutions() {
  const router = useRouter();
  
  useEffect(() => {
    // This will handle the hash navigation
    if (router.asPath.includes('#')) {
      const id = router.asPath.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [router.asPath]);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Solutions</h1>
      
      <section id="agentic-ai-systems" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Agentic AI Systems</h2>
        <p className="text-gray-600">
          Custom AI agents that work autonomously to solve complex business problems.
        </p>
      </section>

      <section id="business-automations" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Business Automations</h2>
        <p className="text-gray-600">
          Streamline your operations with our intelligent automation solutions.
        </p>
      </section>

      <section id="consulting" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Consulting & Insights Generation</h2>
        <p className="text-gray-600">
          Expert consulting services to help you leverage AI for business growth.
        </p>
      </section>

      <section id="data-analytics" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Data Analytics & Decision Support</h2>
        <p className="text-gray-600">
          Turn your data into actionable insights with our advanced analytics solutions.
        </p>
      </section>
    </div>
  );
}
