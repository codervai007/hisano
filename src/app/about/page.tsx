import type { Metadata } from "next";
import { Benefits } from "@/components/Benefits";
import { CtaBand } from "@/components/CtaBand";
import { Waves } from "@/components/Waves";
import { about } from "@/content/site";

export const metadata: Metadata = { title: "私たちについて | HISANO" };

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="relative flex min-h-[360px] items-center overflow-hidden rounded-[28px] bg-gradient-to-br from-mist-2 via-[#f8fbff] to-mist-3 px-8 py-14 md:px-14">
          <Waves />
          <div className="relative flex max-w-2xl flex-col gap-5">
            <h1 className="font-serif text-3xl font-bold leading-snug text-balance md:text-5xl">
              {about.heroTitle}
            </h1>
            <p className="text-base leading-loose text-ink-soft">{about.heroText}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-7xl px-6 md:px-12">
        <p className="max-w-3xl font-serif text-2xl font-bold leading-snug text-balance">
          {about.tagline}
        </p>
      </section>

      <section className="mx-auto mt-16 flex w-full max-w-7xl flex-col gap-4 px-6 md:px-12">
        <h2 className="text-sm font-semibold tracking-widest text-brand">
          {about.production.heading}
        </h2>
        <p className="font-serif text-2xl font-bold">{about.production.title}</p>
        <p className="max-w-3xl leading-loose text-ink-soft">{about.production.text}</p>
        <p className="max-w-3xl leading-loose text-ink-soft">{about.production.factory}</p>
      </section>

      <section className="mx-auto mt-16 flex w-full max-w-7xl flex-col gap-4 px-6 md:px-12">
        <h2 className="text-sm font-semibold tracking-widest text-brand">{about.sales.heading}</h2>
        <p className="font-serif text-2xl font-bold">{about.sales.title}</p>
        <p className="max-w-3xl leading-loose text-ink-soft">{about.sales.text}</p>
      </section>

      <Benefits />
      <CtaBand />
    </>
  );
}
