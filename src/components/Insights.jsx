import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Car, Zap, Droplets, Utensils, Flame, Leaf, Fuel, Cloud, Beef, Trees, Globe, X } from 'lucide-react';

const insightsData = [
  {
  id: 1,
  icon: Car,
  title: "Transport & Carbon",
  insight: "Petrol and diesel burn inside vehicle engines.\nThis combustion process releases carbon dioxide into the atmosphere.",
  image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
},
{
  id: 2,
  icon: Zap,
  title: "Electricity Impact",
  insight: "Electricity generation often depends on coal and fossil fuels.\nPower plants emit greenhouse gases while producing energy.",
  image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop"
},
{
  id: 3,
  icon: Droplets,
  title: "Water Also Emits Carbon",
  insight: "Water must be purified, pumped, and transported through infrastructure.\nThese systems consume electricity and indirectly create emissions.",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
},
{
  id: 4,
  icon: Utensils,
  title: "Food Footprint",
  insight: "Food production requires farming, transportation, refrigeration, and packaging.\nAnimal farming especially creates high greenhouse gas emissions.",
  image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop"
},
{
  id: 5,
  icon: Flame,
  title: "Cooking Gas Emissions",
  insight: "LPG is a fossil fuel used for cooking.\nBurning gas releases carbon dioxide directly into the air.",
  image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop"
},
{
  id: 6,
  icon: Leaf,
  title: "Climate Chain Reaction",
  insight: "Daily human activities continuously release greenhouse gases.\nOver time these emissions contribute to global warming and climate change.",
  image: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200&auto=format&fit=crop"
},
{
  id: 7,
  icon: Fuel,
  title: "How Can Small Fuel Create So Much CO₂?",
  insight: "Fuel combines with oxygen from the atmosphere while burning.\nThis chemical reaction creates a much heavier carbon dioxide gas output.",
  image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop"
},
{
  id: 8,
  icon: Cloud,
  title: "CO₂ Is Mostly Invisible",
  insight: "Carbon dioxide is a gas, so emissions are usually invisible to the human eye.\nEven when we cannot see it, greenhouse gases are continuously released into the atmosphere.",
  image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
},
{
  id: 9,
  icon: Beef,
  title: "Why Does Food Create Emissions?",
  insight: "Food production requires farming, transportation, refrigeration, electricity, and packaging.\nAnimal farming also releases methane, a powerful greenhouse gas.",
  image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
},
{
  id: 10,
  icon: Trees,
  title: "Why Don’t Trees Absorb Everything?",
  insight: "Trees absorb carbon naturally through photosynthesis, but the process is slow.\nHuman activities now release CO₂ much faster than forests can absorb it.",
  image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop"
},
{
  id: 11,
  icon: Globe,
  title: "Then Why Is Earth Still Habitable?",
  insight: "Nature continuously balances carbon using forests, oceans, and ecosystems.\nClimate change happens because emissions are increasing faster than Earth can naturally recover.",
  image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop"
}
];

const duplicatedData = [...insightsData, ...insightsData, ...insightsData];

const Insights = () => {
  const scrollRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (item) => {
    // Only expand on smaller screens where text might be cut off
    if (window.innerWidth <= 768) {
      setExpandedCard(item);
    }
  };

  useEffect(() => {
    let animationFrameId;
    const scrollContainer = scrollRef.current;

    const scroll = () => {
      if (scrollContainer && !isInteracting) {
        scrollContainer.scrollLeft += 0.5; // Very slow cinematic movement
        // Infinite loop logic: reset scroll when reaching 1/3 of the total width
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
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRightBtn = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <section id="insights" className="insights-section">
      <div className="insights-container insights-header">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Do you <span className="text-highlight">Know </span>?</h2>
        </motion.div>
      </div>

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
            return (
              <div 
                key={`${item.id}-${index}`} 
                className="insight-card"
                onClick={() => handleCardClick(item)}
              >
                <div className="insight-image-bg" style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="insight-card-overlay"></div>
                
                <div className="insight-card-content">
                  <div className="insight-icon-wrapper">
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

      {/* Expanded Card Modal for Mobile */}
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
    </section>
  );
};

export default Insights;