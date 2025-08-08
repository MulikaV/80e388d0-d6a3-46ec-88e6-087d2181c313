interface TechFilterProps {
  onFilterChange: (selectedTech: string) => void;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface TimelineItemProps {
  date: string;
  title: string;
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