import type { Metadata } from "next";

import { CourseCard } from "@/components/canadent/CourseCard";
import { PageHero } from "@/components/canadent/PageHero";
import { COURSES } from "@/lib/canadent/courses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Browse CanaDent dental education courses and seminars — endodontics, implants, adhesive dentistry, AI, and more.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Courses & seminars"
        subtitle="Practical and theoretical programs for dentists at every stage — from foundational refreshers to advanced masterclasses."
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>
    </>
  );
}
