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

## Languages

The header's JA / EN switch saves the choice in the `hisano-lang` cookie and
the server renders every page in that language. Japanese copy is in
`src/content/site.ts` and `labels.ts`; English overrides are in
`src/content/en.ts` (anything missing there falls back to Japanese).
English product pages are in `src/content/productDetails.en.ts`; their health,
ingredient and caution wording is a translation and should be checked. The
banner and product images contain Japanese text and are the same in both.

## Product pages

`src/content/productDetails.ts` holds the 13 product detail pages, with the text
exactly as on the original site (including passages repeated or apparently
copied from other products, which the client asked to keep as is). Worth
checking with the client:

- ビフィズス菌プレミアム+: the 商品スペック lists an oyster/maca ingredient line,
  108g / 360粒, and a shark liver oil ingredient line.
- アンセリンプレミアム+ and 牡蠣マカ プレミアム: a shark liver oil ingredient line.
- 牡蠣マカ プレミアム: 180 tablets in the text, 360 in the spec.
- 肝臓エキス精 NANO プレミアム: a section describing plant fermentation extract.
- ナットウキナーゼ and セノビ革命: disease-prevention and growth-hormone claims.

## Still to do

- Photos (except the shark cartilage ones) load from the old site's storage.
  Copy them into `public/images/` so they survive the old site closing.
- Paste the full privacy policy and any remaining text marked `TODO`.
- Confirm the operating-company URL in `site.operatorUrl`.
