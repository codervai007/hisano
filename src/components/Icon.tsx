// Line icons used in the menu and the benefit cards. They draw in the
// current text colour.
const paths = {
  truck: (
    <>
      <path d="M2 6h12v10H2zM14 9h4.5L22 12.5V16h-8z" />
      <circle cx="6.5" cy="17.5" r="2" />
      <circle cx="17.5" cy="17.5" r="2" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3M12 15v2.5" />
    </>
  ),
  thumb: (
    <path d="M7 10v11H3V10zM7 10l4.2-7.2a1.9 1.9 0 0 1 3.4 1.4L13.6 10h5.6a2 2 0 0 1 2 2.4l-1.3 7A2 2 0 0 1 17.9 21H7" />
  ),
  phone: (
    <path d="M21.5 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.6 4.2 2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L7.5 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.9 2.1z" />
  ),
  tag: (
    <>
      <path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L2.5 12.5V2.5h10l8.1 8.1a2 2 0 0 1 0 2.8z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </>
  ),
  building: <path d="M3 21h18M5 21V3h10v18M15 9h4v12M8.5 7h3M8.5 11h3M8.5 15h3" />,
  document: (
    <path d="M14 2.5H6.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8zM14 2.5V8h5.5M8.5 13h7M8.5 17h7" />
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m21.5 6.5-9.5 6.5-9.5-6.5" />
    </>
  ),
};

export type IconName = keyof typeof paths;

/** Icon for each menu link, matched by its address. */
export const navIcon: Record<string, IconName> = {
  "/product": "tag",
  "/about": "building",
  "/download": "document",
  "/contact": "mail",
};

export function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
