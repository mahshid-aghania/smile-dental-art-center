import Image from "next/image";
import Link from "next/link";

import type { Course } from "@/lib/canadent/courses";
import { formatCoursePrice } from "@/lib/canadent/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[var(--cd-border)] bg-[var(--cd-surface)] shadow-[0_1px_0_rgba(15,42,74,0.04)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(15,42,74,0.08)]">
      <Link href={`/courses/${course.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-[var(--cd-fog)]">
        {course.image ? (
          <Image
            src={course.image}
            alt={course.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-[var(--cd-muted)]">
            CanaDent course
          </div>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--cd-gold-hover)]">
          {course.category}
        </p>
        <h3 className="cd-heading text-xl leading-snug">
          <Link href={`/courses/${course.slug}`} className="hover:text-[var(--cd-gold-hover)]">
            {course.name}
          </Link>
        </h3>
        {course.summary ? (
          <p className="line-clamp-3 text-sm leading-relaxed text-[var(--cd-muted)]">
            {course.summary}
          </p>
        ) : null}
        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <p className="text-sm font-semibold text-[var(--cd-navy)]">{formatCoursePrice(course)}</p>
          <Link
            href={`/courses/${course.slug}`}
            className="text-sm font-medium text-[var(--cd-navy)] underline decoration-[var(--cd-gold)] underline-offset-4 hover:text-[var(--cd-gold-hover)]"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
