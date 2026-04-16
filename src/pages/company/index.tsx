import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Company() {
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
      <h1 className="text-4xl font-bold mb-8">Our Company</h1>
      
      <section id="about" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-600 mb-6">
          We are a team of passionate AI experts dedicated to transforming businesses through intelligent automation.
        </p>
      </section>

      <section id="blog" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Blog</h2>
        <p className="text-gray-600 mb-6">
          Stay updated with the latest in AI and automation through our blog posts.
        </p>
      </section>

      <section id="careers" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Careers</h2>
        <p className="text-gray-600 mb-6">
          Join our team and help shape the future of AI-powered business solutions.
        </p>
      </section>

      <section id="contact" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Get in touch with our team for inquiries and support.
        </p>
      </section>
    </div>
  );
}
