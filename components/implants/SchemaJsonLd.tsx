/** Renders a JSON-LD <script> tag for structured data (SEO). */
export function SchemaJsonLd({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inject here; values are static, trusted content.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
