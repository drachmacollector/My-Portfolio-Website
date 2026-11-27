// All copy and data for the site. Components never inline content.

export const DEVA_DIGITS = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
export const toDeva = (n: number | string) =>
  String(n)
    .split("")
    .map((c) => (/\d/.test(c) ? DEVA_DIGITS[Number(c)] : c))
    .join("");

export const SECTIONS = [
  { id: "top", label: "Hello" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "mun", label: "Model UN" },
  { id: "renders", label: "3D" },
  { id: "contact", label: "Contact" },
] as const;

export const CONTACT = {
  email: "nakulccs@gmail.com",
  linkedin: "https://www.linkedin.com/in/nakul-bhadade/",
  github: "https://github.com/drachmacollector",
  resume: "/Nakul_Resume.pdf",
  monkeytype: "https://monkeytype.com/profile/drachmacollector",
};

export const TAPE_A = [
  "Strategy, then the system",
  "Applied AI",
  "सत्य",
  "Document pipelines",
  "Forecasting models",
];
export const TAPE_B = [
  "IIIT Nagpur",
  "CSE · AI & ML",
  "Best Delegate ×5",
  "वाद",
  "3D artist",
];

export const ABOUT = {
  // Red spans are marked with [[ ]]
  statement:
    "I study computer science at IIIT Nagpur and I like problems that arrive as [[a pile of paperwork]]. I work out what the client actually needs, [[build the system]] that does it, and hand it over so it [[runs without me]].",
};

export const KPMG = {
  role: "AI Consultant Intern",
  meta: [
    { k: "Firm", v: "KPMG India" },
    { k: "Team", v: "Government & Public Services" },
    { k: "Client", v: "Labour Department, Government of Maharashtra" },
    { k: "Based", v: "Mumbai" },
    { k: "When", v: "May – July 2026" },
  ],
  intro:
    "Two months on the Labour Department's project to fold its scattered portals into one. I worked on three assignments, each bigger than the last.",
  repo: "https://github.com/drachmacollector/kpmg",
  appLogo: "/img/logo-mahabocw.png",
  chapters: [
    {
      n: 1,
      title: "Labour codes",
      body: "For the Inspection Testing portal. India folded 29 central labour laws into four codes; I read all four and pulled out what matters for factory inspections: what gets inspected, how often, what employers owe workers, how machinery is tested. Then I proposed where AI fits, in four parts.",
      list: [
        "Risk scores per factory from past violations, failed tests and accidents",
        "Test reports turned into compliance signals, mapped by PSN",
        "Early warning for factories drifting towards unsafe conditions",
        "Inspector support: past violations and risky machinery on site",
      ],
      listTitle: "A four-part AI framework",
    },
    {
      n: 2,
      title: "CPI validation",
      body: "I mapped how India calculates the Consumer Price Index for industrial workers, agricultural and rural labourers, end to end, in decks and flowcharts. When the team planned a state-level survey app, I owned verification and validation, and proposed six checks.",
      list: [
        "Anomaly detection: flatlined prices, spikes, suspiciously stable series",
        "Cross-shop duplication scores to catch copied data",
        "Collector risk scoring, geo-tagged and timestamped evidence",
        "Unit and specification checks across rounds",
        "OCR on bills and price boards",
        "A digital dwelling profile for rent data",
      ],
      listTitle: "A six-point validation framework",
    },
  ],
  pipelineIntro:
    "For MAHABOCW, the construction workers' welfare board. Workers' children can claim up to ₹1 lakh a year for engineering or medical study. Applicants typed college names however they liked, and consultants were checking more than a lakh applications a year by hand. I built the system that does it instead.",
  pipeline: [
    { t: "Open the claim", tools: "Playwright" },
    { t: "Pick the evidence", tools: "Two-phase triage" },
    { t: "Clean the scans", tools: "PyMuPDF · Pillow" },
    { t: "Read the text", tools: "PaddleOCR" },
    { t: "Pull the fields", tools: "Qwen 2.5 7B" },
    { t: "Find the college", tools: "Gemini · RapidFuzz" },
    { t: "Score it", tools: "Excel out" },
  ],
  shipped:
    "Shipped as a Windows installer, with its own runtime and a desktop app, so the department runs it without us.",
  numbers: [
    { value: 150000, display: "1.5", unit: "lakh", label: "scholarship records verified" },
    { value: 29, display: "29", unit: "laws", label: "read down to four labour codes" },
    { value: 7, display: "7", unit: "stages", label: "from portal to scored Excel" },
    { value: 1, display: "1", unit: "app", label: "handed over to the department" },
  ],
};

