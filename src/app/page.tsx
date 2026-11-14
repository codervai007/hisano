import Link from "next/link";
import { Benefits } from "@/components/Benefits";
import { PrimaryLink, SecondaryLink } from "@/components/Buttons";
import { CtaBand } from "@/components/CtaBand";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionHeading } from "@/components/SectionHeading";
import {
  cta,
  featured,
  featuredHeading,
  hero,
  intro,
  moreLabel,
  productsHeading,
} from "@/content/site";
import { eyebrow } from "@/content/labels";

export default function HomePage() {
  return (
    <>
      <section className="shell">
        <div className="bg-seigaiha flex min-h-[28rem] items-center rounded-lg border border-ink/10 px-8 py-20 md:px-16 md:py-28">
          <div className="flex max-w-2xl flex-col items-start gap-5">
            <p className="type-eyebrow">{eyebrow.home}</p>
            <h1 className="type-display text-4xl md:text-6xl">{hero.title}</h1>
            <span aria-hidden className="ornament ornament-left ornament-on-2" />
            <p className="type-body">{hero.text}</p>
          </div>
        </div>
      </section>

      <section className="shell mt-28 flex flex-col items-start gap-8">
        <SectionHeading eyebrow={eyebrow.intro} title={intro.title} />
        <p className="type-body max-w-3xl">{intro.text}</p>
        <div className="flex flex-wrap gap-3">
          <PrimaryLink href="/download">{cta.download}</PrimaryLink>
          <SecondaryLink href="/contact">{cta.contact}</SecondaryLink>
        </div>
      </section>

      <section className="shell mt-28 flex flex-col gap-10">
        <SectionHeading eyebrow={eyebrow.featured} title={featuredHeading} />
        <ul className="flex flex-wrap gap-6">
          {featured.map((f) => (
            <li
              key={f.name}
              className="flex min-w-0 flex-[1_1_26rem] flex-col gap-4 rounded-lg border border-ink/10 bg-card p-8 md:p-10"
            >
              <span className="type-eyebrow !text-[0.8125rem]">{f.badge}</span>
              <p className="type-heading text-2xl">{f.name}</p>
              <p className="text-[0.9375rem] leading-[2.05] tracking-[0.05em] text-ink-mute">{f.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="shell mt-28 flex flex-col gap-10">
        <SectionHeading eyebrow={eyebrow.products} title={productsHeading} />
        <ProductGrid limit={6} />
        <Link href="/product" className="btn-pill self-center">
          {moreLabel}
        </Link>
      </section>

      <Benefits />
      <CtaBand />
    </>
  );
}
