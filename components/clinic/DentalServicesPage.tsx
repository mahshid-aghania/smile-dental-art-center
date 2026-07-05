import type { ComponentType } from "react";
import Link from "next/link";
import {
  Activity,
  AlertCircle,
  Bone,
  HeartPulse,
  Scan,
  Shield,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import { DentalServicesHeroCarousel } from "@/components/clinic/DentalServicesHeroCarousel";
import { ServiceCardsSection } from "@/components/clinic/HomeSections";
import {
  CLINIC,
  DENTAL_SERVICES_WHY_CHOOSE,
  SERVICE_ICONS,
} from "@/lib/clinic/content";

const ICON_MAP: Record<string, ComponentType<{ className?: string }>> = {
  whitening: Sparkles,
  prevention: Shield,
  implants: Bone,
  emergencies: AlertCircle,
  "x-rays": Scan,
  endodontics: Activity,
  composite: Stethoscope,
  periodontics: HeartPulse,
};

export function DentalServicesPage() {
  return (
    <>
      <section className="bg-[var(--clinic-surface)] py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <h1 className="clinic-heading text-3xl font-semibold text-[var(--clinic-navy)] sm:text-4xl">
              10 Best Dental Services in Markham, ON
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[var(--clinic-muted)]">
              Welcome to <strong className="text-[var(--clinic-navy)]">Smile Dental Arts Centre</strong>
              , your trusted dental practice in Markham, Ontario. Our dedicated team of dental
              professionals is committed to providing high-quality dental care tailored to your unique
              needs. Whether you&apos;re seeking routine check-ups, advanced{" "}
              <Link href="/dental-services/cosmetic-dentistry" className="clinic-link">
                cosmetic treatments
              </Link>
              ,{" "}
              <Link
                href="/dental-services/cosmetic-dentistry/dental-implants"
                className="clinic-link"
              >
                Dental Implants
              </Link>
              ,{" "}
              <a
                href="https://www.invisalign.com/"
                className="clinic-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Invisalign
              </a>{" "}
              or{" "}
              <Link href="/dental-services/dental-emergencies" className="clinic-link">
                emergency dental services
              </Link>
              , we&apos;re here to help you achieve a healthy, beautiful smile. Located conveniently in
              Markham, we proudly serve the local community with exceptional care and personalized
              attention.
            </p>
            <Link
              href={CLINIC.pages.appointments}
              className="mt-8 inline-block rounded-lg border-2 border-[var(--clinic-gold)] px-6 py-3 text-sm font-semibold text-[var(--clinic-gold)] transition hover:bg-[var(--clinic-gold)] hover:text-white"
            >
              Appointment Request
            </Link>
          </div>

          <DentalServicesHeroCarousel />
        </div>
      </section>

      <ServiceCardsSection />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <h2 className="clinic-heading text-3xl font-semibold text-[var(--clinic-navy)]">
              Why Choose Our Dental Services?
            </h2>
            <ul className="mt-8 space-y-5">
              {DENTAL_SERVICES_WHY_CHOOSE.map((item) => (
                <li key={item.title} className="text-[var(--clinic-muted)]">
                  <strong className="text-[var(--clinic-navy)]">{item.title}</strong>:{" "}
                  {item.description}
                </li>
              ))}
            </ul>
            <Link
              href={CLINIC.pages.appointments}
              className="clinic-btn-primary mt-8 inline-block px-8 py-3 text-sm"
            >
              Make Appointment
            </Link>
          </div>

          <div className="rounded-2xl border border-[var(--clinic-border)] bg-white p-6 shadow-lg sm:p-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {SERVICE_ICONS.map(({ label, slug, href }) => {
                const Icon = ICON_MAP[slug] ?? Stethoscope;
                return (
                  <Link
                    key={slug}
                    href={href}
                    className="flex flex-col items-center gap-3 rounded-xl p-4 text-center transition hover:bg-[var(--clinic-surface)]"
                  >
                    <span className="flex size-14 items-center justify-center rounded-full border-2 border-[var(--clinic-gold)] text-[var(--clinic-gold)]">
                      <Icon className="size-7" aria-hidden />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[var(--clinic-navy)]">
                      {label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
