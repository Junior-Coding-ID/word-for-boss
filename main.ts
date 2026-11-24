import * as fs from "node:fs";
import * as path from "node:path";

const entry = "Bottleneck";

// The entry must be exactly one word: no spaces, no extra tokens.
if (entry.trim().split(/\s+/).length !== 1) {
  throw new Error("entry must be exactly one word");
}

const outputDir = process.env.MAKEFUN_OUTPUT || "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), entry + "\n");
