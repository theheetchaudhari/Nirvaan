import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Clock, Target, Cpu, TrendingUp, Compass } from 'lucide-react';
import './RoadmapPage.css';

export default function RoadmapPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="roadmap-page-simple">
      <div className="roadmap-simple-container">
        
        {/* Back Button */}
        <div className="roadmap-header-action">
          <button className="roadmap-simple-back" onClick={() => navigate('/')}>
            <ArrowLeft size={16} /> Back to Home
          </button>
        </div>

        <div className="roadmap-simple-grid-layout">
          {/* Main Card */}
          <motion.div 
            className="roadmap-simple-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <header className="roadmap-simple-header">
              <h1 className="roadmap-simple-title">
                Building the Future of <span className="text-accent-color">Climate Intelligence</span>
              </h1>
              <p className="roadmap-simple-meta">
                <span className="meta-label">Roadmap:</span> The Evolution of NIRVAAN EarthLab
              </p>
            </header>

            <div className="roadmap-simple-intro">
              <p>
                NIRVAAN EarthLab is continuously evolving to make environmental awareness more accessible, actionable, and impactful. Our roadmap reflects our commitment to developing innovative tools that help individuals and communities make informed sustainability decisions.
              </p>
            </div>

            <div className="roadmap-simple-sections">
              
              {/* Current Foundation */}
              <div className="roadmap-simple-item">
                <div className="roadmap-simple-icon-box box-green">
                  <CheckCircle2 size={20} />
                </div>
                <div className="roadmap-simple-content">
                  <h3>Current Foundation</h3>
                  <p>
                    The first phase of NIRVAAN EarthLab focuses on creating accessible environmental tools designed for everyday users.
                  </p>
                  <p style={{ marginTop: '0.5rem', fontWeight: 600 }}>Available Today:</p>
                  <ul className="roadmap-focus-list">
                    <li>Carbon Footprint Calculator</li>
                    <li>Weather Intelligence Dashboard</li>
                    <li>Environmental Awareness Resources</li>
                    <li>Sustainability-Focused User Experience</li>
                    <li>Mobile Responsive Platform</li>
                  </ul>
                  <p style={{ marginTop: '0.5rem' }}>
                    These tools establish the foundation for a broader climate intelligence ecosystem.
                  </p>
                </div>
              </div>

              {/* Short-Term Goals */}
              <div className="roadmap-simple-item">
                <div className="roadmap-simple-icon-box box-blue">
                  <Clock size={20} />
                </div>
                <div className="roadmap-simple-content">
                  <h3>Short-Term Goals</h3>
                  <ul className="roadmap-focus-list" style={{ marginLeft: 0, listStyle: 'none' }}>
                    <li style={{ marginBottom: '0.75rem' }}>
                      <strong>Enhanced Sustainability Insights:</strong> Provide deeper environmental analysis and more personalized recommendations based on user activities and environmental trends.
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      <strong>Improved Data Visualization:</strong> Introduce interactive charts, environmental indicators, and visual reports that make climate data easier to understand.
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      <strong>Expanded Educational Resources:</strong> Develop learning modules, climate explainers, and sustainability guides for students, educators, and lifelong learners.
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      <strong>Accessibility Improvements:</strong> Continue improving usability, performance, and accessibility across devices and platforms.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mid-Term Vision */}
              <div className="roadmap-simple-item">
                <div className="roadmap-simple-icon-box box-purple">
                  <Target size={20} />
                </div>
                <div className="roadmap-simple-content">
                  <h3>Mid-Term Vision</h3>
                  <ul className="roadmap-focus-list" style={{ marginLeft: 0, listStyle: 'none' }}>
                    <li style={{ marginBottom: '0.75rem' }}>
                      <strong>Environmental Impact Tracking:</strong> Enable users to monitor environmental metrics over time and better understand long-term sustainability progress.
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      <strong>Personalized Climate Recommendations:</strong> Deliver smarter suggestions that help users reduce their environmental footprint through practical actions.
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      <strong>Community Features:</strong> Explore ways for individuals, schools, and organizations to participate in sustainability challenges and collective climate initiatives.
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      <strong>Multi-Language Support:</strong> Expand accessibility by providing content and tools in multiple languages.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Long-Term Vision */}
              <div className="roadmap-simple-item">
                <div className="roadmap-simple-icon-box box-violet">
                  <Cpu size={20} />
                </div>
                <div className="roadmap-simple-content">
                  <h3>Long-Term Vision</h3>
                  <ul className="roadmap-focus-list" style={{ marginLeft: 0, listStyle: 'none' }}>
                    <li style={{ marginBottom: '0.75rem' }}>
                      <strong>Climate Intelligence Platform:</strong> Transform NIRVAAN EarthLab into a comprehensive environmental intelligence ecosystem that combines sustainability analytics, education, and decision-support tools.
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      <strong>AI-Powered Environmental Insights:</strong> Leverage artificial intelligence to provide more meaningful climate analysis, forecasting, and sustainability recommendations.
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      <strong>Research &amp; Innovation Hub:</strong> Support environmental research, open knowledge initiatives, and collaborative climate innovation projects.
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      <strong>Educational Partnerships:</strong> Collaborate with schools, colleges, and organizations to promote climate literacy and sustainability awareness.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Looking Ahead */}
              <div className="roadmap-simple-item">
                <div className="roadmap-simple-icon-box box-indigo">
                  <TrendingUp size={20} />
                </div>
                <div className="roadmap-simple-content">
                  <h3>Looking Ahead</h3>
                  <p>
                    The roadmap will continue to evolve as new technologies, environmental challenges, and opportunities emerge.
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    Our mission remains unchanged: <strong>To make climate intelligence accessible, understandable, and actionable for everyone.</strong>
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    Every feature we build moves us one step closer to a future where data-driven environmental awareness empowers meaningful climate action.
                  </p>
                </div>
              </div>

            </div>

            <div className="roadmap-simple-footer-banner">
              <span className="banner-icon"><Compass size={16} /></span>
              <p>
                <strong>Navigating towards a resilient, data-empowered sustainable future.</strong>
              </p>
            </div>
          </motion.div>

          {/* Sidebar decorative element */}
          <div className="roadmap-simple-sidebar">
            <div className="roadmap-sidebar-sticky">
              <div className="minimalist-badge-card">
                <div className="badge-illustration">
                  <Compass className="badge-shield" size={64} style={{ color: '#10b981' }} />
                  <div className="badge-ring"></div>
                </div>
                <h4>Evolving Ecology</h4>
                <p>Track the future features and milestones of NIRVAAN EarthLab as we build tools for collective climate action.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
