import { Button } from "../components/ui/Button";
export function ContactCTA() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <p className="eyebrow">LET'S TALK</p>
        <h2>
          Let's build something <em>useful.</em>
        </h2>
        <div className="contact-paths">
          <article>
            <h3>Hiring & Career Opportunities</h3>
            <p>
              For software engineering roles, team opportunities, or technical
              conversations.
            </p>
            <Button href="mailto:muhdadzlijefry@gmail.com?subject=Hiring%20opportunity%20for%20Adzli">
              Start a conversation
            </Button>
          </article>
          <article>
            <h3>Freelance & Project Inquiries</h3>
            <p>
              For web applications, APIs, system improvements, or integration
              work.
            </p>
            <Button
              href="mailto:muhdadzlijefry@gmail.com?subject=Freelance%20project%20inquiry%20for%20Adzli"
              variant="light"
            >
              Discuss a project
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}
