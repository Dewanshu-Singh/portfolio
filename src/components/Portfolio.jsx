import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projectsData = [
    {
      id: 1,
      title: "Mharoo Media - Company Website",
      category: "MERN Stack, SMTP, Node.js, TailwindCSS",
      image: "/Screenshot 2026-06-15 140144.png", 
      description: "End-to-end development of a professional business website for a media company. Integrated SMTP email server, server-side form validation, rate-limiting, and environment-based configuration for secure deployment.",
      tags: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS"],
      demo: "https://mharoomedia.com"
    },
    {
      id: 2,
      title: "Fest Hive - Event Management System",
      category: "Full Stack (MERN)",
      image: "/Screenshot 2026-06-15 140308.png",
      description: "A full-stack platform for event listings and ticket booking. Implemented atomic MongoDB operations to prevent race conditions and indexed fields to drastically improve API response times.",
      tags: ["MongoDB", "Express", "React", "TailwindCSS"],
      demo: "https://fest-hive-one.vercel.app"
    },
    {
      id: 3,
      title: "Job Search Web Application",
      category: "Frontend & API Integration",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=600",
      description: "A job discovery platform featuring role/location filtering via RapidAPI. Secured with Firebase Auth and Firestore rules, and applied request debouncing to reduce API calls by 20%.",
      tags: ["HTML/CSS", "JavaScript", "Firebase", "RapidAPI"],
      demo: "#"
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Showcase</span>
          <h2 className="section-title">Selected <span className="text-gradient">Projects</span></h2>
        </motion.div>

        <div className="projects-sticky-container">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="sticky-project-card"
              style={{
                '--index': index
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="sticky-project-media">
                <img src={project.image} alt={project.title} className="sticky-project-img" />
              </div>
              <div className="sticky-project-info">
                <span className="project-category" style={{ marginBottom: '10px', display: 'inline-block' }}>{project.category}</span>
                <h3 className="project-title" style={{ fontSize: '2rem', marginBottom: '20px' }}>{project.title}</h3>
                <p className="project-desc" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '30px', lineHeight: '1.8' }}>{project.description}</p>
                <div className="project-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: 'auto' }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="tag" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem', color: '#ccc' }}>{tag}</span>
                  ))}
                </div>
                {project.demo !== "#" && (
                  <div style={{ marginTop: '30px' }}>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ display: 'inline-block', textDecoration: 'none', padding: '10px 24px', fontSize: '1rem' }}
                    >
                      See My Project
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
