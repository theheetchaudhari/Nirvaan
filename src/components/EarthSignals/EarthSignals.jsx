import React from 'react';
import './EarthSignals.css';

import ch1 from '../assets/ch1.jpg';
import ch2 from '../assets/ch2.jpg';
import ch3 from '../assets/ch3.jpg';
import ch4 from '../assets/ch4.jpg';
import ch5 from '../assets/ch5.jpg';
import ch6 from '../assets/ch6.jpg';
import ch7 from '../assets/ch7.jpg';

const images = [ch1, ch2, ch3, ch4, ch5, ch6, ch7];

const EarthSignalsSection = () => {
  return (
    <section className="earth-signals-section">
      <div className="earth-signals-container">
        <div className="earth-signals-grid">
          {images.map((src, index) => (
            <div key={index} className="earth-signals-image-wrapper">
              <img src={src} alt={`Earth Signal ${index + 1}`} className="earth-signals-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarthSignalsSection;
