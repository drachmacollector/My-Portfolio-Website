
import React from 'react';
import { Code2, Database, Globe, Smartphone, Zap, Brain } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { icon: Code2, name: 'Frontend Dev', level: 95, color: 'firebase-orange' },
    { icon: Database, name: 'Backend Dev', level: 90, color: 'firebase-red' },
    { icon: Globe, name: 'Web Design', level: 85, color: 'firebase-purple' },
    { icon: Smartphone, name: 'Mobile Dev', level: 80, color: 'firebase-pink' },
    { icon: Zap, name: 'Performance', level: 92, color: 'firebase-blue' },
    { icon: Brain, name: 'Problem Solving', level: 98, color: 'firebase-cyan' },
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
    'AWS', 'Docker', 'GraphQL', 'Next.js', 'Vue.js', 'Rust'
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            About <span className="text-firebase-orange">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-firebase-orange to-firebase-purple mx-auto mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <div className="space-y-8">
            <div className="glass-card p-8 animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 text-firebase-orange">My Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Welcome to my digital realm! I'm Nakul, a passionate full-stack developer 
                  with over 5 years of experience crafting exceptional digital experiences. 
                  My journey began with a simple "Hello World" and has evolved into building 
                  complex, scalable applications that serve millions of users.
                </p>
                <p>
                  I specialize in modern web technologies and have a keen eye for design. 
                  When I'm not coding, you'll find me exploring the latest in AI, 
                  contributing to open-source projects, or perfecting my coffee brewing techniques.
                </p>
                <p>
                  My mission is to bridge the gap between cutting-edge technology and 
                  human-centered design, creating solutions that are not only functional 
                  but truly delightful to use.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-firebase-purple">Technologies I Love</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <div className="neomorph-card p-8 rounded-2xl animate-fade-in">
              <h3 className="text-2xl font-bold mb-8 text-firebase-orange">Skills & Expertise</h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <Icon className={`w-5 h-5 text-${skill.color} group-hover:animate-pulse`} />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className={`text-${skill.color} font-bold`}>{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r from-${skill.color} to-${skill.color}/70 rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: `${skill.level}%`,
                            boxShadow: `0 0 10px rgba(255, 138, 101, 0.5)`
                          }}
                        />
                        <div className={`absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Experience Highlight */}
            <div className="glass-card p-6 animate-fade-in">
              <div className="text-center">
                <div className="text-3xl font-bold text-firebase-orange mb-2">5+</div>
                <p className="text-gray-300">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-firebase-purple/20 rounded-full animate-rotate-slow" />
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-firebase-orange/20 rounded-lg transform rotate-45 animate-float" />
    </section>
  );
};

export default AboutSection;
