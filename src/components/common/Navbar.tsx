import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Container from './Container';
import ThemeSwitch from './ThemeSwitch';

export default function Navbar() {
  const { logo } = navbarConfig;

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-6">
            <Link
              href="/"
              className="group flex shrink-0 items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span
                className={
                  logo.pixelated
                    ? 'relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border/60 bg-[#1a1f2e] shadow-sm ring-1 ring-white/10 transition-transform group-hover:scale-[1.03] sm:size-11'
                    : 'relative flex size-10 shrink-0 overflow-hidden rounded-full border-2 border-primary/25 bg-muted shadow-sm ring-2 ring-background transition-transform group-hover:scale-[1.03] sm:size-11'
                }
              >
                <Image
                  className={
                    logo.pixelated
                      ? 'size-full object-contain [image-rendering:pixelated]'
                      : 'size-full object-cover object-top'
                  }
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  unoptimized={logo.pixelated}
                  priority
                />
              </span>
              <span className="hidden font-semibold tracking-tight text-foreground sm:inline">
                Hemant
              </span>
            </Link>

            <nav className="flex items-center gap-5 sm:gap-6" aria-label="Main">
              {navbarConfig.navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <ThemeSwitch />
        </div>
      </Container>
    </header>
  );
}
