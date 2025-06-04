
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from './ui/dialog';

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
          {/* Decorative background circle */}
          <div className="hidden lg:block absolute -top-20 -left-20 w-80 h-80 rounded-full border-[4px] border-gradient-to-r from-cyan-400 to-violet-400 opacity-20 z-0" />
          
          <div className="grid grid-cols-12 grid-rows-6 gap-6 h-[600px] relative z-10">
            
            {/* Card A - Typing Stats (Rectangle, top-left) */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 row-span-2 bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg transition transform duration-300 hover:scale-105 hover:border-white/40 hover:backdrop-blur-2xl hover:drop-shadow-[0_0_10px_rgba(100,200,255,0.25)] p-6 text-center">
              <h3 className="text-2xl font-bold text-white">Typing Speed</h3>
              <div className="border-b border-cyan-400 w-12 my-2 mx-auto" />
              <div className="text-6xl font-extrabold text-white my-4">116 wpm</div>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-4 text-sm text-white/75">
                  <div className="flex items-center space-x-2">
                    <span>⏱️</span>
                    <span>15 s</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>✓</span>
                    <span>100%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🌐</span>
                    <span>EN</span>
                  </div>
                </div>
              </div>
              <a 
                href="https://monkeytype.com/profile/drachmacollector" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-cyan-400 hover:underline inline-block mt-3"
              >
                View on Monkeytype
              </a>
            </div>

            {/* Card B - 3D Renders (Large Circle, center-right) */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 row-span-4 bg-black/30 backdrop-blur-xl border border-white/20 rounded-full shadow-lg transition transform duration-300 hover:scale-105 hover:border-white/40 hover:backdrop-blur-2xl hover:drop-shadow-[0_0_10px_rgba(100,200,255,0.25)] p-8 flex flex-col items-center justify-center text-center relative">
              <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/blender.png" 
                  alt="Blender"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">3D Art</h3>
              <p className="text-sm text-white/70 mb-6">Blender Creations</p>
              
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <button className="px-6 py-3 bg-cyan-400 rounded-full text-black hover:bg-cyan-500 transition-colors font-medium">
                    View Gallery
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-none w-[95vw] max-h-[90vh] p-0 border-0 bg-transparent">
                  <div className="bg-black/80 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 relative h-full">
                    <DialogClose asChild>
                      <button className="absolute right-6 top-6 text-3xl text-white/80 hover:text-white cursor-pointer z-10">
                        <X />
                      </button>
                    </DialogClose>
                    
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">3D Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-h-[60vh] overflow-y-auto">
                      {blenderFiles.map((file, index) => (
                        <div key={index} className="bg-black/20 border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition-transform">
                          {file.endsWith('.mp4') ? (
                            <video 
                              src={`/blender/${file}`}
                              className="w-full h-40 object-cover"
                              controls
                              muted
                              poster={`/blender/${file.replace('.mp4', '.jpg')}`}
                            />
                          ) : (
                            <img 
                              src={`/blender/${file}`}
                              alt={`3D render ${index + 1}`}
                              className="w-full h-40 object-cover"
                            />
                          )}
                          <div className="p-3">
                            <p className="text-white/80 text-sm capitalize">{file.replace(/\.(png|mp4)$/, '').replace('-', ' ')}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Card C - Tech Stack Marquee (Wide Rectangle) */}
            <div className="col-span-12 lg:col-span-5 row-span-2 bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg transition transform duration-300 hover:scale-105 hover:border-white/40 hover:backdrop-blur-2xl hover:drop-shadow-[0_0_10px_rgba(100,200,255,0.25)] p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Tech Stack</h3>
              <div className="overflow-hidden whitespace-nowrap h-16 flex items-center">
                <div className="marquee flex items-center">
                  {[...techStack, ...techStack].map((tech, index) => (
                    <div key={index} className="flex flex-col items-center space-y-1 mx-4 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(100,200,255,0.5)]">
                      <img 
                        src={`/lovable-uploads/${tech}.png`} 
                        alt={tech}
                        className="w-8 h-8 object-contain"
                      />
                      <span className="text-xs text-white/80 capitalize">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card D - Spotify Embed (Rectangle) */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 row-span-3 bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg transition transform duration-300 hover:scale-105 hover:border-white/40 hover:backdrop-blur-2xl hover:drop-shadow-[0_0_10px_rgba(100,200,255,0.25)] p-6 relative">
              <div className="absolute top-4 left-4 bg-black/50 text-xs px-3 py-1 rounded-full text-white/80 z-10">
                Now Playing
              </div>
              <iframe 
                src="https://open.spotify.com/embed/track/0GONea6G2XdnHWjNZd6zt3?utm_source=generator&theme=0"
                className="w-full h-full rounded-xl mt-8"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>

            {/* Card E - Social Icons (Small Circles) */}
            <div className="col-span-6 lg:col-span-2 row-span-1 flex gap-4">
              <div className="flex-1 bg-black/30 backdrop-blur-xl border border-white/20 rounded-full shadow-lg transition transform duration-300 hover:scale-105 hover:border-white/40 hover:backdrop-blur-2xl hover:drop-shadow-[0_0_10px_rgba(255,69,96,0.5)] p-4 flex items-center justify-center">
                <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                  <img 
                    src="/lovable-uploads/reddit.png" 
                    alt="Reddit"
                    className="w-8 h-8 object-contain"
                  />
                </a>
              </div>
              <div className="flex-1 bg-black/30 backdrop-blur-xl border border-white/20 rounded-full shadow-lg transition transform duration-300 hover:scale-105 hover:border-white/40 hover:backdrop-blur-2xl hover:drop-shadow-[0_0_10px_rgba(76,175,80,0.5)] p-4 flex items-center justify-center">
                <a href="https://4chan.org" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                  <img 
                    src="/lovable-uploads/4chan.png" 
                    alt="4chan"
                    className="w-8 h-8 object-contain"
                  />
                </a>
              </div>
            </div>

            {/* Filler decorative elements */}
            <div className="hidden lg:block col-span-2 row-span-1 bg-black/20 backdrop-blur-xl border border-white/10 rounded-full shadow-lg p-4">
              <div className="w-full h-full flex items-center justify-center opacity-30">
                <div className="w-8 h-8 border-2 border-cyan-400 rounded-full animate-pulse" />
              </div>
            </div>

            <div className="hidden lg:block col-span-3 row-span-1 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-4">
              <div className="w-full h-full flex items-center justify-center opacity-30">
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full animate-pulse" />
              </div>
            </div>

          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutSection;
