import { SectionTitle } from "../components/ui/SectionTitle";
import { capabilities } from "../data/capabilities";

export function Services() {
  return (
    <section className="section services" id="expertise">
      <div className="container">
        <div className="services__intro">
          <SectionTitle
            eyebrow="TECHNICAL EXPERTISE"
            title={"Tools for reliable\nsoftware."}
          />
          <p>
            My work combines practical backend engineering with considered
            interfaces, integrations, and delivery practices.
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability-card" key={capability.number}>
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
              <ul>
                {capability.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
