'use client';

import { type Experience } from '@/config/Experience';
import { motion } from 'motion/react';
import React from 'react';

import { ExperienceCard } from './ExperienceCard';

interface ExperienceTimelineProps {
  experiences: Experience[];
  withTimeline?: boolean;
}

export function ExperienceTimeline({ experiences, withTimeline = true }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {withTimeline && (
        <div
          className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/30 via-border to-transparent"
          aria-hidden
        />
      )}
      <ul className="flex flex-col gap-0">
        {experiences.map((experience: Experience, index) => (
          <motion.li
            key={`${experience.company}-${experience.position}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-24px' }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="relative flex gap-5 pb-10 last:pb-0"
          >
            {withTimeline && (
              <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-xs font-semibold text-primary shadow-sm">
                {index + 1}
              </div>
            )}
            <motion.div
              className="min-w-0 flex-1 rounded-xl border border-border/50 bg-card/50 p-5 shadow-sm backdrop-blur-sm transition-[box-shadow,border-color] hover:border-border hover:shadow-md"
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <ExperienceCard experience={experience} />
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
