import Link from "next/link";
import { nav, site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="glass-bar sticky top-0 z-50 mb-10">
      <div className="shell flex flex-wrap items-center justify-between gap-x-8 gap-y-1 py-2">
        <Link
          href="/"
          className="font-latin flex min-h-11 items-center text-3xl font-medium tracking-[0.18em] text-brand"
        >
          {site.name}
        </Link>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-1">
          <nav aria-label="メイン" className="flex flex-wrap gap-x-7 gap-y-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center text-[0.8125rem] tracking-[0.08em] text-ink hover:text-brand"
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
