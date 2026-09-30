import React from 'react';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'Surfboard Ventures',
    position: 'Associate Applied AI Engineer',
    location: 'Virar, Mumbai',
    image: '/company/surfboard_ventures_logo.jpeg',
    description: [
      'Shipped streaming UI for a live SaaS product: React components that render AI-generated content with real-time state management.',
      'Integrated Razorpay for in-app certification purchases—checkout, webhooks, idempotent error recovery; zero payment failures post-launch.',
      'Defined REST API contracts and JSON schemas with the NestJS team before build; caught shape mismatches at design time.',
    ],
    startDate: 'Feb 2025',
    endDate: 'Present',
    website: '',
    technologies: [],
  },
  {
    isCurrent: false,
    company: 'Nano Technology (Freelance)',
    position: 'AI Automation Engineer',
    location: 'Remote',
    image: '/company/nano.svg',
    description: [
      'Built ReAct agents with tool use, BufferMemory, and PDF retrieval over a FAISS vector store; automated 3+ hours/day of analyst work.',
      'Designed n8n as the full workflow backend: HTTP nodes, webhooks, custom JS functions, and conditional routing for 4 recurring workflows.',
      'Authored system prompts for document QA and data extraction; validated against 50-question eval sets before each deployment.',
      'Logged token usage, latency, and errors per run; cut cost 3× on a bloated prompt by rewriting context injection.',
    ],
    startDate: 'Jun 2024',
    endDate: 'Feb 2025',
    website: '',
    technologies: [],
  },
  {
    isCurrent: false,
    company: 'Edba Academy (Contract)',
    position: 'Frontend Engineer',
    location: 'Remote',
    image: '/company/edba-academy.png',
    description: [
      'Built 3 responsive academy portals; on-page SEO increased Google Search Console impressions within 60 days.',
      'Optimized asset loading and render-blocking resources; Lighthouse scores above 85 across all portals.',
      'Integrated dynamic certificate generation for course completions, eliminating manual PDF exports.',
    ],
    startDate: 'Jul 2023',
    endDate: 'Sep 2023',
    website: '',
    technologies: [],
  },
  {
    isCurrent: true,
    company: '@hemantkadam.ai (Instagram & YouTube)',
    position: 'AI Content Creator',
    location: '',
    image:
      '/company/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.webp',
    description: [
      'Teach AI development—LangChain, RAG, agents, and automation—to 49K+ YouTube and 13K+ Instagram followers.',
    ],
    startDate: 'May 2020',
    endDate: 'Present',
    website: 'https://www.youtube.com/@hemantkadamai',
    technologies: [],
  },
];

// Profile image for use elsewhere
export const profileImage = '/assets/Hemant-kadam.png';
