"use client";

import { useEffect, useRef, useState } from "react";

export function BlogTableOfContents({ headings }: { headings: string[] }) {
  const [active, setActive] = useState(0);
  const ids = headings.map((h) => h.toLowerCase().replace(/[^a-z0-9]+/g, "-"));
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = ids.indexOf(entry.target.id);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--clinic-gold)]">
        In this article
      </p>
      <ol className="space-y-1.5">
        {headings.map((h, i) => (
          <li key={i}>
            <a
              href={`#${ids[i]}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(ids[i])?.scrollIntoView({ behavior: "smooth" });
                setActive(i);
              }}
              className={`block border-l-2 py-0.5 pl-3 leading-snug transition-colors ${
                active === i
                  ? "border-[var(--clinic-gold)] font-semibold text-[var(--clinic-navy)]"
                  : "border-[var(--clinic-border)] text-[var(--clinic-muted)] hover:border-[var(--clinic-gold)] hover:text-[var(--clinic-navy)]"
              }`}
            >
              {h}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
