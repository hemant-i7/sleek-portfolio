/**
 * POST /api/projects/generate-all
 * Generates banner images for all projects in config. Saves to public/project/{slug}-banner.png.
 * Returns { generated: { title, url }[], failed: { title, error }[] }.
 */
import { projects } from '@/config/Projects';
import { buildProjectBannerPrompt } from '@/lib/project-banner-prompt';
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

const GEMINI_IMAGE_MODEL = 'gemini-2.0-flash-exp-image-generation';

function getTagline(p: (typeof projects)[0]): string {
  return (
    (p as { tagline?: string }).tagline ||
    p.description.split(/[.!]/)[0]?.trim().slice(0, 80) ||
    p.title
  );
}

export async function POST() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'GEMINI_API_KEY not configured' },
      { status: 500 },
    );
  }

  const generated: { title: string; url: string }[] = [];
  const failed: { title: string; error: string }[] = [];
  const dir = path.join(process.cwd(), 'public', 'project');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_IMAGE_MODEL}:generateContent?key=${apiKey}`;

  for (let i = 0; i < projects.length; i++) {
    const p = projects[i];
    const title = p.title;
    const tagline = getTagline(p);
    const prompt = buildProjectBannerPrompt(title, tagline);
    const slug = title.replace(/\s+/g, '-').toLowerCase();

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: { responseModalities: ['TEXT', 'IMAGE'] },
        } as Record<string, unknown>),
      });

      if (!response.ok) {
        const errText = await response.text();
        failed.push({ title, error: `${response.status}: ${errText.slice(0, 150)}` });
        continue;
      }

      const data = (await response.json()) as {
        candidates?: Array<{
          content?: {
            parts?: Array<{
              inlineData?: { data?: string };
              inline_data?: { data?: string };
            }>;
          }>;
        }>;
      };

      const parts = data.candidates?.[0]?.content?.parts ?? [];
      const imagePart = parts.find(
        (part) =>
          part.inlineData?.data ||
          (part as { inline_data?: { data?: string } }).inline_data?.data,
      );
      const base64 =
        imagePart?.inlineData?.data ??
        (imagePart as { inline_data?: { data?: string } })?.inline_data?.data;

      if (!base64) {
        failed.push({ title, error: 'No image in response' });
        continue;
      }

      const filename = `${slug}-banner.png`;
      const filepath = path.join(dir, filename);
      fs.writeFileSync(filepath, Buffer.from(base64, 'base64'));
      generated.push({ title, url: `/project/${filename}` });
    } catch (e) {
      failed.push({
        title,
        error: e instanceof Error ? e.message : String(e),
      });
    }
  }

  return NextResponse.json({ generated, failed });
}
