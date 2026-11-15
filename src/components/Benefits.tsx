import { getContent } from "@/content";
import { Icon, type IconName } from "./Icon";
import { Reveal } from "./Reveal";

// Icon and circle colour for each benefit, in the order of `benefits`.
const looks: { icon: IconName; color: string }[] = [
  { icon: "truck", color: "#6aaefc" },
  { icon: "lock", color: "#b49cf7" },
  { icon: "thumb", color: "#e79bd9" },
  { icon: "phone", color: "#fbc88d" },
];

export async function Benefits() {
  const { benefits } = await getContent();
  return (
    <section className="shell mt-28">
      <ul className="grid gap-6 md:grid-cols-2">
        {benefits.map((b, i) => (
          <Reveal
            as="li"
            key={b.label}
            delay={(i % 2) * 90}
            className="flex flex-col items-center gap-6 rounded-xl border border-ink/10 bg-card p-8 text-center shadow-[0_10px_30px_-18px_rgba(0,0,0,0.25)] sm:flex-row sm:items-start sm:gap-8 sm:text-left md:p-10"
          >
            <span
              aria-hidden
              className="flex size-24 shrink-0 items-center justify-center rounded-full text-white md:size-28"
              style={{ backgroundColor: looks[i % looks.length].color }}
            >
              <Icon name={looks[i % looks.length].icon} className="size-11 md:size-12" />
            </span>
            <div className="flex min-w-0 flex-col gap-3">
              <h3 className="type-heading text-2xl font-bold">{b.label}</h3>
              <p className="type-heading text-lg">{b.title}</p>
              <p className="text-[0.9375rem] leading-[2] tracking-[0.05em] text-ink-mute">{b.text}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
