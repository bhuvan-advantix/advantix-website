
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import AgenticAISystems from "./pages/solutions/agentic-ai-systems";
import BusinessAutomation from "./pages/solutions/business-automation";
import ConsultingInsights from "./pages/solutions/consulting-insights";
import DataAnalytics from "./pages/solutions/data-analytics";
import ProcessOptimization from "./pages/solutions/process-optimization";
import TestPage from "./pages/solutions/test-page";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import { useEffect } from "react";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

// Scroll to top component to handle page navigation
const ScrollToTopOnNavigate = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Force animation refresh on route change
    setTimeout(() => {
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      animateElements?.forEach((el) => {
        el.classList.add('animate-active');
      });
    }, 100);
  }, [location.pathname]);
  
  return null;
};

const AppRoutes = () => {
  return (
    <>
      <ScrollToTopOnNavigate />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/solutions/agentic-ai-systems" element={<AgenticAISystems />} />
          <Route path="/solutions/business-automation" element={<BusinessAutomation />} />
          <Route path="/solutions/consulting-insights" element={<ConsultingInsights />} />
          <Route path="/solutions/data-analytics" element={<DataAnalytics />} />
          <Route path="/solutions/process-optimization" element={<ProcessOptimization />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/test-page" element={<TestPage />} />
          <Route path="/test-route" element={
            <div className="min-h-screen bg-gray-900 text-white p-8">
              <h1 className="text-4xl font-bold mb-4">Test Route</h1>
              <p>If you can see this, routing is working!</p>
              <p className="mt-4">
                <a href="/solutions/business-automation" className="text-blue-400 hover:underline">
                  Try Business Automation Page
                </a>
              </p>
            </div>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

const App = () => {
  console.log('App component rendered');
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppRoutes />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
