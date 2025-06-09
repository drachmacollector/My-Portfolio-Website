
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
          <div className="w-24 h-1 bg-gradient-to-r from-firebase-orange to-firebase-purple mx-auto mb-8 relative" />
          
          {/* SVG Connection Lines */}
          <svg 
            className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full h-64 pointer-events-none z-10"
            viewBox="0 0 800 200"
            fill="none"
          >
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF5F1F" />
                <stop offset="100%" stopColor="#BC13FE" />
              </linearGradient>
            </defs>
            
            {/* Left connection line */}
            <path
              d="M 350 20 Q 300 60 250 120 Q 200 160 150 180"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-draw-line"
              style={{
                strokeDasharray: '200',
                strokeDashoffset: '200',
                animation: 'drawLine 2s ease-in-out 0.5s forwards'
              }}
            />
            
            {/* Right connection line */}
            <path
              d="M 450 20 Q 500 60 550 120 Q 600 160 650 180"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-draw-line"
              style={{
                strokeDasharray: '200',
                strokeDashoffset: '200',
                animation: 'drawLine 2s ease-in-out 0.7s forwards'
              }}
            />
            
            {/* Center connection line */}
            <path
              d="M 400 20 Q 400 80 400 180"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-draw-line"
              style={{
                strokeDasharray: '160',
                strokeDashoffset: '160',
                animation: 'drawLine 2s ease-in-out 0.3s forwards'
              }}
            />
          </svg>
        </div>

        <Bento></Bento>

      </div>
    </section>
  );
};

export default AboutSection;
