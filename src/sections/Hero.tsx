import { Button } from '../components/ui/Button'

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">SOFTWARE DEVELOPER</p>

          <h1>
            Build Systems
            <br />
            for <em>Real Problems.</em>
          </h1>

          <p className="hero-description">
            I'm Muhammad Adzli, a software developer focused on building
            backend systems and web applications using Java, Spring Boot and
            modern web technologies. also im gay lol
          </p>

          <div className="hero-actions">
            <Button href="#projects">View My Work</Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>

          <div className="social-row">
            <span>CONNECT</span>
            <a id="github" href="#github">GitHub</a>
            <a id="linkedin" href="#linkedin">LinkedIn</a>
            <a id="email" href="#email">Email</a>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="Future developer workspace image placeholder"
        >
          <div className="hero-visual__grid" />

          <div className="hero-visual__badge">
            <span>JAVA</span>
            <small>
              BACKEND
              <br />
              ENGINEERING
            </small>
          </div>

          <p>
            IMAGE / WORKSPACE
            <br />
            PLACEHOLDER
          </p>

          <div className="hero-visual__code" aria-hidden="true">
            <span>01</span>
            <span>BUILD</span>
            <span>SHIP</span>
            <span>REPEAT</span>
          </div>
        </div>
      </div>
    </section>
  )
}
