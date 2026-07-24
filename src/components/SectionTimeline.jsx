import { useEffect, useState } from "react";

const sections = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "operator", label: "Why me" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function SectionTimeline() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    const onScroll = () => {
      const pos = window.scrollY + window.innerHeight * 0.35;
      let current = "top";
      for (const el of els) {
        if (el.offsetTop <= pos) current = el.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="timeline" aria-label="Section timeline">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`timeline-item ${active === s.id ? "active" : ""}`}
          aria-label={s.label}
        >
          <span className="timeline-label">{s.label}</span>
          <span className="timeline-line" />
        </a>
      ))}
    </nav>
  );
}
