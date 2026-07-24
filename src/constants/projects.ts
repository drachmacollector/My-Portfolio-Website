export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "🚗 Parkify - Smart Parking",
    description:
      "A modern smart parking system designed to streamline the process of finding and booking parking spots. It helps users locate, reserve, and manage parking efficiently in real-time.",
    image: "/projects/Parkify.png",
    tech: ["PHP", "MySQL", "Javascript", "HTML", "CSS"],
    githubUrl: "https://github.com/drachmacollector/parkify",
    liveUrl: "https://parkify.great-site.net/",
  },
  {
    id: 2,
    title: "🌎 Icarus",
    description:
      "A space-weather dashboard that visualises phenomena like  Solar Flares, Coronal Mass Ejections CMEs and Auroras on an interactive 3D globe using the NASA DONKI APIs and NOAA Kp‑index forecasts",
    image: "/projects/icarus.png",
    tech: ["React", "NASA APIs", "Three Js", "Javascript", "CSS"],
    githubUrl: "https://github.com/drachmacollector/Icarus",
    liveUrl: "https://icarus-solar.vercel.app/",
  },
  {
    id: 3,
    title: "🌊 FloatChat",
    description:
      "An AI-driven chatbot that ingests ARGO NetCDF oceanographic datasets, converts them into structured and vectorized formats, and enables natural language querying through an LLM-powered RAG pipeline",
    image: "/projects/FloatChat.png",
    tech: ["Streamlit", "Python", "React", "PostgreSQL", "ChromaDB", "LangChain", "OLLaMA"],
    githubUrl: "https://github.com/drachmacollector/Aquasense",
    liveUrl: "https://aquasense-seven.vercel.app/",
  },
  {
    id: 4,
    title: "🪐 Kepler AI",
    description:
      "An AI powered dashboard that predicts possible exoplanets & their characteristics based on raw astronomical data as detected by the Kepler Space Telescope",
    image: "/projects/KeplerAI.png",
    tech: ["Python", "Scikit-Learn", "React", "FastAPI", "PyDantic", "Render"],
    githubUrl: "https://github.com/drachmacollector/Kepler-AI",
    liveUrl: "https://kepler-ai-koi.vercel.app/",
  },
  {
    id: 5,
    title: "The Consistent Academy",
    description:
      "An educational platform built for The Consistent Academy featuring various IELTS & English speaking courses alongwith a seamless test interface",
    image: "/projects/TCA.png",
    tech: ["React", "Firebase", "Razorpay"],
    githubUrl: "https://github.com/sidii1/The-Consistent-Academy",
    liveUrl: "https://theconsistentacademy.in/",
  },
  {
    id: 6,
    title: "👣 Kadam",
    description:
      "A pan-India networking site for NGOs & their supporters that allows them to connect with each other and share information about their activities as well as make donations",
    image: "/projects/Kadam.png",
    tech: ["React", "Firebase", "Cloudinary"],
    githubUrl: "https://github.com/n3ssdub3y/Kadam",
    liveUrl: "https://kadam-ngo.vercel.app/",
  },
];
