import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { getLenis } from '@/animations/smooth-scroll';
import { useIsMobile } from '@/hooks/use-mobile';

const Blender = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const blenderFiles = [
    'chair.png',
    'chanel perfume.mp4',
    'cyberpunk street.mp4',
    'space station.mp4',
    'donut.mp4',
    'heart.mp4',
    'infinite fluid.mp4',
    'stormy ocean boat.mp4',
    'fireball.mp4',
    'melting gold fluid simulation.mp4',
    'wrecking ball.mp4',
    'dumbbells.png'
  ];

  // Add subtle tilt effect (desktop only)
  useEffect(() => {
    const card = cardRef.current;
    if (!card || isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -3;
      const rotateY = ((x - centerX) / centerX) * 3;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.005)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentIndex(null);
  };

  const navigateMedia = (direction: 'prev' | 'next') => {
    if (currentIndex === null) return;
    
    if (direction === 'prev') {
      setCurrentIndex(prev => (prev === 0 ? blenderFiles.length - 1 : prev! - 1));
    } else {
      setCurrentIndex(prev => (prev === blenderFiles.length - 1 ? 0 : prev! + 1));
    }
  };

  // Reset lightbox state when modal opens
  useEffect(() => {
    const lenis = getLenis();
    if (isModalOpen) {
      setLightboxOpen(false);
      setCurrentIndex(null);
      lenis?.stop();
    } else {
      lenis?.start();
    }
    
    return () => {
      lenis?.start();
    };
  }, [isModalOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') navigateMedia('prev');
      if (e.key === 'ArrowRight') navigateMedia('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentIndex]);

  return(
    <div 
      ref={cardRef}
      className="w-full h-full rounded-2xl overflow-hidden
      transition-all duration-500 ease-out
      shadow-lg 
      cursor-pointer group bg-black/100"
      style={{ 
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out, box-shadow 0.5s ease-out'
      }}
    >
      <div className="w-full h-full rounded-2xl px-6 py-3 flex flex-col items-center 
      justify-center text-center overflow-hidden relative">
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 
        transition-all duration-500 rounded-2xl pointer-events-none" />
        
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <div className="w-full h-full flex flex-col items-center justify-center relative z-10">
              <div className="w-44 h-44 rounded-full flex items-center justify-center mb-4 mr-15 
              transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6">
                <img 
                  src="/tech/Blender.png" 
                  alt="Blender"
                  className="w-44 h-44 object-contain drop-shadow-[0_0_15px_rgba(255,95,31,0)] 
                  group-hover:drop-shadow-[0_0_15px_rgba(255,95,31,0.3)]
                  transition-all duration-500"
                />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2 transition-all duration-300 ">
                My 3D Art
              </h3>
              <p className="text-l text-white/70 mb-5 transition-all duration-300 group-hover:text-white/90">
                Created with Blender
              </p>
              <button className="px-6 py-3 bg-cyan-400 rounded-lg text-black 
              transition-all duration-300 font-medium
               group-hover:shadow-lg group-hover:scale-[1.02]">
                View Gallery
              </button>
            </div>
          </DialogTrigger>
          <DialogContent 
            className="max-w-none w-[95vw] h-[90vh] p-0 border-0 bg-transparent backdrop-blur-sm"
            onEscapeKeyDown={(e) => {
              if (lightboxOpen) {
                e.preventDefault();
                closeLightbox();
              }
            }}
          >
            <div className="border border-white/20 rounded-3xl w-full h-full p-8 relative overflow-hidden">
              {lightboxOpen ? (
                <button 
                  onClick={closeLightbox}
                  className="absolute right-6 top-6 z-50 w-10 h-10 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <X size={24} />
                </button>
              ) : (
                <DialogClose asChild>
                  <button className="absolute right-6 top-6 z-50 w-10 h-10 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <X size={24} />
                  </button>
                </DialogClose>
              )}
              
              <h3 className="text-3xl font-bold text-white mb-6 text-center">3D Gallery</h3>
              
              {/* Lightbox View */}
              {lightboxOpen && currentIndex !== null && (
                <div 
                  className="fixed inset-0 z-40 bg-black/90 flex items-center justify-center p-8"
                  onClick={closeLightbox}
                >
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateMedia('prev');
                    }}
                    className="absolute left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-white/10"
                  >
                    <ArrowLeft size={24} />
                  </button>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateMedia('next');
                    }}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-white/10"
                  >
                    <ArrowRight size={24} />
                  </button>
                  
                  <div className="w-full h-full flex items-center justify-center">
                    {blenderFiles[currentIndex].endsWith('.mp4') ? (
                      <video 
                        src={`/blender/${blenderFiles[currentIndex]}`}
                        className="max-w-[90%] max-h-[90%] object-contain"
                        controls
                        autoPlay
                        muted
                        onClick={(e) => e.stopPropagation()}
                      />
                    ) : (
                      <img 
                        src={`/blender/${blenderFiles[currentIndex]}`}
                        alt={`3D render ${currentIndex + 1}`}
                        className="max-w-[90%] max-h-[90%] object-contain"
                        onClick={(e) => e.stopPropagation()}
                      />
                    )}
                  </div>
                </div>
              )}
              
              {/* Gallery Grid */}
              <div 
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-h-[calc(100%-6rem)] overflow-y-auto p-2"
                data-lenis-prevent="true"
              >
                {blenderFiles.map((file, index) => (
                  <div 
                    key={index} 
                    className="group relative bg-black/30 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:scale-[1.03] cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-4">
                      <span className="text-white font-medium truncate">
                        {file.replace('.mp4', '').replace('.png', '')}
                      </span>
                    </div>
                    
                    {file.endsWith('.mp4') ? (
                      <video 
                        src={`/blender/${file}`}
                        className="w-full h-48 object-cover"
                        autoPlay
                        muted
                        loop
                      />
                    ) : (
                      <img 
                        src={`/blender/${file}`}
                        alt={`3D render ${index + 1}`}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    
                    <div className="absolute top-2 right-2 bg-black/70 rounded-full w-8 h-8 flex items-center justify-center text-white/80 group-hover:text-cyan-400">
                      {file.endsWith('.mp4') ? '▶' : '📷'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Blender;