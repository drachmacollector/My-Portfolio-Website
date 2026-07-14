import React from 'react';

const AboutCard = () => {
  return (
    <div 
      className="w-full h-full rounded-full overflow-hidden
      shadow-lg
      group cursor-pointer bg-black/100"
    >
      <div className="w-full h-full rounded-full p-6 flex flex-col justify-center 
      relative overflow-hidden">
        
        <p className="text-white/80 text-sm leading-relaxed text-center relative z-10
        transition-all duration-300 group-hover:text-white">
          Hello there <br />
          General Kenobi.... you are a bold one!
        </p>
      </div>
    </div>
  );
};

export default AboutCard;