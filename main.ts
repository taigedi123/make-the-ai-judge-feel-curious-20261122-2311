import * as fs from "node:fs";

// The Ninth Step — a short text written to leave the reader curious.
// Revised: tightened the verbs ("stood open", "I checked") so the
// sentences land one at a time, and the last line stays unresolved.
const TEXT =
  "On the ninth floor of my building there is a door with no number. " +
  "I have lived here six years. Last Tuesday it stood open, and the hallway " +
  "behind it smelled of rain. I checked the plans twice. " +
  "There is no ninth floor.";

const outputDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(`${outputDir}/entry.txt`, TEXT, "utf8");
