import Link from "next/link";
import { nav, site } from "@/content/site";

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 py-5 md:px-12">
      <Link
        href="/"
        className="flex min-h-11 items-center text-2xl font-bold tracking-wide text-brand"
      >
        {site.name}
      </Link>
      <nav aria-label="メイン" className="flex flex-wrap gap-x-7 gap-y-1">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex min-h-11 items-center text-sm font-medium text-ink hover:text-brand"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
