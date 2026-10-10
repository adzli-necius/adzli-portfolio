import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import type { Project } from "../types/project";
interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}
export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <button
      type="button"
      className="project-widget"
      onClick={() => onSelect(project)}
    >
      <span className="project-widget__number">
        {project.index} / {project.status}
      </span>
      <span className="project-widget__body">
        <strong>{project.title}</strong>
        <span>{project.description}</span>
      </span>
      <span className="project-widget__action">
        View case study{" "}
        <ArrowOutwardRoundedIcon aria-hidden="true" fontSize="small" />
      </span>
    </button>
  );
}
