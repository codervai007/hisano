// Decorative wave shapes drawn in SVG, so no stock image is needed.
// Colours come from theme tokens, so the waves follow light / dark mode.
export function Waves() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 460"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
    >
      <path
        d="M0 340 C 200 260, 380 420, 620 340 S 1040 240, 1200 320 L1200 460 L0 460 Z"
        fill="var(--color-mist-3)"
        opacity="0.7"
      />
      <path
        d="M0 390 C 240 330, 420 450, 680 380 S 1060 310, 1200 370 L1200 460 L0 460 Z"
        fill="var(--color-wave)"
        opacity="0.6"
      />
      <path
        d="M0 120 C 220 40, 420 190, 700 110 S 1050 30, 1200 100"
        fill="none"
        stroke="var(--color-card)"
        strokeWidth="2"
        opacity="0.9"
      />
      <path
        d="M0 150 C 220 70, 420 220, 700 140 S 1050 60, 1200 130"
        fill="none"
        stroke="var(--color-wave-line)"
        strokeWidth="1.5"
        opacity="0.7"
      />
    </svg>
  );
}
