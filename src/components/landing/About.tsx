import {
  about,
  achievements,
  aboutSectionImage,
  hackathonsSectionImage,
  profileImage,
  technicalSkillsByCategory,
} from '@/config/About';
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
  FaTrophy,
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
      return <FaCode className="mr-2 size-5 shrink-0 text-blue-500" />;
    case 'What Drives Me':
      return <FaLightbulb className="mr-2 size-5 shrink-0 text-amber-500" />;
    case 'Beyond Code':
      return <FaMusic className="mr-2 size-5 shrink-0 text-purple-500" />;
    case 'Open for Business':
      return <FaHandshake className="mr-2 size-5 shrink-0 text-emerald-500" />;
    case 'Disclaimer':
      return <FaInfoCircle className="mr-2 size-5 shrink-0 text-muted-foreground" />;
    default:
      return null;
  }
}

export default function About() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="About" heading="Me" />

      {/* Section hero image */}
      <div className="relative mt-8 aspect-[21/9] w-full overflow-hidden rounded-xl bg-muted">
        <Image
          src={aboutSectionImage}
          alt="Hemant Kadam - Web Developer & Creator"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
      </div>

      {/* Main About Section */}
      <div className="mt-10 flex flex-col gap-10 md:flex-row">
        <div className="flex w-full justify-center md:w-1/3">
          <div className="relative">
            <Image
              src={profileImage}
              alt={about.name}
              width={240}
              height={240}
              className="rounded-full border-4 border-primary/20 object-cover shadow-lg"
            />
            <div className="absolute -bottom-3 -right-3 rounded-full bg-card p-2 shadow-md ring-1 ring-border">
              <span className="rounded-full bg-gradient-to-r from-primary to-primary/80 px-3 py-1 text-xs font-semibold text-primary-foreground">
                Available for exciting projects
              </span>
            </div>
          </div>
        </div>

        <div className="w-full space-y-8 md:w-2/3">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{about.name}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {about.description}
            </p>
          </div>

          {/* About Me Sections */}
          <div className="grid gap-4 sm:grid-cols-1">
            {about.aboutMe.map((section, index) => (
              <div
                key={index}
                className="rounded-xl border border-border/60 bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-2 flex items-center gap-2">
                  {getIcon(section.title)}
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Frequently Asked Questions
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {about.faq.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Hackathon Wins */}
          <div className="rounded-xl border border-border/60 bg-card overflow-hidden shadow-sm">
            <div className="relative aspect-[3/1] w-full bg-muted">
              <Image
                src={hackathonsSectionImage}
                alt="Hackathon achievements"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent">
                <span className="flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-sm font-semibold backdrop-blur">
                  <FaTrophy className="text-amber-500" /> Hackathon Wins
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="mb-4 text-xl font-semibold">Achievements</h3>
              <ul className="space-y-3">
                {achievements.map((a, i) => (
                  <li
                    key={i}
                    className="flex flex-col gap-0.5 rounded-lg border border-border/40 bg-muted/30 px-4 py-2.5"
                  >
                    <span className="font-medium">{a.title}</span>
                    {a.note && (
                      <span className="text-sm text-muted-foreground">
                        {a.note}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Technical Skills</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {technicalSkillsByCategory.map((group, gIdx) => (
                <div
                  key={gIdx}
                  className="rounded-xl border border-border/60 bg-card p-4 shadow-sm"
                >
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skillName, sIdx) => (
                      <Tooltip key={sIdx}>
                        <TooltipTrigger asChild>
                          <div className="flex size-9 items-center justify-center rounded-lg border border-border/60 bg-muted/50 transition-colors hover:bg-muted">
                            {skillIconMap[skillName] ?? <ReactIcon />}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skillName}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {group.skills.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
