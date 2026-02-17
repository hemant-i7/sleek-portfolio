export default function Gemini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <path
        fill="#4285F4"
        d="M64 8C32 8 8 32 8 64s24 56 56 56 56-24 56-56S96 8 64 8zm0 104c-26.5 0-48-21.5-48-48S37.5 16 64 16s48 21.5 48 48-21.5 48-48 48z"
      />
      <path
        fill="#8EABF4"
        d="M64 24c-22 0-40 18-40 40s18 40 40 40 40-18 40-40-18-40-40-40zm0 72c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
      />
      <path fill="#4285F4" d="M44 64h40v8H44z" />
      <path fill="#4285F4" d="M64 44h8v40h-8z" />
    </svg>
  );
}
