# Carbon Footprint Tracker Lite
## Emission Factors & Scientific Source Documentation

## Project
**NIRVAAN – Net Impact Reduction Via Action & Analytics for Nature**

---

# Introduction

This project estimates an individual’s daily carbon footprint using approximate emission factors derived from official government datasets, scientific publications, and international environmental research.

The calculator is designed for:

- environmental awareness
- educational purposes
- simplified sustainability tracking

The project does not aim to provide industrial-grade carbon auditing. Instead, it focuses on helping students and citizens understand how daily lifestyle activities contribute to greenhouse gas emissions.

---

# General Calculation Formula

```text
Total CO₂e = Activity Data × Emission Factor
```

Where:

- **Activity Data** = user input values
- **Emission Factor** = standard carbon emission constant

---

# Final Emission Factors Used

| Category | Activity | Factor Used | Unit |
|---|---|---|---|
| Transport | Walk/Cycle | 0 | kg CO₂/km |
| Transport | Bus/Metro | 0.06 | kg CO₂/km |
| Transport | Bike/Scooter | 0.11 | kg CO₂/km |
| Transport | Car | 0.15 | kg CO₂/km |
| Electricity | Indian Grid Electricity | 0.727 | kg CO₂/kWh |
| Water | Water Usage | 0.000149 | kg CO₂/litre |
| LPG | Cooking Gas | 2.99 | kg CO₂/kg LPG |
| Diet | Vegetarian | 3.81 | kg CO₂/day |
| Diet | Mixed Diet | 5.63 | kg CO₂/day |
| Diet | Heavy Meat Diet | 7.19 | kg CO₂/day |

---

# 1. Transport Emissions

## How Transport Creates Carbon Emissions

Vehicles use fossil fuels such as petrol and diesel. During combustion inside vehicle engines, greenhouse gases and carbon dioxide are released into the atmosphere.

Public transport produces lower emissions per person because emissions are shared among multiple passengers.

## Factors Used

| Mode | Factor |
|---|---|
| Bus/Metro | 0.06 kg CO₂/km |
| Bike/Scooter | 0.11 kg CO₂/km |
| Car | 0.15 kg CO₂/km |

## Official Source

**UK Government Greenhouse Gas Conversion Factors (DEFRA / BEIS)**

Official Link:  
https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting

Additional Reference:  
https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2025

## Source Statements

> “Petrol car (small) – Passenger vehicles 0.14946 kgCO₂e/km.”

> “Motorbike (average) – 0.11355 kgCO₂e/km.”

> “Local Bus (not London) 0.11774 kgCO₂e/passenger-km.”

---

# 2. Electricity Emissions

## How Electricity Creates Carbon Emissions

Most electricity in India is generated using thermal power plants powered by coal and fossil fuels.

When electricity is consumed, indirect carbon emissions occur because greenhouse gases are released during power generation.

## Factor Used

```text
0.727 kg CO₂/kWh
```

## Official Source

**Central Electricity Authority (CEA), Government of India**

Official Link:  
https://cea.nic.in/cdm-co2-baseline-database/?lang=en

CEA Main Website:  
https://cea.nic.in/?lang=en

## Source Statement

> “Weighted Average Emission Factor rose to 0.727 tCO₂/MWh in FY 2023–24.”

Converted:

```text
0.727 tCO₂/MWh = 0.727 kg CO₂/kWh
```

---

# 3. Water Usage Emissions

## How Water Usage Creates Carbon Emissions

Water treatment systems require:

- purification
- pumping
- transportation
- wastewater treatment

These processes consume electricity and infrastructure resources, indirectly creating greenhouse gas emissions.

## Factor Used

```text
0.000149 kg CO₂/litre
```

Equivalent to:

```text
0.149 kg CO₂/m³
```

## Official Sources

**UNFCCC Greenhouse Gas Calculator**

Official Link:  
https://unfccc.int/sites/default/files/resource/GHG_emissions_calculator_ver01.3.xlsx

DEFRA Reference:  
https://ghgprotocol.org/Third-Party-Databases/Defra

## Source Statement

> “Water supply 0.149 kgCO₂e/m³.”

---

# 4. LPG Cooking Gas Emissions

## How LPG Creates Carbon Emissions

LPG (Liquefied Petroleum Gas) is a fossil fuel.

During cooking, LPG combustion directly releases carbon dioxide into the atmosphere.

## Factor Used

```text
2.99 kg CO₂/kg LPG
```

## Official Source

**IPCC 2006 Guidelines for National Greenhouse Gas Inventories**

Official PDF:  
https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf

## Source Statement

> “Liquefied petroleum gas 2.99230679 kgCO₂e/kg.”

---

# 5. Food / Diet Emissions

## How Food Choices Create Carbon Emissions

Food production requires:

- farming
- transportation
- refrigeration
- packaging
- water usage
- land usage

Animal farming and meat production generally create higher greenhouse gas emissions due to livestock methane emissions, feed production, and supply chains.

## Factors Used

| Diet Type | Factor |
|---|---|
| Vegetarian | 3.81 kg CO₂/day |
| Mixed Diet | 5.63 kg CO₂/day |
| Heavy Meat Diet | 7.19 kg CO₂/day |

## Official Research Source

**Oxford EPIC-Oxford Climate Study**

Official Research Paper:  
https://pmc.ncbi.nlm.nih.gov/articles/PMC4372775/

Oxford Publication:  
https://www.ndph.ox.ac.uk/food-ncd/publications/470132

## Source Statement

> “The age-and-sex-adjusted mean greenhouse gas emissions were 7.19 kgCO₂e/day for high meat-eaters, 5.63 for medium meat-eaters, and 3.81 for vegetarians.”

---

# Disclaimer

This calculator provides approximate carbon footprint estimates using publicly available emission factors.

The results are intended for:

- educational purposes
- sustainability awareness
- simplified environmental impact estimation

The calculator is not intended to replace professional carbon accounting or industrial emission auditing systems.

