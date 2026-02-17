import Container from '@/components/common/Container';
import { SectionReveal } from '@/components/common/SectionReveal';
import About from '@/components/landing/About';
import Blog from '@/components/landing/Blog';
import Experience from '@/components/landing/Experience';
import Hero from '@/components/landing/Hero';
import Work from '@/components/landing/Projects';
import Setup from '@/components/landing/Setup';
import React from 'react';

export default function page() {
  return (
    <Container className="min-h-screen py-16">
      <Hero />
      <SectionReveal delay={0.1}>
        <Experience />
      </SectionReveal>
      <SectionReveal delay={0.15}>
        <Work />
      </SectionReveal>
      <SectionReveal delay={0.2}>
        <About />
      </SectionReveal>
      <SectionReveal delay={0.25}>
        <Blog />
      </SectionReveal>
      <SectionReveal delay={0.3}>
        <Setup />
      </SectionReveal>
    </Container>
  );
}
