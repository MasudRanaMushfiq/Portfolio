import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view.
 *
 * Uses a single IntersectionObserver rather than a scroll handler: reading
 * `offsetTop` on every scroll event forces a synchronous layout recalc each
 * frame, which is the main source of scroll jank on low-end phones. The
 * observer only fires when a boundary is actually crossed, and state is written
 * only when the section changes, so React no longer re-renders on every tick.
 *
 * `ids` must have a stable identity across renders (declare it at module level).
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const intersecting = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.add(entry.target.id);
          else intersecting.delete(entry.target.id);
        }

        // Last section in document order that crosses the reading line wins,
        // matching the previous top-down `offsetTop <= pos` scan.
        let current = null;
        for (const el of els) {
          if (intersecting.has(el.id)) current = el.id;
        }

        // Nothing crossing the line means the footer (an untracked element) is
        // filling the band — keep the last section rather than snapping back.
        if (current === null) return;
        setActive((prev) => (prev === current ? prev : current));
      },
      {
        // Shrink the root to a band across the top 35% of the viewport, so a
        // section intersects exactly while it spans the old reading line at
        // `scrollY + innerHeight * 0.35`.
        rootMargin: "0px 0px -65% 0px",
        threshold: 0,
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
