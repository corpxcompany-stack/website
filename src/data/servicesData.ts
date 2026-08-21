import { 
  Home, 
  CookingPot, 
  Layers, 
  Sofa, 
  Building2, 
  ShieldCheck, 
  Bug, 
  Key, 
  Factory,
  Bath,
  Sparkles,
  Shirt,
  BedDouble,
  Baby,
  Wrench
} from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  desc: string;
  img: string;
  icon: any;
  metaTitle: string;
  metaDesc: string;
  extendedDesc: string;
  features: string[];
  processSteps: string[];
  faqs: FAQItem[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "industrial-shed-cleaning",
    title: "Industrial / Industrial Shed Cleaning",
    tag: "Heavy Duty",
    desc: "Industrial areas often collect heavy dust, grease, and stubborn dirt. We clean floors, walls, machinery surroundings, and work areas thoroughly. For sticky dirt or hard-to-remove deposits, we use a jet pressure machine whenever required for a deeper and more effective clean.",
    img: "/gallery/shed.avif",
    icon: Factory,
    metaTitle: "Industrial Shed Cleaning Services | Factory & Warehouse Cleaning",
    metaDesc: "Heavy-duty industrial shed and factory cleaning. High-pressure jet washing, degreasing, and structural cleaning for warehouses and manufacturing plants.",
    extendedDesc: "Industrial sheds, manufacturing plants, and warehouses accumulate severe operational grime — ranging from carbon soot and chemical mists to heavy machine grease and high-ceiling dust webs. Unmaintained facilities face safety hazards, equipment overheating, and compliance failures. Our industrial shed cleaning service brings heavy-duty equipment and specialized industrial degreasers to tackle rugged working environments without disrupting your core operational productivity.",
    features: [
      "High-Pressure Jet Washing: 200+ bar pressure cleaning blasts away thick grease, mud, and tire marks from shop floors.",
      "Truss & High-Ceiling Dusting: Removal of hazardous dust buildup on overhead beams, skylights, and utility piping.",
      "Heavy Degreasing: Industrial chemical breakdown of stubborn lubricant spills around machinery footprints.",
      "Wall & Cladding Washing: Restoring interior and exterior metal shed walls corrupted by industrial exhaust.",
      "Floor Scrubbing & Buffing: Ride-on auto scrubbers clean expansive concrete or epoxy floor areas rapidly."
    ],
    processSteps: [
      "Safety & Risk Assessment: Coordinating with facility managers to lock out hazardous zones and protect sensitive electronics.",
      "Overhead Cleaning: Clearing dust from high rafters, crane rails, and lighting fixtures first.",
      "Degreasing Application: Applying heavy-duty alkaline degreasers to oil-saturated flooring and structural bases.",
      "Pressure Washing & Scrubbing: Executing high-pressure washdowns and mechanical floor scrubbing for a restored finish."
    ],
    faqs: [
      {
        question: "Can you clean our factory during weekend shutdown hours?",
        answer: "Yes. We regularly schedule industrial cleaning operations during night shifts, weekends, or annual plant maintenance shutdowns to ensure zero interference with your production targets."
      }
    ]
  },
  {
    id: "industrial-crane-cleaning",
    title: "Industrial Crane Cleaning",
    tag: "Equipment Care",
    desc: "Industrial cranes are exposed to grease, oil, and heavy dust every day. We carefully clean accessible surfaces to remove built-up dirt and improve their appearance. Suitable cleaning methods are used whenever required for the best results.",
    img: "/gallery/crane.avif",
    icon: Wrench,
    metaTitle: "Industrial Crane Cleaning Services | Heavy Equipment Degreasing",
    metaDesc: "Professional industrial crane cleaning and degreasing. We remove heavy grease, oil, and built-up grime from overhead cranes and structural frameworks.",
    extendedDesc: "Overhead bridge cranes, gantry cranes, and heavy lifting hoists operate in the dirtiest upper strata of manufacturing plants. Over time, thick layers of airborne manufacturing dust mix with mechanical lubricants, creating an abrasive sludge on crane walkways, control boxes, and structural girders. This buildup obscures safety inspection markings and poses severe fire risks. Our industrial crane cleaning service safely removes stubborn grease and debris from lifting infrastructure.",
    features: [
      "Structural Girder Degreasing: Removing heavy oil and carbon accumulation along primary bridge beams and runways.",
      "Walkway & Handrail Cleaning: Clearing slippery grease from maintenance walkways to ensure operator safety.",
      "Control Housing Exterior Wiping: Detailed dry and damp wiping around electrical enclosures and hoist motors.",
      "Safety Signage Restoration: Careful cleaning around capacity labels, warning stripes, and inspection tags.",
      "Custom Access Deployment: Using scissor lifts, articulated booms, or certified safety harnesses for elevated access."
    ],
    processSteps: [
      "Lockout / Tagout Alignment: Strict compliance with electrical and mechanical isolation safety protocols before work begins.",
      "Scraping & Sludge Removal: Manual removal of heavy grease cakes and industrial debris from structural channels.",
      "Chemical Solvent Degreasing: Applying specialized industrial solvents that dissolve heavy lubricants safely.",
      "Controlled Wipe-Down: High-absorbency wiping ensuring no dripping chemicals contaminate machinery on the shop floor below."
    ],
    faqs: [
      {
        question: "What safety standards do your crane cleaning technicians follow?",
        answer: "All technicians assigned to overhead crane cleaning are certified in Working at Heights (WAH), equipped with industrial PPE and full-body harnesses, and strictly follow Lockout/Tagout (LOTO) safety procedures."
      }
    ]
  },
  {
    id: "before-possession-cleaning",
    title: "Before Possession Cleaning",
    tag: "Move-In Ready",
    desc: "Moving into a new home or office should feel exciting, not stressful. We remove construction dust, paint marks, and leftover debris, making the space clean, welcoming, and ready for you from day one.",
    img: "/gallery/Before_Possession.avif",
    icon: Key,
    metaTitle: "Before Possession Cleaning | Move-In & Post-Construction",
    metaDesc: "Professional pre-possession and move-in cleaning. We remove construction dust, paint splatters, and cement residue so your property is ready from day one.",
    extendedDesc: "Newly constructed or renovated properties look impressive, but they are invariably covered in a fine layer of construction dust, plaster residue, paint splatters, and cement drops on tiles and windows. Trying to move furniture into an uncleaned site traps abrasive silica dust into your belongings forever. Our Before Possession Cleaning service bridges the gap between construction completion and move-in day, delivering an exhaustive deep clean that transforms a building site into an immaculate living or working space.",
    features: [
      "Paint & Cement Splatter Removal: Safe scraping and chemical softening of stubborn contractor residue on glass and floors.",
      "Fine Dust Eradication: Deep vacuuming of hidden woodwork recesses, wardrobe tracks, switchboards, and ceiling fixtures.",
      "Window & Track Detailing: Complete removal of protective stickers, silicone smudges, and plaster from sliding tracks.",
      "Deep Floor Scrubbing: Industrial rotary scrubbing machines clean porcelain, vitrified tiles, marble, or wooden flooring.",
      "Cabinet & Wardrobe Interiors: Thorough wiping and sanitization of every shelf, drawer, and hinge before you unpack."
    ],
    processSteps: [
      "Debris Clearance: Removing remaining contractor scraps, packaging clips, and larger loose debris.",
      "Dry Dust Extraction: HEPA vacuuming walls, ceilings, electrical fittings, and joinery interiors.",
      "Residue Scraping & Descaling: Special treatments applied to dissolve paint drips, cement haze, and adhesive marks.",
      "Wet Scrubbing & Sanitizing: Complete washdown of bathrooms, kitchens, and floors for a sparkling move-in finish."
    ],
    faqs: [
      {
        question: "When should I schedule before possession cleaning?",
        answer: "We strongly recommend scheduling cleaning 24 to 48 hours after all construction, carpentry, and painting work is 100% complete, but immediately before your movers arrive with furniture."
      }
    ]
  },
  {
    id: "facade-glass-cleaning",
    title: "Facade / High-Rise Glass Cleaning",
    tag: "High-Rise Specialist",
    desc: "The outside of your building creates the first impression. Our trained team carefully cleans glass facades and exterior surfaces, removing dust, water marks, and pollution stains to restore a bright, professional appearance.",
    img: "/gallery/Facade.avif",
    icon: Layers,
    metaTitle: "Facade & Glass Cleaning Services | Exterior Cleaning Experts",
    metaDesc: "Professional facade and glass cleaning. We remove environmental grime, hard water stains, and structural dust to leave your exterior sparkling. Reliable and safe.",
    extendedDesc: "Exterior building facades and glass panels need specialized care to maintain their architectural appeal. Weathering, pollution, and hard water stains build up on glass and structural panels over time. Our professional facade and glass cleaning service delivers a thorough, streak-free exterior clean using high-safety standards, scaffolding, and modern access equipment.",
    features: [
      "Exterior Glass Panels: Complete descaling, surface scrubbing, and streak-free glass polishing using industrial squeegee frameworks.",
      "Structural Facades: Full mechanical scrub down and pressure washing of ACP sheets, stone cladding, and exterior wall boundaries.",
      "Window Frames & Tracks: Detailed cleaning of aluminum profiles, structural gaskets, and drainage channels.",
      "High-Access Safety: Rigorous deployment of certified rope access technicians, scaffolding systems, and boom lifts.",
      "Stain & Scale Removal: Total elimination of stubborn atmospheric deposits, bird droppings, and mineral hard water scaling."
    ],
    processSteps: [
      "Site Evaluation & Safety Planning: Comprehensive assessment of structural height, access points, and chemical tolerances.",
      "Targeted Application: Application of eco-friendly, professional cleaning solutions to dissolve atmospheric buildup.",
      "Mechanical Agitation & Washing: Focused scrubbing and controlled pressure washing of facade materials and glass boundaries.",
      "Streak-Free Finishing: Pure water rinsing and squeegee drying to guarantee a flawless exterior finish."
    ],
    faqs: [
      {
        question: "Why does professional facade cleaning make a distinct difference?",
        answer: "Environmental pollution and seasonal weather cause stubborn exterior buildup that degrades building aesthetics. Our certified high-access teams safely restore structural brilliance."
      }
    ]
  },
  {
    id: "kitchen-deep-cleaning",
    title: "Kitchen Cleaning",
    tag: "Grease Removal",
    desc: "The kitchen is where families come together, so it deserves special attention. We remove grease, oil, food residue, and hidden dirt from cabinets, tiles, countertops, chimneys, and sinks, making your kitchen clean and ready for everyday cooking.",
    img: "/gallery/Hotel.avif",
    icon: CookingPot,
    metaTitle: "Kitchen Deep Cleaning Services | Grease & Grime Removal",
    metaDesc: "Professional kitchen deep cleaning. We remove grease, oil buildup, and hidden grime from chimneys, tiles, countertops, and more. Book your free quote.",
    extendedDesc: "The kitchen is where your family's meals are prepared — which makes it one of the most important spaces in your home to keep truly clean. But it is also one of the hardest to clean properly. Grease settles on surfaces invisibly. Oil accumulates inside chimneys. Food residue hides in tile grout and cabinet corners. Sinks develop limescale. And the longer it sits, the harder it gets to remove. Our kitchen deep cleaning service tackles all of it — using the right tools, the right products, and the patience it actually takes to do the job properly.",
    features: [
      "Chimney / Exhaust Hood: Exhaustive detailing of exterior surfaces, external filters, and localized grease trap deposits.",
      "Kitchen Tiles: Heavy manual scrub down and degreasing of wall surfaces, structural backsplashes, and horizontal grout lines.",
      "Countertops & Work Surfaces: Deep chemical scrubbing, biological sanitization, and stone perimeter buffing.",
      "Cabinets & Drawers: Absolute wipe-down and targeted grease removal across all exterior cabinet faces and framing tracks.",
      "Kitchen Sink: Complete mineral descaling, mechanical scrubbing, and antimicrobial drainage path sanitization.",
      "Appliance Exteriors: Outer surface microfabric polishing for refrigerators, microwaves, ovens, and matching countertop units."
    ],
    processSteps: [
      "Dry Wipe & Dusting: We remove loose structural dust and loose debris before applying any liquids, preventing unappealing surface smearing.",
      "Degreasing Application: Professional-grade emulsifying degreasers are carefully applied to grease-heavy zones and left to work.",
      "Scrubbing & Detail Cleaning: Every surface is scrubbed manually, paying close attention to complex grout lines and narrow corner tracks.",
      "Wipe-Down & Sanitisation: All target points are wiped clean, rinsed thoroughly where applicable, and left completely dry.",
      "Floor Cleaning: The kitchen floor is processed using advanced floor scrubbers and appropriate sanitizers for a pristine finish."
    ],
    faqs: [
      {
        question: "Why does professional kitchen deep cleaning matter?",
        answer: "A build-up of grease and organic residue is not just unhygienic — it represents a distinct fire hazard and directly impacts your indoor air quality. A systematic professional deep clean eliminates hidden bacteria vectors completely."
      }
    ]
  },
  {
    id: "office-cleaning-services",
    title: "Office Cleaning",
    tag: "Corporate Workspace",
    desc: "A clean workplace creates a better environment for both employees and visitors. We thoroughly clean workstations, meeting rooms, common areas, and washrooms so your office always feels fresh, organized, and professional.",
    img: "/gallery/Corporate_Office.avif",
    icon: Building2,
    metaTitle: "Office Cleaning Services | Professional Office Deep Cleaning",
    metaDesc: "Professional office cleaning services. We deep clean workstations, cabins, meeting rooms, and washrooms. Reliable, flexible, and ISO-certified. Get a free quote.",
    extendedDesc: "The state of your office says a great deal about your business — to clients, to visitors, and to your own team. A clean, well-maintained workspace improves employee wellbeing, reduces sick days, and creates an environment where people can focus and do their best work. Our professional office cleaning service delivers thorough, reliable cleaning for workplaces of all sizes — from startups and coworking spaces to large corporate offices and commercial facilities.",
    features: [
      "Workstations & Desks: Microfabric sanitation of primary table tops, monitor casings, keyboards, and task chairs.",
      "Cabins & Meeting Rooms: Complete glass partition polishing, surface dusting, and deep hard floor maintenance.",
      "Common Areas & Lobbies: Detailing of primary reception bays, main entrance seating arrays, and high-touch corridor walls.",
      "Pantry & Cafeteria: Sanitization of food preparation surfaces, exterior appliance shells, utility sinks, and floors.",
      "Washrooms: Absolute deep cleaning, fixture chemical descaling, and continuous biological disinfection routines."
    ],
    processSteps: [
      "Flexible Scheduling Realignment: Operational deployment is arranged during off-peak hours (early morning, evening, or weekends) to ensure zero business disruption.",
      "Zonal Cleaning Deployment: Our professional team splits into assigned task groups across workstations, public lobbies, and utility zones.",
      "Industrial Dust Extraction: Commercial backpack HEPA vacuums sweep through open floor plates and fabric seating arrays.",
      "High-Touch Point Disinfection: Thorough sanitization tracking across all internal entry points, door handles, and public railings."
    ],
    faqs: [
      {
        question: "What facility variations do you systematically support?",
        answer: "We offer tailored cleaning services for corporate office complexes, co-working spaces, private clinics, educational institutions, commercial fulfillment centers, and high-end retail venues."
      }
    ]
  },
  {
    id: "home-deep-cleaning",
    title: "Home Deep Cleaning",
    tag: "Full-House Care",
    desc: "A clean home brings comfort and peace of mind. We deep clean every corner of your house, removing dust, stains, and hidden dirt that regular cleaning often misses. We treat your home with the same care and attention as if it were our own.",
    img: "/gallery/Deep_Cleaning.avif",
    icon: Home,
    metaTitle: "Home Deep Cleaning Services | Professional Home Cleaning",
    metaDesc: "Looking for reliable home deep cleaning? Our trained professionals deliver thorough, top-to-bottom cleaning for homes across Pune, Mumbai, Bangalore, and Hyderabad. Book a free quote today.",
    extendedDesc: "Regular cleaning keeps your home looking tidy. But over time, dust settles in places no mop reaches. Grease builds up behind appliances. Bathroom grout darkens. Ceiling fans become invisible dust traps. And the accumulated grime starts to affect the air you breathe and the way your home feels. Our home deep cleaning service is designed to fix that — thoroughly, systematically, and with the kind of attention to detail that leaves your home feeling genuinely refreshed.",
    features: [
      "Living Room & Bedrooms: Fans, light fixtures, walls, switches, skirting boards, interior windows, furniture surfaces, and floor deep clean.",
      "Kitchen: Exterior chimney surfaces, tiles, countertops, sink, cabinet exteriors, appliance surfaces, and hidden corner pockets.",
      "Bathrooms: Detailed scrub down of tiles, toilets, washbasins, fixtures, exhaust fans, mirrors, floors, and grout lines.",
      "Windows & Doors: Comprehensive polishing of interior glass, operational frames, handles, and mechanical sliding tracks.",
      "Hard-to-Reach Areas: Systematic clearance behind structural furniture, under beds, above cabinets, and narrow corners."
    ],
    processSteps: [
      "Pre-Cleaning Assessment: Our team walks through your home to understand the scope, identify problem areas, and confirm the custom cleaning plan.",
      "Dry Cleaning First: We start with dusting, vacuuming, and removing loose dirt from all surfaces including ceiling fans, walls, blinds, and floors.",
      "Wet Cleaning & Scrubbing: We apply appropriate cleaning solutions to surfaces and scrub away grease, stains, soap scum, and built-up grime.",
      "Final Mopping & Wipe-Down: All floors are polished and surfaces wiped clean. We ensure everything is completely dry and spotless.",
      "Inspection Walkthrough: We perform a final check with you. If any zone requires touching up, we complete it immediately on the spot."
    ],
    faqs: [
      {
        question: "How long does a home deep cleaning take?",
        answer: "Most homes are completed within 3 to 8 hours depending on the overall size and structural condition. We will provide a precise estimated time tracking window during your initial booking confirmation."
      },
      {
        question: "Do I need to be home during the cleaning?",
        answer: "You only need to be available at the start for property access alignment and at the final phase for the inspection walkthrough. You do not need to remain present throughout the active operating shift."
      },
      {
        question: "How often should I get my home deep cleaned?",
        answer: "We highly recommend scheduling a comprehensive deep clean every 3 to 6 months. High-traffic households or residences with domestic pets benefit from more frequent cleaning intervals."
      },
      {
        question: "Are your cleaning products safe for children and pets?",
        answer: "Yes. We strictly utilize professional-grade, tested cleaning solutions that are powerful against stubborn environmental grime while remaining entirely safe for your household parameters."
      }
    ]
  },
  {
    id: "bathroom-cleaning",
    title: "Bathroom Cleaning",
    tag: "Hygiene Standard",
    desc: "Bathrooms need extra care to stay hygienic. We remove soap stains, hard water marks, and built-up dirt while cleaning every fitting and corner, leaving your bathroom fresh, clean, and pleasant to use.",
    img: "/gallery/Bathroom_Cleaning.avif",
    icon: Bath,
    metaTitle: "Bathroom Deep Cleaning Services | Stain & Scale Removal",
    metaDesc: "Professional bathroom cleaning. We remove stubborn soap scum, hard water stains, and bacteria to leave your bathroom sparkling clean and fresh.",
    extendedDesc: "Bathrooms need more than a quick wipe and a spray. Hard water stains build up on taps and showerheads. Soap scum settles on tiles and glass. Grout lines darken with mould. Exhaust fans clog with dust. And behind the visible grime lies bacteria that regular cleaning simply does not eliminate. Our professional bathroom cleaning service delivers a thorough, deep clean that leaves your bathroom visually spotless — and genuinely hygienic.",
    features: [
      "Toilet Structure: Disinfection and structural scrubbing of the bowl, seat, lid, external housing, and structural floor base.",
      "Tiles & Glass Walls: Full mechanical scrub down, vertical grout line cleaning, and complete environmental mould removal.",
      "Washbasin & Vanity Mirrors: Complete descaling, surface scrubbing, and streak-free mirror glass polishing.",
      "Shower & Bathtubs: Detailed descaling of shower trays, geometric glass partitions, and perimeter framing tracks.",
      "Taps & Metallic Fittings: Total elimination of stubborn mineral hard water stains, leaving chrome fixtures gleaming.",
      "Exhaust Fan Assemblies: Exterior casing clean down and immediate loose dust extraction from extraction grilles."
    ],
    processSteps: [
      "Initial Evaluation: Identification of specific mineral deposit tiers and surface chemical tolerances.",
      "Targeted Descaling: Application of professional descaling formulations to dissolve built-up calcium and hard water deposits.",
      "Mechanical Agitation: Focused scrubbing of tile faces, tracking parameters, and glass boundaries.",
      "Sanitizing Flush: Disinfection rinse across all major fixtures to establish code-compliant hygiene baselines."
    ],
    faqs: [
      {
        question: "Why does professional bathroom cleaning make a distinct difference?",
        answer: "Hard water causes stubborn mineral deposits that standard household consumer products simply cannot remove effectively. Our team deploys professional industrial descalers that break down years of scaling smoothly."
      }
    ]
  },
  {
    id: "sofa-upholstery-cleaning",
    title: "Sofa & Chair Cleaning + Shampooing",
    tag: "Fabric Care",
    desc: "Your furniture collects dust, stains, and germs over time. We gently shampoo sofas and chairs to restore their freshness. If we find deep stains or stubborn dirt, we use steam cleaning whenever required to achieve better results without harming the fabric.",
    img: "/gallery/Upholstery.avif",
    icon: Sofa,
    metaTitle: "Sofa & Chair Cleaning + Shampooing | Professional Fabric Care",
    metaDesc: "Expert sofa and chair cleaning. We gently shampoo and steam clean upholstery to remove dust, germs, and stubborn stains without damaging fabrics.",
    extendedDesc: "That comfortable sofa you come home to every evening? Over time, it accumulates dust, skin particles, pet dander, food crumbs, and bacteria deep inside its fabric — far beyond what vacuuming can reach. And the stains that seem set in? Most can be significantly improved with the right technique. Our professional sofa and upholstery cleaning service uses specialised shampooing and, where required, steam cleaning to restore your furniture — gently and effectively.",
    features: [
      "Sofas & Sectionals: High-end detailing for all structural fabric profiles and dimensional layouts.",
      "Chairs & Armchairs: Complete stain extraction across dining seats, custom accent chairs, and fabric office fittings.",
      "Gentle Shampooing: Industrial-grade foam formulas lift dirt without saturating deep upholstery foam layers.",
      "Steam Treatment: High-temperature steam applications deployed on stubborn biological marks and deep grease spots.",
      "Odour Neutralization: Eliminates trapped pet scents, smoke odors, and atmospheric mustiness."
    ],
    processSteps: [
      "Inspection & Pre-Treatment: We assess the unique fabric weave, identify set-in stains, and apply precise target pre-treatment agents.",
      "Deep Shampooing: Specialized commercial upholstery shampoo is worked thoroughly into the material weave to loosen embedded dirt particles.",
      "Steam Cleaning: For heavy discoloration or deeply soiled upholstery, we activate high-pressure steam extraction units to safely sanitize without chemicals.",
      "Extraction & Drying: Moisture and emulsified soil layers are extracted using twin-stage vacuum extractors, establishing quick drying parameters."
    ],
    faqs: [
      {
        question: "What is the expected drying time for upholstery?",
        answer: "Drying time varies slightly by fabric weave density and seasonal humidity profiles. Most sofa installations are completely dry and ready for standard use within 2 to 4 hours post-extraction."
      }
    ]
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Cleaning + Shampooing",
    tag: "Deep Extraction",
    desc: "Carpets trap dust, allergens, and dirt deep inside the fibers. We shampoo the carpet thoroughly, and when extra cleaning is needed, we use steam cleaning to lift stubborn dirt and bring back a fresh, clean look.",
    img: "/gallery/Carpet.avif",
    icon: Sparkles,
    metaTitle: "Carpet Cleaning & Shampooing Services | Steam Extraction",
    metaDesc: "Professional carpet shampooing and steam cleaning. We remove deep-seated dust, allergens, and tough stains to bring back a fresh, clean look.",
    extendedDesc: "Carpets act like giant environmental filters in homes and offices, steadily trapping dust, pollen, bacteria, and grit inside their weave. Vacuuming only clears the very top layer, leaving abrasive particles below to grind against fibers and dull the appearance over time. Our specialized carpet shampooing and steam extraction service penetrates deep into the pile, flushing out trapped pollutants and restoring plush texture.",
    features: [
      "Deep Fiber Shampooing: Low-moisture foam agitation that loosens deeply embedded soil and grit.",
      "Steam Sanitization: Thermally kills dust mites, bacteria, and allergens hidden deep within carpet padding.",
      "High-Lift Vacuum Extraction: Commercial suction machines remove dirty water, cleaning residue, and moisture immediately.",
      "Stain Remediation: Special spotting treatments for coffee spills, ink, pet accidents, and heavy foot-traffic paths.",
      "Pile Lifting: Mechanical brushing revives matted down fibers for a renewed, soft underfoot feel."
    ],
    processSteps: [
      "Pre-Inspection: We identify pile types (wool, synthetic, nylon) and locate heavily soiled walkways and spots.",
      "Dry Vacuum Extraction: Removing dry dust and grit prior to liquid application to prevent mudding.",
      "Shampoo Agitation: Working commercial cleaning foam through the carpet fibers using rotary scrubbers.",
      "Steam & Extract: High-pressure steam injection combined with rapid vacuum extraction lifts stains and residues.",
      "Grooming & Drying: Fibers are aligned for uniform drying and aesthetic presentation."
    ],
    faqs: [
      {
        question: "Can you remove all old stains from carpets?",
        answer: "While our industrial extraction techniques remove over 90% of common stains, certain chemical dyes or permanent discolorations may only be lightened depending on how long they have set in the fibers."
      }
    ]
  },
  {
    id: "curtains-cleaning",
    title: "Curtains Cleaning + Shampooing",
    tag: "Fabric Care",
    desc: "Curtains quietly collect dust every day. We carefully clean and shampoo them to remove dirt and odors. If required, steam cleaning is used to refresh the fabric while helping maintain its quality.",
    img: "/gallery/curtain.avif",
    icon: Shirt,
    metaTitle: "Curtain Cleaning & Shampooing | Odor & Dust Removal",
    metaDesc: "Expert curtain cleaning and shampooing. We gently eliminate accumulated dust, smoke, and odors while maintaining your fabric's quality and drape.",
    extendedDesc: "Hanging drapery and curtains act as magnets for airborne dust, exhaust pollution, cooking smells, and general room odors. Taking them down for dry cleaning can be tedious and expensive. Our specialized on-site curtain cleaning and shampooing service gently extracts dust and refreshes heavy fabrics right where they hang, preserving delicate pleats and structural backing.",
    features: [
      "On-Site Dust Extraction: HEPA-filtered vacuuming removes surface dust without taking drapes down.",
      "Gentle Fabric Shampooing: Delicate foam cleaning formulations preserve color vibrancy and prevent shrinkage.",
      "Steam Refreshing: Safe thermal steaming relaxes wrinkles, eliminates musty odors, and kills surface bacteria.",
      "Sheer & Heavy Drape Handling: Custom cleaning adjustments for everything from lightweight lace to heavy velvet.",
      "Deodorization: Neutralizes stale cooking smells, cigarette smoke, and pet odors trapped in fabrics."
    ],
    processSteps: [
      "Fabric Assessment: Checking care labels and testing dyes for colorfastness before treatment.",
      "Dust Removal: High-efficiency vacuuming across pleats, headers, and hems to remove loose particulates.",
      "Targeted Shampooing: Applying fabric-safe cleaning foam to soiled sections and handling marks.",
      "Steam Extraction: Passing specialized drapery steam heads along panels to refresh and sanitize cleanly."
    ],
    faqs: [
      {
        question: "Do I need to take my curtains down before your team arrives?",
        answer: "No. In most cases, our specialized equipment allows us to vacuum, shampoo, and steam clean curtains directly while they hang, saving you the hassle of re-draping."
      }
    ]
  },
  {
    id: "mattress-cleaning",
    title: "Bed & Mattress Cleaning + Shampooing",
    tag: "Sleep Hygiene",
    desc: "A clean mattress means healthier sleep. We remove dust, allergens, stains, and hidden dirt through deep cleaning and shampooing. Whenever needed, steam cleaning is used to provide an even deeper level of cleanliness.",
    img: "/gallery/matress.avif",
    icon: BedDouble,
    metaTitle: "Mattress Cleaning & Shampooing | Allergen & Mite Removal",
    metaDesc: "Professional mattress deep cleaning. We eliminate dust mites, dead skin cells, stains, and allergens for a healthier, cleaner sleeping environment.",
    extendedDesc: "We spend nearly a third of our lives in bed, yet mattresses are frequently neglected during regular house cleaning. Over years of use, mattresses absorb gallons of sweat and accumulate millions of dust mites feeding on shed skin cells. This internal buildup is a primary trigger for nighttime allergies, asthma, and poor sleep quality. Our deep mattress cleaning and shampooing service purges deep-seated allergens and sanitizes your sleeping surface thoroughly.",
    features: [
      "Allergen & Mite Extraction: Powerful sub-surface vacuuming pulls out dust mite colonies and dead skin debris.",
      "Deep Foam Shampooing: Lifts organic body oil discoloration and surface stains safely.",
      "High-Temperature Steam Sterilization: Thermal sanitization kills bacteria, fungal spores, and lingering odors.",
      "Sanitizing Spray Application: Leaves behind an antimicrobial shield that retards future allergen growth.",
      "Double-Sided Cleaning: Both top sleeping surfaces and structural side gussets are fully detailed."
    ],
    processSteps: [
      "Surface Industrial Vacuuming: High-power extraction of dry particulate matter across all seams and piping.",
      "Stain Pre-Treatment: Enzymatic cleaners applied to protein-based stains, sweat marks, and spills.",
      "Shampoo & Steam Agitation: Deep cleansing using foam scrubbers followed immediately by sterilizing steam passes.",
      "Moisture Extraction: Rapid vacuum extraction removes liquid residue to ensure fast turnaround drying."
    ],
    faqs: [
      {
        question: "How soon can I sleep on my mattress after cleaning?",
        answer: "We recommend allowing 4 to 6 hours for complete air drying before remaking the bed with fresh linens. Good room ventilation accelerates this drying process noticeably."
      }
    ]
  },
  {
    id: "newborn-baby-cleaning",
    title: "New Born Baby Home Cleaning",
    tag: "Specialized Care",
    desc: "A newborn deserves a clean and healthy home. We carefully clean every room, removing dust and germs from commonly touched surfaces to create a fresh and comfortable environment for your little one and your family.",
    img: "/gallery/baby.avif",
    icon: Baby,
    metaTitle: "Newborn Baby Home Cleaning Services | Baby-Safe Disinfection",
    metaDesc: "Ensure a safe, germ-free home for your newborn. We use non-toxic, chemical-free, baby-safe cleaning and disinfection methods for total peace of mind.",
    extendedDesc: "Bringing a newborn home is an extraordinary milestone, but a baby's developing immune system is highly sensitive to airborne dust, mold spores, pet dander, and harsh chemical residues left by typical household cleaners. Our Newborn Baby Home Cleaning service is specifically engineered around safety and purity. We sanitize every corner using eco-friendly, non-toxic, and fragrance-free solutions, giving you absolute peace of mind that your home is safe for your baby's first days.",
    features: [
      "100% Baby-Safe Products: Strict use of non-toxic, VOC-free, and hypoallergenic cleaning formulations.",
      "Nursery Deep Detailing: Complete dust removal from crib rails, changing tables, feeding chairs, and toy storage zones.",
      "High-Touch Sanitization: Thorough disinfection of door handles, light switches, floor mats, and remote controls.",
      "HEPA Air-Filtering Vacuuming: Traps microscopic dust and pet dander rather than recirculating them into room air.",
      "Zero Chemical Residue: Double-rinsing protocols ensure no irritating residues remain on floors where babies will crawl."
    ],
    processSteps: [
      "Consultation & Scope Review: Aligning on specific sensitivity requirements or areas needing extra attention.",
      "Dry Particulate Extraction: HEPA vacuuming floors, upholstery, curtains, and air vent grates.",
      "Eco-Friendly Scrub down: Washing surfaces using plant-based and baby-safe sanitizing agents.",
      "Final Purity Verification: Walkthrough ensuring the environment is completely fresh, odorless, and spotless."
    ],
    faqs: [
      {
        question: "Are your disinfectants safe if my baby touches the floor or furniture?",
        answer: "Yes, absolutely. We use certified food-grade and pediatric-safe sanitizers that break down into harmless elements, ensuring zero toxic risks when babies touch surfaces or put their hands in their mouths."
      }
    ]
  }
];

/**
 * Helper function to retrieve all service data.
 * You can still pass a location string here if needed by other SEO components,
 * but all default displayed titles are now 100% clean without placeholders.
 */
export function getServicesByLocation(location: string = "Pune"): ServiceItem[] {
  return servicesData;
}