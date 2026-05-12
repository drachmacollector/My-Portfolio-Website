import React, { useRef } from 'react';
import Monkeytype from './Monkeytype';
import Blender from './Blender';
import TechStack from './TechStack';
import Socials from './Socials';
import AboutMeCard from './AboutCard';
import Spotify from './Spotify';

const Bento = () => {
  const gridRef = useRef<HTMLDivElement>(null);

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
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes float-up {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) scale(0); opacity: 0; }
        }
        
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
