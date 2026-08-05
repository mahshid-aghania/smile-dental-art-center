"use client";

import { useState } from "react";
import type { LandingPageFAQ } from "@/lib/clinic/local-landing-pages";

type FaqAccordionProps = {
  faqs: LandingPageFAQ[];
};

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="rounded-lg border border-[var(--clinic-border)] overflow-hidden"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-[var(--clinic-navy)] hover:bg-[var(--clinic-surface)] transition-colors"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <span
                className="shrink-0 text-[var(--clinic-gold)] transition-transform duration-200"
                aria-hidden="true"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                ▾
              </span>
            </button>
            {isOpen && (
              <div className="border-t border-[var(--clinic-border)] bg-[var(--clinic-surface)] px-5 py-4 text-sm leading-relaxed text-[var(--clinic-muted)]">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
