import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || '';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    units: 'metric'
  }
});

export const getCurrentWeather = async (lat, lon) => {
  const response = await api.get(`/weather?lat=${lat}&lon=${lon}`);
  return response.data;
};

export const getForecast = async (lat, lon) => {
  const response = await api.get(`/forecast?lat=${lat}&lon=${lon}`);
  return response.data;
};

export const getAQI = async (lat, lon) => {
  // AQI endpoint doesn't use 'units' parameter
  const response = await axios.get(`${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
  return response.data;
};
