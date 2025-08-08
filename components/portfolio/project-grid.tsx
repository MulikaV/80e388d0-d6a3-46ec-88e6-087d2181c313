"use client";

import React from 'react';
import ProjectCard from './project-card';
import { projects } from '@/lib/constants';

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          technologies={project.technologies}
          liveLink={project.liveLink}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;