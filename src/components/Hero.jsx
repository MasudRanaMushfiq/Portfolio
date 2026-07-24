import { profile } from "../data";
import { useReveal } from "../hooks/useReveal";

const profileSpecs = [
  { label: "role", value: "CSE Student · Full-Stack Developer" },
  { label: "languages", value: "C · C++ · Java · JS · TS · Python" },
  { label: "stack", value: "React · React Native · Laravel · Firebase" },
  { label: "availability", value: profile.availability },
];

export default function Hero() {
  const ref = useReveal();

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero-bg">
        <div className="grid-lines" />
        <div className="shape shape-ring" />
        <div className="shape shape-square" />
        <div className="shape shape-plus" />
        <div className="shape shape-triangle" />
        <div className="shape shape-dots" />
      </div>

      <div className="container hero-inner">
        <div className="hero-layout">
          {/* ---------- Left column : intro ---------- */}
          <div className="hero-intro reveal">
            <p className="hero-prompt">web · mobile · backend</p>

            <h1 className="hero-title">
              {profile.firstName}
              <span className="hero-title-accent">{profile.lastName}</span>
            </h1>

            <p className="hero-sub">
              Computer Science undergrad at the{" "}
              <strong>{profile.university}</strong>,{" "}
              {profile.tagline.charAt(0).toLowerCase() +
                profile.tagline.slice(1)}
            </p>

            <div className="hero-links">
              <a
                href={`mailto:${profile.email}`}
                className="hero-link"
                aria-label="Email"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email
              </a>
              <a
                href={profile.github}
                className="hero-link"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                GitHub
              </a>
              <a
                href={profile.linkedin}
                className="hero-link"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href={`${import.meta.env.BASE_URL}assets/Masud_Rana_Mushfiq_Resume%20.pdf`}
                download
                className="hero-link hero-link--resume"
                aria-label="Resume"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                Resume
              </a>
            </div>

            <a href="#about" className="hero-scroll">
              <span className="hero-scroll-line" />
              Explore more
            </a>
          </div>

          {/* ---------- Right column : profile card ---------- */}
          <aside
            className="hero-profile reveal"
            aria-label="Engineering profile"
          >
            <div className="hero-profile-header">
              <span className="hero-profile-dot" />
              <span>developer.profile</span>
            </div>
            <dl className="hero-profile-specs">
              {profileSpecs.map((spec) => (
                <div key={spec.label} className="hero-profile-row">
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>

      <div className="hero-wave">
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          className="hero-wave-svg"
        >
          <path
            d="M0,120 C180,160 360,20 540,70 C720,120 900,0 1080,50 C1260,100 1350,30 1440,60 L1440,150 L0,150 Z"
            className="hero-wave-fill"
          />
          <path
            d="M0,120 C180,160 360,20 540,70 C720,120 900,0 1080,50 C1260,100 1350,30 1440,60"
            className="hero-wave-line"
          />
        </svg>
      </div>
    </section>
  );
}
