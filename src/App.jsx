import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InputForm from './components/InputForm';
import ResultCard from './components/ResultCard';
import TreeCard from './components/TreeCard';
import TipsCard from './components/TipsCard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { calculateFootprint } from './utils/carbonCalculator';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [results, setResults] = useState(null);

  const handleCalculate = (formData) => {
    const calculatedData = calculateFootprint(formData);
    setResults(calculatedData);
    
    setTimeout(() => {
      document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Hero />
        
        <div id="calculator" className="calculator-section container">
          <div className="calculator-grid">
            
            {/* Left Side: Form */}
            <div>
              <InputForm onCalculate={handleCalculate} />
            </div>

            {/* Right Side: Results */}
            <div id="results-section">
              <AnimatePresence mode="wait">
                {!results ? (
                  <div key="empty" className="empty-state">
                    <p>Fill out the form and click calculate to see your daily footprint here.</p>
                  </div>
                ) : (
                  <div key="results" className="results-stack">
                    <ResultCard total={results.total} rating={results.rating} />
                    <TreeCard trees={results.trees} />
                    <TipsCard tips={results.tips} />
                  </div>
                )}
              </AnimatePresence>
            </div>
            
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;