
import React, { useState, useEffect } from 'react';
import { ArrowDown, Code, Coffee } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Nakul";

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

      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="text-left z-10">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 font-space">
              <span className="glow-text">
                {text}
                {!isTypingComplete && <span className="animate-blink">|</span>}
              </span>
            </h1>
            <div className="h-2 bg-gradient-to-r from-firebase-orange via-firebase-purple to-firebase-pink rounded-full max-w-md animate-glow-pulse" />
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in opacity-0 animation-delay-3000" style={{animationDelay: '3s', animationFillMode: 'forwards'}}>
            Hi, I'm Nakul, a software developer
          </p>

          {/* Mission Statement */}
          <p className="text-lg text-gray-400 mb-12 max-w-2xl animate-fade-in opacity-0" style={{animationDelay: '4s', animationFillMode: 'forwards'}}>
            Crafting immersive digital experiences with cutting-edge technology,
            one line of code at a time. Building the future, today.
          </p>

          {/* Stats */}
          <div className="flex space-x-8 mb-12 animate-fade-in opacity-0" style={{animationDelay: '5s', animationFillMode: 'forwards'}}>
            <div className="text-center">
              <div className="flex items-center mb-2">
                <Code className="w-6 h-6 text-firebase-orange mr-2" />
                <span className="text-2xl font-bold text-firebase-orange">50+</span>
              </div>
              <p className="text-sm text-gray-400">Projects Built</p>
            </div>
            <div className="text-center">
              <div className="flex items-center mb-2">
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
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex justify-center lg:justify-end z-10">
          <div className="relative">
            {/* Animated circular frame */}
            <div className="relative w-80 h-80 rounded-full overflow-hidden glass-card animate-float">
              {/* Glowing border animation */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-firebase-orange via-firebase-purple to-firebase-pink opacity-75 animate-glow-pulse" />
              <div className="absolute inset-2 rounded-full overflow-hidden bg-black">
                <img 
                  src="/lovable-uploads/84e213a0-77be-49dd-9cae-416761d61a57.png"
                  alt="Nakul - Software Developer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
            
            {/* Floating decorative elements around the image */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-firebase-orange rounded-full opacity-60 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-firebase-purple rounded-full opacity-60 animate-pulse delay-1000" />
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-firebase-pink rounded-full opacity-60 animate-pulse delay-2000" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-firebase-orange" />
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
