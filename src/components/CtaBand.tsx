import { cta } from "@/content/site";
import { PrimaryLink, SecondaryLink } from "./Buttons";

export function CtaBand() {
  return (
    <section className="mx-auto mt-24 w-full max-w-7xl px-6 md:px-12">
      <div className="flex flex-col items-center gap-6 rounded-[28px] bg-gradient-to-br from-mist-3 to-mist-2 px-8 py-16 text-center">
        <h2 className="max-w-xl font-serif text-2xl font-bold leading-snug text-balance md:text-3xl">
          {cta.text}
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          <PrimaryLink href="/download">{cta.download}</PrimaryLink>
          <SecondaryLink href="/contact">{cta.contact}</SecondaryLink>
        </div>
      </div>
    </section>
  );
}
