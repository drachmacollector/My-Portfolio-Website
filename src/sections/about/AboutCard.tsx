import React, { useEffect, useRef } from 'react';

const AboutCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 3D hover effects removed for a more refined UI
  }, []);

  return (
    <div 
      ref={cardRef}
      className="w-full h-full rounded-full overflow-hidden
      shadow-lg
      group cursor-pointer bg-black/100"
      style={{ 
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out, box-shadow 0.5s ease-out'
      }}
    >
      <div className="w-full h-full rounded-full p-6 flex flex-col justify-center 
      relative overflow-hidden">
        
        {/* Animated gradient overlay removed for refined UI */}
        
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