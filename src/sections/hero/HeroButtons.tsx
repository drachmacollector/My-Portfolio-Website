import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import '@/styles/buttons.css';
import { SOCIAL_LINKS } from '@/constants/social-links';

interface HeroButtonsProps {
  className?: string;
}

const HeroButtons: React.FC<HeroButtonsProps> = ({ className = '' }) => {
  return (
    <TooltipProvider delayDuration={20} skipDelayDuration={0}>

      <div className={`flex items-start text-center flex-col sm:flex-row ${className}`}>
        <div className="board">
          {SOCIAL_LINKS.map(({ name, href, icon: Icon, tooltip }) => (
            <div key={name} className="key-position">
              {name === 'Resume' ? (
                <Dialog>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <DialogTrigger asChild>
                        <button
                          aria-label={name}
                          className="key cursor-pointer"
                          data-key={name}
                        >
                          <Icon />
                        </button>
                      </DialogTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="bg-zinc-900 text-white border-zinc-700">
                      <p>{tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                  <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 border border-white/20 bg-black/95 backdrop-blur-lg overflow-hidden rounded-2xl">
                    <DialogClose asChild>
                      <button className="absolute right-4 top-4 z-50 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
                        <X size={20} />
                      </button>
                    </DialogClose>
                    <div className="w-full h-full pt-16 pb-4 px-4 flex justify-center">
                      <iframe 
                        src={href} 
                        className="w-full h-full rounded-xl border-0 bg-white"
                        title="Nakul Resume"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      aria-label={name}
                      className="key cursor-pointer"
                      data-key={name}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-zinc-900 text-white border-zinc-700">
                    <p>{tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          ))}
        </div>

        {/* Call-to-Action "Explore more" key */}
        {/* <div className="key-position flex items-center justify-center ml-2.5">
          <a
            id="cta-hero-btn"
            href="#about"
            data-block="center"
            className="key call-to-action peer"
          >
            <p className="call-to-action-content text-white">Explore more</p>
          </a>
        </div> */}
      </div>
    </TooltipProvider>
  );
};

export default HeroButtons;
