
import React from 'react';
import { Code2, Database, Globe, Smartphone, Zap, Brain } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { icon: Code2, name: 'Frontend Dev', level: 95, color: 'firebase-orange' }
  ];

  const technologies = [
    'HTML', 'CSS', 'PHP','MySQL','React','TypeScript','Node.js','Python','MongoDB','Next.js','Tailwind CSS',
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            About <span className="text-firebase-red">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-firebase-orange to-firebase-purple mx-auto mb-8" />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
