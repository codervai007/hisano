"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { LANG_COOKIE, type Lang } from "@/lib/lang-shared";

const options: { lang: Lang; label: string }[] = [
  { lang: "ja", label: "JA" },
  { lang: "en", label: "EN" },
];

/** 日本語 / English switch. The choice is kept in a cookie for a year. */
export function LangToggle({ lang, label }: { lang: Lang; label: string }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function choose(next: Lang) {
    if (next === lang) return;
    document.cookie = `${LANG_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = next;
    startTransition(() => router.refresh());
  }

  return (
    <div
      role="group"
      aria-label={label}
      className={`glass-panel inline-flex h-8 shrink-0 items-center rounded-full p-0.5 text-[0.75rem] font-bold tracking-[0.08em] transition-opacity ${pending ? "opacity-60" : ""}`}
    >
      {options.map((o) => (
        <button
          key={o.lang}
          type="button"
          lang={o.lang}
          aria-pressed={o.lang === lang}
          onClick={() => choose(o.lang)}
          className={`h-7 min-w-9 rounded-full px-2 transition-colors ${
            o.lang === lang ? "lang-on" : "text-ink-mute hover:text-brand"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
