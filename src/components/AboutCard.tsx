import React from 'react';

const AboutCard = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-firebase-orange to-firebase-purple rounded-full p-[2px] 
    shadow-lg transition transform duration-300 hover:scale-105 
    hover:shadow-[0_0_20px_rgba(255,95,31,0.1),0_0_40px_rgba(188,19,254,0.1)]">
      
      <div className="w-full h-full bg-black/100 rounded-full p-6 flex flex-col justify-center">
        <p className="text-white/80 text-sm leading-relaxed text-center">
          I'm a web developer who enjoys crafting clean, responsive websites. Outside of coding, 
          I'm into touch typing for speed and precision, and I also explore 3D animation as a creative hobby.
        </p>
      </div>
    </div>
  );
};

export default AboutCard;