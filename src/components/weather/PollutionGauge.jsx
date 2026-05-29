import React from 'react';
import { motion } from 'framer-motion';

const PollutionGauge = ({ aqi }) => {
  // AQI Mapping: 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor
  const colors = ['#3b82f6', '#eab308', '#f97316', '#ef4444', '#a855f7'];
  const labels = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];
  
  const aqiIndex = Math.max(0, Math.min(4, aqi - 1));
  const color = colors[aqiIndex];
  const label = labels[aqiIndex];
  
  const percentage = (aqi / 5) * 100;
  
  return (
    <div className="aqi-container">
      <div className="aqi-gauge">
        <svg viewBox="0 0 100 100" style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
          <motion.circle 
            cx="50" cy="50" r="45" fill="none" 
            stroke={color} 
            strokeWidth="10"
            strokeDasharray="283"
            strokeDashoffset="283"
            animate={{ strokeDashoffset: 283 - (283 * percentage) / 100 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="aqi-value" style={{ color }}>{aqi}</div>
      </div>
      <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color }}>{label} Air Quality</div>
    </div>
  );
};

export default PollutionGauge;
