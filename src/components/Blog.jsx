import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogsData = [
    {
      id: 1,
      title: "Mastering CSS Grid and Flexbox Combinations",
      category: "CSS / Layout",
      date: "May 15, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600",
      description: "Learn how to build complex, responsive page layouts by nesting CSS Grid and Flexbox systems effectively."
    },
    {
      id: 2,
      title: "Deep Dive into React Server Components",
      category: "React / Core",
      date: "May 02, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600",
      description: "Understanding RSCs: how they work under the hood, how they improve performance, and when to use them."
    },
    {
      id: 3,
      title: "Design System Guidelines for Developers",
      category: "UI/UX Design",
      date: "Apr 20, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=600",
      description: "A developer's checklist for transforming designer assets into reusable components with clean tokens."
    }
  ];

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Insights</span>
          <h2 className="section-title">Latest Articles</h2>
        </div>

        <div className="blog-grid">
          {blogsData.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-media">
                <img src={post.image} alt={post.title} className="blog-img" />
                <span className="blog-category-badge">{post.category}</span>
              </div>
              <div className="blog-info">
                <div className="blog-meta">
                  <span className="blog-meta-item">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="blog-meta-item">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="blog-title">
                  <a href="#blog">{post.title}</a>
                </h3>
                <p className="blog-desc">{post.description}</p>
                <a href="#blog" className="blog-read-more">
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
