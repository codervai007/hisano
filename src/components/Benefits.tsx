import { benefits } from "@/content/site";
import { Reveal } from "./Reveal";

export function Benefits() {
  return (
    <section className="shell mt-28">
      <ul className="flex flex-wrap gap-x-10 gap-y-12">
        {benefits.map((b, i) => (
          <Reveal
            as="li"
            key={b.label}
            delay={i * 90}
            className="flex min-w-0 flex-[1_1_16rem] flex-col gap-3 border-t border-ink/15 pt-6"
          >
            <h3 className="type-eyebrow !text-[0.875rem]">{b.label}</h3>
            <p className="type-heading text-xl">{b.title}</p>
            <p className="text-[0.9375rem] leading-[2] tracking-[0.05em] text-ink-mute">{b.text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
