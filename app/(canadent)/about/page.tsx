import type { Metadata } from "next";
import Link from "next/link";

import { PageHero, ProseBlocks } from "@/components/canadent/PageHero";
import { ABOUT, SITE } from "@/lib/canadent/site";

export const metadata: Metadata = {
  title: "About",
  description: ABOUT.body,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={SITE.legalName} title={ABOUT.title} subtitle={ABOUT.headline} />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <ProseBlocks>
          <p>{ABOUT.body}</p>
          <p>
            Based in North York, Ontario, we welcome dentists and dental associates who want practical
            progress through seminars, workshops, and theoretical classes.
          </p>
        </ProseBlocks>
        <Link
          href="/courses"
          className="cd-btn-primary mt-8 inline-flex rounded-md px-5 py-3 text-sm"
        >
          View courses
        </Link>
      </section>
    </>
  );
}
