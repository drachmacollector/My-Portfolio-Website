import React from "react";

const experiences = [
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
      "Consulted for the Labor Department of the Government of Maharashtra to strategize the integration of Artificial Intelligence across critical public services",
      "Streamlined operations for a state-wide integrated portal, directly optimizing Consumer Price Index (CPI) validation workflows and data management architectures"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-firebase-red">Experience</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="w-full bg-black/100 border border-white/10 rounded-2xl p-8 
              shadow-lg flex flex-col md:flex-row justify-between items-start gap-6 relative"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                <div className="text-firebase-purple font-medium text-lg mb-4">
                  {exp.company}
                </div>
                <ul className="list-disc list-inside space-y-2 text-white/80">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="leading-relaxed">
                      <span className="opacity-90">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start md:items-end md:text-right shrink-0 mt-2 md:mt-0">
                <span className="text-white/60 font-medium whitespace-nowrap mb-1">
                  {exp.date}
                </span>
                <span className="text-sm px-3 py-1 bg-white/5 rounded-full text-white/50">
                  {exp.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
