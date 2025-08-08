"use client";

import { Project } from '@/types';
import { projects } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectGridProps {
  filter?: string;
}

export const ProjectGrid = ({ filter = 'all' }: ProjectGridProps) => {
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProjects.map((project) => (
        <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Live Demo
                </Link>
              )}
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="text-gray-500 hover:text-gray-600"
                >
                  GitHub
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};