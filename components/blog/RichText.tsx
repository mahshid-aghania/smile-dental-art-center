"use client";

import { Fragment } from "react";
import Link from "next/link";

type Node =
  | { kind: "text"; value: string }
  | { kind: "bold"; value: string }
  | { kind: "link"; text: string; href: string; external: boolean };

function parse(raw: string): Node[] {
  const nodes: Node[] = [];
  // Split on **bold** first
  const boldParts = raw.split(/\*\*(.+?)\*\*/g);

  boldParts.forEach((part, bi) => {
    if (bi % 2 === 1) {
      nodes.push({ kind: "bold", value: part });
      return;
    }
    // Within non-bold segments, find [text](url)
    const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
    let last = 0;
    let m: RegExpExecArray | null;
    while ((m = linkRe.exec(part)) !== null) {
      if (m.index > last) nodes.push({ kind: "text", value: part.slice(last, m.index) });
      nodes.push({
        kind: "link",
        text: m[1],
        href: m[2],
        external: m[2].startsWith("http"),
      });
      last = m.index + m[0].length;
    }
    if (last < part.length) nodes.push({ kind: "text", value: part.slice(last) });
  });

  return nodes;
}

export function RichText({ text }: { text: string }) {
  const nodes = parse(text);
  return (
    <>
      {nodes.map((node, i) => {
        if (node.kind === "text") return <Fragment key={i}>{node.value}</Fragment>;
        if (node.kind === "bold")
          return (
            <strong key={i} className="font-semibold text-[var(--clinic-navy)]">
              {node.value}
            </strong>
          );
        if (node.external)
          return (
            <a
              key={i}
              href={node.href}
              target="_blank"
              rel="noopener noreferrer"
              className="clinic-link inline-flex items-baseline gap-0.5 font-medium"
            >
              {node.text}
              <svg
                className="mb-px inline size-3 shrink-0 opacity-60"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 10L10 2M10 2H4M10 2V8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          );
        return (
          <Link key={i} href={node.href} className="clinic-link font-medium">
            {node.text}
          </Link>
        );
      })}
    </>
  );
}
