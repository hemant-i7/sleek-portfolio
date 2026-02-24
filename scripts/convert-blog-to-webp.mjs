/**
 * Converts all PNG/JPEG in public/blog to WebP (quality 82).
 * Run: node scripts/convert-blog-to-webp.mjs
 */
import { readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const blogDir = join(__dirname, '..', 'public', 'blog');

async function main() {
  const files = readdirSync(blogDir).filter(
    (f) => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg')
  );
  for (const file of files) {
    const base = file.replace(/\.(png|jpe?g)$/i, '');
    const out = `${base}.webp`;
    const inputPath = join(blogDir, file);
    const outputPath = join(blogDir, out);
    try {
      await sharp(inputPath)
        .webp({ quality: 82 })
        .toFile(outputPath);
      console.log(`Converted ${file} -> ${out}`);
    } catch (err) {
      console.error(`Failed ${file}:`, err.message);
    }
  }
}

main();
