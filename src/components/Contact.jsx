import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
  };

  const form = useRef();
  const [status, setStatus] = useState('idle');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Make sure to replace these with your actual EmailJS credentials!
    const SERVICE_ID = 'service_ixhpybc';
    const TEMPLATE_ID = 'template_oa0nigu';
    const PUBLIC_KEY = '6qw_gyK-jBTrqT9JI';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus('idle'), 5000); // Reset button text after 5s
      }, (error) => {
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section id="contact" style={{ padding: '140px 0', position: 'relative' }}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Contact <span className="text-gradient">Me</span></h2>
        </motion.div>

        <div className="contact-grid">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 variants={itemVariants} className="contact-heading" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '20px' }}>
              Let's build something <span className="text-gradient">incredible.</span>
            </motion.h3>
            <motion.p variants={itemVariants} className="contact-subtext" style={{ fontSize: '1.2rem', marginBottom: '50px' }}>
              Feel free to reach out for collaborations, job opportunities, or just a friendly hello.
            </motion.p>
            
            <div className="contact-cards">
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 10 }}
                className="contact-card-item glass-panel"
              >
                <div className="card-icon-box">@</div>
                <div className="card-detail">
                  <a href="mailto:dewanshukr180@gmail.com" className="card-value" style={{ fontSize: '1.2rem' }}>dewanshukr180@gmail.com</a>
                </div>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 10 }}
                className="contact-card-item glass-panel"
                style={{ transitionDelay: '0.1s' }}
              >
                <div className="card-icon-box">#</div>
                <div className="card-detail">
                  <a href="tel:6203727639" className="card-value" style={{ fontSize: '1.2rem' }}>6203727639</a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="animated-border"
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="contact-form-container glass-panel" style={{ padding: '50px', height: '100%' }}>
              <form ref={form} className="contact-form" onSubmit={sendEmail}>
                <motion.div 
                  className="form-group-row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
                    <input type="text" name="user_name" className="form-input" placeholder="Name" required />
                  </div>
                  <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
                    <input type="email" name="user_email" className="form-input" placeholder="Email" required />
                  </div>
                </motion.div>
                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <input type="text" name="subject" className="form-input" placeholder="Subject" required />
                </motion.div>
                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <textarea name="message" className="form-textarea" rows="6" placeholder="Message" required></textarea>
                </motion.div>
                <motion.button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="btn-primary" 
                  style={{ width: '100%', padding: '18px', fontSize: '1.1rem', opacity: status === 'sending' ? 0.7 : 1 }}
                  whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
                  whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span>
                    {status === 'idle' && 'Send Message'}
                    {status === 'sending' && 'Sending...'}
                    {status === 'success' && 'Message Sent! ✓'}
                    {status === 'error' && 'Failed to Send ✗'}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
