import { about } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <div className="section-tag reveal">01 — Who I am</div>

        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title reveal">
              {about.heading[0]} <em>{about.heading[1]}</em>
            </h2>
            {about.paragraphs.map((p) => (
              <p className="reveal" key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
          </div>

          <div className="about-stats">
            {about.stats.map((s) => (
              <div className="stat-card reveal" key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
