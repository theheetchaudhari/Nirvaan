import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EarthSignalsSection from './components/EarthSignals/EarthSignals';
import InputForm from './components/InputForm';
import ResultCard from './components/ResultCard';
import TreeCard from './components/TreeCard';
import TipsCard from './components/TipsCard';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { calculateFootprint } from './utils/carbonCalculator';
import { motion, AnimatePresence } from 'framer-motion';

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
        <EarthSignalsSection />
        
        <div id="calculator" className="calculator-section container">
          <AnimatePresence mode="wait">
            {!results ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, filter: 'blur(5px)' }}
                transition={{ duration: 0.4 }}
                style={{ maxWidth: '600px', margin: '0 auto' }}
              >
                <InputForm onCalculate={handleCalculate} />
              </motion.div>
            ) : (
              <motion.div
                key="results"
                id="results-section"
                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                style={{ maxWidth: '600px', margin: '0 auto' }}
              >
                <div className="results-stack">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <ResultCard total={results.total} rating={results.rating} />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <TreeCard trees={results.trees} />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                    <TipsCard tips={results.tips} />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} style={{ textAlign: 'center' }}>
                    <button 
                      onClick={() => setResults(null)} 
                      className="btn-primary" 
                      style={{ width: '100%', marginTop: '0.5rem' }}
                    >
                      Calculate Again
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;