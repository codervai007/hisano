import { rakuten } from "@/content/site";

/** Link to the HISANO shop on Rakuten Ichiba. */
export function RakutenBand() {
  return (
    <section className="shell mt-24">
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 rounded-lg border border-ink/10 bg-white px-6 py-10 text-center text-[#333333]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={rakuten.logo}
          alt="Rakuten"
          width={360}
          height={240}
          loading="lazy"
          className="h-auto w-48 rounded-md md:w-56"
        />
        <div className="flex flex-col items-center gap-4">
          <p className="type-heading text-xl font-bold md:text-2xl">{rakuten.text}</p>
          <a
            href={rakuten.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill w-full min-w-64 rounded-md bg-[#bf0000] font-bold text-white hover:bg-[#a30000]"
          >
            {rakuten.button}
          </a>
        </div>
      </div>
    </section>
  );
}
