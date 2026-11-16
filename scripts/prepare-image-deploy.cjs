// Keep originals in source control; deploy only the responsive web copies.
const fs = require('node:fs');
const path = require('node:path');
const manifest = require('../src/data/image-manifest.json');
const build = path.resolve(__dirname, '../build');
for (const [original, image] of Object.entries(manifest)) {
  if (!image.variants?.length) throw new Error(`Missing image variants: ${original}`);
  for (const variant of image.variants) {
    if (!fs.existsSync(path.join(build, variant.src))) {
      throw new Error(`Missing optimized image: ${variant.src}`);
    }
  }
}
for (const original of Object.keys(manifest)) {
  fs.rmSync(path.join(build, original), { force: true });
}
console.log(`Deployment prepared: ${Object.keys(manifest).length} images use responsive WebP copies; originals excluded.`);
