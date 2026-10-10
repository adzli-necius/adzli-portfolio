import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="brand" href="#home" aria-label="Adzli, home">
          Adzli<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          {isOpen ? (
            <CloseRoundedIcon aria-hidden="true" />
          ) : (
            <MenuRoundedIcon aria-hidden="true" />
          )}
        </button>
        <nav
          id="primary-navigation"
          className={`nav${isOpen ? " nav--open" : ""}`}
          aria-label="Primary navigation"
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="nav__resume" href="#resume" onClick={closeMenu}>
            Download Resume{" "}
            <DownloadRoundedIcon aria-hidden="true" fontSize="small" />
          </a>
        </nav>
      </div>
    </header>
  );
}
