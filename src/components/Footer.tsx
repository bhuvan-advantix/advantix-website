
import React from 'react';
import Address from './Address';

const Footer: React.FC = () => {
  // Add a unique ID to the footer to help with debugging
  const footerId = React.useId();
  const renderCount = React.useRef(0);
  
  // Simple effect to track component mount/unmount
  React.useEffect(() => {
    return () => {
      // Cleanup if needed
    };
  }, []);
  
  return (
    <footer 
      id={`footer-${footerId}`}
      className="relative z-10 border-t border-border/10 dark:border-white/10 bg-background/95 dark:bg-black/80 backdrop-blur-sm"
      data-footer-id="main-footer"
    >

<div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo and Info */}
          <div className="md:col-span-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">
                <span className="text-neon-purple">Advantix</span> AGI
              </span>
            </div>
            <p className="mt-4 text-white/70 text-sm">
              Leading AI automation agency for small and medium businesses. 
              We create custom AI agents and automation workflows that transform operations.
            </p>
            <div className="mt-4">
              <Address />
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://x.com/AdvantixAGI" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61574081425136" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/advantix-agi-579210359/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="/solutions#agentic-ai-systems" className="text-white/70 hover:text-white text-sm transition-colors block">Agentic AI Systems</a></li>
              <li><a href="/solutions#business-automations" className="text-white/70 hover:text-white text-sm transition-colors block">Business Automations</a></li>
              <li><a href="/solutions#consulting" className="text-white/70 hover:text-white text-sm transition-colors block">Consulting & Insights Generation</a></li>
              <li><a href="/solutions#data-analytics" className="text-white/70 hover:text-white text-sm transition-colors block">Data Analytics & Decision Support</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/company#about" className="text-white/70 hover:text-white text-sm transition-colors block">About Us</a></li>
              <li><a href="/company#blog" className="text-white/70 hover:text-white text-sm transition-colors block">Blog</a></li>
              <li><a href="/company#careers" className="text-white/70 hover:text-white text-sm transition-colors block">Careers</a></li>
              <li><a href="/company#contact" className="text-white/70 hover:text-white text-sm transition-colors block">Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/resources#documentation" className="text-white/70 hover:text-white text-sm transition-colors block">Documentation</a></li>
              <li><a href="/resources#case-studies" className="text-white/70 hover:text-white text-sm transition-colors block">Case Studies</a></li>
              <li><a href="/resources#webinars" className="text-white/70 hover:text-white text-sm transition-colors block">Webinars</a></li>
              <li><a href="/resources#faq" className="text-white/70 hover:text-white text-sm transition-colors block">FAQ</a></li>
            </ul>
          </div>
          

        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            {new Date().getFullYear()} Advantix AGI LLP. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-white/50 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2 text-white/30">|</span>
            <a href="/terms-of-service" className="text-white/50 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
