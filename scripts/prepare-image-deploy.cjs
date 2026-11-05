// Deploy the original artwork; compressed variants are no longer used.
const fs = require('node:fs');
const path = require('node:path');
const manifest = require('../src/data/image-manifest.json');
const build = path.resolve(__dirname, '../build');
for (const original of Object.keys(manifest)) {
  if (!fs.existsSync(path.join(build, original))) {
    throw new Error(`Missing original image: ${original}`);
  }
}
fs.rmSync(path.join(build, 'optimized'), { recursive: true, force: true });
console.log(`Deployment prepared: ${Object.keys(manifest).length} original images retained; unused optimized variants excluded.`);
