
import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "AI-Powered E-Commerce Platform",
      description: "A next-generation e-commerce platform with AI-driven product recommendations, real-time inventory management, and advanced analytics dashboard.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      tech: ["React", "Node.js", "TensorFlow", "PostgreSQL", "AWS"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Real-Time Collaboration Tool",
      description: "A sophisticated collaboration platform featuring real-time document editing, video conferencing, and project management capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tech: ["Vue.js", "Socket.io", "Express", "MongoDB", "WebRTC"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Web App"
    },
    {
      id: 3,
      title: "Blockchain Analytics Dashboard",
      description: "Advanced analytics platform for cryptocurrency trading with real-time data visualization, portfolio tracking, and market sentiment analysis.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
      tech: ["React", "D3.js", "Python", "FastAPI", "Redis"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Data Viz"
    },
    {
      id: 4,
      title: "Smart IoT Home System",
      description: "Comprehensive IoT platform for smart home automation with mobile app, voice control, and machine learning-based energy optimization.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      tech: ["React Native", "Node.js", "MQTT", "InfluxDB", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
      category: "IoT"
    },
    {
      id: 5,
      title: "AR Shopping Experience",
      description: "Augmented reality application that allows users to visualize products in their space before purchasing, with social sharing features.",
      image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=800&h=600&fit=crop",
      tech: ["Unity", "ARCore", "Firebase", "C#", "Blender"],
      githubUrl: "#",
      liveUrl: "#",
      category: "AR/VR"
    },
    {
      id: 6,
      title: "AI Content Generator",
      description: "Intelligent content creation platform using GPT models for generating blog posts, social media content, and marketing copy with SEO optimization.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      tech: ["Next.js", "OpenAI API", "Stripe", "Supabase", "Vercel"],
      githubUrl: "#",
      liveUrl: "#",
      category: "AI/ML"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Featured <span className="text-firebase-orange">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-firebase-orange to-firebase-purple mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my latest work, featuring cutting-edge technologies and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="glass-card overflow-hidden h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-firebase-orange/20 text-firebase-orange text-xs font-semibold rounded-full backdrop-blur-sm border border-firebase-orange/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-firebase-orange/10 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <button className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
                      <Github className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
                      <Eye className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-firebase-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-tag text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="tech-tag text-xs">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 py-2 px-4 bg-firebase-orange/20 text-firebase-orange rounded-lg hover:bg-firebase-orange/30 transition-colors text-sm font-medium">
                      View Details
                    </button>
                    <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`} style={{
                  boxShadow: '0 0 30px rgba(255, 138, 101, 0.3)'
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-firebase-purple to-firebase-pink rounded-full font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-firebase-purple/25">
            View All Projects
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-firebase-orange rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 right-20 w-1 h-1 bg-firebase-purple rounded-full animate-pulse delay-1000" />
    </section>
  );
};

export default ProjectsSection;
