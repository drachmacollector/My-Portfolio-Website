import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@/blocks/ui/dialog';
import Monkeytype from './monkeytype';
import Blender from './Blender';
import TechStack from './techstack';
import Socials from './socials';
import AboutMeCard from './AboutCard';
import Spotify from './Spotify';

const Bento = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      
      const rect = gridRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });

      // Update spotlight position
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX}px`;
        spotlightRef.current.style.top = `${e.clientY}px`;
      }

      // Update CSS variables for each card
      const cards = gridRef.current.querySelectorAll('.bento-card');
      cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const cardX = e.clientX - cardRect.left;
        const cardY = e.clientY - cardRect.top;
        const centerX = cardRect.width / 2;
        const centerY = cardRect.height / 2;
        
        // Calculate distance from cursor to card center
        const distance = Math.sqrt(
          Math.pow(cardX - centerX, 2) + Math.pow(cardY - centerY, 2)
        );
        
        const maxDistance = 350; // pixels - reduced for more focused effect
        const glowIntensity = Math.max(0, 1 - distance / maxDistance);
        
        (card as HTMLElement).style.setProperty('--glow-x', `${cardX}px`);
        (card as HTMLElement).style.setProperty('--glow-y', `${cardY}px`);
        (card as HTMLElement).style.setProperty('--glow-intensity', glowIntensity.toString());
      });
    };

    const handleMouseLeave = () => {
      if (!gridRef.current) return;
      const cards = gridRef.current.querySelectorAll('.bento-card');
      cards.forEach(card => {
        (card as HTMLElement).style.setProperty('--glow-intensity', '0');
      });
    };

    const grid = gridRef.current;
    if (grid) {
      grid.addEventListener('mousemove', handleMouseMove);
      grid.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (grid) {
        grid.removeEventListener('mousemove', handleMouseMove);
        grid.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="about" className="px-6 lg:px-8 relative">
      <style>{`
        .bento-card {
          --glow-x: 50%;
          --glow-y: 50%;
          --glow-intensity: 0;
          position: relative;
        }
        
        .bento-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: radial-gradient(
            500px circle at var(--glow-x) var(--glow-y),
            rgba(255, 95, 31, calc(var(--glow-intensity) * 1)),
            rgba(188, 19, 254, calc(var(--glow-intensity) * 0.8)),
            rgba(59, 130, 246, calc(var(--glow-intensity) * 0.4)),
            transparent 50%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
          opacity: 1;
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }
        
        .bento-card > * {
          position: relative;
          z-index: 2;
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        
        @keyframes float-up {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) scale(0);
            opacity: 0;
          }
        }
        
        .bento-card:hover::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255, 255, 255, 0.05) 45%,
            rgba(255, 255, 255, 0.08) 50%,
            rgba(255, 255, 255, 0.05) 55%,
            transparent 75%
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
          border-radius: inherit;
          pointer-events: none;
          z-index: 3;
        }
        
        /* Spotlight effect */
        .bento-spotlight {
          position: fixed;
          width: 1000px;
          height: 1000px;
          border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(circle,
            rgba(255, 95, 31, 0.08) 0%,
            rgba(188, 19, 254, 0.06) 20%,
            rgba(59, 130, 246, 0.04) 35%,
            transparent 60%
          );
          z-index: 0;
          opacity: 0;
          transform: translate(-50%, -50%);
          mix-blend-mode: screen;
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .bento-grid-container:hover .bento-spotlight {
          opacity: 1;
        }
        
        /* Smooth transitions */
        .bento-card {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .bento-card:hover {
          transform: translateY(-2px);
        }
      `}</style>
      
      <section id="about-me" className="max-w-7xl mx-auto px-6 py-4 relative">
        {/* Global spotlight effect */}
        <div ref={spotlightRef} className="bento-spotlight" />
        
        <div
          ref={gridRef}
          className="
            bento-grid-container
            grid
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-12
            gap-5
            auto-rows-auto
            md:auto-rows-[100px]
          "
          style={{
            perspective: '1000px'
          }}
        >
          {/* Blender Card */}
          <div className="
              bento-card
              col-span-1 
              sm:col-span-2 
              md:col-span-3 
              lg:col-start-1 lg:col-span-4 
              row-span-4
              rounded-2xl
            ">
            <Blender />
          </div>

          {/* About Me Card */}
          <div className="
              bento-card
              col-span-1 
              sm:col-span-2 
              md:col-span-3 
              lg:col-start-5 lg:col-span-4 
              row-span-2
              rounded-full
            ">
            <AboutMeCard />
          </div>

          {/* Monkeytype Card */}
          <div className="
              bento-card
              col-span-1 
              sm:col-span-2 
              md:col-span-3 
              lg:col-start-9 lg:col-span-4 
              row-span-3
              rounded-2xl
            ">
            <Monkeytype />
          </div>

          {/* Spotify Card */}
          <div className="
              bento-card
              col-span-1 
              sm:col-span-2 
              md:col-span-3 
              lg:col-start-5 lg:col-span-4 
              row-span-2
              rounded-2xl
            ">
            <Spotify />
          </div>

          {/* Socials Card */}
          <div className="
              bento-card
              col-span-1 
              sm:col-span-2 
              md:col-span-3 
              lg:col-start-9 lg:col-span-4 
              row-span-1
              rounded-2xl
            ">
            <Socials />
          </div>

          {/* Tech Stack Card */}
          <div className="bento-card col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-full row-span-1 rounded-2xl">
            <TechStack />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Bento;
