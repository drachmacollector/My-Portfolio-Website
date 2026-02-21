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
    // Spotlight and glow effects have been disabled
  }, []);

  return (
    <section id="about" className="px-6 lg:px-8 relative">
      <style>{`
        .bento-card {
          position: relative;
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
        
        /* Spotlight and red shadow removed */
        
        /* Smooth transitions */
        .bento-card {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .bento-card:hover {
          transform: translateY(-2px);
        }
      `}</style>
      
      <section id="about-me" className="max-w-7xl mx-auto px-6 py-4 relative">
        
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
