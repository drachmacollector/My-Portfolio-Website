import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from './ui/dialog';
import LocationCard from './LocationCard';
import Monkeytype from './monkeytype'
import Blender from './Blender'
import TechStack from './techstack'
import Socials from './socials'

const Bento = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="px-6 lg:px-8 relative">

        {/* Bento Grid */}
        <section id="about-me" className="max-w-7xl mx-auto px-6 py-2 relative">
          <div className="grid grid-cols-12 gap-6 auto-rows-[140px]">
            
            {/* Card A - Typing Stats (2x2 square) */}
              <Monkeytype></Monkeytype>

            {/* Card B - 3D Renders (3x2 rectangle) */}
            <Blender></Blender>

            {/* Card C - Location (2x2 square) */}
            <div className="col-span-3 row-span-2">
              <LocationCard />
            </div>

            {/* Card D - Social Icons (4x1 rectangle) */}
            <Socials></Socials>

            {/* Card E - Spotify Embed (4x1 rectangle) */}
            <div className="col-span-4 h-[26.6vh]">

                <iframe
                  src="https://open.spotify.com/embed/track/0GONea6G2XdnHWjNZd6zt3?utm_source=generator&theme=0"
                  className="w-[100%] h-[152px] rounded-xl"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />

            </div><br />

            {/* Card F - Tech Stack Marquee (4x1 rectangle) */}
            <TechStack></TechStack>

          </div>
        </section>
    </section>
  );
};

export default Bento;
