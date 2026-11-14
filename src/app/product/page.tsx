import type { Metadata } from "next";
import { Benefits } from "@/components/Benefits";
import { CtaBand } from "@/components/CtaBand";
import { ProductGrid } from "@/components/ProductGrid";
import { intro, productsHeading } from "@/content/site";

export const metadata: Metadata = { title: `${productsHeading} | HISANO` };

export default function ProductPage() {
  return (
    <>
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 md:px-12">
        <h1 className="font-serif text-4xl font-bold">{productsHeading}</h1>
        <p className="max-w-3xl text-[17px] leading-loose text-ink-soft">{intro.text}</p>
      </section>
      <section className="mx-auto mt-12 w-full max-w-7xl px-6 md:px-12">
        <ProductGrid />
      </section>
      <Benefits />
      <CtaBand />
    </>
  );
}
