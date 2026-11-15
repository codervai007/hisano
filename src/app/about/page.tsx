import type { Metadata } from "next";
import { Benefits } from "@/components/Benefits";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { getContent } from "@/content";

export async function generateMetadata(): Promise<Metadata> {
  const { nav } = await getContent();
  return { title: `${nav[1].label} | HISANO` };
}

export default async function AboutPage() {
  const { about, eyebrow } = await getContent();
  return (
    <>
      <section className="ocean ocean-hero ocean-hero-short -mt-10">
        <div className="shell">
          <div className="ocean-stack">
            <h1 className="ocean-title foil rise rise-1">{about.heroTitle}</h1>
            <span aria-hidden className="ocean-rule rise rise-2" />
            <p className="rise rise-3">{about.heroText}</p>
          </div>
        </div>
      </section>

      <Reveal from="left">
        <section className="shell mt-24 text-center">
          <div className="photo-card photo-zoom mx-auto mb-12 w-full max-w-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={about.heroImage.src}
              alt=""
              width={about.heroImage.width}
              height={about.heroImage.height}
              className="h-auto w-full"
            />
          </div>
          <p className="type-heading mx-auto max-w-3xl text-2xl md:text-3xl">{about.tagline}</p>
        </section>
      </Reveal>

      <Reveal>
        <section className="shell mt-24 flex flex-col items-center gap-8 text-center">
          <SectionHeading eyebrow={eyebrow.production} title={about.production.heading} center />
          <p className="type-heading text-xl md:text-2xl">{about.production.title}</p>
          <p className="type-body max-w-3xl">{about.production.text}</p>
          <Reveal from="right" className="photo-card photo-zoom w-full max-w-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={about.factoryImage.src}
              alt={about.factoryImage.alt}
              width={about.factoryImage.width}
              height={about.factoryImage.height}
              loading="lazy"
              className="h-auto w-full"
            />
          </Reveal>
          <p className="type-body max-w-3xl">{about.production.factory}</p>
        </section>
      </Reveal>

      <Reveal>
        <section className="shell mt-24 flex flex-col items-center gap-8 text-center">
          <SectionHeading eyebrow={eyebrow.sales} title={about.sales.heading} center />
          <p className="type-heading text-xl md:text-2xl">{about.sales.title}</p>
          <p className="type-body max-w-3xl">{about.sales.text}</p>
        </section>
      </Reveal>

      <Benefits />
      <CtaBand />
    </>
  );
}
