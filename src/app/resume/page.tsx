import Container from '@/components/common/Container';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { resumeConfig } from '@/config/Resume';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  ...getMetadata('/resume'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ResumePage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Resume
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            My experience, projects, and skills. View below or open in a new tab.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button asChild size="lg" className="gap-2">
              <a
                href={resumeConfig.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="size-4" />
                Open resume in new tab
              </a>
            </Button>
          </div>
        </div>
        <Separator />
        <div className="space-y-6">
          <div>
            <h2 className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Quick links
            </h2>
            <div className="flex flex-wrap gap-2">
              {resumeConfig.quickLinks.map((link) =>
                link.href.startsWith('/') ? (
                  <Button key={link.href} variant="outline" size="sm" asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ) : (
                  <Button key={link.href} variant="outline" size="sm" asChild>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="gap-1.5">
                      {link.label}
                      <ExternalLink className="size-3.5" />
                    </a>
                  </Button>
                )
              )}
            </div>
          </div>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-border/60 bg-muted/20">
            <iframe
              src={resumeConfig.url}
              className="min-h-[80vh] w-full"
              title="Hemant Kadam Resume"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
