
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';
import ScrollToTop from './ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

// Global variable to track if the footer has been mounted
let footerMounted = false;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const mainContentId = React.useId();
  const [showFooter, setShowFooter] = React.useState(false);
  
  // Ensure the footer is only rendered once
  React.useEffect(() => {
    if (!footerMounted) {
      footerMounted = true;
      setShowFooter(true);
      
      return () => {
        footerMounted = false;
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <main id={mainContentId} className="pt-20">
        {children}
      </main>
      {showFooter && <Footer key="main-footer" />}
      <ScrollToTop />
    </div>
  );
};

export default Layout;
