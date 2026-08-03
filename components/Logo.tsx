// Placeholder mark until the official logo asset arrives.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="42"
      viewBox="0 0 64 42"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 29c-3-7 0-17 8-21 8-4 26-4 34 2 6 5 7 13 2 20-5 7-34 8-44-1Z"
        fill="var(--color-canvas)"
        stroke="var(--color-ink)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
      <circle cx="19" cy="15" fill="var(--color-cobalt)" r="4.5" />
      <circle cx="31" cy="11" fill="var(--color-poppy)" r="4.5" />
      <circle cx="43" cy="16" fill="var(--color-sunshine)" r="4.5" />
      <path
        d="M13 28h10l3-5 4 7 4-10 4 8 8-1"
        stroke="var(--color-ink)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
