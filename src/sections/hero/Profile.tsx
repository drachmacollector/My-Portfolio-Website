import { useEffect, useRef } from 'react';

// Normal and Hover speeds in degrees per second
const speeds = {
  layer1: { normal: 360 / 20, hover: 360 / 5 },
  layer2: { normal: 360 / 35, hover: 360 / 10 },
  layer3: { normal: 360 / 60, hover: 360 / 15 },
  layer4: { normal: -360 / 20, hover: -360 / 4 },
};

function Profile() {
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const layer4Ref = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const rotations = useRef([0, 0, 0, 0]);

  const currentSpeeds = useRef([
    speeds.layer1.normal,
    speeds.layer2.normal,
    speeds.layer3.normal,
    speeds.layer4.normal
  ]);

  useEffect(() => {
    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = (time - previousTimeRef.current) / 1000;
        const isHov = isHoveredRef.current;
        
        const targetSpeeds = [
          isHov ? speeds.layer1.hover : speeds.layer1.normal,
          isHov ? speeds.layer2.hover : speeds.layer2.normal,
          isHov ? speeds.layer3.hover : speeds.layer3.normal,
          isHov ? speeds.layer4.hover : speeds.layer4.normal,
        ];

        // Smoothly interpolate current speed towards target speed for buttery transition
        const lerpFactor = Math.min(deltaTime * 3, 1); 
        
        for (let i = 0; i < 4; i++) {
          currentSpeeds.current[i] += (targetSpeeds[i] - currentSpeeds.current[i]) * lerpFactor;
          rotations.current[i] = (rotations.current[i] + currentSpeeds.current[i] * deltaTime) % 360;
        }

        if (layer1Ref.current) layer1Ref.current.style.transform = `rotate(${rotations.current[0]}deg)`;
        if (layer2Ref.current) layer2Ref.current.style.transform = `rotate(${rotations.current[1]}deg)`;
        if (layer3Ref.current) layer3Ref.current.style.transform = `rotate(${rotations.current[2]}deg)`;
        if (layer4Ref.current) layer4Ref.current.style.transform = `rotate(${rotations.current[3]}deg)`;
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      {/* Right Side - Profile Image Area */}
      {/* Reduced padding to help it sit better in the grid layout */}
      <div className="flex justify-center lg:justify-end z-10 p-4 lg:p-8">
        
        {/* Core Container - Added 'group' class here to trigger hover effects on children */}
        <div 
          className="relative w-80 h-80 lg:w-96 lg:h-96 animate-float group cursor-crosshair"
          onMouseEnter={() => isHoveredRef.current = true}
          onMouseLeave={() => isHoveredRef.current = false}
        >

          {/* ========================================================= */}
          {/* HUD LAYER 1: The Outer Targeting Perimeter                  */}
          {/* ========================================================= */}
          <div 
            ref={layer1Ref}
            className="absolute -inset-10 lg:-inset-12 rounded-full border border-firebase-cyan/20 pointer-events-none hidden md:block"
          >
            <div className="absolute top-0 left-1/2 w-6 h-1 bg-firebase-cyan -translate-x-1/2 shadow-[0_0_8px_#00bbff]" />
            <div className="absolute bottom-0 left-1/2 w-6 h-1 bg-firebase-cyan -translate-x-1/2 shadow-[0_0_8px_#00bbff]" />
            <div className="absolute left-0 top-1/2 w-1 h-6 bg-firebase-cyan -translate-y-1/2 shadow-[0_0_8px_#00bbff]" />
            <div className="absolute right-0 top-1/2 w-1 h-6 bg-firebase-cyan -translate-y-1/2 shadow-[0_0_8px_#00bbff]" />
          </div>

          {/* ========================================================= */}
          {/* HUD LAYER 2: High-Fidelity Segmented Data Tracks            */}
          {/* ========================================================= */}
          <div 
            ref={layer2Ref}
            className="absolute -inset-7 lg:-inset-8 rounded-full pointer-events-none"
            style={{
              background: 'repeating-conic-gradient(from 0deg, transparent 0deg 4deg, rgba(255,7,58,0.4) 4deg 6deg)',
              WebkitMaskImage: 'radial-gradient(circle, transparent 67%, black 68%)',
              maskImage: 'radial-gradient(circle, transparent 67%, black 68%)',
            }} 
          />
          
          {/* Inner dense, fine tick marks - Moved duration to Tailwind classes */}
          <div 
            ref={layer3Ref}
            className="absolute -inset-3 lg:-inset-4 rounded-full pointer-events-none"
            style={{
              background: 'repeating-conic-gradient(from 0deg, transparent 0deg 2deg, rgba(0,187,255,0.5) 2deg 3deg)',
              WebkitMaskImage: 'radial-gradient(circle, transparent 69%, black 70%)',
              maskImage: 'radial-gradient(circle, transparent 69%, black 70%)',
            }} 
          />

          {/* Solid Orbital Ring with Gaps - Moved duration to Tailwind classes */}
          <div 
            ref={layer4Ref}
            className="absolute -inset-5 lg:-inset-6 rounded-full border-[3px] border-transparent border-t-firebase-cyan/80 border-b-firebase-cyan/80 pointer-events-none" 
          />

          {/* ========================================================= */}
          {/* HUD LAYER 3: Tactical Brackets                              */}
          {/* ========================================================= */}
          {/* Brackets pinch inward slightly on hover to simulate locking on */}
          <div className="absolute -inset-2 lg:-inset-3 pointer-events-none transition-all duration-500 group-hover:-inset-1">
            <div className="absolute top-0 left-0 w-10 h-10 lg:w-12 lg:h-12 border-t-[3px] border-l-[3px] border-firebase-cyan rounded-tl-xl shadow-[-3px_-3px_10px_rgba(0,187,255,0.2)]" />
            <div className="absolute top-0 right-0 w-10 h-10 lg:w-12 lg:h-12 border-t-[3px] border-r-[3px] border-firebase-cyan rounded-tr-xl shadow-[3px_-3px_10px_rgba(0,187,255,0.2)]" />
            <div className="absolute bottom-0 left-0 w-10 h-10 lg:w-12 lg:h-12 border-b-[3px] border-l-[3px] border-neon-red rounded-bl-xl shadow-[-3px_3px_10px_rgba(255,7,58,0.2)]" />
            <div className="absolute bottom-0 right-0 w-10 h-10 lg:w-12 lg:h-12 border-b-[3px] border-r-[3px] border-neon-red rounded-br-xl shadow-[3px_3px_10px_rgba(255,7,58,0.2)]" />
          </div>

          {/* ========================================================= */}
          {/* SIDE UI: Holographic Readouts (Desktop Only)                */}
          {/* ========================================================= */}
          <div className="absolute top-1/4 -right-24 xl:-right-32 hidden lg:flex flex-col gap-2 font-mono text-[9px] xl:text-[10px] text-firebase-cyan pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="w-10 text-right tracking-widest">SYS</span>
              <div className="w-16 h-[2px] bg-firebase-cyan/20"><div className="w-full h-full bg-firebase-cyan animate-glow-pulse" /></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-10 text-right tracking-widest text-neon-red">TMP</span>
              <div className="w-16 h-[2px] bg-neon-red/20"><div className="w-[85%] h-full bg-neon-red animate-neon-pulse" /></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-10 text-right tracking-widest">NRG</span>
              <div className="w-16 h-[2px] bg-firebase-cyan/20"><div className="w-[92%] h-full bg-firebase-cyan" /></div>
            </div>
          </div>

          <div className="absolute bottom-1/4 -left-24 xl:-left-32 hidden lg:flex flex-col gap-1.5 font-mono text-[9px] xl:text-[10px] text-firebase-cyan pointer-events-none text-left transition-opacity duration-300">
            <div className="tracking-widest opacity-70">AZM: 345.9</div>
            <div className="tracking-widest opacity-70">ELV: -12.4</div>
            <div className="flex gap-1 mt-0.5">
               <div className="w-2 h-1.5 bg-firebase-cyan animate-pulse group-hover:animate-none group-hover:bg-neon-red transition-colors" />
               <div className="w-2 h-1.5 bg-firebase-cyan/40 group-hover:bg-neon-red transition-colors delay-75" />
               <div className="w-2 h-1.5 bg-neon-red animate-pulse delay-75 group-hover:animate-none group-hover:bg-neon-red transition-colors" />
            </div>
          </div>

          {/* ========================================================= */}
          {/* THE CORE: Profile Image                                     */}
          {/* ========================================================= */}
          <div className="absolute inset-0 rounded-full overflow-hidden bg-black border-2 border-firebase-cyan/50 shadow-[0_0_20px_rgba(0,187,255,0.3)] z-20 group-hover:border-neon-red/80 transition-colors duration-500 group-hover:shadow-[0_0_30px_rgba(255,7,58,0.4)]">
            
            <img 
              src="/nakul-profile.jpg"
              alt="Nakul - Software Developer"
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

          </div>

        </div>
      </div>
    </>
  )
}

export default Profile