import { useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { SectionTitle } from '../components/ui/SectionTitle'
import { projects as defaultProjects } from '../data/projects'
import { useStoredCollection } from '../hooks/useStoredCollection'
import type { Project } from '../types/project'

export function FeaturedProjects() {
  const { items: projects } = useStoredCollection<Project>(
    'portfolio-projects',
    defaultProjects,
  )
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="projects__heading">
          <SectionTitle
            eyebrow="SELECTED WORK"
            title="Projects I've Built."
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
              {'\u00D7'}
            </button>

            <p className="project-card__number">
              {selectedProject.index} / PROJECT
            </p>
            <h3 id="project-dialog-title">{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>

            <ul className="tags" aria-label="Technologies">
              {selectedProject.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </article>
        </div>
      )}
    </section>
  )
}
