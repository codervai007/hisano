import Link from "next/link";
import { getContent } from "@/content";
import { Reveal } from "./Reveal";
import { ShowMoreButton } from "./ShowMoreButton";

type Props = {
  /** Show only this many products and drop the rest. */
  limit?: number;
  /** Show this many first; a 「もっと見る」 button reveals the rest. */
  initial?: number;
};

export async function ProductGrid({ limit, initial }: Props) {
  const { detailLabel, priceLabel, products, showMore } = await getContent();
  const items = limit ? products.slice(0, limit) : products;
  const collapsible = initial !== undefined && items.length > initial;
  return (
    <>
      <ul
        id="product-grid"
        data-collapsed={collapsible ? "true" : undefined}
        className="product-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((p, i) => (
          <Reveal
            as="li"
            key={p.slug}
            delay={(i % 3) * 90}
            className={`lift min-w-0 rounded-lg border border-ink/10 bg-card ${collapsible && i >= initial ? "product-extra" : ""}`}
          >
            <Link href={`/product/${p.slug}`} className="flex h-full flex-col gap-3 rounded-lg p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt=""
                width={800}
                height={800}
                loading="lazy"
                className="mx-auto mb-1 aspect-square w-full max-w-72 rounded-md bg-white object-contain"
              />
              <p className="type-heading text-lg">{p.name}</p>
              {p.price && (
                <>
                  <p className="text-xs tracking-[0.08em] text-stone">{priceLabel}</p>
                  <p className="font-latin text-2xl font-medium tracking-[0.04em] text-brand">{p.price}</p>
                </>
              )}
              <span className="btn-pill btn-pill-brand mt-auto w-full">{detailLabel}</span>
            </Link>
          </Reveal>
        ))}
      </ul>
      {collapsible && <ShowMoreButton targetId="product-grid" label={showMore} />}
    </>
  );
}
