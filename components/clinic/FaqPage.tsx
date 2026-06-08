import Link from "next/link";
import { Plus } from "lucide-react";

import {
  DENTAL_FAQ_HEADING,
  DENTAL_FAQ_ITEMS,
  DENTAL_FAQ_SUBHEADING,
  type FaqContentBlock,
} from "@/lib/clinic/faq";
import { CLINIC } from "@/lib/clinic/content";

function FaqAnswer({ blocks }: { blocks: FaqContentBlock[] }) {
  return (
    <div className="mt-3 space-y-3 text-sm leading-relaxed text-[var(--clinic-muted)]">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return <p key={`p-${index}`}>{block.text}</p>;
          case "heading":
            return (
              <h4 key={`h-${index}`} className="pt-1 font-semibold text-[var(--clinic-navy)]">
                {block.text}
              </h4>
            );
          case "list":
            return (
              <ul key={`l-${index}`} className="list-disc space-y-2 pl-5">
                {block.items.map((item) => (
                  <li key={item.slice(0, 48)}>{item}</li>
                ))}
              </ul>
            );
        }
      })}
    </div>
  );
}

export function FaqPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:max-w-5xl lg:py-16">
      <header className="text-center">
        <h1 className="clinic-heading text-3xl font-semibold text-[var(--clinic-navy)] sm:text-4xl">
          {DENTAL_FAQ_HEADING}
        </h1>
        <h2 className="clinic-heading mt-4 text-2xl font-medium text-[var(--clinic-navy)]">
          {DENTAL_FAQ_SUBHEADING}
        </h2>
      </header>

      <div className="mt-10 space-y-3">
        {DENTAL_FAQ_ITEMS.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-xl border border-[var(--clinic-border)] bg-white p-5 open:shadow-sm"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-3 text-left text-base font-semibold text-[var(--clinic-navy)] marker:content-['']">
              {faq.question}
              <Plus
                className="size-5 shrink-0 text-[var(--clinic-gold)] transition group-open:rotate-45"
                aria-hidden
              />
            </summary>
            <FaqAnswer blocks={faq.blocks} />
          </details>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-[var(--clinic-border)] bg-[var(--clinic-surface)] p-6 text-center">
        <p className="text-[var(--clinic-muted)]">Have another question? We are happy to help.</p>
        <Link href={CLINIC.pages.appointments} className="clinic-btn-primary mt-4 inline-block px-8 py-3 text-sm">
          Book a consultation
        </Link>
      </div>
    </div>
  );
}
