import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, TrendingDown } from 'lucide-react';

const Hero = () => {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Anti-gravity floating animation for the badges
  const floatAnimation = {
    y: [0, -8, 0],
    transition: { 
      duration: 3, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }
  };

  return (
    <div className="hero">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container"
      >
        <h1>Track Carbon</h1>
        <h1>Take Action</h1>
        <h1>Create Impact</h1>
        <p>
          Understand how your everyday actions impact the planet.
          Track, reduce, and offset your carbon footprint in seconds.
        </p>
        
        <button onClick={scrollToCalculator} className="btn-primary">
          Start Calculation
        </button>

        {/* Anti-Gravity Highlight Badges */}
        <motion.div 
          className="hero-badges"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.span className="badge" animate={floatAnimation}>
            <Zap size={16} /> Instant Results
          </motion.span>
          
          <motion.span className="badge" animate={floatAnimation} style={{ animationDelay: '0.2s' }}>
            <Globe size={16} /> Beginner Friendly
          </motion.span>
          
          <motion.span className="badge" animate={floatAnimation} style={{ animationDelay: '0.4s' }}>
            <TrendingDown size={16} /> Reduce CO₂ Daily
          </motion.span>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Hero;