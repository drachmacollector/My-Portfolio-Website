
import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Particles from '../components/ParticleBackground';
import CanvasCursor from '../components/CanvasCursor';
import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/magicui/cool-mode";
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 grid-bg opacity-20" />

      <ParticleBackground></ParticleBackground>
      
      {/* Canvas Cursor Effect */}
      <CanvasCursor />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>

    {/* <div className="relative justify-center">
      <CoolMode>
        <Button>Click Me!</Button>
      </CoolMode>
    </div> */}

    </div>
  );
};

export default Index;
