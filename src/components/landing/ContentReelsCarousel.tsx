'use client';

import { contentReels, type ContentReel } from '@/config/Links';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from 'lucide-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SiInstagram } from 'react-icons/si';

const FLASH_MS = 600;

function ReelThumb({
  reel,
  active,
  onSelect,
  className,
}: {
  reel: ContentReel;
  active: boolean;
  onSelect: () => void;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v || active) return;
    v.pause();
    v.currentTime = 0;
  }, [reel.id, active]);

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'group relative overflow-hidden rounded-lg border bg-black transition-all',
        active
          ? 'border-primary shadow-[0_0_0_1px_hsl(var(--primary))]'
          : 'border-white/10 hover:border-white/25',
        className,
      )}
      aria-label={reel.label}
      aria-current={active ? 'true' : undefined}
    >
      <video
        ref={ref}
        src={reel.videoSrc}
        muted
        playsInline
        preload="metadata"
        className="aspect-[9/16] h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      {!active && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/25">
          <Play className="size-4 fill-white text-white opacity-90" />
        </div>
      )}
      <span className="absolute bottom-1.5 left-1.5 right-1.5 truncate text-left text-[10px] font-medium text-white">
        {reel.label}
      </span>
      <a
        href={reel.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-1 top-1 flex size-5 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100"
        aria-label="Open on Instagram"
        onClick={(e) => e.stopPropagation()}
      >
        <ExternalLink className="size-2.5" />
      </a>
    </button>
  );
}

