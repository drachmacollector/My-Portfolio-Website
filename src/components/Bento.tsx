
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from './ui/dialog';
import Monkeytype from './monkeytype'
import Blender from './Blender'
import TechStack from './techstack'
import Socials from './socials'
import AboutMeCard from './AboutCard'
import Spotify from './Spotify';

const Bento = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="px-6 lg:px-8 relative">
        {/* Bento Grid */}
        <section id="about-me" className="max-w-7xl mx-auto px-6 py-2 relative">
          <div className="grid grid-cols-12 gap-6 auto-rows-[100px]">
            
            {/* Blender Card - Top Left (Large) */}
            <div className="col-start-1 col-span-4 row-span-5">
              <Blender />
            </div>

            {/* About Me Card - Top Center */}
            <div className="col-start-5 col-span-4 row-span-2">
              <AboutMeCard />
            </div>

            {/* Monkeytype Card - Top Right */}
            <div className="col-start-9 col-span-4 row-span-3">
              <Monkeytype />
            </div>

            {/* Spotify Card - Below About Me */}
            <div className="col-start-5 col-span-4 row-span-2">
              <Spotify></Spotify>
            </div>

            {/* Socials Card - Right of Spotify, Below Monkeytype */}
            <div className="col-start-9 row-start-4 col-span-4 row-span-1">
              <Socials />
            </div>

            {/* Empty space row for spacing */}

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
