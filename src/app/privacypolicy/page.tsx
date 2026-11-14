import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { privacy } from "@/content/site";
import { eyebrow } from "@/content/labels";

export const metadata: Metadata = { title: `${privacy.title} | HISANO` };

export default function PrivacyPage() {
  return (
    <section className="shell flex max-w-3xl flex-col items-start gap-8">
      <SectionHeading as="h1" eyebrow={eyebrow.privacy} title={privacy.title} />
      <p className="type-body whitespace-pre-line">{privacy.body}</p>
    </section>
  );
}
