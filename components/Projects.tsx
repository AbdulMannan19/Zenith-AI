import React from 'react';
import type { Project } from '../types';

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
  <div className="bg-gray-800/50 rounded-lg overflow-hidden group">
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
    <div className="p-6">
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

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Work</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">Here are some of the innovative solutions we've delivered to our clients.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;