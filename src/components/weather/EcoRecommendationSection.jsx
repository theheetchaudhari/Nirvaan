import React from 'react';
import { Leaf, AlertTriangle, CloudRain, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const EcoRecommendationSection = ({ weather, aqi }) => {
  if (!weather || !aqi || !aqi.list) return null;

  const temp = weather.main?.temp || 0;
  const aqiVal = aqi.list[0]?.main?.aqi || 1;
  const weatherMain = weather.weather?.[0]?.main;
  const isRaining = weatherMain === 'Rain' || weatherMain === 'Drizzle';
  
  const recommendations = [];

  if (temp > 35) {
    recommendations.push({
      icon: <Sun size={24} />,
      title: 'High Temperature Alert',
      text: 'Reduce AC usage to lower indirect CO₂ emissions.'
    });
  }
  
  if (aqiVal <= 2) {
    recommendations.push({
      icon: <Leaf size={24} />,
      title: 'Optimal Conditions',
      text: 'Good air quality detected. Prefer cycling or walking.'
    });
  }

  if (aqiVal >= 4) {
    recommendations.push({
      icon: <AlertTriangle size={24} />,
      title: 'Poor Air Quality',
      text: 'Avoid unnecessary vehicle emissions today.'
    });
  }

  if (isRaining) {
    recommendations.push({
      icon: <CloudRain size={24} />,
      title: 'Rain Forecast',
      text: 'Use public transport during rainfall to reduce congestion emissions.'
    });
  }

  if (recommendations.length === 0) {
    recommendations.push({
      icon: <Leaf size={24} />,
      title: 'Good Environmental Baseline',
      text: 'No extreme conditions today. A great day to maintain your usual low-carbon routines.'
    });
  }

  return (
    <div style={{ marginBottom: '4rem' }}>
      <h2 className="section-heading">Smart Eco <span style={{ color: '#ffffff' }}>Recommendations</span></h2>
      <div className="weather-grid-2">
        {recommendations.map((rec, i) => (
          <motion.div key={i} className="w-card eco-rec-card" whileHover={{ scale: 1.02 }}>
            <div className="rec-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {rec.icon}
              {rec.title}
            </div>
            <p style={{ color: 'var(--text-muted)' }}>{rec.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EcoRecommendationSection;
