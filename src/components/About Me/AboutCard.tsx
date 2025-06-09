import React from 'react';

const AboutCard = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-firebase-purple to-firebase-orange rounded-full p-[3px] 
    shadow-lg transition transform duration-300 hover:scale-105 
    hover:shadow-[0_0_20px_rgba(255,95,31,0.1),0_0_40px_rgba(188,19,254,0.1)]">
      
      <div className="w-full h-full bg-black/100 rounded-full p-6 flex flex-col justify-center">
        <p className="text-white/80 text-sm leading-relaxed text-center">
          I'm a web developer who enjoys crafting cool websites. Outside of coding, 
          I'm love touch typing and I also explore 3D animation as a hobby.
        </p>
      </div>
    </div>
  );
};

export default AboutCard;