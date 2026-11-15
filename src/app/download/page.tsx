import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { getContent } from "@/content";

export async function generateMetadata(): Promise<Metadata> {
  const { downloadPage } = await getContent();
  return { title: `${downloadPage.title} | HISANO` };
}

export default async function DownloadPage() {
  const { eyebrow, formLabels, formSubjects, downloadPage } = await getContent();
  return (
    <section className="shell flex max-w-3xl flex-col gap-8">
      <SectionHeading as="h1" eyebrow={eyebrow.download} title={downloadPage.title} center />
      <p className="type-body text-center">{downloadPage.lead}</p>
      <ContactForm formLabels={formLabels}
        subject={formSubjects.download} submitLabel={downloadPage.submit} />
    </section>
  );
}
