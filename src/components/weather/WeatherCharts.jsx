import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

const WeatherCharts = ({ forecast }) => {
  if (!forecast || !forecast.list) return null;

  // Process data for charts
  const chartData = forecast.list.slice(0, 8).map(item => {
    const time = new Date(item.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return {
      time,
      temp: Math.round(item.main.temp),
      humidity: item.main.humidity
    };
  });

  return (
    <div style={{ marginBottom: '4rem' }}>
      <h2 className="section-heading">Sustainability <span style={{ color: 'var(--primary, #39ff14)' }}>Analytics</span></h2>
      <div className="weather-grid-2">
        
        <div className="w-card">
          <h3 className="w-card-title">Temperature Trend (Next 24h)</h3>
          <div className="weather-chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--eco-main)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--eco-main)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="time" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(10,10,10,0.9)', border: '1px solid var(--eco-main)', borderRadius: '8px', color: 'white' }}
                  itemStyle={{ color: 'var(--eco-main)' }}
                />
                <Area type="monotone" dataKey="temp" stroke="var(--eco-main)" fillOpacity={1} fill="url(#colorTemp)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="w-card">
          <h3 className="w-card-title">Humidity Trend (Next 24h)</h3>
          <div className="weather-chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="time" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(10,10,10,0.9)', border: '1px solid #3b82f6', borderRadius: '8px', color: 'white' }}
                  itemStyle={{ color: '#3b82f6' }}
                />
                <Line type="monotone" dataKey="humidity" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, fill: '#3b82f6' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WeatherCharts;
