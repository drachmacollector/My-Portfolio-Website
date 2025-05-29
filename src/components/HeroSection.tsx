
import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, FileText, Mail } from 'lucide-react';
import RotatingText from './RotatingText';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Hi, I'm Nakul";
  const developerTitles = ["software developer", "web developer", "frontend developer", "3D Animator"];

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

  const socialButtons = [
    {
      name: 'GitHub',
      url: 'https://github.com/drachmacollector',
      icon: Github,
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nakul-bhadade-b7ba06313/',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Read.cv',
      url: '#',
      icon: FileText,
      color: 'from-purple-600 to-purple-800'
    },
    {
      name: 'Email',
      url: 'mailto:nakulccs@gmail.com',
      icon: Mail,
      color: 'from-firebase-orange to-firebase-red'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-firebase-orange rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-neon-red rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-firebase-pink rounded-full animate-pulse delay-2000" />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-firebase-cyan rounded-full animate-pulse delay-500" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="text-left z-10">
          {/* Main Title - Increased size */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 font-space">
              <span className="glow-text">
                {text}
                {!isTypingComplete && <span className="animate-blink">|</span>}
              </span>
            </h1>
            <div className="h-4 bg-gradient-to-r from-firebase-orange via-neon-red to-firebase-pink rounded-full max-w-2xl opacity-80" />
          </div>

          {/* Subtitle with rotating text - Increased size */}
          <div className="mb-8 animate-fade-in opacity-0 h-24 overflow-hidden" style={{animationDelay: '3s', animationFillMode: 'forwards'}}>
            <p className="text-4xl md:text-5xl text-gray-300">
              A{' '}
              <RotatingText 
                words={developerTitles}
                className="text-firebase-orange font-semibold h-20"
              />
            </p>
          </div>

          {/* Mission Statement */}
          <p className="text-xl text-gray-400 mb-12 max-w-2xl animate-fade-in opacity-0" style={{animationDelay: '4s', animationFillMode: 'forwards'}}>
            Crafting immersive digital experiences with cutting-edge technology,
            one line of code at a time. Building the future, today.
          </p>

          {/* Social Buttons */}
          <div className="grid grid-cols-4 gap-4 mb-8 animate-fade-in opacity-0" style={{animationDelay: '4.5s', animationFillMode: 'forwards'}}>
            {socialButtons.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-button bg-gradient-to-br ${social.color} group aspect-square`}
                >
                  <Icon className="w-6 h-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
                </a>
              );
            })}
          </div>

          {/* CTA Button with enhanced 3D effect */}
          <button
            onClick={scrollToAbout}
            className="explore-button animate-fade-in opacity-0"
            style={{animationDelay: '5s', animationFillMode: 'forwards'}}
          >
            <span className="relative z-10">Explore More</span>
          </button>
        </div>

        {/* Right Side - Enhanced Profile Image - Increased size */}
        <div className="flex justify-center lg:justify-end z-10">
          <div className="relative">
            {/* Enhanced animated circular frame - Increased size */}
            <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden glass-card animate-float">
              {/* Multiple glowing border layers for sci-fi effect with enhanced animations */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-firebase-orange via-neon-red to-firebase-pink opacity-75 animate-neon-pulse" />
              <div className="absolute inset-1 rounded-full bg-gradient-to-r from-neon-red via-firebase-purple to-firebase-orange opacity-50 animate-glow-pulse" />
              <div className="absolute inset-0 rounded-full animate-rotate-slow">
                <div className="w-full h-full rounded-full border-2 border-neon-red/30 border-dashed" />
              </div>
              <div className="absolute inset-6 rounded-full overflow-hidden bg-black">
                <img 
                  src="/lovable-uploads/dedae507-a4f3-4e4d-aa46-e3d3397ebad5.png"
                  alt="Nakul - Software Developer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              {/* Enhanced orbiting elements for sci-fi feel */}
              <div className="absolute inset-0 animate-orbit">
                <div className="w-3 h-3 bg-neon-red rounded-full shadow-lg shadow-neon-red/50" />
              </div>
              <div className="absolute inset-0 animate-orbit" style={{animationDelay: '-4s', animationDirection: 'reverse'}}>
                <div className="w-2 h-2 bg-firebase-orange rounded-full shadow-lg shadow-firebase-orange/50" />
              </div>
              <div className="absolute inset-0 animate-orbit" style={{animationDelay: '-2s'}}>
                <div className="w-1.5 h-1.5 bg-neon-red-bright rounded-full shadow-lg shadow-neon-red-bright/50" />
              </div>
            </div>
            
            {/* Enhanced floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-red rounded-full opacity-60 animate-pulse shadow-lg shadow-neon-red/50" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-firebase-purple rounded-full opacity-60 animate-pulse delay-1000 shadow-lg shadow-firebase-purple/50" />
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-firebase-pink rounded-full opacity-60 animate-pulse delay-2000 shadow-lg shadow-firebase-pink/50" />
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
