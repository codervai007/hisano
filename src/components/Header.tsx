"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { menuLabels } from "@/content/labels";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
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
      if (window.innerWidth >= 768) setOpen(false);
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
      <header className="glass-bar sticky top-0 z-50 mb-10">
        <div className="shell flex items-center justify-between gap-x-8 py-2">
          <Link
            href="/"
            onClick={close}
            className="font-latin flex min-h-11 items-center text-3xl font-medium tracking-[0.18em] text-brand"
          >
            {site.name}
          </Link>
          <div className="flex items-center gap-x-7">
            <nav aria-label="メイン" className="hidden gap-x-7 md:flex">
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
            <button
              type="button"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? menuLabels.close : menuLabels.open}
              onClick={() => setOpen((o) => !o)}
              className="burger-btn glass-panel liquid-press flex size-11 shrink-0 items-center justify-center rounded-full text-ink md:hidden"
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
        className="menu-overlay fixed inset-0 z-40 flex flex-col justify-center pb-16 pt-24 md:hidden"
        data-open={open ? "true" : "false"}
        inert={!open}
      >
        <nav aria-label={menuLabels.nav} className="shell">
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
                  className="type-heading flex min-h-16 items-center justify-between text-2xl text-ink hover:text-brand"
                >
                  {item.label}
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
