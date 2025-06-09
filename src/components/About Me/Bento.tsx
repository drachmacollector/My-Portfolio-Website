import React, { useState } from 'react';
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

  return (
    <section id="about" className="px-6 lg:px-8 relative">
      <section id="about-me" className="max-w-7xl mx-auto px-6 py-4 relative">
        <div
          className="
            grid
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-12
            gap-5
            auto-rows-auto
            md:auto-rows-[100px]
          "
        >
          {/* Blender Card */}
          <div className="
              col-span-1 
              sm:col-span-2 
              md:col-span-3 
              lg:col-start-1 lg:col-span-4 
              row-span-4
            ">
            <Blender />
          </div>

          {/* About Me Card */}
          <div className="
              col-span-1 
              sm:col-span-2 
              md:col-span-3 
              lg:col-start-5 lg:col-span-4 
              row-span-2
            ">
            <AboutMeCard />
          </div>

          {/* Monkeytype Card */}
          <div className="
              col-span-1 
              sm:col-span-2 
              md:col-span-3 
              lg:col-start-9 lg:col-span-4 
              row-span-3
            ">
            <Monkeytype />
          </div>

          {/* Spotify Card */}
          <div className="
              col-span-1 
              sm:col-span-2 
              md:col-span-3 
              lg:col-start-5 lg:col-span-4 
              row-span-2
            ">
            <Spotify />
          </div>

          {/* Socials Card */}
          <div className="
              col-span-1 
              sm:col-span-2 
              md:col-span-3 
              lg:col-start-9 lg:col-span-4 
              row-span-1
            ">
            <Socials />
          </div>

          {/* Tech Stack Card */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-full row-span-1">
            <TechStack />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Bento;
