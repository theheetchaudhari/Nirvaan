import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

const TipsCard = ({ tips }) => {
  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <div className="tips-header">
        <Lightbulb size={20} color="#eab308" />
        <h3 style={{ color: '#ffffff', fontSize: 'var(--fs-2xl)' }}>Actionable Tips</h3>
      </div>
      <ul className="tips-list">
        {tips.map((tip, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + (index * 0.1) }}
          >
            <span className="tip-bullet">•</span>
            <span>{tip}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TipsCard;