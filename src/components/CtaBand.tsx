import { cta } from "@/content/site";
import { eyebrow } from "@/content/labels";
import { PrimaryLink, SecondaryLink } from "./Buttons";
import { SectionHeading } from "./SectionHeading";

export function CtaBand() {
  return (
    <section className="shell mt-28">
      <div className="bg-seigaiha flex flex-col items-center gap-8 rounded-lg border border-ink/10 px-6 py-16 text-center md:py-20">
        <SectionHeading eyebrow={eyebrow.contact} title={cta.text} center onTint />
        <div className="flex flex-wrap justify-center gap-3">
          <PrimaryLink href="/download">{cta.download}</PrimaryLink>
          <SecondaryLink href="/contact">{cta.contact}</SecondaryLink>
        </div>
      </div>
    </section>
  );
}
