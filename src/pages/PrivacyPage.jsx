import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft, Lock, FileText, Eye, CheckCircle2, Cookie, Info } from 'lucide-react';
import './PrivacyPage.css';

export default function PrivacyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page-simple">
      <div className="privacy-simple-container">
        
        {/* Back Button */}
        <div className="privacy-header-action">
          <button className="privacy-simple-back" onClick={() => navigate('/')}>
            <ArrowLeft size={16} /> Back to Home
          </button>
        </div>

        <div className="privacy-simple-grid-layout">
          {/* Main Card */}
          <motion.div 
            className="privacy-simple-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <header className="privacy-simple-header">
              <h1 className="privacy-simple-title">
                Privacy <span className="text-accent-color">Policy</span>
              </h1>
              <p className="privacy-simple-meta">
                <span className="meta-label">Last Updated:</span> June 2026
              </p>
            </header>

            <div className="privacy-simple-intro">
              <p>At NIRVAAN EarthLab, we respect your privacy and are committed to protecting the information you share with us.</p>
            </div>

            <div className="privacy-simple-sections">
              <div className="privacy-simple-item">
                <div className="privacy-simple-icon-box box-blue">
                  <Eye size={20} />
                </div>
                <div className="privacy-simple-content">
                  <h3>Information We Collect</h3>
                  <p>We may collect limited information such as device details, browser information, platform usage statistics, and data voluntarily submitted through forms or environmental tools. This information helps us improve platform performance, enhance user experience, and maintain service reliability.</p>
                </div>
              </div>

              <div className="privacy-simple-item">
                <div className="privacy-simple-icon-box box-purple">
                  <FileText size={20} />
                </div>
                <div className="privacy-simple-content">
                  <h3>How We Use Information</h3>
                  <p>Information collected through NIRVAAN EarthLab is used solely for operating and improving our services, understanding user engagement, and supporting sustainability-focused research and educational initiatives.</p>
                </div>
              </div>

              <div className="privacy-simple-item">
                <div className="privacy-simple-icon-box box-indigo">
                  <Lock size={20} />
                </div>
                <div className="privacy-simple-content">
                  <h3>Information Sharing</h3>
                  <p>We do not sell, rent, or trade personal information to third parties.</p>
                </div>
              </div>

              <div className="privacy-simple-item">
                <div className="privacy-simple-icon-box box-royal">
                  <Shield size={20} />
                </div>
                <div className="privacy-simple-content">
                  <h3>Security Measures</h3>
                  <p>Reasonable security measures are implemented to help protect information from unauthorized access, misuse, or disclosure. While no online platform can guarantee absolute security, we continuously work to maintain a secure environment.</p>
                </div>
              </div>

              <div className="privacy-simple-item">
                <div className="privacy-simple-icon-box box-teal">
                  <CheckCircle2 size={20} />
                </div>
                <div className="privacy-simple-content">
                  <h3>User Rights</h3>
                  <p>Users may request information regarding data associated with them, subject to applicable laws and technical limitations.</p>
                </div>
              </div>

              <div className="privacy-simple-item">
                <div className="privacy-simple-icon-box box-violet">
                  <Cookie size={20} />
                </div>
                <div className="privacy-simple-content">
                  <h3>Cookies &amp; Tracking</h3>
                  <p>For information regarding cookies and tracking technologies, please refer to our Cookie Policy.</p>
                </div>
              </div>
            </div>

            <div className="privacy-simple-footer-banner">
              <span className="banner-icon"><Info size={16} /></span>
              <p>By using NIRVAAN EarthLab, you agree to the practices described in this Privacy Policy.</p>
            </div>
          </motion.div>

          {/* Sidebar decorative element (simple, minimalist illustration style block) */}
          <div className="privacy-simple-sidebar">
            <div className="privacy-sidebar-sticky">
              <div className="minimalist-badge-card">
                <div className="badge-illustration">
                  <Shield className="badge-shield" size={64} />
                  <div className="badge-ring"></div>
                </div>
                <h4>Secure &amp; Transparent</h4>
                <p>NIRVAAN EarthLab is designed with privacy-first principles to ensure educational and scientific integrity.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
