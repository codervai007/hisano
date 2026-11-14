import Link from "next/link";
import { nav, site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="glass-bar sticky top-0 z-50 mb-8">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 py-3 md:px-12">
        <Link
          href="/"
          className="flex min-h-11 items-center text-2xl font-bold tracking-wide text-brand"
        >
          {site.name}
        </Link>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-1">
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
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
