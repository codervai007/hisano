import { rakuten } from "@/content/site";

/** Link to the HISANO shop on Rakuten Ichiba. */
export function RakutenBand() {
  return (
    <section className="shell mt-24">
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 rounded-lg border border-ink/10 bg-card px-6 py-10 text-center">
        <p className="type-heading text-xl md:text-2xl">{rakuten.text}</p>
        <a
          href={rakuten.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill min-w-56 bg-[#bf0000] font-bold text-white hover:bg-[#a30000]"
        >
          {rakuten.button}
        </a>
      </div>
    </section>
  );
}
