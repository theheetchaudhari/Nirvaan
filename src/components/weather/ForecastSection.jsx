import React from 'react';

const ForecastSection = ({ forecast }) => {
  if (!forecast || !forecast.list) return null;

  // Group by day to get daily forecast
  const dailyData = {};
  forecast.list.forEach(item => {
    const date = item.dt_txt.split(' ')[0];
    if (!dailyData[date]) {
      dailyData[date] = item;
    }
  });
  
  const forecastDays = Object.values(dailyData).slice(0, 5);

  const getDayName = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2 className="section-heading">5-Day Forecast</h2>
      <div className="forecast-scroll">
        {forecastDays.map((day, idx) => (
          <div key={idx} className="forecast-card">
            <div className="f-time">{getDayName(day.dt_txt)}</div>
            <img 
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} 
              alt={day.weather[0].main} 
              className="f-icon"
            />
            <div className="f-temp">{Math.round(day.main.temp_max || day.main.temp)}°C</div>
            <div className="f-desc">{day.weather[0].main}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastSection;
