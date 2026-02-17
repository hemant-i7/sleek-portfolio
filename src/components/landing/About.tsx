import {
  about,
  achievements,
  profileImage,
  technicalSkillsByCategory,
  whoIAmImage,
} from '@/config/About';
import type { HackathonAchievement } from './HackathonItem';
import { HackathonItem } from './HackathonItem';
import Image from 'next/image';
import React from 'react';
import {
  FaBrain,
  FaClock,
  FaCode,
  FaHandshake,
  FaInfoCircle,
  FaLightbulb,
  FaMusic,
  FaPeopleCarry,
  FaPuzzlePiece,
} from 'react-icons/fa';
import {
  SiApifox,
  SiContentstack,
  SiFigma,
  SiGithub,
  SiLangchain,
  SiMongodb,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPostman,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWordpress,
} from 'react-icons/si';

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
  'React.js': <SiReact className="size-full p-1" />,
  'Next.js': <SiNextdotjs className="size-full p-1" />,
  TypeScript: <SiTypescript className="size-full p-1" />,
  'Tailwind CSS': <SiTailwindcss className="size-full p-1" />,
  'ShadCN UI': <SiShadcnui className="size-full p-1" />,
  'Node.js': <SiNodedotjs className="size-full p-1" />,
  MongoDB: <SiMongodb className="size-full p-1" />,
  'REST APIs': <SiApifox className="size-full p-1" />,
  LangChain: <SiLangchain className="size-full p-1" />,
  n8n: <SiN8N className="size-full p-1" />,
  Embeddings: <FaBrain className="size-full p-1" />,
  WordPress: <SiWordpress className="size-full p-1" />,
  Contentstack: <SiContentstack className="size-full p-1" />,
  GitHub: <SiGithub className="size-full p-1" />,
  'VS Code': <FaCode className="size-full p-1" />,
  Postman: <SiPostman className="size-full p-1" />,
  Figma: <SiFigma className="size-full p-1" />,
  Notion: <SiNotion className="size-full p-1" />,
  Vercel: <SiVercel className="size-full p-1" />,
  'Analytical Thinking': <FaLightbulb className="size-full p-1" />,
  Collaboration: <FaPeopleCarry className="size-full p-1" />,
  'Problem Solving': <FaPuzzlePiece className="size-full p-1" />,
  'Time Management': <FaClock className="size-full p-1" />,
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

      {/* Who I am: illustration + intro */}
      <div className="mt-8 grid gap-8 rounded-2xl border border-border/60 bg-card p-4 shadow-sm md:grid-cols-[minmax(280px,1fr)_1.2fr] md:gap-10 md:p-6">
        <div className="relative aspect-[4/5] min-h-[280px] overflow-hidden rounded-xl md:aspect-[3/4]">
          <Image
            src={whoIAmImage}
            alt="Hemant Kadam – Software developer, content creator, Next.js & AI"
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            {about.name}
          </h2>
          <p className="mt-2 text-muted-foreground">
            Software developer & creator · Frontend, AI, and educational content
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {about.description}
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
                  {'links' in item && item.links && item.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-lg border border-border/60 bg-muted/50 px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:border-primary/30"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
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
          Where I won: national and international hackathons.
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
              className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <h4 className="mb-3 shrink-0 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {group.category}
              </h4>
              <div className="flex min-h-0 flex-wrap gap-2 [&_svg]:size-6 [&_svg]:shrink-0">
                {group.skills.map((skillName, sIdx) => (
                  <Tooltip key={sIdx}>
                    <TooltipTrigger asChild>
                      <span className="inline-flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border/50 bg-muted/50 transition-colors hover:border-border hover:bg-muted">
                        {skillIconMap[skillName] ?? <FaCode className="size-full p-1" />}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skillName}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
              <p className="mt-3 min-w-0 truncate text-xs text-muted-foreground" title={group.skills.join(', ')}>
                {group.skills.join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
