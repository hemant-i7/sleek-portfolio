export default function ElevenLabs({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="24" fill="#000" />
      <path
        fill="#BFFF00"
        d="M32 64c0-8 4-14 10-18v36c-6-4-10-10-10-18zm74 0c0 17-14 30-32 30-12 0-22-5-28-12l6-8c5 5 13 9 22 9 12 0 20-8 20-19s-8-19-20-19c-9 0-17 4-22 9l-6-8c6-7 16-12 28-12 18 0 32 13 32 30zM64 34c-16 0-30 13-30 30s14 30 30 30 30-13 30-30-14-30-30-30zm0 52c-12 0-22-10-22-22s10-22 22-22 22 10 22 22-10 22-22 22z"
      />
    </svg>
  );
}
