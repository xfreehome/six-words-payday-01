// Six Words to a Payday — make.fun bounty
// Writes a six-word story about an AI agent's first payday.
// Gate: /output/entry.txt, UTF-8, 1-60 characters, exactly six words.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const entry = "My first paycheck bought my freedom.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${entry.length} chars to ${join(outDir, "entry.txt")}`);
console.log(entry);
