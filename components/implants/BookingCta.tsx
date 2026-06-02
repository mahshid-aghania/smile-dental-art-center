import Link from "next/link";
import { Phone } from "lucide-react";

import { CLINIC } from "@/lib/clinic/content";

/** Final booking CTA with click-to-call. */
export function BookingCta({
  title = "Ready to restore your smile?",
  subtitle = "Book a dental implant consultation with Dr. Neda Kadivar at our Markham clinic.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-[var(--clinic-navy)] py-14 text-white">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="clinic-heading text-3xl font-semibold text-white text-balance">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300 text-pretty">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={CLINIC.pages.appointments}
            className="clinic-btn-primary inline-block px-8 py-3 text-sm"
          >
            Book a Consultation
          </Link>
          <a
            href={CLINIC.phoneHref}
            className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            <Phone className="size-4 text-[var(--clinic-gold)]" aria-hidden />
            {CLINIC.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
