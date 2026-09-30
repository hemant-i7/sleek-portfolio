import { WorkshopButton } from '@/components/common/WorkshopCta';
import { extraLinks, linktreeUrl, n8nHighlight } from '@/config/Links';
import Image from 'next/image';
import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import {
  SiBlogger,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiLinktree,
  SiSnapchat,
  SiTelegram,
  SiYoutube,
} from 'react-icons/si';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ContentReelsCarousel } from './ContentReelsCarousel';

function getLinkIcon(item: (typeof extraLinks)[0]) {
  if (item.type === 'youtube') return <SiYoutube className="size-5 text-[#ff0000]" />;
  if (item.label.toLowerCase().includes('linktree'))
    return <SiLinktree className="size-5 text-[#43e55b]" />;
  if (item.label.toLowerCase().includes('linkedin'))
    return <SiLinkedin className="size-5 text-[#0a66c2]" />;
  if (item.label.toLowerCase().includes('github'))
    return <SiGithub className="size-5" />;
  if (item.label.toLowerCase().includes('instagram'))
    return <SiInstagram className="size-5 text-[#e4405f]" />;
  if (item.label.toLowerCase().includes('telegram'))
    return <SiTelegram className="size-5 text-[#26a5e4]" />;
  if (item.label.toLowerCase().includes('snapchat') || item.href.includes('snapchat.com'))
    return <SiSnapchat className="size-5 text-[#fffc00]" />;
  if (item.label.toLowerCase().includes('blog') || item.href.includes('blogger'))
    return <SiBlogger className="size-5 text-[#ff5722]" />;
  return <FaGlobe className="size-5 text-muted-foreground" />;
}

export default function Links() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Extracurricular" heading="Links" />
      <p className="text-muted-foreground mt-2 text-sm">
        YouTube, blogs, and socials. All in one place. Full list on{' '}
        <a
          href={linktreeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-primary underline-offset-4 hover:underline"
        >
          <SiLinktree className="size-4 text-[#43e55b]" />
          Linktree
        </a>
        .
      </p>

      {/* n8n creator + reels — two-column on md+ */}
      <article className="mt-8 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
        <div className="grid md:grid-cols-[1fr_minmax(0,300px)] lg:grid-cols-[1fr_340px] md:divide-x md:divide-border/50">
          <div className="flex flex-col gap-5 p-5 sm:p-6">
            <div className="overflow-hidden rounded-xl border border-border/50 bg-muted/20">
              <Image
                src={n8nHighlight.creatorImage}
                alt="n8n creator kit"
                width={480}
                height={360}
                className="h-auto w-full max-h-[200px] object-contain sm:max-h-[220px]"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-primary">
                Official partner
              </p>
              <h3 className="mt-1 text-lg font-semibold leading-tight">
                {n8nHighlight.title}
              </h3>
              <p className="text-muted-foreground mt-1 text-sm">{n8nHighlight.subtitle}</p>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                n8n workflow automation & content. Creator kit from the n8n Community Team.
              </p>
              <div className="mt-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Workshop session
                </p>
                <WorkshopButton className="shadow-sm" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center border-t border-border/50 bg-muted/10 p-5 sm:p-6 md:border-t-0">
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Reels
            </p>
            <ContentReelsCarousel />
          </div>
        </div>
      </article>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {extraLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border/60 bg-card px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
              {getLinkIcon(item)}
            </span>
            <span className="truncate font-medium">{item.label}</span>
          </a>
        ))}
      </div>
    </Container>
  );
}
