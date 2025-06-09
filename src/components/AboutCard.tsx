
import React from 'react';

const AboutCard = () => {
  return (
    <div className="w-full h-full bg-black/30 rounded-2xl 
    shadow-lg transition transform duration-300 hover:scale-105 
    hover:drop-shadow-[0_0_10px_rgba(100,200,255,0.25)] p-6 flex flex-col justify-center
    relative overflow-hidden">
      
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-firebase-orange to-firebase-purple">
        <div className="w-full h-full bg-black/30 rounded-2xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <p className="text-white/80 text-sm leading-relaxed text-center">
          I'm a web developer who enjoys crafting clean, responsive websites. Outside of coding, 
          I'm into touch typing for speed and precision, and I also explore 3D animation as a creative hobby.
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
