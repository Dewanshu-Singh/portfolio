import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Scene from './components/Scene';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Smooth custom cursor physics
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const outlineX = useMotionValue(-100);
  const outlineY = useMotionValue(-100);
  const outlineSpringConfig = { damping: 20, stiffness: 100 };
  const outlineXSpring = useSpring(outlineX, outlineSpringConfig);
  const outlineYSpring = useSpring(outlineY, outlineSpringConfig);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 4); // Offset for center
      cursorY.set(e.clientY - 4);
      outlineX.set(e.clientX - 20); // Offset for center
      outlineY.set(e.clientY - 20);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [isMobile, cursorX, cursorY, outlineX, outlineY]);

  return (
    <div className="app">
      {/* Global Animated 3D Background */}
      <div className="global-canvas">
        <Scene />
      </div>

      {!isMobile && (
        <>
          <motion.div
            className="cursor-dot"
            style={{ x: cursorXSpring, y: cursorYSpring }}
          />
          <motion.div
            className="cursor-outline"
            style={{ x: outlineXSpring, y: outlineYSpring }}
          />
        </>
      )}

      <Navbar />

      <main>
        <Hero />
        <Resume />
        <Portfolio />
        <Contact />
      </main>

      <footer className="footer" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '40px 0', marginTop: '60px', position: 'relative', zIndex: 10 }}>
        <div className="container footer-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="footer-brand">
            <p className="footer-tagline" style={{ color: 'var(--text-muted)' }}>Designing solutions, coding experiences.</p>
          </div>
          <div className="footer-copy" style={{ color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} Dewanshu Kumar Singh. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
