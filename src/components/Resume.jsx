import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  const experiences = [
    {
      year: "May 2024 - Present",
      role: "Full Stack Developer",
      org: "Mharoo Media, On-site",
      desc: "Designed, developed, and deployed 3 production websites. Built mharoomedia.com using the MERN stack. Integrated SMTP-based email server and RESTful APIs. Optimized performance with lazy loading.",
    },
    {
      year: "Aug 2023 - Nov 2023",
      role: "Software Developer Intern",
      org: "AI4SEE Pvt. Ltd., Remote",
      desc: "Built modular UI components in React.js. Optimized frontend performance by reducing API calls. Integrated backend services via RESTful APIs and participated in code reviews.",
    },
    {
      year: "2022 - 2026",
      role: "B.Tech in Computer Science Engineering",
      org: "JECRC University, Jaipur (CGPA: 8.2)",
      desc: "Smart India Hackathon Finalist (Top 50 nationwide). Chapter Lead at Dev-Crest Coding Community.",
    }
  ];

  const skills = [
    { cat: "Languages", items: ["C++", "Java", "Python", "JavaScript (ES6+)"] },
    { cat: "Frontend", items: ["React.js", "Next.js", "HTML5/CSS3", "TailwindCSS"] },
    { cat: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth"] },
    { cat: "Databases", items: ["MongoDB", "MySQL", "SQL", "Firebase Firestore"] },
    { cat: "Tools & Core CS", items: ["Git/GitHub", "Vercel/Netlify", "Postman", "DSA", "DBMS", "OS"] }
  ];

  const card3DStyle = {
    height: '100%',
    background: 'rgba(20, 20, 25, 0.15)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
    borderRight: '1px solid rgba(0, 0, 0, 0.5)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
    borderRadius: '16px',
    position: 'relative',
    overflow: 'hidden'
  };

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Experience</span>
          <h2 className="section-title">My <span className="text-gradient">Journey</span></h2>
        </motion.div>

        <div className="resume-grid">
          {/* Left Panel: Timeline */}
          <motion.div 
            className="resume-panel"
            style={card3DStyle}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 style={{ marginBottom: '40px', fontSize: '2rem' }} className="text-gradient">Timeline</h3>
            <div className="timeline">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx} 
                  className="timeline-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-dot"></div>
                  <span className="timeline-year">{exp.year}</span>
                  <h4 className="timeline-role">{exp.role}</h4>
                  <p className="timeline-org">{exp.org}</p>
                  <p style={{ color: 'var(--text-secondary)' }}>{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Panel: Skills */}
          <motion.div 
            className="resume-panel"
            style={card3DStyle}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 style={{ marginBottom: '40px', fontSize: '2rem' }} className="text-gradient">Skill Arsenal</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {skills.map((skillGroup, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '16px', fontSize: '1.2rem', fontWeight: '800' }}>{skillGroup.cat}</h4>
                  <div className="skill-badges-list">
                    {skillGroup.items.map((skill, i) => (
                      <span key={i} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
