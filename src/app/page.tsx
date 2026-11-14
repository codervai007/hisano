import { Benefits } from "@/components/Benefits";
import { PrimaryLink, SecondaryLink } from "@/components/Buttons";
import { CtaBand } from "@/components/CtaBand";
import { ProductGrid } from "@/components/ProductGrid";
import { Waves } from "@/components/Waves";
import {
  cta,
  featured,
  featuredHeading,
  hero,
  intro,
  moreLabel,
  productsHeading,
} from "@/content/site";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="relative flex min-h-[460px] items-center overflow-hidden rounded-[28px] bg-gradient-to-br from-mist-2 via-card to-mist-3 px-8 py-16 md:px-14">
          <Waves />
          <div className="relative flex max-w-2xl flex-col gap-5">
            <h1 className="font-serif text-4xl font-bold leading-tight text-balance md:text-6xl">
              {hero.title}
            </h1>
            <p className="text-base leading-loose text-ink-soft md:text-lg">{hero.text}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 flex w-full max-w-7xl flex-col items-start gap-5 px-6 md:px-12">
        <h2 className="max-w-3xl font-serif text-3xl font-bold leading-snug text-balance">
          {intro.title}
        </h2>
        <p className="max-w-3xl text-[17px] leading-loose text-ink-soft">{intro.text}</p>
        <div className="flex flex-wrap gap-3">
          <PrimaryLink href="/download">{cta.download}</PrimaryLink>
          <SecondaryLink href="/contact">{cta.contact}</SecondaryLink>
        </div>
      </section>

      <section className="mx-auto mt-20 flex w-full max-w-7xl flex-col gap-7 px-6 md:px-12">
        <h2 className="max-w-2xl font-serif text-2xl font-bold leading-snug text-balance">
          {featuredHeading}
        </h2>
        <ul className="flex flex-wrap gap-6">
          {featured.map((f) => (
            <li
              key={f.name}
              className="flex min-w-0 flex-[1_1_26rem] flex-col gap-3 rounded-3xl border border-line bg-card p-9"
            >
              <span className="self-start rounded-full bg-mist-2 px-3 py-1 text-xs font-semibold text-brand">
                {f.badge}
              </span>
              <p className="font-serif text-2xl font-bold leading-snug">{f.name}</p>
              <p className="text-[15px] leading-relaxed text-ink-soft">{f.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-20 flex w-full max-w-7xl flex-col gap-7 px-6 md:px-12">
        <h2 className="font-serif text-2xl font-bold">{productsHeading}</h2>
        <ProductGrid limit={6} />
        <Link
          href="/product"
          className="inline-flex min-h-12 items-center self-center rounded-full border border-edge bg-card px-8 text-[15px] font-semibold text-brand hover:bg-mist-2"
        >
          {moreLabel}
        </Link>
      </section>

      <Benefits />
      <CtaBand />
    </>
  );
}
