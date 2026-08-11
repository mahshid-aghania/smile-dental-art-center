import fs from "node:fs/promises";
import path from "node:path";

const PAGE_URL = "https://www.confidentist.ca/points-rewards-program/";
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const FONT_FILES = [
  {
    url: "https://fonts.gstatic.com/s/merriweather/v33/u-4e0qyriQwlOrhSvowK_l5UcA6zuSYEqOzpPe3HOZJ5eX1WtLaQwmYiSeqqJ-k.woff2",
    file: "merriweather-latin.woff2",
  },
  {
    url: "https://fonts.gstatic.com/s/ptsans/v18/jizaRExUiTo99u79D0-ExdGM.woff2",
    file: "pt-sans-400-latin.woff2",
  },
  {
    url: "https://fonts.gstatic.com/s/questrial/v19/QdVUSTchPBm7nuUeVf70sCFlq20.woff2",
    file: "questrial-400-latin.woff2",
  },
  {
    url: "https://fonts.gstatic.com/s/librebaskerville/v24/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxM.woff2",
    file: "libre-baskerville-400-latin.woff2",
  },
  {
    url: "https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2",
    file: "montserrat-400-latin.woff2",
  },
];

async function fetchText(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return res.text();
}

function extractFusionCssUrl(html) {
  const match = html.match(/fusion-styles\/[^"']+\.min\.css[^"']*/);
  if (!match) throw new Error("Could not find Avada fusion dynamic CSS URL");
  return `https://www.confidentist.ca/wp-content/uploads/${match[0]}`;
}

async function main() {
  const root = process.cwd();
  const fontDir = path.join(root, "public/confidentist/fonts");
  const cacheDir = path.join(root, "lib/confidentist/cache");

  await fs.mkdir(fontDir, { recursive: true });
  await fs.mkdir(cacheDir, { recursive: true });

  process.stdout.write(`Fetching ${PAGE_URL}\n`);
  const html = await fetchText(PAGE_URL);
  await fs.writeFile(path.join(cacheDir, "points-rewards.html"), html);

  const fusionCssUrl = extractFusionCssUrl(html);
  process.stdout.write(`Fetching ${fusionCssUrl}\n`);
  const fusionCss = await fetchText(fusionCssUrl);
  await fs.writeFile(path.join(cacheDir, "fusion-dynamic.min.css"), fusionCss);

  for (const { url, file } of FONT_FILES) {
    process.stdout.write(`Downloading ${file}\n`);
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (!res.ok) throw new Error(`${url} -> ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await fs.writeFile(path.join(fontDir, file), buf);
  }

  console.log("Done. See lib/confidentist/manifest.json for tokens and usage.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
