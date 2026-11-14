"use client";

import { useState } from "react";
import { formLabels } from "@/content/site";

type Props = {
  subject: string;
  submitLabel: string;
  withMessage?: boolean;
};

type Status = "idle" | "sending" | "done" | "error" | "nokey";

const field =
  "min-h-12 w-full rounded-md border border-ink/20 bg-card px-4 text-[0.9375rem] tracking-[0.04em] text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/30";
const label = "flex flex-col gap-2 text-sm tracking-[0.06em] text-ink-mute";

export function ContactForm({ subject, submitLabel, withMessage = false }: Props) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!key) {
      setStatus("nokey");
      return;
    }
    setStatus("sending");
    const data = new FormData(form);
    data.append("access_key", key);
    data.append("subject", subject);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = (await res.json()) as { success?: boolean };
      setStatus(json.success ? "done" : "error");
      if (json.success) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <label className={label} htmlFor="name">
        {formLabels.name}
        <input id="name" name="name" type="text" required autoComplete="name" className={field} />
      </label>
      <label className={label} htmlFor="email">
        {formLabels.email}
        <input id="email" name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className={label} htmlFor="tel">
        {formLabels.tel}
        <input id="tel" name="tel" type="tel" autoComplete="tel" className={field} />
      </label>
      <label className={label} htmlFor="company">
        {formLabels.company}
        <input id="company" name="company" type="text" autoComplete="organization" className={field} />
      </label>
      {withMessage && (
        <label className={label} htmlFor="message">
          {formLabels.message}
          <textarea id="message" name="message" rows={6} required className={`${field} py-3`} />
        </label>
      )}
      <label className="flex min-h-11 items-center gap-3 text-sm tracking-[0.04em]" htmlFor="consent">
        <input id="consent" name="consent" type="checkbox" required className="size-5 accent-[var(--color-fill)]" />
        {formLabels.consent}
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-pill btn-pill-brand self-start disabled:opacity-60"
      >
        {status === "sending" ? formLabels.sending : submitLabel}
      </button>
      <p role="status" aria-live="polite" className="min-h-6 text-sm text-ink-mute">
        {status === "done" && formLabels.done}
        {status === "error" && formLabels.error}
        {status === "nokey" && formLabels.needKey}
      </p>
    </form>
  );
}
