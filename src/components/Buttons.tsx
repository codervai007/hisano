import Link from "next/link";

const base =
  "inline-flex min-h-12 items-center justify-center rounded-full px-7 text-[15px] font-semibold transition-colors";

export function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={`${base} bg-brand text-white hover:bg-brand-dark`}>
      {children}
    </Link>
  );
}

export function SecondaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`${base} border border-[#b9d0ea] bg-white text-brand hover:bg-mist-2`}
    >
      {children}
    </Link>
  );
}
