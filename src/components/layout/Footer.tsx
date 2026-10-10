import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
const currentYear = new Date().getFullYear();
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="brand" href="#home" aria-label="Adzli, back to top">
          Adzli<span>.</span>
        </a>
        <p>© {currentYear} Muhammad Adzli. All rights reserved.</p>
        <div className="footer__links" aria-label="Social links">
          <a href="https://github.com/adzli-necius" aria-label="GitHub">
            <GitHubIcon fontSize="small" aria-hidden="true" />
            <span>GitHub</span>
          </a>
          <a href="#linkedin" aria-label="LinkedIn">
            <LinkedInIcon fontSize="small" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:muhdadzlijefry@gmail.com" aria-label="Email">
            <MailOutlineRoundedIcon fontSize="small" aria-hidden="true" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
