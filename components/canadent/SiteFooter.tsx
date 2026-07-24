import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";

import { NAV_ITEMS, SITE } from "@/lib/canadent/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--cd-border)] bg-[var(--cd-navy)] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-[family-name:var(--font-canadent-display)] text-3xl tracking-tight">
            {SITE.name}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">
            {SITE.legalName}. Practical seminars and theoretical classes for dental professionals.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cd-gold)]">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/apply" className="hover:text-white">
                Apply
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cd-gold)]">
            Visit
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--cd-gold)]" aria-hidden />
              <a href={SITE.addressHref} className="hover:text-white" target="_blank" rel="noreferrer">
                {SITE.address}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-[var(--cd-gold)]" aria-hidden />
              <a href={SITE.emailHref} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 size-4 shrink-0 text-[var(--cd-gold)]" aria-hidden />
              <span>{SITE.hours[0]}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/80">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/80">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
