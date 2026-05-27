import Link from "next/link";
import { Logo } from "./Logo";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

export function Footer() {
  const columns: { title: string; links: { href: string; label: string }[] }[] = [
    {
      title: "Services",
      links: [
        { href: "/services", label: "All services" },
        ...services.slice(0, 8).map((s) => ({ href: `/services/${s.slug}`, label: s.name })),
        { href: "/services/mail-in", label: "Mail-in" },
      ],
    },
    {
      title: "Locations",
      links: [
        { href: "/locations", label: "All locations" },
        ...locations.map((l) => ({ href: `/locations/${l.slug}`, label: l.city })),
        { href: "/franchise", label: "Franchise" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "Our story" },
        { href: "/blog", label: "Blog" },
        { href: "/reviews", label: "Reviews" },
        { href: "/klean-club", label: "Klean Club" },
        { href: "/shop", label: "Shop" },
      ],
    },
    {
      title: "Support",
      links: [
        { href: "/help", label: "Help & Support" },
        { href: "/help/faqs", label: "FAQs" },
        { href: "/contact", label: "Contact" },
        { href: "/account", label: "Account" },
        { href: "/app", label: "Get the app" },
      ],
    },
  ];

  return (
    <footer className="bg-ink-950 text-white">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 py-16 md:py-20 grid md:grid-cols-[1.4fr_1fr] gap-10 items-end">
          <div>
            <div className="eyebrow text-brand-300">Klean Club</div>
            <h2 className="mt-3 text-[40px] md:text-[56px] font-semibold tracking-[-0.03em] leading-[1.02] text-balance">
              Care that scales with the rotation.
            </h2>
            <p className="mt-4 text-[16px] md:text-[18px] text-white/65 max-w-xl leading-relaxed">
              Membership is built for collectors. Priority turnaround, member pricing, monthly care credit, and pickup in studio cities.
            </p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <Link
              href="/klean-club/join"
              className="inline-flex items-center h-12 px-6 rounded-full bg-white text-ink-900 text-[15px] font-medium hover:bg-white/90 transition-colors"
            >
              Join Klean Club
            </Link>
            <Link
              href="/klean-club"
              className="inline-flex items-center h-12 px-6 rounded-full ring-1 ring-white/20 text-white text-[15px] font-medium hover:bg-white/5 transition-colors"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.4fr_4fr] gap-12">
          <div>
            <Logo invert />
            <p className="mt-6 max-w-xs text-[14px] text-white/55 leading-relaxed">
              Premium sneaker cleaning, restoration, and care. Trusted by collectors. Built to preserve every investment.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[
                ["Instagram", "https://instagram.com"],
                ["TikTok", "https://tiktok.com"],
                ["YouTube", "https://youtube.com"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-[13px] text-white/55 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="eyebrow text-brand-300 mb-4">{col.title}</div>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-white/65 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-[12px] text-white/45">
            © {new Date().getFullYear()} Sneakky Klean. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {[
              ["/legal/privacy-policy", "Privacy"],
              ["/legal/terms-and-conditions", "Terms"],
              ["/legal/cookie-policy", "Cookies"],
              ["/legal/refund-policy", "Refunds"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="text-[12px] text-white/45 hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
