export const SITE_CONFIG = {
  name: 'Developer Portfolio',
  description: 'Personal portfolio website showcasing my work and experience',
  url: 'https://portfolio.dev',
  ogImage: '/images/og-image.jpg',
  links: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  }
}

export const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/#contact' }
]

export const TECH_STACK = [
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Python', icon: 'python' },
  { name: 'JavaScript', icon: 'javascript' }
]

export const SKILLS = [
  { name: 'Frontend Development', level: 90 },
  { name: 'Backend Development', level: 85 },
  { name: 'UI/UX Design', level: 75 },
  { name: 'DevOps', level: 70 }
]

export const EXPERIENCE = [
  {
    title: 'Senior Developer',
    company: 'Tech Corp',
    period: '2020 - Present',
    description: 'Lead developer for enterprise applications'
  },
  {
    title: 'Full Stack Developer',
    company: 'StartUp Inc',
    period: '2018 - 2020',
    description: 'Developed and maintained web applications'
  }
]

export const PROJECTS = [
  {
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution built with Next.js',
    image: '/images/projects/ecommerce.jpg',
    tags: ['Next.js', 'React', 'Node.js'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Task Management App',
    description: 'Project management tool with real-time updates',
    image: '/images/projects/task-app.jpg',
    tags: ['React', 'Firebase', 'Material-UI'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
]

export const CONTACT_FORM = {
  fields: [
    { name: 'name', label: 'Full Name', type: 'text', required: true },
    { name: 'email', label: 'Email Address', type: 'email', required: true },
    { name: 'message', label: 'Message', type: 'textarea', required: true }
  ]
}