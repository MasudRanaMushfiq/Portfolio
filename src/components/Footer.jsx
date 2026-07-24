import { profile } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-prompt">masud-rana-mushfiq · portfolio</div>

        <span className="footer-sep" aria-hidden="true">
          ·
        </span>

        <span className="footer-prompt footer-tagline">
          Building elegant solutions at the intersection of web and software.
        </span>

        <span className="footer-sep" aria-hidden="true">
          ·
        </span>

        <div className="footer-copy">
          © {year} {profile.name} · built with vite + react
        </div>
      </div>
    </footer>
  );
}
