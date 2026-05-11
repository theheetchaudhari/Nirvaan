import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileText, Car, Zap, Droplets, Flame, Leaf,
  ShieldCheck, ExternalLink, Calculator, Info,
  ChevronDown, ArrowLeft
} from 'lucide-react';
import './DocsPage.css';

/* ─────────────────────────────────────────
   REUSABLE HELPERS
───────────────────────────────────────── */
const Bq = ({ children }) => (
  <blockquote className="doc-bq">{children}</blockquote>
);

const Code = ({ children }) => (
  <pre className="doc-code">{children}</pre>
);

const SourceBlock = ({ label, href }) => (
  <div className="doc-source-block">
    <span className="doc-source-label">{label}</span>
    <a className="doc-source-link" href={href} target="_blank" rel="noopener noreferrer">
      <ExternalLink size={11} />
      {href}
    </a>
  </div>
);

const SubHead = ({ children }) => (
  <p className="doc-subhead">{children}</p>
);

/* ─────────────────────────────────────────
   ACCORDION
───────────────────────────────────────── */
const Accordion = ({ icon: Icon, title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`doc-acc${open ? ' doc-acc--open' : ''}`}>
      <button className="doc-acc-trigger" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span className="doc-acc-left">
          <span className="doc-acc-icon"><Icon size={15} /></span>
          {title}
        </span>
        <ChevronDown size={18} className={`doc-acc-chevron${open ? ' doc-acc-chevron--open' : ''}`} />
      </button>
      <div className="doc-acc-body" style={{ maxHeight: open ? '2000px' : '0' }}>
        <div className="doc-acc-content">{children}</div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
export default function Documentation() {
  const navigate = useNavigate();

  return (
    <div className="doc-page">
      <div className="doc-wrap">

        {/* ── Back ── */}
        <button className="doc-back" onClick={() => navigate('/')}>
          <ArrowLeft size={15} /> Back to NIRVAAN
        </button>

        {/* ══════════ HERO ══════════ */}
        <header className="doc-hero">
          <span className="doc-eyebrow"><FileText size={12} /> Scientific Documentation</span>
          <h1 className="doc-hero-title">
            Emission Factors &amp; <span className="doc-green">Source Reference</span>
          </h1>
          <p className="doc-hero-sub">
            Emission factors, scientific sources, and calculation methodology used in the
            NIRVAAN Carbon Footprint Tracker.
          </p>
          <div className="doc-sdg-badge">
            <Leaf size={13} />
            <strong>SDG 13</strong> — Climate Action &nbsp;|&nbsp;
            <strong>NIRVAAN</strong> — Net Impact Reduction Via Action &amp; Analytics for Nature
          </div>
        </header>

        {/* ══════════ FORMULA CARD ══════════ */}
        <div className="doc-formula-card">
          <div className="doc-formula-label"><Calculator size={12} /> General Calculation Formula</div>
          <div className="doc-formula-eq">
            Total CO₂e = <span className="doc-green">Activity Data</span> × <span className="doc-green">Emission Factor</span>
          </div>
          <div className="doc-formula-vars">
            <span><strong>Activity Data</strong> — user input values</span>
            <span><strong>Emission Factor</strong> — standard carbon emission constant</span>
          </div>
        </div>

        {/* ══════════ INTRODUCTION ══════════ */}
        <p className="doc-group-label">Introduction</p>
        <div className="doc-card">
          <h2 className="doc-card-heading"><Info size={16} className="doc-green" /> About this Project</h2>
          <p className="doc-p">
            This project estimates an individual's daily carbon footprint using approximate emission factors derived from
            official government datasets, scientific publications, and international environmental research.
          </p>
          <SubHead>The calculator is designed for:</SubHead>
          <ul className="doc-ul">
            <li>Environmental awareness</li>
            <li>Educational purposes</li>
            <li>Simplified sustainability tracking</li>
          </ul>
          <p className="doc-p">
            The project does not aim to provide industrial-grade carbon auditing. Instead, it focuses on helping
            students and citizens understand how daily lifestyle activities contribute to greenhouse gas emissions.
          </p>
        </div>

        {/* ══════════ FACTORS TABLE ══════════ */}
        <p className="doc-group-label">Reference Data</p>
        <div className="doc-card">
          <h2 className="doc-card-heading"><Calculator size={16} className="doc-green" /> Final Emission Factors Used</h2>
          <div className="doc-table-wrap">
            <table className="doc-table">
              <thead>
                <tr><th>Category</th><th>Activity</th><th>Factor Used</th><th>Unit</th></tr>
              </thead>
              <tbody>
                <tr><td>Transport</td><td>Walk / Cycle</td><td>0</td><td>kg CO₂/km</td></tr>
                <tr><td>Transport</td><td>Bus / Metro</td><td>0.06</td><td>kg CO₂/km</td></tr>
                <tr><td>Transport</td><td>Bike / Scooter</td><td>0.11</td><td>kg CO₂/km</td></tr>
                <tr><td>Transport</td><td>Car</td><td>0.15</td><td>kg CO₂/km</td></tr>
                <tr><td>Electricity</td><td>Indian Grid Electricity</td><td>0.727</td><td>kg CO₂/kWh</td></tr>
                <tr><td>Water</td><td>Water Usage</td><td>0.000149</td><td>kg CO₂/litre</td></tr>
                <tr><td>LPG</td><td>Cooking Gas</td><td>2.99</td><td>kg CO₂/kg LPG</td></tr>
                <tr><td>Diet</td><td>Vegetarian</td><td>3.81</td><td>kg CO₂/day</td></tr>
                <tr><td>Diet</td><td>Mixed Diet</td><td>5.63</td><td>kg CO₂/day</td></tr>
                <tr><td>Diet</td><td>Heavy Meat Diet</td><td>7.19</td><td>kg CO₂/day</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ══════════ ACCORDIONS ══════════ */}
        <p className="doc-group-label">Detailed Emission Sections</p>

        {/* 1 — Transport */}
        <Accordion icon={Car} title="1 — Transport Emissions">
          <SubHead>How Transport Creates Carbon Emissions</SubHead>
          <p className="doc-p">
            Vehicles use fossil fuels such as petrol and diesel. During combustion inside vehicle engines,
            greenhouse gases and carbon dioxide are released into the atmosphere.
          </p>
          <p className="doc-p">
            Public transport produces lower emissions per person because emissions are shared among multiple passengers.
          </p>

          <SubHead>Factors Used</SubHead>
          <div className="doc-table-wrap">
            <table className="doc-table">
              <thead><tr><th>Mode</th><th>Factor</th></tr></thead>
              <tbody>
                <tr><td>Bus / Metro</td><td>0.06 kg CO₂/km</td></tr>
                <tr><td>Bike / Scooter</td><td>0.11 kg CO₂/km</td></tr>
                <tr><td>Car</td><td>0.15 kg CO₂/km</td></tr>
              </tbody>
            </table>
          </div>

          <SubHead>Official Source</SubHead>
          <p className="doc-p doc-strong">UK Government Greenhouse Gas Conversion Factors (DEFRA / BEIS)</p>
          <SourceBlock label="Official Link" href="https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting" />
          <SourceBlock label="Additional Reference" href="https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2025" />

          <SubHead>Source Statements</SubHead>
          <Bq>"Petrol car (small) – Passenger vehicles 0.14946 kgCO₂e/km."</Bq>
          <Bq>"Motorbike (average) – 0.11355 kgCO₂e/km."</Bq>
          <Bq>"Local Bus (not London) 0.11774 kgCO₂e/passenger-km."</Bq>
        </Accordion>

        {/* 2 — Electricity */}
        <Accordion icon={Zap} title="2 — Electricity Emissions">
          <SubHead>How Electricity Creates Carbon Emissions</SubHead>
          <p className="doc-p">
            Most electricity in India is generated using thermal power plants powered by coal and fossil fuels.
          </p>
          <p className="doc-p">
            When electricity is consumed, indirect carbon emissions occur because greenhouse gases are released during power generation.
          </p>

          <SubHead>Factor Used</SubHead>
          <Code>0.727 kg CO₂/kWh</Code>

          <SubHead>Official Source</SubHead>
          <p className="doc-p doc-strong">Central Electricity Authority (CEA), Government of India</p>
          <SourceBlock label="Official Link — CDM CO₂ Baseline Database" href="https://cea.nic.in/cdm-co2-baseline-database/?lang=en" />
          <SourceBlock label="CEA Main Website" href="https://cea.nic.in/?lang=en" />

          <SubHead>Source Statement</SubHead>
          <Bq>"Weighted Average Emission Factor rose to 0.727 tCO₂/MWh in FY 2023–24."</Bq>

          <SubHead>Conversion</SubHead>
          <Code>0.727 tCO₂/MWh = 0.727 kg CO₂/kWh</Code>
        </Accordion>

        {/* 3 — Water */}
        <Accordion icon={Droplets} title="3 — Water Usage Emissions">
          <SubHead>How Water Usage Creates Carbon Emissions</SubHead>
          <p className="doc-p">Water treatment systems require:</p>
          <ul className="doc-ul">
            <li>Purification</li>
            <li>Pumping</li>
            <li>Transportation</li>
            <li>Wastewater treatment</li>
          </ul>
          <p className="doc-p">
            These processes consume electricity and infrastructure resources, indirectly creating greenhouse gas emissions.
          </p>

          <SubHead>Factor Used</SubHead>
          <Code>0.000149 kg CO₂/litre</Code>
          <p className="doc-p" style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: 0 }}>Equivalent to:</p>
          <Code>0.149 kg CO₂/m³</Code>

          <SubHead>Official Sources</SubHead>
          <p className="doc-p doc-strong">UNFCCC Greenhouse Gas Calculator</p>
          <SourceBlock label="Official Link" href="https://unfccc.int/sites/default/files/resource/GHG_emissions_calculator_ver01.3.xlsx" />
          <SourceBlock label="DEFRA Reference — GHG Protocol" href="https://ghgprotocol.org/Third-Party-Databases/Defra" />

          <SubHead>Source Statement</SubHead>
          <Bq>"Water supply 0.149 kgCO₂e/m³."</Bq>
        </Accordion>

        {/* 4 — LPG */}
        <Accordion icon={Flame} title="4 — LPG Cooking Gas Emissions">
          <SubHead>How LPG Creates Carbon Emissions</SubHead>
          <p className="doc-p">LPG (Liquefied Petroleum Gas) is a fossil fuel.</p>
          <p className="doc-p">
            During cooking, LPG combustion directly releases carbon dioxide into the atmosphere.
          </p>

          <SubHead>Factor Used</SubHead>
          <Code>2.99 kg CO₂/kg LPG</Code>

          <SubHead>Official Source</SubHead>
          <p className="doc-p doc-strong">IPCC 2006 Guidelines for National Greenhouse Gas Inventories</p>
          <SourceBlock
            label="Official PDF — Volume 2, Chapter 2: Stationary Combustion"
            href="https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf"
          />

          <SubHead>Source Statement</SubHead>
          <Bq>"Liquefied petroleum gas 2.99230679 kgCO₂e/kg."</Bq>
        </Accordion>

        {/* 5 — Food */}
        <Accordion icon={Leaf} title="5 — Food / Diet Emissions">
          <SubHead>How Food Choices Create Carbon Emissions</SubHead>
          <p className="doc-p">Food production requires:</p>
          <ul className="doc-ul">
            <li>Farming</li>
            <li>Transportation</li>
            <li>Refrigeration</li>
            <li>Packaging</li>
            <li>Water usage</li>
            <li>Land usage</li>
          </ul>
          <p className="doc-p">
            Animal farming and meat production generally create higher greenhouse gas emissions due to
            livestock methane emissions, feed production, and supply chains.
          </p>

          <SubHead>Factors Used</SubHead>
          <div className="doc-table-wrap">
            <table className="doc-table">
              <thead><tr><th>Diet Type</th><th>Factor</th></tr></thead>
              <tbody>
                <tr><td>Vegetarian</td><td>3.81 kg CO₂/day</td></tr>
                <tr><td>Mixed Diet</td><td>5.63 kg CO₂/day</td></tr>
                <tr><td>Heavy Meat Diet</td><td>7.19 kg CO₂/day</td></tr>
              </tbody>
            </table>
          </div>

          <SubHead>Official Research Source</SubHead>
          <p className="doc-p doc-strong">Oxford EPIC-Oxford Climate Study</p>
          <SourceBlock label="Official Research Paper — PMC / NCBI" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4372775/" />
          <SourceBlock label="Oxford NDPH Publication" href="https://www.ndph.ox.ac.uk/food-ncd/publications/470132" />

          <SubHead>Source Statement</SubHead>
          <Bq>
            "The age-and-sex-adjusted mean greenhouse gas emissions were 7.19 kgCO₂e/day for high
            meat-eaters, 5.63 for medium meat-eaters, and 3.81 for vegetarians."
          </Bq>
        </Accordion>

        {/* ══════════ DISCLAIMER ══════════ */}
        <div className="doc-divider" />
        <p className="doc-group-label"><ShieldCheck size={12} /> Disclaimer</p>
        <div className="doc-disclaimer">
          <div className="doc-disclaimer-title"><ShieldCheck size={15} /> Disclaimer</div>
          <p className="doc-p">
            This calculator provides approximate carbon footprint estimates using publicly available emission factors.
          </p>
          <SubHead>The results are intended for:</SubHead>
          <ul className="doc-ul">
            <li>Educational purposes</li>
            <li>Sustainability awareness</li>
            <li>Simplified environmental impact estimation</li>
          </ul>
          <p className="doc-p">
            The calculator is not intended to replace professional carbon accounting or industrial emission auditing systems.
          </p>
        </div>

        {/* ── Footer ── */}
      </div>
    </div>
  );
}
