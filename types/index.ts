interface TechFilterProps {
  onFilterChange: (tech: string) => void;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
}

interface ProgressProps {
  label: string;
  value: number;
}

export type {
  TechFilterProps,
  ProjectCardProps,
  Project,
  TimelineItemProps,
  ProgressProps
};