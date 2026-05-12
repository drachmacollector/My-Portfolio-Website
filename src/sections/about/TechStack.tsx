import { TECH_STACK } from '@/constants/tech-stack';

const TechStack = () => {
  return(
    <div className="w-full rounded-2xl overflow-hidden
    shadow-lg transition-all duration-500 ease-out hover:scale-[1.005] 
    group bg-black/100">
      
      <div className="w-full bg-black/100 rounded-2xl px-4 py-4 relative overflow-hidden">
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-firebase-orange/0 via-firebase-purple/0 to-firebase-orange/0 
        group-hover:from-firebase-orange/5 group-hover:via-firebase-purple/5 group-hover:to-firebase-orange/5 
        transition-all duration-700 rounded-2xl pointer-events-none" />
        
        <h3 className="text-lg font-bold text-white mb-4 text-center relative z-10 
        transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r 
        group-hover:from-firebase-orange group-hover:to-firebase-purple group-hover:bg-clip-text">
          Tech Stack
        </h3>
        
        <div className="overflow-hidden whitespace-nowrap flex items-center relative z-10">
          <div className="marquee-slow flex items-center group-hover:animation-pause">
            {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, index) => (
              <div key={index} className="flex flex-col items-center space-y-1 mx-8 
              transition-all duration-300 hover:scale-110
              hover:drop-shadow-[0_0_15px_rgba(100,200,255,0.7)]
              hover:-translate-y-2">
                <img 
                  src={`/Uploads/${tech}.png`} 
                  alt={tech}
                  className="w-10 h-10 object-contain transition-all duration-300"
                />
                <span className="text-s text-white/80 capitalize transition-all duration-300 
                hover:text-white">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Animation Styles */}
        <style>
          {`
          .marquee-slow {
            animation: marquee 90s linear infinite;
            padding-right: 100%;
          }
          
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          
          .group:hover .marquee-slow {
            animation-play-state: paused;
          }
        `}
        </style>
      </div>
    </div>
  );
};

export default TechStack;