import Link from "next/link";

import type { ServiceNavItem } from "@/lib/clinic/service-nav";
import { cn } from "@/lib/utils";

type ServiceSubmenuListProps = {
  items: readonly ServiceNavItem[];
  activeHref?: string;
  title?: string;
};

export function ServiceSubmenuList({ items, activeHref, title }: ServiceSubmenuListProps) {
  return (
    <nav
      className="overflow-hidden rounded-lg border border-[var(--clinic-border)] bg-white shadow-sm"
      aria-label={title ? `${title} submenu` : "Service submenu"}
    >
      {title && (
        <p className="border-b border-[var(--clinic-border)] px-4 py-3 text-sm font-semibold text-[var(--clinic-gold)]">
          {title}
        </p>
      )}
      <ul>
        {items.map((item) => {
          const isActive = activeHref === item.href;
          return (
            <li key={item.label} className="border-b border-[var(--clinic-border)] last:border-b-0">
              <Link
                href={item.href}
                className={cn(
                  "block px-4 py-2.5 text-sm transition-colors",
                  isActive
                    ? "font-medium text-[var(--clinic-gold)]"
                    : "text-[var(--clinic-navy)] hover:text-[var(--clinic-gold)]"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
