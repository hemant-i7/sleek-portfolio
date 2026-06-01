/**
 * Generate a Pokémon FireRed/LeafGreen–style navbar sprite from profile photo.
 * Run: node scripts/generate-navbar-sprite.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

try {
  const envPath = path.join(root, '.env');
  if (fs.existsSync(envPath)) {
    const env = fs.readFileSync(envPath, 'utf8');
    for (const line of env.split('\n')) {
      const m = line.match(/^([^#=]+)=(.*)$/);
      if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
    }
  }
} catch (_) {}

const MODEL = process.env.GEMINI_IMAGE_MODEL || 'gemini-3.1-flash-image';
const SOURCE = path.join(root, 'public/assets/Hemant-kadam.png');
const OUT_RAW = path.join(root, 'public/assets/hemant-navbar-sprite-raw.png');
const OUT = path.join(root, 'public/assets/hemant-navbar-sprite.png');

const PROMPT = `Transform this photo into a pixel art portrait icon for Pokémon FireRed / LeafGreen, optimized for a DARK website navbar.

CRITICAL — composition (not too tight):
- Head portrait from upper hair through chin — NOT an extreme forehead crop.
- Leave small padding above the hair and a little space below the chin (about 8–12% margin on all sides).
- Face/head occupies ~70–78% of frame — NOT edge-to-edge full face.
- NO shoulders, NO suit jacket, NO chest — stop at upper neck max.
- Slightly lower framing than a passport crop: eyes near vertical center, not at top of image.

CRITICAL — colors for DARK UI:
- Background: solid flat #1a1f2e dark blue-grey (matches dark mode nav). No white background.
- Skin: bright warm tan / peach pixels with clear highlights — face must POP on dark bg
- NOT black or muddy grey skin; cheerful lit face
- Hair: dark brown pixels; beard medium brown (not black mass)
- Add a subtle 1px light cream (#f5e6c8) outer rim / highlight around head silhouette for separation on dark UI
- Eyes bright; friendly smile with visible teeth pixels

Style:
- Chibi simplified head, ~64x64 pixel art density, chunky pixels, 1px outlines
- Limited palette, flat shading, retro RPG menu icon
- Forward-facing Pokémon NPC portrait
- No text, no UI chrome, no creatures`;

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('Missing GEMINI_API_KEY in .env');
    process.exit(1);
  }
  if (!fs.existsSync(SOURCE)) {
    console.error(`Source not found: ${SOURCE}`);
    process.exit(1);
  }

  const meta = await sharp(SOURCE).metadata();
  const w = meta.width ?? 748;
  const h = meta.height ?? 777;
  const cropSize = Math.round(Math.min(w, h) * 0.68);
  const left = Math.round((w - cropSize) / 2);
  const top = Math.round(h * 0.1);

  const faceCrop = await sharp(SOURCE)
    .extract({
      left: Math.min(left, w - cropSize),
      top: Math.min(top, h - cropSize),
      width: cropSize,
      height: cropSize,
    })
    .resize(512, 512, { kernel: sharp.kernel.lanczos3 })
    .modulate({ brightness: 1.06, saturation: 1.04 })
    .png()
    .toBuffer();

  const imageBase64 = faceCrop.toString('base64');
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`;

  console.log(`Model: ${MODEL}`);
  console.log('Generating Pokémon-style navbar sprite...');

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [
        {
          role: 'user',
          parts: [
            { text: PROMPT },
            { inline_data: { mime_type: 'image/png', data: imageBase64 } },
          ],
        },
      ],
      generationConfig: {
        responseModalities: ['IMAGE'],
        imageConfig: { aspectRatio: '1:1' },
      },
    }),
  });

  if (!res.ok) {
    console.error(await res.text());
    process.exit(1);
  }

  const data = await res.json();
  const parts = data.candidates?.[0]?.content?.parts ?? [];
  const imagePart = parts.find((p) => p.inlineData?.data || p.inline_data?.data);
  const base64 =
    imagePart?.inlineData?.data ?? imagePart?.inline_data?.data;
  if (!base64) {
    console.error('No image in response', JSON.stringify(data).slice(0, 500));
    process.exit(1);
  }

  fs.writeFileSync(OUT_RAW, Buffer.from(base64, 'base64'));

  await sharp(OUT_RAW)
    .modulate({ brightness: 1.08, saturation: 1.06 })
    .resize(64, 64, { kernel: sharp.kernel.nearest })
    .png({ compressionLevel: 9 })
    .toFile(OUT);

  console.log(`Saved raw: ${path.relative(root, OUT_RAW)}`);
  console.log(`Saved 64x64: ${path.relative(root, OUT)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
