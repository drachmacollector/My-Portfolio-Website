import React, { useState } from 'react';
import Netflix from '../components/Netflix';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/Projects';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import CanvasCursor from '../components/CanvasCursor';

const Index: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroEnd = () => {
    setShowIntro(false);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* VIDEO INTRO */}
      {showIntro && <Netflix onFinish={handleIntroEnd} />}

      {/* MAIN PAGE (shown only after intro) */}
      {!showIntro && (
        <>
          <div className="fixed inset-0 grid-bg opacity-20" />
          <ParticleBackground />
          <CanvasCursor />
          <Navbar />
          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
};

export default Index;
