import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

import { DrKadivarTestimonials } from "@/components/clinic/DrKadivarTestimonials";
import {
  ABOUT_US_AFFILIATIONS,
  ABOUT_US_DENTISTS,
  ABOUT_US_IMAGES,
  ABOUT_US_INTRO,
  ABOUT_US_TEAM,
  ABOUT_US_TEAM_EMAIL,
  DR_KADIVAR_AFFILIATIONS,
  DR_KADIVAR_MAP_EMBED,
  DR_KADIVAR_OFFICE_IMAGES,
} from "@/lib/clinic/about-us";
import { CLINIC } from "@/lib/clinic/content";

function PortraitImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto aspect-[2/3] w-full max-w-md min-h-[280px] overflow-hidden rounded-2xl shadow-xl ring-1 ring-[var(--clinic-border)]">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 90vw, 40vw" />
    </div>
  );
}

function TeamMemberPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-square w-full min-h-[220px] overflow-hidden bg-slate-100 sm:min-h-[240px]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
}

function DentistSection({
  dentist,
  reverse = false,
}: {
  dentist: (typeof ABOUT_US_DENTISTS)[number];
  reverse?: boolean;
}) {
  const content = (
    <div className="space-y-4">
      <h3 className="clinic-heading text-2xl font-semibold text-[var(--clinic-navy)]">{dentist.name}</h3>
      {dentist.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-[var(--clinic-muted)]">
          {paragraph}
        </p>
      ))}
      {"href" in dentist && dentist.href ? (
        <Link href={dentist.href} className="clinic-link text-sm font-semibold">
          Learn more about Dr. Kadivar
        </Link>
      ) : null}
    </div>
  );

  return (
    <section id={dentist.id} className="py-12 lg:py-16">
      <div
        className={`mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <PortraitImage src={dentist.image} alt={dentist.alt} />
        {content}
      </div>
    </section>
  );
}

export function AboutUsPage() {
  return (
    <>
      <section className="py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <PortraitImage
            src={ABOUT_US_IMAGES.clinicExterior}
            alt="Smile Dental Arts Centre clinic exterior in Markham"
          />
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="clinic-heading text-3xl font-semibold text-[var(--clinic-navy)] sm:text-4xl">
              About Us
            </h1>
            <h2 className="clinic-heading text-2xl font-medium text-[var(--clinic-navy)]">
              {ABOUT_US_INTRO.subtitle}
            </h2>
            {ABOUT_US_INTRO.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-[var(--clinic-muted)]">
                {paragraph}
              </p>
            ))}
            <Link href={CLINIC.pages.appointments} className="clinic-btn-primary inline-block px-8 py-3 text-sm">
              Schedule your consultation
            </Link>
          </div>
        </div>
      </section>

      <section id="teams" className="bg-[var(--clinic-surface)] py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-[var(--clinic-muted)]">
            To uphold high standards of safety, ethics, and patient care, our team maintains active membership
            and good standing with recognized provincial and national dental organizations, including:
          </p>
          <ul className="mt-6 space-y-4">
            {ABOUT_US_AFFILIATIONS.map((affiliation) => (
              <li key={affiliation.name} className="text-base leading-relaxed text-[var(--clinic-muted)]">
                <a href={affiliation.href} className="clinic-link font-semibold" target="_blank" rel="noopener noreferrer">
                  {affiliation.name}
                </a>
                , {affiliation.description}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-relaxed text-[var(--clinic-muted)]">
            These affiliations reflect our ongoing commitment to continuing education, ethical practice, and
            delivering safe, high‑quality dental care to every patient we treat.
          </p>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-[var(--clinic-border)]">
            <Image
              src={ABOUT_US_IMAGES.clinicBanner}
              alt="Dentist in Markham at Smile Dental Arts Centre"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--clinic-surface)] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="clinic-heading text-center text-3xl font-semibold text-[var(--clinic-navy)]">
            Our Dentists
          </h2>
        </div>
      </section>

      {ABOUT_US_DENTISTS.map((dentist, index) => (
        <DentistSection key={dentist.id} dentist={dentist} reverse={index % 2 === 1} />
      ))}

      <section className="bg-[var(--clinic-surface)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="clinic-heading text-center text-3xl font-semibold text-[var(--clinic-navy)]">
            Our Team
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ABOUT_US_TEAM.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-xl border border-[var(--clinic-border)] bg-white shadow-sm"
              >
                <TeamMemberPhoto src={member.image} alt={member.alt} />
                <div className="p-5 text-center">
                  <h4 className="text-lg font-semibold text-[var(--clinic-navy)]">{member.name}</h4>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-[var(--clinic-gold)]">
                    {member.role}
                  </p>
                  <a
                    href={`mailto:${ABOUT_US_TEAM_EMAIL}`}
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-[var(--clinic-border)] p-2 text-[var(--clinic-navy)] transition hover:border-[var(--clinic-gold)] hover:text-[var(--clinic-gold)]"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="size-4" aria-hidden />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="clinic-heading text-center text-3xl font-semibold text-[var(--clinic-navy)]">
            Our Office
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DR_KADIVAR_OFFICE_IMAGES.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 shadow-sm ring-1 ring-[var(--clinic-border)]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--clinic-surface)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="clinic-heading text-center text-3xl font-semibold text-[var(--clinic-navy)]">
            Proud Members
          </h2>
          <div className="mt-10 grid items-center gap-8 sm:grid-cols-3">
            {DR_KADIVAR_AFFILIATIONS.map((affiliation) => (
              <a
                key={affiliation.name}
                href={affiliation.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[var(--clinic-border)] bg-white p-6 text-center transition hover:shadow-md"
              >
                <span className="clinic-heading text-2xl font-bold text-[var(--clinic-gold)]">
                  {affiliation.abbr}
                </span>
                <span className="text-sm font-medium text-[var(--clinic-navy)]">
                  {affiliation.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <DrKadivarTestimonials />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="clinic-heading text-center text-3xl font-semibold text-[var(--clinic-navy)]">
            Getting Here
          </h2>
          <div className="mt-8 overflow-hidden rounded-xl border border-[var(--clinic-border)] shadow-sm">
            <iframe
              title="Smile Dental Arts Centre location"
              src={DR_KADIVAR_MAP_EMBED}
              className="h-[min(500px,60vh)] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-center text-sm text-[var(--clinic-muted)]">
            <a href={CLINIC.addressHref} className="clinic-link" target="_blank" rel="noopener noreferrer">
              {CLINIC.address}
            </a>
            {" · "}
            <a href={CLINIC.phoneHref} className="clinic-link">
              {CLINIC.phone}
            </a>
          </p>
        </div>
      </section>

      <section className="bg-[var(--clinic-surface)] py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-[var(--clinic-muted)]">Ready to book your visit?</p>
          <Link href={CLINIC.pages.appointments} className="clinic-btn-primary mt-4 inline-block px-8 py-3 text-sm">
            Request an appointment
          </Link>
        </div>
      </section>
    </>
  );
}
