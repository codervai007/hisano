import { priceLabel, products } from "@/content/site";
import { Reveal } from "./Reveal";

export function ProductGrid({ limit }: { limit?: number }) {
  const items = limit ? products.slice(0, limit) : products;
  return (
    <ul className="flex flex-wrap gap-6">
      {items.map((p, i) => (
        <Reveal
          as="li"
          key={p.name}
          delay={(i % 3) * 90}
          className="lift flex min-w-0 flex-[1_1_20rem] flex-col gap-3 rounded-lg border border-ink/10 bg-card p-6"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.image}
            alt={p.name}
            width={800}
            height={800}
            loading="lazy"
            className="mb-1 aspect-square w-full rounded-md bg-white object-contain"
          />
          <p className="type-heading text-lg">{p.name}</p>
          <p className="text-xs tracking-[0.08em] text-stone">{priceLabel}</p>
          <p className="font-latin text-2xl font-medium tracking-[0.04em] text-brand">{p.price}</p>
        </Reveal>
      ))}
    </ul>
  );
}
