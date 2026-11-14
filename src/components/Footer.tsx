import Link from "next/link";
import { footer, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-28 border-t border-ink/10">
      <div className="shell flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-8 text-[0.8125rem] tracking-[0.06em] text-stone">
        <span className="font-latin text-base tracking-[0.1em]">{site.copyright}</span>
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
      </div>
    </footer>
  );
}
