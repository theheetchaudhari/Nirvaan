import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Globe, Users, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [nextUrl, setNextUrl] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Generate the next URL with a success parameter to return to this page smoothly without a blank screen
    setNextUrl(window.location.origin + window.location.pathname + '?success=true#contact');
    
    // Check if we just returned from a successful submission
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === 'true') {
      setIsSuccess(true);
      // Clean up the URL to remove the query parameter
      window.history.replaceState(null, '', window.location.pathname + '#contact');
    }
  }, []);

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
            <a href="mailto:nirvaan.earthlab@gmail.com"><Mail size={18} />nirvaan.earthlab@gmail.com</a>
            <a href="https://www.linkedin.com/in/nirvaanearthlab" target="_blank" rel="noopener noreferrer"><Users size={18} />nirvaanearthlab</a>
            <a href="https://x.com/NirvaanEarthlab" target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />NirvaanEarthlab</a>
            <a href="https://www.instagram.com/nirvaan.earthlab/" target="_blank" rel="noopener noreferrer"><Globe size={18} />nirvaan.earthlab</a>
          </div>
        </motion.div>
        <motion.div 
          className="contact-minimal-form"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {isSuccess ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#d4d4d4' }}>Thank You! 🌱</h3>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: '#a3a3a3' }}>Your message has been sent successfully.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                style={{ margin: '0 auto' }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form action="https://formsubmit.co/nirvaan.earthlab@gmail.com" method="POST">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Message from Nirvaan 🌱" />
              <input type="hidden" name="_next" value={nextUrl} />
              
              <input type="text" name="name" placeholder="name" required />
              <input type="email" name="email" placeholder="email" required />
              <textarea name="message" placeholder="message..." rows="3" required></textarea>
              
              <button type="submit">
                <Send size={16} /> send
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;