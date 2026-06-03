import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone, Star } from "lucide-react";

import { CLINIC } from "@/lib/clinic/content";
import { ImplantBreadcrumbs } from "@/components/implants/ImplantBreadcrumbs";
import { TrustBadges } from "@/components/implants/TrustBadges";
import {
  IMPLANT_BENEFITS,
  IMPLANT_OPTIONS,
  IMPLANT_TESTIMONIALS,
  PILLAR_PATH,
  WHY_CHOOSE_IMPLANTS,
} from "@/lib/implants/data";
import type { Crumb } from "@/lib/implants/schema";

export function PillarHero({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <section className="border-b border-[var(--clinic-border)] bg-[var(--clinic-surface)]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-16 lg:px-8">
        <div>
          <div className="mb-6">
            <ImplantBreadcrumbs crumbs={crumbs} />
          </div>
          <h1 className="clinic-heading text-4xl font-semibold text-[var(--clinic-navy)] text-balance sm:text-5xl">
            Dental Implants in Markham
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--clinic-muted)] text-pretty">
            Permanent, natural-looking tooth replacement from Dr. Neda Kadivar — a Markham implant
            dentist with over 20 years of experience. Restore your bite, your smile and your
            confidence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={CLINIC.pages.appointments}
              className="clinic-btn-primary inline-block px-8 py-3 text-center text-sm"
            >
              Book a Consultation
            </Link>
            <a
              href={CLINIC.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--clinic-border)] bg-white px-8 py-3 text-sm font-semibold text-[var(--clinic-navy)] hover:border-[var(--clinic-gold)]"
            >
              <Phone className="size-4 text-[var(--clinic-gold)]" aria-hidden />
              {CLINIC.phone}
            </a>
          </div>
          <div className="mt-8">
            <TrustBadges />
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/clinic/implants-hero.png"
            alt="Patient with a restored smile after dental implants in Markham by Dr. Neda Kadivar"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

export function WhatAreImplants() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative order-last aspect-square w-full overflow-hidden rounded-2xl border border-[var(--clinic-border)] lg:order-first">
          <Image
            src="/clinic/implant-diagram.png"
            alt="Diagram of a dental implant post, abutment and crown placed in the jawbone"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="clinic-heading text-3xl font-semibold text-[var(--clinic-navy)]">
            What are dental implants?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--clinic-muted)]">
            A dental implant is a small titanium post that replaces the root of a missing tooth.
            Once placed in the jaw, the bone fuses to it to create a permanent foundation for a
            custom crown, bridge or denture. The result looks, feels and functions just like a
            natural tooth.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {IMPLANT_BENEFITS.map((benefit) => (
              <li key={benefit} className="flex gap-2 text-sm text-[var(--clinic-text)]">
                <Check className="mt-0.5 size-4 shrink-0 text-[var(--clinic-gold)]" aria-hidden />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ImplantOptionsGrid() {
  return (
    <section id="options" className="bg-[var(--clinic-surface)] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="clinic-heading text-3xl font-semibold text-[var(--clinic-navy)]">
            Explore your implant options
          </h2>
          <p className="mt-4 text-[var(--clinic-muted)]">
            Whether you are missing one tooth or a full arch, we have a solution. Explore each option
            below.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {IMPLANT_OPTIONS.map((option) => (
            <li key={option.href}>
              <Link
                href={option.href}
                className="group flex h-full flex-col rounded-xl border border-[var(--clinic-border)] bg-white p-6 shadow-sm transition hover:border-[var(--clinic-gold)] hover:shadow-md"
              >
                <h3 className="flex items-center justify-between gap-2 text-lg font-semibold text-[var(--clinic-navy)]">
                  {option.title}
                  <ArrowRight
                    className="size-4 shrink-0 text-[var(--clinic-gold)] transition group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--clinic-muted)]">
                  {option.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function WhyChooseSmile() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="clinic-heading text-3xl font-semibold text-[var(--clinic-navy)]">
          Why choose Smile Dental Arts Centre?
        </h2>
        <p className="mt-4 text-[var(--clinic-muted)]">
          Implant care is a long-term partnership. Here is why Markham patients trust us with their
          smiles.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_CHOOSE_IMPLANTS.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-[var(--clinic-border)] bg-white p-6 shadow-sm"
          >
            <h3 className="text-base font-semibold text-[var(--clinic-navy)]">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--clinic-muted)]">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${i < rating ? "fill-[var(--clinic-gold)] text-[var(--clinic-gold)]" : "text-[var(--clinic-border)]"}`}
          aria-hidden
        />
      ))}
    </div>
  );
}

export function ImplantTestimonials() {
  return (
    <section className="bg-[var(--clinic-surface)] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="clinic-heading text-center text-3xl font-semibold text-[var(--clinic-navy)]">
          What our patients say
        </h2>
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {IMPLANT_TESTIMONIALS.map((t) => (
            <li
              key={t.name}
              className="flex flex-col rounded-xl border border-[var(--clinic-border)] bg-white p-6 shadow-sm"
            >
              <Stars rating={t.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[var(--clinic-muted)]">
                “{t.quote}”
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-[var(--clinic-navy)]">{t.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ImplantMap() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="clinic-heading text-center text-2xl font-semibold text-[var(--clinic-navy)]">
        Visit our Markham dental clinic
      </h2>
      <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="overflow-hidden rounded-xl border border-[var(--clinic-border)] shadow-sm">
          <iframe
            title="Smile Dental Arts Centre location in Markham"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.892!2d-79.321822!3d43.841063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d52d8f8b8b8b8b%3A0x0!2s3980%2014th%20Ave%20%236%2C%20Markham%2C%20ON%20L3R%200B1!5e0!3m2!1sen!2sca!4v1"
            className="h-[min(400px,55vh)] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <address className="space-y-4 text-sm not-italic text-[var(--clinic-muted)]">
          <div>
            <p className="font-semibold text-[var(--clinic-navy)]">{CLINIC.name}</p>
            <a href={CLINIC.addressHref} className="clinic-link" target="_blank" rel="noopener noreferrer">
              {CLINIC.address}
            </a>
          </div>
          <p>
            <a href={CLINIC.phoneHref} className="clinic-link">
              {CLINIC.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${CLINIC.email}`} className="clinic-link">
              {CLINIC.email}
            </a>
          </p>
          <ul className="space-y-1 pt-2">
            {CLINIC.hours.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </address>
      </div>
    </section>
  );
}

export const PILLAR_HREF = PILLAR_PATH;
