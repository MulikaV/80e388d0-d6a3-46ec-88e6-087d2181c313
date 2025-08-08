"use client";

import React from 'react';

interface TechFilterProps {
  onFilterChange: (filter: string) => void;
}

const TechFilter: React.FC<TechFilterProps> = ({ onFilterChange }) => {
  const technologies = [
    'All',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'JavaScript',
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <button
          key={tech}
          onClick={() => onFilterChange(tech)}
          className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors"
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export default TechFilter;