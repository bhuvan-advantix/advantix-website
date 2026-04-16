import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import BlogPost from '../components/BlogPost';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      title: "What Are AI Agents and Why Every Business Will Use One by 2026",
      excerpt: "AI agents are becoming essential tools for businesses, offering unprecedented automation capabilities. This post explores how these intelligent assistants are revolutionizing operations across industries and why early adoption provides a strategic advantage. Learn about real-world applications and implementation strategies.",
      date: "Apr 22, 2025",
      category: "AI Trends",
      imageColor: "from-neon-purple/30 to-neon-blue/30"
    },
    {
      title: "5 Ways Workflow Automation Saves You Money and Time",
      excerpt: "Discover the transformative power of AI-driven workflow automation. From reducing operational costs to eliminating human error, we examine how intelligent automation is helping businesses achieve remarkable efficiency gains. Learn practical steps to implement automation in your organization.",
      date: "Apr 18, 2025",
      category: "Automation",
      imageColor: "from-neon-blue/30 to-neon-teal/30"
    },
    {
      title: "The Future of Decision Making: AI-Assisted Intelligence",
      excerpt: "Explore how AI is revolutionizing business decision-making through advanced analytics and predictive modeling. We discuss how AI-assisted intelligence tools are helping leaders make more informed choices and stay ahead of market trends.",
      date: "Apr 15, 2025",
      category: "Business Intelligence",
      imageColor: "from-neon-teal/30 to-neon-purple/30"
    },
    {
      title: "How Small Businesses Are Leveraging AI to Compete with Enterprises",
      excerpt: "Learn how AI is leveling the playing field for small businesses. Through case studies and practical examples, we show how smaller organizations are using AI tools to enhance their operations, improve customer service, and compete effectively against larger competitors.",
      date: "Apr 10, 2025",
      category: "Small Business",
      imageColor: "from-neon-purple/30 to-neon-teal/30"
    },
    {
      title: "The Ethics of AI Automation: Balancing Efficiency and Humanity",
      excerpt: "A deep dive into the ethical considerations of implementing AI automation in business. We explore how to balance technological advancement with human values, ensure responsible AI deployment, and maintain ethical standards while driving innovation.",
      date: "Apr 5, 2025",
      category: "AI Ethics",
      imageColor: "from-neon-blue/30 to-neon-purple/30"
    },
    {
      title: "Content Generation with AI: Best Practices for Authentic Marketing",
      excerpt: "Master the art of AI-powered content creation while maintaining your brand's authentic voice. We share proven strategies for leveraging AI in content marketing, including tips for quality control, brand consistency, and engaging storytelling.",
      date: "Mar 30, 2025",
      category: "Content Marketing",
      imageColor: "from-neon-teal/30 to-neon-blue/30"
    }
  ];

  return (
    <Layout>
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-neon-purple font-medium animate-on-scroll">Our Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 animate-on-scroll">
              Latest Insights & <span className="text-gradient">Trends</span>
            </h1>
            <p className="mt-6 text-white/70 animate-on-scroll">
              Stay up to date with the latest developments in AI technology, business automation, and industry insights through our regularly updated blog.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {blogPosts.map((post, index) => (
              <BlogPost
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                imageColor={post.imageColor}
                delay={index * 100}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <button className="px-8 py-3 rounded-md bg-white/5 border border-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-all duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
