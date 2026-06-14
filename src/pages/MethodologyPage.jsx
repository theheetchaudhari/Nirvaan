import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  BookOpen,
  Database,
  Calculator,
  Layers,
  BarChart3,
  Lightbulb,
  RefreshCw,
  Leaf
} from 'lucide-react';
import './MethodologyPage.css';

export default function MethodologyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="methodology-page-simple">
      <div className="methodology-simple-container">
        
        {/* Back Button */}
        <div className="methodology-header-action">
          <button className="methodology-simple-back" onClick={() => navigate('/')}>
            <ArrowLeft size={16} /> Back to Home
          </button>
        </div>

        <div className="methodology-simple-grid-layout">
          {/* Main Card */}
          <motion.div 
            className="methodology-simple-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <header className="methodology-simple-header">
              <h1 className="methodology-simple-title">
                Scientific <span className="text-accent-color">Methodology</span>
              </h1>
              <p className="methodology-simple-meta">
                <span className="meta-label">Last Updated:</span> June 2026
              </p>
            </header>

            <div className="methodology-simple-intro">
              <p>
                NIRVAAN EarthLab combines environmental data, scientific emission factors, and user-provided activity information to generate meaningful sustainability insights.
              </p>
            </div>

            <div className="methodology-simple-sections">
              
              {/* Overview */}
              <div className="methodology-simple-item">
                <div className="methodology-simple-icon-box box-green">
                  <BookOpen size={20} />
                </div>
                <div className="methodology-simple-content">
                  <h3>Overview</h3>
                  <p>
                    Our methodology is designed around three core principles:
                  </p>
                  <ul className="methodology-principles-list">
                    <li><strong>Simplicity:</strong> Making environmental impact assessments understandable for everyone, avoiding overly technical jargon.</li>
                    <li><strong>Transparency:</strong> Documenting and showing how calculations are done and what factors are used.</li>
                    <li><strong>Scientific Credibility:</strong> Grounding calculations in peer-reviewed scientific resources and reputable government databases.</li>
                  </ul>
                  <p style={{ marginTop: '0.5rem' }}>
                    The goal is to make environmental impact assessment accessible while maintaining consistency with established sustainability practices.
                  </p>
                </div>
              </div>

              {/* Data Collection */}
              <div className="methodology-simple-item">
                <div className="methodology-simple-icon-box box-blue">
                  <Database size={20} />
                </div>
                <div className="methodology-simple-content">
                  <h3>Data Collection</h3>
                  <p>
                    Environmental insights are generated using information voluntarily provided by users through platform tools and calculators.
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    Depending on the service being used, inputs may include:
                  </p>
                  <ul className="methodology-bullets-list">
                    <li>Transportation habits (daily commute distances, vehicle fuel efficiency, transit modes)</li>
                    <li>Electricity consumption (monthly billing, household energy usage)</li>
                    <li>Water usage (daily consumption, washing habits)</li>
                    <li>Household energy usage (LPG, gas, wood, or heating parameters)</li>
                    <li>Dietary preferences (meat-based, vegetarian, vegan, and local sourcing options)</li>
                    <li>Environmental and weather-related data</li>
                  </ul>
                  <p style={{ marginTop: '0.5rem' }}>
                    Only the information required for calculations and analysis is processed.
                  </p>
                </div>
              </div>

              {/* Environmental Calculations */}
              <div className="methodology-simple-item">
                <div className="methodology-simple-icon-box box-purple">
                  <Calculator size={20} />
                </div>
                <div className="methodology-simple-content">
                  <h3>Environmental Calculations</h3>
                  <p>
                    NIRVAAN EarthLab uses standardized emission factors and environmental datasets to estimate carbon emissions and sustainability metrics.
                  </p>
                  <div className="calculation-formula-callout">
                    <span className="formula-label">Calculation Framework:</span>
                    <div className="formula-text">
                      Activity Data × Emission Factor = Estimated Environmental Impact
                    </div>
                  </div>
                  <p style={{ marginTop: '0.75rem' }}>
                    This approach allows complex environmental impacts to be translated into understandable and actionable metrics (e.g., kilograms of CO₂ equivalent or equivalent trees required to absorb the emissions).
                  </p>
                </div>
              </div>

              {/* Emission Factors */}
              <div className="methodology-simple-item">
                <div className="methodology-simple-icon-box box-indigo">
                  <Layers size={20} />
                </div>
                <div className="methodology-simple-content">
                  <h3>Emission Factors</h3>
                  <p>
                    Emission factors are derived from publicly available government publications, environmental agencies, and scientific research.
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    Sources may include:
                  </p>
                  <ul className="methodology-bullets-list">
                    <li>Government environmental datasets</li>
                    <li>Energy and electricity authorities</li>
                    <li>Climate research publications</li>
                    <li>International sustainability frameworks</li>
                    <li>Peer-reviewed environmental studies</li>
                  </ul>
                  <p style={{ marginTop: '0.5rem' }}>
                    These factors are periodically reviewed and updated when reliable new data becomes available.
                  </p>
                </div>
              </div>

              {/* Analysis & Classification */}
              <div className="methodology-simple-item">
                <div className="methodology-simple-icon-box box-teal">
                  <BarChart3 size={20} />
                </div>
                <div className="methodology-simple-content">
                  <h3>Analysis &amp; Classification</h3>
                  <p>
                    After calculations are completed, results are categorized into understandable impact levels.
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    The platform evaluates environmental indicators and presents findings through:
                  </p>
                  <ul className="methodology-bullets-list">
                    <li><strong>Impact ratings:</strong> High, Medium, or Low classifications to give users instant visual context.</li>
                    <li><strong>Sustainability scores:</strong> Metrics to track performance relative to global sustainability targets.</li>
                    <li><strong>Environmental summaries:</strong> Concise texts highlighting the primary sources of emission.</li>
                    <li><strong>Visual data representations:</strong> Pie charts and metric breakdowns displaying resource consumption.</li>
                    <li><strong>Actionable recommendations:</strong> Practical tips that are tailored to the user's input profile.</li>
                  </ul>
                  <p style={{ marginTop: '0.5rem' }}>
                    This helps users quickly understand their environmental footprint without requiring technical expertise.
                  </p>
                </div>
              </div>

              {/* Recommendations */}
              <div className="methodology-simple-item">
                <div className="methodology-simple-icon-box box-orange">
                  <Lightbulb size={20} />
                </div>
                <div className="methodology-simple-content">
                  <h3>Recommendations</h3>
                  <p>
                    Based on calculated results, NIRVAAN EarthLab provides practical sustainability recommendations designed to encourage environmentally responsible behavior.
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    Recommendations focus on areas such as:
                  </p>
                  <ul className="methodology-bullets-list">
                    <li><strong>Energy efficiency:</strong> Smart cooling/heating, LED lighting, and vampire power reduction.</li>
                    <li><strong>Sustainable transportation:</strong> Carpooling, public transit, biking, and fuel efficiency optimization.</li>
                    <li><strong>Resource conservation:</strong> Smart water fixtures, recycling, and decreasing general water wastage.</li>
                    <li><strong>Waste reduction:</strong> Composting, eliminating single-use plastics, and mindful consumerism.</li>
                    <li><strong>Climate-conscious lifestyle choices:</strong> Sustainable diets, supporting green initiatives, and local buying.</li>
                  </ul>
                  <p style={{ marginTop: '0.5rem' }}>
                    The objective is to convert awareness into measurable action.
                  </p>
                </div>
              </div>

              {/* Continuous Improvement */}
              <div className="methodology-simple-item">
                <div className="methodology-simple-icon-box box-violet">
                  <RefreshCw size={20} />
                </div>
                <div className="methodology-simple-content">
                  <h3>Continuous Improvement</h3>
                  <p>
                    Environmental science, climate data, and sustainability methodologies continue to evolve.
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    NIRVAAN EarthLab regularly reviews its calculation models, datasets, and analytical approaches to improve accuracy, usability, and educational value while maintaining transparency in how environmental insights are generated.
                  </p>
                </div>
              </div>

              {/* Our Approach */}
              <div className="methodology-simple-item">
                <div className="methodology-simple-icon-box box-green">
                  <Leaf size={20} />
                </div>
                <div className="methodology-simple-content">
                  <h3>Our Approach</h3>
                  <p>
                    NIRVAAN EarthLab does not aim to replace professional environmental audits or certified carbon accounting systems.
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    Instead, our methodology focuses on empowering individuals through accessible climate intelligence, helping people better understand the environmental impact of everyday decisions and encouraging sustainable action.
                  </p>
                </div>
              </div>

            </div>

            <div className="methodology-simple-footer-banner">
              <span className="banner-icon"><Leaf size={16} /></span>
              <p>
                <strong>Building accessible climate intelligence through scientific transparency.</strong>
              </p>
            </div>
          </motion.div>

          {/* Sidebar decorative element */}
          <div className="methodology-simple-sidebar">
            <div className="methodology-sidebar-sticky">
              <div className="minimalist-badge-card">
                <div className="badge-illustration">
                  <Leaf className="badge-shield" size={64} style={{ color: '#10b981' }} />
                  <div className="badge-ring"></div>
                </div>
                <h4>Scientific Basis</h4>
                <p>Calculations are backed by verified factors to ensure data accuracy and integrity.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
