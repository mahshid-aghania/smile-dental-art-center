import { RichText } from "@/components/blog/RichText";
import type { BlogPost } from "@/lib/blog/posts";

export function BlogArticleBody({ post }: { post: BlogPost }) {
  const sectionIds = post.sections.map((s) =>
    s.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")
  );

  return (
    <div className="mt-10 space-y-6">
      {/* Intro */}
      {post.intro.map((paragraph, i) => (
        <p key={`intro-${i}`} className="text-lg leading-[1.8] text-[var(--clinic-muted)]">
          <RichText text={paragraph} />
        </p>
      ))}

      {/* Sections */}
      <div className="mt-4 space-y-12">
        {post.sections.map((section, si) => (
          <section key={section.heading} id={sectionIds[si]}>
            <h2 className="clinic-heading scroll-mt-24 text-2xl font-semibold text-[var(--clinic-navy)] sm:text-[1.65rem]">
              {section.heading}
            </h2>
            <div className="mt-5 space-y-5">
              {section.blocks.map((block, bi) => {
                if (block.type === "h3")
                  return (
                    <h3
                      key={bi}
                      className="clinic-heading text-xl font-semibold text-[var(--clinic-navy)]"
                    >
                      {block.text}
                    </h3>
                  );
                if (block.type === "p")
                  return (
                    <p key={bi} className="text-base leading-[1.8] text-[var(--clinic-muted)]">
                      <RichText text={block.text} />
                    </p>
                  );
                if (block.type === "callout")
                  return (
                    <div
                      key={bi}
                      className="flex gap-4 rounded-xl border border-[var(--clinic-gold)]/30 bg-[#fffbf3] px-6 py-5"
                    >
                      <span className="mt-0.5 text-xl leading-none" aria-hidden>
                        💡
                      </span>
                      <p className="text-sm leading-relaxed text-[var(--clinic-text)]">
                        <RichText text={block.text} />
                      </p>
                    </div>
                  );
                if (block.type === "ul")
                  return (
                    <ul key={bi} className="space-y-2.5">
                      {block.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-[var(--clinic-text)]">
                          <span
                            className="mt-[0.45rem] size-2 shrink-0 rounded-full bg-[var(--clinic-gold)]"
                            aria-hidden
                          />
                          <span className="leading-relaxed">
                            <RichText text={item} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  );
                if (block.type === "ol")
                  return (
                    <ol key={bi} className="space-y-2.5 pl-1">
                      {block.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-[var(--clinic-text)]">
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--clinic-gold)] text-xs font-bold text-white">
                            {j + 1}
                          </span>
                          <span className="leading-relaxed">
                            <RichText text={item} />
                          </span>
                        </li>
                      ))}
                    </ol>
                  );
                return null;
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Sources */}
      {post.sources && post.sources.length > 0 && (
        <div className="mt-14 rounded-xl border border-[var(--clinic-border)] bg-[var(--clinic-surface)] p-6">
          <h3 className="clinic-heading mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--clinic-navy)]">
            Sources &amp; Further Reading
          </h3>
          <ul className="space-y-2">
            {post.sources.map((src, i) => (
              <li key={i} className="text-sm text-[var(--clinic-muted)]">
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clinic-link"
                >
                  {src.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
