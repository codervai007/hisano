import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { contactPage } from "@/content/site";

export const metadata: Metadata = { title: `${contactPage.title} | HISANO` };

export default function ContactPage() {
  return (
    <section className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-6 md:px-12">
      <h1 className="font-serif text-4xl font-bold">{contactPage.title}</h1>
      <p className="leading-loose text-ink-soft">{contactPage.lead}</p>
      <ContactForm
        subject="HISANO お問い合わせ"
        submitLabel={contactPage.submit}
        withMessage
      />
    </section>
  );
}
