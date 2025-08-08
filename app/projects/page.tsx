import { FC } from 'react';
import ProjectGrid from '@/components/portfolio/project-grid';
import TechFilter from '@/components/portfolio/tech-filter';
import Container from '@/components/ui/container';

const ProjectsPage: FC = () => {
  return (
    <main className="min-h-screen py-16">
      <Container>
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="mb-8">
          <TechFilter />
        </div>
        <ProjectGrid />
      </Container>
    </main>
  );
};

export default ProjectsPage;

export const metadata = {
  title: 'Projects | Developer Portfolio',
  description: 'Browse through my latest projects and case studies',
};