import { TECH_STACK } from '@/constants/tech-stack';

const TechStack = () => {
  return(
    <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-black/100">
      
      <div className="w-full bg-black/100 rounded-2xl px-4 py-4 relative overflow-hidden">
        
        <h3 className="text-lg font-bold text-white mb-4 text-center relative z-10">
          Tech Stack
        </h3>
        
        <div className="overflow-hidden flex items-center relative z-10 w-full mask-edges">
          <div className="marquee-scroll flex items-center w-max">
            {/* Two copies is enough for a seamless infinite loop */}
            {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
              <div key={index} className="flex flex-col items-center space-y-1 mx-6 w-[60px] flex-shrink-0">
                <img 
                  src={`/Uploads/${tech}.png`} 
                  alt={tech}
                  loading="lazy"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xs text-white/80 capitalize">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;