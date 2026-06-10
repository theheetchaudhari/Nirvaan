import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Cookie, Info, Settings, Shield, Activity, Layers } from 'lucide-react';
import './CookiePolicy.css';

export default function CookiePolicy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cookie-page-simple">
      <div className="cookie-simple-container">
        
        {/* Back Button */}
        <div className="cookie-header-action">
          <button className="cookie-simple-back" onClick={() => navigate('/')}>
            <ArrowLeft size={16} /> Back to Home
          </button>
        </div>

        <div className="cookie-simple-grid-layout">
          {/* Main Card */}
          <motion.div 
            className="cookie-simple-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <header className="cookie-simple-header">
              <h1 className="cookie-simple-title">
                Cookie <span className="text-accent-color">Policy</span>
              </h1>
              <p className="cookie-simple-meta">
                <span className="meta-label">Last Updated:</span> June 2026
              </p>
            </header>

            <div className="cookie-simple-intro">
              <p>NIRVAAN EarthLab uses cookies and similar technologies to improve functionality and enhance user experience.</p>
              <p>Cookies are small data files stored on your device that help websites remember preferences, improve performance, and understand visitor interactions.</p>
            </div>

            <div className="cookie-simple-sections">
              <div className="cookie-simple-item">
                <div className="cookie-simple-icon-box box-indigo">
                  <Cookie size={20} />
                </div>
                <div className="cookie-simple-content">
                  <h3>Why We Use Cookies</h3>
                  <p>We use cookies to maintain essential site functionality, analyze traffic patterns, and continuously optimize our climate intelligence services.</p>
                </div>
              </div>

              <div className="cookie-simple-item">
                <div className="cookie-simple-icon-box box-blue">
                  <Layers size={20} />
                </div>
                <div className="cookie-simple-content">
                  <h3>Key Cookie Purposes</h3>
                  <ul className="cookie-bullet-list">
                    <li><strong>Remembering user preferences:</strong> Customizing display parameters and language choices.</li>
                    <li><strong>Improving platform performance:</strong> Assisting in faster page loads and asset delivery.</li>
                    <li><strong>Understanding visitor engagement:</strong> Collecting anonymous diagnostics and usage trends.</li>
                    <li><strong>Essential site functionality:</strong> Supporting security checks and session continuity.</li>
                  </ul>
                </div>
              </div>

              <div className="cookie-simple-item">
                <div className="cookie-simple-icon-box box-purple">
                  <Settings size={20} />
                </div>
                <div className="cookie-simple-content">
                  <h3>Managing Cookie Settings</h3>
                  <p>Most web browsers allow users to control, disable, or remove cookies through browser settings. Disabling cookies may affect the functionality of certain features.</p>
                </div>
              </div>
            </div>

            <div className="cookie-simple-footer-banner">
              <span className="banner-icon"><Info size={16} /></span>
              <p>By continuing to use NIRVAAN EarthLab, you consent to the use of cookies as described in this policy.</p>
            </div>
          </motion.div>

          {/* Sidebar decorative element */}
          <div className="cookie-simple-sidebar">
            <div className="cookie-sidebar-sticky">
              <div className="minimalist-badge-card">
                <div className="badge-illustration">
                  <Cookie className="badge-shield" size={64} />
                  <div className="badge-ring"></div>
                </div>
                <h4>Consent &amp; Clarity</h4>
                <p>Learn more about how cookies help us deliver seamless environmental and carbon footprint analytics.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
