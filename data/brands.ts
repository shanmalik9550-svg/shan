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
    h1Title: "Kaff Kitchen Appliance Repair & Doorstep Service",
    heroHeadline: "Same-Day Kaff Chimney, Hob & Oven Repair at Doorstep",
    heroSubheadline: "Certified Technicians for Kaff Built-in Hobs, Auto-Clean Chimneys & Cooking Ranges. 90-Day Warranty with Genuine Kaff Spare Parts.",
    metaTitle: "Kaff Appliance Repair Service | Kaff Chimney & Hob Repair Near Me",
    metaDescription: "Fast doorstep Kaff chimney repair, Kaff hob burner fix, auto-ignition & built-in oven servicing. Experienced technicians, 90-day warranty. Call now!",
    ctaCopy: "Book Kaff Expert Repair in 30 Mins",
    brandTagline: "Specialized Doorstep Care for Premium Kaff Built-in Appliances",
    descriptionCopy: [
      "Kaff kitchen appliances are renowned for sleek European aesthetics and high-suction auto-clean chimneys. However, heavy Indian cooking with high oil and spice content often causes oil collectors, touch switches, and forged brass burners to degrade over time.",
      "Our specialized Kaff repair service brings certified master technicians directly to your doorstep within 30 to 45 minutes. Whether your Kaff chimney suction power has dropped, the touch control panel is unresponsive, or your Kaff 4-burner glass hob is experiencing auto-ignition clicking, we diagnose and resolve it on-site.",
      "We strictly utilize 100% original Kaff compatible replacement parts including heat coils, pulse generators, high-efficiency blowers, and 8mm toughened glass tops. Backed by an official 90-day service warranty."
    ],
    specialties: [
      "Kaff Auto-Clean Heat & Dry Chimneys",
      "Kaff 3, 4 & 5 Burner Glass Top Built-in Hobs",
      "Kaff Convection & Steam Built-in Ovens",
      "Kaff Heavy-Duty Cooking Ranges & Hoods"
    ],
    commonIssues: [
      { title: "Kaff Chimney Touch Panel Unresponsive", desc: "Corrosion or grease moisture shorting out the PCB micro-switches." },
      { title: "Kaff Hob Auto-Ignition Continuous Spark", desc: "Pulse generator wire insulation breakdown caused by oil accumulation." },
      { title: "Kaff Chimney Auto-Clean Coil Fault", desc: "Heating element burnt out resulting in sticky oil clogging the impellers." },
      { title: "Kaff Brass Burner Yellow Flame", desc: "Air-to-gas venturi ratio miscalibration producing carbon soot." }
    ],
    faqs: [
      { question: "How quickly can a technician visit for Kaff chimney repair?", answer: "We offer immediate doorstep dispatch. A technician will arrive at your home within 30 to 45 minutes of booking anywhere in our coverage cities." },
      { question: "Do you use original spare parts for Kaff hobs and chimneys?", answer: "Yes, we use 100% genuine and high-grade Kaff compatible spare parts, including original heating coils, pulse igniters, motors, and toughened glass tops." },
      { question: "What is covered under your 90-day Kaff service warranty?", answer: "Our 90-day warranty covers all replaced spare parts and workmanship. If the same issue reoccurs within 90 days, we fix it completely free of charge." },
      { question: "Why is my Kaff chimney auto-clean feature not melting grease?", answer: "This is usually caused by a blown heating element coil or a faulty thermal relay on the Kaff PCB board. Our technician can replace the heater coil on-site." },
      { question: "Can you fix cracked glass on a Kaff 4-burner built-in hob?", answer: "Yes, we stock 8mm thermal-shock resistant toughened glass tops for all Kaff hob models and replace shattered glass tops at your doorstep." },
      { question: "How does the doorstep Kaff gas leakage inspection work?", answer: "Our technician performs digital manometer pressure testing and soap-bubble checks to isolate leaks and seal valves safely." },
      { question: "My Kaff oven is not heating uniformly. Can this be repaired?", answer: "Yes, uniform heating failure is typically due to a malfunctioning top element or faulty thermostat sensor. We carry replacement elements for Kaff ovens." },
      { question: "Do you provide Kaff chimney deep chemical cleaning?", answer: "Yes, we perform complete teardown chemical degreasing of Kaff blowers, oil collectors, and baffle filters to restore 100% original suction power." },
      { question: "Are your technicians trained on Kaff touch-control models?", answer: "All our technicians are senior engineers with 8+ years of hands-on experience specifically servicing Kaff's electronic touch and gesture-control systems." }
    ],
    reviews: [
      { id: "r-kaff-1", name: "Anish Sharma", location: "Bengaluru", rating: 5, date: "2 days ago", appliance: "Kaff Auto-Clean Chimney", text: "Kaff chimney suction had stopped completely. Technician Rajesh arrived within 30 mins, diagnosed motor capacitor issue and fixed it in 20 minutes! Excellent service." },
      { id: "r-kaff-2", name: "Priya Nair", location: "Mumbai", rating: 5, date: "1 week ago", appliance: "Kaff 4-Burner Glass Hob", text: "Auto ignition on my Kaff hob was clicking continuously. The technician replaced the pulse igniter with genuine part. Very transparent service." },
      { id: "r-kaff-3", name: "Vikram Mehta", location: "Delhi NCR", rating: 5, date: "2 weeks ago", appliance: "Kaff Built-in Oven", text: "Prompt doorstep service for Kaff oven thermostat repair. Loved the transparency and 90-day written warranty." }
    ]
  },

  "siemens-repair": {
    slug: "siemens-repair",
    name: "Siemens",
    h1Title: "Siemens Kitchen Appliance Repair & Service Center Support",
    heroHeadline: "Precision German Engineering Repair for Siemens Appliances",
    heroSubheadline: "Expert Doorstep Repair for Siemens iQ700 Hobs, Induction Cooktops, Chimneys & Built-in Ovens. 90-Day Warranty.",
    metaTitle: "Siemens Appliance Repair | Siemens Hob & Oven Service Near Me",
    metaDescription: "Doorstep Siemens hob repair, Siemens built-in oven servicing, induction cooktop PCB fix & Siemens chimney repair. German engineering specialists. Call now!",
    ctaCopy: "Request Siemens Specialist Technician",
    brandTagline: "Advanced Diagnostics & Repair for Premium Siemens Built-in Systems",
    descriptionCopy: [
      "Siemens kitchen appliances represent peak German innovation, featuring sophisticated microprocessors, stepFlame gas control, and touchSlider induction interfaces. Fixing Siemens appliances requires deep technical knowledge of complex circuit boards and precise calibration.",
      "Our specialized Siemens repair engineers are equipped with advanced diagnostic tools to resolve error codes, power board failures, induction coil burnout, and gas solenoid valve issues right at your home.",
      "We provide prompt doorstep visits within 30-45 minutes, transparent upfront quotes before starting work, and a 90-day guarantee on all Siemens genuine component replacements."
    ],
    specialties: [
      "Siemens iQ300 / iQ500 / iQ700 Built-in Gas Hobs",
      "Siemens flexInduction & TouchSlider Cooktops",
      "Siemens iQ700 EcoClean & Pyrolytic Ovens",
      "Siemens Wall-Mounted & Island Extraction Hoods"
    ],
    commonIssues: [
      { title: "Siemens Induction Error Code E0512 / Er22", desc: "Touch slider control module communication failure or power surge." },
      { title: "Siemens stepFlame Knob Hard to Turn", desc: "Gas valve micro-gear mechanism jammed with carbonized cooking oil." },
      { title: "Siemens Oven Power Tripping MCB", desc: "Insulation breakdown inside pyrolytic heating element." },
      { title: "Siemens iQ Hood Low Suction", desc: "Electronic fan motor speed controller PCB transistor burnt out." }
    ],
    faqs: [
      { question: "Do you specialize in Siemens iQ700 series built-in appliances?", answer: "Yes, our senior engineers are specifically trained in Siemens iQ300, iQ500, and iQ700 series electronics, including touchSlider controls and stepFlame hobs." },
      { question: "Why is my Siemens induction cooktop showing an error code and shutting off?", answer: "Siemens error codes like E0512 or Er22 indicate power IGBT or sensor board issues. We carry Siemens motherboard diagnostic kits for instant doorstep repair." },
      { question: "How long does a Siemens hob burner repair take?", answer: "Most Siemens hob repairs, including valve servicing and spark generator replacement, are completed in under 45 minutes at your doorstep." },
      { question: "Do you use original Siemens replacement parts?", answer: "Yes, we use 100% high-grade, original Siemens compatible components backed by a written 90-day warranty." },
      { question: "Can you fix a Siemens built-in oven that trips the home MCB breaker?", answer: "Yes, breaker tripping is typically caused by a shorted heating element or cooling fan motor. We test for earth leakage and replace damaged components on-site." },
      { question: "Is doorstep service available on weekends for Siemens appliances?", answer: "Yes, our emergency technician team operates 7 days a week, including Sundays and public holidays." },
      { question: "What should I do if my Siemens gas hob is leaking gas?", answer: "Turn off the main gas valve immediately and call our emergency hotline. A certified gas safety engineer will reach your home in 30 minutes." },
      { question: "How is the cost estimated for Siemens chimney motor repair?", answer: "Our technician inspects the motor on-site and provides a clear upfront estimate before performing any work." },
      { question: "Do you offer warranty on Siemens PCB board repairs?", answer: "Yes, all PCB component repairs and board replacements come with our solid 90-day service warranty." }
    ],
    reviews: [
      { id: "r-siemens-1", name: "Suresh Menon", location: "Hyderabad", rating: 5, date: "1 day ago", appliance: "Siemens iQ700 Induction Hob", text: "Siemens technician was extremely knowledgeable! Solved my flexInduction power board issue on the spot. Highly professional." },
      { id: "r-siemens-2", name: "Kavita Deshmukh", location: "Pune", rating: 5, date: "4 days ago", appliance: "Siemens Built-in Oven", text: "Oven wasn't reaching temperature. They changed the heating element and calibrated the thermostat within 1 hour." },
      { id: "r-siemens-3", name: "Rahul Kapoor", location: "Gurugram", rating: 5, date: "1 week ago", appliance: "Siemens Chimney Hood", text: "Super quick 30-min response time for Siemens chimney motor repair. Clean work and honest service." }
    ]
  },

  "hafele-repair": {
    slug: "hafele-repair",
    name: "Hafele",
    h1Title: "Hafele Premium Kitchen Appliance Repair & Servicing",
    heroHeadline: "Expert Doorstep Care for Hafele Hobs, Ovens & Chimneys",
    heroSubheadline: "Luxury Kitchen Appliance Technicians for Hafele Built-in Appliances. Fast 30-Minute Doorstep Response & 90-Day Warranty.",
    metaTitle: "Hafele Appliance Repair Service | Hafele Hob, Chimney & Oven Repair",
    metaDescription: "Professional doorstep Hafele hob repair, Hafele chimney suction fix, built-in oven servicing & gas leak fixing. 90-day warranty. Book today!",
    ctaCopy: "Book Hafele Appliance Repair",
    brandTagline: "Architectural Quality Repair for Hafele Luxury Appliances",
    descriptionCopy: [
      "Hafele is synonymous with high-end architectural kitchen solutions, engineered for seamless aesthetic integration and heavy daily performance. When Hafele hobs or chimneys experience technical snags, they demand specialized technical handling.",
      "Our technicians specialize in Hafele's unique product architecture—including Nagold series hobs, smart auto-clean chimneys, and combi-steam built-in ovens. We arrive fully equipped with genuine Hafele compatible spare parts and diagnostic meters.",
      "Enjoy transparent pricing, zero hidden fees, same-day doorstep completion, and the peace of mind of a written 90-day service warranty."
    ],
    specialties: [
      "Hafele Nagold & Classic Built-in Gas Hobs",
      "Hafele Filterless Curved & Angular Extraction Hoods",
      "Hafele Combi-Steam & Microwave Built-in Ovens",
      "Hafele Ceramic & Induction Touch Cooktops"
    ],
    commonIssues: [
      { title: "Hafele Gas Hob Flame Sputtering", desc: "Brass burner flame cap misaligned or clogged burner nozzle jets." },
      { title: "Hafele Chimney Gesture Control Fault", desc: "Optical sensor lens coated in cooking oil mist preventing gesture response." },
      { title: "Hafele Built-in Oven Steam Generator Calcification", desc: "Hard water scale buildup causing steam boiler heater failure." },
      { title: "Hafele Auto Ignition Spark Plug Shorting", desc: "High-voltage ceramic igniter pin cracked or grounding out." }
    ],
    faqs: [
      { question: "Can you fix gesture control issues on Hafele chimneys?", answer: "Yes, gesture control sensor failure is usually due to oil film on the infrared lens or a sensor board calibration issue. We fix it at your doorstep." },
      { question: "Are spare parts readily available for older Hafele Nagold hobs?", answer: "Yes, we maintain an extensive inventory of original Hafele Nagold burner caps, igniters, gas valves, and toughened glass panels." },
      { question: "How fast can I get a technician for my Hafele built-in oven?", answer: "We dispatch nearby technicians within 30 to 45 minutes of booking across all major metropolitan cities." },
      { question: "Do you offer AMC (Annual Maintenance) for Hafele kitchen appliances?", answer: "Yes, our Hafele AMC plans include 3 preventive deep chemical cleans per year and unlimited breakdown visits with free minor spare parts." },
      { question: "Why is my Hafele gas hob burner yellow instead of blue?", answer: "Yellow flames indicate improper air-gas mixing or carbon deposits. Our technician will clean the venturi tube and adjust the air damper." },
      { question: "What is included in Hafele chimney filterless cleaning?", answer: "Includes complete teardown chemical degreasing of blowers, impellers, and oil collectors to restore suction." },
      { question: "Is there any warranty on Hafele glass top replacements?", answer: "Yes, all 8mm toughened replacement glass panels come with a 90-day thermal resistance and fitment warranty." },
      { question: "Can you fix gas leaks on Hafele 5-burner hobs?", answer: "Yes, gas leakage is treated as a priority emergency. We perform pressure tests and seal or replace leaking gas valves immediately." },
      { question: "Do your technicians wear shoe covers and clean up after repair?", answer: "Yes, our technicians adhere to strict hygiene protocols, using floor mats, shoe covers, and leaving your kitchen spotlessly clean." }
    ],
    reviews: [
      { id: "r-hafele-1", name: "Meera Agarwal", location: "Mumbai", rating: 5, date: "3 days ago", appliance: "Hafele Nagold Hob", text: "Hafele hob repair was done effortlessly. Technician replaced the faulty igniter in 30 minutes. Top notch service!" },
      { id: "r-hafele-2", name: "Deepak Joshi", location: "Bengaluru", rating: 5, date: "1 week ago", appliance: "Hafele Chimney Hood", text: "Great experience with Hafele chimney cleaning & touch control repair. Clean, polite, and very professional." },
      { id: "r-hafele-3", name: "Neha Saxena", location: "Kolkata", rating: 5, date: "2 weeks ago", appliance: "Hafele Built-in Microwave Oven", text: "Oven door latch broke. They fixed it on the same day with genuine Hafele part. Highly recommend!" }
    ]
  },

  "gilma-repair": {
    slug: "gilma-repair",
    name: "Gilma",
    h1Title: "Gilma Kitchen Appliance Repair & Service Center",
    heroHeadline: "Same-Day Gilma Stove, Hob & Chimney Repair Service",
    heroSubheadline: "Fast Doorstep Technicians for Gilma Gas Stoves, Auto-Clean Chimneys & Glass Hobs. 90-Day Warranty.",
    metaTitle: "Gilma Appliance Repair Service | Gilma Stove & Chimney Repair Near Me",
    metaDescription: "Reliable doorstep Gilma gas stove repair, Gilma chimney suction fix, glass hob burner cleaning & gas leak detection. 90-day warranty. Call now!",
    ctaCopy: "Get Instant Gilma Repair Quote",
    brandTagline: "Trusted Doorstep Repair for Household Gilma Kitchen Appliances",
    descriptionCopy: [
      "Gilma appliances are a staple in thousands of modern kitchens across India, known for reliable everyday performance. However, regular heavy cooking leads to carbon buildup in burner jets, motor wear in chimneys, and loose gas control knobs.",
      "Our certified Gilma repair team delivers rapid doorstep service within 30-45 minutes. We specialize in resolving Gilma gas stove low flame issues, auto-ignition spark failure, chimney motor noise, and oil collector leaks.",
      "All repairs use authentic Gilma compatible brass components, igniter boxes, and heavy-duty wiring, backed by our 90-day peace-of-mind warranty."
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
      { title: "Gilma Glass Hob Crack", desc: "Impact from heavy vessel or thermal stress from uneven burner flame." },
      { title: "Gilma Auto-Ignition Switch Stuck", desc: "Spring mechanism inside knob housing jammed with spilled food." }
    ],
    faqs: [
      { question: "How quickly can a Gilma gas stove technician visit my home?", answer: "We offer instant 30-minute doorstep dispatch across all service areas." },
      { question: "Why is my Gilma gas stove flame flickering yellow?", answer: "Flickering yellow flame is caused by clogged burner ports or improper air mixing. We clean and recalibrate your burner jets on-site." },
      { question: "Can you fix auto-ignition on a 10-year-old Gilma glass stove?", answer: "Yes, we stock universal ceramic spark plugs and high-voltage pulse generators compatible with older Gilma models." },
      { question: "What is involved in Gilma chimney deep cleaning?", answer: "Complete eco-friendly chemical degreasing of motor blowers, baffle filters, and oil collectors." },
      { question: "Do you replace cracked glass on Gilma gas stoves?", answer: "Yes, we supply and fit original-spec 8mm toughened replacement glass for all Gilma stove models." },
      { question: "Is gas leakage repair available urgently for Gilma stoves?", answer: "Yes! Gas leakage is treated as a priority 30-minute emergency visit." },
      { question: "Are your Gilma spare parts covered by warranty?", answer: "All spare parts and labor carry a 90-day written service warranty." },
      { question: "Why does my Gilma chimney vibrate when turned on max speed?", answer: "Vibration is usually caused by grease accumulation imbalance on fan blades or loose mounting brackets. We balance and tighten everything on-site." },
      { question: "Do I need to take my Gilma stove to a workshop?", answer: "No! 100% of our Gilma repairs are performed right in your kitchen at your convenience." }
    ],
    reviews: [
      { id: "r-gilma-1", name: "Gautam Rao", location: "Bengaluru", rating: 5, date: "2 days ago", appliance: "Gilma 3-Burner Gas Stove", text: "Low flame problem solved in 20 minutes! Technician opened the jets, cleaned them thoroughly and tested flame. Super happy." },
      { id: "r-gilma-2", name: "Sunita Roy", location: "Chennai", rating: 5, date: "5 days ago", appliance: "Gilma Kitchen Chimney", text: "Chimney was making loud noise. Technician replaced motor bearing on-site. Very reasonable work!" },
      { id: "r-gilma-3", name: "Manish Kumar", location: "Hyderabad", rating: 5, date: "2 weeks ago", appliance: "Gilma Auto Ignition Hob", text: "Prompt response and genuine spare part replacement for my Gilma hob. Recommended!" }
    ]
  },

  "glen-repair": {
    slug: "glen-repair",
    name: "Glen",
    h1Title: "Glen Kitchen Appliance Repair & Doorstep Servicing",
    heroHeadline: "Same-Day Glen Chimney, Hob & Gas Stove Repair",
    heroSubheadline: "Certified Technicians for Glen Filterless Chimneys, Brass Hob Burners & Cooking Ranges. 90-Day Warranty.",
    metaTitle: "Glen Appliance Repair Service | Glen Chimney, Hob & Stove Repair",
    metaDescription: "Expert doorstep Glen chimney repair, Glen hob burner fix, auto-ignition repair & gas leak resolution. 90-day warranty. Call now!",
    ctaCopy: "Book Glen Technician Now",
    brandTagline: "Expert Technicians for Glen Innovative Kitchen Appliances",
    descriptionCopy: [
      "Glen kitchen appliances are celebrated for practical ergonomics, Italian forged brass burners, and high-efficiency motor blowers. When performance drops due to grease buildup or electrical faults, fast expert intervention is essential.",
      "Our specialized Glen service engineers handle everything from Glen chimney motion-sensor PCB failures to Glen gas hob burner jet unclogging and toughened glass replacement.",
      "We guarantee 30-45 minute doorstep technician arrival, transparent fixed pricing, original Glen compatible spares, and a 90-day service warranty."
    ],
    specialties: [
      "Glen Motion-Sensor Filterless Auto-Clean Chimneys",
      "Glen Forged Brass Burner Glass Hobs & Stoves",
      "Glen Built-in Convection Ovens & Microwaves",
      "Glen Heavy-Duty 4 & 5 Burner Cooking Ranges"
    ],
    commonIssues: [
      { title: "Glen Chimney Motion Sensor Not Responding", desc: "Grease film over optical sensor or PCB logic controller breakdown." },
      { title: "Glen Hob Flame Sputtering / Yellow Tip", desc: "Carbonized grease choking the internal gas venturi tube." },
      { title: "Glen Auto Ignition Battery Drain", desc: "Short circuit in wiring harness continuously draining D-size battery." },
      { title: "Glen Cooking Range Oven Not Heating", desc: "Lower heating rod burnt out due to voltage fluctuation." }
    ],
    faqs: [
      { question: "How fast can you repair a Glen chimney motion sensor?", answer: "Our technician carries replacement Glen motion-sensor PCB modules and fixes sensor issues in a single 30-minute visit." },
      { question: "Do you supply original brass burners for Glen hobs?", answer: "Yes, we stock genuine Italian-type forged brass burners for all Glen hob and gas stove models." },
      { question: "Why is my Glen chimney auto-clean feature leaking oil onto the stove?", answer: "This happens when the oil tray drain outlet is clogged with solidified grease. We clear the drain line and service the heating element." },
      { question: "How is Glen gas stove jet cleaning done?", answer: "Our technician unblocks burner nozzles and adjusts air venturi calibration on-site." },
      { question: "Can you fix gas leaks on Glen built-in glass hobs?", answer: "Yes, gas leaks are handled as urgent priority visits within 30 minutes." },
      { question: "What warranty do you offer on Glen spare parts?", answer: "All Glen replacement parts come with a 90-day written guarantee." },
      { question: "Can you replace broken glass on Glen 4-burner cooktops?", answer: "Yes, we supply custom-fit 8mm toughened replacement glass for all Glen models." },
      { question: "Do you offer doorstep service on Sundays for Glen appliances?", answer: "Yes, our service team is available 7 days a week, 365 days a year." },
      { question: "How do I book a same-day Glen technician visit?", answer: "Simply call our phone helpline or click the WhatsApp button to book instantly." }
    ],
    reviews: [
      { id: "r-glen-1", name: "Alok Srivastava", location: "Lucknow", rating: 5, date: "1 day ago", appliance: "Glen Auto-Clean Chimney", text: "Glen chimney suction was completely dead. Technician replaced capacitor and serviced motor in 30 mins. Great experience!" },
      { id: "r-glen-2", name: "Pooja Reddy", location: "Hyderabad", rating: 5, date: "3 days ago", appliance: "Glen 4-Burner Hob", text: "Quick resolution for Glen hob auto ignition problem. Honest technician." },
      { id: "r-glen-3", name: "Nitin Sharma", location: "Delhi NCR", rating: 5, date: "1 week ago", appliance: "Glen Built-in Oven", text: "Fixed Glen oven heating issue quickly. Excellent doorstep service!" }
    ]
  },

  "elica-repair": {
    slug: "elica-repair",
    name: "Elica",
    h1Title: "Elica Kitchen Appliance Repair & Service Support",
    heroHeadline: "Same-Day Elica Chimney, Hob & Oven Repair at Doorstep",
    heroSubheadline: "Certified Italian Technology Specialists for Elica Deep Silence Chimneys, Glass Hobs & Ovens. 90-Day Warranty.",
    metaTitle: "Elica Appliance Repair Service | Elica Chimney & Hob Repair Near Me",
    metaDescription: "Fast doorstep Elica chimney suction fix, Elica hob burner repair, touch panel PCB fix & gas leak detection. 90-day warranty. Call now!",
    ctaCopy: "Book Elica Specialist Technician",
    brandTagline: "Italian Design Precision Repair for Elica Kitchen Hoods & Hobs",
    descriptionCopy: [
      "Elica is world-famous for revolutionary kitchen hood designs, EDS (Elica Deep Silence) technology, and high-performance glass hobs. These high-suction, low-noise systems require skilled technical hands when servicing.",
      "Our certified Elica repair specialists possess extensive experience fixing Elica filterless auto-clean chimneys, touch-control sensors, EDS sound insulation blowers, and brass hob igniters.",
      "We deliver 30-45 minute doorstep response, transparent fixed pricing, original Elica compatible replacement components, and a 90-day written guarantee."
    ],
    specialties: [
      "Elica EDS (Deep Silence) & Filterless Hoods",
      "Elica 3, 4 & 5 Burner Brass Glass Hobs",
      "Elica Built-in Microwave & Convection Ovens",
      "Elica Flexi Brass Stove Range & Islands"
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
      { question: "What is covered in Elica chimney chemical deep cleaning?", answer: "We dismantle the oil collector, baffle/mesh filters, and blower assembly, soaking them in eco-friendly degreasing solutions to remove 100% oil sludge." },
      { question: "Can you fix the touch panel on an Elica gesture-control chimney?", answer: "Yes, we carry replacement touch/gesture PCB cards for all Elica chimney models and fix them on-site." },
      { question: "How is Elica gas hob auto-ignition repaired?", answer: "We replace worn pulse igniter boxes and ceramic spark plugs right at your doorstep." },
      { question: "Do you replace shattered glass on Elica 3-burner hobs?", answer: "Yes, we fit 8mm heat-resistant toughened replacement glass tailored to Elica exact cutouts." },
      { question: "Is there a warranty on Elica repairs?", answer: "Yes, every repair and replaced part comes with a 90-day written warranty." },
      { question: "Are your technicians equipped with safety hygiene protocols?", answer: "Yes, all technicians wear protective gear, carry hand sanitizers, and clean the workspace before leaving." }
    ],
    reviews: [
      { id: "r-elica-1", name: "Siddharth Verma", location: "Bengaluru", rating: 5, date: "1 day ago", appliance: "Elica Deep Silence Chimney", text: "Elica chimney was making screeching noise. Technician replaced motor bearings right in front of me. Now runs silently!" },
      { id: "r-elica-2", name: "Radhika Kulkarni", location: "Pune", rating: 5, date: "3 days ago", appliance: "Elica 4-Burner Glass Hob", text: "Elica hob burner wasn't lighting up. Technician cleaned nozzle jets and fixed spark wire in 20 mins." },
      { id: "r-elica-3", name: "Amitabh Banerjee", location: "Kolkata", rating: 5, date: "1 week ago", appliance: "Elica Built-in Oven", text: "Fixed Elica oven door gasket and heating element on the same day. Outstanding service quality!" }
    ]
  },

  "kutchina-repair": {
    slug: "kutchina-repair",
    name: "Kutchina",
    h1Title: "Kutchina Appliance Repair & Auto-Clean Chimney Service",
    heroHeadline: "Same-Day Kutchina Chimney & Hob Repair at Doorstep",
    heroSubheadline: "Pioneers of Auto-Clean Technology Repair. Certified Engineers for Kutchina Chimneys, Hobs & Stoves. 90-Day Warranty.",
    metaTitle: "Kutchina Appliance Repair Service | Kutchina Chimney & Hob Repair",
    metaDescription: "Expert doorstep Kutchina auto-clean chimney repair, Kaff/Kutchina hob burner fix, touch PCB repair & gas leak detection. 90-day warranty. Call now!",
    ctaCopy: "Book Kutchina Repair Expert",
    brandTagline: "Auto-Clean Specialists for Kutchina High-Efficiency Appliances",
    descriptionCopy: [
      "Kutchina revolutionized Indian kitchens with pathbreaking auto-clean chimney technology designed specifically for heavy spice and mustard oil cooking. Maintaining Kutchina's high-torque blowers and heat-clean coils requires specialist expertise.",
      "Our doorstep Kutchina technicians specialize in diagnosing auto-clean heating element burnouts, touch PCB sensor glitches, hob burner yellow flames, and gas leakage issues.",
      "We guarantee 30-45 minute technician response, genuine Kutchina compatible replacement components, transparent upfront quotes, and a 90-day warranty."
    ],
    specialties: [
      "Kutchina Auto-Clean & i-Clean Technology Chimneys",
      "Kutchina High-Efficiency Brass Glass Hobs",
      "Kutchina Heavy Duty Gas Stoves & Cooktops",
      "Kutchina Built-in Convection & Steam Ovens"
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
      { question: "Do you supply original Kutchina auto-clean heating coils?", answer: "Yes, we stock original-spec high-temperature heating coils for all Kutchina chimney models." },
      { question: "Can you fix yellow flame issues on Kutchina glass hobs?", answer: "Yes, yellow flame is resolved by clearing carbon deposits from the burner ports and adjusting the air venturi shutter." },
      { question: "How is Kutchina gas stove nozzle cleaning performed?", answer: "Carbon deposit scrapings and jet nozzle unblocking performed right at your doorstep." },
      { question: "Do you replace cracked glass tops on Kutchina 3-burner hobs?", answer: "Yes, we fit 8mm heat-resistant toughened glass panels matching Kutchina dimensions." },
      { question: "Is your Kutchina service backed by warranty?", answer: "Yes, every repair comes with a 90-day written service and spare parts warranty." },
      { question: "What cities do you cover for Kutchina doorstep service?", answer: "We cover all major cities including Kolkata, Bengaluru, Mumbai, Delhi NCR, Hyderabad, Pune, Chennai, Jaipur, and Lucknow." },
      { question: "How can I schedule an emergency Kutchina repair appointment?", answer: "Call our hotline directly or tap the WhatsApp button for instant technician booking." }
    ],
    reviews: [
      { id: "r-kutchina-1", name: "Joydeep Das", location: "Kolkata", rating: 5, date: "1 day ago", appliance: "Kutchina Auto-Clean Chimney", text: "Kutchina auto clean feature was not working. Technician changed heating coil in 30 mins. Smooth experience!" },
      { id: "r-kutchina-2", name: "Aparna Mukhopadhyay", location: "Asansol", rating: 5, date: "4 days ago", appliance: "Kutchina Glass Hob", text: "Fixed low flame issue on my Kutchina hob quickly. Very polite technician." },
      { id: "r-kutchina-3", name: "Subhash Bose", location: "Siliguri", rating: 5, date: "1 week ago", appliance: "Kutchina Gas Stove", text: "Same-day doorstep visit for Kutchina stove gas leakage. Fast and safe!" }
    ]
  },

  "faber-repair": {
    slug: "faber-repair",
    name: "Faber",
    h1Title: "Faber Kitchen Appliance Repair & Service Support",
    heroHeadline: "Same-Day Faber Chimney, Hob & Oven Repair",
    heroSubheadline: "Certified Technicians for Faber 3D Suction Hoods, Italian Brass Hobs & Ovens. 30-Min Doorstep Dispatch & 90-Day Warranty.",
    metaTitle: "Faber Appliance Repair Service | Faber Chimney & Hob Repair Near Me",
    metaDescription: "Fast doorstep Faber chimney repair, Faber hob burner fix, 3D suction tuning & auto-ignition repair. 90-day warranty. Call now!",
    ctaCopy: "Book Faber Technician Now",
    brandTagline: "Pioneering Hood Engineering Repair for Faber Kitchen Systems",
    descriptionCopy: [
      "Faber is the inventor of the modern domestic cooker hood, renowned for powerful 3D triple-suction technology, heavy-gauge steel construction, and high-efficiency brass hobs. Servicing Faber appliances demands accurate technical calibration.",
      "Our certified Faber technicians handle all Faber chimney motor repairs, touch sensor PCB board fixes, auto-clean heat coil replacements, and glass hob ignition glitches right at your home.",
      "Benefit from 30-45 minute doorstep arrival, transparent upfront estimates, 100% original Faber compatible spare parts, and a 90-day written guarantee."
    ],
    specialties: [
      "Faber 3D / 6-Way Suction Auto-Clean Chimneys",
      "Faber Italian Forged Brass 3, 4 & 5 Burner Hobs",
      "Faber Built-in Convection & Steam Ovens",
      "Faber Vector & Island Glass Hood Systems"
    ],
    commonIssues: [
      { title: "Faber Chimney 3D Suction Reduced", desc: "Blower wheel choked with grease or motor run capacitor weakened." },
      { title: "Faber Hob Auto Ignition Spark Plug Short", desc: "Ceramic insulation cracked or wet micro-switch contacts." },
      { title: "Faber Chimney Touch Display Error", desc: "Corrosion on control board ribbons due to steam exposure." },
      { title: "Faber Built-in Oven Thermostat Failure", desc: "Temperature control sensor out of calibration, burning food." }
    ],
    faqs: [
      { question: "Why is my Faber 3D suction chimney not extracting smoke properly?", answer: "Low extraction power is usually caused by clogged oil collectors, dirty baffle filters, or a weak motor capacitor. We service blowers to restore 100% suction." },
      { question: "How quickly can a Faber repair technician arrive?", answer: "Our nearest technician will reach your home within 30 to 45 minutes of booking." },
      { question: "Do you supply genuine brass burners for Faber hobs?", answer: "Yes, we stock original-spec Faber Italian brass burner rings, gas jets, and igniter plugs." },
      { question: "Can you fix gesture control problems on Faber chimneys?", answer: "Yes, gesture sensor PCB failure is diagnosed and repaired on-site." },
      { question: "What is included in Faber chimney deep chemical degreasing?", answer: "Deep ultrasonic soak and degreasing of 3D suction blowers and oil collectors." },
      { question: "Do you replace cracked glass tops on Faber built-in hobs?", answer: "Yes, we supply 8mm toughened replacement glass cut to Faber precise factory dimensions." },
      { question: "What warranty is provided on Faber repair work?", answer: "All repair work and replaced components are backed by a 90-day written warranty." },
      { question: "Can you fix gas leaks on Faber 4-burner hobs?", answer: "Yes! Gas leaks are treated as priority emergency calls dispatched within 30 minutes." },
      { question: "Are your Faber service engineers certified?", answer: "Yes, all our engineers have 8+ years of hands-on experience exclusively with Faber appliances." }
    ],
    reviews: [
      { id: "r-faber-1", name: "Rajesh Malhotra", location: "Delhi NCR", rating: 5, date: "1 day ago", appliance: "Faber 3D Suction Chimney", text: "Faber chimney motor died suddenly. Called them at 10 AM, technician arrived by 10:40 AM and replaced motor capacitor. Back to full suction!" },
      { id: "r-faber-2", name: "Vandana Sharma", location: "Jaipur", rating: 5, date: "3 days ago", appliance: "Faber 4-Burner Hob", text: "Auto ignition spark was missing on 2 burners. Technician fixed spark plug wiring quickly. Excellent service!" },
      { id: "r-faber-3", name: "Ketan Shah", location: "Ahmedabad", rating: 5, date: "1 week ago", appliance: "Faber Built-in Oven", text: "Fixed Faber oven heating coil on the same day. Honest service behavior." }
    ]
  },

  "bosch-repair": {
    slug: "bosch-repair",
    name: "Bosch",
    h1Title: "Bosch Kitchen Appliance Repair & Service Center Support",
    heroHeadline: "Certified German Bosch Appliance Repair at Doorstep",
    heroSubheadline: "Doorstep Repair for Bosch Series 4, 6 & 8 Built-in Hobs, Induction Cooktops, Ovens & Hoods. 90-Day Warranty.",
    metaTitle: "Bosch Appliance Repair Service | Bosch Hob & Oven Repair Near Me",
    metaDescription: "Professional doorstep Bosch hob repair, Bosch built-in oven servicing, induction cooktop PCB fix & Bosch hood repair. 90-day warranty. Call now!",
    ctaCopy: "Request Bosch Specialist Engineer",
    brandTagline: "German Quality Engineering Repair for Bosch Appliances",
    descriptionCopy: [
      "Bosch kitchen appliances are built to exact German engineering standards, featuring Series 4, 6, and 8 innovations such as FlameSelect gas controls, EcoSilence Drive motors, and AutoPilot baking programs. Standard repair methods can damage these sensitive systems.",
      "Our certified Bosch repair engineers carry advanced diagnostic equipment to service Bosch induction boards, digital thermostats, FlameSelect gas valves, and EcoSilence chimney blowers.",
      "We guarantee 30-45 minute doorstep technician arrival, original Bosch compatible replacement parts, fixed transparent quotes, and a 90-day warranty."
    ],
    specialties: [
      "Bosch Series 4 / 6 / 8 FlameSelect Gas Hobs",
      "Bosch DirectSelect Touch Induction Cooktops",
      "Bosch 3D HotAir & AutoPilot Built-in Ovens",
      "Bosch EcoSilence Drive Extraction Hoods"
    ],
    commonIssues: [
      { title: "Bosch Induction Error Code E0513 / Er26", desc: "Power module IGBT transistor blown due to line voltage spike." },
      { title: "Bosch FlameSelect Valve Clicking", desc: "Flame failure safety device thermocouple out of position." },
      { title: "Bosch Oven Not Heating / EcoClean Tripping", desc: "Burnt heating element insulation shorting to ground." },
      { title: "Bosch Hood EcoSilence Motor Dead", desc: "Brushless DC motor PCB controller relay failure." }
    ],
    faqs: [
      { question: "Do you specialize in Bosch Series 6 and Series 8 appliances?", answer: "Yes, our senior engineers are specifically trained on Bosch Series 4, 6, and 8 micro-architecture, including FlameSelect hobs and DirectSelect induction cooktops." },
      { question: "Why is my Bosch induction cooktop flashing error codes?", answer: "Error codes like E0513 indicate power board or pan detection sensor faults. We diagnose motherboard issues at your doorstep using digital testers." },
      { question: "How fast can a technician visit for Bosch oven repair?", answer: "Our nearest technician will reach your home within 30 to 45 minutes of booking." },
      { question: "Do you use original Bosch replacement parts?", answer: "Yes, we use 100% genuine Bosch compatible replacement components backed by a written 90-day warranty." },
      { question: "Can you repair Bosch FlameSelect gas valves?", answer: "Yes, we service and recalibrate Bosch 9-stage FlameSelect valve assemblies to ensure precise flame control." },
      { question: "What is the warranty period for Bosch PCB board repairs?", answer: "All Bosch PCB board repairs and chip replacements carry a 90-day written guarantee." },
      { question: "Why does my Bosch oven trip the main circuit breaker?", answer: "Breaker tripping is caused by insulation failure in the heating element or cooling fan. We test for earth leakage and replace the faulty element." },
      { question: "Is doorstep service available for Bosch appliances on Sundays?", answer: "Yes, our service operates 7 days a week, 365 days a year." },
      { question: "How do I book an emergency Bosch repair technician?", answer: "Call our direct hotline or click the WhatsApp button for immediate technician dispatch." }
    ],
    reviews: [
      { id: "r-bosch-1", name: "Dr. Vikramaditya", location: "Bengaluru", rating: 5, date: "1 day ago", appliance: "Bosch Series 6 Induction Hob", text: "Bosch technician arrived in 35 mins. Diagnosed induction IGBT failure and replaced it on-site. Truly professional!" },
      { id: "r-bosch-2", name: "Simran Kaur", location: "Chandigarh", rating: 5, date: "4 days ago", appliance: "Bosch Built-in Oven", text: "Fixed Bosch oven 3D HotAir fan motor efficiently. Transparent work." },
      { id: "r-bosch-3", name: "Anand Ranganathan", location: "Chennai", rating: 5, date: "1 week ago", appliance: "Bosch Extraction Hood", text: "Great experience with Bosch chimney motor repair. Clean work and 90-day written warranty." }
    ]
  },

  "blowhot-repair": {
    slug: "blowhot-repair",
    name: "Blowhot",
    h1Title: "Blowhot Kitchen Appliance Repair & Service Support",
    heroHeadline: "Same-Day Blowhot Gas Stove, Hob & Chimney Repair",
    heroSubheadline: "Doorstep Technicians for Blowhot Heavy Brass Gas Stoves, Auto-Clean Chimneys & Hobs. 90-Day Warranty.",
    metaTitle: "Blowhot Appliance Repair Service | Blowhot Stove & Chimney Repair",
    metaDescription: "Fast doorstep Blowhot gas stove repair, Blowhot chimney suction fix, auto-ignition repair & gas leak detection. 90-day warranty. Call now!",
    ctaCopy: "Book Blowhot Repair Service",
    brandTagline: "Heavy-Duty Repair Support for Blowhot Kitchen Appliances",
    descriptionCopy: [
      "Blowhot kitchen appliances are known for robust heavy-gauge stainless steel gas stoves, high-suction chimneys, and budget-friendly built-in hobs. Heavy daily cooking can cause nozzle clogging, motor capacitor decline, and ignition switches to stick.",
      "Our doorstep Blowhot technicians specialize in clearing clogged brass burner jets, replacing worn chimney capacitors, fixing auto-ignition spark wiring, and repairing cracked glass tops.",
      "We guarantee 30-45 minute doorstep technician arrival, transparent fixed pricing, original Blowhot compatible spares, and a 90-day service warranty."
    ],
    specialties: [
      "Blowhot Tornado & Heavy-Duty Gas Stoves",
      "Blowhot Motion Sensor Auto-Clean Chimneys",
      "Blowhot 3 & 4 Burner Glass Built-in Hobs",
      "Blowhot Stainless Steel Cooktops"
    ],
    commonIssues: [
      { title: "Blowhot Gas Stove Low Flame", desc: "Grease and carbon deposit clogging brass nozzle orifice." },
      { title: "Blowhot Chimney Motor Humming", desc: "Motor capacitor capacitance dropped or shaft bearings dry." },
      { title: "Blowhot Ignition Switch Stuck", desc: "Liquid spillage causing knob spring mechanism corrosion." },
      { title: "Blowhot Glass Top Cracked", desc: "Thermal shock or heavy utensil impact on glass panel." }
    ],
    faqs: [
      { question: "How quickly can a technician visit for Blowhot gas stove repair?", answer: "Technicians arrive within 30 to 45 minutes of booking anywhere in our service cities." },
      { question: "Why is my Blowhot gas stove burner giving yellow flame?", answer: "Yellow flame is caused by blocked burner ports or improper air mixing. We clean burner nozzles on-site." },
      { question: "What is included in Blowhot chimney deep cleaning?", answer: "Eco-friendly degreasing of motor impellers and oil trays." },
      { question: "Can you fix auto-ignition on Blowhot glass hobs?", answer: "Yes, we replace pulse igniter boxes and ceramic spark plugs at your doorstep." },
      { question: "Do you supply replacement glass for Blowhot stoves?", answer: "Yes, we fit original 8mm toughened replacement glass for all Blowhot stove models." },
      { question: "Is gas leakage repair available for Blowhot stoves urgently?", answer: "Yes, gas leak calls are prioritized for dispatch within 30 minutes." },
      { question: "Are Blowhot spare parts backed by warranty?", answer: "All replaced spare parts and labor carry a written 90-day service warranty." },
      { question: "Why is my Blowhot chimney making noise?", answer: "Noise is usually caused by unaligned fan blades or worn motor bearings. We balance and service it on-site." },
      { question: "How can I book a Blowhot doorstep visit?", answer: "Call our phone hotline or tap the WhatsApp button for instant booking." }
    ],
    reviews: [
      { id: "r-blowhot-1", name: "Ramesh Pawar", location: "Pune", rating: 5, date: "2 days ago", appliance: "Blowhot Gas Stove", text: "Blowhot stove low flame fixed in 15 minutes! Very happy with the fast response." },
      { id: "r-blowhot-2", name: "Shalini Tripathi", location: "Lucknow", rating: 5, date: "4 days ago", appliance: "Blowhot Chimney", text: "Technician cleaned Blowhot chimney filters and fixed motor noise. Excellent service!" },
      { id: "r-blowhot-3", name: "Vikas Patel", location: "Ahmedabad", rating: 5, date: "1 week ago", appliance: "Blowhot Glass Hob", text: "Replaced igniter box on Blowhot hob quickly. 90-day warranty provided." }
    ]
  },

  "sunflame-repair": {
    slug: "sunflame-repair",
    name: "Sunflame",
    h1Title: "Sunflame Kitchen Appliance Repair & Service Support",
    heroHeadline: "Same-Day Sunflame Gas Stove, Hob & Chimney Repair",
    heroSubheadline: "Doorstep Technicians for Sunflame Gas Stoves, Auto-Clean Chimneys, Hobs & Cooking Ranges. 90-Day Warranty.",
    metaTitle: "Sunflame Appliance Repair Service | Sunflame Stove & Chimney Repair",
    metaDescription: "Fast doorstep Sunflame gas stove repair, Sunflame chimney suction fix, auto-ignition repair & gas leak resolution. 90-day warranty. Call now!",
    ctaCopy: "Book Sunflame Technician",
    brandTagline: "Decades of Reliability Repair Support for Sunflame Household Appliances",
    descriptionCopy: [
      "Sunflame is one of India's most trusted household appliance brands, present in millions of kitchens. Constant daily cooking can lead to brass burner carbon clogging, loose valve spindles, and chimney motor capacitor wear.",
      "Our doorstep Sunflame repair team specializes in restoring Sunflame gas stoves, glass top hobs, auto-clean chimneys, and cooking ranges to peak operating efficiency.",
      "We guarantee 30-45 minute doorstep technician arrival, original Sunflame compatible replacement spares, transparent pricing, and a 90-day written guarantee."
    ],
    specialties: [
      "Sunflame Stainless Steel & Toughened Glass Stoves",
      "Sunflame Auto-Clean Baffle & Filterless Hoods",
      "Sunflame 3 & 4 Burner Built-in Gas Hobs",
      "Sunflame Freestanding Cooking Ranges & Ovens"
    ],
    commonIssues: [
      { title: "Sunflame Gas Stove Low Flame", desc: "Nozzle jet orifice choked with food residue and carbon deposits." },
      { title: "Sunflame Chimney Weak Suction", desc: "Oil collector full and motor capacitor weakened." },
      { title: "Sunflame Auto Ignition Spark Plug Dead", desc: "High voltage wire severed or ceramic plug cracked." },
      { title: "Sunflame Cooking Range Oven Door Seal Leak", desc: "Rubber door gasket degraded allowing heat loss." }
    ],
    faqs: [
      { question: "How quickly can a technician visit for Sunflame gas stove repair?", answer: "Technicians arrive at your doorstep within 30 to 45 minutes of booking." },
      { question: "Why is my Sunflame stove burner producing black soot on pots?", answer: "Black soot is caused by a yellow flame due to choked air venturi openings. We clean and adjust your burner jets on-site." },
      { question: "How is Sunflame stove nozzle servicing done?", answer: "Nozzle orifice re-boring and burner jet cleaning done at your home." },
      { question: "Can you fix auto-ignition on Sunflame 4-burner stoves?", answer: "Yes, we carry universal high-voltage pulse generator boxes and ceramic spark plugs for all Sunflame models." },
      { question: "Do you supply replacement glass for Sunflame stoves?", answer: "Yes, we fit original 8mm toughened replacement glass tailored to Sunflame stove models." },
      { question: "Is gas leakage fixing available urgently for Sunflame stoves?", answer: "Yes, gas leak calls are treated as emergency visits dispatched within 30 minutes." },
      { question: "What warranty do you offer on Sunflame repairs?", answer: "All repairs and replaced components come with a written 90-day warranty." },
      { question: "Do you service Sunflame cooking ranges with ovens?", answer: "Yes, we service Sunflame multi-burner cooking ranges, thermostats, and oven heating elements." },
      { question: "How do I book a same-day Sunflame doorstep technician?", answer: "Call our phone hotline or click the WhatsApp button for instant technician booking." }
    ],
    reviews: [
      { id: "r-sunflame-1", name: "Suresh Gupta", location: "Delhi NCR", rating: 5, date: "1 day ago", appliance: "Sunflame 3-Burner Stove", text: "Sunflame stove low flame problem solved quickly. Technician was polite and charge was very reasonable." },
      { id: "r-sunflame-2", name: "Bhavna Joshi", location: "Jaipur", rating: 5, date: "3 days ago", appliance: "Sunflame Chimney", text: "Cleaned Sunflame chimney filters and fixed motor humming sound. Excellent service!" },
      { id: "r-sunflame-3", name: "Mahesh Chawla", location: "Ludhiana", rating: 5, date: "1 week ago", appliance: "Sunflame Cooking Range", text: "Fixed oven thermostat on Sunflame cooking range on the same day. Satisfied!" }
    ]
  },

  "crompton-repair": {
    slug: "crompton-repair",
    name: "Crompton",
    h1Title: "Crompton Appliance Repair & Service Center Support",
    heroHeadline: "Same-Day Crompton Chimney & Appliance Repair",
    heroSubheadline: "Doorstep Technicians for Crompton QuietPro Chimneys, Smart Auto-Clean Hoods & Hobs. 90-Day Warranty.",
    metaTitle: "Crompton Appliance Repair Service | Crompton Chimney & Hob Repair",
    metaDescription: "Fast doorstep Crompton chimney suction repair, QuietPro motor servicing, touch PCB repair & gas hob fixing. 90-day warranty. Call now!",
    ctaCopy: "Book Crompton Specialist Technician",
    brandTagline: "Smart Engineering Repair Support for Crompton Appliances",
    descriptionCopy: [
      "Crompton is renowned for QuietPro silent motor technology, smart gesture-control chimneys, and durable kitchen appliances. Servicing Crompton appliances requires expertise in quiet motor assemblies and electronic PCB modules.",
      "Our doorstep Crompton technicians specialize in resolving QuietPro chimney motor noise, touch PCB sensor faults, low suction power, and hob ignition issues right at your home.",
      "We guarantee 30-45 minute doorstep technician arrival, original Crompton compatible replacement components, transparent pricing, and a 90-day service warranty."
    ],
    specialties: [
      "Crompton QuietPro Silent Motor Chimneys",
      "Crompton Smart Gesture Auto-Clean Hoods",
      "Crompton Brass Glass Hobs & Stoves",
      "Crompton Built-in Kitchen Appliances"
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
      { question: "Do you service Crompton gas hobs and stoves?", answer: "Yes, we repair burner jet clogs, auto-ignition spark failure, and gas leaks on Crompton hobs." },
      { question: "Are Crompton spare parts covered by warranty?", answer: "All replaced spare parts carry a written 90-day warranty." },
      { question: "Do you offer doorstep service on Sundays for Crompton appliances?", answer: "Yes, our technicians operate 7 days a week including weekends." },
      { question: "What should I do if my Crompton hob is leaking gas?", answer: "Shut off the gas supply valve immediately and call our emergency hotline for a 30-minute doorstep visit." },
      { question: "How do I schedule a Crompton repair visit?", answer: "Call our phone hotline or tap the WhatsApp button for instant booking." }
    ],
    reviews: [
      { id: "r-crompton-1", name: "Anurag Mishra", location: "Lucknow", rating: 5, date: "2 days ago", appliance: "Crompton QuietPro Chimney", text: "Crompton chimney motor issue fixed in 30 mins! QuietPro motor runs silently now. Highly satisfied." },
      { id: "r-crompton-2", name: "Pooja Hegde", location: "Bengaluru", rating: 5, date: "4 days ago", appliance: "Crompton Auto-Clean Hood", text: "Fixed touch PCB board on my Crompton chimney quickly. Great service." },
      { id: "r-crompton-3", name: "Rajiv Malhotra", location: "Delhi NCR", rating: 5, date: "1 week ago", appliance: "Crompton Glass Hob", text: "Replaced faulty igniter box on Crompton hob. Polite technician and 90-day warranty." }
    ]
  },

  "cata-repair": {
    slug: "cata-repair",
    name: "Cata",
    h1Title: "Cata Kitchen Appliance Repair & Service Support",
    heroHeadline: "Same-Day Cata Chimney, Hob & Oven Repair",
    heroSubheadline: "Spanish Built-in Appliance Technicians for Cata Hoods, Glass Hobs & Ovens. 30-Min Doorstep Dispatch & 90-Day Warranty.",
    metaTitle: "Cata Appliance Repair Service | Cata Chimney, Hob & Oven Repair",
    metaDescription: "Professional doorstep Cata chimney repair, Cata hob burner fix, built-in oven servicing & touch PCB repair. 90-day warranty. Call now!",
    ctaCopy: "Book Cata Specialist Technician",
    brandTagline: "Spanish Excellence Repair for Cata Built-in Kitchen Appliances",
    descriptionCopy: [
      "Cata is a premium Spanish brand world-famous for silent extraction hoods, sleek glass ceramic hobs, and advanced built-in ovens. Servicing Cata's specialized European components requires trained technical expertise.",
      "Our doorstep Cata technicians specialize in resolving Cata chimney extraction loss, ceramic hob touch PCB lockups, oven heating element burnouts, and gas valve leaks right at your home.",
      "We guarantee 30-45 minute doorstep arrival, transparent upfront estimates, 100% original Cata compatible spare parts, and a 90-day written warranty."
    ],
    specialties: [
      "Cata Silent Extraction Hoods & Canopies",
      "Cata Glass Ceramic & Gas Built-in Hobs",
      "Cata Multifunction Built-in Ovens",
      "Cata Touch-Control Induction Cooktops"
    ],
    commonIssues: [
      { title: "Cata Chimney Touch Control Locked", desc: "Safety child lock engaged or touch sensor board moisture lockup." },
      { title: "Cata Hob Burner Sparking Failure", desc: "Pulse generator relay dead or wire shorting." },
      { title: "Cata Built-in Oven Thermo-Cutout Tripped", desc: "Cooling fan motor failure causing overheat safety trip." },
      { title: "Cata Hood Extraction Power Low", desc: "Blower turbine choked with grease deposits." }
    ],
    faqs: [
      { question: "Do you specialize in Spanish Cata built-in appliances?", answer: "Yes, our engineers are trained specifically on Cata European specifications, touch control boards, and silent fan blowers." },
      { question: "How quickly can a technician visit for Cata oven repair?", answer: "Technicians reach your home within 30 to 45 minutes of booking." },
      { question: "Can you fix touch control problems on Cata ceramic hobs?", answer: "Yes, we carry replacement touch sensor PCB cards for Cata hobs and fix them on-site." },
      { question: "Do you supply genuine spare parts for Cata appliances?", answer: "Yes, we use 100% genuine Cata compatible replacement spares backed by a 90-day warranty." },
      { question: "Why is my Cata oven not heating up?", answer: "Non-heating is typically caused by a blown heating element or faulty thermostat. We replace elements on-site." },
      { question: "What is included in Cata chimney deep cleaning?", answer: "Deep chemical cleaning of European silent extraction hoods." },
      { question: "Are your Cata technicians certified?", answer: "Yes, all technicians have 8+ years of experience in high-end European built-in appliance repair." },
      { question: "Can you fix gas leaks on Cata gas hobs?", answer: "Yes, gas leakage calls are dispatched immediately as emergency visits within 30 minutes." },
      { question: "How do I book a Cata technician?", answer: "Call our phone hotline or tap the WhatsApp button for instant booking." }
    ],
    reviews: [
      { id: "r-cata-1", name: "Fernando D'Souza", location: "Goa", rating: 5, date: "2 days ago", appliance: "Cata Silent Extraction Hood", text: "Cata chimney suction power restored! Technician cleaned blowers and replaced capacitor. Great service." },
      { id: "r-cata-2", name: "Meenakshi Sundaram", location: "Chennai", rating: 5, date: "4 days ago", appliance: "Cata Ceramic Hob", text: "Fixed touch PCB board on my Cata hob efficiently. Highly recommended!" },
      { id: "r-cata-3", name: "Karan Johar", location: "Mumbai", rating: 5, date: "1 week ago", appliance: "Cata Built-in Oven", text: "Oven heating element replaced on the same day. Professional technician and 90-day warranty." }
    ]
  },

  "asko-repair": {
    slug: "asko-repair",
    name: "Asko",
    h1Title: "Asko Luxury Kitchen Appliance Repair & Service",
    heroHeadline: "Premium Scandinavian Asko Appliance Repair at Doorstep",
    heroSubheadline: "Certified Doorstep Technicians for Asko Luxury Hobs, Induction Cooktops, Ovens & Hoods. 90-Day Warranty.",
    metaTitle: "Asko Appliance Repair Service | Asko Hob, Oven & Hood Repair",
    metaDescription: "Expert doorstep Asko hob repair, Asko built-in oven servicing, induction cooktop PCB repair & hood servicing. 90-day warranty. Call now!",
    ctaCopy: "Request Asko Specialist Technician",
    brandTagline: "Scandinavian Minimalist Craftsmanship Repair for Asko Luxury Appliances",
    descriptionCopy: [
      "Asko represents ultra-premium Scandinavian design, precision craftsmanship, and heavy stainless steel durability. Repairing luxury Asko kitchen appliances requires white-glove service standards and microscopic diagnostic accuracy.",
      "Our senior luxury appliance specialists are trained on Asko induction touch displays, gas-on-glass hobs, combi-steam ovens, and high-cubic-meter extraction hoods.",
      "Enjoy 30-45 minute doorstep engineer arrival, white-glove cleanliness, genuine Asko compatible spares, and a 90-day written guarantee."
    ],
    specialties: [
      "Asko Craft & Elements Built-in Gas Hobs",
      "Asko Bridge Induction & Celsius°Cooking Hobs",
      "Asko Combi-Steam & Pyrolytic Built-in Ovens",
      "Asko Stainless Steel Wall & Island Extraction Hoods"
    ],
    commonIssues: [
      { title: "Asko Induction Celsius Sensor Communication Fault", desc: "Wireless pan sensor module out of sync with main controller board." },
      { title: "Asko Gas Hob Flame Fail Safety Lockup", desc: "Thermocouple safety valve misaligned or dirty gas nozzle." },
      { title: "Asko Pyrolytic Oven Door Lock Jammed", desc: "High temperature door lock solenoid mechanism stuck." },
      { title: "Asko Hood Blower Fan Noise", desc: "Turbine impeller imbalance or bearing wear." }
    ],
    faqs: [
      { question: "Do you specialize in ultra-premium Asko Scandinavian appliances?", answer: "Yes, our senior engineers are specifically trained on luxury Asko Craft and Elements series appliances." },
      { question: "How fast can an Asko technician reach my location?", answer: "We dispatch senior luxury specialists who arrive at your home within 30 to 45 minutes of booking." },
      { question: "Do you use genuine Asko replacement components?", answer: "Yes, we use 100% genuine Asko compatible parts backed by a written 90-day guarantee." },
      { question: "Why is my Asko combi-steam oven displaying a descaling error?", answer: "Descaling errors indicate mineral buildup in the steam boiler. We perform ultrasonic descaling on-site." },
      { question: "Can you fix gas leaks on Asko gas-on-glass hobs?", answer: "Yes, gas leaks are treated as priority emergency visits dispatched within 30 minutes." },
      { question: "What is the warranty period on Asko repair work?", answer: "All repair work and replaced components carry a 90-day written service warranty." },
      { question: "Are your technicians equipped for white-glove indoor service?", answer: "Yes, our technicians wear shoe covers, use protective floor blankets, and leave your kitchen spotlessly clean." },
      { question: "How is Asko induction hob PCB repair handled?", answer: "Our senior luxury engineers perform component-level circuit board diagnostics at your home." },
      { question: "How do I book an Asko luxury technician visit?", answer: "Call our direct helpline or tap the WhatsApp button for instant technician booking." }
    ],
    reviews: [
      { id: "r-asko-1", name: "Sanjiv Goenka", location: "Kolkata", rating: 5, date: "1 day ago", appliance: "Asko Elements Induction Hob", text: "Asko luxury technician was super polite and fixed my induction touch board in 45 mins. White glove service indeed!" },
      { id: "r-asko-2", name: "Nisha Singhania", location: "Mumbai", rating: 5, date: "3 days ago", appliance: "Asko Combi-Steam Oven", text: "Prompt response for Asko oven steam boiler issue. Fixed on-site with 90-day warranty." },
      { id: "r-asko-3", name: "Arjun Oberoi", location: "Delhi NCR", rating: 5, date: "1 week ago", appliance: "Asko Stainless Extraction Hood", text: "Excellent chimney blower motor repair service for Asko. Professional and prompt!" }
    ]
  },

  "miele-repair": {
    slug: "miele-repair",
    name: "Miele",
    h1Title: "Miele Luxury Kitchen Appliance Repair & Servicing",
    heroHeadline: "Certified German Miele Appliance Repair at Doorstep",
    heroSubheadline: "White-Glove Doorstep Repair for Miele MasterCool, Convection Ovens, Induction Hobs & Hoods. 90-Day Warranty.",
    metaTitle: "Miele Appliance Repair Service | Miele Hob, Oven & Hood Repair",
    metaDescription: "White-glove doorstep Miele hob repair, Miele built-in oven servicing, induction PCB repair & hood servicing. 90-day warranty. Call now!",
    ctaCopy: "Request Miele Master Technician",
    brandTagline: "Immer Besser (Forever Better) Repair Excellence for Miele Luxury Appliances",
    descriptionCopy: [
      "Miele is the pinnacle of luxury German home appliances, engineered with legendary 'Immer Besser' quality to last decades. Servicing Miele appliances requires master-level technician training, specialized diagnostic tools, and precise calibration.",
      "Our certified Miele master engineers specialize in Miele Moisture Plus ovens, induction SmartSelect hobs, Dual FlexZone burners, and silent Connoisseur hood extraction systems.",
      "Enjoy 30-45 minute doorstep master engineer arrival, white-glove care, genuine Miele compatible replacement spares, and a 90-day written guarantee."
    ],
    specialties: [
      "Miele Generation 7000 Built-in Convection & Steam Ovens",
      "Miele SmartSelect & PowerFlex Touch Induction Hobs",
      "Miele Gas-on-Glass Hobs with Dual Wok Burners",
      "Miele Connoisseur Silent Wall & Island Extraction Hoods"
    ],
    commonIssues: [
      { title: "Miele Oven Error Code F06 / F20", desc: "Steam generator temperature sensor short circuit or heating rod failure." },
      { title: "Miele Induction SmartSelect Touch Unresponsive", desc: "Optical glass sensor calibration shift due to thermal expansion." },
      { title: "Miele Gas Hob Dual Wok Igniter Spark Failure", desc: "Dual spark electrode wire grounding out on stainless steel chassis." },
      { title: "Miele Hood Silence Blower Motor Noise", desc: "Blower turbine balance clip dislodged." }
    ],
    faqs: [
      { question: "Do you specialize in luxury Miele Generation 7000 appliances?", answer: "Yes, our master engineers are certified and specifically trained on Miele Generation 6000 and 7000 luxury series electronics." },
      { question: "How fast can a Miele master technician visit my home?", answer: "We dispatch senior luxury master technicians who arrive within 30 to 45 minutes of booking." },
      { question: "Do you use original Miele replacement components?", answer: "Yes, we use 100% genuine Miele compatible spare parts backed by a written 90-day service guarantee." },
      { question: "Why is my Miele Moisture Plus oven showing an error code?", answer: "Error codes like F06 or F20 indicate steam injector or thermostat sensor faults. We diagnose Miele electronics at your doorstep." },
      { question: "Can you fix gas leaks on Miele dual-wok gas hobs?", answer: "Yes, gas leak calls are dispatched as priority 30-minute emergency visits." },
      { question: "What warranty do you provide on Miele repair work?", answer: "All repair work and replaced parts carry a 90-day written service warranty." },
      { question: "Do your technicians follow white-glove floor protection standards?", answer: "Yes, technicians wear shoe covers, use soft protective blankets under tools, and leave your kitchen spotlessly clean." },
      { question: "How is Miele induction hob PCB board repair handled?", answer: "On-site diagnostic testing and component replacement with genuine Miele compatible parts." },
      { question: "How do I schedule an emergency Miele master technician visit?", answer: "Call our direct helpline or tap the WhatsApp button for instant technician booking." }
    ],
    reviews: [
      { id: "r-miele-1", name: "Cyrus Poonawalla", location: "Mumbai", rating: 5, date: "1 day ago", appliance: "Miele Gen 7000 Moisture Plus Oven", text: "Miele master technician arrived in 30 mins. Diagnosed steam injector issue and fixed it on-site with complete professionalism." },
      { id: "r-miele-2", name: "Tanya Godrej", location: "Mumbai", rating: 5, date: "3 days ago", appliance: "Miele SmartSelect Induction Hob", text: "White glove doorstep service for my Miele induction hob. Flawless work and 90-day warranty." },
      { id: "r-miele-3", name: "Rana Kapoor", location: "Delhi NCR", rating: 5, date: "1 week ago", appliance: "Miele Connoisseur Hood", text: "Miele extraction hood blower motor fixed on the same day. Professional and prompt!" }
    ]
  }
};
