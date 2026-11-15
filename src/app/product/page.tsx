import type { Metadata } from "next";
import { Benefits } from "@/components/Benefits";
import { CtaBand } from "@/components/CtaBand";
import { RakutenBand } from "@/components/RakutenBand";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { getContent } from "@/content";

export async function generateMetadata(): Promise<Metadata> {
  const { productsHeading } = await getContent();
  return { title: `${productsHeading} | HISANO` };
}

export default async function ProductPage() {
  const { eyebrow, intro, productsHeading } = await getContent();
  return (
    <>
      <section className="shell flex flex-col items-center gap-8 text-center">
        <SectionHeading as="h1" eyebrow={eyebrow.products} title={productsHeading} center />
        <p className="type-body max-w-3xl">{intro.text}</p>
      </section>
      <section className="shell mt-14">
        <ProductGrid />
      </section>
      <RakutenBand />
      <Benefits />
      <CtaBand />
    </>
  );
}
