import type { Metadata } from "next";

import { ApplyForm } from "@/components/canadent/ApplyForm";
import { PageHero } from "@/components/canadent/PageHero";

export const metadata: Metadata = {
  title: "Apply",
  description: "Apply to join a CanaDent course or seminar and further your dental career.",
  alternates: { canonical: "/apply" },
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Join CanaDent"
        title="Apply now"
        subtitle="Become part of CanaDent to further your career. Over 500 doctors already take advantage of our programs."
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="rounded-xl border border-[var(--cd-border)] bg-[var(--cd-surface)] p-6 sm:p-10">
          <ApplyForm />
        </div>
      </section>
    </>
  );
}
