import React, { useState } from 'react';
import Netflix from '../components/Netflix';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero Section/HeroSection';
import AboutSection from '../components/About Me/AboutSection';
import ProjectsSection from '../components/Projects/Projects';
import ContactSection from '../components/Contact Me/ContactSection';
import Footer from '../components/Footer/Footer';
import CanvasCursor from '../components/CanvasCursor';
import LetterGlitch from '@/blocks/Backgrounds/LetterGlitch/LetterGlitch';
import FluidCursor from '@/components/FluidCursor';
import { useIsMobile } from '@/hooks/use-mobile';

const Index: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const isMobile = useIsMobile(); 

  const handleIntroEnd = () => {
    setShowIntro(false);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {showIntro && <Netflix onFinish={handleIntroEnd} />}

      <>
        <div className="fixed inset-0 z-1 opacity-20">
          <LetterGlitch
            glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
            glitchSpeed={50}
            centerVignette
            outerVignette
            smooth
          />
        </div>
        {/* {!isMobile && <CanvasCursor />} */}
        {!isMobile && <FluidCursor />}

        <Navbar />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </main>
      </>
    </div>
  );
};


export default Index;
