
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import RotatingText from './RotatingText';
import { AuroraText } from "@/components/magicui/aurora-text";
import Buttons from './buttons';
import Profile from './Profile'

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

        <Profile></Profile>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-firebase-orange" />
      </div>
    </section>
  );
};

export default HeroSection;
