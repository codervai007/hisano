import type { Metadata } from "next";
import { Benefits } from "@/components/Benefits";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { about } from "@/content/site";
import { eyebrow } from "@/content/labels";

export const metadata: Metadata = { title: "私たちについて | HISANO" };

export default function AboutPage() {
  return (
    <>
      <section className="shell">
        <div className="bg-seigaiha flex min-h-[20rem] items-center rounded-lg border border-ink/10 px-6 py-14 md:min-h-[22rem] md:px-16 md:py-20">
          <div className="flex max-w-2xl flex-col items-start gap-5">
            <p className="type-eyebrow rise rise-1">{eyebrow.about}</p>
            <h1 className="type-display rise rise-2 text-[1.625rem] md:text-5xl">{about.heroTitle}</h1>
            <span aria-hidden className="ornament ornament-left ornament-on-2 rise rise-3" />
            <p className="type-body rise rise-4">{about.heroText}</p>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="shell mt-24">
          <p className="type-heading max-w-3xl text-2xl md:text-3xl">{about.tagline}</p>
        </section>
      </Reveal>

      <Reveal>
        <section className="shell mt-24 flex flex-col items-start gap-8">
          <SectionHeading eyebrow={eyebrow.production} title={about.production.heading} />
          <p className="type-heading text-xl md:text-2xl">{about.production.title}</p>
          <p className="type-body max-w-3xl">{about.production.text}</p>
          <p className="type-body max-w-3xl">{about.production.factory}</p>
        </section>
      </Reveal>

      <Reveal>
        <section className="shell mt-24 flex flex-col items-start gap-8">
          <SectionHeading eyebrow={eyebrow.sales} title={about.sales.heading} />
          <p className="type-heading text-xl md:text-2xl">{about.sales.title}</p>
          <p className="type-body max-w-3xl">{about.sales.text}</p>
        </section>
      </Reveal>

      <Benefits />
      <CtaBand />
    </>
  );
}
