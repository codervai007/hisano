import { benefits } from "@/content/site";

export function Benefits() {
  return (
    <section className="mx-auto mt-24 w-full max-w-7xl px-6 md:px-12">
      <ul className="flex flex-wrap gap-x-8 gap-y-10">
        {benefits.map((b) => (
          <li key={b.label} className="flex min-w-0 flex-[1_1_16rem] flex-col gap-2">
            <h3 className="text-sm font-semibold tracking-widest text-brand">{b.label}</h3>
            <p className="font-serif text-xl font-bold leading-snug">{b.title}</p>
            <p className="text-[15px] leading-relaxed text-ink-soft">{b.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
