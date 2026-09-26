import type { Project } from '../types/project'

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <button
      type="button"
      className="project-widget"
      onClick={() => onSelect(project)}
    >
      <span className="project-widget__number">{project.index}</span>

      <span className="project-widget__body">
        <strong>{project.title}</strong>
        <span>{project.description}</span>
      </span>

      <span className="project-widget__action">
        View details <span aria-hidden="true">{'\u2197'}</span>
      </span>
    </button>
  )
}
