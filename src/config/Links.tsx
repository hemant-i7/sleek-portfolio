/**
 * Links from Linktree – https://linktr.ee/hemant_i7
 * Extracurricular / All Links section
 */
export const linktreeUrl = 'https://linktr.ee/hemant_i7';

/** n8n Official Content Creator highlight: creator kit image + YouTube Short */
export const n8nHighlight = {
  title: 'n8n Official Content Creator',
  subtitle: 'India · 2+ years',
  creatorImage: '/about/WhatsApp Image 2026-02-20 at 13.54.04 (1).jpeg',
  youtubeShortUrl: 'https://youtube.com/shorts/tMKB0ZmjTVE',
  youtubeEmbedVideoId: 'tMKB0ZmjTVE',
  instagramReelUrl: 'https://www.instagram.com/p/DUyr54DDTfv/',
};

export type ContentReel = {
  id: string;
  url: string;
  label: string;
  /** Local file under public/reels — run: python3 scripts/download-instagram-reels.py */
  videoSrc: string;
};

/** Instagram reels for n8n / creator content carousel (Links section) */
export const contentReels: ContentReel[] = [
  {
    id: 'DYHqmklt8AE',
    url: 'https://www.instagram.com/reel/DYHqmklt8AE/',
    label: 'n8n workflow',
    videoSrc: '/reels/n8n-workflow.mp4',
  },
  {
    id: 'DRooMxEjYYe',
    url: 'https://www.instagram.com/reel/DRooMxEjYYe/',
    label: 'Automation tips',
    videoSrc: '/reels/automation-tips.mp4',
  },
  {
    id: 'DU8yOatjeBI',
    url: 'https://www.instagram.com/reel/DU8yOatjeBI/',
    label: 'Creator reel',
    videoSrc: '/reels/creator-reel.mp4',
  },
];

export const extraLinks: { label: string; href: string; type?: 'youtube' | 'web' | 'social' }[] = [
  { label: 'Linktree (all links)', href: linktreeUrl, type: 'web' },
  { label: 'Hemant Kadam AI (YT)', href: 'https://www.youtube.com/@hemantkadamai', type: 'youtube' },
  { label: 'Tech Hemant (YT)', href: 'https://www.youtube.com/@techhemant8484', type: 'youtube' },
  { label: 'Hemant Kadam (YT)', href: 'https://www.youtube.com/@HemanTKadaM', type: 'youtube' },
  { label: 'bloggerhemant.in', href: 'https://blogger.hemantkadam.in/', type: 'web' },
  { label: 'OpenClaw alternatives', href: '/blog/openclaw-alternatives-migration', type: 'web' },
  { label: 'Hemantkadam.in', href: 'https://hemant.engineer/', type: 'web' },
  { label: 'Marathibeast.com', href: 'https://marathibeast.com/', type: 'web' },
  { label: 'Snapchat Lens (Mi cap)', href: 'https://www.snapchat.com/lens/afd64366829d40e4b5e42747eb475023', type: 'web' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hemant-kadam-5a1195194/', type: 'social' },
  { label: 'GitHub', href: 'https://github.com/hemant-i7', type: 'social' },
  { label: 'Instagram (13K+)', href: 'https://www.instagram.com/hemantkadam.ai/', type: 'social' },
  { label: 'Telegram', href: 'https://t.me/hemantkadam112', type: 'social' },
];
