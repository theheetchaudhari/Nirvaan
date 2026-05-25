import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Zap, CloudOff } from 'lucide-react';

const ClimateImpactSection = () => {
  return (
    <div style={{ marginBottom: '4rem' }}>
      <h2 className="section-heading">How Weather Influences Carbon Emissions ?</h2>

      <div className="weather-grid-3">
        <motion.div className="impact-card" whileHover={{ y: -5 }}>
          <div className="impact-icon"><Zap size={32} /></div>
          <div>
            <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem', fontFamily: 'var(--font-ui)' }}>Temperature Extremes</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-sm)' }}>
              Hot weather drastically increases AC usage, while extreme cold increases heating demand. Both lead to higher fossil fuel consumption at power plants.
            </p>
          </div>
        </motion.div>

        <motion.div className="impact-card" whileHover={{ y: -5 }}>
          <div className="impact-icon"><CloudOff size={32} /></div>
          <div>
            <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem', fontFamily: 'var(--font-ui)' }}>Air Quality Links</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-sm)' }}>
              Poor AQI often reflects high local pollution from vehicles and industry. Stagnant weather can trap these emissions close to the ground.
            </p>
          </div>
        </motion.div>

        <motion.div className="impact-card" whileHover={{ y: -5 }}>
          <div className="impact-icon"><Factory size={32} /></div>
          <div>
            <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem', fontFamily: 'var(--font-ui)' }}>Climate Irregularities</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-sm)' }}>
              Unseasonable weather patterns are key indicators of global warming trends. Monitoring these helps understand the direct impact of global emissions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClimateImpactSection;
