import Link from "next/link";

const base =
  "inline-flex min-h-12 items-center justify-center rounded-full px-7 text-[15px] font-semibold transition-colors";

export function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={`${base} bg-cta text-white hover:opacity-90`}>
      {children}
    </Link>
  );
}

export function SecondaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`${base} border border-edge bg-card text-brand hover:bg-mist-2`}
    >
      {children}
    </Link>
  );
}
