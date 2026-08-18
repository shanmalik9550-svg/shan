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
    id: "stuck-knobs",
    title: "Stuck or Hard to Turn Gas Control Knobs",
    symptoms: "Knob won't depress, turns with extreme difficulty, or fails to release gas flame.",
    cause: "Cooking oil residue and carbonized grease jammed inside micro-spindle valve mechanism.",
    solution: "Spindle dismantling, degreasing, high-temp silicone lubrication & gas valve overhaul.",
    urgency: "Medium",
    iconName: "Wrench"
  },
  {
    id: "uneven-flame",
    title: "Uneven Flame Distribution Across Burners",
    symptoms: "One side of burner ring has high blue flame while other side stays dim or unlit.",
    cause: "Partially blocked brass gas ports, carbon deposits, or misaligned burner cap.",
    solution: "Burner cap alignment, port unblocking, venturi air adjustment & pressure check.",
    urgency: "Medium",
    iconName: "Volume2"
  }
];