export interface Project {
  title: string;
  year: string;
  kind: string;
  body: string;
  stack: string[];
  image: string;
  live?: string;
  code?: string;
  fit?: "cover" | "contain";
  /** Direct link to a Windows installer. */
  download?: string;
  /** Extra screenshots, cycled in the same frame. */
  gallery?: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "Icarus",
    year: "2026",
    kind: "Space-weather dashboard",
    body: "Live NASA DONKI data on a 3D globe, a YOLOv10 model that spots solar anomalies, Bi-GRU networks forecasting the Kp-index, and XGBoost with SMOTE classifying flares from heavily imbalanced data.",
    stack: ["React", "PyTorch", "XGBoost", "YOLOv10", "Three.js", "NASA APIs"],
    image: "/img/proj-icarus.webp",
    live: "https://icarus-solar.vercel.app/",
    code: "https://github.com/drachmacollector/Icarus",
  },
  {
    title: "D.R.I.F.T.",
    year: "2026",
    kind: "Ocean plastics tracker",
    body: "Finds marine macroplastics at sub-pixel scale in Sentinel-2 imagery with a dual-head U-Net, then forecasts where they drift over 72 hours with a Lagrangian physics engine fed by live currents and wind.",
    stack: ["PyTorch", "U-Net", "FastAPI", "Mapbox GL", "Deck.gl", "GSAP"],
    image: "/img/proj-drift-live.webp",
    live: "https://drift-mm.vercel.app/",
  },
  {
    title: "eRTMAC-NWIS",
    year: "2026",
    kind: "Smart India Hackathon, drilling-hazard early warning",
    body: "Built with team PLANNS for an Oil India Limited problem. It turns 1,759 daily drilling reports into a 4,037-node knowledge graph, watches live rig telemetry for anomalies, matches what it sees against past wells, and briefs engineers through a citation-checked LLM. On a real Equinor Volve well it flagged a stuck pipe 106 m, about 44 minutes, early.",
    stack: ["Python", "FastAPI", "NetworkX", "ChromaDB", "Qwen 2.5 72B", "Gemini", "Leaflet"],
    image: "/img/proj-nwis-dash.webp",
    code: "https://github.com/n3ssdub3y/SIH_2026_PLANNS",
  },
  {
    title: "XBar",
    year: "2026",
    kind: "Windows 11 utility",
    body: "A floating, see-through taskbar. Maximised windows get the whole screen, the taskbar becomes two glass pills on top, and pinning, jump lists and the Start menu keep working. No admin rights.",
    stack: ["C#", "Win32", "Windows 11"],
    image: "/img/proj-xbar-panel.webp",
    code: "https://github.com/drachmacollector/XBar",
    download: "https://github.com/drachmacollector/XBar/releases/download/v1.1.0/XBar-Setup-1.1.0.exe",
    fit: "contain",
  },
  {
    title: "Parkify",
    year: "2025",
    kind: "Smart parking",
    body: "Find, reserve and manage parking spots in real time, with booking and management flows on a MySQL backend.",
    stack: ["PHP", "MySQL", "Leaflet.js", "JavaScript"],
    image: "/img/proj-parkify.webp",
    live: "https://parkify.great-site.net/",
    code: "https://github.com/drachmacollector/parkify",
  },
];

export const RESEARCH = {
  title: "Anatomy or Acquisition?",
  body: "An ongoing study of whether fetal ultrasound plane classifiers learn anatomy or shortcuts from the machine that took the scan, with external validation across devices.",
};

