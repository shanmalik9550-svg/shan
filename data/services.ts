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
    id: "kitchen-chimney",
    title: "Kitchen Chimney Repair",
    shortDesc: "Complete chimney motor repair, filterless suction tuning, auto-clean repairs & deep degreasing.",
    fullDesc: "Expert doorstep repair for all types of kitchen chimneys including baffle filter, mesh, ductless, island, and filterless auto-clean models. We fix low suction, loud noise, motor burning, touch sensor failure, and PCB faults using genuine replacement parts.",
    iconName: "Wind",
    popular: true,
    features: [
      "Motor & Blower Repair / Replacement",
      "Auto-Clean Heater Coil Repair",
      "Touch Control Panel & PCB Board Fix",
      "Oil Collector & Baffle Degreasing",
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
    fullDesc: "Comprehensive doorstep gas stove repair and servicing. We fix low flame intensity, carbon deposit clogging, faulty knobs, and leaking gas hoses with 90-day service warranty.",
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
    fullDesc: "Urgent doorstep response for smelling LPG or PNG gas around your hob, stove, or chimney manifold. We perform digital manometer pressure testing, replace faulty copper/rubber tubing, and seal leaking brass valves.",
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
    fullDesc: "Fix dead control panels, error codes, and power surge burnt PCB motherboards for chimneys and hobs without expensive full assembly replacements.",
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
    shortDesc: "Precision wall mounting, duct hole drilling, gas pipe connection & safety testing.",
    fullDesc: "Get your new kitchen chimney or built-in hob installed seamlessly by experienced technicians. Includes wall mounting, duct pipe installation, and gas safety testing.",
    iconName: "CheckSquare",
    features: [
      "Precision Wall Drilling & Heavy Bracket Mounting",
      "6-inch Flexible Aluminum Duct Hose Fitting",
      "Granite Countertop Cutout Alignment Check",
      "Gas Supply Hose Connection & Leak Testing",
      "Initial Operation & User Guidance Demo"
    ]
  },
  {
    id: "uninstallation",
    title: "Appliance Uninstallation",
    shortDesc: "Safe removal of old chimneys and hobs without damaging kitchen cabinets.",
    fullDesc: "Relocating or upgrading your kitchen? Our technicians safely uninstall and package your existing appliances, capping off gas connections securely to prevent leaks.",
    iconName: "Trash2",
    features: [
      "Safe Wall & Cabinet Demounting",
      "Gas Line Seal & Safety Cap Fitting",
      "Electrical Isolation & Hose Retrieval",
      "Damage-Free Removal from Granite Tops",
      "Protective Wrapping for Transit"
    ]
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning & Degreasing",
    shortDesc: "Chemical degreasing of chimney blowers, oil collectors, and hob burners.",
    fullDesc: "Eliminate stubborn grease, burnt oil sludge, and heavy carbon buildup. We dismantle oil collectors, baffle filters, internal blowers, and stove burners for thorough eco-friendly chemical ultrasonic cleaning.",
    iconName: "Sparkles",
    popular: true,
    features: [
      "Eco-Friendly Chemical Sludge Dissolution",
      "Internal Blower & Motor Housing Cleaning",
      "Baffle & Mesh Filter Ultrasonic Soak",
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
