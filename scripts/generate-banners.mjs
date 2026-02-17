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
  { title: 'OneStop', tagline: 'Training & Placement Hub – Jobs, ATS Match, Quizzes' },
  { title: 'SynerzyAI', tagline: 'AI Image, Video & Audio Generation' },
  { title: 'TalentLink', tagline: 'Brand–Influencer Collaboration Platform' },
  { title: 'Kreate AI', tagline: 'AI Social Media Captions & Hashtags' },
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
16:9 aspect ratio.
4K quality.`;

function buildPrompt(projectName, fullFormOrTagline) {
  return BANNER_PROMPT_TEMPLATE.replace(/{PROJECT_NAME}/g, projectName).replace(/{FULL_FORM_OR_TAGLINE}/g, fullFormOrTagline);
}

const MODEL = 'gemini-2.0-flash-exp-image-generation';

async function generateOne(apiKey, project) {
  const prompt = buildPrompt(project.title, project.tagline);
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ['TEXT', 'IMAGE'] },
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
  if (!base64) throw new Error('No image in response');
  return Buffer.from(base64, 'base64');
}

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('Missing GEMINI_API_KEY in .env');
    process.exit(1);
  }
  const outDir = path.join(root, 'public', 'project');
  fs.mkdirSync(outDir, { recursive: true });

  for (const project of PROJECTS) {
    const slug = project.title.replace(/\s+/g, '-').toLowerCase();
    const filename = `${slug}-banner.png`;
    const filepath = path.join(outDir, filename);
    try {
      console.log(`Generating ${project.title}...`);
      const buf = await generateOne(apiKey, project);
      fs.writeFileSync(filepath, buf);
      console.log(`  -> ${filename}`);
    } catch (e) {
      console.error(`  FAILED: ${e.message}`);
    }
  }
  console.log('Done.');
}

main();
