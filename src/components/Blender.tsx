import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from './ui/dialog';

const Blender = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const blenderFiles = [
    'chair.png',
    'donut.mp4',
    'heart.mp4',
    'infinite fluid.mp4',
    'stormy ocean boat.mp4',
    'fireball.mp4',
    'melting gold fluid simulation.mp4',
    'wrecking ball.mp4',
    'dumbbells.png'
  ];

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
    if (isModalOpen) {
      setLightboxOpen(false);
      setCurrentIndex(null);
    }
  }, [isModalOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateMedia('prev');
      if (e.key === 'ArrowRight') navigateMedia('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentIndex]);

  return(
    <div className="w-full h-full bg-gradient-to-r from-firebase-orange to-firebase-purple rounded-2xl p-[1px] 
    shadow-lg transition transform duration-300 hover:scale-105 
    hover:shadow-[0_0_20px_rgba(255,95,31,0.1),0_0_40px_rgba(188,19,254,0.1)] cursor-pointer">
      
      <div className="w-full h-full bg-black/100 rounded-2xl px-6 py-3 flex flex-col items-center 
      justify-center text-center">
        
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="w-56 h-56 rounded-full flex items-center justify-center mb-4 mr-15">
                <img 
                  src="/Uploads/Blender.png" 
                  alt="Blender"
                  className="w-56 h-56 object-contain"
                />
              </div>
              <h3 className="text-5xl font-bold text-white mb-2">My 3D Art</h3>
              <p className="text-l text-white/70 mb-5">Created with Blender</p>
              <button className="px-6 py-3 bg-cyan-400 rounded-lg text-black hover:bg-cyan-500 
              transition-colors font-medium">
                View Gallery
              </button>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-none w-[95vw] h-[90vh] p-0 border-0 bg-black/90 backdrop-blur-sm">
            <div className="border border-white/20 rounded-3xl w-full h-full p-8 relative overflow-hidden">
              <DialogClose asChild>
                <button className="absolute right-6 top-6 z-50 w-10 h-10 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                  <X size={24} />
                </button>
              </DialogClose>
              
              <h3 className="text-3xl font-bold text-white mb-6 text-center">3D Gallery</h3>
              
              {/* Lightbox View */}
              {lightboxOpen && currentIndex !== null && (
                <div className="fixed inset-0 z-40 bg-black/90 flex items-center justify-center p-8">
                  <button 
                    onClick={closeLightbox}
                    className="absolute top-6 left-6 z-50 px-4 py-2 bg-black/80 border border-white/100 rounded-full text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft size={18} />
                    Back to Gallery
                  </button>
                  
                  <button 
                    onClick={() => navigateMedia('prev')}
                    className="absolute left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-white/10"
                  >
                    <ArrowLeft size={24} />
                  </button>
                  
                  <button 
                    onClick={() => navigateMedia('next')}
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
                      />
                    ) : (
                      <img 
                        src={`/blender/${blenderFiles[currentIndex]}`}
                        alt={`3D render ${currentIndex + 1}`}
                        className="max-w-[90%] max-h-[90%] object-contain"
                      />
                    )}
                  </div>
                </div>
              )}
              
              {/* Gallery Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-h-[calc(100%-6rem)] overflow-y-auto p-2">
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
                      {file.endsWith('.mp4') ? '▶' : '🖼️'}
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