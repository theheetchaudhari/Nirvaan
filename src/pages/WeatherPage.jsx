import React, { useState, useEffect } from 'react';
import { getCurrentWeather, getForecast, getAQI } from '../services/weatherApi';
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

const mockCurrentWeather = {
  name: 'Demo City (Waiting for API Key Activation)',
  main: { temp: 22, feels_like: 24, humidity: 65, pressure: 1012 },
  weather: [{ main: 'Clear', description: 'clear sky', icon: '01d' }],
  wind: { speed: 4.5 },
  visibility: 10000,
  sys: { sunrise: 1680000000, sunset: 1680050000 },
  coord: { lat: 40.7128, lon: -74.0060 }
};

const mockAQI = {
  list: [{
    main: { aqi: 2 },
    components: { pm2_5: 15, pm10: 25, co: 300, no2: 20, so2: 5 }
  }]
};

const mockForecast = {
  list: [
    { dt_txt: '2026-05-25 12:00:00', main: { temp: 20, temp_min: 15, temp_max: 22, humidity: 60 }, pop: 0.1, wind: { speed: 3 }, weather: [{ main: 'Clear', icon: '01d' }] },
    { dt_txt: '2026-05-26 12:00:00', main: { temp: 18, temp_min: 16, temp_max: 20, humidity: 70 }, pop: 0.5, wind: { speed: 5 }, weather: [{ main: 'Clouds', icon: '03d' }] },
    { dt_txt: '2026-05-27 12:00:00', main: { temp: 16, temp_min: 14, temp_max: 18, humidity: 80 }, pop: 0.8, wind: { speed: 6 }, weather: [{ main: 'Rain', icon: '09d' }] },
    { dt_txt: '2026-05-28 12:00:00', main: { temp: 22, temp_min: 12, temp_max: 24, humidity: 55 }, pop: 0, wind: { speed: 2 }, weather: [{ main: 'Clear', icon: '01d' }] },
    { dt_txt: '2026-05-29 12:00:00', main: { temp: 24, temp_min: 18, temp_max: 26, humidity: 65 }, pop: 0.2, wind: { speed: 4 }, weather: [{ main: 'Clouds', icon: '04d' }] },
  ]
};

const WeatherPage = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [aqi, setAqi] = useState(null);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);

    const loadData = async (lat, lon) => {
      try {
        setLoading(true);
        setError(null);
        
        // Single API fetch architecture with Promise.all
        const [weatherData, forecastData, aqiData] = await Promise.all([
          getCurrentWeather(lat, lon),
          getForecast(lat, lon),
          getAQI(lat, lon)
        ]);

        setWeather(weatherData);
        setForecast(forecastData);
        setAqi(aqiData);
      } catch (err) {
        console.error("API Error (Falling back to mock data):", err);
        // Fallback to mock data if API key is unactivated (401)
        setWeather(mockCurrentWeather);
        setForecast(mockForecast);
        setAqi(mockAQI);
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
          console.log("Geolocation denied or failed, using fallback coordinates", err);
          loadData(40.7128, -74.0060); // Default to New York
        }
      );
    } else {
      loadData(40.7128, -74.0060);
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
        <button className="btn-primary" style={{marginTop: '2rem'}} onClick={() => window.location.reload()}>Retry Connection</button>
      </div>
    );
  }

  return (
    <>
      <div className="weather-page container" style={{ paddingTop: '2rem' }}>
        <WeatherHero weather={weather} />
        
        <ForecastSection forecast={forecast} />
        
        <div className="weather-grid-2">
          <CurrentWeatherCard weather={weather} />
          <AQICard aqi={aqi} />
        </div>

        <ClimateImpactSection />
        <EcoRecommendationSection weather={weather} aqi={aqi} />
        <WeatherCharts forecast={forecast} aqi={aqi} />
      </div>

      <SustainabilityInsights />
    </>
  );
};

export default WeatherPage;
