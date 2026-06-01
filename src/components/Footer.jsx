import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <h4>NIRVAAN</h4>
      <p style={{ fontSize: '0.875rem' }}>Supporting SDG 13: Climate Action</p>
      <div className="footer-divider"></div>
      <p style={{ fontSize: '0.75rem', opacity: 0.7 }}>© 2026 NIRVAAN.  All rights reserved.</p>
      <button
        onClick={() => {
          navigate('/documentation');
          window.scrollTo(0, 0);
        }}
        style={{
          marginTop: '0.85rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          background: 'transparent',
          border: '1px solid rgba(57,255,20,0.25)',
          color: 'var(--eco-main)',
          fontFamily: 'inherit',
          fontSize: '0.75rem',
          fontWeight: 600,
          padding: '0.4rem 0.9rem',
          borderRadius: '9999px',
          cursor: 'pointer',
          letterSpacing: '0.06em',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(57,255,20,0.08)';
          e.currentTarget.style.borderColor = 'rgba(57,255,20,0.6)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.borderColor = 'rgba(57,255,20,0.25)';
        }}
      >
        <FileText size={13} />
        View Emission Factors &amp; Documentation
      </button>
    </footer>
  );
};

export default Footer;