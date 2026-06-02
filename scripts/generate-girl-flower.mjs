import fs from "node:fs/promises";
import path from "node:path";
import Replicate from "replicate";

const MODEL = "wan-video/wan-2.7-t2v";
const OUT_DIR = path.join(process.cwd(), "public", "generated");
const OUT_FILE = path.join(OUT_DIR, "girl-flower-hope.mp4");

const prompt =
  "Tender cinematic moment: a little cute girl with soft curly hair in a light summer dress gently smelling a bright wildflower in a sunlit meadow at golden hour, eyes closed with a peaceful hopeful smile, warm gentle breeze moving her hair, soft dreamy bokeh, hopeful uplifting mood, soft natural lighting, close-up slowly pulling back, wholesome and heartwarming, photorealistic";

const negativePrompt =
  "scary, dark, sad, crying, violence, blurry, distorted, low quality, static, horror, adult themes";

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
    if (typeof output.href === "string") return output.href;
    const s = String(output);
    if (s.startsWith("http")) return s;
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

  const downloadUrl = typeof url === "string" ? url : url.href ?? String(url);
  console.log("Downloading:", downloadUrl);
  const res = await fetch(downloadUrl);
  if (!res.ok) {
    throw new Error(`Download failed: ${res.status} ${res.statusText}`);
  }

  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.writeFile(OUT_FILE, Buffer.from(await res.arrayBuffer()));
  console.log("Saved:", OUT_FILE);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
