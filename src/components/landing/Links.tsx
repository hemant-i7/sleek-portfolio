import { extraLinks, linktreeUrl } from '@/config/Links';
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
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
