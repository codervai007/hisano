import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { getContent } from "@/content";

export async function generateMetadata(): Promise<Metadata> {
  const { privacy } = await getContent();
  return { title: `${privacy.title} | HISANO` };
}

export default async function PrivacyPage() {
  const { eyebrow, privacy } = await getContent();
  return (
    <section className="shell flex max-w-3xl flex-col gap-8">
      <SectionHeading as="h1" eyebrow={eyebrow.privacy} title={privacy.title} center />
      <p className="type-body whitespace-pre-line">{privacy.body}</p>
    </section>
  );
}
