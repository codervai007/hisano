import Link from "next/link";
import { Benefits } from "@/components/Benefits";
import { PrimaryLink, SecondaryLink } from "@/components/Buttons";
import { CtaBand } from "@/components/CtaBand";
import { ProductGrid } from "@/components/ProductGrid";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  cta,
  detailLabel,
  featured,
  featuredHeading,
  hero,
  intro,
  introImages,
  moreLabel,
  nav,
  productsHeading,
} from "@/content/site";
import { eyebrow } from "@/content/labels";

// The headline is set vertically, one column per phrase.
const headline = hero.title.split(/(?<=、)/);

export default function HomePage() {
  return (
    <>
      <section className="ocean ocean-hero -mt-10">
        <div className="shell">
          <div className="ocean-hero-inner">
            <h1 className="tategaki rise rise-1">
              {headline.map((line) => (
                <span key={line} className="foil">
                  {line}
                </span>
              ))}
            </h1>
            <div className="ocean-copy">
              <span aria-hidden className="ocean-rule rise rise-2" />
              <p className="rise rise-3">{hero.text}</p>
              <div className="ocean-actions rise rise-4">
                <Link href={nav[0].href} className="btn-foil">
                  {nav[0].label}
                </Link>
                <Link href="/download" className="btn-outline-light">
                  {cta.download}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="shell mt-28 flex flex-col items-center gap-8 text-center">
          <SectionHeading eyebrow={eyebrow.intro} title={intro.title} center />
          <p className="type-body max-w-3xl">{intro.text}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <PrimaryLink href="/download">{cta.download}</PrimaryLink>
            <SecondaryLink href="/contact">{cta.contact}</SecondaryLink>
          </div>
          <div className="mt-6 grid w-full max-w-5xl grid-cols-2 gap-3 md:grid-cols-[2fr_1fr] md:gap-4">
            {introImages.map((img, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={img.src}
                src={img.src}
                alt=""
                width={img.width}
                height={img.height}
                loading="lazy"
                className={`photo-card h-full w-full object-cover ${i === 0 ? "col-span-2 aspect-[3/2] md:col-span-1 md:row-span-2 md:aspect-auto" : "aspect-[3/2]"}`}
              />
            ))}
          </div>
        </section>
      </Reveal>

      <section className="shell mt-28 flex flex-col gap-10">
        <Reveal>
          <SectionHeading eyebrow={eyebrow.featured} title={featuredHeading} center />
        </Reveal>
        <ul className="flex flex-wrap gap-6">
          {featured.map((f, i) => (
            <Reveal
              as="li"
              key={f.name}
              delay={i * 110}
              className="lift flex min-w-0 flex-[1_1_26rem] flex-col items-center gap-4 rounded-lg border border-ink/10 border-t-2 border-t-gold bg-card p-8 text-center md:p-10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={f.image}
                alt={f.name}
                width={813}
                height={800}
                loading="lazy"
                className="aspect-square w-full max-w-64 rounded-md bg-white object-contain"
              />
              <span className="type-eyebrow !text-[0.8125rem]">{f.badge}</span>
              <p className="type-heading text-2xl">{f.name}</p>
              <p className="text-[0.9375rem] leading-[2.05] tracking-[0.05em] text-ink-mute">{f.text}</p>
              <Link href={f.href} className="btn-pill btn-pill-brand mt-2">
                {detailLabel}
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="shell mt-28 flex flex-col gap-10">
        <Reveal>
          <SectionHeading eyebrow={eyebrow.products} title={productsHeading} center />
        </Reveal>
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
