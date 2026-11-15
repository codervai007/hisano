"use client";

import { useState } from "react";

/** Reveals the rest of a collapsed list (see ProductGrid), then goes away. */
export function ShowMoreButton({ targetId, label }: { targetId: string; label: string }) {
  const [done, setDone] = useState(false);
  if (done) return null;
  return (
    <button
      type="button"
      aria-controls={targetId}
      aria-expanded={false}
      onClick={() => {
        document.getElementById(targetId)?.setAttribute("data-collapsed", "false");
        setDone(true);
      }}
      className="btn-pill self-center"
    >
      {label}
    </button>
  );
}
