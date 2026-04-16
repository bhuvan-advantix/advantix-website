import React, { useEffect, useRef, useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send, CheckCircle, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Address from './Address';


type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error || 'Server error');
      }

      toast({
        title: ' Message Sent!',
        description: `Thanks for reaching out, ${formData.name}! We'll get back to you shortly.`,
        variant: 'default',
      });

      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });

      setTimeout(() => setIsSubmitted(false), 4000);

    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        title: '❌ Failed to Send',
        description: error.message || 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-black" ref={sectionRef}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Have questions or ready to start your AI transformation? Reach out to our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 animate-on-scroll shadow-xl">
              <span className="text-neon-purple font-medium animate-on-scroll">Get to know us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 animate-on-scroll">
                Advantix AGI LLP
              </h2>
              <p className="mt-6 text-white/70 animate-on-scroll">
                At Advantix AGI LLP, we are on a mission to redefine business consulting with AI-driven intelligence. Founded with the vision of helping businesses leverage AI, we specialize in AI-powered consulting, intelligent automation, and strategic AI adoption.
              </p>
              <p className="mt-4 text-white/70 animate-on-scroll">
                Our expertise spans across AI strategy, automation workflows, AI agents, and business process optimization. We work closely with businesses to unlock new efficiencies, optimize operations, and drive AI transformation with the power of GenAI and automation tools.
              </p>
              <p className="mt-4 text-white/70 animate-on-scroll">
                With a commitment to innovation and a future-ready approach, we ensure businesses stay ahead of the curve in the AI era.
              </p>

              <div className="mt-8 space-y-5 animate-on-scroll">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-neon-purple/10 rounded-lg text-neon-purple">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <a href="mailto:contact@advantixagi.com" className="text-white/70 text-sm hover:text-neon-purple transition-colors">
                      contact@advantixagi.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-neon-purple/10 rounded-lg text-neon-purple">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Our Locations</h3>
                    <div className="text-white/70 text-sm">
                      <Address />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-neon-purple/10 rounded-lg text-neon-purple">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <a href="tel:+16167887762" className="text-white/70 text-sm hover:text-neon-purple transition-colors">
                      +1 (616) 788-7762 
                    </a>
                    <br />
                    <a href="tel:+917305266608" className="text-white/70 text-sm hover:text-neon-purple transition-colors">
                      +91 73052 66608
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <div>
                   <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-3 rounded-md btn-gradient text-white font-semibold hover:shadow-lg hover:shadow-neon-purple/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                    ) : isSubmitted ? (
                      <><CheckCircle className="w-4 h-4" /> Sent!</>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Message</>
                    )}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Info - Shown on mobile, hidden on larger screens where 3D model is visible */}
            <div className="lg:hidden bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 animate-on-scroll">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-neon-purple/10 rounded-lg text-neon-purple">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Email Us</h3>
                    <a href="mailto:contact@advantixagi.com" className="text-white/70 text-sm hover:text-neon-purple transition-colors">
                      contact@advantixagi.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-neon-purple/10 rounded-lg text-neon-purple">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Our Locations</h3>
                    <div className="text-white/70 text-sm">
                      <Address />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
