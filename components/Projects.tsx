import React from 'react';
import type { Project } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects: Project[] = [
  {
    image: 'https://picsum.photos/seed/project1/600/400',
    title: 'E-commerce AI Chatbot',
    description: 'A sophisticated chatbot that increased customer engagement by 40% and automated 75% of support queries.',
    tags: ['NLP', 'React', 'Node.js', 'Gemini API'],
  },
  {
    image: 'https://picsum.photos/seed/project2/600/400',
    title: 'Lead Qualification System',
    description: 'An AI-powered system that automatically scores and routes leads, improving sales team efficiency by 30%.',
    tags: ['Machine Learning', 'Python', 'Salesforce'],
  },
  {
    image: 'https://picsum.photos/seed/project3/600/400',
    title: 'Corporate Website Redesign',
    description: 'A full-stack web development project for a major tech firm, resulting in a 50% increase in user retention.',
    tags: ['Next.js', 'Tailwind CSS', 'Vercel'],
  },
  {
    image: 'https://picsum.photos/seed/project4/600/400',
    title: 'Mobile Banking App',
    description: 'A secure and user-friendly mobile app for a regional bank, with features like AI-driven financial advice.',
    tags: ['React Native', 'Firebase', 'AI'],
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="project-card-3d bg-gray-800/50 rounded-lg overflow-hidden group shadow-lg">
    <div className="relative overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title} 
        className="project-image w-full h-48 object-cover" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="p-6 transform group-hover:translateZ(10px)">
      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const Geometric3D: React.FC = () => (
  <div className="absolute top-10 left-10 w-24 h-24 geometric-3d opacity-15 pointer-events-none hidden lg:block">
    <div className="w-full h-full relative">
      {/* Octahedron-like structure */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-cyan-400/40"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[20px] border-l-transparent border-r-transparent border-t-blue-500/40"></div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-0 h-0 border-t-[12px] border-b-[12px] border-r-[20px] border-t-transparent border-b-transparent border-r-cyan-400/40"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0 border-t-[12px] border-b-[12px] border-l-[20px] border-t-transparent border-b-transparent border-l-blue-500/40"></div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-16 bg-gray-900/50 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Geometric3D />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div ref={headerRef} className={`text-center mb-12 scroll-scale-up ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Work</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">Here are some of the innovative solutions we've delivered to our clients.</p>
        </div>
        <div ref={cardsRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 scroll-stagger ${cardsVisible ? 'visible' : ''}`}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;