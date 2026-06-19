import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = ["Dewanshu Kumar Singh", "a Web Developer", "a Software Engineer"];
  const typingSpeed = 150;
  const deletingSpeed = 75;
  const pauseDuration = 2000;

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      // Deleting character
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, deletingSpeed);
    } else {
      // Typing character
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, typingSpeed);
    }

    // Finished typing
    if (!isDeleting && charIndex === currentRole.length) {
      clearTimeout(timer);
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } 
    // Finished deleting
    else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid container">
        {/* Left Side: Developer Info */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          <motion.h3 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hi There!
          </motion.h3>
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            I am <span className="typing-cursor text-gradient">{typedText}</span>
          </motion.h1>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Full-Stack Developer (MERN) with experience building and deploying production-grade web applications. Delivered client-facing websites with RESTful APIs, SMTP integrations, and responsive UIs. Strong in Data Structures, Algorithms, and core CS. Writes clean, maintainable code and ships reliable products.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button className="btn-primary" onClick={handleContactClick}>
              <span>Contact Me</span>
            </button>
          </motion.div>

          {/* Contact Details at the bottom of the section */}
          <motion.div 
            className="hero-contact-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <div className="contact-footer-item">
              <span className="contact-footer-label">Email</span>
              <a href="mailto:dewanshukr180@gmail.com" className="contact-footer-value">
                dewanshukr180@gmail.com
              </a>
            </div>
            <div className="contact-footer-divider"></div>
            <div className="contact-footer-item">
              <span className="contact-footer-label">Phone</span>
              <a href="tel:6203727639" className="contact-footer-value">
                6203727639
              </a>
            </div>
            <div className="contact-footer-divider"></div>
            <div className="contact-footer-item">
              <span className="contact-footer-label">Location</span>
              <span className="contact-footer-value">Jaipur, India</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Large Monochrome Profile Photo */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="profile-image-container">
            <img 
              src="/WhatsApp Image 2026-05-19 at 21.58.07.jpeg" 
              alt="Dewanshu Kumar Singh" 
              className="profile-img"
            />
            {/* Hover Animated Icons */}
            <img src="/icons8-react-native.gif" alt="React Native" className="floating-icon icon-1" />
            <img src="/icons8-javascript.gif" alt="JavaScript" className="floating-icon icon-2" />
            <img src="/icons8-developer.gif" alt="Developer" className="floating-icon icon-3" />
            <img src="/icons8-code.gif" alt="Code" className="floating-icon icon-4" />
          </div>
        </motion.div>
      </div>

      {/* Floating Mouse Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse-icon">
          <div className="mouse-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
