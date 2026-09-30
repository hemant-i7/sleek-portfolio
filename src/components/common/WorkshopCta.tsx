import { SiN8N } from 'react-icons/si';

export const n8nWorkshopUrl =
  'https://app.notion.com/p/N8N-Workshop-3eac0705b9e5804397b3c10e0a310bb3?source=copy_link';

export function WorkshopButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={n8nWorkshopUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg ring-1 ring-black/10 transition hover:scale-[1.02] hover:bg-primary/90 ${className}`}
    >
      <SiN8N className="size-4 shrink-0" />
      N8N Workshop
    </a>
  );
}

/** Always-visible bottom popup button for the N8N workshop session. */
export default function WorkshopCta() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center px-4 pr-20 sm:pr-4">
      <WorkshopButton className="pointer-events-auto" />
    </div>
  );
}
