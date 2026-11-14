import type { Metadata } from "next";
import { Benefits } from "@/components/Benefits";
import { CtaBand } from "@/components/CtaBand";
import { SectionHeading } from "@/components/SectionHeading";
import { about } from "@/content/site";
import { eyebrow } from "@/content/labels";

export const metadata: Metadata = { title: "私たちについて | HISANO" };

export default function AboutPage() {
  return (
    <>
      <section className="shell">
        <div className="bg-seigaiha flex min-h-[22rem] items-center rounded-lg border border-ink/10 px-8 py-16 md:px-16 md:py-20">
          <div className="flex max-w-2xl flex-col items-start gap-5">
            <p className="type-eyebrow">{eyebrow.about}</p>
            <h1 className="type-display text-3xl md:text-5xl">{about.heroTitle}</h1>
            <span aria-hidden className="ornament ornament-left ornament-on-2" />
            <p className="type-body">{about.heroText}</p>
          </div>
        </div>
      </section>

      <section className="shell mt-24">
        <p className="type-heading max-w-3xl text-2xl md:text-3xl">{about.tagline}</p>
      </section>

      <section className="shell mt-24 flex flex-col items-start gap-8">
        <SectionHeading eyebrow={eyebrow.production} title={about.production.heading} />
        <p className="type-heading text-xl md:text-2xl">{about.production.title}</p>
        <p className="type-body max-w-3xl">{about.production.text}</p>
        <p className="type-body max-w-3xl">{about.production.factory}</p>
      </section>

      <section className="shell mt-24 flex flex-col items-start gap-8">
        <SectionHeading eyebrow={eyebrow.sales} title={about.sales.heading} />
        <p className="type-heading text-xl md:text-2xl">{about.sales.title}</p>
        <p className="type-body max-w-3xl">{about.sales.text}</p>
      </section>

      <Benefits />
      <CtaBand />
    </>
  );
}
