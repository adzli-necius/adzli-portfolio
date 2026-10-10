import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    index: "01",
    title: "Workforce Management System (HRMS)",
    description:
      "A workforce management application covering attendance, leave management, and role-based access control.",
    technologies: ["Java", "Spring Boot", "Angular", "MariaDB"],
    status: "In development",
    caseStudy:
      "An internal workforce-management application focused on core HR workflows and role-based access.",
  },
  {
    index: "02",
    title: "Personal Developer Portfolio",
    description:
      "A personal portfolio for projects, technical writing, engineering experience, and independent development services.",
    technologies: ["React", "TypeScript", "Vite", "Vercel"],
    status: "Live",
    caseStudy:
      "A responsive portfolio that presents engineering experience, selected work, and independent development services.",
  },
];
