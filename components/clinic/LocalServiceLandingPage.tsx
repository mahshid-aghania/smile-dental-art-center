import Link from "next/link";
import { CLINIC } from "@/lib/clinic/content";
import type { LocalLandingPage } from "@/lib/clinic/local-landing-pages";
import { FaqAccordion } from "@/components/clinic/FaqAccordion";

type LocalServiceLandingPageProps = {
  page: LocalLandingPage;
};

export function LocalServiceLandingPage({ page }: LocalServiceLandingPageProps) {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:max-w-5xl lg:py-16">
      {/* Breadcrumb */}
      <nav className="mb-6 text-xs text-[var(--clinic-muted)]" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="clinic-link">
              Home
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <span aria-hidden>/</span>
            <span className="capitalize text-[var(--clinic-navy)]">{page.h1}</span>
          </li>
        </ol>
      </nav>

      {/* H1 */}
      <h1 className="clinic-heading text-3xl font-semibold text-[var(--clinic-navy)] sm:text-4xl">
        {page.h1}
      </h1>

      {/* Intro paragraphs */}
      <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--clinic-muted)]">
        {page.intro.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {/* Sections */}
      <div className="mt-10 space-y-10">
        {page.sections.map((section, i) => (
          <section key={i}>
            <h2 className="clinic-heading mb-4 text-xl font-semibold text-[var(--clinic-navy)] sm:text-2xl">
              {section.heading}
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[var(--clinic-muted)]">
              {section.content.map((paragraph, j) => (
                <p key={j}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* FAQ section */}
      {page.faqs.length > 0 && (
        <section className="mt-12">
          <h2 className="clinic-heading mb-6 text-xl font-semibold text-[var(--clinic-navy)] sm:text-2xl">
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={page.faqs} />
        </section>
      )}

      {/* Local proof box */}
      <div className="mt-12 rounded-xl border border-[var(--clinic-border)] bg-[var(--clinic-surface)] p-6">
        <h2 className="clinic-heading mb-4 text-lg font-semibold text-[var(--clinic-navy)]">
          Visit Us in Markham
        </h2>
        <dl className="space-y-2 text-sm text-[var(--clinic-muted)]">
          <div className="flex gap-2">
            <dt className="font-medium text-[var(--clinic-navy)] shrink-0">Phone:</dt>
            <dd>
              <a href={CLINIC.phoneHref} className="clinic-link">
                {CLINIC.phone}
              </a>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium text-[var(--clinic-navy)] shrink-0">Address:</dt>
            <dd>
              <a
                href={CLINIC.addressHref}
                className="clinic-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {CLINIC.address}
              </a>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium text-[var(--clinic-navy)] shrink-0">Hours:</dt>
            <dd>
              <ul className="space-y-0.5">
                {CLINIC.hours.map((hour, i) => (
                  <li key={i}>{hour}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        {/* Booking CTA */}
        <div className="mt-6 text-center">
          <Link
            href="/appointments"
            className="clinic-btn-primary inline-block px-8 py-3 text-sm"
          >
            Request an Appointment
          </Link>
        </div>
      </div>

      {/* Related services */}
      {page.relatedLinks.length > 0 && (
        <section className="mt-12 border-t border-[var(--clinic-border)] pt-10">
          <h2 className="clinic-heading mb-4 text-xl font-semibold text-[var(--clinic-navy)]">
            Related Services
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {page.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="clinic-link text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Medically reviewed line */}
      <p className="mt-10 text-xs text-[var(--clinic-muted)] opacity-70">
        Medically reviewed: August 2026
      </p>
    </article>
  );
}
