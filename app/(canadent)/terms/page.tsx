import type { Metadata } from "next";

import { PageHero, ProseBlocks } from "@/components/canadent/PageHero";
import { paragraphsFromContent, STATIC_PAGES } from "@/lib/canadent/pages";
import { SITE } from "@/lib/canadent/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Terms and conditions for ${SITE.legalName}.`,
  alternates: { canonical: "/terms" },
};

const FALLBACK = [
  "Please read these terms and conditions carefully before using our website and services.",
  "By accessing and using this website, you accept and agree to be bound by these terms.",
  "Course descriptions, schedules, and pricing may change. Registration confirmations and payment terms are provided at the time of booking.",
  "The materials on this website are provided for general information about our education programs.",
  `Questions about these terms can be sent to ${SITE.email}.`,
];

export default function TermsPage() {
  const paragraphs = paragraphsFromContent(STATIC_PAGES.terms.content, FALLBACK);
  return (
    <>
      <PageHero title="Terms and conditions" />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <ProseBlocks>
          {paragraphs.map((p) => (
            <p key={p.slice(0, 48)} className="whitespace-pre-line">
              {p}
            </p>
          ))}
        </ProseBlocks>
      </section>
    </>
  );
}
