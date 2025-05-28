
import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Parkify - Smart Parking",
      description: "A modern smart parking system designed to streamline the process of finding and booking parking spots. With a futuristic UI and interactive features, it helps users locate, reserve, and manage parking efficiently in real-time.",
      image: "/lovable-uploads/9aa61c9a-4fe2-4779-b8f8-511c92ef213d.png",
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
    <section id="projects" className="py-20 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            My <span className="text-netflix-red">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-netflix-red to-neon-red mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my latest work, featuring cutting-edge technologies and innovative solutions
          </p>
        </div>

        {/* Project Card */}
        <div className="flex justify-center">
          <div
            className="project-card group cursor-pointer max-w-md"
            onMouseEnter={() => setHoveredProject(projects[0].id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="glass-card overflow-hidden h-full">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-netflix-red/20 text-netflix-red text-xs font-semibold rounded-full backdrop-blur-sm border border-netflix-red/30">
                    {projects[0].category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-netflix-red/10 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                  hoveredProject === projects[0].id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button 
                    onClick={() => handleGithubClick(projects[0].githubUrl)}
                    className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </button>
                  <button 
                    onClick={() => handleLiveClick(projects[0].liveUrl)}
                    className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </button>
                  <button className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <Eye className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-netflix-red transition-colors">
                  {projects[0].title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {projects[0].description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[0].tech.map((tech) => (
                    <span key={tech} className="tech-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleLiveClick(projects[0].liveUrl)}
                    className="flex-1 py-2 px-4 bg-netflix-red/20 text-netflix-red rounded-lg hover:bg-netflix-red/30 transition-colors text-sm font-medium"
                  >
                    View Live Demo
                  </button>
                  <button 
                    onClick={() => handleGithubClick(projects[0].githubUrl)}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${
                hoveredProject === projects[0].id ? 'opacity-100' : 'opacity-0'
              }`} style={{
                boxShadow: '0 0 30px rgba(229, 9, 20, 0.3)'
              }} />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            onClick={() => handleGithubClick('https://github.com/drachmacollector')}
            className="px-8 py-4 bg-gradient-to-r from-neon-red to-netflix-red rounded-full font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-netflix-red/25"
          >
            View More on GitHub
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-netflix-red rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 right-20 w-1 h-1 bg-neon-red rounded-full animate-pulse delay-1000" />
    </section>
  );
};

export default ProjectsSection;
