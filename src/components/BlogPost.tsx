import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageColor?: string;
  delay?: number;
}

const BlogPost: React.FC<BlogPostProps> = ({ 
  title, 
  excerpt, 
  date, 
  category, 
  imageColor = "from-neon-purple/20 to-neon-blue/20", 
  delay = 0 
}) => {
  const getImageUrl = (index: number) => {
    const images = [
      'photo-1488590528505-98d2b5aba04b',
      'photo-1518770660439-4636190af475',
      'photo-1461749280684-dccba630e2f6',
      'photo-1526374965328-7f61d4dc18c5',
      'photo-1531297484001-80022131f5a1',
      'photo-1487058792275-0ad4aaf24ca7'
    ];
    return `https://images.unsplash.com/${images[index % images.length]}?auto=format&fit=crop&w=800&q=80`;
  };

  return (
    <article 
      className="glass-card overflow-hidden flex flex-col h-full animate-on-scroll hover:shadow-lg hover:shadow-neon-purple/10 transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={getImageUrl(Math.floor(Math.random() * 6))} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${imageColor} mix-blend-overlay`}></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-xs font-medium text-neon-purple bg-neon-purple/10 px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-3 line-clamp-2">{title}</h3>
        <p className="text-white/70 text-sm flex-grow mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-auto">
          <span className="text-xs text-white/50">{date}</span>
          <Link 
            to={`/blog/${title.toLowerCase().replace(/ /g, '-')}`}
            className="text-neon-purple text-sm hover:text-neon-blue transition-colors font-medium"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
