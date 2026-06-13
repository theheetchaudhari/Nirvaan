import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EarthSignalsSection from './components/EarthSignals/EarthSignals';
import InputForm from './components/InputForm';
import ResultCard from './components/ResultCard';
import CarbonPieChart from './components/CarbonPieChart';
import TreeCard from './components/TreeCard';
import TipsCard from './components/TipsCard';
import Insights from './components/Insights';
import Footer from './components/Footer';
import EmissionFactorPage from './pages/EmissionFactorPage.jsx';
import WeatherPage from './pages/WeatherPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import TermsPage from './pages/TermsPage.jsx';
import CookiePolicy from './pages/CookiePolicy.jsx';
import DisclaimerPage from './pages/DisclaimerPage.jsx';
import AccessibilityPage from './pages/AccessibilityPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import NeonLiquidBg from './components/NeonLiquidBg';
import WeatherBg from './components/weather/WeatherBg';
import { calculateFootprint } from './utils/carbonCalculator';
import { motion, AnimatePresence } from 'framer-motion';

function HomePage() {
  const [results, setResults] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Handle scroll if redirected from documentation page
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        if (id === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      // Clear state so it doesn't scroll again on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleCalculate = (formData) => {
    const calculatedData = calculateFootprint(formData);
    setResults(calculatedData);

    setTimeout(() => {
      document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
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
              style={{ maxWidth: '800px', margin: '0 auto' }}
            >
              <div className="results-stack">
                <motion.div className="result-card-container" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <ResultCard total={results.total} rating={results.rating} />
                  <CarbonPieChart data={results.breakdown} />
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
    </>
  );
}

function App() {
  const location = useLocation();

  const isWeatherPage = location.pathname === '/weather';

  return (
    <div className={`app-container ${isWeatherPage ? 'weather-active' : ''}`}>
      {isWeatherPage ? <WeatherBg /> : <NeonLiquidBg />}
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/emission-factors" element={<EmissionFactorPage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;