"use client";

import { useEffect, useState } from "react";
import { THEME_KEY } from "@/lib/theme";

type Theme = "light" | "dark";

function apply(theme: Theme) {
  if (theme === "dark") document.documentElement.setAttribute("data-theme", "dark");
  else document.documentElement.removeAttribute("data-theme");
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* storage unavailable (private mode): the choice lasts for this page only */
  }
}

export type ThemeLabels = { toLight: string; toDark: string; light: string; dark: string };

/** Compact light / dark switch: a sliding pill with a sun and a moon. */
export function ThemeToggle({ labels }: { labels: ThemeLabels }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(THEME_KEY);
    } catch {}
    setTheme(
      saved === "dark" || document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light",
    );
  }, []);

  const dark = theme === "dark";
  const toggle = () => {
    const next: Theme = dark ? "light" : "dark";
    apply(next);
    setTheme(next);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label={dark ? labels.toLight : labels.toDark}
      title={dark ? labels.light : labels.dark}
      onClick={toggle}
      className="glass-panel liquid-press relative inline-flex h-8 w-[3.75rem] shrink-0 items-center rounded-full p-1"
    >
      <span
        aria-hidden
        className={`absolute left-1 top-1 size-6 rounded-full bg-page shadow-[0_1px_4px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          dark ? "translate-x-[1.75rem]" : ""
        }`}
      />
      <span aria-hidden className="relative z-10 flex w-full items-center justify-between px-[0.3rem] text-ink">
        <svg
          viewBox="0 0 24 24"
          className={`size-3.5 transition-opacity ${dark ? "opacity-45" : "opacity-100"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          className={`size-3.5 transition-opacity ${dark ? "opacity-100" : "opacity-45"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>
    </button>
  );
}
