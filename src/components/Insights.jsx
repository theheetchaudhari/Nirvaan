import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Car, Zap, Droplets, Utensils, Flame, Leaf } from 'lucide-react';

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
}
];

const duplicatedData = [...insightsData, ...insightsData, ...insightsData];

const Insights = () => {
  const scrollRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);

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
              <div key={`${item.id}-${index}`} className="insight-card">
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
    </section>
  );
};

export default Insights;
