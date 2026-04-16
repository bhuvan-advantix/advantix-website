
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Layout from '../components/Layout';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import Address from '../components/Address';

const About = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section id="hero" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 -z-10" />
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">
              Leading the <span className="text-gradient">AI Revolution</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advantix AGI LLP is on a mission to make AI technology accessible to businesses of all sizes. 
              Founded by experts in machine learning and business automation, we create solutions that transform how companies operate.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
        <AboutSection />
      </section>

      <section id="team" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5 -z-10" />
        <TeamSection />
      </section>

      <section id="story" className="py-20 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div className="space-y-6 glass p-8 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Advantix AGI began as a collaboration between AI researchers and business consultants who saw the potential for AI to revolutionize how small and medium businesses operate. Founded in 2025, our team combines expertise in machine learning, natural language processing, and business process automation.
                </p>
                <p>
                  What started as custom solutions for a handful of clients has grown into a comprehensive platform of AI tools that can be tailored to the needs of businesses across various industries. Our journey has been defined by a commitment to making cutting-edge AI technology accessible, practical, and impactful.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">
                Our Values
              </h2>
              
              <div className="glass border border-white/10 rounded-xl p-6 space-y-6">
                <div className="space-y-4">
                  <div className="glass p-6 rounded-xl border border-white/10">
                    <h3 className="font-bold text-xl mb-2 text-white">Innovation</h3>
                    <p className="text-muted-foreground">
                      We continuously explore new applications of AI to solve real-world business challenges. Our team stays at the forefront of AI research and development.
                    </p>
                  </div>
                  
                  <div className="glass p-6 rounded-xl border border-white/10">
                    <h3 className="font-bold text-xl mb-2 text-white">Excellence</h3>
                    <p className="text-muted-foreground">
                      We're committed to delivering the highest quality AI solutions with attention to detail and a focus on measurable results.
                    </p>
                  </div>
                  
                  <div className="glass p-6 rounded-xl border border-white/10">
                    <h3 className="font-bold text-xl mb-2 text-white">Integrity</h3>
                    <p className="text-muted-foreground">
                      We believe in ethical AI development and transparent business practices that build trust with our clients and partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="locations" className="py-20 relative bg-background/50">
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80 mb-4">
              Our Locations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With a global presence, we're bringing AI innovation to businesses around the world.
            </p>
          </motion.div>
          
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary/10 rounded-full text-primary mb-6">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6">Find Us Around the World</h3>
              <div className="w-full max-w-md">
                <Address />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
