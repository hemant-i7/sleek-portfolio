'use client';

import { LinkPreview } from '@/components/ui/link-preview';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import React from 'react';
import { ExternalLink, ImageIcon } from 'lucide-react';

export interface HackathonAchievement {
  title: string;
  note?: string;
  where?: string;
  emoji?: string;
  description?: string;
  url?: string;
  postUrl?: string;
  postImageUrl?: string;
  /** When set, hover and dialog show this list (hover uses first); overrides single postImageUrl for display */
  postImageUrls?: string[];
}

interface HackathonItemProps {
  item: HackathonAchievement;
}

export function HackathonItem({ item }: HackathonItemProps) {
  const images = item.postImageUrls?.length ? item.postImageUrls : item.postImageUrl ? [item.postImageUrl] : [];
  const firstImage = images[0];
  const hasPost = Boolean(item.postUrl?.trim());
  const hasImage = images.length > 0;
  const isLinkedInImage = (url: string) => url.startsWith('https://media.licdn');

  return (
    <li className="flex flex-col gap-1 px-5 py-4 transition-colors hover:bg-muted/30 sm:flex-row sm:items-start sm:gap-4">
      <span className="text-2xl shrink-0" aria-hidden>
        {item.emoji ?? '🏆'}
      </span>
      <div className="min-w-0 flex-1">
        {firstImage && item.url ? (
          <p className="font-medium">
            <LinkPreview
              url={item.url}
              isStatic
              imageSrc={firstImage}
              width={320}
              height={200}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              {item.title}
            </LinkPreview>
          </p>
        ) : (
          <p className="font-medium">{item.title}</p>
        )}
        {item.where && (
          <p className="text-sm text-muted-foreground">at {item.where}</p>
        )}
        {item.description && (
          <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        )}
        {item.note && (
          <p className="mt-0.5 text-xs text-muted-foreground">{item.note}</p>
        )}
        <div className="mt-2 flex flex-wrap items-center gap-3">
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-primary underline-offset-4 hover:underline"
            >
              Learn more →
            </a>
          )}
          {hasPost && (
            <a
              href={item.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-primary underline-offset-4 hover:underline"
            >
              <ExternalLink className="size-3.5" />
              View post
            </a>
          )}
          {hasImage && (
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary underline-offset-4 hover:underline"
                >
                  <ImageIcon className="size-3.5" />
                  View image{images.length > 1 ? 's' : ''}
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] max-h-[90vh] w-auto border-0 bg-transparent p-0 shadow-none">
                <DialogTitle className="sr-only">{item.title}, post image</DialogTitle>
                <div className="relative flex max-h-[85vh] w-full flex-col items-center justify-center gap-4 overflow-auto rounded-lg bg-muted p-2">
                  {images.map((src, i) => (
                    <div key={src + i} className="relative flex flex-1 items-center justify-center">
                      <Image
                        src={src}
                        alt={`${item.title}, image ${i + 1}`}
                        width={1200}
                        height={800}
                        className="max-h-[80vh] w-auto object-contain"
                        unoptimized={isLinkedInImage(src)}
                      />
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
      {hasImage && (
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="relative hidden h-16 w-24 shrink-0 overflow-hidden rounded-lg border border-border/60 bg-muted sm:block"
              aria-label="View post image"
            >
              <Image
                src={firstImage}
                alt=""
                fill
                className="object-cover"
                sizes="96px"
                unoptimized={isLinkedInImage(firstImage)}
              />
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-[95vw] max-h-[90vh] w-auto border-0 bg-transparent p-0 shadow-none">
            <DialogTitle className="sr-only">{item.title}, post image</DialogTitle>
            <div className="relative flex max-h-[85vh] w-full flex-col items-center justify-center gap-4 overflow-auto rounded-lg bg-muted p-2">
              {images.map((src, i) => (
                <div key={src + i} className="relative flex flex-1 items-center justify-center">
                  <Image
                    src={src}
                    alt={`${item.title}, image ${i + 1}`}
                    width={1200}
                    height={800}
                    className="max-h-[80vh] w-auto object-contain"
                    unoptimized={isLinkedInImage(src)}
                  />
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </li>
  );
}
