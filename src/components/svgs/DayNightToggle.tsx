'use client';

import React from 'react';

interface DayNightToggleProps {
  className?: string;
  isDark: boolean;
}

/**
 * Pill-shaped day/night toggle SVG. Knob slides left (sun) ↔ right (moon+stars).
 * Flat UI style, theme-driven.
 */
export default function DayNightToggle({ className, isDark }: DayNightToggleProps) {
  const knobX = isDark ? 38 : 14;
  const trackFill = 'oklch(0.22 0.02 260)'; // dark slate
  const knobFill = '#fff';
  const sunFill = 'oklch(0.75 0.15 75)';   // warm amber
  const moonFill = 'oklch(0.55 0.02 260)'; // soft dark for moon/stars on white knob

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 28"
      aria-hidden
    >
      {/* Pill track */}
      <rect
        x="2"
        y="4"
        width="48"
        height="20"
        rx="10"
        ry="10"
        fill={trackFill}
      />
      {/* Knob (sliding circle) */}
      <g style={{ transform: `translate(${knobX - 14}px, 0)`, transition: 'transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
        <circle cx="14" cy="14" r="10" fill={knobFill} />
        {/* Sun: circle + rays (visible when light mode) */}
        <g opacity={isDark ? 0 : 1} style={{ transition: 'opacity 200ms' }}>
          <circle cx="14" cy="14" r="3.5" fill={sunFill} />
          <path d="M14 5v2M14 21v2M5 14h2M21 14h2M8.05 8.05l1.4 1.4M18.55 18.55l1.4 1.4M18.55 9.45l1.4-1.4M8.05 19.95l1.4-1.4Z" stroke={sunFill} strokeWidth="1.2" strokeLinecap="round" fill="none" />
        </g>
        {/* Moon + stars (visible when dark mode) */}
        <g opacity={isDark ? 1 : 0} style={{ transition: 'opacity 200ms' }}>
          <path d="M14 10a4 4 0 1 1 4 4c0-2.2-1.8-4-4-4Z" fill={moonFill} />
          <circle cx="11" cy="12" r="0.6" fill={moonFill} />
          <circle cx="16" cy="11" r="0.5" fill={moonFill} />
          <circle cx="15" cy="15" r="0.4" fill={moonFill} />
        </g>
      </g>
    </svg>
  );
}
