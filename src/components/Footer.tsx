import Link from "next/link";
import { footer, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mx-auto mt-24 flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 pb-12 text-sm text-ink-soft md:px-12">
      <span>{site.copyright}</span>
      <span className="flex flex-wrap gap-x-6">
        <Link href="/privacypolicy" className="flex min-h-11 items-center hover:text-brand">
          {footer.privacy}
        </Link>
        <a
          href={site.operatorUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-11 items-center hover:text-brand"
        >
          {footer.operator}
        </a>
      </span>
    </footer>
  );
}
