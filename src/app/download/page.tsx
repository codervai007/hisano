import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { downloadPage } from "@/content/site";

export const metadata: Metadata = { title: `${downloadPage.title} | HISANO` };

export default function DownloadPage() {
  return (
    <section className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-6 md:px-12">
      <h1 className="font-serif text-4xl font-bold">{downloadPage.title}</h1>
      <p className="leading-loose text-ink-soft">{downloadPage.lead}</p>
      <ContactForm subject="HISANO 資料請求" submitLabel={downloadPage.submit} />
    </section>
  );
}
