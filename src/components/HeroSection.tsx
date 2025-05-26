
import React, { useState, useEffect } from 'react';
import { ArrowDown, Code, Coffee } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Alex Chen";

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
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-firebase-orange rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-firebase-purple rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-firebase-pink rounded-full animate-pulse delay-2000" />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-firebase-cyan rounded-full animate-pulse delay-500" />
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 font-space">
            <span className="glow-text">
              {text}
              {!isTypingComplete && <span className="animate-blink">|</span>}
            </span>
          </h1>
          <div className="h-2 bg-gradient-to-r from-firebase-orange via-firebase-purple to-firebase-pink rounded-full max-w-md mx-auto animate-glow-pulse" />
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in opacity-0 animation-delay-3000" style={{animationDelay: '3s', animationFillMode: 'forwards'}}>
          Full Stack Developer & Digital Architect
        </p>

        {/* Mission Statement */}
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in opacity-0" style={{animationDelay: '4s', animationFillMode: 'forwards'}}>
          Crafting immersive digital experiences with cutting-edge technology,
          one line of code at a time. Building the future, today.
        </p>

        {/* Stats */}
        <div className="flex justify-center space-x-8 mb-12 animate-fade-in opacity-0" style={{animationDelay: '5s', animationFillMode: 'forwards'}}>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Code className="w-6 h-6 text-firebase-orange mr-2" />
              <span className="text-2xl font-bold text-firebase-orange">50+</span>
            </div>
            <p className="text-sm text-gray-400">Projects Built</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Coffee className="w-6 h-6 text-firebase-purple mr-2" />
              <span className="text-2xl font-bold text-firebase-purple">1000+</span>
            </div>
            <p className="text-sm text-gray-400">Cups of Coffee</p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToAbout}
          className="group relative px-8 py-4 bg-gradient-to-r from-firebase-orange to-firebase-red rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-firebase-orange/25 animate-fade-in opacity-0"
          style={{animationDelay: '6s', animationFillMode: 'forwards'}}
        >
          <span className="relative z-10">Explore My Universe</span>
          <div className="absolute inset-0 bg-gradient-to-r from-firebase-red to-firebase-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-firebase-orange" />
        </div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute top-20 left-10 opacity-20 font-mono text-firebase-orange animate-float">
        <span>&lt;developer&gt;</span>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 font-mono text-firebase-purple animate-float" style={{animationDelay: '1s'}}>
        <span>console.log('Hello World');</span>
      </div>
    </section>
  );
};

export default HeroSection;
