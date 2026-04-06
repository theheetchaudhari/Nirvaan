import React from 'react';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  const scrollTo = (id) => {
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
          <button onClick={() => scrollTo('results-section')}>INSIGHTS</button>
          <button onClick={() => scrollTo('contact')}>CONTACT</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;