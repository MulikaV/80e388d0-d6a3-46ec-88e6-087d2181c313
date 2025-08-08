"use client";

import React from 'react';
import ProjectCard from './project-card';
import TechFilter from './tech-filter';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of project one',
    image: '/images/placeholder.jpg',
    technologies: ['React', 'TypeScript', 'SCSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  },
  // Add more projects here
];

const ProjectGrid: React.FC = () => {
  const [selectedTech, setSelectedTech] = React.useState<string>('all');
  const [filteredProjects, setFilteredProjects] = React.useState<Project[]>(projects);

  const handleFilterChange = (tech: string) => {
    setSelectedTech(tech);
    if (tech === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.technologies.includes(tech))
      );
    }
  };

  return (
    <div className="container mx-auto px-4">
      <TechFilter 
        selectedTech={selectedTech} 
        onFilterChange={handleFilterChange} 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard 
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;