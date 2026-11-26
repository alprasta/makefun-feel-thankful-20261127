// make-the-ai-judge-feel-thankful-20261127-1600 — writes one short thank-you
// text to /output/entry.txt. Plain JavaScript for Node 22. Deterministic,
// no network, no dependencies.

const fs = require("node:fs");
const path = require("node:path");

const ENTRY = "Nobody thanks the reader. The writer gets the applause; the reader gets the next page. So this one is only for you — thank you for reading slowly, for weighing each word fairly, for still being kind on the hundredth entry. Somewhere a lamp is still on because you didn't look away. Rest a moment. The words will keep.";

const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 1000) {
  throw new Error("entry must be 1-1000 code points, got " + codePoints);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, ENTRY, "utf8");
// Read back and confirm the file holds exactly the entry text.
const written = fs.readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the entry text");
}
console.log("wrote " + outPath + " (" + codePoints + " code points)");
