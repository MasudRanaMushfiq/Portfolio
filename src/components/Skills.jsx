import { skills } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function Skills() {
  const ref = useReveal();

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="skills-bg">
        <div className="grid-lines" />
        <div className="shape shape-square" />
      </div>
      <div className="container">
        <div className="section-tag reveal">04 — Tools I operate</div>
        <h2 className="section-title reveal">
          Tools I <em>operate</em>
        </h2>
        <p className="skills-sub reveal">
          The full surface of what I run day-to-day — language, framework,
          infrastructure, and observability.
        </p>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <div
              className="skill-card reveal"
              key={group.group}
              style={{ "--group-color": group.color }}
            >
              <h3>{group.group}</h3>
              <div className="chips">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
