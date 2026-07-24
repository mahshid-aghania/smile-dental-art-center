import type { Metadata } from "next";
import { Clock, Mail, MapPin } from "lucide-react";

import { ApplyForm } from "@/components/canadent/ApplyForm";
import { PageHero } from "@/components/canadent/PageHero";
import { SITE } from "@/lib/canadent/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.legalName} in North York for course information and applications.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact"
        subtitle="Questions about upcoming programs, CE credits, or registration? Reach out — we’re happy to help."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="cd-heading text-2xl">{SITE.legalName}</h2>
          <ul className="space-y-4 text-[var(--cd-muted)]">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 text-[var(--cd-gold-hover)]" aria-hidden />
              <a href={SITE.addressHref} target="_blank" rel="noreferrer" className="hover:text-[var(--cd-navy)]">
                {SITE.address}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-5 text-[var(--cd-gold-hover)]" aria-hidden />
              <a href={SITE.emailHref} className="hover:text-[var(--cd-navy)]">
                {SITE.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-5 text-[var(--cd-gold-hover)]" aria-hidden />
              <span>{SITE.hours[0]}</span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-[var(--cd-border)] bg-[var(--cd-surface)] p-6 sm:p-8">
          <ApplyForm heading="Send a message" subheading="We’ll reply by email as soon as we can." />
        </div>
      </section>
    </>
  );
}
