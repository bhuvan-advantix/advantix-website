
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SolutionsSection from '../components/SolutionsSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  useEffect(() => {
    // Force immediate activation of animations when the page loads
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements?.forEach((el) => {
      setTimeout(() => {
        el.classList.add('animate-active');
      }, 100); // Small delay to ensure DOM is ready
    });
  }, []);
  
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <div className="section-padding">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-white/70 mb-8">
              Contact us today to discover how our AI solutions can help your business automate processes, 
              improve efficiency, and make better decisions.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-3 rounded-md btn-gradient text-white font-medium hover:shadow-lg hover:shadow-neon-purple/30 transition-all duration-300 inline-block"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default Home;
