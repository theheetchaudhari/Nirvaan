export const calculateFootprint = (data) => {
  const transportFactors = { bike: 0.05, car: 0.2, bus: 0.08, walk: 0 };
  const foodFactors = { veg: 1.5, mixed: 2.5, 'non-veg': 3.5 };

  const distance = parseFloat(data.distance) || 0;
  const electricity = parseFloat(data.electricity) || 0;
  const water = parseFloat(data.water) || 0;
  const lpg = parseFloat(data.lpg) || 0;

  const transportCo2 = (transportFactors[data.transportType] || 0) * distance;
  const electricityCo2 = electricity * 0.82;
  const waterCo2 = water * 0.001;
  const lpgCo2 = lpg * 2.98;
  const foodCo2 = foodFactors[data.foodType] || 0;

  const totalCO2 = transportCo2 + electricityCo2 + waterCo2 + lpgCo2 + foodCo2;

  let rating = 'Low';
  if (totalCO2 >= 5 && totalCO2 <= 15) rating = 'Medium';
  else if (totalCO2 > 15) rating = 'High';

  const trees = totalCO2 / 20;

  const tips = [];
  if (data.transportType === 'car') tips.push("Consider using public transport, carpooling, or biking to reduce transport emissions.");
  if (electricityCo2 > 2) tips.push("Your electricity usage is high. Switch to LED bulbs and unplug unused appliances.");
  if (data.foodType === 'non-veg') tips.push("Try swapping a few meals a week to plant-based (veg) to significantly lower your food footprint.");
  if (waterCo2 > 0.1) tips.push("Reduce water usage by taking shorter showers and checking for leaks.");
  if (tips.length === 0) tips.push("Great job! Your daily footprint is highly optimized. Keep up the eco-friendly lifestyle!");

  return {
    total: totalCO2.toFixed(2),
    rating,
    trees: trees.toFixed(2),
    tips
  };
};