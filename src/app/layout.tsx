import type { Metadata } from "next";
import "./globals.css";
import "./motion.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/content/site";
import { themeInitScript } from "@/lib/theme";

/**
 * Fonts come from Google Fonts at runtime, the same way the VNT GROUP site
 * loads them: a build-time fetch through next/font/google can fail on
 * Vercel's build machines. The CSS variables are set in globals.css.
 */
const GOOGLE_FONTS_CSS =
  "https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;500;600;700&family=Zen+Kaku+Gothic+New:wght@400;500;700&family=Cormorant+Garamond:wght@400;500;600&display=swap";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_CSS} />
      </head>
      <body>
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop label="ページの先頭へ" />
      </body>
    </html>
  );
}
