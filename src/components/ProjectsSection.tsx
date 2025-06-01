import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Parkify - Smart Parking",
      description: "A modern smart parking system designed to streamline the process of finding and booking parking spots. With a futuristic UI and interactive features, it helps users locate, reserve, and manage parking efficiently in real-time.",
      image: "/lovable-uploads/Parkify.png",
      tech: ["PHP", "MySQL", "Javascript", "HTML", "CSS"],
      githubUrl: "https://github.com/drachmacollector/parkify",
      liveUrl: "https://parkify.great-site.net/",
      category: "Web App"
    }
  ];

  const handleGithubClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleLiveClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="py-12 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center ">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            My <span className="text-firebase-red">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-netflix-red to-neon-red mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my latest work, featuring cutting-edge technologies and innovative solutions
          </p>
        </div>

        {/* Project Card  */}
        <div className="flex justify-center">
          <div 
            onMouseEnter={() => setHoveredProject(projects[0].id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-slate-950 relative group/card dark:hover:shadow-2xl 
              dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] 
              border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-0 border border-netflix-red/30">
                {/* Project Image */}
                <CardItem translateZ="60" className="relative">
                  <img
                    src={projects[0].image}
                    alt={projects[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 
                    group-hover/card:scale-110 rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <CardItem translateZ="60" className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-netflix-red/20 text-netflix-red text-xs font-semibold 
                    rounded-full backdrop-blur-sm border border-netflix-red/30">
                      {projects[0].category}
                    </span>
                  </CardItem>
                </CardItem>

                {/* Project Content */}
                <div className="p-6">
                  <CardItem
                    translateZ="60"
                    className="text-2xl font-bold mb-3 group-hover/card:text-netflix-red transition-colors"
                  >
                    {projects[0].title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="30"
                    className="text-gray-400 text-sm mb-4"
                  >
                    {projects[0].description}
                  </CardItem>

                  {/* Tech Stack */}
                  <CardItem translateZ="40" className="flex flex-wrap gap-3 mb-4">
                    {projects[0].tech.map((tech) => (
                      <span key={tech} className="tech-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </CardItem>

                  {/* Action Buttons */}
      {/* Action Buttons */}
      <div className="flex space-x-3">
        <CardItem translateZ="50" className="flex-1">
          <button
            type="button"
            onClick={() => handleLiveClick(projects[0].liveUrl)}
            className="flex justify-center gap-2 items-center w-full text-lg 
            bg-zinc-950 border-rose-600 border-[2px] relative px-8 py-2 rounded-lg 
            overflow-hidden group transition-all cursor-pointer hover:brightness-100 active:brightness-90"
          >
            <span className="relative z-20 group-hover:text-white transition-colors duration-300">
              View Live Demo
            </span>
            <svg
              className="w-8 h-8 justify-end text-white ease-linear duration-300 rounded-full 
              p-2 rotate-45 group-hover:rotate-90 group-hover:bg-white group-hover:text-rose-600"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 
                0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 
                6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 
                1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 
                8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 
                0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-current"
              ></path>
            </svg>

            <span 
              className="absolute inset-0 w-full h-full transition-all duration-700 
              before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 
              before:-translate-y-1/2 before:w-5 before:h-5 before:rounded-full before:bg-rose-600 
              before:opacity-0 before:transition-all before:duration-700 group-hover:before:opacity-100 
              group-hover:before:scale-[15] group-hover:before:w-full group-hover:before:h-full -z-10"
            ></span>
          </button>
        </CardItem>
        <CardItem translateZ="50">
          <button 
            onClick={() => handleGithubClick(projects[0].githubUrl)}
            className="w-12 h-12 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
          >
            <Github className="w-5 h-5 text-white" />
          </button>
        </CardItem>
      </div>

                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${
                  hoveredProject === projects[0].id ? 'opacity-100' : 'opacity-0'
                }`} style={{
                  boxShadow: '0 0 30px rgb(0, 187, 255, 0.3)',
                }} />
              </CardBody>
            </CardContainer>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            onClick={() => handleGithubClick('https://github.com/drachmacollector')}
            className="px-8 py-4 bg-gradient-to-r from-neon-red to-netflix-red rounded-full font-semibold 
            text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-netflix-red/25"
          >
            View More on GitHub
          </button>
        </div>
      </div>

    </section>
  );
};

export default ProjectsSection;