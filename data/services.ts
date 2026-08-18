export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  popular?: boolean;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "cooking-range",
    title: "Cooking Range Repair",
    shortDesc: "Complete cooking range repair, gas stove burner ignition & thermostat tuning.",
    fullDesc: "Expert doorstep repair for all types of freestanding cooking ranges and heavy-duty gas stoves. We fix burner jet clogs, spark igniter failure, flame sputtering, and control valve faults using genuine replacement parts.",
    iconName: "Flame",
    popular: true,
    features: [
      "Cooking Range Burner & Ignition Repair",
      "Gas Burner Orifice Jet Cleaning",
      "Gas Valve & Pressure Regulator Calibration",
      "Heavy Stainless Steel Body Servicing",
      "Same-Day 30-Min Doorstep Service"
    ]
  },
  {
    id: "kitchen-hob",
    title: "Kitchen Hob Repair",
    shortDesc: "Built-in hob burner repair, auto-ignition wire replacement & gas valve calibration.",
    fullDesc: "Specialized doorstep repair for 2, 3, 4, and 5 burner built-in glass and stainless steel hobs. Resolves yellow flame, gas leaks, spark igniter failure, stuck knobs, and gas valve issues.",
    iconName: "Flame",
    popular: true,
    features: [
      "Auto-Ignition Pulse Generator Fix",
      "Brass & Alloy Burner Nozzle Cleaning",
      "Gas Leakage Pressure Testing",
      "Brass Valve & Regulator Servicing",
      "Same-Day Doorstep Technician Visit"
    ]
  },
  {
    id: "gas-stove",
    title: "Gas Stove Repair",
    shortDesc: "Fast fix for stainless steel & glass gas stoves, low flame, clogged jets, and loose valves.",
    fullDesc: "Comprehensive doorstep gas stove repair and servicing. We fix low flame intensity, carbon deposit clogging, faulty knobs, and leaking gas hoses with 1-year service warranty.",
    iconName: "Burner",
    popular: true,
    features: [
      "Burner Jet Jetting & Jet Cleaning",
      "Flame Height Adjustment & Oxygen Ratio Calibration",
      "High-Pressure Rubber Hose Pipe Replacement",
      "Knob & Spindle Lubrication",
      "Safety Leak Detection Check"
    ]
  },
  {
    id: "ignition-problems",
    title: "Auto Ignition Repair",
    shortDesc: "Pulse generator replacement, spark plug cleaning, battery box repair & wiring replacement.",
    fullDesc: "Struggling with continuous clicking, no spark, or weak auto-ignition spark on your hob or gas stove? Our certified technicians fix electric and battery-operated auto-ignition systems right at your doorstep.",
    iconName: "Sparkles",
    features: [
      "Electric Pulse Igniter Box Replacement",
      "Ceramic Spark Electrode Plug Replacement",
      "High Voltage Spark Wire Harness Fix",
      "Battery Holder Box & Switch Assembly",
      "Corrosion Removal & Waterproofing"
    ]
  },
  {
    id: "burner-repair",
    title: "Gas Burner Repair",
    shortDesc: "Brass burner ring unblocking, jet orifice resizing, flame tuning & uneven burning repair.",
    fullDesc: "Fix yellow soot-producing flames, sputtering burners, and clogged gas nozzles. We clean, restore, or replace damaged brass, forged alloy, and lotus burners for maximum thermal efficiency and fuel savings.",
    iconName: "Flame",
    features: [
      "Heavy Forged Brass Burner Replacement",
      "Carbon Deposit Decarbonization",
      "Gas-Air Mixing Venturi Chamber Tuning",
      "Nozzle Orifice Jet Re-sizing",
      "Flame Stability & Efficiency Test"
    ]
  },
  {
    id: "gas-leakage",
    title: "Gas Leakage Fixing",
    shortDesc: "Emergency gas leak detection, commercial-grade hose replacement, valve sealing & safety test.",
    fullDesc: "Urgent doorstep response for smelling LPG or PNG gas around your hob, stove, or cooking range manifold. We perform digital manometer pressure testing, replace faulty copper/rubber tubing, and seal leaking brass valves.",
    iconName: "AlertTriangle",
    popular: true,
    features: [
      "Digital & Soap Bubble Gas Leak Detection",
      "Steel-Braided Commercial Safety Hose Installation",
      "Main Shut-off Valve & Regulator Servicing",
      "Manifold Tube Sealing & Gasket Replacement",
      "Post-Repair Safety Clearance Certificate"
    ]
  },
  {
    id: "pcb-repair",
    title: "PCB Board Repair",
    shortDesc: "Microprocessor motherboard repair, IC replacement, touch sensor & relay board fixing.",
    fullDesc: "Fix dead control panels, error codes, and power surge burnt PCB motherboards for hobs, gas stoves, and kitchen appliances without expensive full assembly replacements.",
    iconName: "Cpu",
    features: [
      "Microcontroller IC & Relay Replacement",
      "Touch Screen Sensor Board Diagnostics",
      "Capacitor & Voltage Spike Protector Fix",
      "Display Board Segment LED Repair",
      "Original Component Soldering & Testing"
    ]
  },
  {
    id: "installation",
    title: "Appliance Installation",
    shortDesc: "Precision countertop fitting, gas pipe connection & safety testing.",
    fullDesc: "Get your new built-in hob or cooking appliance installed seamlessly by experienced technicians. Includes granite cutout fitting, gas line installation, and safety testing.",
    iconName: "CheckSquare",
    features: [
      "Granite Countertop Cutout Alignment Check",
      "Built-in Hob & Appliance Sealing",
      "Gas Supply Hose Connection & Leak Testing",
      "Burner Calibration & Flame Testing",
      "Initial Operation & User Guidance Demo"
    ]
  },
  {
    id: "uninstallation",
    title: "Appliance Uninstallation",
    shortDesc: "Safe removal of old hobs and stoves without damaging kitchen cabinets.",
    fullDesc: "Relocating or upgrading your kitchen? Our technicians safely uninstall your existing gas hobs and stoves, capping off gas connections securely to prevent leaks.",
    iconName: "Trash2",
    features: [
      "Safe Countertop Demounting",
      "Gas Line Seal & Safety Cap Fitting",
      "Electrical Isolation & Hose Retrieval",
      "Damage-Free Removal from Granite Tops",
      "Protective Wrapping for Transit"
    ]
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning & Degreasing",
    shortDesc: "Chemical degreasing of gas hob burners, trivets, and stove assemblies.",
    fullDesc: "Eliminate stubborn grease, burnt oil sludge, and heavy carbon buildup. We dismantle burner tops, brass jets, trivets, and stove bodies for thorough eco-friendly chemical ultrasonic cleaning.",
    iconName: "Sparkles",
    popular: true,
    features: [
      "Eco-Friendly Chemical Sludge Dissolution",
      "Brass Burner & Jet Ultrasonic Soak",
      "Stove Body & Glass Top Polish",
      "Burner Chamber Carbon Scraping",
      "Stove & Hob Deep Cleaning"
    ]
  },
  {
    id: "annual-maintenance",
    title: "Annual Maintenance (AMC)",
    shortDesc: "33-point quarterly preventive maintenance, free spare replacement & priority 24/7 support.",
    fullDesc: "Protect your kitchen appliances all year round. Includes 3 scheduled deep cleans per year, unlimited emergency repair visits, free minor spare parts, and priority technician dispatch.",
    iconName: "Calendar",
    features: [
      "3 Scheduled Preventive Maintenance Visits/Yr",
      "Unlimited Emergency Breakdown Calls",
      "100% Free Wear-and-Tear Minor Spare Parts",
      "Zero Labor & Visit Charges Year-Round",
      "Priority Doorstep Dispatch within 30 Mins"
    ]
  }
];
