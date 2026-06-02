import { MEMBERSHIPS } from "@/lib/implants/data";

/** Trust strip: experience + professional memberships + location. */
export function TrustBadges({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <ul
      className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-wide ${
        isDark ? "text-slate-200" : "text-[var(--clinic-muted)]"
      }`}
    >
      <li className="flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-[var(--clinic-gold)]" aria-hidden />
        20+ Years Experience
      </li>
      {MEMBERSHIPS.map((m) => (
        <li key={m.abbr} className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-[var(--clinic-gold)]" aria-hidden />
          <a
            href={m.url}
            target="_blank"
            rel="noopener noreferrer"
            title={m.name}
            className="hover:text-[var(--clinic-gold)]"
          >
            {m.abbr}
          </a>
        </li>
      ))}
      <li className="flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-[var(--clinic-gold)]" aria-hidden />
        Markham, ON
      </li>
    </ul>
  );
}
