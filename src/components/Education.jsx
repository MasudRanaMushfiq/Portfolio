import { education } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function Education() {
  const ref = useReveal();

  return (
    <section className="education" id="education" ref={ref}>
      <div className="education-bg">
        <div className="grid-lines" />
        <div className="shape shape-triangle" />
        <div className="shape shape-dots" />
      </div>
      <div className="container">
        <div className="section-tag reveal">05 — Where I study</div>
        <h2 className="section-title reveal">
          Educa<em>tion</em>
        </h2>

        <div className="education-card reveal">
          <div className="edu-period">{education.period}</div>
          <div className="edu-body">
            <h3>{education.degree}</h3>
            <div className="edu-school">{education.school}</div>
            <p>{education.description}</p>
            <div className="chips">
              {education.coursework.map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
          </div>
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
