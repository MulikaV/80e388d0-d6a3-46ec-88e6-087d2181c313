"use client";

import { useState } from 'react';

interface TechFilterProps {
  onFilterChange: (filter: string) => void;
}

const TechFilter = ({ onFilterChange }: TechFilterProps) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'react', 'next.js', 'typescript', 'node.js'];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterClick(filter)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${
              activeFilter === filter
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
            }`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TechFilter;