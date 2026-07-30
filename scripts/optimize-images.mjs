import sharp from "sharp";
import fs from "fs";
import path from "path";
import os from "os";

const heavy = [
  "public/projects/pet.png",
  "public/diagrams/maintenance-loop.png",
  "public/diagrams/automation-flow.png",
  "public/projects/movie.png",
  "public/diagrams/brand-experience.png",
  "public/diagrams/growth-funnel.png",
  "public/diagrams/delivery-cycle.png",
];

for (const file of heavy) {
  if (!fs.existsSync(file)) {
    console.log("missing", file);
    continue;
  }
  const webp = file.replace(/\.png$/i, ".webp");
  const tmp = path.join(os.tmpdir(), `rs-opt-${path.basename(webp)}`);
  await sharp(file)
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(tmp);
  fs.copyFileSync(tmp, webp);
  fs.unlinkSync(tmp);
  console.log(
    "opt",
    path.basename(webp),
    `${Math.round(fs.statSync(webp).size / 1024)}KB`,
    "from",
    `${Math.round(fs.statSync(file).size / 1024)}KB`,
  );
}

console.log("done");
