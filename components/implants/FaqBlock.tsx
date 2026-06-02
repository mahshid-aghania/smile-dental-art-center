import { Plus } from "lucide-react";

import type { FaqItem } from "@/lib/implants/data";

/** Accessible FAQ block using native <details>/<summary> (no client JS). */
export function FaqBlock({
  faqs,
  title = "Frequently asked questions",
}: {
  faqs: FaqItem[];
  title?: string;
}) {
  return (
    <section aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="clinic-heading text-2xl font-semibold text-[var(--clinic-navy)]"
      >
        {title}
      </h2>
      <div className="mt-6 space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-xl border border-[var(--clinic-border)] bg-white p-5 open:shadow-sm"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-3 text-base font-semibold text-[var(--clinic-navy)] marker:content-['']">
              {faq.question}
              <Plus
                className="size-5 shrink-0 text-[var(--clinic-gold)] transition group-open:rotate-45"
                aria-hidden
              />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-[var(--clinic-muted)]">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
