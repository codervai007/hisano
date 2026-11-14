import { priceLabel, products } from "@/content/site";

export function ProductGrid({ limit }: { limit?: number }) {
  const items = limit ? products.slice(0, limit) : products;
  return (
    <ul className="flex flex-wrap gap-5">
      {items.map((p) => (
        <li
          key={p.name}
          className="flex min-w-0 flex-[1_1_20rem] flex-col gap-2 rounded-[20px] border border-line bg-card p-7"
        >
          <div
            role="img"
            aria-label={`${p.name} の商品画像（準備中）`}
            className="mb-2 flex h-32 items-end rounded-2xl bg-gradient-to-br from-mist-2 to-mist-3 p-3 text-xs text-ink-soft"
          >
            商品画像（準備中）
          </div>
          <p className="font-serif text-lg font-bold leading-snug">{p.name}</p>
          <p className="text-xs text-ink-soft">{priceLabel}</p>
          <p className="text-lg font-semibold text-brand">{p.price}</p>
        </li>
      ))}
    </ul>
  );
}
