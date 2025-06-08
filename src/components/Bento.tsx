
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from './ui/dialog';
import Monkeytype from './monkeytype'
import Blender from './Blender'
import TechStack from './techstack'
import Socials from './socials'
import AboutMeCard from './AboutMeCard'

const Bento = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="px-6 lg:px-8 relative">
        {/* Bento Grid */}
        <section id="about-me" className="max-w-7xl mx-auto px-6 py-2 relative">
          <div className="grid grid-cols-16 gap-6 auto-rows-[80px]">
            
            {/* Blender Card - Top Left (Narrower but Longer) */}
            <div className="col-span-4 row-span-6">
              <Blender />
            </div>

            {/* About Me Card - Top Center */}
            <div className="col-span-6 row-span-2">
              <AboutMeCard />
            </div>

            {/* Monkeytype Card - Top Right (Longer than About Me) */}
            <div className="col-span-6 row-span-3">
              <Monkeytype />
            </div>

            {/* Spotify Card - Beside Blender, Below About Me */}
            <div className="col-span-6 row-span-4">
              <div className="w-full h-full bg-black/30 border border-white/20 rounded-2xl 
              shadow-lg transition transform duration-300 hover:scale-105 hover:border-white/40 
              hover:drop-shadow-[0_0_10px_rgba(100,200,255,0.25)] p-4 flex items-center justify-center">
                <iframe 
                  style={{borderRadius: '12px'}} 
                  src="https://open.spotify.com/embed/track/0GONea6G2XdnHWjNZd6zt3?utm_source=generator" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                />
              </div>
            </div>

            {/* Socials Card - Right of Spotify, Below Monkeytype */}
            <div className="col-span-6 row-span-1">
              <Socials />
            </div>

            {/* Empty space row for spacing */}
            <div className="col-span-full row-span-1"></div>

            {/* Tech Stack Card - Full Width Bottom */}
            <div className="col-span-full row-span-1">
              <TechStack />
            </div>

          </div>
        </section>
    </section>
  );
};

export default Bento;
