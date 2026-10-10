import { Button } from "../components/ui/Button";
import { SectionTitle } from "../components/ui/SectionTitle";

const services = [
  [
    "01",
    "Business Web Applications",
    "Purpose-built web applications for internal workflows, operations, and customer-facing needs.",
  ],
  [
    "02",
    "Backend & REST API Development",
    "Java and Spring Boot services designed around clear contracts and maintainable business logic.",
  ],
  [
    "03",
    "Existing System Improvements",
    "Focused improvements to features, reliability, interfaces, and maintainability in an existing product.",
  ],
  [
    "04",
    "System Integration",
    "Connecting applications and services through practical, well-defined API integrations.",
  ],
];

export function FreelanceServices() {
  return (
    <section className="section freelance" id="services">
      <div className="container">
        <div className="services__intro">
          <SectionTitle
            eyebrow="FREELANCE SERVICES"
            title={"Independent development\nfor practical needs."}
            light
          />
          <p>
            I work independently with businesses that need a thoughtful web
            application, backend capability, or improvement to an existing
            system.
          </p>
        </div>
        <div className="capability-grid freelance-grid">
          {services.map(([number, title, copy]) => (
            <article className="capability-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="freelance__action">
          <Button href="mailto:muhdadzlijefry@gmail.com?subject=Freelance%20project%20inquiry%20for%20Adzli">
            Discuss a Project
          </Button>
        </div>
      </div>
    </section>
  );
}
