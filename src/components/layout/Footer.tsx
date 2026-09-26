const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="brand" href="#home" aria-label="Adzli, back to top">
          Adzli<span>.</span>
        </a>

        <p>
          {'\u00A9'} {currentYear} Muhammad Adzli. All rights reserved.
        </p>

        <div className="footer__links" aria-label="Social links">
          <a href="#github">GitHub</a>
          <a href="#linkedin">LinkedIn</a>
          <a href="#email">Email</a>
        </div>
      </div>
    </footer>
  )
}
