import fs from "node:fs/promises";

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extract(html) {
  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim() ?? "";
  const h1Raw = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? "";
  const heading = stripHtml(h1Raw) || title;
  const paragraphs = [];
  for (const m of html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)) {
    const t = stripHtml(m[1]);
    if (t.length < 50) continue;
    const lower = t.toLowerCase();
    if (lower.includes("cookie") || lower.includes("elementor")) continue;
    paragraphs.push(t);
    if (paragraphs.length >= 10) break;
  }
  return { title, heading, paragraphs };
}

async function main() {
  const sitemapRes = await fetch("https://smiledentalartscentre.com/page-sitemap.xml");
  const sitemap = await sitemapRes.text();
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const pages = {};

  for (const url of urls) {
    const path = url.replace("https://smiledentalartscentre.com", "").replace(/^\//, "").replace(/\/$/, "") || "home";
    process.stdout.write(`Scraping ${path}…\n`);
    try {
      const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
      const html = await res.text();
      pages[path] = extract(html);
    } catch (e) {
      pages[path] = { title: path, heading: path, paragraphs: [], error: String(e) };
    }
    await new Promise((r) => setTimeout(r, 200));
  }

  await fs.writeFile("lib/clinic/scraped-pages.json", JSON.stringify(pages, null, 2));
  console.log(`Wrote ${Object.keys(pages).length} pages`);
}

main();
