
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import RotatingText from './RotatingText';
import { AuroraText } from "@/components/magicui/aurora-text";
import Buttons from './buttons';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Hi, I'm Nakul";
  const developerTitles = ["software developer", "3D Animator", "web developer", "frontend developer"];

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Split the text to apply AuroraText only to "Nakul"
  const renderTitle = () => {
    if (text.length <= 7) {
      // Still typing "Hi, I'm "
      return (
        <span>
          {text}
          {!isTypingComplete && <span className="animate-blink">|</span>}
        </span>
      );
    } else {
      // Typing or completed "Nakul"
      const introText = "Hi, I'm ";
      const nakulText = text.slice(7); // Everything after "Hi, I'm "
      
      return (
        <span>
          {introText}
          <AuroraText className="text-6xl md:text-7xl">
            {nakulText}
          </AuroraText>
          {!isTypingComplete && <span className="animate-blink">|</span>}
        </span>
      );
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">

      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="text-left z-10">
          {/* Main Title - Increased size */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-space">
              {renderTitle()}
            </h1>
            <div className="h-2 bg-gradient-to-r from-firebase-orange via-neon-red to-firebase-pink rounded-full max-w-lg opacity-80" />
          </div>

          {/* Subtitle with rotating text - Increased size */}
          <div className="mb-8 animate-fade-in opacity-0 h-20 overflow-hidden" style={{animationDelay: '2s', animationFillMode: 'forwards'}}>
            <p className="text-3xl md:text-4xl text-gray-300">
              A{' '}
              <RotatingText 
                words={developerTitles}
                className="text-firebase-orange font-semibold h-16"
              />
            </p>
          </div>

          {/* Mission Statement */}
          <p className="text-lg text-gray-400 mb-12 max-w-2xl animate-fade-in opacity-0" style={{animationDelay: '3s', animationFillMode: 'forwards'}}>
            Crafting immersive digital experiences with cutting-edge technology,
            one line of code at a time. Building the future, today.
          </p>

          <Buttons></Buttons>

        </div>

        {/* Right Side - Enhanced Profile Image - Increased size */}
        <div className="flex justify-center lg:justify-end z-10">
          <div className="relative">
            {/* Enhanced animated circular frame - Increased size */}
            <div className="relative w-96 h-96 rounded-full glass-card animate-float">
              {/* Multiple glowing border layers for sci-fi effect with enhanced animations */}
              {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-firebase-orange via-neon-red to-firebase-pink opacity-75 animate-neon-pulse" />
              <div className="absolute inset-1 rounded-full bg-gradient-to-r from-neon-red via-firebase-purple to-firebase-orange opacity-50 animate-glow-pulse" /> */}
              <div className="absolute inset-0 rounded-full animate-rotate-slow">
                <div className="w-full h-full rounded-full border-4 border-neon-red/60 border-dashed" />
              </div>
              <div className="absolute inset-4 rounded-full overflow-hidden bg-black">
                <img 
                  src="/lovable-uploads/dedae507-a4f3-4e4d-aa46-e3d3397ebad5.png"
                  alt="Nakul - Software Developer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              {/* Enhanced orbiting elements for sci-fi feel */}
              <div className="absolute inset-0 animate-orbit">
                <div className="w-3.5 h-3.5 bg-neon-red rounded-full shadow-lg shadow-neon-red/50" />
              </div>
              <div className="absolute inset-0 animate-orbit" style={{animationDelay: '-4s', animationDirection: 'reverse'}}>
                <div className="w-2.5 h-2.5 bg-firebase-orange rounded-full shadow-lg shadow-firebase-orange/50" />
              </div>
              <div className="absolute inset-0 animate-orbit" style={{animationDelay: '-2s'}}>
                <div className="w-1.5 h-1.5 bg-neon-red-bright rounded-full shadow-lg shadow-neon-red-bright/50" />
              </div>
            </div>
            
            {/* Enhanced floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-red rounded-full 
            opacity-60 animate-pulse shadow-lg shadow-neon-red/50" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-firebase-purple rounded-full 
            opacity-60 animate-pulse delay-1000 shadow-lg shadow-firebase-purple/50" />
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-firebase-pink rounded-full 
            opacity-60 animate-pulse delay-2000 shadow-lg shadow-firebase-pink/50" />
            
            <div className="absolute -top-20 right-1/3 w-2 h-2 bg-neon-red rounded-full animate-pulse" />
            <div className="absolute -bottom-1/4 left-1/2 w-2 h-2 bg-firebase-pink rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 w-2 h-2 bg-firebase-cyan rounded-full animate-pulse" />

            {/* Floating Shapes The circle and the square*/}
              <div className="absolute bottom-100 right-1 w-24 h-24 opacity-90 animate-rotate-slow">
                <div className="w-full h-full border border-firebase-orange rounded-lg transform rotate-45 animate-float" />
              </div>
              <div className="absolute -top-10 -right-12 w-24 h-24 opacity-90 animate-float">
                <div className="w-full h-full border border-firebase-purple rounded-full" />
              </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-firebase-orange" />
      </div>
    </section>
  );
};

export default HeroSection;
