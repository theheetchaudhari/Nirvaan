import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Globe, Users, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-minimal container">
      <motion.div 
        className="contact-minimal-header"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Contact Us</h2>
        <p>we'd love to hear from you</p>
      </motion.div>

      <div className="contact-minimal-grid">
        <motion.div 
          className="contact-minimal-info"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="minimal-links">
            <a href="#"><Mail size={18} /> email</a>
            <a href="#"><Users size={18} /> linkedin</a>
            <a href="#"><MessageCircle size={18} /> twitter</a>
            <a href="#"><Globe size={18} /> instagram</a>
          </div>
        </motion.div>

        <motion.div 
          className="contact-minimal-form"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="name" required />
            <input type="email" placeholder="email" required />
            <textarea placeholder="message..." rows="3" required></textarea>
            <button type="submit"><Send size={16} /> send</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;