export const EXPERIENCE = [
  {
    org: "The Consistent Academy",
    role: "Web Developer Intern, remote",
    when: "Dec 2025 – now",
    body: "Built and run the academy's production platform: courses, a test interface, Razorpay payments and Resend email, for 150+ students.",
    href: "https://theconsistentacademy.in/",
    logo: "/img/logo-tca.webp",
  },
  {
    org: "SneakyPandas",
    role: "Co-founder, web development studio",
    when: "2026 – now",
    body: "A two-person studio with Siddhi Dhoke. We design and build scroll-worthy websites, platforms and motion systems for founders and small businesses.",
    href: "https://sneakypandas.vercel.app/",
    logo: "/img/logo-sneakypandas.svg",
  },
  {
    org: "IIIT Nagpur",
    role: "B.Tech CSE (Artificial Intelligence & Machine Learning)",
    when: "Aug 2024 – now",
    body: "",
    logo: "/img/logo-iiitn.webp",
    href: "https://iiitn.ac.in/",
  },
];

export const MUN = {
  intro:
    "Model UN since school, and competitive debate at college. I have argued for countries in the Security Council, the General Assembly, the Human Rights Council and the WHO, and lately I run the room from the chair.",
  grant: {
    title: "CWMUN New York 2026",
    body: "Awarded a €1,000 grant by Associazione Diplomatici and Change the World Academy to attend as a delegate.",
  },
  chair: [
    { award: "Chairperson", conf: "Yuvaan Youth Conclave", where: "Civic Laws & Liberties, IIIT Nagpur" },
    { award: "Vice Chairperson", conf: "RJMUN 3.0", where: "WHO, RJ International School" },
  ],
  floor: [
    { award: "Best Delegate", conf: "ABMUN", where: "WHO, IIIT Nagpur" },
    { award: "Best Delegate", conf: "GrantMUN 3.0", where: "UNSC, Grant University" },
    { award: "Best Delegate", conf: "PACEMUN 4.0", where: "UNHRC, PACE Jr Science College" },
    { award: "Best Delegate", conf: "VTSMUN 3.0", where: "UNGA, Villa Theresa School" },
    { award: "Best Delegate", conf: "CCSMUN 5.0", where: "UNSC, Christ Church School" },
    { award: "High Commendation", conf: "SymJashn MUN", where: "UNSC, Symbiosis Law School" },
    { award: "Special Mention", conf: "IIITN MUN 3.0", where: "UNGA DISEC, IIIT Nagpur" },
    { award: "Special Mention", conf: "CAPSMUN 3.0", where: "The Zodiac Files, CAPS International" },
    { award: "1st place", conf: "Infacto 4.0", where: "Oxford-style debate, IIIT Nagpur" },
  ],
  photos: [
    { src: "/img/mun-chair.webp", alt: "Nakul chairing the Civic Laws committee at Yuvaan" },
    { src: "/img/mun-floor.webp", alt: "Nakul on his feet in committee at ABMUN" },
    { src: "/img/mun-podium.webp", alt: "Nakul speaking at the podium at Yuvaan" },
  ],
  resume: "https://canva.link/1df4cck719q2sk7",
};

export const RENDERS = [
  { title: "Space Station", file: "space station.mp4", still: "/img/still-space-station.webp", badge: "Render Riot 2025 winner" },
  { title: "Cyberpunk street", file: "cyberpunk street.mp4", still: "/img/still-cyberpunk-street.webp", badge: "Kurukshetra (Viewport) winner" },
  { title: "The Storm", file: "stormy ocean boat.mp4", still: "/img/still-stormy-ocean-boat.webp" },
  { title: "Chanel", file: "chanel perfume.mp4", still: "/img/still-chanel-perfume.webp" },
  { title: "Heart", file: "heart.mp4", still: "/img/still-heart.webp" },
  { title: "Molten gold", file: "melting gold fluid simulation.mp4", still: "/img/still-melting-gold.webp" },
  { title: "Wrecking ball", file: "wrecking ball.mp4", still: "/img/still-wrecking-ball.webp" },
  { title: "Terrazzo chair", file: "chair.png", still: "/img/still-chair.webp" },
  { title: "Fluid", file: "infinite fluid.mp4", still: "/img/still-infinite-fluid.webp" },
  { title: "Fireball", file: "fireball.mp4", still: "/img/still-fireball.webp" },
  { title: "Donuts", file: "donut.mp4", still: "/img/still-donut.webp" },
];
