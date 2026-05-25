import React, { useState, useEffect, useRef } from 'react';
import { 
  Lightbulb, Car, ThermometerSun, X, CloudRain, Wind, Trees, Factory, 
  Sun, Droplets, Bike, Flame, Leaf, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SustainabilityInsights = () => {
  const scrollRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  // Dynamic list of sustainability insights. 
  // Add new items here to dynamically populate cards in the loop!
  const insights = [
    {
      id: "1",
      icon: ThermometerSun,
      title: "AC Efficiency",
      insight: "Reducing AC usage by just 2°C can lower your cooling carbon emissions by up to 10%.\nEvery degree matters.",
      image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "2",
      icon: Car,
      title: "Eco Transit",
      insight: "Vehicle emissions directly affect local AQI. Choosing public transit on poor AQI days helps prevent severe pollution spikes.",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "3",
      icon: Lightbulb,
      title: "Grid Electricity",
      insight: "High temperatures increase urban electricity demand, often forcing power grids to use dirtier peak-plant energy sources.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "4",
      icon: CloudRain,
      title: "Rain & Urban Mobility",
      insight: "Heavy rainfall increases traffic congestion and fuel consumption due to slower vehicle movement. Public transport and route optimization during rainy conditions can significantly reduce unnecessary carbon emissions.",
      image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "5",
      icon: Wind,
      title: "Natural Ventilation",
      insight: "Using natural airflow during moderate weather conditions reduces dependency on air conditioning systems, lowering household electricity demand and indirect CO₂ emissions from thermal power generation.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "6",
      icon: Trees,
      title: "Urban Green Cover",
      insight: "Trees absorb carbon dioxide, reduce urban heat island effects, and improve air quality. Expanding green cover in cities can naturally lower surrounding temperatures and reduce cooling energy demand.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "7",
      icon: Factory,
      title: "Industrial Emissions",
      insight: "Industrial combustion and fossil-fuel-based manufacturing contribute significantly to particulate pollution and greenhouse gases. Cleaner production systems can reduce both AQI deterioration and climate impact.",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "8",
      icon: Sun,
      title: "Solar Energy Potential",
      insight: "Sunny weather conditions increase the efficiency of solar energy generation. Transitioning toward renewable electricity reduces dependence on coal-powered grids and lowers long-term carbon emissions.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "9",
      icon: Droplets,
      title: "Water Treatment Emissions",
      insight: "Water purification, pumping, and wastewater treatment require substantial electricity. Conserving water indirectly reduces energy consumption and associated greenhouse gas emissions.",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "10",
      icon: Bike,
      title: "Cycling & Clean Air",
      insight: "Cycling eliminates direct fuel combustion emissions and reduces urban traffic pollution. Favorable weather conditions create ideal opportunities for sustainable low-carbon transportation.",
      image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "11",
      icon: Flame,
      title: "Heatwaves & Energy Demand",
      insight: "Extreme heatwaves increase electricity demand due to excessive cooling usage. This often forces power grids to activate high-emission backup power plants, increasing overall carbon intensity.",
      image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "12",
      icon: Leaf,
      title: "Climate-Conscious Living",
      insight: "Small daily sustainability choices such as reducing energy waste, preferring public transport, and minimizing unnecessary consumption collectively create measurable long-term climate impact reductions.",
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  // Tripled dataset to make loop carousel scroll infinitely and seamlessly
  const duplicatedData = [...insights, ...insights, ...insights];

  useEffect(() => {
    let animationFrameId;
    const scrollContainer = scrollRef.current;

    const scroll = () => {
      if (scrollContainer && !isInteracting) {
        scrollContainer.scrollLeft += 0.5; // Very slow cinematic movement
        // Infinite loop logic: reset scroll position when reaching 1/3 of the total width
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
          scrollContainer.scrollLeft -= scrollContainer.scrollWidth / 3;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInteracting]);

  const scrollLeftBtn = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
  };

  const scrollRightBtn = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
  };

  const handleCardClick = (item) => {
    if (window.innerWidth <= 768) {
      setExpandedCard(item);
    }
  };

  return (
    <div id="sustainability-insights" className="insights-section" style={{ paddingTop: '1.5rem', paddingBottom: '0.5rem', marginBottom: '0rem' }}>
      <div className="insights-container insights-header">
        <h2 
          style={{ 
            boxSizing: 'border-box',
            color: '#ffffff',
            display: 'inline-block',
            fontFamily: '"Instrument Serif", serif',
            fontSize: '41.2px',
            fontWeight: 400,
            height: 'auto',
            lineHeight: '45.32px',
            margin: '0',
            padding: '0',
            width: 'auto'
          }}
        >
          Sustainability <span style={{ color: 'rgb(57, 255, 20)', textShadow: 'rgba(57, 255, 20, 0.4) 0px 0px 15px' }}>Insights</span>
        </h2>
      </div>
      
      {/* Infinite loop marquee carousel using high-performance global index.css classes */}
      <div className="insights-container insights-carousel-container">
        <div 
          className={`insights-carousel ${isInteracting ? 'interacting' : ''}`} 
          ref={scrollRef}
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onTouchStart={() => setIsInteracting(true)}
          onTouchEnd={() => setIsInteracting(false)}
        >
          {duplicatedData.map((item, index) => {
            const Icon = item.icon;
            // Only apply DOM ID anchor to first instance to avoid duplication
            const isFirstInstance = index < insights.length;
            
            return (
              <div 
                key={`${item.id}-${index}`} 
                id={isFirstInstance ? item.id : undefined}
                className="insight-card"
                onClick={() => handleCardClick(item)}
              >
                <div className="insight-image-bg" style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="insight-card-overlay"></div>
                
                <div className="insight-card-content">
                  <div className="insight-icon-wrapper" style={{ background: 'rgba(57, 255, 20, 0.15)', color: 'var(--eco-main)' }}>
                    <Icon size={24} className="insight-icon" />
                  </div>
                  <h3 className="insight-title">{item.title}</h3>
                  <div className="insight-text-wrapper">
                    {item.insight.split('\n').map((line, i) => (
                      <p key={i} className="insight-text">{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expanded Card Modal for Mobile viewports */}
      <AnimatePresence>
        {expandedCard && (() => {
          const ExpandedIcon = expandedCard.icon;
          return (
            <motion.div 
              className="insight-expanded-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedCard(null)}
              style={{ zIndex: 9999 }}
            >
              <motion.div 
                className="insight-expanded-card"
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="insight-close-btn" onClick={() => setExpandedCard(null)}>
                  <X size={24} />
                </button>
                <div className="insight-image-bg" style={{ backgroundImage: `url(${expandedCard.image})` }}></div>
                <div className="insight-card-overlay"></div>
                
                <div className="insight-card-content">
                  <div className="insight-icon-wrapper">
                    <ExpandedIcon size={32} className="insight-icon" />
                  </div>
                  <h3 className="insight-title">{expandedCard.title}</h3>
                  <div className="insight-text-wrapper expanded">
                    {expandedCard.insight.split('\n').map((line, i) => (
                      <p key={i} className="insight-text">{line}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
};

export default SustainabilityInsights;
