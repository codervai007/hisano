import type { Metadata } from "next";
import { privacy } from "@/content/site";

export const metadata: Metadata = { title: `${privacy.title} | HISANO` };

export default function PrivacyPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 md:px-12">
      <h1 className="font-serif text-4xl font-bold">{privacy.title}</h1>
      <p className="whitespace-pre-line leading-loose text-ink-soft">{privacy.body}</p>
    </section>
  );
}
