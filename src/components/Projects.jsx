import { useState } from "react";
import { profile, projectCategories, projects } from "../data";
import { useReveal } from "../hooks/useReveal";

const BASE = import.meta.env.BASE_URL;

// Each shot is pre-cropped to 4:3 (the ratio .project-img-wrap renders at) and
// encoded as WebP in two widths. The second width is capped at whatever the
// source could supply without upscaling, which is why it varies per project.
const projectImageMap = {
  "ru-employee-profile-management-system": ["ru-employee-profile", 640, 1225],
  "ru-student-management-system": ["rusms", 640, 1280],
  trylense: ["trylense", 640, 1184],
  "online-judge": ["online-judge", 640, 874],
  "laravel-blood-donation-backend": ["blood-donation-backend", 640, 1280],
  "ticket-booking-app": ["ticket-booking", 640, 1280],
  "task-poster-app": ["task-poster", 640, 1080],
};

// Card is full-bleed inside the container on mobile, half the grid above it.
const PROJECT_IMG_SIZES =
  "(max-width: 760px) calc(100vw - 44px), (max-width: 1184px) calc((100vw - 86px) / 2), 517px";

function ProjectShot({ slug, alt }) {
  const entry = projectImageMap[slug];
  if (!entry) return null;

  const [name, ...widths] = entry;
  const largest = widths[widths.length - 1];

  return (
    <img
      className="project-img"
      src={`${BASE}assets/${name}-${largest}.webp`}
      srcSet={widths
        .map((w) => `${BASE}assets/${name}-${w}.webp ${w}w`)
        .join(", ")}
      sizes={PROJECT_IMG_SIZES}
      width={largest}
      height={Math.round((largest * 3) / 4)}
      alt={alt}
      loading="lazy"
      decoding="async"
    />
  );
}

export default function Projects() {
  const ref = useReveal();
  const [activeCat, setActiveCat] = useState("All");

  const filteredProjects =
    activeCat === "All"
      ? projects
      : projects.filter((p) => p.category === activeCat);

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="projects-bg">
        <div className="grid-lines" />
        <div className="shape shape-ring" />
        <div className="shape shape-dots" />
      </div>
      <div className="container">
        <div className="section-tag reveal">03 — What I've built</div>
        <h2 className="section-title reveal">
          My Latest <em>Projects</em>
        </h2>
        <p className="projects-intro reveal">
          A few things I've designed, built, and shipped — from mobile apps to
          backend systems and developer tools.
        </p>

        <nav className="project-filter reveal">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${activeCat === cat ? " active" : ""}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        <div className="project-list">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div className="project-card reveal" key={project.title}>
                <div className="project-img-wrap">
                  <ProjectShot slug={project.slug} alt={project.title} />
                </div>
                <span className="project-type">{project.type}</span>
                <div className="project-top">
                  <h3>{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.tags.map((tag, j) => (
                    <span className="project-tag" key={tag}>
                      {j > 0 && <span className="tag-sep">·</span>}
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn project-btn--ghost"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn project-btn--primary"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                        <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                      </svg>
                      Live
                    </a>
                  )}
                  {project.slug && (
                    <a
                      href={`${BASE}projects/${project.slug}.html`}
                      className="project-btn project-btn--outline"
                    >
                      Details
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="project-empty">No projects in this category yet.</p>
          )}
        </div>

        <div className="projects-more reveal">
          <a
            href={`${profile.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
          >
            View all projects <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
