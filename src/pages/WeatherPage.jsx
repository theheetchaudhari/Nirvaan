import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../services/weatherApi';
import WeatherHero from '../components/weather/WeatherHero';
import CurrentWeatherCard from '../components/weather/CurrentWeatherCard';
import AQICard from '../components/weather/AQICard';
import ForecastSection from '../components/weather/ForecastSection';
import ClimateImpactSection from '../components/weather/ClimateImpactSection';
import EcoRecommendationSection from '../components/weather/EcoRecommendationSection';
import SustainabilityInsights from '../components/weather/SustainabilityInsights';
import WeatherCharts from '../components/weather/WeatherCharts';
import { useNavigate } from 'react-router-dom';
import '../styles/Weather.css';

const WeatherPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);

    const loadData = async (lat = null, lon = null) => {
      try {
        setLoading(true);
        const result = await fetchWeatherData(lat, lon);
        setData(result);
      } catch (err) {
        setError('Failed to load weather data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          loadData(position.coords.latitude, position.coords.longitude);
        },
        (err) => {
          console.log("Geolocation denied or failed, using fallback city", err);
          loadData(); // Fallback handles the default city
        }
      );
    } else {
      loadData();
    }
  }, []);

  if (loading) {
    return (
      <div className="weather-page container weather-loading">
        <div className="spinner"></div>
        <p>Analyzing Environmental Data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="weather-page container" style={{ paddingTop: '5rem', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--eco-main)' }}>{error}</h2>
      </div>
    );
  }

  return (
    <div className="weather-page container" style={{ paddingTop: '2rem' }}>
      <WeatherHero current={data?.current} />
      
      <div className="weather-grid-2">
        <CurrentWeatherCard current={data?.current} />
        <AQICard aqiData={data?.aqi} />
      </div>

      <ForecastSection forecast={data?.forecast} />
      <ClimateImpactSection />
      <EcoRecommendationSection current={data?.current} aqiData={data?.aqi} />
      <WeatherCharts forecast={data?.forecast} />
      <SustainabilityInsights />

      <div className="weather-cta">
        <h2>Small environmental actions create long-term climate impact.</h2>
        <button className="btn-primary" onClick={() => navigate('/')}>
          Calculate Carbon Footprint
        </button>
      </div>
    </div>
  );
};

export default WeatherPage;
