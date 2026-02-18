'use client';

import { type Experience } from '@/config/Experience';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Skill from '../common/Skill';
import Github from '../svgs/Github';
import LinkedIn from '../svgs/LinkedIn';
import Website from '../svgs/Website';
import X from '../svgs/X';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface ExperienceCardProps {
  experience: Experience;
}

const parseDescription = (text: string): string => {
  return text.replace(/\*(.*?)\*/g, '<b>$1</b>');
};

/** First letters of first two words, or first two chars of company name */
function companyInitials(company: string): string {
  const words = company.replace(/[(@].*$/, '').trim().split(/\s+/);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return company.slice(0, 2).toUpperCase() || '?';
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const [imgError, setImgError] = React.useState(false);
  const initials = companyInitials(experience.company);

  return (
    <div className="flex flex-col gap-3">
      {/* Company Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border/40 bg-muted/20 p-1">
            {imgError ? (
              <span className="text-muted-foreground text-sm font-semibold" aria-hidden>{initials}</span>
            ) : (
              <Image
                src={experience.image}
                alt={experience.company}
                width={40}
                height={40}
                className="size-full object-contain"
                onError={() => setImgError(true)}
              />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-semibold tracking-tight">{experience.company}</h3>
              {experience.isCurrent && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  Current
                </span>
              )}
              {experience.website && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.website}
                      target="_blank"
                      className="size-4 text-neutral-500"
                    >
                      <Website />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Visit Website</TooltipContent>
                </Tooltip>
              )}
              {experience.x && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.x}
                      target="_blank"
                      className="size-4 text-neutral-500"
                    >
                      <X />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Follow on X</TooltipContent>
                </Tooltip>
              )}
              {experience.linkedin && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.linkedin}
                      target="_blank"
                      className="size-4 text-neutral-500"
                    >
                      <LinkedIn />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Connect on LinkedIn</TooltipContent>
                </Tooltip>
              )}
              {experience.github && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.github}
                      target="_blank"
                      className="size-4 text-neutral-500"
                    >
                      <Github />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>View GitHub</TooltipContent>
                </Tooltip>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{experience.position}</p>
          </div>
        </div>
        <div className="text-muted-foreground shrink-0 text-right text-sm">
          <p>
            {experience.startDate} – {experience.isCurrent ? 'Present' : experience.endDate}
          </p>
          {experience.location && <p>{experience.location}</p>}
        </div>
      </div>

      {experience.technologies.length > 0 && (
        <div>
          <h4 className="mb-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {experience.technologies.map((technology, techIndex: number) => (
              <Skill key={techIndex} name={technology.name} href={technology.href}>
                {technology.icon}
              </Skill>
            ))}
          </div>
        </div>
      )}

      <ul className="text-muted-foreground list-none space-y-1 text-sm">
        {experience.description.map((description: string, descIndex: number) => (
          <li
            key={descIndex}
            className="flex gap-2 before:shrink-0 before:content-['·'] before:font-bold before:text-primary"
            dangerouslySetInnerHTML={{
              __html: parseDescription(description),
            }}
          />
        ))}
      </ul>
    </div>
  );
}
