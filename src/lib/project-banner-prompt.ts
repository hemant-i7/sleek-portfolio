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

export function buildProjectBannerPrompt(
  projectName: string,
  fullFormOrTagline: string,
): string {
  return BANNER_PROMPT_TEMPLATE.replace(/{PROJECT_NAME}/g, projectName).replace(
    /{FULL_FORM_OR_TAGLINE}/g,
    fullFormOrTagline,
  );
}
