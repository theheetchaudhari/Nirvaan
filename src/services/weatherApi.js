import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || '';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Mock data responses for when API key is not available
const mockCurrentWeather = {
  name: 'New York',
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
    { dt_txt: '2026-05-25 12:00:00', main: { temp_min: 15, temp_max: 22, humidity: 60 }, pop: 0.1, wind: { speed: 3 }, weather: [{ main: 'Clear', icon: '01d' }] },
    { dt_txt: '2026-05-26 12:00:00', main: { temp_min: 16, temp_max: 20, humidity: 70 }, pop: 0.5, wind: { speed: 5 }, weather: [{ main: 'Clouds', icon: '03d' }] },
    { dt_txt: '2026-05-27 12:00:00', main: { temp_min: 14, temp_max: 18, humidity: 80 }, pop: 0.8, wind: { speed: 6 }, weather: [{ main: 'Rain', icon: '09d' }] },
    { dt_txt: '2026-05-28 12:00:00', main: { temp_min: 12, temp_max: 24, humidity: 55 }, pop: 0, wind: { speed: 2 }, weather: [{ main: 'Clear', icon: '01d' }] },
    { dt_txt: '2026-05-29 12:00:00', main: { temp_min: 18, temp_max: 26, humidity: 65 }, pop: 0.2, wind: { speed: 4 }, weather: [{ main: 'Clouds', icon: '04d' }] },
  ]
};

const isMock = !API_KEY;

export const fetchWeatherData = async (lat, lon, city = null) => {
  try {
    if (isMock) {
      console.warn("Using mock weather data because VITE_OPENWEATHER_API_KEY is not set.");
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      return { current: mockCurrentWeather, forecast: mockForecast, aqi: mockAQI };
    }

    let query = '';
    if (lat && lon) {
      query = `lat=${lat}&lon=${lon}`;
    } else if (city) {
      query = `q=${city}`;
    } else {
      query = `q=New York`; // Fallback
    }

    const currentRes = await axios.get(`${BASE_URL}/weather?${query}&units=metric&appid=${API_KEY}`);
    const currentData = currentRes.data;
    
    const resLat = currentData.coord.lat;
    const resLon = currentData.coord.lon;

    const [forecastRes, aqiRes] = await Promise.all([
      axios.get(`${BASE_URL}/forecast?lat=${resLat}&lon=${resLon}&units=metric&appid=${API_KEY}`),
      axios.get(`${BASE_URL}/air_pollution?lat=${resLat}&lon=${resLon}&appid=${API_KEY}`)
    ]);

    return {
      current: currentData,
      forecast: forecastRes.data,
      aqi: aqiRes.data
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    if (isMock) {
        return { current: mockCurrentWeather, forecast: mockForecast, aqi: mockAQI };
    }
    throw error;
  }
};
