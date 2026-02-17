'use client';

import { type Experience } from '@/config/Experience';
import { Link } from 'next-view-transitions';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';

import { ExperienceCard } from './ExperienceCard';
import { Button } from '../ui/button';

const INITIAL_COUNT = 3;

interface ExperienceTimelineProps {
  experiences: Experience[];
  withTimeline?: boolean;
}

export function ExperienceTimeline({ experiences, withTimeline = true }: ExperienceTimelineProps) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? experiences : experiences.slice(0, INITIAL_COUNT);
  const hasMore = experiences.length > INITIAL_COUNT;

  return (
    <div className="relative">
      {withTimeline && (
        <div
          className="absolute left-5 top-6 bottom-6 w-px bg-border dark:bg-border/80"
          aria-hidden
        />
      )}
      <div className="flex flex-col">
        <AnimatePresence mode="popLayout">
          {visible.map((experience: Experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.position}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative flex gap-6"
            >
              {withTimeline && (
                <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-xs font-semibold text-primary">
                  {index + 1}
                </div>
              )}
              <div className="min-w-0 flex-1 pb-10">
                <ExperienceCard experience={experience} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {hasMore && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center pt-2"
        >
          <Button
            variant="outline"
            onClick={() => setExpanded(!expanded)}
            className="min-w-[180px]"
          >
            {expanded ? 'See less' : `See more (${experiences.length - INITIAL_COUNT} more)`}
          </Button>
        </motion.div>
      )}
      {!expanded && hasMore && (
        <div className="flex justify-center pt-4">
          <Button variant="ghost" asChild>
            <Link href="/work-experience">Show all work experiences</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
