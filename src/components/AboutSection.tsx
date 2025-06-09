
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from './ui/dialog';
import LocationCard from './LocationCard';
import Bento from './Bento'

const AboutSection = () => {

  return (
    <section id="about" className="py-20 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-firebase-red">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-firebase-orange to-firebase-purple mx-auto mb-8" />
          
          {/* SVG Connection Lines */}
          <svg 
            className="absolute top-full left-1/2 transform -translate-x-1/2 pointer-events-none z-10" 
            width="800" 
            height="400" 
            viewBox="0 0 800 400"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF5F1F" />
                <stop offset="100%" stopColor="#BC13FE" />
              </linearGradient>
            </defs>
            
            {/* Main connecting line */}
            <path
              d="M 400 20 Q 400 100 320 180 Q 280 220 320 260 Q 360 300 400 340"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-[draw_3s_ease-in-out_infinite] opacity-60"
              strokeDasharray="500"
              strokeDashoffset="500"
            />
            
            {/* Secondary decorative line */}
            <path
              d="M 400 20 Q 400 120 480 200 Q 520 240 480 280 Q 440 320 400 340"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              fill="none"
              className="animate-[draw_3s_ease-in-out_infinite_0.5s] opacity-40"
              strokeDasharray="400"
              strokeDashoffset="400"
            />
          </svg>
        </div>

        <Bento />
      </div>
    </section>
  );
};

export default AboutSection;
