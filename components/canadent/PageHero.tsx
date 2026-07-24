import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-[var(--cd-border)] bg-[linear-gradient(180deg,#eef2f6_0%,var(--cd-bg)_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cd-gold-hover)]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="cd-heading mt-3 max-w-3xl text-4xl sm:text-5xl">{title}</h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--cd-muted)] sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function ProseBlocks({ children }: { children: ReactNode }) {
  return <div className="space-y-4 text-base leading-relaxed text-[var(--cd-muted)]">{children}</div>;
}
