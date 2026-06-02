import Image from "next/image";
import Link from "next/link";

import { CLINIC } from "@/lib/clinic/content";
import { DOCTOR, MEMBERSHIPS } from "@/lib/implants/data";

/**
 * Dr. Neda author/reviewer box.
 * - variant="feature": large "Meet Your Implant Dentist" section (pillar page)
 * - variant="reviewer": compact "Medically reviewed by" box (subpages)
 */
export function DoctorBio({ variant = "feature" }: { variant?: "feature" | "reviewer" }) {
  if (variant === "reviewer") {
    return (
      <aside className="flex flex-col gap-4 rounded-xl border border-[var(--clinic-border)] bg-[var(--clinic-surface)] p-5 sm:flex-row sm:items-center">
        <Image
          src={DOCTOR.image}
          alt={`${DOCTOR.shortName}, dentist in Markham`}
          width={72}
          height={72}
          className="size-16 shrink-0 rounded-full object-cover"
        />
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--clinic-gold)]">
            Medically reviewed by
          </p>
          <p className="font-semibold text-[var(--clinic-navy)]">
            <Link href={DOCTOR.bioHref} className="hover:text-[var(--clinic-gold)]">
              {DOCTOR.name}
            </Link>
          </p>
          <p className="text-sm text-[var(--clinic-muted)]">
            {DOCTOR.experience} of experience · Markham ·{" "}
            {MEMBERSHIPS.map((m) => m.abbr).join(" / ")}
          </p>
        </div>
      </aside>
    );
  }

  return (
    <section
      aria-labelledby="meet-dentist"
      className="bg-[var(--clinic-surface)] py-16"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:px-8">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-md">
          <Image
            src={DOCTOR.image}
            alt={`${DOCTOR.name}, implant dentist in Markham`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 40vw"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--clinic-gold)]">
            Meet Your Implant Dentist
          </p>
          <h2
            id="meet-dentist"
            className="clinic-heading mt-2 text-3xl font-semibold text-[var(--clinic-navy)]"
          >
            {DOCTOR.name}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--clinic-muted)]">{DOCTOR.bio}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {MEMBERSHIPS.map((m) => (
              <li key={m.abbr}>
                <a
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={m.name}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--clinic-border)] bg-white px-4 py-2 text-xs font-semibold text-[var(--clinic-navy)] hover:border-[var(--clinic-gold)]"
                >
                  <span className="size-1.5 rounded-full bg-[var(--clinic-gold)]" aria-hidden />
                  {m.abbr}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={CLINIC.phoneHref} className="clinic-btn-primary inline-block px-7 py-3 text-sm">
              Book with {DOCTOR.shortName}
            </a>
            <Link
              href={DOCTOR.bioHref}
              className="inline-flex items-center rounded-lg border border-[var(--clinic-border)] px-7 py-3 text-sm font-semibold text-[var(--clinic-navy)] hover:border-[var(--clinic-gold)]"
            >
              Read full bio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
