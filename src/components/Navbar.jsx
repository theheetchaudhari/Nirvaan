import React from 'react';
import { Leaf, Cloud } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id) => {
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
          <Leaf size={24} color="var(--eco-main)" />
          <span>NIRVAAN</span>
        </div>
        <div className="nav-links">
          <button onClick={() => scrollTo('home')}>HOME</button>
          <button onClick={() => scrollTo('calculator')}>CALCULATOR</button>
          <button onClick={() => scrollTo('insights')}>INSIGHTS</button>
          <button onClick={() => scrollTo('contact')}>CONTACT</button>
          <button className="weather-nav-btn" onClick={() => navigate('/weather')}>
            <Cloud size={18} className="cloud-icon" /> WEATHER
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;