import React from 'react';
import { motion } from 'framer-motion';
import { CloudRain } from 'lucide-react';

const ResultCard = ({ total, rating }) => {
  return (
    <motion.div 
      className="card result-card" 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <CloudRain size={40} color="var(--text-muted)" style={{ marginBottom: '0.5rem' }} />
      <h3 style={{ color: '#ffffff', fontSize: 'var(--fs-2xl)', textTransform: 'uppercase' }}>Total Daily Emissions</h3>
      
      <div className="result-value">
        {total} <span className="result-unit">kg CO₂</span>
      </div>
      
      <div className={`rating-badge rating-${rating}`}>
        Impact Rating: {rating}
      </div>
    </motion.div>
  );
};

export default ResultCard;