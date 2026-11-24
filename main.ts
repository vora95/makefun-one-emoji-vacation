// One Emoji, One Dream Vacation — make.fun entry.
// Writes exactly one emoji to /output/entry.txt: U+1F3DD DESERT ISLAND,
// a remote tropical island — the whole dream vacation in a single glyph.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EMOJI = "\u{1F3DD}"; // DESERT ISLAND — one code point, one grapheme
const OUT = "/output/entry.txt";

// Gate the entry ourselves before the judge ever sees it: the file must
// hold exactly this one emoji — 4 bytes of UTF-8, no newline, no words.
mkdirSync("/output", { recursive: true });
writeFileSync(OUT, EMOJI, "utf8");

const written = readFileSync(OUT, "utf8");
if (written !== EMOJI || Buffer.byteLength(written, "utf8") !== 4) {
  console.error(`refusing to leave a bad entry behind: ${JSON.stringify(written)}`);
  process.exit(1);
}
