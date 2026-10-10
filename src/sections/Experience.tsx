import { SectionTitle } from "../components/ui/SectionTitle";
import { experience } from "../data/experience";

export function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <SectionTitle
          eyebrow="PROFESSIONAL EXPERIENCE"
          title="Building experience through real software."
        />
        <div className="timeline" aria-label="Work experience timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.title}>
              <div className="timeline-item__marker" />
              <p className="timeline-item__period">{item.period}</p>
              <h3>{item.title}</h3>
              <p className="timeline-item__org">{item.organization}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
