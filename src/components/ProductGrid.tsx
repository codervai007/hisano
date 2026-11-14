import { priceLabel, products, site } from "@/content/site";
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
          <div
            role="img"
            aria-label={`${p.name}（商品画像は準備中）`}
            className="ocean pack-tile mb-1"
          >
            <span className="pack-tile-frame" />
            <span className="pack-tile-mark foil">{site.name}</span>
          </div>
          <p className="type-heading text-lg">{p.name}</p>
          <p className="text-xs tracking-[0.08em] text-stone">{priceLabel}</p>
          <p className="font-latin text-2xl font-medium tracking-[0.04em] text-brand">{p.price}</p>
        </Reveal>
      ))}
    </ul>
  );
}
