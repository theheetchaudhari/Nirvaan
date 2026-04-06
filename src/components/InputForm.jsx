import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Zap, Droplets, Flame, Utensils } from 'lucide-react';

const InputForm = ({ onCalculate }) => {
  const [formData, setFormData] = useState({
    transportType: 'car', distance: '', electricity: '', water: '', lpg: '', foodType: 'mixed'
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(formData);
  };

  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="form-title">Daily Activities</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label"><Car size={16} color="#3b82f6" /> Transport</label>
          <div className="form-row">
            <select name="transportType" value={formData.transportType} onChange={handleChange} className="form-control">
              <option value="walk">Walk (0 kg/km)</option>
              <option value="bike">Bike (0.05 kg/km)</option>
              <option value="bus">Bus (0.08 kg/km)</option>
              <option value="car">Car (0.2 kg/km)</option>
            </select>
            <input type="number" name="distance" placeholder="Distance (km)" value={formData.distance} onChange={handleChange} className="form-control" required min="0" step="any" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label"><Zap size={16} color="#eab308" /> Electricity</label>
          <input type="number" name="electricity" placeholder="Usage (Units/kWh)" value={formData.electricity} onChange={handleChange} className="form-control" required min="0" step="any" />
        </div>

        <div className="form-group">
          <label className="form-label"><Droplets size={16} color="#06b6d4" /> Water</label>
          <input type="number" name="water" placeholder="Usage (Litres)" value={formData.water} onChange={handleChange} className="form-control" required min="0" step="any" />
        </div>

        <div className="form-group">
          <label className="form-label"><Flame size={16} color="#f97316" /> Cooking Gas (LPG)</label>
          <input type="number" name="lpg" placeholder="Usage (kg or units)" value={formData.lpg} onChange={handleChange} className="form-control" min="0" step="any" />
        </div>

        <div className="form-group">
          <label className="form-label"><Utensils size={16} color="#ef4444" /> Diet Type</label>
          <select name="foodType" value={formData.foodType} onChange={handleChange} className="form-control">
            <option value="veg">Vegetarian (Low impact)</option>
            <option value="mixed">Mixed Diet (Medium impact)</option>
            <option value="non-veg">Heavy Meat (High impact)</option>
          </select>
        </div>

        <button type="submit" className="btn-submit">Calculate Impact</button>
      </form>
    </motion.div>
  );
};

export default InputForm;