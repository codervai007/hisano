"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { Lang } from "@/lib/lang-shared";
import { Icon, navIcon } from "./Icon";
import { LangToggle } from "./LangToggle";
import { Logo } from "./Logo";
import { ThemeToggle, type ThemeLabels } from "./ThemeToggle";

type Props = {
  lang: Lang;
  nav: { label: string; href: string }[];
  labels: { open: string; close: string; nav: string; main: string; lang: string };
  themeLabels: ThemeLabels;
};

export function Header({ lang, nav, labels, themeLabels }: Props) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  // Lock page scroll while the menu is open; Escape or a wider screen closes it.
  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.documentElement.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <>
      <header className="site-header sticky top-0 z-50 mb-10">
        <div className="shell flex items-center justify-between gap-x-3 py-2 sm:gap-x-8 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            onClick={close}
            className="site-wordmark flex min-h-11 items-center justify-self-start"
          >
            <Logo className="h-6 w-auto sm:h-8" />
          </Link>
          <nav aria-label={labels.main} className="hidden justify-center gap-x-6 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center gap-1.5 whitespace-nowrap text-sm font-bold tracking-[0.08em]"
              >
                {navIcon[item.href] && <Icon name={navIcon[item.href]} className="size-[1.125rem]" />}
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center justify-end gap-x-2 md:gap-x-4">
            <LangToggle lang={lang} label={labels.lang} />
            <ThemeToggle labels={themeLabels} />
            <button
              type="button"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? labels.close : labels.open}
              onClick={() => setOpen((o) => !o)}
              className="burger-btn glass-panel liquid-press flex size-11 shrink-0 items-center justify-center rounded-full text-ink lg:hidden"
            >
              <span aria-hidden className="burger">
                <span className="burger-1" />
                <span className="burger-2" />
                <span className="burger-3" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Sibling of the header, not a child: the header's blur would otherwise
          become the containing block and stop this from covering the screen. */}
      <div
        id="site-menu"
        className="menu-overlay fixed inset-0 z-40 flex flex-col justify-center pb-16 pt-24 lg:hidden"
        data-open={open ? "true" : "false"}
        inert={!open}
      >
        <nav aria-label={labels.nav} className="shell">
          <ul className="flex flex-col">
            {nav.map((item, i) => (
              <li
                key={item.href}
                className="menu-item border-b border-ink/10"
                style={{ "--i": i } as React.CSSProperties}
              >
                <Link
                  href={item.href}
                  onClick={close}
                  className="type-heading flex min-h-16 items-center justify-between text-2xl font-bold text-ink hover:text-brand"
                >
                  <span className="flex items-center gap-3">
                    {navIcon[item.href] && <Icon name={navIcon[item.href]} className="size-6 text-brand" />}
                    {item.label}
                  </span>
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="size-5 text-gold"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
