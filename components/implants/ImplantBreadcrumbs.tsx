import Link from "next/link";

import type { Crumb } from "@/lib/implants/schema";

/** Visual breadcrumb trail: Home / Dental Implants / [Page]. */
export function ImplantBreadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="text-xs text-[var(--clinic-muted)]" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1">
              {i > 0 && <span aria-hidden>/</span>}
              {isLast ? (
                <span className="font-medium text-[var(--clinic-navy)]">{crumb.name}</span>
              ) : (
                <Link href={crumb.path} className="clinic-link">
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
