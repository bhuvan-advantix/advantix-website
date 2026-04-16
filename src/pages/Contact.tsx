
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, Send, Loader2, CheckCircle } from 'lucide-react';
import Address from '../components/Address';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: 'Missing fields', description: 'Please fill in Name, Email and Message.', variant: 'destructive' });
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Server error');

      toast({
        title: '✅ Message Sent!',
        description: `Thanks for reaching out, ${formData.name}! We'll get back to you within 24–48 hours.`,
        variant: 'default',
      });
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (err: any) {
      toast({ title: '❌ Failed to Send', description: err.message || 'Something went wrong. Please try again.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-neon-purple font-medium animate-on-scroll">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 animate-on-scroll">
              Contact <span className="text-gradient">Advantix AGI</span>
            </h1>
            <p className="mt-6 text-white/70 animate-on-scroll">
              Have questions about our AI solutions? Ready to transform your business with intelligent automation? 
              Our team is here to help you navigate the world of AI.
            </p>
          </div>
          
          <div className="glass-card p-6 md:p-10 animate-on-scroll my-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">How to Reach Us</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-neon-purple/10 text-neon-purple rounded-lg">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:contact@advantixagi.com" className="text-white/70 text-sm hover:text-neon-purple transition-colors">
                        contact@advantixagi.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-neon-purple/10 rounded-lg text-neon-purple">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium">US Number</h3>
                        <a href="tel:+16167887762" className="text-white/70 text-sm hover:text-neon-purple transition-colors block">
                          +1 (616) 788-7762
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-neon-purple/10 rounded-lg text-neon-purple">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium">India Number</h3>
                        <a href="tel:+917305266608" className="text-white/70 text-sm hover:text-neon-purple transition-colors block">
                          +91 73052 66608
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-neon-purple/10 rounded-lg text-neon-purple">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Locations</h3>
                      <div className="text-white/70 text-sm">
                        <Address />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-xl font-medium mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://x.com/AdvantixAGI" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white/70 hover:text-neon-purple transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61574081425136" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white/70 hover:text-neon-purple transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/advantix-agi-579210359/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white/70 hover:text-neon-purple transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              

              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50" placeholder="Your Name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50" placeholder="Your Company" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50" placeholder="How can we help you?"></textarea>
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
