"use client";

import { useLayoutEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
  /** Direction the content arrives from. */
  from?: "up" | "left" | "right";
};

/**
 * Fades its content in (up, or from the left or right) when it scrolls into view. Anything already on screen
 * at load stays visible, and nothing is hidden without JavaScript or for
 * visitors who ask for reduced motion.
 */
export function Reveal({ children, className = "", delay = 0, as = "div", from = "up" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.classList.add("reveal-init");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.remove("reveal-init");
        el.classList.add("reveal-in");
        io.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref}
      className={className}
      data-from={from}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
