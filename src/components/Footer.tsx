import Link from "next/link";
import { footer, nav, site } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="ocean ocean-calm ocean-footer mt-28">
      <div className="shell flex flex-col gap-10 py-14">
        <div className="flex flex-wrap items-start justify-between gap-x-12 gap-y-8">
          <Link href="/" className="footer-logo">
            <Logo className="h-11 w-auto" />
          </Link>
          <nav aria-label="フッター" className="flex flex-wrap gap-x-8 gap-y-1 text-[0.9375rem] tracking-[0.08em]">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="flex min-h-11 items-center">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-t border-white/15 pt-6 text-[0.8125rem] tracking-[0.06em]">
          <span className="font-latin text-base tracking-[0.1em] text-white/70">{site.copyright}</span>
          <span className="flex flex-wrap gap-x-6">
            <Link href="/privacypolicy" className="flex min-h-11 items-center">
              {footer.privacy}
            </Link>
            <a
              href={site.operatorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center"
            >
              {footer.operator}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