function ReelPlayer({
  reel,
  index,
  count,
  isPlaying,
  isMuted,
  segmentProgress,
  showFlash,
  videoRef,
  onTogglePlay,
  onPrev,
  onNext,
  onMuteToggle,
  onSelectSegment,
}: {
  reel: ContentReel;
  index: number;
  count: number;
  isPlaying: boolean;
  isMuted: boolean;
  segmentProgress: number;
  showFlash: 'play' | 'pause' | null;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  onTogglePlay: () => void;
  onPrev: () => void;
  onNext: () => void;
  onMuteToggle: () => void;
  onSelectSegment: (i: number) => void;
}) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-black shadow-lg ring-1 ring-white/10">
      <div className="relative aspect-[9/16] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={reel.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <video
              ref={videoRef}
              src={reel.videoSrc}
              className="h-full w-full object-cover"
              muted={isMuted}
              playsInline
              preload="auto"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 top-0 z-20 flex gap-1 p-2.5">
          {contentReels.map((r, i) => (
            <button
              key={r.id}
              type="button"
              className="h-[3px] min-w-0 flex-1 overflow-hidden rounded-full bg-white/25"
              onClick={() => onSelectSegment(i)}
              aria-label={r.label}
            >
              <div
                className="h-full rounded-full bg-white"
                style={{
                  width:
                    i < index ? '100%' : i === index ? `${segmentProgress}%` : '0%',
                }}
              />
            </button>
          ))}
        </div>

        <div className="absolute inset-0 z-10 flex">
          <button type="button" className="w-1/4" aria-label="Previous" onClick={onPrev} />
          <button
            type="button"
            className="flex-1"
            aria-label={isPlaying ? 'Pause' : 'Play'}
            onClick={onTogglePlay}
          />
          <button type="button" className="w-1/4" aria-label="Next" onClick={onNext} />
        </div>

        <AnimatePresence>
          {showFlash && (
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                {showFlash === 'play' ? (
                  <Play className="ml-1 size-7 fill-white text-white" />
                ) : (
                  <Pause className="size-7 fill-white" />
                )}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {!isPlaying && !showFlash && (
          <div className="pointer-events-none absolute inset-0 z-[15] flex items-center justify-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
              <Play className="ml-1 size-6 fill-white text-white" />
            </span>
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-3 pb-3 pt-10">
          <p className="mb-2 text-center text-xs font-medium text-white">
            {reel.label}
            <span className="text-white/45"> · {index + 1}/{count}</span>
          </p>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={onMuteToggle}
              className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="size-3.5" /> : <Volume2 className="size-3.5" />}
            </button>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={onPrev}
                className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={onTogglePlay}
                className="flex size-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30"
              >
                {isPlaying ? (
                  <Pause className="size-4 fill-white" />
                ) : (
                  <Play className="ml-0.5 size-4 fill-white" />
                )}
              </button>
              <button
                type="button"
                onClick={onNext}
                className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
            <a
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Instagram"
            >
              <SiInstagram className="size-3.5 text-[#e4405f]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContentReelsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [segmentProgress, setSegmentProgress] = useState(0);
  const [showFlash, setShowFlash] = useState<'play' | 'pause' | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const active = contentReels[activeIndex];
  const inactive = contentReels
    .map((reel, index) => ({ reel, index }))
    .filter(({ index }) => index !== activeIndex);

  const flash = useCallback((kind: 'play' | 'pause') => {
    setShowFlash(kind);
    if (flashTimer.current) clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setShowFlash(null), FLASH_MS);
  }, []);

  const syncPlay = useCallback((play: boolean) => {
    const v = videoRef.current;
    if (!v) return;
    if (play) v.play().catch(() => setIsPlaying(false));
    else v.pause();
  }, []);

  const togglePlay = useCallback(() => {
    setIsPlaying((p) => {
      const next = !p;
      syncPlay(next);
      flash(next ? 'play' : 'pause');
      return next;
    });
  }, [syncPlay, flash]);

  const select = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setActiveIndex(index);
      setSegmentProgress(0);
    },
    [activeIndex],
  );

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % contentReels.length);
    setSegmentProgress(0);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + contentReels.length) % contentReels.length);
    setSegmentProgress(0);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = isMuted;
    v.load();
    setSegmentProgress(0);

    const onCanPlay = () => {
      if (isPlaying) v.play().catch(() => setIsPlaying(false));
    };
    const onTimeUpdate = () => {
      if (v.duration && !Number.isNaN(v.duration)) {
        setSegmentProgress((v.currentTime / v.duration) * 100);
      }
    };
    const onEnded = () => {
      if (isPlaying) goNext();
    };

    v.addEventListener('canplay', onCanPlay);
    v.addEventListener('timeupdate', onTimeUpdate);
    v.addEventListener('ended', onEnded);
    if (isPlaying) onCanPlay();

    return () => {
      v.removeEventListener('canplay', onCanPlay);
      v.removeEventListener('timeupdate', onTimeUpdate);
      v.removeEventListener('ended', onEnded);
    };
  }, [activeIndex, isPlaying, isMuted, goNext]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goPrev, goNext, togglePlay]);

  useEffect(
    () => () => {
      if (flashTimer.current) clearTimeout(flashTimer.current);
    },
    [],
  );

  const playerProps = {
    reel: active,
    index: activeIndex,
    count: contentReels.length,
    isPlaying,
    isMuted,
    segmentProgress,
    showFlash,
    videoRef,
    onTogglePlay: togglePlay,
    onPrev: goPrev,
    onNext: goNext,
    onMuteToggle: () => setIsMuted((m) => !m),
    onSelectSegment: select,
  };

  return (
    <div className="w-full" aria-label="Instagram reels">
      <a
        href="https://www.instagram.com/hemantkadam.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <SiInstagram className="size-4 text-[#e4405f]" />
        @hemantkadam.ai
      </a>

      {/* Desktop: side thumbs + main player */}
      <div className="hidden sm:flex sm:items-start sm:justify-center sm:gap-2.5">
        <div className="flex w-[64px] shrink-0 flex-col gap-2">
          {inactive.map(({ reel, index }) => (
            <ReelThumb
              key={reel.id}
              reel={reel}
              active={false}
              onSelect={() => select(index)}
              className="w-full"
            />
          ))}
        </div>
        <div className="w-[220px] shrink-0">
          <ReelPlayer {...playerProps} />
        </div>
      </div>

      {/* Mobile: player then thumb row */}
      <div className="sm:hidden">
        <div className="mx-auto w-full max-w-[248px]">
          <ReelPlayer {...playerProps} />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {contentReels.map((reel, index) => (
            <ReelThumb
              key={reel.id}
              reel={reel}
              active={index === activeIndex}
              onSelect={() => select(index)}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
