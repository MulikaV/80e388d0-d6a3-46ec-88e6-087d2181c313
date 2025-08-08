"use client";

import { useState } from 'react';

const TechFilter = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const technologies = [
    'All',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'JavaScript'
  ];

  const handleFilterClick = (tech: string) => {
    const filter = tech.toLowerCase();
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {technologies.map((tech) => (
        <button
          key={tech}
          onClick={() => handleFilterClick(tech)}
          className={`px-4 py-2 rounded-full text-sm transition-all
            ${activeFilter === tech.toLowerCase()
              ? 'bg-primary text-white'
              : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export default TechFilter;