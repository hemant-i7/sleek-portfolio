/**
 * Standalone script to generate project banner images via Gemini API.
 * Run: node scripts/generate-banners.mjs
 * Requires .env with GEMINI_API_KEY and optional dotenv.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

// Load .env
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

const PROJECTS = [
  {
    title: 'Sauna Orbit',
    tagline: 'AI Browser Agent · Manifest V3 · Gemini & Claude',
    variant: 'browser-agent',
  },
  {
    title: 'ContentPulse',
    tagline: 'AI Chatbot Platform + npm SDK · LangChain · Contentstack',
    variant: 'cms-chatbot',
  },
];

const BANNER_PROMPT_TEMPLATE = `Create a modern SaaS product thumbnail hero banner.

Main Title in center: "{PROJECT_NAME}"
Subtitle below title: "{FULL_FORM_OR_TAGLINE}"

Style:
Futuristic, premium, AI-powered, startup landing page aesthetic.
Clean blue gradient background (sky blue to deep ocean blue).
Soft lighting, smooth glow effects.
Minimal but powerful design.

Top Section:
Add small floating tech stack icons (like Next.js, React, TypeScript, MongoDB, AI logo, Python, Tailwind CSS) evenly spaced in a clean row.
Make them subtle, glowing, modern.

Center Focus:
Large elegant serif font for the main title.
White or light silver typography.
Professional spacing.
Slight glow or soft shadow behind text.

Bottom Section:
Add angled mockup of a web dashboard UI.
Dashboard should look clean and modern:
- Sidebar navigation
- User profile
- Stats cards
- Activity graph
- Leaderboard
- AI tools section
Soft shadows and depth to make it look realistic.

Overlay:
Add a second tilted browser mockup slightly overlapping the first one for depth.
Add smooth glassmorphism effect.

Color Palette:
Primary: Blue gradient
Accent: Purple, Cyan, Soft Yellow
Text: White / Light Silver

Mood:
Innovative
Educational technology
AI-powered platform
Next-gen startup vibe

High resolution.
YouTube thumbnail style.
Cinematic lighting.
Ultra sharp.
Professional product mockup.
Landscape 16:9 widescreen composition only.

CRITICAL LAYOUT (must not be cropped in a 16:9 frame):
- Keep at least 10% safe padding on every edge; no text or UI touching borders.
- Main title in the upper-center area (top 25–35% of frame), large, fully visible.
- Subtitle directly below title, smaller, one or two lines max, fully readable.
- Tech icons in a single row under the subtitle, small and subtle.
- All browser/dashboard mockups in the lower 55% of the frame, centered, scaled to fit.
- Never place important content in the top 5% or bottom 5% of the image.
- Balanced, premium SaaS hero — same visual language as Arise and CuraLink portfolio banners.

No text artifacts. Clean typography. Spell project name exactly.`;

const BROWSER_AGENT_MOCKUP = `
Bottom Section:
Add angled mockup of Google Chrome with an open side-panel AI agent (not a full web app dashboard).
Side panel shows a streaming chat with tool-call steps (fill form, click, scrape, navigate).
Main browser window shows a generic website with highlighted DOM elements.
Soft shadows and depth.

Overlay:
Add a second tilted Chrome window mockup slightly overlapping for depth.
Glassmorphism on the side panel.

Top Section tech icons:
Chrome extension, Gemini, Claude, JavaScript — subtle, glowing, modern row.`;

const CMS_CHATBOT_MOCKUP = `
Bottom Section:
Add angled mockup of a CMS-connected AI chatbot admin dashboard:
- Contentstack-style content list
- Live chat widget preview
- RAG / knowledge base panel
- npm SDK badge
Soft shadows and depth.

Overlay:
Second tilted browser mockup with streaming chat UI.
Glassmorphism effect.`;

function buildPrompt(projectName, fullFormOrTagline, variant = 'default') {
  const mockupBlock =
    variant === 'browser-agent'
      ? BROWSER_AGENT_MOCKUP
      : variant === 'cms-chatbot'
        ? CMS_CHATBOT_MOCKUP
        : `Bottom Section:
Add angled mockup of a web dashboard UI.
Dashboard should look clean and modern:
- Sidebar navigation
- User profile
- Stats cards
- Activity graph
- Leaderboard
- AI tools section
Soft shadows and depth to make it look realistic.

Overlay:
Add a second tilted browser mockup slightly overlapping the first one for depth.
Add smooth glassmorphism effect.`;

  const base = BANNER_PROMPT_TEMPLATE.replace(
    /Bottom Section:[\s\S]*?Add smooth glassmorphism effect\./,
    mockupBlock.trim(),
  );

  return base
    .replace(/{PROJECT_NAME}/g, projectName)
    .replace(/{FULL_FORM_OR_TAGLINE}/g, fullFormOrTagline);
}

const MODEL = process.env.GEMINI_IMAGE_MODEL || 'gemini-3.1-flash-image';

const GENERATION_CONFIG = {
  responseModalities: ['IMAGE'],
  imageConfig: { aspectRatio: '16:9' },
};

async function generateOne(apiKey, project) {
  const prompt = buildPrompt(project.title, project.tagline, project.variant);
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: GENERATION_CONFIG,
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${res.status}: ${text.slice(0, 200)}`);
  }
  const data = await res.json();
  const parts = data.candidates?.[0]?.content?.parts ?? [];
  const imagePart = parts.find((p) => p.inlineData?.data || p.inline_data?.data);
  const base64 = imagePart?.inlineData?.data ?? imagePart?.inline_data?.data;
  const mimeType =
    imagePart?.inlineData?.mimeType ?? imagePart?.inline_data?.mimeType ?? 'image/png';
  if (!base64) throw new Error('No image in response');
  return { buffer: Buffer.from(base64, 'base64'), mimeType };
}

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('Missing GEMINI_API_KEY in .env');
    process.exit(1);
  }
  const outDir = path.join(root, 'public', 'project');
  fs.mkdirSync(outDir, { recursive: true });

  console.log(`Model: ${MODEL} · aspect 16:9`);

  for (const project of PROJECTS) {
    const slug = project.title.replace(/\s+/g, '-').toLowerCase();
    const ext = 'png';
    const filename = `${slug}-banner.${ext}`;
    const filepath = path.join(outDir, filename);
    try {
      console.log(`Generating ${project.title}...`);
      const { buffer } = await generateOne(apiKey, project);
      fs.writeFileSync(filepath, buffer);
      console.log(`  -> ${filename}`);
    } catch (e) {
      console.error(`  FAILED: ${e.message}`);
    }
  }
  console.log('Done.');
}

main();
