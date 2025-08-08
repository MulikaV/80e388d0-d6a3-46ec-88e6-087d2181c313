import Hero from '@/components/sections/hero'
import TechStack from '@/components/sections/tech-stack'
import FeaturedProjects from '@/components/sections/featured-projects'
import Skills from '@/components/sections/skills'
import Experience from '@/components/sections/experience'
import Contact from '@/components/sections/contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}

export const metadata = {
  title: 'Developer Portfolio',
  description: 'Personal portfolio website showcasing my projects and skills',
}