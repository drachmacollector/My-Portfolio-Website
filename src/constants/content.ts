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
  { id: "kpmg", label: "KPMG" },
  { id: "method", label: "Method" },
  { id: "work", label: "Work" },
  { id: "record", label: "Record" },
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
  "सत्य",
  "1.5 lakh records verified",
  "कर्म",
  "AI consultant",
  "धैर्य",
  "KPMG · Government & Public Services",
  "मार्ग",
];
export const TAPE_B = [
  "IIIT Nagpur",
  "शिक्षण",
  "CSE · AI & ML",
  "वाद",
  "Debater",
  "कला",
  "3D artist",
  "नागपूर",
];

export const ABOUT = {
  // Red spans are marked with [[ ]]
  statement:
    "I study computer science at IIIT Nagpur and I like problems that arrive as [[a pile of paperwork]]. I work out what the client actually needs, [[build the system]] that does it, and hand it over so it [[runs without me]].",
  facts: [
    { k: "Studying", v: "B.Tech CSE (AI & ML), IIIT Nagpur, since 2024" },
    { k: "Last role", v: "AI Consultant Intern, KPMG India" },
    { k: "Also", v: "Debater, MUN delegate, 3D artist" },
  ],
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
    "Two months inside a state government's largest consolidation project: folding the Labour Department's scattered portals into one. I worked on three assignments, each bigger than the last.",
  chapters: [
    {
      n: 1,
      word: "कायदा",
      title: "Labour codes",
      sub: "Inspection Testing portal",
      body: "India folded 29 central labour laws into four codes. I read all four and pulled out what matters for factory inspections: what gets inspected, how often, what employers owe workers, how machinery is tested. Then I proposed where AI fits.",
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
      word: "किंमत",
      title: "CPI validation",
      sub: "Consumer Price Index survey",
      body: "I mapped how India calculates CPI-IW, CPI-AL and CPI-RL, end to end, in decks and flowcharts. When the team planned a state-level survey app, I owned the verification and validation stage.",
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
    {
      n: 3,
      word: "प्रणाली",
      title: "Scholarship pipeline",
      sub: "MAHABOCW, the construction workers' welfare board",
      body: "Children of registered construction workers can claim up to ₹1 lakh a year for engineering or medical study. About 1 lakh engineering and 30,000 medical applications had college names typed however applicants liked, and consultants were checking each one by hand. I built the system that does it instead.",
      list: [],
      listTitle: "",
    },
  ],
  pipeline: [
    {
      t: "Open the claim",
      d: "Playwright works through the board's portal, which has no API, and collects every uploaded document.",
      tools: "Playwright · BeautifulSoup",
    },
    {
      t: "Pick the evidence",
      d: "Bonafide certificate and college ID first. The other documents are read only when those two fall short.",
      tools: "Two-phase triage",
    },
    {
      t: "Clean the scans",
      d: "Retry downloads, drop duplicates by SHA-256, render PDFs at 300 DPI and fix rotation by testing four angles.",
      tools: "PyMuPDF · Pillow",
    },
    {
      t: "Read the text",
      d: "OCR on the GPU, with confidence kept for every page.",
      tools: "PaddleOCR",
    },
    {
      t: "Pull the fields",
      d: "A local model turns noisy text into student, year, college and address, fixing common OCR mistakes on the way.",
      tools: "Qwen 2.5 7B · Ollama",
    },
    {
      t: "Find the real college",
      d: "A fuzzy cache first. Otherwise a search-grounded model resolves the official name and address, with a fallback provider behind it.",
      tools: "Gemini + Google Search · OpenRouter · RapidFuzz",
    },
    {
      t: "Score and hand back",
      d: "OCR confidence 30, web verification 40, cross-document agreement 30. Anything under 80 goes to a person. Every claim is saved to Excel as it finishes.",
      tools: "Deterministic scoring · openpyxl",
    },
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

export const METHOD = [
  {
    word: "वाचन",
    title: "Read everything",
    body: "The law, the data and the people, before any code. At KPMG that meant four labour codes and a CPI manual.",
  },
  {
    word: "मांडणी",
    title: "Frame it",
    body: "Turn a vague ask into a framework someone can approve: four parts for inspections, six for CPI.",
  },
  {
    word: "बांधणी",
    title: "Build it",
    body: "Then build the thing for real: browser automation, OCR, local and cloud models, scoring that a person can audit.",
  },
  {
    word: "सोपवा",
    title: "Hand it over",
    body: "Package it so the client runs it alone. The pipeline left as an installer, not a notebook.",
  },
];

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
    title: "XBar",
    year: "2026",
    kind: "Windows 11 utility",
    body: "A floating, see-through taskbar. Maximised windows get the whole screen, the taskbar becomes two glass pills on top, and pinning, jump lists and the Start menu keep working. No admin rights.",
    stack: ["C#", "Win32", "Windows 11"],
    image: "/img/proj-xbar-panel.webp",
    code: "https://github.com/drachmacollector/XBar",
    fit: "contain",
  },
  {
    title: "Kepler AI",
    year: "2026",
    kind: "Exoplanet classifier",
    body: "Predicts likely exoplanets and their characteristics from raw Kepler Space Telescope observations, served through a FastAPI model behind a React dashboard.",
    stack: ["Python", "scikit-learn", "FastAPI", "Pydantic", "React"],
    image: "/img/proj-keplerai.webp",
    live: "https://kepler-ai-koi.vercel.app/",
    code: "https://github.com/drachmacollector/Kepler-AI",
  },
  {
    title: "FloatChat",
    year: "2025",
    kind: "Ocean data chatbot",
    body: "Ingests ARGO NetCDF ocean datasets, structures and vectorises them, and answers questions in plain language through a RAG pipeline. Built for the SIH 2025 internal round.",
    stack: ["Python", "LangChain", "ChromaDB", "PostgreSQL", "Ollama", "React"],
    image: "/img/proj-floatchat.webp",
    live: "https://aquasense-seven.vercel.app/",
    code: "https://github.com/drachmacollector/Aquasense",
  },
  {
    title: "The Consistent Academy",
    year: "2025",
    kind: "Production EdTech platform",
    body: "Courses, a test interface, Razorpay payments and Resend email for an IELTS and spoken-English academy. In production with 150+ users.",
    stack: ["React", "Firebase", "Cloudinary", "Razorpay", "Resend"],
    image: "/img/proj-tca.webp",
    live: "https://theconsistentacademy.in/",
    code: "https://github.com/sidii1/The-Consistent-Academy",
  },
  {
    title: "Kadam",
    year: "2025",
    kind: "NGO network",
    body: "A pan-India network where NGOs and their supporters find each other, share what they are doing and take donations.",
    stack: ["React", "Firebase", "Cloudinary"],
    image: "/img/proj-kadam.webp",
    live: "https://kadam-ngo.vercel.app/",
    code: "https://github.com/n3ssdub3y/Kadam",
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
    org: "KPMG India",
    role: "AI Consultant Intern, Government & Public Services",
    when: "May – Jul 2026",
    href: "#kpmg",
  },
  {
    org: "The Consistent Academy",
    role: "Web Developer Intern, remote",
    when: "Dec 2025 – now",
    href: "https://theconsistentacademy.in/",
  },
  {
    org: "IIIT Nagpur",
    role: "B.Tech CSE (Artificial Intelligence & Machine Learning)",
    when: "Aug 2024 – now",
  },
];

export const HONOURS = [
  { what: "Render Riot", note: "Two-time winner, national 3D animation competition", place: "1st ×2" },
  { what: "Infacto 4.0", note: "National debate competition", place: "1st" },
  { what: "Healthy Headspace Hackathon", note: "Hackathon", place: "1st" },
  { what: "AstroHack 2025", note: "Hackathon", place: "2nd" },
  { what: "Krafton Game Dev Hackathon", note: "IIT Bombay E-Summit 2025", place: "4th" },
  { what: "CWMUN New York 2026", note: "€1,000 grant from Associazione Diplomatici & Change the World Academy", place: "Grant" },
  { what: "Model UN", note: "Several Best Delegate and High Commendation awards", place: "Awards" },
];

export const RENDERS = [
  { title: "Low orbit", file: "space station.mp4", still: "/img/still-space-station.webp" },
  { title: "Neon street", file: "cyberpunk street.mp4", still: "/img/still-cyberpunk-street.webp" },
  { title: "Storm", file: "stormy ocean boat.mp4", still: "/img/still-stormy-ocean-boat.webp" },
  { title: "No. 5", file: "chanel perfume.mp4", still: "/img/still-chanel-perfume.webp" },
  { title: "Heart", file: "heart.mp4", still: "/img/still-heart.webp" },
  { title: "Molten gold", file: "melting gold fluid simulation.mp4", still: "/img/still-melting-gold.webp" },
  { title: "Wrecking ball", file: "wrecking ball.mp4", still: "/img/still-wrecking-ball.webp" },
  { title: "Terrazzo chair", file: "chair.png", still: "/img/still-chair.webp" },
  { title: "Fluid", file: "infinite fluid.mp4", still: "/img/still-infinite-fluid.webp" },
  { title: "Fireball", file: "fireball.mp4", still: "/img/still-fireball.webp" },
  { title: "Donuts", file: "donut.mp4", still: "/img/still-donut.webp" },
];
