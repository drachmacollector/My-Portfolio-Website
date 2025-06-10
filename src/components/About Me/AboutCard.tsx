import React from 'react';

const AboutCard = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-firebase-purple to-firebase-orange rounded-full p-[2px] 
    shadow-lg transition transform duration-300 hover:scale-105 
    hover:shadow-[0_0_20px_rgba(255,95,31,0.1),0_0_40px_rgba(188,19,254,0.1)]">
      
      <div className="w-full h-full bg-black/100 rounded-full p-6 flex flex-col justify-center">
        <p className="text-white/80 text-sm leading-relaxed text-center">
          Hello there <br />
          General Kenobi.... you are a bold one!
        </p>
      </div>
    </div>
  );
};

export default AboutCard;