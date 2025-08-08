"use client";

import { techStack } from "@/lib/constants";

export interface TechFilterProps {
  onFilterChange: (tech: string) => void;
  selectedTech: string;
}

export const TechFilter = ({ onFilterChange, selectedTech }: TechFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => onFilterChange("all")}
        className={`px-4 py-2 rounded-full ${
          selectedTech === "all"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        All
      </button>
      {techStack.map((tech) => (
        <button
          key={tech}
          onClick={() => onFilterChange(tech)}
          className={`px-4 py-2 rounded-full ${
            selectedTech === tech
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};