export interface Experience {
  role: string;
  company: string;
  date: string;
  type: string;
  responsibilities: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    role: "Web Developer Intern",
    company: "The Consistent Academy",
    date: "Dec. 2025 – Present",
    type: "Remote",
    responsibilities: [
      "Engineered and deployed a production-grade React + Firebase platform & test interface serving 100+ users.",
      "Integrated Razorpay for payments & robust email communication via Resend."
    ]
  },
  {
    role: "AI Consultant Intern",
    company: "KPMG India — G&PS DGA Team",
    date: "May 2026 – July 2026",
    type: "On-site",
    responsibilities: [
      "Consulted for the Labour Department, Government of Maharashtra, on AI strategy for a state-wide portal consolidation spanning inspections & CPI validation & other critical public services",
      "Architected and deployed a production IDP pipeline (Playwright, PaddleOCR, Ollama Qwen 2.5 7B, grounded web verification via Gemini + Openrouter) that verified ∼1.5 lakh MahaBOCW scholarship records, eliminating manual verification and shipped as a standalone Windows app for independent department use."
    ]
  }
];
