import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { shark } from "@/content/site";
import { eyebrow } from "@/content/labels";

export const metadata: Metadata = { title: `${shark.name} | HISANO`, description: shark.lead };

export default function SharkCartilagePage() {
  return (
    <>
      <section className="shell flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
        <Image
          src={shark.pack.src}
          alt={shark.pack.alt}
          width={shark.pack.width}
          height={shark.pack.height}
          priority
          sizes="(min-width: 48rem) 16rem, 60vw"
          className="photo-card h-auto w-[min(60vw,16rem)]"
        />
        <div className="flex min-w-0 flex-[1_1_20rem] flex-col items-start gap-8 md:max-w-xl">
          <SectionHeading as="h1" eyebrow={eyebrow.products} title={shark.name} />
          <p className="type-body">{shark.lead}</p>
        </div>
      </section>

      <section className="shell mt-20 flex flex-col items-center gap-8">
        {shark.images.map((img, i) => (
          <Reveal key={img.src} className="w-full max-w-3xl">
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              priority={i === 0}
              sizes="(min-width: 48rem) 48rem, 100vw"
              className="photo-card h-auto w-full"
            />
          </Reveal>
        ))}
      </section>

      <CtaBand />
    </>
  );
}
