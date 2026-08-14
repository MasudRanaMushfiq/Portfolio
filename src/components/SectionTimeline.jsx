import { useActiveSection } from "../hooks/useActiveSection";

const sections = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "operator", label: "Why me" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const sectionIds = sections.map((s) => s.id);

export default function SectionTimeline() {
  const active = useActiveSection(sectionIds);

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
