
import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
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
      <ParticleBackground />
      
      {/* Mouse Follow Glow */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-0 transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(255, 138, 101, 0.03) 0%, transparent 70%)'
        }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Floating Shapes */}
      <div className="fixed top-20 right-20 w-32 h-32 opacity-10 animate-rotate-slow">
        <div className="w-full h-full border border-firebase-orange rounded-lg transform rotate-45" />
      </div>
      <div className="fixed bottom-20 left-20 w-24 h-24 opacity-10 animate-float">
        <div className="w-full h-full border border-firebase-purple rounded-full" />
      </div>
    </div>
  );
};

export default Index;
