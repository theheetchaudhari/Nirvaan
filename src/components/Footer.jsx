import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Mail, Send } from 'lucide-react';

// Custom inline SVG icons matching user public assets
const TwitterXIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
  </svg>
);

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePlatformClick = (id) => {
    if (id === 'weather') {
      navigate('/weather');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
      return;
    }

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const formData = new FormData(e.target);
      const data = {
        name: formData.get('name'),
        message: formData.get('message'),
        _subject: 'New Anonymous Feedback from Nirvaan 🌱',
      };

      const response = await fetch('https://formsubmit.co/ajax/nirvaan.earthlab@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsSuccess(true);
        e.target.reset();
      } else {
        setErrorMessage('Feedback service is offline. Please email us directly.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* COLUMN 1 — BRAND */}
          <div className="footer-column brand-column">
            <div
              className="footer-brand"
              onClick={() => handlePlatformClick('home')}
              style={{ cursor: 'pointer' }}
            >
              <img
                src="/leaf-icon.svg"
                alt="NIRVAAN EarthLab Logo"
                className="footer-logo-img"
              />
              <div className="footer-brand-text">
                <span className="brand-title">NIRVAAN</span>
                <span className="brand-accent">EarthLab</span>
              </div>
            </div>
            <p className="footer-description">
              NIRVAAN EarthLab is a climate intelligence platform focused on environmental awareness, sustainability insights, weather analytics, and carbon footprint education.
            </p>
          </div>

          {/* COLUMN 2 — PLATFORM */}
          <div className="footer-column">
            <h5>Platform</h5>
            <ul className="footer-links-list">
              <li>
                <button onClick={() => handlePlatformClick('home')} className="footer-link">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handlePlatformClick('calculator')} className="footer-link">
                  Carbon Calculator
                </button>
              </li>
              <li>
                <button onClick={() => handlePlatformClick('weather')} className="footer-link">
                  Weather Intelligence
                </button>
              </li>
              <li>
                <button onClick={() => handlePlatformClick('insights')} className="footer-link">
                  Climate Insights
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 — RESOURCES */}
          <div className="footer-column">
            <h5>Resources</h5>
            <ul className="footer-links-list">
              <li><Link to="/about" className="footer-link">About NIRVAAN</Link></li>
              <li><Link to="/methodology" className="footer-link">Methodology</Link></li>
              <li><Link to="/emission-factors" className="footer-link">Emission Factors</Link></li>
              <li><Link to="/learning-hub" className="footer-link">Climate Learning Hub</Link></li>
              <li><Link to="/research" className="footer-link">Research</Link></li>
              <li><Link to="/roadmap" className="footer-link">Roadmap</Link></li>
            </ul>
          </div>

          {/* COLUMN 4 — LEGAL */}
          <div className="footer-column">
            <h5>Legal</h5>
            <ul className="footer-links-list">
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="footer-link">Cookie Policy</Link></li>
              <li><Link to="/disclaimer" className="footer-link">Disclaimer</Link></li>
              <li><Link to="/accessibility" className="footer-link">Accessibility</Link></li>
            </ul>
          </div>

          {/* COLUMN 5 — CONTACT */}
          <div id="contact" className="footer-column contact-column">
            <h5>Contact</h5>
            <div className="footer-socials" style={{ marginTop: '0', marginBottom: '1rem' }}>
              <a href="mailto:nirvaan.earthlab@gmail.com" className="footer-social-link" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://www.linkedin.com/in/nirvaanearthlab" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href="https://x.com/NirvaanEarthlab" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Twitter/X">
                <TwitterXIcon size={18} />
              </a>
              <a href="https://www.instagram.com/nirvaan.earthlab/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
            </div>

            {isSuccess ? (
              <div className="footer-feedback-success">
                <p>Thank you! Your feedback has been sent. 🌱</p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setErrorMessage('');
                  }}
                  className="footer-form-btn"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="footer-feedback-form">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  required
                  className="footer-form-input"
                />
                <textarea
                  name="message"
                  placeholder="feedback..."
                  rows="2"
                  required
                  className="footer-form-textarea"
                ></textarea>

                {errorMessage && (
                  <div className="footer-form-error">
                    {errorMessage}
                  </div>
                )}

                <button type="submit" disabled={isSubmitting} className="footer-form-btn">
                  <Send size={12} style={{ marginRight: '4px', display: 'inline-block', verticalAlign: 'middle' }} />
                  <span style={{ verticalAlign: 'middle' }}>{isSubmitting ? 'sending...' : 'send'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FOOTER BOTTOM BAR */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>© 2026 NIRVAAN EarthLab</span>
            <span className="footer-bottom-divider">|</span>
            <span className="footer-bottom-tagline">Built for Climate Awareness & Sustainability</span>
          </div>
          <div className="footer-bottom-right">
            <Link to="/privacy" className="footer-bottom-link">Privacy</Link>
            <span className="footer-bottom-dot">•</span>
            <Link to="/terms" className="footer-bottom-link">Terms</Link>
            <span className="footer-bottom-dot">•</span>
            <button onClick={() => handlePlatformClick('contact')} className="footer-bottom-link-btn">Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;