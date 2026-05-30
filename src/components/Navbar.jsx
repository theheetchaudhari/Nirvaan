import React from 'react';
import { Leaf, Cloud } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isWeather = location.pathname === '/weather';

  const scrollTo = (id) => {
    if (isWeather) {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
      return;
    }

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand" style={{ cursor: 'pointer' }} onClick={() => scrollTo('home')}>
          {isWeather ? (
            <Cloud size={24} color="#00ffff" />
          ) : (
            <Leaf size={24} color="var(--eco-main)" />
          )}
          <span style={isWeather ? { color: '#00ffff', textShadow: '0 0 10px rgba(0, 255, 255, 0.6)' } : {}}>NIRVAAN</span>
        </div>
        <div className="nav-links">
          <button onClick={() => scrollTo('home')}>HOME</button>
          <button onClick={() => scrollTo(isWeather ? 'analytics' : 'calculator')}>
            {isWeather ? 'ANALYTICS' : 'CALCULATOR'}
          </button>
          <button onClick={() => scrollTo(isWeather ? 'sustainability-insights' : 'insights')}>
            INSIGHTS
          </button>
          <button onClick={() => scrollTo('contact')}>CONTACT</button>
          {isWeather ? (
            <button className="weather-nav-btn" onClick={() => navigate('/')} title="Home">
              <Leaf size={28} className="leaf-icon" style={{ display: 'inline-block' }} />
            </button>
          ) : (
            <button className="weather-nav-btn" onClick={() => navigate('/weather')} title="Weather">
              <span className="material-symbols-outlined cloud-icon" style={{ fontSize: '28px', display: 'inline-block' }}>cloud</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;