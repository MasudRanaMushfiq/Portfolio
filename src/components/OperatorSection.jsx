import { useReveal } from "../hooks/useReveal";

const operatorPoints = [
  {
    title: "Full-Stack Web Development",
    desc: "React frontends paired with Laravel backends — building complete web apps from database schema to responsive UI.",
  },
  {
    title: "Mobile Engineering",
    desc: "Cross-platform mobile apps with React Native and Expo — real-time sync, push notifications, and Firebase integration.",
  },
  {
    title: "RESTful API Design",
    desc: "Clean, versioned APIs with Laravel and Node.js — middleware, validation, authentication, and documented endpoints.",
  },
  {
    title: "Backend Architecture",
    desc: "Laravel service layers, Firebase real-time DB, role-based access control, and efficient data modeling.",
  },
  {
    title: "Problem Solving with DSA",
    desc: "Strong foundations in C, C++, and Java — applying data structures and algorithms to write efficient, scalable code.",
  },
  {
    title: "Developer Tooling",
    desc: "Git & GitHub workflows, Docker sandboxing, LaTeX documentation, and OOP principles across every project.",
  },
];

function OperatorIcon({ kind }) {
  const common = {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (kind === "fullstack") {
    return (
      <svg {...common}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="m7 10 3 3-3 3" />
        <path d="m17 10-3 3 3 3" />
        <circle cx="12" cy="10" r="1.5" />
      </svg>
    );
  }

  if (kind === "mobile") {
    return (
      <svg {...common}>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
        <path d="M8 6h8" />
      </svg>
    );
  }

  if (kind === "api") {
    return (
      <svg {...common}>
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <path d="M6 6h.01" />
        <path d="M6 18h.01" />
        <path d="M14 6h4" />
        <path d="M14 18h4" />
      </svg>
    );
  }

  if (kind === "backend") {
    return (
      <svg {...common}>
        <path d="M22 12h-4l-3 9H9l-3-9H2" />
        <path d="M12 2v10" />
        <path d="M12 12l-4 3" />
        <path d="M12 12l4 3" />
      </svg>
    );
  }

  if (kind === "dsa") {
    return (
      <svg {...common}>
        <circle cx="5" cy="12" r="2" />
        <circle cx="12" cy="5" r="2" />
        <circle cx="19" cy="12" r="2" />
        <circle cx="12" cy="19" r="2" />
        <path d="M7 12h10" />
        <path d="M12 7v10" />
      </svg>
    );
  }

  if (kind === "tooling") {
    return (
      <svg {...common}>
        <path d="M10 20h4" />
        <path d="M12 20v-8" />
        <path d="M4 8h16" />
        <path d="M6 4h4l2-2 2 2h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9" />
    </svg>
  );
}

export default function OperatorSection() {
  const ref = useReveal();

  return (
    <section className="operator" id="operator" ref={ref}>
      <div className="container">
        <div className="section-tag reveal">02 — What sets me apart</div>
        <div className="operator-intro reveal">
          <h2 className="section-title">
            Build full-stack, <em>ship cross-platform.</em>
          </h2>
          <p className="operator-sub">
            From Laravel backends to React Native mobile apps — I build complete
            systems that work across web and mobile.
          </p>
        </div>

        <div className="operator-grid">
          {operatorPoints.map((point, i) => (
            <div className="operator-card reveal" key={point.title}>
              <div className="operator-head">
                <div className="operator-icon" aria-hidden="true">
                  <OperatorIcon
                    kind={
                      [
                        "fullstack",
                        "mobile",
                        "api",
                        "backend",
                        "dsa",
                        "tooling",
                      ][i]
                    }
                  />
                </div>
              </div>
              <h3>{point.title}</h3>
              <p>{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
