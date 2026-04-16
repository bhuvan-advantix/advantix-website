import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Resources() {
  const router = useRouter();
  
  useEffect(() => {
    // Handle hash navigation
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
      <h1 className="text-4xl font-bold mb-8">Resources</h1>
      
      <section id="documentation" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
        <p className="text-gray-600 mb-6">
          Comprehensive guides and API documentation for our products and services.
        </p>
      </section>

      <section id="case-studies" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Case Studies</h2>
        <p className="text-gray-600 mb-6">
          Learn how our solutions have helped businesses achieve their goals.
        </p>
      </section>

      <section id="webinars" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Webinars</h2>
        <p className="text-gray-600 mb-6">
          Join our live webinars to learn more about our products and industry trends.
        </p>
      </section>

      <section id="faq" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-6">
          Find answers to common questions about our products and services.
        </p>
      </section>
    </div>
  );
}
