import React from 'react';
import { motion } from 'framer-motion';
import { TreePine } from 'lucide-react';

const TreeCard = ({ trees }) => {
  return (
    <motion.div 
      className="card tree-card"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <div>
        <h3 style={{ color: 'var(--eco-darker)', marginBottom: '0.25rem' }}>Offset Required</h3>
        <p style={{ color: 'var(--eco-dark)', fontSize: '0.875rem' }}>Trees needed to absorb your daily CO₂ emissions.</p>
      </div>
      <div className="tree-number-box">
        <TreePine size={32} color="var(--eco-dark)" style={{ margin: '0 auto' }} />
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-main)' }}>{trees}</span>
      </div>
    </motion.div>
  );
};

export default TreeCard;