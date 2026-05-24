import React from 'react';
import { Leaf, AlertTriangle, CloudRain, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const EcoRecommendationSection = ({ current, aqiData }) => {
  if (!current || !aqiData || !aqiData.list) return null;

  const temp = current.main.temp;
  const aqi = aqiData.list[0].main.aqi;
  const isRaining = current.weather[0].main === 'Rain' || current.weather[0].main === 'Drizzle';
  
  const recommendations = [];

  // Logic based on requirements
  if (temp > 28) {
    recommendations.push({
      icon: <Sun size={24} />,
      title: 'High Temperature Alert',
      text: 'Reduce AC dependency by using ventilation during cooler hours (early morning/late evening).'
    });
  } else if (temp > 18 && temp <= 25 && aqi <= 2) {
    recommendations.push({
      icon: <Leaf size={24} />,
      title: 'Optimal Conditions',
      text: 'Excellent conditions for cycling or walking instead of driving.'
    });
  }

  if (aqi >= 4) {
    recommendations.push({
      icon: <AlertTriangle size={24} />,
      title: 'Poor Air Quality',
      text: 'Avoid unnecessary vehicle emissions today. Consider working remotely if possible to reduce local pollution.'
    });
  }

  if (isRaining) {
    recommendations.push({
      icon: <CloudRain size={24} />,
      title: 'Rain Forecast',
      text: 'Prefer public transportation to reduce congestion emissions, as rain slows traffic.'
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
      <h2 className="section-heading">Smart Eco Recommendations</h2>
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
