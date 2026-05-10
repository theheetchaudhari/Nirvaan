export const calculateFootprint = (data) => {
  // Constants derived from src/pages/documentation/carbon_footprint_emission_factors_markdown.md
  const transportFactors = { 
    bike: 0.11, // Bike/Scooter (kg CO₂/km)
    car: 0.15,  // Car (kg CO₂/km)
    bus: 0.06,  // Bus/Metro (kg CO₂/km)
    walk: 0     // Walk/Cycle (kg CO₂/km)
  };
  
  const foodFactors = { 
    veg: 3.81,     // Vegetarian (kg CO₂/day)
    mixed: 5.63,   // Mixed Diet (kg CO₂/day)
    'non-veg': 7.19 // Heavy Meat Diet (kg CO₂/day)
  };

  const electricityFactor = 0.727; // Indian Grid Electricity (kg CO₂/kWh)
  const waterFactor = 0.000149;    // Water Usage (kg CO₂/litre)
  const lpgFactor = 2.99;          // LPG/Cooking Gas (kg CO₂/kg)

  const distance = parseFloat(data.distance) || 0;
  const electricity = parseFloat(data.electricity) || 0;
  const water = parseFloat(data.water) || 0;
  const lpg = parseFloat(data.lpg) || 0;

  const transportCo2 = (transportFactors[data.transportType] || 0) * distance;
  const electricityCo2 = electricity * electricityFactor;
  const waterCo2 = water * waterFactor;
  const lpgCo2 = lpg * lpgFactor;
  const foodCo2 = foodFactors[data.foodType] || 0;

  const totalCO2 = transportCo2 + electricityCo2 + waterCo2 + lpgCo2 + foodCo2;

  // Rating thresholds (can be adjusted based on new ranges)
  let rating = 'Low';
  if (totalCO2 >= 8 && totalCO2 <= 15) rating = 'Medium';
  else if (totalCO2 > 15) rating = 'High';

  const trees = totalCO2 / 20; // 1 tree offsets ~20kg CO2 per year

  const tips = [];
  if (data.transportType === 'car') tips.push("Consider using public transport, carpooling, or biking to reduce transport emissions.");
  if (electricityCo2 > 5) tips.push("Your electricity usage is contributing significantly. Switch to LED bulbs and unplug unused appliances.");
  if (data.foodType === 'non-veg') tips.push("Try swapping a few meals a week to plant-based (veg) to significantly lower your food footprint.");
  if (waterCo2 > 0.5) tips.push("Reduce water usage by taking shorter showers and checking for leaks.");
  if (tips.length === 0) tips.push("Great job! Your daily footprint is highly optimized. Keep up the eco-friendly lifestyle!");

  return {
    total: totalCO2.toFixed(2),
    rating,
    trees: trees.toFixed(2),
    tips
  };
};