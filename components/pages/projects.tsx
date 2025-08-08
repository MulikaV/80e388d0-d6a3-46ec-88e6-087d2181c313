"use client";

import { Container } from "@/components/ui/container";
import { TechFilter } from "@/components/portfolio/tech-filter";
import { ProjectGrid } from "@/components/portfolio/project-grid";
import { useState } from "react";

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState<string>("all");

  const handleFilterChange = (tech: string) => {
    setSelectedTech(tech);
  };

  return (
    <Container>
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="mb-8">
        <TechFilter onFilterChange={handleFilterChange} />
      </div>
      <ProjectGrid selectedTech={selectedTech} />
    </Container>
  );
}