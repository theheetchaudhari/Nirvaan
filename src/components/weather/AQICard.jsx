import React from 'react';
import { Wind } from 'lucide-react';
import PollutionGauge from './PollutionGauge';

const AQICard = ({ aqi }) => {
  if (!aqi || !aqi.list || aqi.list.length === 0) return null;

  const data = aqi.list[0];
  const aqiValue = data.main.aqi;
  const components = data.components;

  const getAqiLabel = (val) => {
    switch(val) {
      case 1: return 'Good';
      case 2: return 'Fair';
      case 3: return 'Moderate';
      case 4: return 'Poor';
      case 5: return 'Very Poor';
      default: return 'Unknown';
    }
  };

  return (
    <div className="w-card">
      <h3 className="w-card-title">
        <Wind size={24} /> Air Quality Index
      </h3>
      
      <PollutionGauge aqi={aqiValue} />
      
      <div className="pollutants-grid">
        <div className="pollutant-item">
          <div className="pollutant-label">PM2.5</div>
          <div className="pollutant-val">{components.pm2_5}</div>
        </div>
        <div className="pollutant-item">
          <div className="pollutant-label">PM10</div>
          <div className="pollutant-val">{components.pm10}</div>
        </div>
        <div className="pollutant-item">
          <div className="pollutant-label">NO₂</div>
          <div className="pollutant-val">{components.no2}</div>
        </div>
        <div className="pollutant-item">
          <div className="pollutant-label">O₃</div>
          <div className="pollutant-val">{components.o3 || '--'}</div>
        </div>
        <div className="pollutant-item">
          <div className="pollutant-label">CO</div>
          <div className="pollutant-val">{components.co}</div>
        </div>
        <div className="pollutant-item">
          <div className="pollutant-label">SO₂</div>
          <div className="pollutant-val">{components.so2}</div>
        </div>
      </div>
    </div>
  );
};

export default AQICard;
