/**
 * Encodes the full-size screenshots in assets-src/ into the responsive WebP
 * variants that public/assets/ serves.
 *
 *   npm run optimize:images
 *
 * Every render slot (project card + project detail hero) is `aspect-ratio: 4/3`
 * with `object-fit: cover`, so centre-cropping to 4:3 here produces exactly the
 * pixels the browser already displays — it just stops shipping the parts that
 * get cropped away.
 *
 * After adding a project: drop the screenshot in assets-src/, add it to SOURCES
 * below, re-run, then add the printed widths to `projectImageMap` in
 * src/components/Projects.jsx and to the project's detail page.
 */
import sharp from "sharp";
import { readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";

const SRC_DIR = "assets-src";
const OUT_DIR = "public/assets";
const RATIO = 4 / 3;

// Card renders at ~517 CSS px, detail hero at ~1056 CSS px. The larger variant
// is capped per-image at whatever the source can supply without upscaling.
const TARGETS = [640, 1280];

const SOURCES = [
  ["RU Employee Profile.jpg", "ru-employee-profile"],
  ["RUSMS.png", "rusms"],
  ["TryLense.png", "trylense"],
  ["Online Judge.png", "online-judge"],
  ["Blood Donation Backend.png", "blood-donation-backend"],
  ["Ticket Booking Mobile App.png", "ticket-booking"],
  ["Task Poster.jpg", "task-poster"],
];

let before = 0;
let after = 0;

for (const [file, slug] of SOURCES) {
  const src = path.join(SRC_DIR, file);
  const input = await readFile(src);
  const meta = await sharp(input).metadata();
  before += (await stat(src)).size;

  const maxWidth = Math.min(meta.width, Math.round(meta.height * RATIO));
  const widths = [...new Set(TARGETS.map((w) => Math.min(w, maxWidth)))].sort(
    (a, b) => a - b
  );

  const report = [];
  for (const w of widths) {
    const buf = await sharp(input)
      .resize(w, Math.round(w / RATIO), { fit: "cover", position: "center" })
      .webp({ quality: 82, effort: 6 })
      .toBuffer();
    await writeFile(path.join(OUT_DIR, `${slug}-${w}.webp`), buf);
    after += buf.length;
    report.push(`${w}w ${(buf.length / 1024).toFixed(0)}kB`);
  }

  console.log(
    `${file.padEnd(32)} ${meta.width}x${meta.height}`.padEnd(48) +
      `-> ${slug} [${widths.join(", ")}]  ${report.join(", ")}`
  );
}

console.log(
  `\nSources ${(before / 1024 / 1024).toFixed(2)} MB  ->  variants ${(
    after / 1024
  ).toFixed(0)} KB  (${(100 - (after / before) * 100).toFixed(1)}% smaller)`
);
