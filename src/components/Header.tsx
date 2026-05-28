"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { services, serviceCategories, ServiceCategory } from "@/data/services";
import { locations } from "@/data/locations";

type MenuKey = "services" | "locations" | "klean-club" | "shop" | "company" | null;

type NavItem = {
  key: Exclude<MenuKey, null>;
  label: string;
  href?: string;
  hasMenu?: boolean;
};

const navItems: NavItem[] = [
  { key: "services", label: "Services", href: "/services", hasMenu: true },
  { key: "locations", label: "Locations", href: "/locations", hasMenu: true },
  { key: "klean-club", label: "Klean Club", href: "/klean-club", hasMenu: true },
  { key: "shop", label: "Shop", href: "/shop", hasMenu: true },
  { key: "company", label: "Company", hasMenu: true },
];

export function Header() {
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  // Small grace period so the cursor can travel from trigger → panel
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const openMenu = (key: MenuKey) => {
    cancelClose();
    setOpen(key);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "bg-white/85 backdrop-blur-2xl border-b border-black/[0.05]"
          : "bg-white/0 border-b border-transparent"
      }`}
      onMouseLeave={scheduleClose}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10">
        <div className="h-[88px] sm:h-[96px] md:h-[112px] lg:h-[128px] flex items-center justify-between gap-4">
          <Logo />

          <nav className="hidden lg:flex items-center" aria-label="Primary">
            {navItems.map((item) => (
              <NavTrigger
                key={item.key}
                item={item}
                active={open === item.key}
                onEnter={() => openMenu(item.key)}
              />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/account"
              className="hidden md:inline-flex h-10 items-center px-5 text-[14px] font-medium text-ink-900 border border-black rounded-full transition-all duration-150 hover:text-brand-700 hover:scale-[1.03] hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-200"
              onMouseEnter={scheduleClose}
            >
              Sign in
            </Link>
            <Link
              href="/book"
              onMouseEnter={scheduleClose}
              className="hidden md:inline-flex h-10 items-center px-5 rounded-full bg-ink-900 text-white text-[13.5px] font-medium tracking-[-0.005em] transition-all duration-150 hover:bg-ink-950 hover:scale-[1.02] hover:shadow-[0_8px_28px_-10px_rgba(0,0,0,0.45)] focus:outline-none focus:ring-2 focus:ring-brand-200"
            >
              Book a service
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              onPointerDown={(e) => {
                // pointer events improve responsiveness on touch devices
                e.preventDefault();
                setMobileOpen((v) => !v);
              }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="lg:hidden inline-flex h-11 w-11 -mr-2 items-center justify-center text-ink-900 relative z-[70]"
              style={{ touchAction: "manipulation" }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d={mobileOpen ? "M4.5 4.5l11 11M15.5 4.5l-11 11" : "M2.5 7h15M2.5 13h15"}
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mega panel */}
      <div
        className={`absolute left-0 right-0 top-full overflow-hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        <div
          className={`relative bg-white border-b border-black/[0.08] shadow-[0_24px_48px_-24px_rgba(15,23,42,0.18)] transition-[opacity,transform] duration-300 ease-out ${
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
          }`}
        >
          {/* Brand gradient header strip — color sits at the top, type sits on white */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-32"
            style={{
              background:
                "linear-gradient(180deg, rgba(110,197,227,0.14) 0%, rgba(217,241,248,0.45) 40%, rgba(255,255,255,0) 100%)",
            }}
          />
          {/* Top accent rule */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(110,197,227,0.55) 50%, transparent 100%)",
            }}
          />
          <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 py-10 md:py-12">
            {open === "services" && <ServicesPanel />}
            {open === "locations" && <LocationsPanel />}
            {open === "klean-club" && <KleanClubPanel />}
            {open === "shop" && <ShopPanel />}
            {open === "company" && <CompanyPanel />}
          </div>
        </div>
      </div>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </header>
  );
}

