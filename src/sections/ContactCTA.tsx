import { Button } from '../components/ui/Button'

export function ContactCTA() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">LET'S BUILD SOMETHING</p>
          <h2>
            Interested in
            <br />
            working <em>together?</em>
          </h2>
        </div>

        <div>
          <p>
            I'm open to discussing software development opportunities,
            interesting projects and technology.
          </p>

          <div className="contact-actions">
            <Button href="#email">Get in Touch</Button>
            <Button id="resume" href="#resume" variant="light">
              View Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
