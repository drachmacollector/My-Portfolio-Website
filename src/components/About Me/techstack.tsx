const Techstack = () => {
  const techStack = [
    'HTML', 'CSS', 'Javascript', 'PHP', 'MySQL', 'Python', 'Canva', 'Figma', 
    'OBS', 'C', 'React', 'Tailwind', 'MongoDB', 'Github', 'Git', 'Blender', 'Typescript'
  ];

  return(
    <div className="w-full bg-gradient-to-r from-firebase-orange to-firebase-purple rounded-2xl p-[1px] 
    shadow-lg transition transform duration-300 hover:scale-105 
    hover:shadow-[0_0_20px_rgba(255,95,31,0.1),0_0_40px_rgba(188,19,254,0.1)]">
      
      <div className="w-full bg-black/100 rounded-2xl px-4 py-4">
        <h3 className="text-lg font-bold text-white mb-4 text-center">Tech Stack</h3>
        
        <div className="overflow-hidden whitespace-nowrap flex items-center">
          <div className="marquee-slow flex items-center">
            {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, index) => (
              <div key={index} className="flex flex-col items-center space-y-1 mx-8 hover:scale-110 
              transition-transform hover:drop-shadow-[0_0_10px_rgba(100,200,255,0.5)]">
                <img 
                  src={`/Uploads/${tech}.png`} 
                  alt={tech}
                  className="w-10 h-10 object-contain"
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
    </div>
  );
};

export default Techstack;