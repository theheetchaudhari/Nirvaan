import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Accessibility, Heart, Users, RefreshCw, MessageSquare, Info } from 'lucide-react';
import './AccessibilityPage.css';

export default function AccessibilityPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="accessibility-page-simple">
      <div className="accessibility-simple-container">
        
        {/* Back Button */}
        <div className="accessibility-header-action">
          <button className="accessibility-simple-back" onClick={() => navigate('/')}>
            <ArrowLeft size={16} /> Back to Home
          </button>
        </div>

        <div className="accessibility-simple-grid-layout">
          {/* Main Card */}
          <motion.div 
            className="accessibility-simple-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <header className="accessibility-simple-header">
              <h1 className="accessibility-simple-title">
                Accessibility <span className="text-accent-color">Statement</span>
              </h1>
              <p className="accessibility-simple-meta">
                <span className="meta-label">Last Updated:</span> June 2026
              </p>
            </header>

            <div className="accessibility-simple-intro">
              <p>At NIRVAAN EarthLab, we believe climate knowledge and sustainability tools should be accessible to everyone.</p>
              <p>We are committed to creating a platform that is inclusive, easy to navigate, and usable across a wide range of devices, browsers, and assistive technologies. Accessibility is considered throughout the design and development of our products to ensure that environmental information remains available to as many people as possible.</p>
            </div>

            <div className="accessibility-simple-sections">
              
              {/* Commitment */}
              <div className="accessibility-simple-item">
                <div className="accessibility-simple-icon-box box-blue">
                  <Heart size={20} />
                </div>
                <div className="accessibility-simple-content">
                  <h3>Our Commitment</h3>
                  <p>We continuously work to improve accessibility by:</p>
                  <ul className="accessibility-bullet-list">
                    <li>Supporting desktop, tablet, and mobile devices</li>
                    <li>Maintaining clear layouts and readable typography</li>
                    <li>Using consistent navigation and interface patterns</li>
                    <li>Providing responsive designs for different screen sizes</li>
                    <li>Improving usability for keyboard and assistive technology users</li>
                    <li>Reducing unnecessary complexity in environmental data presentation</li>
                  </ul>
                </div>
              </div>

              {/* Inclusive Design */}
              <div className="accessibility-simple-item">
                <div className="accessibility-simple-icon-box box-purple">
                  <Users size={20} />
                </div>
                <div className="accessibility-simple-content">
                  <h3>Inclusive Design</h3>
                  <p>NIRVAAN EarthLab is built around the principle that climate awareness should be understandable and accessible regardless of technical expertise or background.</p>
                  <p>Our goal is to simplify environmental information and sustainability insights so that students, educators, researchers, professionals, and everyday citizens can benefit from the platform.</p>
                </div>
              </div>

              {/* Continuous Improvement */}
              <div className="accessibility-simple-item">
                <div className="accessibility-simple-icon-box box-indigo">
                  <RefreshCw size={20} />
                </div>
                <div className="accessibility-simple-content">
                  <h3>Continuous Improvement</h3>
                  <p>Accessibility is an ongoing process. As our platform evolves, we will continue reviewing and improving accessibility features, user experience, and compatibility with modern web standards.</p>
                </div>
              </div>

              {/* Feedback */}
              <div className="accessibility-simple-item">
                <div className="accessibility-simple-icon-box box-teal">
                  <MessageSquare size={20} />
                </div>
                <div className="accessibility-simple-content">
                  <h3>Feedback</h3>
                  <p>If you encounter an accessibility issue or have suggestions that could improve the experience, we encourage you to contact us. User feedback plays an important role in helping us build a more inclusive platform for everyone.</p>
                </div>
              </div>

            </div>

            <div className="accessibility-simple-footer-banner">
              <span className="banner-icon"><Info size={16} /></span>
              <p>Together, we can make climate intelligence accessible to all.</p>
            </div>
          </motion.div>

          {/* Sidebar decorative element */}
          <div className="accessibility-simple-sidebar">
            <div className="accessibility-sidebar-sticky">
              <div className="minimalist-badge-card">
                <div className="badge-illustration">
                  <Accessibility className="badge-shield" size={64} />
                  <div className="badge-ring"></div>
                </div>
                <h4>Inclusive & Open</h4>
                <p>Ensuring that our platform is welcoming, usable, and clear for all visitors around the globe.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
