import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    index: '01', title: 'Workforce Management System',
    description: 'A workforce management application covering attendance, leave management and role-based access control.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'MariaDB'],
  },
  {
    index: '02', title: 'Portfolio Website',
    description: 'Personal developer portfolio for projects, technical writing and engineering experience.',
    technologies: ['React', 'TypeScript', 'Vite', 'GitHub Pages'],
  },
]
