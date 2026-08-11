export interface FAQItem {
  question: string;
  answer: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  appliance: string;
}

export interface BrandData {
  slug: string;
  name: string;
  logoUrl?: string;
  h1Title: string;
  heroHeadline: string;
  heroSubheadline: string;
  metaTitle: string;
  metaDescription: string;
  ctaCopy: string;
  brandTagline: string;
  descriptionCopy: string[];
  specialties: string[];
  commonIssues: { title: string; desc: string }[];
  faqs: FAQItem[];
  reviews: ReviewItem[];
}

export const brandsData: Record<string, BrandData> = {
  "kaff-repair": {
    slug: "kaff-repair",
    name: "Kaff",
    logoUrl: "/logos/kaff.jpg",
    h1Title: "Kaff Kitchen Appliance Repair & Doorstep Service",
    heroHeadline: "Same-Day Kaff Chimney, Hob & Gas Stove Repair at Doorstep",
    heroSubheadline: "Certified Technicians for Kaff Built-in Hobs, Gas Stoves & Auto-Clean Chimneys. 1-Year Warranty with Genuine Kaff Spare Parts.",
    metaTitle: "Kaff Appliance Repair Service | Kaff Chimney & Hob Repair Near Me",
    metaDescription: "Fast doorstep Kaff chimney repair, Kaff hob burner fix, auto-ignition & gas leakage servicing. Experienced technicians, 1-year warranty. Call now!",
    ctaCopy: "Book Kaff Expert Repair in 30 Mins",
    brandTagline: "Specialized Doorstep Care for Kaff Kitchen Appliances",
    descriptionCopy: [
      "Kaff kitchen appliances are renowned for sleek European aesthetics and high-suction auto-clean chimneys. However, heavy Indian cooking with high oil and spice content often causes oil collectors, touch switches, and forged brass burners to degrade over time.",
      "Our specialized Kaff repair service brings certified master technicians directly to your doorstep within 30 to 45 minutes. Whether your Kaff chimney suction power has dropped, the touch control panel is unresponsive, or your Kaff 4-burner gas hob is experiencing auto-ignition clicking, we diagnose and resolve it on-site.",
      "We strictly utilize 100% original Kaff compatible replacement parts including heat coils, pulse generators, high-efficiency blowers, and brass burners. Backed by an official 1-year service warranty."
    ],
    specialties: [
      "Kaff Auto-Clean Heat & Dry Chimneys",
      "Kaff 3, 4 & 5 Burner Built-in Gas Hobs",
      "Kaff Stainless Steel & Glass Top Gas Stoves",
      "Kaff Heavy-Duty Extraction Hoods"
    ],
    commonIssues: [
      { title: "Kaff Chimney Touch Panel Unresponsive", desc: "Corrosion or grease moisture shorting out the PCB micro-switches." },
      { title: "Kaff Hob Auto-Ignition Continuous Spark", desc: "Pulse generator wire insulation breakdown caused by oil accumulation." },
      { title: "Kaff Chimney Auto-Clean Coil Fault", desc: "Heating element burnt out resulting in sticky oil clogging the impellers." },
      { title: "Kaff Brass Burner Yellow Flame", desc: "Air-to-gas venturi ratio miscalibration producing carbon soot." }
    ],
    faqs: [
      { question: "How quickly can a technician visit for Kaff chimney repair?", answer: "We offer immediate doorstep dispatch. A technician will arrive at your home within 30 to 45 minutes of booking anywhere in our coverage cities." },
      { question: "Do you use original spare parts for Kaff hobs and chimneys?", answer: "Yes, we use 100% genuine and high-grade Kaff compatible spare parts, including original heating coils, pulse igniters, and motors." },
      { question: "What is covered under your 1-year Kaff service warranty?", answer: "Our 1-year warranty covers all replaced spare parts and workmanship. If the same issue reoccurs within 1 year, we fix it completely free of charge." },
      { question: "Why is my Kaff chimney auto-clean feature not melting grease?", answer: "This is usually caused by a blown heating element coil or a faulty thermal relay on the Kaff PCB board. Our technician can replace the heater coil on-site." },
      { question: "How does the doorstep Kaff gas leakage inspection work?", answer: "Our technician performs digital manometer pressure testing and soap-bubble checks to isolate leaks and seal valves safely." },
      { question: "Do you provide Kaff chimney deep chemical cleaning?", answer: "Yes, we perform complete teardown chemical degreasing of Kaff blowers, oil collectors, and baffle filters to restore 100% original suction power." },
      { question: "Are your technicians trained on Kaff touch-control models?", answer: "All our technicians are senior engineers with 8+ years of hands-on experience specifically servicing Kaff's electronic touch and gesture-control systems." }
    ],
    reviews: [
      { id: "r-kaff-1", name: "Anish Sharma", location: "Bengaluru", rating: 5, date: "2 days ago", appliance: "Kaff Auto-Clean Chimney", text: "Kaff chimney suction had stopped completely. Technician Rajesh arrived within 30 mins, diagnosed motor capacitor issue and fixed it in 20 minutes! Excellent service." },
      { id: "r-kaff-2", name: "Priya Nair", location: "Mumbai", rating: 5, date: "1 week ago", appliance: "Kaff 4-Burner Glass Hob", text: "Auto ignition on my Kaff hob was clicking continuously. The technician replaced the pulse igniter with genuine part. Very transparent service." }
    ]
  },

  "siemens-repair": {
    slug: "siemens-repair",
    name: "Siemens",
    h1Title: "Siemens Kitchen Appliance Repair & Service Center Support",
    heroHeadline: "Precision German Engineering Repair for Siemens Appliances",
    heroSubheadline: "Expert Doorstep Repair for Siemens iQ700 Hobs, Gas Stoves & Chimneys. 1-Year Warranty.",
    metaTitle: "Siemens Appliance Repair | Siemens Hob & Chimney Service Near Me",
    metaDescription: "Doorstep Siemens hob repair, gas leakage fixing & Siemens chimney repair. German engineering specialists. Call now!",
    ctaCopy: "Request Siemens Specialist Technician",
    brandTagline: "Advanced Diagnostics & Repair for Siemens Appliances",
    descriptionCopy: [
      "Siemens kitchen appliances represent peak German innovation, featuring stepFlame gas control and high-efficiency extraction hoods. Fixing Siemens appliances requires technical knowledge and precise calibration.",
      "Our specialized Siemens repair engineers are equipped with advanced diagnostic tools to resolve gas solenoid valve issues, burner jet clogging, and chimney motor faults right at your home.",
      "We provide prompt doorstep visits within 30-45 minutes, transparent upfront quotes before starting work, and a 1-year guarantee on all Siemens genuine component replacements."
    ],
    specialties: [
      "Siemens iQ300 / iQ500 / iQ700 Built-in Gas Hobs",
      "Siemens stepFlame Gas Stoves & Burners",
      "Siemens Wall-Mounted & Island Extraction Hoods"
    ],
    commonIssues: [
      { title: "Siemens stepFlame Knob Hard to Turn", desc: "Gas valve micro-gear mechanism jammed with carbonized cooking oil." },
      { title: "Siemens iQ Hood Low Suction", desc: "Electronic fan motor speed controller PCB transistor burnt out." }
    ],
    faqs: [
      { question: "Do you specialize in Siemens iQ700 series built-in appliances?", answer: "Yes, our senior engineers are specifically trained in Siemens iQ300, iQ500, and iQ700 series gas hobs and chimneys." },
      { question: "How long does a Siemens hob burner repair take?", answer: "Most Siemens hob repairs, including valve servicing and spark generator replacement, are completed in under 45 minutes at your doorstep." },
      { question: "Do you use original Siemens replacement parts?", answer: "Yes, we use 100% high-grade, original Siemens compatible components backed by a written 1-year warranty." },
      { question: "Is doorstep service available on weekends for Siemens appliances?", answer: "Yes, our emergency technician team operates 7 days a week, including Sundays and public holidays." },
      { question: "What should I do if my Siemens gas hob is leaking gas?", answer: "Turn off the main gas valve immediately and call our emergency hotline. A certified gas safety engineer will reach your home in 30 minutes." }
    ],
    reviews: [
      { id: "r-siemens-1", name: "Suresh Menon", location: "Hyderabad", rating: 5, date: "1 day ago", appliance: "Siemens Gas Hob", text: "Siemens technician was extremely knowledgeable! Solved my gas valve issue on the spot. Highly professional." },
      { id: "r-siemens-3", name: "Rahul Kapoor", location: "Gurugram", rating: 5, date: "1 week ago", appliance: "Siemens Chimney Hood", text: "Super quick 30-min response time for Siemens chimney motor repair. Clean work and honest service." }
    ]
  },

  "hafele-repair": {
    slug: "hafele-repair",
    name: "Hafele",
    logoUrl: "/logos/hafele.jpg",
    h1Title: "Hafele Premium Kitchen Appliance Repair & Servicing",
    heroHeadline: "Expert Doorstep Care for Hafele Hobs & Chimneys",
    heroSubheadline: "Luxury Kitchen Appliance Technicians for Hafele Hobs & Chimneys. Fast 30-Minute Doorstep Response & 1-Year Warranty.",
    metaTitle: "Hafele Appliance Repair Service | Hafele Hob & Chimney Repair",
    metaDescription: "Professional doorstep Hafele hob repair, Hafele chimney suction fix & gas leak fixing. 1-year warranty. Book today!",
    ctaCopy: "Book Hafele Appliance Repair",
    brandTagline: "Architectural Quality Repair for Hafele Luxury Appliances",
    descriptionCopy: [
      "Hafele is synonymous with high-end architectural kitchen solutions, engineered for seamless aesthetic integration and heavy daily performance. When Hafele hobs or chimneys experience technical snags, they demand specialized technical handling.",
      "Our technicians specialize in Hafele's unique product architecture—including Nagold series hobs and smart auto-clean chimneys. We arrive fully equipped with genuine Hafele compatible spare parts and diagnostic meters.",
      "Enjoy transparent pricing, zero hidden fees, same-day doorstep completion, and the peace of mind of a written 1-year service warranty."
    ],
    specialties: [
      "Hafele Nagold & Classic Built-in Gas Hobs",
      "Hafele Filterless Curved & Angular Extraction Hoods"
    ],
    commonIssues: [
      { title: "Hafele Gas Hob Flame Sputtering", desc: "Brass burner flame cap misaligned or clogged burner nozzle jets." },
      { title: "Hafele Chimney Gesture Control Fault", desc: "Optical sensor lens coated in cooking oil mist preventing gesture response." },
      { title: "Hafele Auto Ignition Spark Plug Shorting", desc: "High-voltage ceramic igniter pin cracked or grounding out." }
    ],
    faqs: [
      { question: "Can you fix gesture control issues on Hafele chimneys?", answer: "Yes, gesture control sensor failure is usually due to oil film on the infrared lens or a sensor board calibration issue. We fix it at your doorstep." },
      { question: "Are spare parts readily available for older Hafele Nagold hobs?", answer: "Yes, we maintain an extensive inventory of original Hafele Nagold burner caps, igniters, and gas valves." },
      { question: "Why is my Hafele gas hob burner yellow instead of blue?", answer: "Yellow flames indicate improper air-gas mixing or carbon deposits. Our technician will clean the venturi tube and adjust the air damper." },
      { question: "Can you fix gas leaks on Hafele 5-burner hobs?", answer: "Yes, gas leakage is treated as a priority emergency. We perform pressure tests and seal or replace leaking gas valves immediately." }
    ],
    reviews: [
      { id: "r-hafele-1", name: "Meera Agarwal", location: "Mumbai", rating: 5, date: "3 days ago", appliance: "Hafele Nagold Hob", text: "Hafele hob repair was done effortlessly. Technician replaced the faulty igniter in 30 minutes. Top notch service!" },
      { id: "r-hafele-2", name: "Deepak Joshi", location: "Bengaluru", rating: 5, date: "1 week ago", appliance: "Hafele Chimney Hood", text: "Great experience with Hafele chimney cleaning & touch control repair. Clean, polite, and very professional." }
    ]
  },

  "gilma-repair": {
    slug: "gilma-repair",
    name: "Gilma",
    logoUrl: "/logos/gilma.jpg",
    h1Title: "Gilma Kitchen Appliance Repair & Service Center",
    heroHeadline: "Same-Day Gilma Stove, Hob & Chimney Repair Service",
    heroSubheadline: "Fast Doorstep Technicians for Gilma Gas Stoves, Auto-Clean Chimneys & Hobs. 1-Year Warranty.",
    metaTitle: "Gilma Appliance Repair Service | Gilma Stove & Chimney Repair Near Me",
    metaDescription: "Reliable doorstep Gilma gas stove repair, Gilma chimney suction fix, hob burner cleaning & gas leak detection. 1-year warranty. Call now!",
    ctaCopy: "Get Instant Gilma Repair Quote",
    brandTagline: "Trusted Doorstep Repair for Household Gilma Kitchen Appliances",
    descriptionCopy: [
      "Gilma appliances are a staple in thousands of modern kitchens across India, known for reliable everyday performance. However, regular heavy cooking leads to carbon buildup in burner jets, motor wear in chimneys, and loose gas control knobs.",
      "Our certified Gilma repair team delivers rapid doorstep service within 30-45 minutes. We specialize in resolving Gilma gas stove low flame issues, auto-ignition spark failure, chimney motor noise, and oil collector leaks.",
      "All repairs use authentic Gilma compatible brass components, igniter boxes, and heavy-duty wiring, backed by our 1-year peace-of-mind warranty."
    ],
    specialties: [
      "Gilma Stainless Steel & Glass Top Gas Stoves",
      "Gilma Baffle & Filterless Auto-Clean Chimneys",
      "Gilma 3 & 4 Burner Built-in Glass Hobs",
      "Gilma Auto-Ignition Conversion & Servicing"
    ],
    commonIssues: [
      { title: "Gilma Gas Stove Low Flame", desc: "Burner jet orifice clogged with burnt oil and soot carbon." },
      { title: "Gilma Chimney Motor Humming Sound", desc: "Motor capacitor weakened or motor shaft bearings lacking lubrication." },
      { title: "Gilma Auto-Ignition Switch Stuck", desc: "Spring mechanism inside knob housing jammed with spilled food." }
    ],
    faqs: [
      { question: "How quickly can a Gilma gas stove technician visit my home?", answer: "We offer instant 30-minute doorstep dispatch across all service areas." },
      { question: "Why is my Gilma gas stove flame flickering yellow?", answer: "Flickering yellow flame is caused by clogged burner ports or improper air mixing. We clean and recalibrate your burner jets on-site." },
      { question: "Can you fix auto-ignition on a Gilma stove?", answer: "Yes, we stock universal ceramic spark plugs and high-voltage pulse generators compatible with Gilma models." },
      { question: "What is involved in Gilma chimney deep cleaning?", answer: "Complete eco-friendly chemical degreasing of motor blowers, baffle filters, and oil collectors." },
      { question: "Is gas leakage repair available urgently for Gilma stoves?", answer: "Yes! Gas leakage is treated as a priority 30-minute emergency visit." }
    ],
    reviews: [
      { id: "r-gilma-1", name: "Gautam Rao", location: "Bengaluru", rating: 5, date: "2 days ago", appliance: "Gilma 3-Burner Gas Stove", text: "Low flame problem solved in 20 minutes! Technician opened the jets, cleaned them thoroughly and tested flame. Super happy." },
      { id: "r-gilma-2", name: "Sunita Roy", location: "Chennai", rating: 5, date: "5 days ago", appliance: "Gilma Kitchen Chimney", text: "Chimney was making loud noise. Technician replaced motor bearing on-site. Very reasonable work!" }
    ]
  },

  "glen-repair": {
    slug: "glen-repair",
    name: "Glen",
    logoUrl: "/logos/glen.jpg",
    h1Title: "Glen Kitchen Appliance Repair & Doorstep Servicing",
    heroHeadline: "Same-Day Glen Chimney, Hob & Gas Stove Repair",
    heroSubheadline: "Certified Technicians for Glen Filterless Chimneys, Brass Hob Burners & Gas Stoves. 1-Year Warranty.",
    metaTitle: "Glen Appliance Repair Service | Glen Chimney, Hob & Stove Repair",
    metaDescription: "Expert doorstep Glen chimney repair, Glen hob burner fix, auto-ignition repair & gas leak resolution. 1-year warranty. Call now!",
    ctaCopy: "Book Glen Technician Now",
    brandTagline: "Expert Technicians for Glen Innovative Kitchen Appliances",
    descriptionCopy: [
      "Glen kitchen appliances are celebrated for practical ergonomics, Italian forged brass burners, and high-efficiency motor blowers. When performance drops due to grease buildup or electrical faults, fast expert intervention is essential.",
      "Our specialized Glen service engineers handle everything from Glen chimney motion-sensor PCB failures to Glen gas hob burner jet unclogging.",
      "We guarantee 30-45 minute doorstep technician arrival, transparent fixed pricing, original Glen compatible spares, and a 1-year service warranty."
    ],
    specialties: [
      "Glen Motion-Sensor Filterless Auto-Clean Chimneys",
      "Glen Forged Brass Burner Glass Hobs & Stoves"
    ],
    commonIssues: [
      { title: "Glen Chimney Motion Sensor Not Responding", desc: "Grease film over optical sensor or PCB logic controller breakdown." },
      { title: "Glen Hob Flame Sputtering / Yellow Tip", desc: "Carbonized grease choking the internal gas venturi tube." },
      { title: "Glen Auto Ignition Battery Drain", desc: "Short circuit in wiring harness continuously draining D-size battery." }
    ],
    faqs: [
      { question: "How fast can you repair a Glen chimney motion sensor?", answer: "Our technician carries replacement Glen motion-sensor PCB modules and fixes sensor issues in a single 30-minute visit." },
      { question: "Do you supply original brass burners for Glen hobs?", answer: "Yes, we stock genuine Italian-type forged brass burners for all Glen hob and gas stove models." },
      { question: "Why is my Glen chimney auto-clean feature leaking oil onto the stove?", answer: "This happens when the oil tray drain outlet is clogged with solidified grease. We clear the drain line and service the heating element." },
      { question: "How is Glen gas stove jet cleaning done?", answer: "Our technician unblocks burner nozzles and adjusts air venturi calibration on-site." },
      { question: "Can you fix gas leaks on Glen built-in glass hobs?", answer: "Yes, gas leaks are handled as urgent priority visits within 30 minutes." }
    ],
    reviews: [
      { id: "r-glen-1", name: "Alok Srivastava", location: "Lucknow", rating: 5, date: "1 day ago", appliance: "Glen Auto-Clean Chimney", text: "Glen chimney suction was completely dead. Technician replaced capacitor and serviced motor in 30 mins. Great experience!" },
      { id: "r-glen-2", name: "Pooja Reddy", location: "Hyderabad", rating: 5, date: "3 days ago", appliance: "Glen 4-Burner Hob", text: "Quick resolution for Glen hob auto ignition problem. Honest technician." }
    ]
  },

  "elica-repair": {
    slug: "elica-repair",
    name: "Elica",
    h1Title: "Elica Kitchen Appliance Repair & Service Support",
    heroHeadline: "Same-Day Elica Chimney & Hob Repair at Doorstep",
    heroSubheadline: "Certified Italian Technology Specialists for Elica Deep Silence Chimneys & Glass Hobs. 1-Year Warranty.",
    metaTitle: "Elica Appliance Repair Service | Elica Chimney & Hob Repair Near Me",
    metaDescription: "Fast doorstep Elica chimney suction fix, Elica hob burner repair, touch panel PCB fix & gas leak detection. 1-year warranty. Call now!",
    ctaCopy: "Book Elica Specialist Technician",
    brandTagline: "Italian Design Precision Repair for Elica Kitchen Hoods & Hobs",
    descriptionCopy: [
      "Elica is world-famous for revolutionary kitchen hood designs, EDS (Elica Deep Silence) technology, and high-performance glass hobs. These high-suction, low-noise systems require skilled technical hands when servicing.",
      "Our certified Elica repair specialists possess extensive experience fixing Elica filterless auto-clean chimneys, touch-control sensors, EDS sound insulation blowers, and brass hob igniters.",
      "We deliver 30-45 minute doorstep response, transparent fixed pricing, original Elica compatible replacement components, and a 1-year written guarantee."
    ],
    specialties: [
      "Elica EDS (Deep Silence) & Filterless Hoods",
      "Elica 3, 4 & 5 Burner Brass Glass Hobs",
      "Elica Flexi Brass Stove Ranges"
    ],
    commonIssues: [
      { title: "Elica Chimney Low Suction Power", desc: "Blower impeller choked with heavy grease or motor speed controller PCB failure." },
      { title: "Elica Touch Control Sensor Not Working", desc: "Moisture or oil vapour seepage causing PCB micro-controller lockup." },
      { title: "Elica Gas Hob Igniter Clicking Constantly", desc: "Micro-switch contacts under control knob fused together by spilled liquid." },
      { title: "Elica Chimney Making Loud Noise", desc: "Motor bearing wear out or loose blower fan nut." }
    ],
    faqs: [
      { question: "Why has my Elica chimney suction power reduced significantly?", answer: "Reduced suction is typically caused by clogged baffle filters, grease buildup on the internal blower fan, or a degraded motor capacitor. We clean and restore full suction." },
      { question: "Do you specialize in Elica EDS (Elica Deep Silence) models?", answer: "Yes, our technicians are trained specifically on Elica EDS noise-reduction blowers and silent motor assemblies." },
      { question: "How quickly can an Elica technician reach my home?", answer: "We dispatch nearby engineers who arrive at your doorstep within 30 to 45 minutes of confirmation." },
      { question: "Can you fix the touch panel on an Elica gesture-control chimney?", answer: "Yes, we carry replacement touch/gesture PCB cards for all Elica chimney models and fix them on-site." },
      { question: "How is Elica gas hob auto-ignition repaired?", answer: "We replace worn pulse igniter boxes and ceramic spark plugs right at your doorstep." }
    ],
    reviews: [
      { id: "r-elica-1", name: "Siddharth Verma", location: "Bengaluru", rating: 5, date: "1 day ago", appliance: "Elica Deep Silence Chimney", text: "Elica chimney was making screeching noise. Technician replaced motor bearings right in front of me. Now runs silently!" },
      { id: "r-elica-2", name: "Radhika Kulkarni", location: "Pune", rating: 5, date: "3 days ago", appliance: "Elica 4-Burner Glass Hob", text: "Elica hob burner wasn't lighting up. Technician cleaned nozzle jets and fixed spark wire in 20 mins." }
    ]
  },

  "kutchina-repair": {
    slug: "kutchina-repair",
    name: "Kutchina",
    h1Title: "Kutchina Appliance Repair & Auto-Clean Chimney Service",
    heroHeadline: "Same-Day Kutchina Chimney & Hob Repair at Doorstep",
    heroSubheadline: "Pioneers of Auto-Clean Technology Repair. Certified Engineers for Kutchina Chimneys, Hobs & Stoves. 1-Year Warranty.",
    metaTitle: "Kutchina Appliance Repair Service | Kutchina Chimney & Hob Repair",
    metaDescription: "Expert doorstep Kutchina auto-clean chimney repair, Kutchina hob burner fix, touch PCB repair & gas leak detection. 1-year warranty. Call now!",
    ctaCopy: "Book Kutchina Repair Expert",
    brandTagline: "Auto-Clean Specialists for Kutchina Appliances",
    descriptionCopy: [
      "Kutchina revolutionized Indian kitchens with pathbreaking auto-clean chimney technology designed specifically for heavy spice and mustard oil cooking. Maintaining Kutchina's high-torque blowers and heat-clean coils requires specialist expertise.",
      "Our doorstep Kutchina technicians specialize in diagnosing auto-clean heating element burnouts, touch PCB sensor glitches, hob burner yellow flames, and gas leakage issues.",
      "We guarantee 30-45 minute technician response, genuine Kutchina compatible replacement components, transparent upfront quotes, and a 1-year warranty."
    ],
    specialties: [
      "Kutchina Auto-Clean & i-Clean Technology Chimneys",
      "Kutchina High-Efficiency Brass Glass Hobs",
      "Kutchina Heavy Duty Gas Stoves"
    ],
    commonIssues: [
      { title: "Kutchina Chimney Auto-Clean Heater Not Melting Oil", desc: "Heating element coil wire severed or thermal fuse tripped." },
      { title: "Kutchina Chimney Touch Panel Beeping Continuously", desc: "Water vapor or oil mist shorting out control board contacts." },
      { title: "Kutchina Hob Burner Clogged / Low Flame", desc: "Heavy carbon deposit blocking the brass gas ports." },
      { title: "Kutchina Gas Hob Sparking Failure", desc: "Battery box terminal corroded or high-voltage pulse box dead." }
    ],
    faqs: [
      { question: "Why is my Kutchina chimney auto-clean button not working?", answer: "This is usually caused by a burnt heating element coil or a blown relay on the control PCB. We test and replace the heating element on-site." },
      { question: "How long does a Kutchina chimney repair visit take?", answer: "Technicians arrive within 30-45 minutes and complete most repairs in 30 to 60 minutes." },
      { question: "Can you fix yellow flame issues on Kutchina glass hobs?", answer: "Yes, yellow flame is resolved by clearing carbon deposits from the burner ports and adjusting the air venturi shutter." },
      { question: "How is Kutchina gas stove nozzle cleaning performed?", answer: "Carbon deposit scrapings and jet nozzle unblocking performed right at your doorstep." }
    ],
    reviews: [
      { id: "r-kutchina-1", name: "Joydeep Das", location: "Kolkata", rating: 5, date: "1 day ago", appliance: "Kutchina Auto-Clean Chimney", text: "Kutchina auto clean feature was not working. Technician changed heating coil in 30 mins. Smooth experience!" },
      { id: "r-kutchina-2", name: "Aparna Mukhopadhyay", location: "Asansol", rating: 5, date: "4 days ago", appliance: "Kutchina Glass Hob", text: "Fixed low flame issue on my Kutchina hob quickly. Very polite technician." }
    ]
  },

  "faber-repair": {
    slug: "faber-repair",
    name: "Faber",
    logoUrl: "/logos/faber.jpg",
    h1Title: "Faber Kitchen Appliance Repair & Service Support",
    heroHeadline: "Same-Day Faber Chimney & Hob Repair",
    heroSubheadline: "Certified Technicians for Faber 3D Suction Hoods & Italian Brass Hobs. 30-Min Doorstep Dispatch & 1-Year Warranty.",
    metaTitle: "Faber Appliance Repair Service | Faber Chimney & Hob Repair Near Me",
    metaDescription: "Fast doorstep Faber chimney repair, Faber hob burner fix, 3D suction tuning & auto-ignition repair. 1-year warranty. Call now!",
    ctaCopy: "Book Faber Technician Now",
    brandTagline: "Pioneering Hood Engineering Repair for Faber Kitchen Systems",
    descriptionCopy: [
      "Faber is the inventor of the modern domestic cooker hood, renowned for powerful 3D triple-suction technology, heavy-gauge steel construction, and high-efficiency brass hobs. Servicing Faber appliances demands accurate technical calibration.",
      "Our certified Faber technicians handle all Faber chimney motor repairs, touch sensor PCB board fixes, auto-clean heat coil replacements, and glass hob ignition glitches right at your home.",
      "Benefit from 30-45 minute doorstep arrival, transparent upfront estimates, 100% original Faber compatible spare parts, and a 1-year written guarantee."
    ],
    specialties: [
      "Faber 3D / 6-Way Suction Auto-Clean Chimneys",
      "Faber Italian Forged Brass 3, 4 & 5 Burner Hobs",
      "Faber Vector & Island Hood Systems"
    ],
    commonIssues: [
      { title: "Faber Chimney 3D Suction Reduced", desc: "Blower wheel choked with grease or motor run capacitor weakened." },
      { title: "Faber Hob Auto Ignition Spark Plug Short", desc: "Ceramic insulation cracked or wet micro-switch contacts." },
      { title: "Faber Chimney Touch Display Error", desc: "Corrosion on control board ribbons due to steam exposure." }
    ],
    faqs: [
      { question: "Why is my Faber 3D suction chimney not extracting smoke properly?", answer: "Low extraction power is usually caused by clogged oil collectors, dirty baffle filters, or a weak motor capacitor. We service blowers to restore 100% suction." },
      { question: "How quickly can a Faber repair technician arrive?", answer: "Our nearest technician will reach your home within 30 to 45 minutes of booking." },
      { question: "Do you supply genuine brass burners for Faber hobs?", answer: "Yes, we stock original-spec Faber Italian brass burner rings, gas jets, and igniter plugs." },
      { question: "Can you fix gas leaks on Faber 4-burner hobs?", answer: "Yes! Gas leaks are treated as priority emergency calls dispatched within 30 minutes." }
    ],
    reviews: [
      { id: "r-faber-1", name: "Rajesh Malhotra", location: "Delhi NCR", rating: 5, date: "1 day ago", appliance: "Faber 3D Suction Chimney", text: "Faber chimney motor died suddenly. Called them at 10 AM, technician arrived by 10:40 AM and replaced motor capacitor. Back to full suction!" },
      { id: "r-faber-2", name: "Vandana Sharma", location: "Jaipur", rating: 5, date: "3 days ago", appliance: "Faber 4-Burner Hob", text: "Auto ignition spark was missing on 2 burners. Technician fixed spark plug wiring quickly. Excellent service!" }
    ]
  },

  "bosch-repair": {
    slug: "bosch-repair",
    name: "Bosch",
    h1Title: "Bosch Kitchen Appliance Repair & Service Center Support",
    heroHeadline: "Certified German Bosch Appliance Repair at Doorstep",
    heroSubheadline: "Doorstep Repair for Bosch Built-in Gas Hobs & Hoods. 1-Year Warranty.",
    metaTitle: "Bosch Appliance Repair Service | Bosch Hob & Hood Repair Near Me",
    metaDescription: "Professional doorstep Bosch hob repair, FlameSelect gas valve fix & Bosch hood repair. 1-year warranty. Call now!",
    ctaCopy: "Request Bosch Specialist Engineer",
    brandTagline: "German Quality Engineering Repair for Bosch Appliances",
    descriptionCopy: [
      "Bosch kitchen appliances are built to exact German engineering standards, featuring FlameSelect gas controls and EcoSilence Drive motors. Standard repair methods can damage these sensitive systems.",
      "Our certified Bosch repair engineers carry advanced diagnostic equipment to service Bosch FlameSelect gas valves and EcoSilence chimney blowers.",
      "We guarantee 30-45 minute doorstep technician arrival, original Bosch compatible replacement parts, fixed transparent quotes, and a 1-year warranty."
    ],
    specialties: [
      "Bosch Series 4 / 6 / 8 FlameSelect Gas Hobs",
      "Bosch EcoSilence Drive Extraction Hoods"
    ],
    commonIssues: [
      { title: "Bosch FlameSelect Valve Clicking", desc: "Flame failure safety device thermocouple out of position." },
      { title: "Bosch Hood EcoSilence Motor Dead", desc: "Brushless DC motor PCB controller relay failure." }
    ],
    faqs: [
      { question: "Do you specialize in Bosch Series 6 and Series 8 appliances?", answer: "Yes, our senior engineers are specifically trained on Bosch gas hobs and extraction hoods." },
      { question: "How fast can a technician visit for Bosch repair?", answer: "Our nearest technician will reach your home within 30 to 45 minutes of booking." },
      { question: "Can you repair Bosch FlameSelect gas valves?", answer: "Yes, we service and recalibrate Bosch 9-stage FlameSelect valve assemblies to ensure precise flame control." }
    ],
    reviews: [
      { id: "r-bosch-1", name: "Dr. Vikramaditya", location: "Bengaluru", rating: 5, date: "1 day ago", appliance: "Bosch Gas Hob", text: "Bosch technician arrived in 35 mins. Diagnosed gas valve failure and fixed it on-site. Truly professional!" },
      { id: "r-bosch-3", name: "Anand Ranganathan", location: "Chennai", rating: 5, date: "1 week ago", appliance: "Bosch Extraction Hood", text: "Great experience with Bosch chimney motor repair. Clean work and 1-year written warranty." }
    ]
  },

  "blowhot-repair": {
    slug: "blowhot-repair",
    name: "Blowhot",
    h1Title: "Blowhot Kitchen Appliance Repair & Service Support",
    heroHeadline: "Same-Day Blowhot Gas Stove, Hob & Chimney Repair",
    heroSubheadline: "Doorstep Technicians for Blowhot Heavy Brass Gas Stoves, Auto-Clean Chimneys & Hobs. 1-Year Warranty.",
    metaTitle: "Blowhot Appliance Repair Service | Blowhot Stove & Chimney Repair",
    metaDescription: "Fast doorstep Blowhot gas stove repair, Blowhot chimney suction fix, auto-ignition repair & gas leak detection. 1-year warranty. Call now!",
    ctaCopy: "Book Blowhot Repair Service",
    brandTagline: "Heavy-Duty Repair Support for Blowhot Kitchen Appliances",
    descriptionCopy: [
      "Blowhot kitchen appliances are known for robust heavy-gauge stainless steel gas stoves, high-suction chimneys, and built-in hobs. Heavy daily cooking can cause nozzle clogging, motor capacitor decline, and ignition switches to stick.",
      "Our doorstep Blowhot technicians specialize in clearing clogged brass burner jets, replacing worn chimney capacitors, and fixing auto-ignition spark wiring.",
      "We guarantee 30-45 minute doorstep technician arrival, transparent fixed pricing, original Blowhot compatible spares, and a 1-year service warranty."
    ],
    specialties: [
      "Blowhot Tornado & Heavy-Duty Gas Stoves",
      "Blowhot Motion Sensor Auto-Clean Chimneys",
      "Blowhot 3 & 4 Burner Glass Built-in Hobs"
    ],
    commonIssues: [
      { title: "Blowhot Gas Stove Low Flame", desc: "Grease and carbon deposit clogging brass nozzle orifice." },
      { title: "Blowhot Chimney Motor Humming", desc: "Motor capacitor capacitance dropped or shaft bearings dry." },
      { title: "Blowhot Ignition Switch Stuck", desc: "Liquid spillage causing knob spring mechanism corrosion." }
    ],
    faqs: [
      { question: "How quickly can a technician visit for Blowhot gas stove repair?", answer: "Technicians arrive within 30 to 45 minutes of booking anywhere in our service cities." },
      { question: "Why is my Blowhot gas stove burner giving yellow flame?", answer: "Yellow flame is caused by blocked burner ports or improper air mixing. We clean burner nozzles on-site." },
      { question: "What is included in Blowhot chimney deep cleaning?", answer: "Eco-friendly degreasing of motor impellers and oil trays." },
      { question: "Can you fix auto-ignition on Blowhot glass hobs?", answer: "Yes, we replace pulse igniter boxes and ceramic spark plugs at your doorstep." }
    ],
    reviews: [
      { id: "r-blowhot-1", name: "Ramesh Pawar", location: "Pune", rating: 5, date: "2 days ago", appliance: "Blowhot Gas Stove", text: "Blowhot stove low flame fixed in 15 minutes! Very happy with the fast response." },
      { id: "r-blowhot-2", name: "Shalini Tripathi", location: "Lucknow", rating: 5, date: "4 days ago", appliance: "Blowhot Chimney", text: "Technician cleaned Blowhot chimney filters and fixed motor noise. Excellent service!" }
    ]
  },

  "sunflame-repair": {
    slug: "sunflame-repair",
    name: "Sunflame",
    h1Title: "Sunflame Kitchen Appliance Repair & Service Support",
    heroHeadline: "Same-Day Sunflame Gas Stove, Hob & Chimney Repair",
    heroSubheadline: "Doorstep Technicians for Sunflame Gas Stoves, Auto-Clean Chimneys & Hobs. 1-Year Warranty.",
    metaTitle: "Sunflame Appliance Repair Service | Sunflame Stove & Chimney Repair",
    metaDescription: "Fast doorstep Sunflame gas stove repair, Sunflame chimney suction fix, auto-ignition repair & gas leak resolution. 1-year warranty. Call now!",
    ctaCopy: "Book Sunflame Technician",
    brandTagline: "Decades of Reliability Repair Support for Sunflame Appliances",
    descriptionCopy: [
      "Sunflame is one of India's most trusted household appliance brands, present in millions of kitchens. Constant daily cooking can lead to brass burner carbon clogging, loose valve spindles, and chimney motor capacitor wear.",
      "Our doorstep Sunflame repair team specializes in restoring Sunflame gas stoves, glass top hobs, and auto-clean chimneys to peak operating efficiency.",
      "We guarantee 30-45 minute doorstep technician arrival, original Sunflame compatible replacement spares, transparent pricing, and a 1-year written guarantee."
    ],
    specialties: [
      "Sunflame Stainless Steel & Toughened Glass Stoves",
      "Sunflame Auto-Clean Baffle & Filterless Hoods",
      "Sunflame 3 & 4 Burner Built-in Gas Hobs"
    ],
    commonIssues: [
      { title: "Sunflame Gas Stove Low Flame", desc: "Nozzle jet orifice choked with food residue and carbon deposits." },
      { title: "Sunflame Chimney Weak Suction", desc: "Oil collector full and motor capacitor weakened." },
      { title: "Sunflame Auto Ignition Spark Plug Dead", desc: "High voltage wire severed or ceramic plug cracked." }
    ],
    faqs: [
      { question: "How quickly can a technician visit for Sunflame gas stove repair?", answer: "Technicians arrive at your doorstep within 30 to 45 minutes of booking." },
      { question: "Why is my Sunflame stove burner producing black soot on pots?", answer: "Black soot is caused by a yellow flame due to choked air venturi openings. We clean and adjust your burner jets on-site." },
      { question: "How is Sunflame stove nozzle servicing done?", answer: "Nozzle orifice re-boring and burner jet cleaning done at your home." },
      { question: "Can you fix auto-ignition on Sunflame 4-burner stoves?", answer: "Yes, we carry universal high-voltage pulse generator boxes and ceramic spark plugs for all Sunflame models." }
    ],
    reviews: [
      { id: "r-sunflame-1", name: "Suresh Gupta", location: "Delhi NCR", rating: 5, date: "1 day ago", appliance: "Sunflame 3-Burner Stove", text: "Sunflame stove low flame problem solved quickly. Technician was polite and charge was very reasonable." },
      { id: "r-sunflame-2", name: "Bhavna Joshi", location: "Jaipur", rating: 5, date: "3 days ago", appliance: "Sunflame Chimney", text: "Cleaned Sunflame chimney filters and fixed motor humming sound. Excellent service!" }
    ]
  },

  "crompton-repair": {
    slug: "crompton-repair",
    name: "Crompton",
    h1Title: "Crompton Appliance Repair & Service Center Support",
    heroHeadline: "Same-Day Crompton Chimney & Appliance Repair",
    heroSubheadline: "Doorstep Technicians for Crompton QuietPro Chimneys, Smart Auto-Clean Hoods & Hobs. 1-Year Warranty.",
    metaTitle: "Crompton Appliance Repair Service | Crompton Chimney & Hob Repair",
    metaDescription: "Fast doorstep Crompton chimney suction repair, QuietPro motor servicing, touch PCB repair & gas hob fixing. 1-year warranty. Call now!",
    ctaCopy: "Book Crompton Specialist Technician",
    brandTagline: "Smart Engineering Repair Support for Crompton Appliances",
    descriptionCopy: [
      "Crompton is renowned for QuietPro silent motor technology, smart gesture-control chimneys, and durable kitchen appliances. Servicing Crompton appliances requires expertise in quiet motor assemblies and electronic PCB modules.",
      "Our doorstep Crompton technicians specialize in resolving QuietPro chimney motor noise, touch PCB sensor faults, low suction power, and hob ignition issues right at your home.",
      "We guarantee 30-45 minute doorstep technician arrival, original Crompton compatible replacement components, transparent pricing, and a 1-year service warranty."
    ],
    specialties: [
      "Crompton QuietPro Silent Motor Chimneys",
      "Crompton Smart Gesture Auto-Clean Hoods",
      "Crompton Brass Glass Hobs & Stoves"
    ],
    commonIssues: [
      { title: "Crompton Chimney QuietPro Motor Vibration", desc: "Motor bearing wear out or fan impeller grease imbalance." },
      { title: "Crompton Gesture Control Not Responding", desc: "Dust or oil layer over optical PCB sensor lens." },
      { title: "Crompton Chimney Suction Power Dropped", desc: "Baffle filter saturated with oil sludge." },
      { title: "Crompton Hob Igniter Not Sparking", desc: "Pulse generator box circuit board failure." }
    ],
    faqs: [
      { question: "Why is my Crompton QuietPro chimney making noise?", answer: "Noise is usually caused by unaligned fan impellers or motor bearing wear. We realign and service QuietPro motors on-site." },
      { question: "How quickly can a technician visit for Crompton chimney repair?", answer: "Technicians reach your doorstep within 30 to 45 minutes of booking." },
      { question: "What is included in Crompton chimney deep cleaning?", answer: "Chemical degreasing of QuietPro motor blowers and filters." },
      { question: "Can you fix touch control PCB issues on Crompton chimneys?", answer: "Yes, we carry replacement touch sensor PCB modules for all Crompton chimney models." },
      { question: "Do you service Crompton gas hobs and stoves?", answer: "Yes, we repair burner jet clogs, auto-ignition spark failure, and gas leaks on Crompton hobs." }
    ],
    reviews: [
      { id: "r-crompton-1", name: "Anurag Mishra", location: "Lucknow", rating: 5, date: "2 days ago", appliance: "Crompton QuietPro Chimney", text: "Crompton chimney motor issue fixed in 30 mins! QuietPro motor runs silently now. Highly satisfied." },
      { id: "r-crompton-2", name: "Pooja Hegde", location: "Bengaluru", rating: 5, date: "4 days ago", appliance: "Crompton Auto-Clean Hood", text: "Fixed touch PCB board on my Crompton chimney quickly. Great service." }
    ]
  },

  "cata-repair": {
    slug: "cata-repair",
    name: "Cata",
    h1Title: "Cata Kitchen Appliance Repair & Service Support",
    heroHeadline: "Same-Day Cata Chimney & Hob Repair",
    heroSubheadline: "Spanish Built-in Appliance Technicians for Cata Hoods & Glass Hobs. 30-Min Doorstep Dispatch & 1-Year Warranty.",
    metaTitle: "Cata Appliance Repair Service | Cata Chimney & Hob Repair",
    metaDescription: "Professional doorstep Cata chimney repair, Cata hob burner fix & touch PCB repair. 1-year warranty. Call now!",
    ctaCopy: "Book Cata Specialist Technician",
    brandTagline: "Spanish Excellence Repair for Cata Built-in Kitchen Appliances",
    descriptionCopy: [
      "Cata is a premium Spanish brand world-famous for silent extraction hoods and sleek gas hobs. Servicing Cata's specialized European components requires trained technical expertise.",
      "Our doorstep Cata technicians specialize in resolving Cata chimney extraction loss, touch PCB lockups, and gas valve leaks right at your home.",
      "We guarantee 30-45 minute doorstep arrival, transparent upfront estimates, 100% original Cata compatible spare parts, and a 1-year written warranty."
    ],
    specialties: [
      "Cata Silent Extraction Hoods & Canopies",
      "Cata Built-in Gas Hobs"
    ],
    commonIssues: [
      { title: "Cata Chimney Touch Control Locked", desc: "Safety child lock engaged or touch sensor board moisture lockup." },
      { title: "Cata Hob Burner Sparking Failure", desc: "Pulse generator relay dead or wire shorting." },
      { title: "Cata Hood Extraction Power Low", desc: "Blower turbine choked with grease deposits." }
    ],
    faqs: [
      { question: "Do you specialize in Spanish Cata built-in appliances?", answer: "Yes, our engineers are trained specifically on Cata European specifications, touch control boards, and silent fan blowers." },
      { question: "Can you fix touch control problems on Cata hobs?", answer: "Yes, we carry replacement touch sensor PCB cards for Cata hobs and fix them on-site." },
      { question: "Do you supply genuine spare parts for Cata appliances?", answer: "Yes, we use 100% genuine Cata compatible replacement spares backed by a 1-year warranty." }
    ],
    reviews: [
      { id: "r-cata-1", name: "Fernando D'Souza", location: "Goa", rating: 5, date: "2 days ago", appliance: "Cata Silent Extraction Hood", text: "Cata chimney suction power restored! Technician cleaned blowers and replaced capacitor. Great service." },
      { id: "r-cata-2", name: "Meenakshi Sundaram", location: "Chennai", rating: 5, date: "4 days ago", appliance: "Cata Gas Hob", text: "Fixed touch PCB board on my Cata hob efficiently. Highly recommended!" }
    ]
  },

  "asko-repair": {
    slug: "asko-repair",
    name: "Asko",
    h1Title: "Asko Luxury Kitchen Appliance Repair & Service",
    heroHeadline: "Premium Scandinavian Asko Appliance Repair at Doorstep",
    heroSubheadline: "Certified Doorstep Technicians for Asko Luxury Hobs & Hoods. 1-Year Warranty.",
    metaTitle: "Asko Appliance Repair Service | Asko Hob & Hood Repair",
    metaDescription: "Expert doorstep Asko hob repair & hood servicing. 1-year warranty. Call now!",
    ctaCopy: "Request Asko Specialist Technician",
    brandTagline: "Scandinavian Minimalist Craftsmanship Repair for Asko Luxury Appliances",
    descriptionCopy: [
      "Asko represents ultra-premium Scandinavian design, precision craftsmanship, and heavy stainless steel durability. Repairing luxury Asko kitchen appliances requires white-glove service standards and microscopic diagnostic accuracy.",
      "Our senior luxury appliance specialists are trained on Asko gas-on-glass hobs and high-cubic-meter extraction hoods.",
      "Enjoy 30-45 minute doorstep engineer arrival, white-glove cleanliness, genuine Asko compatible spares, and a 1-year written guarantee."
    ],
    specialties: [
      "Asko Craft & Elements Built-in Gas Hobs",
      "Asko Stainless Steel Wall & Island Extraction Hoods"
    ],
    commonIssues: [
      { title: "Asko Gas Hob Flame Fail Safety Lockup", desc: "Thermocouple safety valve misaligned or dirty gas nozzle." },
      { title: "Asko Hood Blower Fan Noise", desc: "Turbine impeller imbalance or bearing wear." }
    ],
    faqs: [
      { question: "Do you specialize in ultra-premium Asko Scandinavian appliances?", answer: "Yes, our senior engineers are specifically trained on luxury Asko series appliances." },
      { question: "How fast can an Asko technician reach my location?", answer: "We dispatch senior luxury specialists who arrive at your home within 30 to 45 minutes of booking." },
      { question: "Do you use genuine Asko replacement components?", answer: "Yes, we use 100% genuine Asko compatible parts backed by a written 1-year guarantee." },
      { question: "Can you fix gas leaks on Asko gas-on-glass hobs?", answer: "Yes, gas leaks are treated as priority emergency visits dispatched within 30 minutes." }
    ],
    reviews: [
      { id: "r-asko-1", name: "Sanjiv Goenka", location: "Kolkata", rating: 5, date: "1 day ago", appliance: "Asko Gas Hob", text: "Asko luxury technician was super polite and fixed my hob in 45 mins. White glove service indeed!" },
      { id: "r-asko-3", name: "Arjun Oberoi", location: "Delhi NCR", rating: 5, date: "1 week ago", appliance: "Asko Stainless Extraction Hood", text: "Excellent chimney blower motor repair service for Asko. Professional and prompt!" }
    ]
  },

  "miele-repair": {
    slug: "miele-repair",
    name: "Miele",
    h1Title: "Miele Luxury Kitchen Appliance Repair & Servicing",
    heroHeadline: "Certified German Miele Appliance Repair at Doorstep",
    heroSubheadline: "White-Glove Doorstep Repair for Miele Gas Hobs & Hoods. 1-Year Warranty.",
    metaTitle: "Miele Appliance Repair Service | Miele Hob & Hood Repair",
    metaDescription: "White-glove doorstep Miele hob repair & hood servicing. 1-year warranty. Call now!",
    ctaCopy: "Request Miele Master Technician",
    brandTagline: "Immer Besser (Forever Better) Repair Excellence for Miele Luxury Appliances",
    descriptionCopy: [
      "Miele is the pinnacle of luxury German home appliances, engineered with legendary 'Immer Besser' quality to last decades. Servicing Miele appliances requires master-level technician training, specialized diagnostic tools, and precise calibration.",
      "Our certified Miele master engineers specialize in Miele Dual FlexZone gas burners and silent Connoisseur hood extraction systems.",
      "Enjoy 30-45 minute doorstep master engineer arrival, white-glove care, genuine Miele compatible replacement spares, and a 1-year written guarantee."
    ],
    specialties: [
      "Miele Gas-on-Glass Hobs with Dual Wok Burners",
      "Miele Connoisseur Silent Wall & Island Extraction Hoods"
    ],
    commonIssues: [
      { title: "Miele Gas Hob Dual Wok Igniter Spark Failure", desc: "Dual spark electrode wire grounding out on stainless steel chassis." },
      { title: "Miele Hood Silence Blower Motor Noise", desc: "Blower turbine balance clip dislodged." }
    ],
    faqs: [
      { question: "Do you specialize in luxury Miele appliances?", answer: "Yes, our master engineers are certified and specifically trained on Miele luxury series electronics." },
      { question: "How fast can a Miele master technician visit my home?", answer: "We dispatch senior luxury master technicians who arrive within 30 to 45 minutes of booking." },
      { question: "Do you use original Miele replacement components?", answer: "Yes, we use 100% genuine Miele compatible spare parts backed by a written 1-year service guarantee." },
      { question: "Can you fix gas leaks on Miele dual-wok gas hobs?", answer: "Yes, gas leak calls are dispatched as priority 30-minute emergency visits." }
    ],
    reviews: [
      { id: "r-miele-1", name: "Cyrus Poonawalla", location: "Mumbai", rating: 5, date: "1 day ago", appliance: "Miele Gas Hob", text: "Miele master technician arrived in 30 mins. Diagnosed gas valve issue and fixed it on-site with complete professionalism." },
      { id: "r-miele-3", name: "Rana Kapoor", location: "Delhi NCR", rating: 5, date: "1 week ago", appliance: "Miele Connoisseur Hood", text: "Miele extraction hood blower motor fixed on the same day. Professional and prompt!" }
    ]
  }
};
