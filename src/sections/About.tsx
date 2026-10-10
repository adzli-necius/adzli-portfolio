import { SectionTitle } from "../components/ui/SectionTitle";
import { Writing } from "./Writing";

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div>
          <SectionTitle
            eyebrow="ABOUT ME"
            title="Engineering with context and care."
          />
          <p>
            I am a software developer focused on backend systems and modern web
            applications. I enjoy turning real operational needs into clear,
            maintainable software.
          </p>
          <p>
            My approach is grounded in understanding the problem first,
            communicating clearly, and delivering practical solutions.
          </p>
        </div>
        <Writing />
      </div>
    </section>
  );
}
