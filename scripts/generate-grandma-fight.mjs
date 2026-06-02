import fs from "node:fs/promises";
import path from "node:path";
import Replicate from "replicate";

const MODEL = "wan-video/wan-2.7-t2v";
const OUT_DIR = path.join(process.cwd(), "public", "generated");
const OUT_FILE = path.join(OUT_DIR, "grandma-fight.mp4");

const prompt =
  "Comedic slapstick scene: two sweet elderly grandmothers in floral dresses and big glasses having an over-the-top fake fight in a sunny suburban front yard, wildly swinging handbags and rolled-up newspapers, exaggerated cartoonish reactions, dust puffs, one grandma trips over a garden gnome, neighbors peek from behind curtains laughing, bright daytime lighting, wide shot, cinematic comedy timing, wholesome and funny, no blood, no injuries";

const negativePrompt =
  "violence, blood, injury, weapons, guns, knives, scary, horror, dark, blurry, distorted, low quality, static";

function extractUrl(output) {
  if (typeof output === "string" && output.startsWith("http")) return output;
  if (Array.isArray(output)) {
    for (const item of output) {
      const url = extractUrl(item);
      if (url) return url;
    }
  }
  if (output && typeof output === "object") {
    if (typeof output.url === "function") return output.url();
    if (typeof output.toString === "function") {
      const s = String(output);
      if (s.startsWith("http")) return s;
    }
    if (typeof output.href === "string") return output.href;
  }
  return null;
}

async function main() {
  const token = process.env.REPLICATE_API_TOKEN?.trim();
  if (!token) {
    console.error("Missing REPLICATE_API_TOKEN");
    process.exit(1);
  }

  const replicate = new Replicate({ auth: token });
  console.log("Generating video with", MODEL, "…");

  const output = await replicate.run(MODEL, {
    input: {
      prompt,
      negative_prompt: negativePrompt,
      duration: 5,
      resolution: "720p",
      aspect_ratio: "16:9",
      enable_prompt_expansion: true,
    },
  });

  const url = extractUrl(output);
  if (!url) {
    console.error("Unexpected output:", output);
    process.exit(1);
  }

  console.log("Downloading:", url);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Download failed: ${res.status} ${res.statusText}`);
  }

  await fs.mkdir(OUT_DIR, { recursive: true });
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(OUT_FILE, buf);
  console.log("Saved:", OUT_FILE);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
