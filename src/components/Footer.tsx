import Link from "next/link";
import { footer, intro, nav, rakuten, site } from "@/content/site";
import { footerLabels } from "@/content/labels";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer mt-28">
      <div aria-hidden className="bg-seigaiha h-10 border-y border-gold/30" />
      <div className="shell grid gap-x-16 gap-y-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col items-start gap-5">
          <Link href="/" className="text-[#003c9d] dark:text-white">
            <Logo className="h-12 w-auto" />
          </Link>
          <p className="type-heading text-lg">{intro.title}</p>
          <p className="max-w-sm text-[0.875rem] leading-[2] tracking-[0.05em] text-stone">
            {site.description}
          </p>
        </div>

        <nav aria-label={footerLabels.menu} className="flex flex-col gap-1">
          <p className="footer-heading">{footerLabels.menu}</p>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="footer-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-1">
          <p className="footer-heading">{footerLabels.info}</p>
          <Link href="/privacypolicy" className="footer-link">
            {footer.privacy}
          </Link>
          <a href={site.operatorUrl} target="_blank" rel="noopener noreferrer" className="footer-link">
            {footer.operator}
          </a>
          <a href={rakuten.href} target="_blank" rel="noopener noreferrer" className="footer-link">
            {footerLabels.rakuten}
          </a>
        </div>
      </div>
      <div className="border-t border-ink/10">
        <p className="shell font-latin py-6 text-center text-base tracking-[0.12em] text-stone">
          {site.copyright}
        </p>
      </div>
    </footer>
  );
}
