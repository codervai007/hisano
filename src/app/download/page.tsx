import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { downloadPage } from "@/content/site";
import { eyebrow } from "@/content/labels";

export const metadata: Metadata = { title: `${downloadPage.title} | HISANO` };

export default function DownloadPage() {
  return (
    <section className="shell flex max-w-3xl flex-col items-start gap-8">
      <SectionHeading as="h1" eyebrow={eyebrow.download} title={downloadPage.title} />
      <p className="type-body">{downloadPage.lead}</p>
      <ContactForm subject="HISANO 資料請求" submitLabel={downloadPage.submit} />
    </section>
  );
}
