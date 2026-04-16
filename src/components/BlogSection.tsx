
import React, { useEffect, useRef } from 'react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  delay: number;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, date, category, delay }) => {
  return (
    <div 
      className="glass-card p-6 flex flex-col animate-on-scroll hover:shadow-lg hover:shadow-neon-purple/10 transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4">
        <span className="text-xs font-medium text-neon-purple bg-neon-purple/10 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/70 text-sm flex-grow mb-4">{excerpt}</p>
      <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-auto">
        <span className="text-xs text-white/50">{date}</span>
        <a 
          href="#" 
          className="text-neon-purple text-sm hover:text-neon-blue transition-colors font-medium"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
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
  
  const blogPosts = [
    {
      title: "How AI Agents Are Transforming Customer Service",
      excerpt: "Discover how AI-powered agents are revolutionizing customer interactions and support systems.",
      date: "Apr 18, 2025",
      category: "AI Trends",
      delay: 100
    },
    {
      title: "5 Ways Workflow Automation Saves You Money",
      excerpt: "Learn how implementing workflow automation can significantly reduce costs and improve efficiency.",
      date: "Apr 12, 2025",
      category: "Automation",
      delay: 200
    },
    {
      title: "The Future of Decision Making: AI-Assisted Intelligence",
      excerpt: "Explore how AI is enabling better, faster decisions through advanced data analysis.",
      date: "Apr 5, 2025",
      category: "Business Intelligence",
      delay: 300
    }
  ];
  
  return (
    <section id="blog" className="section-padding relative z-10" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <span className="text-neon-purple font-medium animate-on-scroll">Our Blog</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 animate-on-scroll">
              Latest Insights & News
            </h2>
          </div>
          <div className="animate-on-scroll">
            <a 
              href="#" 
              className="text-neon-purple hover:text-neon-blue transition-colors font-medium flex items-center"
            >
              View all articles
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogPost 
              key={index} 
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              category={post.category}
              delay={post.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
