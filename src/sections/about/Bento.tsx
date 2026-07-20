import React from 'react';
import Monkeytype from './Monkeytype';
import Blender from './Blender';
import TechStack from './TechStack';
import Socials from './Socials';
import AboutMeCard from './AboutCard';
import Spotify from './Spotify';

const Bento = () => {
  return (
    <div
      className="
        bento-grid-container
        grid
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-12
        gap-5
        auto-rows-auto
      "
      style={{ perspective: '1000px' }}
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
              rounded-2xl
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
  );
};

export default Bento;
