import { priceLabel, products } from "@/content/site";

export function ProductGrid({ limit }: { limit?: number }) {
  const items = limit ? products.slice(0, limit) : products;
  return (
    <ul className="flex flex-wrap gap-6">
      {items.map((p) => (
        <li
          key={p.name}
          className="flex min-w-0 flex-[1_1_20rem] flex-col gap-3 rounded-lg border border-ink/10 bg-card p-6"
        >
          <div
            role="img"
            aria-label={`${p.name} の商品画像（準備中）`}
            className="bg-seigaiha mb-1 flex h-36 items-end rounded-md p-3 text-xs tracking-[0.08em] text-stone"
          >
            商品画像（準備中）
          </div>
          <p className="type-heading text-lg">{p.name}</p>
          <p className="text-xs tracking-[0.08em] text-stone">{priceLabel}</p>
          <p className="font-latin text-2xl font-medium tracking-[0.04em] text-brand">{p.price}</p>
        </li>
      ))}
    </ul>
  );
}
