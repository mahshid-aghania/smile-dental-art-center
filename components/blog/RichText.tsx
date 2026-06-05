import { Fragment } from "react";

/**
 * Renders a plain string that may contain markdown-style **bold** spans.
 * Used for blog paragraphs and list items parsed from the source content.
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-[var(--clinic-navy)]">
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
