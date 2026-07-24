import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ApplyForm } from "@/components/canadent/ApplyForm";
import {
  formatCad,
  formatCoursePrice,
  getAllCourseSlugs,
  getCourseBySlug,
} from "@/lib/canadent/courses";
import { SITE } from "@/lib/canadent/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course" };
  return {
    title: course.name,
    description: course.summary || course.description || `${course.name} at CanaDent`,
    alternates: { canonical: `/courses/${course.slug}` },
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const paragraphs = (course.description || course.summary || "")
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>
      <section className="border-b border-[var(--cd-border)] bg-[var(--cd-surface)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cd-gold-hover)]">
              {course.category}
            </p>
            <h1 className="cd-heading mt-3 text-4xl sm:text-5xl">{course.name}</h1>
            <p className="mt-4 text-lg font-semibold text-[var(--cd-navy)]">
              {formatCoursePrice(course)}
            </p>
            {course.salePrice != null &&
            course.regularPrice != null &&
            course.salePrice < course.regularPrice ? (
              <p className="mt-1 text-sm text-[var(--cd-muted)]">
                Regular {formatCad(course.regularPrice)} · Current {formatCad(course.salePrice)}
              </p>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/apply" className="cd-btn-primary rounded-md px-5 py-3 text-sm">
                Apply for this course
              </Link>
              <Link
                href="/courses"
                className="rounded-md border border-[var(--cd-border)] px-5 py-3 text-sm font-medium text-[var(--cd-navy)] hover:bg-[var(--cd-fog)]"
              >
                All courses
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[var(--cd-fog)]">
            {course.image ? (
              <Image
                src={course.image}
                alt={course.name}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
                priority
              />
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4 text-base leading-relaxed text-[var(--cd-muted)]">
          <h2 className="cd-heading text-2xl">About this program</h2>
          {paragraphs.length ? (
            paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="whitespace-pre-line">
                {p}
              </p>
            ))
          ) : (
            <p>
              Contact {SITE.legalName} for the full syllabus, CE credits, and upcoming dates for{" "}
              {course.name}.
            </p>
          )}
        </div>
        <div className="rounded-xl border border-[var(--cd-border)] bg-[var(--cd-surface)] p-6 sm:p-8">
          <ApplyForm
            courseName={course.name}
            heading="Reserve your seat"
            subheading="Send an application for this course and our team will follow up."
          />
        </div>
      </section>
    </>
  );
}
