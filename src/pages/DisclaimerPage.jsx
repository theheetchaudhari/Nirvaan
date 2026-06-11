import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Info, BookOpen, Calculator, AlertTriangle, Shield, CheckCircle2 } from 'lucide-react';
import './DisclaimerPage.css';

// Custom CloudSun icon if needed, or we can use generic icons
const CloudIcon = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.47 0-.89.09-1.3.27A7 7 0 1 0 2 12.5C2 16.5 5 20 9 20h8.5" />
    <path d="M12 2v2" />
    <path d="m4.9 4.9 1.4 1.4" />
    <path d="M22 12h-2" />
    <path d="m19.1 4.9-1.4 1.4" />
  </svg>
);

export default function DisclaimerPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="disclaimer-page-simple">
      <div className="disclaimer-simple-container">
        
        {/* Back Button */}
        <div className="disclaimer-header-action">
          <button className="disclaimer-simple-back" onClick={() => navigate('/')}>
            <ArrowLeft size={16} /> Back to Home
          </button>
        </div>

        <div className="disclaimer-simple-grid-layout">
          {/* Main Card */}
          <motion.div 
            className="disclaimer-simple-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <header className="disclaimer-simple-header">
              <h1 className="disclaimer-simple-title">
                Platform <span className="text-accent-color">Disclaimer</span>
              </h1>
              <p className="disclaimer-simple-meta">
                <span className="meta-label">Last Updated:</span> June 2026
              </p>
            </header>

            <div className="disclaimer-simple-intro">
              <p>Please read this disclaimer carefully before using NIRVAAN EarthLab. This disclaimer governs your access to and use of the platform and all calculations, insights, and tools provided herein.</p>
            </div>

            <div className="disclaimer-simple-sections">
              <div className="disclaimer-simple-item">
                <div className="disclaimer-simple-icon-box box-blue">
                  <BookOpen size={20} />
                </div>
                <div className="disclaimer-simple-content">
                  <h3>Educational & Awareness Purpose Only</h3>
                  <p>The information, calculations, environmental insights, weather analytics, and sustainability recommendations provided by NIRVAAN EarthLab are intended for educational and awareness purposes only.</p>
                </div>
              </div>

              <div className="disclaimer-simple-item">
                <div className="disclaimer-simple-icon-box box-teal">
                  <Calculator size={20} />
                </div>
                <div className="disclaimer-simple-content">
                  <h3>Approximate Carbon Calculations</h3>
                  <p>Carbon footprint estimates are based on publicly available emission factors and simplified calculation methodologies. Results should be considered approximate estimates and not professional carbon audits or certified environmental assessments.</p>
                </div>
              </div>

              <div className="disclaimer-simple-item">
                <div className="disclaimer-simple-icon-box box-indigo">
                  <CloudIcon size={20} />
                </div>
                <div className="disclaimer-simple-content">
                  <h3>Third-Party Weather Data</h3>
                  <p>Weather information and climate-related data may be sourced from third-party providers and may occasionally contain inaccuracies, delays, or variations.</p>
                </div>
              </div>

              <div className="disclaimer-simple-item">
                <div className="disclaimer-simple-icon-box box-purple">
                  <AlertTriangle size={20} />
                </div>
                <div className="disclaimer-simple-content">
                  <h3>Limitation of Responsibility</h3>
                  <p>NIRVAAN EarthLab shall not be held responsible for decisions, actions, or outcomes resulting from the use of information provided through the platform.</p>
                </div>
              </div>

              <div className="disclaimer-simple-item">
                <div className="disclaimer-simple-icon-box box-royal">
                  <CheckCircle2 size={20} />
                </div>
                <div className="disclaimer-simple-content">
                  <h3>Independent Verification</h3>
                  <p>Users are encouraged to verify critical information independently when making professional, legal, financial, or regulatory decisions.</p>
                </div>
              </div>
            </div>

            <div className="disclaimer-simple-footer-banner">
              <span className="banner-icon"><Info size={16} /></span>
              <p>By using this platform, you acknowledge and agree to the terms outline in this disclaimer.</p>
            </div>
          </motion.div>

          {/* Sidebar decorative element */}
          <div className="disclaimer-simple-sidebar">
            <div className="disclaimer-sidebar-sticky">
              <div className="minimalist-badge-card">
                <div className="badge-illustration">
                  <Shield className="badge-shield" size={64} />
                  <div className="badge-ring"></div>
                </div>
                <h4>Academic Integrity</h4>
                <p>Designed to raise scientific awareness through robust, transparent methodology and clear boundaries.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
