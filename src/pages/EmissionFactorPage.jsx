import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FileText, ArrowLeft, Info, BookOpen, Calculator,
  Car, Zap, Droplets, Flame, Leaf, ChevronDown, ExternalLink
} from 'lucide-react';
import './EmissionFactorPage.css';

/* ─────────────────────────────────────────
   REUSABLE HELPERS
   ───────────────────────────────────────── */
const Bq = ({ children }) => (
  <blockquote className="ef-bq">{children}</blockquote>
);

const Code = ({ children }) => (
  <pre className="ef-code">{children}</pre>
);

const SourceBlock = ({ label, href }) => (
  <div className="ef-source-block">
    <span className="ef-source-label">{label}</span>
    <a className="ef-source-link" href={href} target="_blank" rel="noopener noreferrer">
      <ExternalLink size={11} style={{ flexShrink: 0 }} />
      <span>{href}</span>
    </a>
  </div>
);

const SubHead = ({ children }) => (
  <p className="ef-subhead">{children}</p>
);

/* ─────────────────────────────────────────
   ACCORDION (Light Theme Styled)
   ───────────────────────────────────────── */
const Accordion = ({ icon: Icon, title, children, defaultOpen = false, iconClass = "box-indigo" }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`ef-acc${open ? ' ef-acc--open' : ''}`}>
      <button className="ef-acc-trigger" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span className="ef-acc-left">
          <span className={`ef-simple-icon-box ${iconClass}`} style={{ width: '36px', height: '36px', borderRadius: '0.5rem' }}>
            <Icon size={16} />
          </span>
          <span className="ef-acc-title">{title}</span>
        </span>
        <ChevronDown size={18} className={`ef-acc-chevron${open ? ' ef-acc-chevron--open' : ''}`} />
      </button>
      <div className="ef-acc-body" style={{ maxHeight: open ? '2000px' : '0' }}>
        <div className="ef-acc-content">{children}</div>
      </div>
    </div>
  );
};

