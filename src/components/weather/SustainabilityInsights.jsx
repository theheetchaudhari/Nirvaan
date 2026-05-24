import React from 'react';
import { Lightbulb, Car, ThermometerSun } from 'lucide-react';
import { motion } from 'framer-motion';

const SustainabilityInsights = () => {
  const insights = [
    {
      icon: <ThermometerSun size={24} />,
      text: 'Reducing AC usage by just 2°C can lower your cooling carbon emissions by up to 10%.'
    },
    {
      icon: <Car size={24} />,
      text: 'Vehicle emissions directly affect AQI. Choosing public transit on poor AQI days helps prevent pollution spikes.'
    },
    {
      icon: <Lightbulb size={24} />,
      text: 'High temperatures increase urban electricity demand, often forcing power grids to use dirtier peak-plant energy sources.'
    }
  ];

  return (
    <div style={{ marginBottom: '4rem' }}>
      <h2 className="section-heading">Climate Insights</h2>
      <div className="weather-grid-3">
        {insights.map((insight, idx) => (
          <motion.div 
            key={idx} 
            className="w-card"
            whileHover={{ scale: 1.05 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{
              width: '60px', height: '60px', margin: '0 auto 1rem',
              background: 'rgba(57, 255, 20, 0.1)', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--eco-main)'
            }}>
              {insight.icon}
            </div>
            <p style={{ color: 'var(--text-main)', fontSize: 'var(--fs-md)', lineHeight: 1.6 }}>
              {insight.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SustainabilityInsights;
