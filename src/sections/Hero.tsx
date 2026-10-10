import { Button } from "../components/ui/Button";

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">SOFTWARE ENGINEER Â· FREELANCE DEVELOPER</p>
          <h1>
            Hi, I'm Adzli.
            <br />
            Building Software for <em>Real-World Problems.</em>
          </h1>
          <p className="hero-description">
            I'm a Java developer specializing in Spring Boot, REST APIs, and
            full-stack web applications. I contribute to enterprise software
            systems and independently develop practical digital solutions for
            businesses.
          </p>
          <div className="hero-actions">
            <Button href="#projects">Explore Projects</Button>
            <Button href="#services" variant="secondary">
              Work With Me
            </Button>
            <Button href="#resume" variant="secondary">
              Download Resume
            </Button>
          </div>
          <div className="social-row">
            <span>CONNECT</span>
            <a href="https://github.com/adzli-necius">GitHub</a>
            <a href="#linkedin">LinkedIn</a>
            <a href="mailto:muhdadzlijefry@gmail.com?subject=Hiring%20opportunity%20for%20Adzli">
              Email
            </a>
          </div>
        </div>
        <div
          className="hero-visual"
          aria-label="Developer architecture illustration"
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
          <div className="hero-visual__architecture" aria-hidden="true">
            <span>CLIENT</span>
            <i />
            <span>API</span>
            <i />
            <span>DATA</span>
          </div>
          <div className="hero-visual__code" aria-hidden="true">
            <span>01</span>
            <span>DESIGN</span>
            <span>BUILD</span>
            <span>SHIP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
