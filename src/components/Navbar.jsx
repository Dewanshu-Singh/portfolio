import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#home" className="navbar-logo">
            DK<span className="text-gradient">S.</span>
          </a>
          
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#resume" className="nav-link">Experience</a>
            <a href="#portfolio" className="nav-link">Work</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <button className="mobile-toggle" onClick={toggleMenu} style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer', display: 'none' }}>
            ☰
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu glass-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ 
              position: 'fixed', top: '80px', left: 0, width: '100%', padding: '40px', 
              display: 'flex', flexDirection: 'column', gap: '20px', zIndex: 999 
            }}
          >
            <a href="#home" className="nav-link" onClick={toggleMenu}>Home</a>
            <a href="#resume" className="nav-link" onClick={toggleMenu}>Experience</a>
            <a href="#portfolio" className="nav-link" onClick={toggleMenu}>Work</a>
            <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
