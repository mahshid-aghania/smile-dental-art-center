import { RichText } from "@/components/blog/RichText";
import type { BlogPost } from "@/lib/blog/posts";

/** Renders the intro paragraphs and H2 sections of a blog post. */
export function BlogArticleBody({ post }: { post: BlogPost }) {
  return (
    <div className="prose-clinic mt-10 space-y-6">
      {post.intro.map((paragraph, i) => (
        <p key={`intro-${i}`} className="text-lg leading-relaxed text-[var(--clinic-muted)]">
          <RichText text={paragraph} />
        </p>
      ))}

      <div className="space-y-10">
        {post.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="clinic-heading text-2xl font-semibold text-[var(--clinic-navy)]">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4">
              {section.blocks.map((block, i) =>
                block.type === "p" ? (
                  <p key={i} className="text-base leading-relaxed text-[var(--clinic-muted)]">
                    <RichText text={block.text} />
                  </p>
                ) : (
                  <ul key={i} className="space-y-2">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex gap-2 text-[var(--clinic-text)]">
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--clinic-gold)]"
                          aria-hidden
                        />
                        <span className="leading-relaxed">
                          <RichText text={item} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
