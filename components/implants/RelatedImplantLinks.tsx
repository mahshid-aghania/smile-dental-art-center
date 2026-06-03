import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { IMPLANT_OPTIONS, PILLAR_PATH } from "@/lib/implants/data";

/**
 * "Related implant treatments" block. Links UP to the pillar and ACROSS to
 * sibling pages (excluding the current page).
 */
export function RelatedImplantLinks({ currentHref }: { currentHref?: string }) {
  const siblings = IMPLANT_OPTIONS.filter((o) => o.href !== currentHref).slice(0, 6);

  return (
    <section aria-labelledby="related-implants" className="border-t border-[var(--clinic-border)] pt-10">
      <h2
        id="related-implants"
        className="clinic-heading text-2xl font-semibold text-[var(--clinic-navy)]"
      >
        Related implant treatments
      </h2>
      <p className="mt-2 text-sm text-[var(--clinic-muted)]">
        Explore more about{" "}
        <Link href={PILLAR_PATH} className="clinic-link">
          dental implants in Markham
        </Link>
        .
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {siblings.map((option) => (
          <li key={option.href}>
            <Link
              href={option.href}
              className="group flex items-center justify-between gap-3 rounded-lg border border-[var(--clinic-border)] bg-white px-4 py-3 text-sm font-semibold text-[var(--clinic-navy)] transition hover:border-[var(--clinic-gold)]"
            >
              {option.title}
              <ArrowRight
                className="size-4 shrink-0 text-[var(--clinic-gold)] transition group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
