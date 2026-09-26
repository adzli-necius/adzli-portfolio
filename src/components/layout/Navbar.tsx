import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Writing', href: '#writing' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="brand" href="#home" aria-label="Adzli, home">Adzli<span>.</span></a>

        <button className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="primary-navigation" onClick={() => setIsOpen((open) => !open)}>
          <span className="sr-only">Toggle navigation</span>
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className={`nav${isOpen ? ' nav--open' : ''}`} aria-label="Primary navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}><a href={link.href} onClick={closeMenu}>{link.label}</a></li>
            ))}
            <li><a href="#manage" onClick={closeMenu}>Manage</a></li>
          </ul>

          <a className="nav__resume" href="#resume" onClick={closeMenu}>
            Download Resume <span aria-hidden="true">{'\u2193'}</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
