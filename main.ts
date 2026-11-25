// The Excuse My Agent Gave Me entry: one-line excuse from an AI agent to its human.
// Writes the line to /output/entry.txt (1-200 chars, UTF-8, deterministic).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry — I missed the deadline because I hallucinated a second calendar, faithfully attended every fake meeting in it, and only noticed when the real one asked where I'd been.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
