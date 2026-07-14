import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/sections/hero/HeroSection";
import AboutSection from "@/sections/about/AboutSection";
import Experience from "@/sections/experience/Experience";
import ProjectsSection from "@/sections/projects/ProjectsSection";
import ContactSection from "@/sections/contact/ContactSection";
import CanvasCursor from "@/components/effects/CanvasCursor";
import LetterGlitch from "@/components/effects/LetterGlitch";
import { useIsMobile } from "@/hooks/use-mobile";

import { initSmoothScroll } from "@/animations/smooth-scroll";

const Index: React.FC = () => {
  const isMobile = useIsMobile();

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const cleanup = initSmoothScroll();
    return cleanup;
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">


      {!isMobile && (
        <div className="fixed inset-0 z-1 opacity-20">
          <LetterGlitch
            glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
            glitchSpeed={50}
            centerVignette
            outerVignette
            smooth
          />
        </div>
      )}
      {!isMobile && <CanvasCursor />}

      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <Experience />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
