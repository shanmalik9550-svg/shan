export interface ProblemItem {
  id: string;
  title: string;
  symptoms: string;
  cause: string;
  solution: string;
  urgency: "High" | "Medium" | "Critical";
  iconName: string;
}

export const commonProblemsData: ProblemItem[] = [
  {
    id: "gas-leakage",
    title: "Gas Leakage & Pungent Smell",
    symptoms: "Hissing sound near valve, strong sulfur/LPG odor around hob or stove.",
    cause: "Worn-out rubber gasket, cracked hose pipe, loose spindle valve, or damaged manifold.",
    solution: "Immediate gas shutoff, digital pressure test, safety hose replacement & leak seal.",
    urgency: "Critical",
    iconName: "AlertTriangle"
  },
  {
    id: "burner-not-working",
    title: "Gas Burner Not Lighting / Sputtering",
    symptoms: "Igniter sparks but burner doesn't light, or flame sputters out after releasing knob.",
    cause: "Clogged jet nozzle, rusted burner ports, faulty thermocouple safety valve.",
    solution: "Nozzle jet cleaning, burner decarbonization & thermocouple replacement.",
    urgency: "High",
    iconName: "Flame"
  },
  {
    id: "auto-ignition-issue",
    title: "Auto Ignition Keeps Clicking or Won't Spark",
    symptoms: "Continuous rapid clicking sound even when off, or zero spark when pushing knob.",
    cause: "Moisture trapped in micro-switch, worn-out spark plug, faulty pulse generator box.",
    solution: "Pulse igniter replacement, ceramic spark wire insulation & switch drying.",
    urgency: "Medium",
    iconName: "Sparkles"
  },
  {
    id: "low-flame",
    title: "Low Flame & Utensil Blackening (Yellow Flame)",
    symptoms: "Weak orange/yellow flame, takes twice as long to boil water, black soot on pans.",
    cause: "Wrong air-to-gas ratio in venturi tube, grease buildup inside brass burner jet.",
    solution: "Air venturi calibration, jet orifice re-boring & carbon deposit removal.",
    urgency: "Medium",
    iconName: "TrendingDown"
  },
  {
    id: "chimney-smoke",
    title: "Chimney Not Sucking Smoke / Low Suction",
    symptoms: "Kitchen fills with oil smoke while frying, suction feels extremely weak.",
    cause: "Choked oil collector, clogged baffle filter, worn motor capacitor, fan blade grease.",
    solution: "Filter chemical degreasing, motor capacitor boost & blower impeller clean.",
    urgency: "High",
    iconName: "Wind"
  },
  {
    id: "chimney-noise",
    title: "Loud Noise & Vibration in Chimney",
    symptoms: "Rattling, screeching, or heavy humming sound when chimney motor is turned on.",
    cause: "Loose blower fan nut, worn motor ball bearings, bent duct pipe, unbalanced fan.",
    solution: "Motor bearing replacement, fan balancing, duct dampening & shaft alignment.",
    urgency: "Medium",
    iconName: "Volume2"
  }
];
