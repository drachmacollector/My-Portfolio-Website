import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from './ui/dialog';
import LocationCard from './LocationCard';

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const techStack = [
    'html', 'css', 'javascript', 'php', 'mysql', 'python', 'canva', 'figma', 
    'obs', 'C', 'react', 'tailwind', 'mongodb', 'github', 'git', 'blender'
  ];

  const blenderFiles = [
    'chair.png',
    'donut.mp4',
    'heart.mp4',
    'infinite fluid.mp4',
    'stormy ocean boat.mp4'
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            About <span className="text-firebase-red">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-firebase-orange to-firebase-purple mx-auto mb-8" />
        </div>

        {/* Bento Grid */}
        <section id="about-me" className="max-w-7xl mx-auto px-6 py-16 relative">
          <div className="grid grid-cols-12 gap-6 auto-rows-[140px]">
            
            {/* Card A - Typing Stats (2x2 square) */}
            <div className="col-span-3 row-span-2 bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg transition transform duration-300 hover:scale-105 hover:border-white/40 hover:backdrop-blur-2xl hover:drop-shadow-[0_0_10px_rgba(100,200,255,0.25)] p-6 flex flex-col justify-center text-center">
              <h3 className="text-xl font-bold text-white mb-2">Typing Speed</h3>
              <div className="border-b border-cyan-400 w-12 mx-auto mb-3" />
              <div className="text-4xl font-extrabold text-white mb-3">116 wpm</div>
              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-center space-x-3 text-sm text-white/75">
                  <div className="flex items-center space-x-1">
                    <span>⏱️</span>
                    <span>15s</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>✓</span>
                    <span>100%</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>🌐</span>
                    <span>EN</span>
                  </div>
                </div>
              </div>
              <a 
                href="https://monkeytype.com/profile/drachmacollector" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-cyan-400 hover:underline"
              >
                View on Monkeytype
              </a>
            </div>

            {/* Card B - 3D Renders (3x2 rectangle) */}
            <div className="col-span-6 row-span-2 bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg transition transform duration-300 hover:scale-105 hover:border-white/40 hover:backdrop-blur-2xl hover:drop-shadow-[0_0_10px_rgba(100,200,255,0.25)] p-8 flex flex-col items-center justify-center text-center cursor-pointer">
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="w-20 h-20 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-4">
                      <img 
                        src="/lovable-uploads/blender.png" 
                        alt="Blender"
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">3D Art</h3>
                    <p className="text-sm text-white/70 mb-4">Created with Blender</p>
                    <button className="px-6 py-3 bg-cyan-400 rounded-lg text-black hover:bg-cyan-500 transition-colors font-medium">
                      View Gallery
                    </button>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-none w-[95vw] h-[90vh] p-0 border-0 bg-black/80 backdrop-blur-xl">
                  <div className="bg-black/30 backdrop-blur-2xl border border-white/20 rounded-3xl w-full h-full p-8 relative overflow-hidden">
                    <DialogClose asChild>
                      <button className="absolute right-6 top-6 text-2xl text-white/80 hover:text-white cursor-pointer z-10">
                        <X />
                      </button>
                    </DialogClose>
                    
                    <h3 className="text-3xl font-bold text-white mb-6">3D Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-h-[calc(100%-6rem)] overflow-y-auto">
                      {blenderFiles.map((file, index) => (
                        <div key={index} className="bg-black/20 border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition-transform">
                          {file.endsWith('.mp4') ? (
                            <video 
                              src={`/blender/${file}`}
                              className="w-full h-40 object-cover"
                              controls
                              muted
                            />
                          ) : (
                            <img 
                              src={`/blender/${file}`}
                              alt={`3D render ${index + 1}`}
                              className="w-full h-40 object-cover"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Card C - Location (2x2 square) */}
            <div className="col-span-3 row-span-2">
              <LocationCard />
            </div>

            {/* Card D - Social Icons (4x1 rectangle) */}
            <div className="col-span-4 row-span-1 bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg transition transform duration-300 hover:scale-105 hover:border-white/40 hover:backdrop-blur-2xl hover:drop-shadow-[0_0_10px_rgba(100,200,255,0.25)] p-4 flex items-center justify-center">
              <div className="flex items-center space-x-8">
                <a 
                  href="https://old.reddit.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,69,96,0.5)]"
                >
                  <img 
                    src="/lovable-uploads/reddit.png" 
                    alt="Reddit"
                    className="w-12 h-12 object-contain"
                  />
                </a>
                <a 
                  href="https://4chan.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(76,175,80,0.5)]"
                >
                  <img 
                    src="/lovable-uploads/4chan.png" 
                    alt="4chan"
                    className="w-12 h-12 object-contain"
                  />
                </a>
                <span className="text-sm text-white/80 ml-2">Find me on</span>
              </div>
            </div>

            {/* Card E - Spotify Embed (4x1 rectangle) */}
            <div className="col-span-4 row-span-1 bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg transition transform duration-300 hover:scale-105 hover:border-white/40 hover:backdrop-blur-2xl hover:drop-shadow-[0_0_10px_rgba(100,200,255,0.25)] p-4 relative">
              <div className="absolute top-3 left-3 bg-black/50 text-xs px-2 py-1 rounded-md text-white/80 z-10">
                Now Playing
              </div>
              <iframe 
                src="https://open.spotify.com/embed/track/0GONea6G2XdnHWjNZd6zt3?utm_source=generator&theme=0"
                className="w-full h-full rounded-xl"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>

            {/* Card F - Tech Stack Marquee (4x1 rectangle) */}
            <div className="col-span-4 row-span-1 bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg transition transform duration-300 hover:scale-105 hover:border-white/40 hover:backdrop-blur-2xl hover:drop-shadow-[0_0_10px_rgba(100,200,255,0.25)] p-4">
              <h3 className="text-lg font-bold text-white mb-2 text-center">Tech Stack</h3>
              <div className="overflow-hidden whitespace-nowrap h-12 flex items-center">
                <div className="marquee-slow flex items-center">
                  {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                    <div key={index} className="flex flex-col items-center space-y-1 mx-6 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(100,200,255,0.5)]">
                      <img 
                        src={`/lovable-uploads/${tech}.png`} 
                        alt={tech}
                        className="w-6 h-6 object-contain"
                      />
                      <span className="text-xs text-white/80 capitalize">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutSection;
