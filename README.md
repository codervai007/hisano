# HISANO

Rebuild of https://hisano-jp.com (currently a STUDIO no-code site) with the same
stack as the VNT GROUP site: Next.js 15 (App Router), React 19, TypeScript and
Tailwind CSS v4.

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # run before every commit
npm run build
```

## Where things live

- `src/content/site.ts` holds all copy and data. Pages hold no hard-coded text.
  Search it for `TODO` to find text that was cut off when copied and needs the
  full wording pasted in.
- `src/app/` has the pages: `/`, `/product`, `/about`, `/contact`, `/download`,
  `/privacypolicy`.
- `src/app/globals.css` defines the colour and font tokens. Use them instead of
  hard-coded colours.
- Forms post from the browser to Web3Forms. Copy `.env.example` to `.env.local`
  and set `NEXT_PUBLIC_WEB3FORMS_KEY`. There are no API routes.

## Product pages

`src/content/productDetails.ts` holds the eight product detail pages, taken from
the original site. Lines left out because the original had clearly copied them
from another product (please supply the correct text):

- HISANO ビフィズス菌プレミアム+: a 商品スペック ingredient list for an oyster/maca
  product, its 内容量 (108g, 360粒), and a 原材料名 line listing shark liver oil.
- HISANO アンセリンプレミアム+: a 原材料名 line listing shark liver oil.
- HISANO PREMIUM NMN 36000: one block of text that appeared twice.

## Still to do

- Photos (except the shark cartilage ones) load from the old site's storage.
  Copy them into `public/images/` so they survive the old site closing.
- Paste the full privacy policy and any remaining text marked `TODO`.
- Confirm the operating-company URL in `site.operatorUrl`.
