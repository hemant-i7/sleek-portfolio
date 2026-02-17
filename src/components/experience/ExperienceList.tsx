import { type Experience } from '@/config/Experience';
import React from 'react';

import { ExperienceCard } from './ExperienceCard';

interface ExperienceListProps {
  experiences: Experience[];
  /** Show timeline with step numbers and connecting line */
  withTimeline?: boolean;
}

export function ExperienceList({ experiences, withTimeline = false }: ExperienceListProps) {
  if (experiences.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No work experiences found.</p>
      </div>
    );
  }

  if (!withTimeline) {
    return (
      <div className="flex flex-col gap-8">
        {experiences.map((experience: Experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.position}`}
            experience={experience}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        className="absolute left-5 top-6 bottom-6 w-px bg-border dark:bg-border/80"
        aria-hidden
      />
      <div className="flex flex-col">
        {experiences.map((experience: Experience, index) => (
          <div
            key={`${experience.company}-${experience.position}`}
            className="relative flex gap-6"
          >
            <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-xs font-semibold text-primary">
              {index + 1}
            </div>
            <div className="min-w-0 flex-1 pb-10">
              <ExperienceCard experience={experience} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
