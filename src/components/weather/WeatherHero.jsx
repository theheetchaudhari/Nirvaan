import React from 'react';
import { motion } from 'framer-motion';

const WeatherHero = ({ weather }) => {
  if (!weather) return null;

  const weatherInfo = weather.weather[0];
  const isNight = weatherInfo.icon.includes('n');
  const temp = Math.round(weather.main.temp);
  
  let bgGradient = 'linear-gradient(135deg, rgba(10,10,10,0.8), rgba(30,30,30,0.9))';

  if (weatherInfo.main === 'Clear' && !isNight) {
    bgGradient = 'linear-gradient(135deg, rgba(255, 200, 0, 0.2), rgba(255, 100, 0, 0.1))';
  } else if (weatherInfo.main === 'Clear' && isNight) {
    bgGradient = 'linear-gradient(135deg, rgba(10,10,40,0.8), rgba(0,0,20,0.9))';
  } else if (weatherInfo.main === 'Clouds') {
    bgGradient = 'linear-gradient(135deg, rgba(100,100,100,0.4), rgba(50,50,50,0.6))';
  } else if (weatherInfo.main === 'Rain' || weatherInfo.main === 'Drizzle') {
    bgGradient = 'linear-gradient(135deg, rgba(0,50,100,0.6), rgba(10,20,40,0.9))';
  } else if (weatherInfo.main === 'Thunderstorm') {
    bgGradient = 'linear-gradient(135deg, rgba(40,0,80,0.7), rgba(10,0,20,0.9))';
  }

  return (
    <motion.div 
      className="weather-hero"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ background: bgGradient }}
    >
      <div className="weather-hero-content">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          <img 
            src={`https://openweathermap.org/img/wn/${weatherInfo.icon}@4x.png`} 
            alt={weatherInfo.description}
            style={{ margin: '0 auto -1rem', filter: 'drop-shadow(0 0 15px rgba(57,255,20,0.5))', width: '120px', height: '120px' }}
          />
        </motion.div>
        
        <h1 className="weather-city">{weather.name}</h1>
        <div className="weather-temp-main">{temp}°C</div>
        <div className="weather-condition">{weatherInfo.description}</div>
      </div>
    </motion.div>
  );
};

export default WeatherHero;
