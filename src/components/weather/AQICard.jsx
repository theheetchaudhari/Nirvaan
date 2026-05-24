import React from 'react';
import { Wind } from 'lucide-react';
import PollutionGauge from './PollutionGauge';

const AQICard = ({ aqiData }) => {
  if (!aqiData || !aqiData.list || aqiData.list.length === 0) return null;

  const data = aqiData.list[0];
  const aqi = data.main.aqi;
  const components = data.components;

  return (
    <div className="w-card">
      <h3 className="w-card-title">
        <Wind size={24} /> Air Quality Index
      </h3>
      
      <PollutionGauge aqi={aqi} />
      
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
