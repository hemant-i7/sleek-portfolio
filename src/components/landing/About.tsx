import {
  about,
  achievements,
  aboutSectionImage,
  profileImage,
  technicalSkillsByCategory,
} from '@/config/About';
import type { HackathonAchievement } from './HackathonItem';
import { HackathonItem } from './HackathonItem';
import Figma from '@/components/technologies/Figma';
import Github from '@/components/technologies/Github';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import Postman from '@/components/technologies/Postman';
import ReactIcon from '@/components/technologies/ReactIcon';
import Shadcn from '@/components/technologies/Shadcn';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import Image from 'next/image';
import React from 'react';
import {
  FaCode,
  FaHandshake,
  FaInfoCircle,
  FaLightbulb,
  FaMusic,
} from 'react-icons/fa';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

const skillIconMap: Record<string, React.ReactNode> = {
  'React.js': <ReactIcon />,
  'Next.js': <NextJs />,
  TypeScript: <TypeScript />,
  'Tailwind CSS': <TailwindCss />,
  'ShadCN UI': <Shadcn />,
  'Node.js': <NodeJs />,
  MongoDB: <MongoDB />,
  'REST APIs': <ReactIcon />,
  LangChain: <ReactIcon />,
  n8n: <ReactIcon />,
  Embeddings: <ReactIcon />,
  WordPress: <ReactIcon />,
  Contentstack: <ReactIcon />,
  GitHub: <Github />,
  'VS Code': <ReactIcon />,
  Postman: <Postman />,
  Figma: <Figma />,
  Notion: <ReactIcon />,
  Vercel: <Vercel />,
};

function getIcon(title: string) {
  switch (title) {
    case 'Who Am I?':
      return <FaCode className="size-5 shrink-0 text-blue-500" />;
    case 'What Drives Me':
      return <FaLightbulb className="size-5 shrink-0 text-amber-500" />;
    case 'Beyond Code':
      return <FaMusic className="size-5 shrink-0 text-purple-500" />;
    case 'Open for Business':
      return <FaHandshake className="size-5 shrink-0 text-emerald-500" />;
    case 'Disclaimer':
      return <FaInfoCircle className="size-5 shrink-0 text-muted-foreground" />;
    default:
      return null;
  }
}

export default function About() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="About" heading="Me" />

      {/* Hero: full-width image + overlay */}
      <div className="relative mt-8 overflow-hidden rounded-2xl bg-muted">
        <div className="relative aspect-[21/9] w-full">
          <Image
            src={aboutSectionImage}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1400px"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-white drop-shadow-lg md:text-3xl">
            {about.name}
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-white/90 md:text-base">
            Web developer & creator · Frontend, AI, and educational content
          </p>
        </div>
      </div>

      {/* Profile strip: avatar + CTA */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/60 bg-card px-6 py-4 shadow-sm">
        <div className="flex items-center gap-4">
          <Image
            src={profileImage}
            alt={about.name}
            width={64}
            height={64}
            className="rounded-full border-2 border-primary/20 object-cover"
          />
          <div>
            <p className="font-semibold">{about.name}</p>
            <p className="text-sm text-muted-foreground">
              SLRTCE · Surfboard Ventures · @BloggerHemant
            </p>
          </div>
        </div>
        <span className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
          Available for exciting projects
        </span>
      </div>

      {/* Two-column: About cards (left) + FAQ (right) */}
      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr,380px]">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-muted-foreground">
            Who I am
          </h3>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            {about.description}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {about.aboutMe
              .filter((s) => s.title !== 'Disclaimer')
              .map((section, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border/50 bg-card/50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:bg-card hover:shadow-md"
                >
                  <div className="mb-2 flex items-center gap-2">
                    {getIcon(section.title)}
                    <h4 className="font-semibold">{section.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
          </div>
          <div className="mt-4 flex items-start gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
            {getIcon('Disclaimer')}
            <p className="text-sm text-muted-foreground">
              {about.aboutMe.find((s) => s.title === 'Disclaimer')?.content}
            </p>
          </div>
        </div>

        <div className="lg:border-l lg:border-border/60 lg:pl-10">
          <h3 className="mb-4 text-lg font-semibold">FAQ</h3>
          <Accordion type="single" collapsible className="w-full">
            {about.faq.map((item, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-sm">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Hackathon Wins: no image, one line + list with emoji & where */}
      <section className="mt-20" id="achievements">
        <SectionHeading subHeading="Hackathon" heading="Wins" />
        <p className="mt-2 text-muted-foreground">
          Where I won — national and international hackathons.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
          <ul className="divide-y divide-border/50">
            {achievements.map((a, i) => (
              <HackathonItem
                key={i}
                item={a as HackathonAchievement}
              />
            ))}
          </ul>
        </div>
      </section>

      {/* Technical Skills: dedicated section */}
      <section className="mt-20" id="skills">
        <SectionHeading subHeading="Technical" heading="Skills" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {technicalSkillsByCategory.map((group, gIdx) => (
            <div
              key={gIdx}
              className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skillName, sIdx) => (
                  <Tooltip key={sIdx}>
                    <TooltipTrigger asChild>
                      <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border/50 bg-muted/50 transition-colors hover:border-border hover:bg-muted">
                        {skillIconMap[skillName] ?? <ReactIcon />}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skillName}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
              <p className="mt-3 line-clamp-2 text-xs text-muted-foreground">
                {group.skills.join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
