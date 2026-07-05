#!/usr/bin/env node
// Merge per-pillar JSON arrays into lib/blog/posts.json
import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const pillars = ["pillar1", "pillar2", "pillar3", "pillar4", "pillar5"];
const all = pillars.flatMap((p) => {
  const file = resolve(root, `scripts/posts-${p}.json`);
  if (!existsSync(file)) { console.log(`  skip: ${file} not found`); return []; }
  return JSON.parse(readFileSync(file, "utf8"));
});

writeFileSync(resolve(root, "lib/blog/posts.json"), JSON.stringify(all, null, 2));
console.log(`✓ Wrote ${all.length} posts → lib/blog/posts.json`);
