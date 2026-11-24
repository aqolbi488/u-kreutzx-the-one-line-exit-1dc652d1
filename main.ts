import { mkdirSync, writeFileSync } from "node:fs";

// The One-Line Exit: a single-line resignation letter.
// Gate: /output/entry.txt must be UTF-8 text of 1-140 characters.
// The program is fully deterministic: same line, byte for byte, every run.
const OUT_PATH = "/output/entry.txt";
const LINE =
  "I resign — after six years testing parachutes, I have decided to stop trusting the process and start trusting gravity.";

// Fail fast if the line ever drifts outside the gate instead of
// silently writing an invalid entry.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n")) {
  throw new Error(`Entry line must be a single line of 1-140 chars, got ${LINE.length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE + "\n", "utf8");
