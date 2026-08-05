import { buildDentistJsonLd } from "@/lib/seo/json-ld";

export function JsonLd() {
  const data = buildDentistJsonLd();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
