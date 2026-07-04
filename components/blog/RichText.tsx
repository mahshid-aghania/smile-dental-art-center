import { Fragment } from "react";
import Link from "next/link";

/**
 * Renders a plain string that may contain markdown-style **bold** spans and
 * [label](/path) internal links. Used for blog paragraphs and list items.
 */
export function RichText({ text }: { text: string }) {
  return <>{tokenize(text)}</>;
}

type Token = { type: "text" | "bold" | "link"; value: string; href?: string };

function tokenize(input: string) {
  const pattern = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  const tokens: Token[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(input)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: "text", value: input.slice(lastIndex, match.index) });
    }
    if (match[1] !== undefined) {
      tokens.push({ type: "bold", value: match[1] });
    } else {
      tokens.push({ type: "link", value: match[2], href: match[3] });
    }
    lastIndex = pattern.lastIndex;
  }
  if (lastIndex < input.length) {
    tokens.push({ type: "text", value: input.slice(lastIndex) });
  }

  return tokens.map((token, i) => {
    if (token.type === "bold") {
      return (
        <strong key={i} className="font-semibold text-[var(--clinic-navy)]">
          {token.value}
        </strong>
      );
    }
    if (token.type === "link" && token.href) {
      const external = token.href.startsWith("http");
      return external ? (
        <a
          key={i}
          href={token.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--clinic-gold)] underline underline-offset-2 hover:text-[var(--clinic-navy)]"
        >
          {token.value}
        </a>
      ) : (
        <Link
          key={i}
          href={token.href}
          className="font-medium text-[var(--clinic-gold)] underline underline-offset-2 hover:text-[var(--clinic-navy)]"
        >
          {token.value}
        </Link>
      );
    }
    return <Fragment key={i}>{token.value}</Fragment>;
  });
}
