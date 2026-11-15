import { getContent } from "@/content";

/** The two HISANO banners, cross-fading (styles in motion.css). */
export async function HeroBanners() {
  const { heroBanners } = await getContent();
  return (
    <div className="hero-banners">
      {heroBanners.map((banner, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={banner.src}
          src={banner.src}
          alt={banner.alt}
          width={1280}
          height={512}
          fetchPriority={i === 0 ? "high" : "low"}
          aria-hidden={i > 0}
          className="hero-banner"
        />
      ))}
    </div>
  );
}
