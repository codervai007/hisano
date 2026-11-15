import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { getContent } from "@/content";

export async function generateMetadata(): Promise<Metadata> {
  const { contactPage } = await getContent();
  return { title: `${contactPage.title} | HISANO` };
}

export default async function ContactPage() {
  const { eyebrow, formLabels, formSubjects, contactPage } = await getContent();
  return (
    <section className="shell flex max-w-3xl flex-col gap-8">
      <SectionHeading as="h1" eyebrow={eyebrow.contact} title={contactPage.title} center />
      <p className="type-body text-center">{contactPage.lead}</p>
      <ContactForm
        formLabels={formLabels}
        subject={formSubjects.contact}
        submitLabel={contactPage.submit}
        withMessage
      />
    </section>
  );
}
