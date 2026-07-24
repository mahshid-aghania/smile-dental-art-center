import type { Metadata } from "next";

import { PageHero, ProseBlocks } from "@/components/canadent/PageHero";
import { paragraphsFromContent, STATIC_PAGES } from "@/lib/canadent/pages";
import { SITE } from "@/lib/canadent/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.legalName}.`,
  alternates: { canonical: "/privacy" },
};

const FALLBACK = [
  "This privacy policy describes how we collect, use, and protect your personal information when you use our website and services.",
  "We collect information that you provide directly to us, such as when you apply for a course, make an enquiry, or contact us for support. This may include your name, email address, mailing address, phone number, and payment information.",
  "We use the information we collect to process registrations, respond to enquiries, improve our programs, and communicate about courses you have expressed interest in.",
  "We do not sell your personal information. We take reasonable measures to protect the data we hold and retain it only as long as needed for the purposes described here or as required by law.",
  `For privacy questions, email ${SITE.email}.`,
];

export default function PrivacyPage() {
  const paragraphs = paragraphsFromContent(STATIC_PAGES.privacy.content, FALLBACK);
  return (
    <>
      <PageHero title="Privacy policy" />
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
