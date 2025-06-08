const Techstack = () => {
  const techStack = [
    'HTML', 'CSS', 'Javascript', 'PHP', 'MySQL', 'Python', 'Canva', 'Figma', 
    'OBS', 'C', 'React', 'Tailwind', 'MongoDB', 'Github', 'Git', 'Blender', 'Typescript'
  ];

  return(
    <div className="col-span-full row-span-1 bg-black/30 border border-white/20 rounded-2xl 
    shadow-lg transition transform duration-300 hover:scale-105 hover:border-white/40 
    hover:drop-shadow-[0_0_10px_rgba(100,200,255,0.25)] px-4 py-4">

      <h3 className="text-lg font-bold text-white mb-4 text-center">Tech Stack</h3>
      
      <div className="overflow-hidden whitespace-nowrap flex items-center">
        <div className="marquee-slow flex items-center">
          {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, index) => (
            <div key={index} className="flex flex-col items-center space-y-1 mx-8 hover:scale-110 
            transition-transform hover:drop-shadow-[0_0_10px_rgba(100,200,255,0.5)]">
              <img 
                src={`/lovable-uploads/${tech}.png`} 
                alt={tech}
                className="w-12 h-12 object-contain"
              />
              <span className="text-s text-white/80 capitalize">{tech}</span>
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
      `}
      </style>
    </div>
  );
};

export default Techstack;