export default function EmissionFactorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ef-page-simple">
      <div className="ef-simple-container">

        {/* Back Button */}
        <div className="ef-header-action">
          <button className="ef-simple-back" onClick={() => navigate('/')}>
            <ArrowLeft size={16} /> Back to Home
          </button>
        </div>

        <div className="ef-simple-grid-layout">
          {/* Main Card */}
          <motion.div
            className="ef-simple-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <header className="ef-simple-header">
              <h1 className="ef-simple-title">
                Emission <span className="text-accent-color">Factors</span>
              </h1>
              <p className="ef-simple-meta">
                <span className="meta-label">Last Updated:</span> June 2026
              </p>
            </header>

            <div className="ef-simple-intro">
              <p>NIRVAAN EarthLab estimates daily carbon footprints using approximate emission factors derived from official government datasets, scientific publications, and international environmental research.</p>
            </div>

            {/* Formula Block */}
            <div className="ef-formula-card">
              <div className="ef-formula-label"><Calculator size={14} /> General Calculation Formula</div>
              <div className="ef-formula-eq">
                Total CO₂e = <span className="text-accent-color">Activity Data</span> × <span className="text-accent-color">Emission Factor</span>
              </div>
              <div className="ef-formula-vars">
                <span><strong>Activity Data:</strong> User input values (km, kWh, litres, etc.)</span>
                <span><strong>Emission Factor:</strong> Standard carbon emission constant</span>
              </div>
            </div>

            <div className="ef-simple-sections">
              {/* Introduction Item */}
              <div className="ef-simple-item">
                <div className="ef-simple-icon-box box-blue">
                  <Info size={20} />
                </div>
                <div className="ef-simple-content">
                  <h3>About NIRVAAN Factors</h3>
                  <p className="ef-p">This calculator is designed for environmental awareness, educational purposes, and simplified sustainability tracking. It does not aim to replace industrial-grade carbon audits, but to help citizens understand how daily activities contribute to greenhouse gas emissions.</p>
                </div>
              </div>

              {/* Reference Table Item */}
              <div className="ef-simple-item">
                <div className="ef-simple-icon-box box-teal">
                  <Calculator size={20} />
                </div>
                <div className="ef-simple-content">
                  <h3>Final Emission Factors Used</h3>
                  <div className="ef-table-wrap">
                    <table className="ef-table">
                      <thead>
                        <tr><th>Category</th><th>Activity</th><th>Factor Used</th><th>Unit</th></tr>
                      </thead>
                      <tbody>
                        <tr><td data-label="Category">Transport</td><td data-label="Activity">Walk / Cycle</td><td data-label="Factor Used">0</td><td data-label="Unit">kg CO₂/km</td></tr>
                        <tr><td data-label="Category">Transport</td><td data-label="Activity">Bus / Metro</td><td data-label="Factor Used">0.06</td><td data-label="Unit">kg CO₂/km</td></tr>
                        <tr><td data-label="Category">Transport</td><td data-label="Activity">Bike / Scooter</td><td data-label="Factor Used">0.11</td><td data-label="Unit">kg CO₂/km</td></tr>
                        <tr><td data-label="Category">Transport</td><td data-label="Activity">Car</td><td data-label="Factor Used">0.15</td><td data-label="Unit">kg CO₂/km</td></tr>
                        <tr><td data-label="Category">Electricity</td><td data-label="Activity">Indian Grid Electricity</td><td data-label="Factor Used">0.727</td><td data-label="Unit">kg CO₂/kWh</td></tr>
                        <tr><td data-label="Category">Water</td><td data-label="Activity">Water Usage</td><td data-label="Factor Used">0.000149</td><td data-label="Unit">kg CO₂/litre</td></tr>
                        <tr><td data-label="Category">LPG</td><td data-label="Activity">Cooking Gas</td><td data-label="Factor Used">2.99</td><td data-label="Unit">kg CO₂/kg LPG</td></tr>
                        <tr><td data-label="Category">Diet</td><td data-label="Activity">Vegetarian</td><td data-label="Factor Used">3.81</td><td data-label="Unit">kg CO₂/day</td></tr>
                        <tr><td data-label="Category">Diet</td><td data-label="Activity">Mixed Diet</td><td data-label="Factor Used">5.63</td><td data-label="Unit">kg CO₂/day</td></tr>
                        <tr><td data-label="Category">Diet</td><td data-label="Activity">Heavy Meat Diet</td><td data-label="Factor Used">7.19</td><td data-label="Unit">kg CO₂/day</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Detailed Breakdown Item */}
              <div className="ef-simple-item">
                <div className="ef-simple-icon-box box-indigo">
                  <BookOpen size={20} />
                </div>
                <div className="ef-simple-content">
                  <h3>Detailed Emission Sections</h3>
                  <p className="ef-p" style={{ marginBottom: '1rem' }}>Expand each category below to inspect official references, calculations, and conversions.</p>

                  <div className="ef-accordions-group">
                    {/* 1 — Transport */}
                    <Accordion icon={Car} title="1 — Transport Emissions" iconClass="box-blue">
                       <SubHead>How Transport Creates Carbon Emissions</SubHead>
                       <p className="ef-p">Vehicles use fossil fuels such as petrol and diesel. During combustion inside vehicle engines, greenhouse gases and carbon dioxide are released into the atmosphere. Public transport produces lower emissions per person because emissions are shared.</p>

                       <SubHead>Factors Used</SubHead>
                       <div className="ef-table-wrap">
                        <table className="ef-table">
                          <thead><tr><th>Mode</th><th>Factor</th></tr></thead>
                          <tbody>
                            <tr><td data-label="Mode">Bus / Metro</td><td data-label="Factor">0.06 kg CO₂/km</td></tr>
                            <tr><td data-label="Mode">Bike / Scooter</td><td data-label="Factor">0.11 kg CO₂/km</td></tr>
                            <tr><td data-label="Mode">Car</td><td data-label="Factor">0.15 kg CO₂/km</td></tr>
                          </tbody>
                        </table>
                      </div>

                       <SubHead>Official Source</SubHead>
                       <p className="ef-p ef-strong">UK Government Greenhouse Gas Conversion Factors (DEFRA / BEIS)</p>
                       <SourceBlock label="Official Link" href="https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting" />

                       <SubHead>Source Statements</SubHead>
                       <Bq>"Petrol car (small) – Passenger vehicles 0.14946 kgCO₂e/km."</Bq>
                       <Bq>"Motorbike (average) – 0.11355 kgCO₂e/km."</Bq>
                       <Bq>"Local Bus (not London) 0.11774 kgCO₂e/passenger-km."</Bq>
                    </Accordion>

                    {/* 2 — Electricity */}
                    <Accordion icon={Zap} title="2 — Electricity Emissions" iconClass="box-yellow">
                       <SubHead>How Electricity Creates Carbon Emissions</SubHead>
                       <p className="ef-p">Most electricity in India is generated using thermal power plants powered by coal. When electricity is consumed, indirect carbon emissions occur due to power generation.</p>

                       <SubHead>Factor Used</SubHead>
                       <Code>0.727 kg CO₂/kWh</Code>

                       <SubHead>Official Source</SubHead>
                       <p className="ef-p ef-strong">Central Electricity Authority (CEA), Government of India</p>
                       <SourceBlock label="Official Link — CDM CO₂ Baseline Database" href="https://cea.nic.in/cdm-co2-baseline-database/?lang=en" />

                       <SubHead>Source Statement</SubHead>
                       <Bq>"Weighted Average Emission Factor rose to 0.727 tCO₂/MWh in FY 2023–24."</Bq>

                       <SubHead>Conversion</SubHead>
                       <Code>0.727 tCO₂/MWh = 0.727 kg CO₂/kWh</Code>
                    </Accordion>

                    {/* 3 — Water */}
                    <Accordion icon={Droplets} title="3 — Water Usage Emissions" iconClass="box-teal">
                       <SubHead>How Water Usage Creates Carbon Emissions</SubHead>
                       <p className="ef-p">Water treatment systems require purification, pumping, transportation, and wastewater treatment, which consumes electricity and indirectly creates emissions.</p>

                       <SubHead>Factor Used</SubHead>
                       <Code>0.000149 kg CO₂/litre</Code>

                       <SubHead>Official Sources</SubHead>
                       <p className="ef-p ef-strong">UNFCCC Greenhouse Gas Calculator / DEFRA Reference</p>
                       <SourceBlock label="Official Link" href="https://unfccc.int/sites/default/files/resource/GHG_emissions_calculator_ver01.3.xlsx" />

                       <SubHead>Source Statement</SubHead>
                       <Bq>"Water supply 0.149 kgCO₂e/m³."</Bq>
                    </Accordion>

                    {/* 4 — LPG */}
                    <Accordion icon={Flame} title="4 — LPG Cooking Gas Emissions" iconClass="box-purple">
                       <SubHead>How LPG Creates Carbon Emissions</SubHead>
                       <p className="ef-p">LPG is a fossil fuel. During cooking, LPG combustion directly releases carbon dioxide into the atmosphere.</p>

                       <SubHead>Factor Used</SubHead>
                       <Code>2.99 kg CO₂/kg LPG</Code>

                       <SubHead>Official Source</SubHead>
                       <p className="ef-p ef-strong">IPCC 2006 Guidelines for National Greenhouse Gas Inventories</p>
                       <SourceBlock label="Official PDF Chapter" href="https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf" />

                       <SubHead>Source Statement</SubHead>
                       <Bq>"Liquefied petroleum gas 2.99230679 kgCO₂e/kg."</Bq>
                    </Accordion>

                    {/* 5 — Food */}
                    <Accordion icon={Leaf} title="5 — Food / Diet Emissions" iconClass="box-royal">
                       <SubHead>How Food Choices Create Carbon Emissions</SubHead>
                       <p className="ef-p">Food production requires farming, transport, refrigeration, and packaging. Animal farming generally creates higher emissions due to methane and supply chain intensity.</p>

                       <SubHead>Factors Used</SubHead>
                       <div className="ef-table-wrap">
                        <table className="ef-table">
                          <thead><tr><th>Diet Type</th><th>Factor</th></tr></thead>
                          <tbody>
                            <tr><td data-label="Diet Type">Vegetarian</td><td data-label="Factor">3.81 kg CO₂/day</td></tr>
                            <tr><td data-label="Diet Type">Mixed Diet</td><td data-label="Factor">5.63 kg CO₂/day</td></tr>
                            <tr><td data-label="Diet Type">Heavy Meat Diet</td><td data-label="Factor">7.19 kg CO₂/day</td></tr>
                          </tbody>
                        </table>
                      </div>

                       <SubHead>Official Research Source</SubHead>
                       <p className="ef-p ef-strong">Oxford EPIC-Oxford Climate Study</p>
                       <SourceBlock label="Official Research Paper" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4372775/" />

                       <SubHead>Source Statement</SubHead>
                       <Bq>"The age-and-sex-adjusted mean greenhouse gas emissions were 7.19 kgCO₂e/day for high meat-eaters, 5.63 for medium meat-eaters, and 3.81 for vegetarians."</Bq>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>

            <div className="ef-simple-footer-banner">
              <span className="banner-icon"><Info size={16} /></span>
              <p>These calculations provide approximate environmental insights. For professional assessments, verify critical parameters independently.</p>
            </div>
          </motion.div>

          {/* Sidebar decorative element */}
          <div className="ef-simple-sidebar">
            <div className="ef-sidebar-sticky">
              <div className="minimalist-badge-card">
                <div className="badge-illustration">
                  <Calculator className="badge-shield" size={64} style={{ color: '#4f46e5' }} />
                  <div className="badge-ring"></div>
                </div>
                <h4>Scientific Integrity</h4>
                <p>Nirvaan EarthLab works with transparency and public standards to provide robust awareness models.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
