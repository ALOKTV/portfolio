import { cpSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

const outDir = "out";
const basePath = "portfolio";
const baseDir = join(outDir, basePath);

if (!existsSync(outDir)) {
  throw new Error("Expected Next.js static export directory 'out' to exist.");
}

mkdirSync(baseDir, { recursive: true });

for (const entry of readdirSync(outDir, { withFileTypes: true })) {
  if (entry.name === basePath) {
    continue;
  }

  cpSync(join(outDir, entry.name), join(baseDir, entry.name), {
    recursive: true,
    force: true,
  });
}
