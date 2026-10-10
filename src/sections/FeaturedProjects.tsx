import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { SectionTitle } from "../components/ui/SectionTitle";
import { projects } from "../data/projects";
import type { Project } from "../types/project";
export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="projects__heading">
          <SectionTitle
            eyebrow="FEATURED PROJECTS"
            title="Software with purpose."
            light
          />
          <p>
            Practical software built around clear requirements, maintainable
            code, and dependable behavior.
          </p>
        </div>
        <div className="project-widgets">
          {projects.map((project) => (
            <ProjectCard
              key={project.index}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>
      {selectedProject && (
        <div
          className="project-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dialog-title"
          onClick={() => setSelectedProject(null)}
        >
          <article
            className="project-dialog__content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-dialog__close"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
            >
              <CloseRoundedIcon aria-hidden="true" />
            </button>
            <p className="project-card__number">
              {selectedProject.index} / {selectedProject.status}
            </p>
            <h3 id="project-dialog-title">{selectedProject.title}</h3>
            <p>{selectedProject.caseStudy}</p>
            <ul className="tags" aria-label="Technologies">
              {selectedProject.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <div className="project-links">
              <span>Case study</span>
              {selectedProject.githubUrl && (
                <a href={selectedProject.githubUrl}>GitHub</a>
              )}
              {selectedProject.liveUrl && (
                <a href={selectedProject.liveUrl}>Live demo</a>
              )}
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
