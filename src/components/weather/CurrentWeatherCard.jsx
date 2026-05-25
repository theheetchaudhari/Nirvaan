import React from 'react';
import { Thermometer, Droplets, Wind, Eye, Compass, Sunrise } from 'lucide-react';

const CurrentWeatherCard = ({ weather }) => {
  if (!weather) return null;

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="w-card">
      <h3 className="w-card-title">
        <Thermometer size={24} /> Current Conditions
      </h3>
      <div className="current-stats-grid">
        <div className="stat-item">
          <span className="stat-label"><Thermometer size={16} /> Feels Like</span>
          <span className="stat-value">{Math.round(weather.main.feels_like)}°C</span>
        </div>
        <div className="stat-item">
          <span className="stat-label"><Droplets size={16} /> Humidity</span>
          <span className="stat-value">{weather.main.humidity}%</span>
        </div>
        <div className="stat-item">
          <span className="stat-label"><Wind size={16} /> Wind</span>
          <span className="stat-value">{weather.wind.speed} m/s</span>
        </div>
        <div className="stat-item">
          <span className="stat-label"><Compass size={16} /> Pressure</span>
          <span className="stat-value">{weather.main.pressure} hPa</span>
        </div>
        <div className="stat-item">
          <span className="stat-label"><Eye size={16} /> Visibility</span>
          <span className="stat-value">{(weather.visibility / 1000).toFixed(1)} km</span>
        </div>
        <div className="stat-item">
          <span className="stat-label"><Sunrise size={16} /> Sunrise</span>
          <span className="stat-value">{formatTime(weather.sys.sunrise)}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
