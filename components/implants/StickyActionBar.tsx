import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";

import { CLINIC } from "@/lib/clinic/content";

/** Sticky bottom action bar (Call + Book) shown on mobile. Tap targets >= 44px. */
export function StickyActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--clinic-border)] bg-white/95 backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-2 p-2">
        <a
          href={CLINIC.phoneHref}
          className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[var(--clinic-border)] text-sm font-semibold text-[var(--clinic-navy)]"
        >
          <Phone className="size-4 text-[var(--clinic-gold)]" aria-hidden />
          Call
        </a>
        <Link
          href={CLINIC.pages.appointments}
          className="clinic-btn-primary flex min-h-12 items-center justify-center gap-2 text-sm"
        >
          <CalendarDays className="size-4" aria-hidden />
          Book
        </Link>
      </div>
    </div>
  );
}
