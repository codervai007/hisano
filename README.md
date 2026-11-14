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

## Still to do

- Add the client's photos (hero, products, factory). Product cards currently show
  a "商品画像（準備中）" placeholder.
- Product detail pages (`/product/<slug>`) are not built yet.
- Paste the full privacy policy and the cut-off paragraphs marked `TODO`.
- Confirm the operating-company URL in `site.operatorUrl`.
