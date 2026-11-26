// Ship It Friday — make.fun entry by xxstealz.
// The entry is a single fixed commit message: an AI coding agent's note
// right before it breaks production on a Friday. Confident, cheerful,
// and completely unaware of the disaster it is about to cause.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "ship it: deploying on Friday at 4:59pm. The rollback plan is 'don't tell anyone until Monday'.";
const MAX_CHARS = 159;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`line must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be whitespace-only");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
