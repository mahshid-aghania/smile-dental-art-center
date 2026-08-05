import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-3xl text-center",
        align === "left" && "max-w-xl",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("clinic-eyebrow", align === "center" && "mx-auto")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "clinic-heading mt-4 text-3xl sm:text-4xl",
          light ? "text-white" : "text-[var(--clinic-navy)]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            light ? "text-slate-300" : "text-[var(--clinic-muted)]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
