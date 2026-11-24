// One Line of Earned Pride — entry program (Node 22, no dependencies).
// Writes a single line of text to /output/entry.txt.
// The line: a quiet, earned moment of pride — a retired seamstress who
// practiced one waltz step in her kitchen for six months, and tonight
// her body knows it before her mind does. No trophy, no congratulation:
// the pride is earned inside the line, by the effort the reader can feel.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "For six months, the retired seamstress practiced one waltz step in her kitchen, and tonight her shoes remembered it before she did.";

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 240
// characters, not only white space. Fail loudly instead of writing an
// invalid entry. The file holds exactly the line — no trailing newline.
if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-240 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
