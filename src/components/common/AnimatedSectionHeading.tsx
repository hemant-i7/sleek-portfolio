'use client';

import { motion } from 'motion/react';
import React from 'react';

interface SectionHeadingProps {
  subHeading: string;
  heading: string;
}

export default function AnimatedSectionHeading({
  subHeading,
  heading,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <p className="text-secondary text-sm">{subHeading}</p>
      <h2 className="text-2xl font-bold">{heading}</h2>
    </motion.div>
  );
}
