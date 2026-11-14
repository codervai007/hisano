type Props = {
  eyebrow: string;
  title: string;
  as?: "h1" | "h2";
  center?: boolean;
  onTint?: boolean;
};

/** English eyebrow, Japanese heading, then the gold ornament. */
export function SectionHeading({ eyebrow, title, as: Tag = "h2", center = false, onTint = false }: Props) {
  return (
    <div className={`flex flex-col gap-2 ${center ? "items-center text-center" : "items-start"}`}>
      <p className="type-eyebrow">{eyebrow}</p>
      <Tag className="type-heading max-w-3xl text-2xl md:text-3xl">{title}</Tag>
      <span
        aria-hidden
        className={`ornament ${center ? "" : "ornament-left"} ${onTint ? "ornament-on-2" : ""}`}
      />
    </div>
  );
}
