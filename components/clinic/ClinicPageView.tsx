import Link from "next/link";

import { AppointmentForm } from "@/components/clinic/AppointmentForm";
import { ContactForm } from "@/components/clinic/ContactForm";
import { CLINIC } from "@/lib/clinic/content";
import {
  getRelatedServicePaths,
  getServiceCategoryPaths,
  pathToHref,
  type ClinicPageContent,
} from "@/lib/clinic/pages";

type ClinicPageViewProps = {
  path: string;
  page: ClinicPageContent;
};

function BookCta() {
  return (
    <div className="mt-10 rounded-xl border border-[var(--clinic-border)] bg-[var(--clinic-surface)] p-6 text-center">
      <p className="text-[var(--clinic-muted)]">Ready to book your visit?</p>
      <Link href="/appointments" className="clinic-btn-primary mt-4 inline-block px-8 py-3 text-sm">
        Request an appointment
      </Link>
    </div>
  );
}

export function ClinicPageView({ path, page }: ClinicPageViewProps) {
  const related = getRelatedServicePaths(path);
  const categories = path === "dental-services" ? getServiceCategoryPaths() : [];
  const showAppointmentForm = path === "appointments";
  const showContactForm = path === "contact-us";

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:max-w-5xl lg:py-16">
      <nav className="mb-6 text-xs text-[var(--clinic-muted)]" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="clinic-link">
              Home
            </Link>
          </li>
          {path.split("/").map((segment, i, arr) => {
            const subPath = arr.slice(0, i + 1).join("/");
            const label = segment.replace(/-/g, " ");
            return (
              <li key={subPath} className="flex items-center gap-1">
                <span aria-hidden>/</span>
                {i === arr.length - 1 ? (
                  <span className="capitalize text-[var(--clinic-navy)]">{label}</span>
                ) : (
                  <Link href={pathToHref(subPath)} className="clinic-link capitalize">
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      <h1 className="clinic-heading text-3xl font-semibold text-[var(--clinic-navy)] sm:text-4xl">
        {page.heading}
      </h1>

      <div className="prose-clinic mt-8 space-y-4 text-base leading-relaxed text-[var(--clinic-muted)]">
        {page.paragraphs.map((paragraph, i) => (
          <p key={`${i}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
        ))}
      </div>

      {showAppointmentForm && (
        <div className="mt-12">
          <h2 className="clinic-heading mb-6 text-2xl font-semibold text-[var(--clinic-navy)]">
            Online appointment request
          </h2>
          <AppointmentForm />
        </div>
      )}

      {showContactForm && (
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="clinic-heading mb-4 text-2xl font-semibold text-[var(--clinic-navy)]">
              Send us a message
            </h2>
            <ContactForm />
          </div>
          <div className="space-y-4 text-sm text-[var(--clinic-muted)]">
            <p>
              <strong className="text-[var(--clinic-navy)]">Phone:</strong>{" "}
              <a href={CLINIC.phoneHref} className="clinic-link">
                {CLINIC.phone}
              </a>
            </p>
            <p>
              <strong className="text-[var(--clinic-navy)]">Email:</strong>{" "}
              <a href={`mailto:${CLINIC.email}`} className="clinic-link">
                {CLINIC.email}
              </a>
            </p>
            <p>
              <strong className="text-[var(--clinic-navy)]">Address:</strong>{" "}
              <a href={CLINIC.addressHref} className="clinic-link" target="_blank" rel="noopener noreferrer">
                {CLINIC.address}
              </a>
            </p>
          </div>
        </div>
      )}

      {categories.length > 0 && (
        <div className="mt-12">
          <h2 className="clinic-heading mb-4 text-xl font-semibold text-[var(--clinic-navy)]">
            Service categories
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {categories.map((catPath) => {
              const label = catPath.split("/").pop()?.replace(/-/g, " ") ?? catPath;
              return (
                <li key={catPath}>
                  <Link href={pathToHref(catPath)} className="clinic-link capitalize">
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {related.length > 0 && (
        <div className="mt-12 border-t border-[var(--clinic-border)] pt-10">
          <h2 className="clinic-heading mb-4 text-xl font-semibold text-[var(--clinic-navy)]">
            Related services
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {related.map((relPath) => {
              const label = relPath.split("/").pop()?.replace(/-/g, " ") ?? relPath;
              return (
                <li key={relPath}>
                  <Link href={pathToHref(relPath)} className="clinic-link text-sm capitalize">
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {!showAppointmentForm && path !== "appointments" && <BookCta />}
    </article>
  );
}
