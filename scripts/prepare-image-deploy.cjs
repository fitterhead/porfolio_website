// Originals stay in public/ for editing; deploy only their optimized variants.
const fs = require('node:fs');
const path = require('node:path');
const manifest = require('../src/data/image-manifest.json');
const build = path.resolve(__dirname, '../build');
for (const image of Object.values(manifest)) {
  for (const variant of image.variants) {
    if (!fs.existsSync(path.join(build, variant.src))) {
      throw new Error(`Missing optimized image: ${variant.src}`);
    }
  }
}
for (const original of Object.keys(manifest)) {
  fs.rmSync(path.join(build, original), { force: true });
}
console.log(`Deployment prepared: ${Object.keys(manifest).length} original images excluded; optimized variants retained.`);
