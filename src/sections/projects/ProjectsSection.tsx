import React, { useState, useRef } from 'react';
import { Github } from 'lucide-react';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { PROJECTS } from '@/constants/projects';
import { useIsMobile } from '@/hooks/use-mobile';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useGSAP(() => {
    // Skip horizontal scroll pinning on mobile — too expensive on Android
    if (isMobile) return;

    const projectsContainer = scrollRef.current;
    if (!projectsContainer) return;

    const scrollWidth = projectsContainer.scrollWidth;
    const windowWidth = window.innerWidth;
    const scrollDistance = scrollWidth - windowWidth + 200;

    if (scrollDistance > 0) {
      gsap.to(projectsContainer, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + scrollDistance,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        }
      });
    }
  }, { scope: sectionRef, dependencies: [isMobile] });

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  // On mobile: simple vertical grid layout, no horizontal scroll pinning
  if (isMobile) {
    return (
      <section id="projects" ref={sectionRef} className="relative bg-transparent py-12 px-6">
        <div className="w-full flex flex-col">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-6">
              My <span className="text-firebase-red">Projects</span>
            </h2>
          </div>
          <div className="flex flex-col gap-10 items-center">
            {PROJECTS.map((project) => (
              <div key={project.id} className="w-full max-w-sm">
                <div className="bg-slate-950 border border-white/[0.2] rounded-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-tag text-xs">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => handleExternalLink(project.liveUrl)}
                        className="flex-1 py-2 rounded-full border-[2px] border-rose-600 text-white text-sm font-medium"
                      >
                        Live Demo
                      </button>
                      <button
                        onClick={() => handleExternalLink(project.githubUrl)}
                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" ref={sectionRef} className="relative h-screen bg-transparent overflow-hidden flex flex-col justify-start pt-12 md:pt-10">
      <div className="w-full flex flex-col">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-10 shrink-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-firebase-red">Projects</span>
          </h2>
        </div>

        {/* Projects Grid Container */}
        <div className="pl-12 lg:pl-32 flex-1 flex items-center min-h-0">
          <div ref={scrollRef} className="flex gap-24 pr-[20vw]">
            {PROJECTS.map((project) => (
              <div 
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="flex-shrink-0"
              >
              <CardContainer className="inter-var">
                <CardBody className="bg-slate-950 relative group/card dark:hover:shadow-2xl 
                dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] 
                border-black/[0.5] w-17% sm:w-[30rem] h-auto rounded-xl p-0 border">
                  {/* Project Image */}
                  <CardItem translateZ="50" className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-500 
                      group-hover/card:scale-110 rounded-xl"
                    />
                    <div className="absolute inset-0" />
                  </CardItem>

                  {/* Project Content */}
                  <div className="p-6">
                    <CardItem
                      translateZ="60"
                      className="text-2xl font-bold mb-3 transition-colors"
                    >
                      {project.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="30"
                      className="text-gray-400 text-sm mb-4"
                    >
                      {project.description}
                    </CardItem>

                    {/* Tech Stack */}
                    <CardItem translateZ="40" className="flex flex-wrap gap-3 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-tag text-xs">
                          {tech}
                        </span>
                      ))}
                    </CardItem>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <CardItem translateZ="50" className="flex-1">
                        <button
                          type="button"
                          onClick={() => handleExternalLink(project.liveUrl)}
                          className="flex justify-center gap-2 items-center w-full text-lg 
                          bg-zinc-950 border-rose-600 border-[2px] relative px-8 py-2 rounded-full 
                          overflow-hidden group transition-all cursor-pointer hover:brightness-100 active:brightness-90"
                        >
                          <span className="relative z-20 group-hover:text-white transition-colors duration-300">
                            Live Demo
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
                          onClick={() => handleExternalLink(project.githubUrl)}
                          className="w-12 h-12 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </button>
                      </CardItem>
                    </div>

                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`} style={{
                    boxShadow: '0 0 30px rgba(19, 172, 254, 0.35)',
                  }} />
                </CardBody>
              </CardContainer>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
