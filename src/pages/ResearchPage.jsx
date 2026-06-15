import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Target, Database, Activity, Compass, Share2, Search } from 'lucide-react';
import './ResearchPage.css';

export default function ResearchPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="research-page-simple">
      <div className="research-simple-container">
        
        {/* Back Button */}
        <div className="research-header-action">
          <button className="research-simple-back" onClick={() => navigate('/')}>
            <ArrowLeft size={16} /> Back to Home
          </button>
        </div>

        <div className="research-simple-grid-layout">
          {/* Main Card */}
          <motion.div 
            className="research-simple-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <header className="research-simple-header">
              <h1 className="research-simple-title">
                Research <span className="text-accent-color">Lab</span>
              </h1>
              <p className="research-simple-meta">
                <span className="meta-label">Focus:</span> Evidence-Driven Climate Intelligence
              </p>
            </header>

            <div className="research-simple-intro">
              <p>
                Research forms the foundation of everything we build at NIRVAAN EarthLab. Our tools, methodologies, and environmental insights are developed using publicly available scientific studies, government datasets, sustainability frameworks, and climate research. We believe that environmental awareness should be supported by reliable evidence, transparent methodologies, and accessible knowledge.
              </p>
            </div>

            <div className="research-simple-sections">
              
              {/* Our Research Focus */}
              <div className="research-simple-item">
                <div className="research-simple-icon-box box-blue">
                  <Target size={20} />
                </div>
                <div className="research-simple-content">
                  <h3>Our Research Focus</h3>
                  <p>
                    NIRVAAN EarthLab currently focuses on research and development in the following areas:
                  </p>
                  <ul className="research-bullet-list">
                    <li>Carbon Footprint Assessment</li>
                    <li>Climate Awareness & Literacy</li>
                    <li>Environmental Data Analytics</li>
                    <li>Sustainable Lifestyle Practices</li>
                    <li>Weather & Environmental Intelligence</li>
                    <li>Climate Technology Applications</li>
                  </ul>
                  <p style={{ marginTop: '0.5rem' }}>
                    Our goal is to transform scientific information into practical tools that help individuals better understand their environmental impact.
                  </p>
                </div>
              </div>

              {/* Data & Sources */}
              <div className="research-simple-item">
                <div className="research-simple-icon-box box-purple">
                  <Database size={20} />
                </div>
                <div className="research-simple-content">
                  <h3>Data &amp; Sources</h3>
                  <p>
                    To ensure credibility and transparency, our calculations and environmental insights are informed by recognized sources, including:
                  </p>
                  <ul className="research-bullet-list">
                    <li>Government environmental agencies</li>
                    <li>Energy and electricity authorities</li>
                    <li>Climate and sustainability research institutions</li>
                    <li>International environmental frameworks</li>
                    <li>Peer-reviewed scientific publications</li>
                  </ul>
                  <p style={{ marginTop: '0.5rem' }}>
                    We continuously review available research and update methodologies when more accurate or relevant information becomes available.
                  </p>
                </div>
              </div>

              {/* Current Work */}
              <div className="research-simple-item">
                <div className="research-simple-icon-box box-indigo">
                  <Activity size={20} />
                </div>
                <div className="research-simple-content">
                  <h3>Current Work</h3>
                  <p>
                    NIRVAAN EarthLab is actively exploring ways to improve environmental awareness through technology. Current areas of development include:
                  </p>
                  <ul className="research-bullet-list">
                    <li>Carbon footprint estimation models</li>
                    <li>Environmental impact visualization</li>
                    <li>Climate education resources</li>
                    <li>Sustainability-focused analytics</li>
                    <li>User-friendly environmental reporting</li>
                  </ul>
                  <p style={{ marginTop: '0.5rem' }}>
                    These initiatives are designed to make climate intelligence more accessible to students, citizens, educators, and organizations.
                  </p>
                </div>
              </div>

              {/* Future Research Directions */}
              <div className="research-simple-item">
                <div className="research-simple-icon-box box-teal">
                  <Compass size={20} />
                </div>
                <div className="research-simple-content">
                  <h3>Future Research Directions</h3>
                  <p>
                    As the platform evolves, future research efforts may include:
                  </p>
                  <ul className="research-bullet-list">
                    <li>AI-powered sustainability recommendations</li>
                    <li>Climate behavior analysis</li>
                    <li>Environmental risk visualization</li>
                    <li>Advanced carbon accounting methodologies</li>
                    <li>Community-based climate impact studies</li>
                    <li>Educational technology for sustainability learning</li>
                  </ul>
                </div>
              </div>

              {/* Open Knowledge Philosophy */}
              <div className="research-simple-item">
                <div className="research-simple-icon-box box-violet">
                  <Share2 size={20} />
                </div>
                <div className="research-simple-content">
                  <h3>Open Knowledge Philosophy</h3>
                  <p>
                    We believe climate awareness grows when knowledge is shared. NIRVAAN EarthLab supports transparency, environmental education, and the responsible use of data to encourage informed decision-making and positive environmental action.
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    By combining research, technology, and sustainability, we aim to build tools that transform awareness into measurable impact.
                  </p>
                </div>
              </div>

            </div>

            <div className="research-simple-footer-banner">
              <span className="banner-icon"><BookOpen size={16} /></span>
              <p>
                <strong>Research. Data. Action. Sustainability.</strong>
              </p>
            </div>
          </motion.div>

          {/* Sidebar decorative element */}
          <div className="research-simple-sidebar">
            <div className="research-sidebar-sticky">
              <div className="minimalist-badge-card">
                <div className="badge-illustration">
                  <Search className="badge-shield" size={64} style={{ color: '#4f46e5' }} />
                  <div className="badge-ring"></div>
                </div>
                <h4>Evidence-Based</h4>
                <p>NIRVAAN EarthLab's insights are driven by reliable climate data and open research methodologies.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
