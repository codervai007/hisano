import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { RakutenBand } from "@/components/RakutenBand";
import { findProduct, productDetails, type Block } from "@/content/productDetails";
import { backToProducts, priceLabel } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return productDetails.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = findProduct((await params).slug);
  if (!product) return {};
  return { title: `${product.name} | HISANO`, description: product.summary.split("\n")[0] };
}

function BlockView({ block }: { block: Block }) {
  switch (block.k) {
    case "h2":
      return (
        <h2 className="type-heading mt-10 border-l-2 border-gold pl-4 text-2xl first:mt-0 md:text-[1.75rem]">
          {block.v}
        </h2>
      );
    case "h3":
      return <h3 className="type-heading mt-4 text-lg text-brand md:text-xl">{block.v}</h3>;
    case "p":
      return <p className="type-body whitespace-pre-line">{block.v}</p>;
    case "img":
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={block.src}
          alt={block.alt}
          width={block.w}
          height={block.h}
          loading="lazy"
          className="photo-card my-2 h-auto w-full"
        />
      );
    case "hr":
      return <div aria-hidden className="rule my-6" />;
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const product = findProduct((await params).slug);
  if (!product) notFound();

  return (
    <>
      <section className="shell flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image.src}
          alt={product.name}
          width={product.image.w}
          height={product.image.h}
          className="h-auto max-h-[28rem] w-[min(72vw,22rem)] rounded-lg bg-white object-contain"
        />
        <div className="flex min-w-0 flex-[1_1_20rem] flex-col items-start gap-5 md:max-w-xl">
          <h1 className="type-heading text-[1.75rem] md:text-4xl">{product.name}</h1>
          <span aria-hidden className="ornament ornament-left" />
          <div>
            <p className="text-xs tracking-[0.08em] text-stone">{priceLabel}</p>
            <p className="font-latin text-3xl font-medium tracking-[0.04em] text-brand">{product.price}</p>
          </div>
          <p className="type-body whitespace-pre-line">{product.summary}</p>
        </div>
      </section>

      <section className="shell mt-20">
        <div className="mx-auto flex max-w-3xl flex-col gap-5">
          {product.blocks.map((block, i) => (
            <BlockView key={i} block={block} />
          ))}
          <Link href="/product" className="btn-pill mt-10 self-center">
            {backToProducts}
          </Link>
        </div>
      </section>

      <RakutenBand />
      <CtaBand />
    </>
  );
}
