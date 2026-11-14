import type { Metadata } from "next";
import { Benefits } from "@/components/Benefits";
import { CtaBand } from "@/components/CtaBand";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { intro, productsHeading } from "@/content/site";
import { eyebrow } from "@/content/labels";

export const metadata: Metadata = { title: `${productsHeading} | HISANO` };

export default function ProductPage() {
  return (
    <>
      <section className="shell flex flex-col items-start gap-8">
        <SectionHeading as="h1" eyebrow={eyebrow.products} title={productsHeading} />
        <p className="type-body max-w-3xl">{intro.text}</p>
      </section>
      <section className="shell mt-14">
        <ProductGrid />
      </section>
      <Benefits />
      <CtaBand />
    </>
  );
}
