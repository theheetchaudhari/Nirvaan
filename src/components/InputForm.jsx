import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Zap, Droplets, Flame, Utensils, ChevronDown, Info } from 'lucide-react';

const CustomSelect = ({ options, value, onChange, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div ref={dropdownRef} style={{ position: 'relative', width: '100%' }}>
      <div 
        className="form-control" 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          cursor: 'pointer',
          userSelect: 'none'
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption ? selectedOption.label : 'Select...'}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={16} color="var(--text-muted)" />
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              marginTop: '0.5rem',
              background: 'rgba(20, 20, 20, 0.95)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--border-color)',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              zIndex: 50,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.8)'
            }}
          >
            {options.map((opt) => (
              <div 
                key={opt.value}
                style={{
                  padding: '0.75rem 1rem',
                  cursor: 'pointer',
                  color: opt.value === value ? 'var(--eco-main)' : 'var(--text-main)',
                  background: opt.value === value ? 'rgba(57, 255, 20, 0.1)' : 'transparent',
                  transition: 'all 0.2s ease',
                  fontSize: 'var(--fs-sm)'
                }}
                onClick={() => {
                  onChange({ target: { name, value: opt.value } });
                  setIsOpen(false);
                }}
                onMouseEnter={(e) => {
                  if (opt.value !== value) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.color = '#fff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (opt.value !== value) {
                    e.target.style.background = 'transparent';
                    e.target.style.color = 'var(--text-main)';
                  }
                }}
              >
                {opt.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const InputForm = ({ onCalculate }) => {
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);
  const [formData, setFormData] = useState({
    transportType: 'car', distance: '', electricity: '', water: '', lpg: '', foodType: 'mixed'
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
      const form = e.target.form;
      const index = Array.prototype.indexOf.call(form.elements, e.target);
      if (index > -1) {
        const nextElement = form.elements[index + 1];
        if (nextElement && nextElement.type !== 'submit') {
          e.preventDefault();
          nextElement.focus();
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(formData);
  };

  const transportOptions = [
    { value: 'walk', label: 'Walk/Cycle (0 kg/km)' },
    { value: 'bike', label: 'Bike/Scooter (0.11 kg/km)' },
    { value: 'bus', label: 'Bus/Metro (0.06 kg/km)' },
    { value: 'car', label: 'Car (0.15 kg/km)' }
  ];

  const dietOptions = [
    { value: 'veg', label: 'Vegetarian (3.81 kg/day)' },
    { value: 'mixed', label: 'Mixed Diet (5.63 kg/day)' },
    { value: 'non-veg', label: 'Heavy Meat Diet (7.19 kg/day)' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 className="form-title" style={{ margin: 0 }}>Daily Activities</h2>
        <div style={{ position: 'relative', display: 'inline-flex' }}>
          <button
            type="button"
            onClick={() => {
              navigate('/documentation');
              window.scrollTo(0, 0);
            }}
            aria-label="View Emission Factors & Documentation"
            style={{
              background: 'transparent',
              border: '1px solid rgba(57, 255, 20, 0.25)',
              color: 'var(--eco-main)',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              outline: 'none',
              padding: 0,
            }}
            onMouseEnter={e => {
              setShowTooltip(true);
              e.currentTarget.style.background = 'rgba(57, 255, 20, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(57, 255, 20, 0.6)';
              e.currentTarget.style.boxShadow = '0 0 10px rgba(57, 255, 20, 0.2)';
            }}
            onMouseLeave={e => {
              setShowTooltip(false);
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(57, 255, 20, 0.25)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onFocus={() => setShowTooltip(true)}
            onBlur={() => setShowTooltip(false)}
          >
            <Info size={16} />
          </button>
          
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: 'absolute',
                  right: '0%',
                  bottom: 'calc(100% + 8px)',
                  background: 'rgba(20, 20, 20, 0.95)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(57, 255, 20, 0.3)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.75rem',
                  color: '#ffffff',
                  whiteSpace: 'nowrap',
                  zIndex: 100,
                  pointerEvents: 'none',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5), 0 0 10px rgba(57, 255, 20, 0.1)',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: 500,
                }}
              >
                View Emission Factors &amp; Documentation
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      <motion.form 
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants} className="form-group">
          <label className="form-label"><Car size={16} color="#3b82f6" /> Transport</label>
          <div className="form-row">
            <CustomSelect 
              name="transportType" 
              value={formData.transportType} 
              onChange={handleChange} 
              options={transportOptions} 
            />
            <input type="number" name="distance" placeholder="Distance (km)" value={formData.distance} onChange={handleChange} className="form-control" required min="0" step="any" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="form-group">
          <label className="form-label"><Zap size={16} color="#eab308" /> Electricity</label>
          <input type="number" name="electricity" placeholder="Usage (Units/kWh)" value={formData.electricity} onChange={handleChange} className="form-control" required min="0" step="any" />
        </motion.div>

        <motion.div variants={itemVariants} className="form-group">
          <label className="form-label"><Droplets size={16} color="#06b6d4" /> Water</label>
          <input type="number" name="water" placeholder="Usage (Litres)" value={formData.water} onChange={handleChange} className="form-control" required min="0" step="any" />
        </motion.div>

        <motion.div variants={itemVariants} className="form-group">
          <label className="form-label"><Flame size={16} color="#f97316" /> Cooking Gas (LPG)</label>
          <input type="number" name="lpg" placeholder="Usage (kg)" value={formData.lpg} onChange={handleChange} className="form-control" required min="0" step="any" />
        </motion.div>

        <motion.div variants={itemVariants} className="form-group">
          <label className="form-label"><Utensils size={16} color="#ef4444" /> Diet Type</label>
          <CustomSelect 
            name="foodType" 
            value={formData.foodType} 
            onChange={handleChange} 
            options={dietOptions} 
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <button type="submit" className="btn-submit">Calculate Impact</button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default InputForm;