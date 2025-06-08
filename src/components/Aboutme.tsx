
import React from 'react';

const Aboutme = () => {
  return (
    <div className="w-full h-full bg-black/30 border border-white/20 rounded-2xl 
    shadow-lg transition transform duration-300 hover:scale-105 hover:border-white/40 
    hover:drop-shadow-[0_0_10px_rgba(100,200,255,0.25)] p-6 flex flex-col justify-center">
      
      <h3 className="text-xl font-bold text-white mb-4 text-center">About Me</h3>
      <div className="border-b border-cyan-400 w-12 mx-auto mb-4" />
      
      <p className="text-white/80 text-sm leading-relaxed text-center">
        I'm a web developer who enjoys crafting clean, responsive websites. Outside of coding, 
        I'm into touch typing for speed and precision, and I also explore 3D animation as a creative hobby.
      </p>
    </div>
  );
};

export default Aboutme;
