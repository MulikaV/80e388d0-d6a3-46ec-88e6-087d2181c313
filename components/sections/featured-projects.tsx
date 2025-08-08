"use client";

import React from 'react';
import ProjectCard from '../portfolio/project-card';
import Container from '../ui/container';

const featuredProjects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of project one and its key features',
    image: '/images/placeholder.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveLink: 'https://project-one.com',
    githubLink: 'https://github.com/username/project-one'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of project two and its key features',
    image: '/images/placeholder.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    liveLink: 'https://project-two.com',
    githubLink: 'https://github.com/username/project-two'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of project three and its key features',
    image: '/images/placeholder.jpg',
    technologies: ['React', 'Firebase', 'SCSS'],
    liveLink: 'https://project-three.com',
    githubLink: 'https://github.com/username/project-three'
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Some of my recent work that showcases my skills and experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;