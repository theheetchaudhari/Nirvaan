import React from 'react';
import './WeatherBg.css';
import cloud1 from '../assets/cloud1.png';
import cloud2 from '../assets/cloud2.png';
import cloud3 from '../assets/cloud3.png';

export default function WeatherBg() {
  const clouds = [
    { id: 1, src: cloud1, top: '5%', scale: 1.5, duration: '45s', delay: '0s', opacity: 0.8 },
    { id: 2, src: cloud2, top: '25%', scale: 0.8, duration: '60s', delay: '-15s', opacity: 0.7 },
    { id: 3, src: cloud3, top: '45%', scale: 2.0, duration: '80s', delay: '-30s', opacity: 0.6 },
    { id: 4, src: cloud1, top: '65%', scale: 1.2, duration: '55s', delay: '-10s', opacity: 0.9 },
    { id: 5, src: cloud2, top: '85%', scale: 0.9, duration: '70s', delay: '-45s', opacity: 0.75 },
    { id: 6, src: cloud3, top: '15%', scale: 1.1, duration: '50s', delay: '-25s', opacity: 0.85 },
    { id: 7, src: cloud1, top: '35%', scale: 0.7, duration: '75s', delay: '-5s', opacity: 0.65 },
    { id: 8, src: cloud2, top: '55%', scale: 1.8, duration: '90s', delay: '-55s', opacity: 0.5 },
    { id: 9, src: cloud3, top: '75%', scale: 1.3, duration: '65s', delay: '-20s', opacity: 0.8 },
    { id: 10, src: cloud1, top: '90%', scale: 0.6, duration: '85s', delay: '-40s', opacity: 0.7 },
  ];

  return (
    <div className="weather-bg-container">
      {clouds.map((cloud) => (
        <img
          key={cloud.id}
          src={cloud.src}
          className="png-cloud"
          alt="cloud"
          style={{
            top: cloud.top,
            '--cloud-scale': cloud.scale,
            animationDuration: cloud.duration,
            animationDelay: cloud.delay,
            opacity: cloud.opacity,
          }}
        />
      ))}
    </div>
  );
}
