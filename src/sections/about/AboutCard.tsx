import React, { useEffect, useRef } from 'react';

const AboutCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.005)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
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
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-firebase-purple/0 via-firebase-orange/0 to-firebase-purple/0 
        group-hover:from-firebase-purple/10 group-hover:via-firebase-orange/10 group-hover:to-firebase-purple/10 
        transition-all duration-700 rounded-full pointer-events-none" />
        
        <p className="text-white/80 text-sm leading-relaxed text-center relative z-10
        transition-all duration-300 group-hover:text-white group-hover:scale-[1.02]">
          Hello there <br />
          General Kenobi.... you are a bold one!
        </p>
      </div>
    </div>
  );
};

export default AboutCard;