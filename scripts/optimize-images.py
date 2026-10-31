"""Run with Pillow installed: python3 scripts/optimize-images.py.
Originals remain untouched; commit generated WebP files and the manifest.
"""
import hashlib
import json
from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
public = root / 'public'
output = public / 'optimized'
output.mkdir(exist_ok=True)
manifest = {}
original_bytes = optimized_bytes = 0
for source in sorted(public.rglob('*')):
    if output in source.parents or source.suffix.lower() not in {'.jpg', '.jpeg', '.png'}:
        continue
    path = '/' + source.relative_to(public).as_posix()
    if source.name == 'pn.png':
        continue
    key = hashlib.sha256(path.encode()).hexdigest()[:16]
    with Image.open(source) as opened:
        image = ImageOps.exif_transpose(opened)
        # Convert embedded colour profiles to sRGB before stripping metadata.
        if opened.info.get('icc_profile'):
            from PIL import ImageCms
            import io
            image = ImageCms.profileToProfile(image, ImageCms.ImageCmsProfile(io.BytesIO(opened.info['icc_profile'])), ImageCms.createProfile('sRGB'), outputMode='RGBA' if 'A' in image.getbands() else 'RGB')
        image = image.convert('RGBA' if 'A' in image.getbands() else 'RGB')
        width, height = image.size
        variants = []
        for target in sorted({min(width, size) for size in (640, 1280, 2400)}):
            destination = output / f'{key}-{target}.webp'
            resized = image.resize((target, round(height * target / width)), Image.Resampling.LANCZOS) if target != width else image
            resized.save(destination, 'WEBP', quality=90, method=6)
            variants.append({'src': '/optimized/' + destination.name, 'width': target})
        original_bytes += source.stat().st_size
        optimized_bytes += (public / variants[-1]['src'].lstrip('/')).stat().st_size
        manifest[path] = {'width': width, 'height': height, 'variants': variants}
(root / 'src/data/image-manifest.json').write_text(json.dumps(manifest, indent=2) + '\n')
print(f'{len(manifest)} images: originals {original_bytes / 1e6:.1f} MB; largest WebP variants {optimized_bytes / 1e6:.1f} MB ({100 * (1 - optimized_bytes / original_bytes):.1f}% smaller)')
