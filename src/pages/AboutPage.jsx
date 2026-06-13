import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Leaf, Target, Heart, Sparkles, Cpu } from 'lucide-react';
import './AboutPage.css';

export default function AboutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-simple">
      <div className="about-simple-container">
        
        {/* Back Button */}
        <div className="about-header-action">
          <button className="about-simple-back" onClick={() => navigate('/')}>
            <ArrowLeft size={16} /> Back to Home
          </button>
        </div>

        <div className="about-simple-grid-layout">
          {/* Main Card */}
          <motion.div 
            className="about-simple-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <header className="about-simple-header">
              <h1 className="about-simple-title">
                About <span className="text-accent-color">NIRVAAN</span>
              </h1>
              <p className="about-simple-meta">
                <span className="meta-label">Last Updated:</span> June 2026
              </p>
            </header>

            <div className="about-simple-intro">
              <p>
                NIRVAAN EarthLab was founded to transform complex environmental information into accessible tools, actionable insights, and meaningful learning experiences.
              </p>
            </div>

            <div className="about-simple-sections">
              
              {/* Our Story */}
              <div className="about-simple-item">
                <div className="about-simple-icon-box box-blue">
                  <BookOpen size={20} />
                </div>
                <div className="about-simple-content">
                  <h3>Our Story</h3>
                  <p>
                    NIRVAAN EarthLab was created with a simple belief: meaningful climate action begins with awareness.
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    As climate challenges continue to grow, individuals often struggle to understand how their everyday choices impact the environment. While environmental data exists in abundance, it is often difficult to access, interpret, and apply in daily life.
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    We bridge that gap by transforming environmental metrics into tools that anyone can use in their daily routine.
                  </p>
                </div>
              </div>

              {/* What is NIRVAAN */}
              <div className="about-simple-item">
                <div className="about-simple-icon-box box-green">
                  <Leaf size={20} />
                </div>
                <div className="about-simple-content">
                  <h3>What is NIRVAAN?</h3>
                  <div className="acronym-callout">
                    <strong>Net Impact Reduction Via Action &amp; Analytics for Nature</strong>
                  </div>
                  <p style={{ marginTop: '0.75rem' }}>
                    The name reflects our mission to combine data, technology, and environmental responsibility to help people better understand their relationship with the planet.
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    We believe that sustainability should not be limited to researchers, governments, or large organizations. Every individual deserves access to reliable environmental information and practical tools that support informed decision-making.
                  </p>
                </div>
              </div>

              {/* What We Do */}
              <div className="about-simple-item">
                <div className="about-simple-icon-box box-purple">
                  <Cpu size={20} />
                </div>
                <div className="about-simple-content">
                  <h3>What We Do</h3>
                  <p>
                    NIRVAAN EarthLab develops climate-focused digital tools designed to promote environmental awareness and sustainability.
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    Our ecosystem currently focuses on:
                  </p>
                  <ul className="about-focus-list">
                    <li><strong>Carbon Footprint Estimation:</strong> Transforming activity data into tangible metrics.</li>
                    <li><strong>Weather Intelligence &amp; Environmental Analytics:</strong> Tracking atmospheric parameters and AQI metrics dynamically.</li>
                    <li><strong>Climate Awareness &amp; Education:</strong> Democratizing access to environmental baseline factors.</li>
                    <li><strong>Sustainability Insights:</strong> Offering structured tips to promote eco-friendly behavior.</li>
                    <li><strong>Environmental Data Visualization:</strong> Using graphical elements to conceptualize ecological impact.</li>
                  </ul>
                  <p style={{ marginTop: '0.5rem' }}>
                    Each tool is designed with simplicity, accessibility, and scientific credibility in mind.
                  </p>
                </div>
              </div>

              {/* Our Mission & Vision */}
              <div className="about-simple-item">
                <div className="about-simple-icon-box box-teal">
                  <Target size={20} />
                </div>
                <div className="about-simple-content">
                  <h3>Our Mission &amp; Vision</h3>
                  <div className="mission-vision-grid">
                    <div className="mission-box">
                      <h4 className="sub-box-title">Our Mission</h4>
                      <p>To make climate intelligence accessible, understandable, and actionable for everyone.</p>
                      <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: '#64748b', lineHeight: '1.4' }}>
                        We aim to empower students, citizens, educators, and organizations with the knowledge and tools needed to make environmentally responsible decisions.
                      </p>
                    </div>
                    <div className="vision-box">
                      <h4 className="sub-box-title">Our Vision</h4>
                      <p>To build a future where environmental awareness becomes part of everyday decision-making.</p>
                      <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: '#64748b', lineHeight: '1.4' }}>
                        Through technology, education, and data-driven insights, we envision a world where sustainability is not an afterthought but a natural part of how people live, learn, and innovate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why It Matters */}
              <div className="about-simple-item">
                <div className="about-simple-icon-box box-indigo">
                  <Heart size={20} />
                </div>
                <div className="about-simple-content">
                  <h3>Why It Matters</h3>
                  <p>
                    Climate change is one of the defining challenges of our generation. Small actions, when multiplied across communities, can create meaningful environmental impact.
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    By helping individuals understand their environmental footprint and the consequences of daily choices, NIRVAAN EarthLab seeks to transform awareness into action and action into measurable change.
                  </p>
                </div>
              </div>

              {/* Looking Ahead */}
              <div className="about-simple-item">
                <div className="about-simple-icon-box box-violet">
                  <Sparkles size={20} />
                </div>
                <div className="about-simple-content">
                  <h3>Looking Ahead</h3>
                  <p>
                    NIRVAAN EarthLab continues to evolve as a growing climate intelligence platform. Future initiatives include advanced sustainability analytics, environmental research tools, educational resources, and community-driven climate innovation.
                  </p>
                </div>
              </div>

            </div>

            <div className="about-simple-footer-banner">
              <span className="banner-icon"><Leaf size={16} /></span>
              <p>
                <strong>Building Climate Intelligence for a Sustainable Planet.</strong>
              </p>
            </div>
          </motion.div>

          {/* Sidebar decorative element */}
          <div className="about-simple-sidebar">
            <div className="about-sidebar-sticky">
              <div className="minimalist-badge-card">
                <div className="badge-illustration">
                  <Leaf className="badge-shield" size={64} style={{ color: '#10b981' }} />
                  <div className="badge-ring"></div>
                </div>
                <h4>Active Awareness</h4>
                <p>NIRVAAN EarthLab supports you with analytics and clear metrics for everyday green decisions.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
