import React, { useEffect, useRef, useState } from 'react';
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
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`earth-signals-section ${isInView ? 'in-view' : ''}`}>
      <div className="earth-signals-container">
        <div className="earth-signals-grid">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="earth-signals-image-wrapper"
              style={{ '--index': index }}
            >
              <img src={src} alt={`Earth Signal ${index + 1}`} className="earth-signals-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarthSignalsSection;

