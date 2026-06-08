import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft, FileText, Info, AlertTriangle, Copyright, RefreshCw, BookOpen } from 'lucide-react';
import './TermsPage.css';

export default function TermsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page-simple">
      <div className="terms-simple-container">
        
        {/* Back Button */}
        <div className="terms-header-action">
          <button className="terms-simple-back" onClick={() => navigate('/')}>
            <ArrowLeft size={16} /> Back to Home
          </button>
        </div>

        <div className="terms-simple-grid-layout">
          {/* Main Card */}
          <motion.div 
            className="terms-simple-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <header className="terms-simple-header">
              <h1 className="terms-simple-title">
                Terms of <span className="text-accent-color">Service</span>
              </h1>
              <p className="terms-simple-meta">
                <span className="meta-label">Last Updated:</span> June 2026
              </p>
            </header>

            <div className="terms-simple-intro">
              <p>By accessing or using NIRVAAN EarthLab, you agree to comply with these Terms of Service. Please read them carefully.</p>
            </div>

            <div className="terms-simple-sections">
              <div className="terms-simple-item">
                <div className="terms-simple-icon-box box-blue">
                  <BookOpen size={20} />
                </div>
                <div className="terms-simple-content">
                  <h3>Platform Purpose & Usage</h3>
                  <p>The platform is provided for educational, informational, and environmental awareness purposes. Users agree not to misuse, disrupt, attempt unauthorized access, or interfere with the normal operation of the platform.</p>
                </div>
              </div>

              <div className="terms-simple-item">
                <div className="terms-simple-icon-box box-purple">
                  <Copyright size={20} />
                </div>
                <div className="terms-simple-content">
                  <h3>Intellectual Property</h3>
                  <p>All content, branding, visual assets, designs, research materials, and software components associated with NIRVAAN EarthLab remain the intellectual property of their respective owners unless otherwise stated.</p>
                </div>
              </div>

              <div className="terms-simple-item">
                <div className="terms-simple-icon-box box-indigo">
                  <AlertTriangle size={20} />
                </div>
                <div className="terms-simple-content">
                  <h3>Disclaimer of Accuracy</h3>
                  <p>While we strive to provide accurate environmental insights and calculations, we do not guarantee the completeness, accuracy, or availability of all information at all times.</p>
                </div>
              </div>

              <div className="terms-simple-item">
                <div className="terms-simple-icon-box box-teal">
                  <RefreshCw size={20} />
                </div>
                <div className="terms-simple-content">
                  <h3>Modifications & Revisions</h3>
                  <p>NIRVAAN EarthLab reserves the right to update, modify, suspend, or discontinue any feature or service without prior notice. Continued use of the platform constitutes acceptance of any future revisions to these terms.</p>
                </div>
              </div>
            </div>

            <div className="terms-simple-footer-banner">
              <span className="banner-icon"><Info size={16} /></span>
              <p>Your agreement to these terms helps us maintain a reliable and safe environment for climate awareness.</p>
            </div>
          </motion.div>

          {/* Sidebar decorative element */}
          <div className="terms-simple-sidebar">
            <div className="terms-sidebar-sticky">
              <div className="minimalist-badge-card">
                <div className="badge-illustration">
                  <FileText className="badge-shield" size={64} />
                  <div className="badge-ring"></div>
                </div>
                <h4>Fair & Transparent</h4>
                <p>NIRVAAN EarthLab operates under clear guidelines to promote trust and scientific collaboration.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
