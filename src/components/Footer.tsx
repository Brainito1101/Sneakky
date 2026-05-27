"use client";

import Link from "next/link";
import { Logo } from "./Logo";

const servicesLinks = [
  { href: "/services#cleaning", label: "Cleaning" },
  { href: "/services#restoration", label: "Restoration" },
  { href: "/services#treatment", label: "Treatments" },
  { href: "/services#accessory", label: "Other Items" },
  { href: "/services/mail-in", label: "Mail-in" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
  { href: "/reviews", label: "Reviews" },
  { href: "/franchise", label: "Franchise" },
  { href: "/klean-club", label: "Klean Club" },
];

const supportLinks = [
  { href: "/help", label: "Help & Support" },
  { href: "/help/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact Us" },
  { href: "/account", label: "Track Order" },
  { href: "/app", label: "Get the App" },
];

const legalLinks = [
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/legal/cookie-policy", label: "Cookie Policy" },
  { href: "/legal/refund-policy", label: "Refund Policy" },
];

const locationLinks = [
  { href: "/locations/miami", label: "Miami" },
  { href: "/locations/new-york", label: "New York" },
  { href: "/locations/saskatoon", label: "Saskatoon" },
];

const paymentBadges = ["Visa", "Mastercard", "Amex", "Apple Pay", "Google Pay"];

const socials: { label: string; href: string; icon: React.ReactNode }[] = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden>
        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden>
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden>
        <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.339 18.337v-8.59H5.667v8.59h2.672zm-1.337-9.75c.855 0 1.55-.706 1.55-1.578 0-.872-.695-1.578-1.55-1.578-.856 0-1.551.706-1.551 1.578 0 .872.695 1.578 1.551 1.578zM18.338 18.337v-4.71c0-2.318-.502-4.102-3.21-4.102-1.302 0-2.176.714-2.534 1.39h-.036v-1.178h-2.562v8.6h2.67v-4.255c0-1.123.214-2.207 1.605-2.207 1.371 0 1.39 1.282 1.39 2.28v4.182h2.677z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden>
        <path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0115.54 3h-3.09v12.4a2.59 2.59 0 01-2.59 2.5c-1.43 0-2.61-1.17-2.61-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.7 5.7 3.15 0 5.7-2.55 5.7-5.7V9.01a7.35 7.35 0 004.3 1.38V7.3s-1.88.09-3.25-1.48z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white">
      {/* Soft brand glow for depth without losing the dark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 100% 0%, rgba(110,197,227,0.16) 0%, transparent 60%), radial-gradient(40% 60% at 0% 100%, rgba(110,197,227,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative">
        {/* ─── 1. Sleek newsletter band ─── */}
        <NewsletterBand />

        {/* ─── 2. Logo + 4 columns ─── */}
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_3fr] gap-12 lg:gap-20">
            <div>
              <Logo size="footer" variant="blue" />
              <p className="mt-6 max-w-sm text-[14.5px] md:text-[15px] text-white/70 leading-[1.65]">
                Premium sneaker cleaning, restoration, and care. Engineered for the collectors, athletes, and everyday icons who care about their pairs.
              </p>
              <ul className="mt-8 flex items-center gap-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/15 bg-white/[0.04] text-white hover:bg-white hover:text-ink-950 hover:ring-white transition-all"
                    >
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
              <FooterColumn title="Services" links={servicesLinks} />
              <FooterColumn title="Company" links={companyLinks} />
              <FooterColumn title="Support" links={supportLinks} />
              <FooterColumn title="Legal" links={legalLinks} />
            </div>
          </div>
        </div>

        {/* ─── 3. Studios + region ─── */}
        <div className="border-t border-white/10">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 py-6 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-300">
                Studios
              </span>
              <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] text-white/75">
                {locationLinks.map((loc, i) => (
                  <li key={loc.href} className="inline-flex items-center gap-2">
                    {i > 0 && <span aria-hidden className="text-white/30">·</span>}
                    <Link href={loc.href} className="hover:text-white hover:underline underline-offset-4 transition-colors">
                      {loc.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 h-10 px-4 rounded-full ring-1 ring-white/15 bg-white/[0.04] text-[13px] text-white/85 hover:bg-white/10 hover:text-white transition-colors self-start md:self-auto"
              aria-label="Change region"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M1.5 7h11M7 1.5c1.8 2 1.8 9 0 11M7 1.5c-1.8 2-1.8 9 0 11" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              United States · English
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* ─── 4. Copyright + trust ─── */}
        <div className="border-t border-white/10">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 py-5 md:py-6 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="text-[12.5px] text-white/55">
              © {new Date().getFullYear()} Sneakky Klean Inc. Made with care in North America.
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-white/55">
              <span className="hidden sm:inline-flex items-center gap-2">
                {paymentBadges.map((p) => (
                  <span
                    key={p}
                    className="px-2 py-1 rounded-md bg-white/[0.06] ring-1 ring-white/10 text-[10.5px] font-medium tracking-[-0.005em] text-white/85"
                  >
                    {p}
                  </span>
                ))}
              </span>
              <span aria-hidden className="hidden sm:inline text-white/25">·</span>
              <span>
                Design by{" "}
                <a
                  href="https://brainito.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white hover:underline underline-offset-4"
                >
                  Brainito INC
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NewsletterBand() {
  return (
    <div className="border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-center">
        <div>
          <h2 className="text-[26px] sm:text-[30px] md:text-[34px] font-semibold tracking-[-0.025em] leading-[1.1] text-balance text-white">
            Care for the kicks you love.
          </h2>
          <p className="mt-2 max-w-md text-[13.5px] md:text-[14px] text-white/65 leading-[1.55]">
            One email a month. Drop news, restoration stories, and the small things we learn at the bench.
          </p>
        </div>

        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="footer-email" className="sr-only">
            Email address
          </label>
          <div className="flex items-center h-12 rounded-full bg-white/[0.06] backdrop-blur-sm ring-1 ring-white/15 hover:ring-white/30 focus-within:ring-white/40 transition-all pl-5 pr-1.5">
            <input
              id="footer-email"
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 bg-transparent text-[14px] text-white placeholder:text-white/45 outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="inline-flex items-center justify-center gap-1.5 h-9 px-5 rounded-full bg-white text-ink-950 text-[13px] font-medium hover:bg-white/85 transition-colors"
            >
              <span className="hidden sm:inline">Subscribe</span>
              <span aria-hidden className="text-[14px] leading-none">→</span>
            </button>
          </div>
          <p className="mt-2.5 pl-5 text-[11.5px] text-white/45">
            By subscribing you agree to our{" "}
            <Link href="/legal/privacy-policy" className="underline underline-offset-2 hover:text-white/80">
              Privacy Policy
            </Link>
            . Unsubscribe anytime.
          </p>
        </form>
      </div>
    </div>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-300">
        {title}
      </h3>
      <span aria-hidden className="mt-3 block h-px w-8 bg-white/25" />
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-1 text-[14px] text-white/70 hover:text-white transition-colors"
            >
              <span className="transition-transform group-hover:translate-x-0.5">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
