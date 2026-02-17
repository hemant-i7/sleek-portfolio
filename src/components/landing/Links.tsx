import { extraLinks, linktreeUrl } from '@/config/Links';
import { ExternalLink, Youtube } from 'lucide-react';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

export default function Links() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Extracurricular" heading="Links" />
      <p className="text-muted-foreground mt-2 text-sm">
        YouTube, blogs, and socials — all in one place. Full list on{' '}
        <a
          href={linktreeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline-offset-4 hover:underline"
        >
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
              {item.type === 'youtube' ? (
                <Youtube className="size-5 text-red-500" />
              ) : (
                <ExternalLink className="size-4 text-muted-foreground" />
              )}
            </span>
            <span className="truncate font-medium">{item.label}</span>
          </a>
        ))}
      </div>
    </Container>
  );
}
