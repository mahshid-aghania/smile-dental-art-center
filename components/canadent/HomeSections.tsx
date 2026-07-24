import Image from "next/image";
import Link from "next/link";

import { CourseCard } from "@/components/canadent/CourseCard";
import { getFeaturedCourses } from "@/lib/canadent/courses";
import { HOME, SITE } from "@/lib/canadent/site";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[min(92vh,52rem)] overflow-hidden bg-[var(--cd-navy-deep)] text-white">
      <Image
        src={SITE.heroImage}
        alt=""
        fill
        priority
        className="cd-kenburns object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,28,51,0.88)_0%,rgba(10,28,51,0.55)_48%,rgba(10,28,51,0.35)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,163,90,0.22),transparent_45%)]" />

      <div className="relative mx-auto flex min-h-[min(92vh,52rem)] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
        <p className="cd-animate-fade-up font-[family-name:var(--font-canadent-display)] text-5xl leading-none tracking-tight sm:text-7xl md:text-8xl">
          {HOME.heroBrand}
        </p>
        <div className="cd-rule mt-5 h-px w-28 bg-[var(--cd-gold)]" />
        <h1 className="cd-animate-fade-up-delay mt-6 max-w-2xl font-[family-name:var(--font-canadent-display)] text-2xl font-medium leading-snug text-white/95 sm:text-3xl md:text-4xl">
          {HOME.heroHeadline}
        </h1>
        <p className="cd-animate-fade-up-delay-2 mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          {HOME.heroSupport}
        </p>
        <div className="cd-animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3">
          <Link href={HOME.primaryCta.href} className="cd-btn-primary rounded-md px-5 py-3 text-sm">
            {HOME.primaryCta.label}
          </Link>
          <Link href={HOME.secondaryCta.href} className="cd-btn-secondary rounded-md px-5 py-3 text-sm">
            {HOME.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function WhySection() {
  return (
    <section className="bg-[var(--cd-surface)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cd-gold-hover)]">
            Excellence in education
          </p>
          <h2 className="cd-heading mt-3 text-3xl sm:text-4xl">{HOME.whyTitle}</h2>
        </div>
        <p className="text-base leading-relaxed text-[var(--cd-muted)] sm:text-lg">{HOME.whyBody}</p>
      </div>
    </section>
  );
}

export function FacilitiesValuesSection() {
  return (
    <section className="relative overflow-hidden border-y border-[var(--cd-border)] bg-[var(--cd-bg)]">
      <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(196,163,90,0.18),transparent_70%)]" />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="cd-heading text-3xl sm:text-4xl">{HOME.facilitiesTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cd-muted)]">{HOME.facilitiesBody}</p>
          <ul className="mt-8 space-y-3">
            {HOME.pillars.map((pillar) => (
              <li key={pillar} className="flex items-center gap-3 text-[var(--cd-navy)]">
                <span className="h-px w-8 bg-[var(--cd-gold)]" aria-hidden />
                <span className="font-medium">{pillar}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {[HOME.mission, HOME.vision, HOME.services].map((item) => (
            <div key={item.title} className="border-l-2 border-[var(--cd-gold)] pl-5 sm:last:col-span-2">
              <h3 className="cd-heading text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--cd-muted)]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedCoursesSection() {
  const courses = getFeaturedCourses(6);
  return (
    <section className="bg-[var(--cd-surface)]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cd-gold-hover)]">
              Programs
            </p>
            <h2 className="cd-heading mt-3 text-3xl sm:text-4xl">Featured courses</h2>
          </div>
          <Link
            href="/courses"
            className="text-sm font-medium text-[var(--cd-navy)] underline decoration-[var(--cd-gold)] underline-offset-4 hover:text-[var(--cd-gold-hover)]"
          >
            Browse all courses
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function JoinSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--cd-navy)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(196,163,90,0.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_35%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-20 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-[family-name:var(--font-canadent-display)] text-3xl leading-tight sm:text-4xl md:text-5xl">
            {HOME.joinTitle}
          </h2>
          <p className="mt-4 text-base text-white/75 sm:text-lg">{HOME.joinBody}</p>
        </div>
        <Link href={HOME.joinCta.href} className="cd-btn-primary shrink-0 rounded-md px-6 py-3.5 text-sm">
          {HOME.joinCta.label}
        </Link>
      </div>
    </section>
  );
}

export function ContactStrip() {
  return (
    <section className="border-t border-[var(--cd-border)] bg-[var(--cd-bg)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-10 text-sm text-[var(--cd-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-medium text-[var(--cd-navy)]">{SITE.legalName}</p>
        <p>{SITE.address}</p>
        <a href={SITE.emailHref} className="text-[var(--cd-navy)] underline underline-offset-2">
          {SITE.email}
        </a>
      </div>
    </section>
  );
}