function NavTrigger({
  item,
  active,
  onEnter,
}: {
  item: NavItem;
  active: boolean;
  onEnter: () => void;
}) {
  const inner = (
    <span className="inline-flex items-center gap-1.5">
      <span
        className={`text-[14px] font-medium tracking-[-0.005em] transition-colors ${
          active ? "text-brand-700" : "text-ink-900 group-hover:text-brand-700"
        }`}
      >
        {item.label}
      </span>
      {item.hasMenu && (
        <svg
          aria-hidden
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          className={`transition-transform duration-200 ${
            active ? "rotate-180 text-brand-700" : "text-ink-700 group-hover:text-brand-700"
          }`}
        >
          <path
            d="M2 3.5l3 3 3-3"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  );

  const baseCls =
    "group h-[88px] sm:h-[96px] md:h-[112px] lg:h-[128px] inline-flex items-center px-3 xl:px-4";

  return item.href ? (
    <Link href={item.href} onMouseEnter={onEnter} onFocus={onEnter} className={baseCls}>
      {inner}
    </Link>
  ) : (
    <button type="button" onMouseEnter={onEnter} onFocus={onEnter} className={baseCls}>
      {inner}
    </button>
  );
}

/* ─────────── Panels ─────────── */

function PanelHeader({
  eyebrow,
  title,
  href,
  ctaLabel,
}: {
  eyebrow: string;
  title: string;
  href: string;
  ctaLabel: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8 md:mb-10">
      <div>
        <div className="text-[11px] uppercase tracking-[0.18em] text-brand-800 font-semibold">
          {eyebrow}
        </div>
        <div className="mt-2 text-[20px] md:text-[22px] font-semibold tracking-[-0.02em] text-ink-950">
          {title}
        </div>
      </div>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-700 hover:text-brand-900 transition-colors"
      >
        {ctaLabel}
        <span aria-hidden className="text-[15px] leading-none translate-y-[-1px]">→</span>
      </Link>
    </div>
  );
}

function LinkList({
  items,
  cols = 2,
}: {
  items: { href: string; label: string; sub?: string }[];
  cols?: 1 | 2 | 3 | 4;
}) {
  const colsClass =
    cols === 4
      ? "md:grid-cols-4"
      : cols === 3
      ? "md:grid-cols-3"
      : cols === 2
      ? "md:grid-cols-2"
      : "md:grid-cols-1";

  return (
    <ul className={`grid grid-cols-1 ${colsClass} gap-x-8 md:gap-x-12 gap-y-0`}>
      {items.map((item) => (
        <li key={item.href} className="group">
          <Link
            href={item.href}
            className="flex items-baseline justify-between gap-6 py-3 border-b border-ink-200 hover:border-brand-500 transition-colors"
          >
            <span className="text-[14.5px] font-normal tracking-[-0.005em] text-ink-950 group-hover:text-brand-700 transition-colors">
              {item.label}
            </span>
            {item.sub && (
              <span className="text-[12px] font-normal text-ink-700 shrink-0">{item.sub}</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ServicesPanel() {
  const categories = Object.entries(serviceCategories) as [
    ServiceCategory,
    (typeof serviceCategories)[ServiceCategory],
  ][];

  return (
    <div>
      <PanelHeader
        eyebrow="Services"
        title="Studio-grade care for every material."
        href="/services"
        ctaLabel="All services"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-8">
        {categories.map(([key, meta]) => {
          const items = services.filter((s) => s.category === key);
          return (
            <div key={key}>
              <div className="text-[11px] uppercase tracking-[0.18em] text-brand-800 font-semibold pb-3 border-b-2 border-brand-500/40">
                {meta.title}
              </div>
              <ul>
                {items.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="block py-2.5 text-[14px] font-normal tracking-[-0.005em] text-ink-950 hover:text-brand-700 transition-colors border-b border-ink-200 hover:border-brand-500"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LocationsPanel() {
  return (
    <div>
      <PanelHeader
        eyebrow="Locations"
        title="Three studios. Mail-in anywhere."
        href="/locations"
        ctaLabel="All locations"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
        <LinkList
          items={locations.map((loc) => ({
            href: `/locations/${loc.slug}`,
            label: loc.city,
            sub: `${loc.region}, ${loc.country}`,
          }))}
          cols={1}
        />
        <LinkList
          items={[
            { href: "/services/mail-in", label: "Mail-in Service", sub: "North America" },
            { href: "/franchise", label: "Open a studio", sub: "Franchise" },
            { href: "/contact", label: "Contact a studio", sub: "Direct" },
          ]}
          cols={1}
        />
      </div>
    </div>
  );
}

function KleanClubPanel() {
  return (
    <div>
      <PanelHeader
        eyebrow="Klean Club"
        title="Membership built for the rotation."
        href="/klean-club"
        ctaLabel="Learn more"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
        <LinkList
          items={[
            { href: "/klean-club", label: "Membership overview" },
            { href: "/klean-club/join", label: "Join Klean Club" },
            { href: "/account", label: "Manage membership" },
          ]}
          cols={1}
        />
        <LinkList
          items={[
            { href: "/klean-club", label: "Essentials", sub: "$24/mo" },
            { href: "/klean-club", label: "Signature", sub: "$49/mo" },
            { href: "/klean-club", label: "Archive", sub: "$129/mo" },
          ]}
          cols={1}
        />
      </div>
    </div>
  );
}

function ShopPanel() {
  return (
    <div>
      <PanelHeader
        eyebrow="Shop"
        title="Studio products. At home."
        href="/shop"
        ctaLabel="All products"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
        <LinkList
          items={[
            { href: "/shop/sneakky-klean-wipes", label: "Sneakky Klean Wipes", sub: "$14" },
            { href: "/shop/sneaker-care-kits", label: "Sneaker Care Kits", sub: "$78" },
          ]}
          cols={1}
        />
        <LinkList
          items={[
            { href: "/shop", label: "Shop all" },
            { href: "/contact", label: "Wholesale & bulk" },
          ]}
          cols={1}
        />
      </div>
    </div>
  );
}

function CompanyPanel() {
  return (
    <div>
      <PanelHeader
        eyebrow="Company"
        title="Built on craft. Quietly."
        href="/about"
        ctaLabel="About us"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
        <LinkList
          items={[
            { href: "/about", label: "Our story" },
            { href: "/reviews", label: "Reviews" },
            { href: "/blog", label: "Journal" },
            { href: "/franchise", label: "Franchise" },
          ]}
          cols={1}
        />
        <LinkList
          items={[
            { href: "/help", label: "Help & Support" },
            { href: "/help/faqs", label: "FAQs" },
            { href: "/contact", label: "Contact" },
            { href: "/app", label: "Get the app" },
          ]}
          cols={1}
        />
      </div>
    </div>
  );
}

/* ─────────── Mobile ─────────── */

function MobileMenu({ onClose }: { onClose: () => void }) {
  const sections: {
    title: string;
    href?: string;
    links: { href: string; label: string }[];
  }[] = [
    {
      title: "Services",
      href: "/services",
      links: [
        { href: "/services", label: "All services" },
        ...services
          .slice(0, 6)
          .map((s) => ({ href: `/services/${s.slug}`, label: s.name })),
      ],
    },
    {
      title: "Locations",
      href: "/locations",
      links: [
        { href: "/locations", label: "All locations" },
        ...locations.map((l) => ({ href: `/locations/${l.slug}`, label: l.city })),
      ],
    },
    {
      title: "Klean Club",
      href: "/klean-club",
      links: [
        { href: "/klean-club", label: "Membership" },
        { href: "/klean-club/join", label: "Join" },
      ],
    },
    {
      title: "Shop",
      href: "/shop",
      links: [
        { href: "/shop", label: "All products" },
        { href: "/shop/sneakky-klean-wipes", label: "Wipes" },
        { href: "/shop/sneaker-care-kits", label: "Care kits" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About" },
        { href: "/reviews", label: "Reviews" },
        { href: "/blog", label: "Journal" },
        { href: "/help", label: "Help" },
        { href: "/franchise", label: "Franchise" },
        { href: "/contact", label: "Contact" },
      ],
    },
  ];

  return (
    <div
      className="lg:hidden fixed inset-0 z-[60] overflow-y-auto"
      style={{
        background:
          "linear-gradient(180deg, rgba(217,241,248,0.7) 0%, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 100%)",
      }}
    >
      {/* Menu top bar with logo + close */}
      <div className="sticky top-0 z-10 bg-white/85 backdrop-blur-xl border-b border-black/[0.06]">
        <div className="max-w-[640px] mx-auto px-5 sm:px-6 h-[88px] sm:h-[96px] flex items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center text-ink-900"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4.5 4.5l11 11M15.5 4.5l-11 11" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="px-5 sm:px-6 py-8 max-w-[640px] mx-auto">
          <div className="flex items-center gap-3 mb-10">
          <Link
            href="/book"
            onClick={onClose}
            className="flex-1 inline-flex items-center justify-center h-12 rounded-full bg-ink-900 text-white text-[14px] font-medium transition-all duration-150 hover:scale-[1.02] hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)]"
          >
            Book a service
          </Link>
          <Link
            href="/account"
            onClick={onClose}
            className="inline-flex items-center justify-center h-12 px-5 rounded-full ring-1 ring-black/[0.08] text-ink-900 text-[14px] font-medium transition-all duration-150 hover:scale-[1.02] hover:shadow-sm"
          >
            Sign in
          </Link>
        </div>
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="text-[11px] uppercase tracking-[0.18em] text-brand-800 font-semibold mb-3 pb-2 border-b-2 border-brand-500/40">
                {section.title}
              </div>
              <ul>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center justify-between py-3.5 text-[16px] font-normal tracking-[-0.01em] text-ink-950 active:text-brand-700 border-b border-ink-200"
                    >
                      {link.label}
                      <span aria-hidden className="text-brand-700 text-[15px]">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
