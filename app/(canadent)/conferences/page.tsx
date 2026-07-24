import type { Metadata } from "next";
import Link from "next/link";

import { PageHero, ProseBlocks } from "@/components/canadent/PageHero";
import { SITE } from "@/lib/canadent/site";

export const metadata: Metadata = {
  title: "Conferences",
  description: "Upcoming CanaDent conferences and symposium-style dental education events.",
  alternates: { canonical: "/conferences" },
};

export default function ConferencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Upcoming conferences"
        subtitle="Symposium-style programs and multi-speaker events that bring clinicians together for deeper learning."
      />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <ProseBlocks>
          <p>
            CanaDent hosts and promotes conference-format programs alongside our hands-on courses.
            Check the courses catalogue for current open registrations, or contact us for the next
            conference calendar.
          </p>
          <p>
            Looking for a past symposium agenda? See the{" "}
            <Link href="/courses/root-to-resolution" className="text-[var(--cd-navy)] underline underline-offset-2">
              Root to Resolution
            </Link>{" "}
            program for an example of our endodontic master-class format.
          </p>
        </ProseBlocks>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/courses" className="cd-btn-primary rounded-md px-5 py-3 text-sm">
            Browse courses
          </Link>
          <a
            href={SITE.emailHref}
            className="rounded-md border border-[var(--cd-border)] px-5 py-3 text-sm font-medium text-[var(--cd-navy)]"
          >
            Email us
          </a>
        </div>
      </section>
    </>
  );
}
