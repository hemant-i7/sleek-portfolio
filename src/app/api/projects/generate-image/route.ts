/**
 * POST /api/projects/generate-image
 * Generates a 16:9 SaaS hero banner for a project using Gemini (Nano Banana / image gen).
 * Body: { projectKey: number | string } (index or title) OR { projectName, tagline }.
 * Saves to public/project/{slug}-banner.png and returns { url, projectName, tagline }.
 */
import { projects } from '@/config/Projects';
import { buildProjectBannerPrompt } from '@/lib/project-banner-prompt';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

const GEMINI_IMAGE_MODEL = 'gemini-2.0-flash-exp-image-generation';

function getProjectByKey(key: string): { title: string; tagline: string } | null {
  const idx = parseInt(key, 10);
  if (!Number.isNaN(idx) && idx >= 0 && idx < projects.length) {
    const p = projects[idx];
    const tagline =
      (p as { tagline?: string }).tagline ||
      p.description.split(/[.!]/)[0]?.trim().slice(0, 80) ||
      p.title;
    return { title: p.title, tagline };
  }
  const byTitle = projects.find(
    (p) => p.title.toLowerCase() === key.toLowerCase(),
  );
  if (byTitle) {
    const tagline =
      (byTitle as { tagline?: string }).tagline ||
      byTitle.description.split(/[.!]/)[0]?.trim().slice(0, 80) ||
      byTitle.title;
    return { title: byTitle.title, tagline };
  }
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'GEMINI_API_KEY not configured' },
        { status: 500 },
      );
    }

    const body = await request.json().catch(() => ({}));
    const projectKey =
      body.projectKey ?? body.projectIndex ?? body.title ?? body.slug;
    const projectName = body.projectName as string | undefined;
    const tagline = body.tagline as string | undefined;

    let title: string;
    let fullFormOrTagline: string;

    if (projectName && tagline) {
      title = projectName;
      fullFormOrTagline = tagline;
    } else if (typeof projectKey === 'string') {
      const proj = getProjectByKey(projectKey);
      if (!proj) {
        return NextResponse.json(
          { error: 'Project not found. Use projectKey (index or title), or projectName + tagline.' },
          { status: 400 },
        );
      }
      title = proj.title;
      fullFormOrTagline = proj.tagline;
    } else {
      return NextResponse.json(
        { error: 'Provide projectKey, or projectName and tagline.' },
        { status: 400 },
      );
    }

    const prompt = buildProjectBannerPrompt(title, fullFormOrTagline);

    const modelToUse = GEMINI_IMAGE_MODEL;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelToUse}:generateContent?key=${apiKey}`;

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
      if (response.status === 404 || errText.includes('not found')) {
        return NextResponse.json(
          {
            error:
              'Image generation model not available. Try enabling Gemini image generation in Google AI Studio.',
            details: errText.slice(0, 200),
          },
          { status: 502 },
        );
      }
      return NextResponse.json(
        { error: `Gemini API error: ${response.status}`, details: errText.slice(0, 300) },
        { status: 502 },
      );
    }

    const data = (await response.json()) as {
      candidates?: Array<{
        content?: {
          parts?: Array<{
            inlineData?: { data?: string };
            inline_data?: { data?: string };
          }>;
        };
      }>;
    };

    const parts = data.candidates?.[0]?.content?.parts ?? [];
    const imagePart = parts.find(
      (p) => p.inlineData?.data || (p as { inline_data?: { data?: string } }).inline_data?.data,
    );
    const base64 =
      imagePart?.inlineData?.data ??
      (imagePart as { inline_data?: { data?: string } }).inline_data?.data;

    if (!base64) {
      return NextResponse.json(
        {
          error: 'No image in response',
          raw: JSON.stringify(data).slice(0, 800),
          hint: 'Model may not support image gen or use different response shape.',
        },
        { status: 502 },
      );
    }

    const slug = title.replace(/\s+/g, '-').toLowerCase();
    const dir = path.join(process.cwd(), 'public', 'project');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const filename = `${slug}-banner.png`;
    const filepath = path.join(dir, filename);
    fs.writeFileSync(filepath, Buffer.from(base64, 'base64'));

    const imageUrl = `/project/${filename}`;

    return NextResponse.json({
      url: imageUrl,
      projectName: title,
      tagline: fullFormOrTagline,
    });
  } catch (error) {
    console.error('Generate image error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 },
    );
  }
}
