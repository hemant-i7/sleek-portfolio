export default function Replicate({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="16" fill="#0D0D0D" />
      <path
        fill="#fff"
        d="M64 28c-20 0-36 16-36 36s16 36 36 36 36-16 36-36-16-36-36-36zm0 64c-15.5 0-28-12.5-28-28s12.5-28 28-28 28 12.5 28 28-12.5 28-28 28z"
      />
      <circle cx="64" cy="64" r="8" fill="#fff" />
    </svg>
  );
}
