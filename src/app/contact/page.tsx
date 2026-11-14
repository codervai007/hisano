import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { contactPage } from "@/content/site";
import { eyebrow } from "@/content/labels";

export const metadata: Metadata = { title: `${contactPage.title} | HISANO` };

export default function ContactPage() {
  return (
    <section className="shell flex max-w-3xl flex-col items-start gap-8">
      <SectionHeading as="h1" eyebrow={eyebrow.contact} title={contactPage.title} />
      <p className="type-body">{contactPage.lead}</p>
      <ContactForm
        subject="HISANO お問い合わせ"
        submitLabel={contactPage.submit}
        withMessage
      />
    </section>
  );
}
