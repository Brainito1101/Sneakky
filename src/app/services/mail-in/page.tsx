import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";
import { BookCta } from "@/components/BookCta";

/* Image library used by Services Offered tiles */
const IMG = {
  cleaning:
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1400&q=80",
  restoration:
    "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1400&q=80",
  treatments:
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1400&q=80",
};

export const metadata: Metadata = {
  title: "Mail-in Service · The studio shipped to your door",
  description:
    "Premium sneaker cleaning and restoration, available anywhere in North America. Prepaid label in, fully insured both ways, returned in 7 to 10 days.",
};

export default function MailInPage() {
  return (
    <>
      <Hero />
      <Process />
      <ServicesOffered />
      <Pricing />
      <Reviews />
      <FAQs />
      <FinalCta />
    </>
  );
}

/* Stylised wordmarks evoking each brand without using protected logos. */
const BRANDS: { name: string; cls: string }[] = [
  { name: "JORDAN", cls: "font-extrabold tracking-[0.04em]" },
  { name: "YEEZY", cls: "font-bold tracking-[0.30em]" },
  { name: "OFF-WHITE", cls: "font-bold tracking-[0.04em]" },
  { name: "NIKE", cls: "font-bold italic tracking-[-0.04em]" },
  { name: "LOUBOUTIN", cls: "font-light tracking-[0.20em]" },
  { name: "LOUIS VUITTON", cls: "font-light tracking-[0.16em]" },
  { name: "On", cls: "font-semibold tracking-[-0.02em]" },
  { name: "SALOMON", cls: "font-semibold tracking-[0.16em]" },
];

/* ─────────────── 1. Hero ─────────────── */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-ink-950">
      {/* Brand wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 70% at 90% 0%, rgba(110,197,227,0.18) 0%, transparent 60%), radial-gradient(40% 60% at 0% 100%, rgba(110,197,227,0.10) 0%, transparent 60%), linear-gradient(180deg, #f3fbff 0%, #ffffff 70%)",
        }}
      />

      <Container className="relative pt-12 sm:pt-20 md:pt-24 lg:pt-28 pb-14 sm:pb-20 md:pb-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-white ring-1 ring-brand-200 shadow-[0_6px_18px_-8px_rgba(110,197,227,0.45)] text-[12.5px] font-medium text-ink-900">
            <GlobeDot />
            Anywhere in North America
          </div>

          <h1 className="mt-7 text-[40px] sm:text-[60px] md:text-[76px] lg:text-[88px] font-semibold tracking-[-0.04em] leading-[0.98] text-balance">
            The studio,{" "}
            <span className="italic font-light text-brand-600">shipped</span> to
            your door.
          </h1>

          <p className="mt-7 max-w-2xl text-[16px] sm:text-[18px] text-ink-700 leading-[1.6] text-pretty">
            No studio in your city? Send us your pairs from anywhere in North
            America. Prepaid label in, fully insured both ways, and returned
            cleaner, faster, and packaged to a standard you'll notice.
          </p>

          <div className="mt-9">
            <BookCta />
          </div>
        </div>
      </Container>

      {/* Trust strip */}
      <div className="relative border-t border-ink-200/70 bg-white/60 backdrop-blur-sm">
        <Container className="py-7 md:py-9">
          <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-brand-700 text-center md:text-left">
            Trusted with Jordans, Yeezys, Off-Whites, Dunks, Louboutins, and
            every pair in between
          </div>
          <ul className="mt-5 md:mt-6 flex items-center flex-wrap justify-center md:justify-between gap-x-7 md:gap-x-9 gap-y-3 px-2">
            {BRANDS.map((b) => (
              <li
                key={b.name}
                className={`text-ink-500 hover:text-ink-950 transition-colors text-[14px] sm:text-[15px] md:text-[16px] whitespace-nowrap ${b.cls}`}
              >
                {b.name}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}

/* ─────────────── 2. Process ─────────────── */
function Process() {
  const steps: {
    title: string;
    copy: string;
    icon: React.ReactNode;
  }[] = [
    {
      title: "Book online",
      copy: "Pick your service, tell us what's in the box. You'll get a prepaid, fully insured shipping label in your email within minutes.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="5" width="18" height="16" rx="2.5" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="8" y1="3" x2="8" y2="7" />
          <line x1="16" y1="3" x2="16" y2="7" />
          <path d="M9 15l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Pack and ship",
      copy: "Drop your pairs into any box. Hand it to your carrier or schedule a pickup. We'll text you the moment it arrives.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
    {
      title: "We clean, restore, and report",
      copy: "Our specialists inspect, photograph, and clean every pair by hand. You'll get a full condition report, before and after.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
          <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" />
          <path d="M6 16l.6 1.6L8 18l-1.4.4L6 20l-.6-1.6L4 18l1.4-.4z" />
        </svg>
      ),
    },
    {
      title: "Returned to your door",
      copy: "Cleaned, packaged, and shipped back fully insured. Most orders complete in 7 to 10 days from the day we receive them.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 7h13v10H3z" />
          <path d="M16 10h4l2 3v4h-6z" />
          <circle cx="7" cy="18" r="1.6" />
          <circle cx="17" cy="18" r="1.6" />
        </svg>
      ),
    },
  ];

  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Get sneakers back to life in 7 to 10 days."
          description="Sneakers shipped to us. Returned cleaner. Tracked at every step."
          align="center"
        />

        <div className="mt-12 md:mt-16 relative">
          <StepConnectors />
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-14 md:gap-x-4 lg:gap-x-6 items-start">
            {steps.map((s) => (
              <StepCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function StepCard({
  title,
  copy,
  icon,
}: {
  title: string;
  copy: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col items-center text-center px-2">
      <div className="h-[112px] w-[112px] rounded-full ring-1 ring-brand-200 flex items-center justify-center bg-white shadow-[0_12px_32px_-12px_rgba(110,197,227,0.40)]">
        <div className="h-[72px] w-[72px] rounded-full bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center text-brand-700 ring-1 ring-brand-200/70">
          {icon}
        </div>
      </div>
      <h3 className="mt-7 text-[17px] font-semibold tracking-[-0.015em] leading-[1.3] text-ink-950 min-h-[2.6em] max-w-[230px] mx-auto flex items-center justify-center">
        {title}
      </h3>
      <p className="mt-3 text-[14px] text-ink-600 leading-[1.6] max-w-[230px] mx-auto text-pretty">
        {copy}
      </p>
    </div>
  );
}

function StepConnectors() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1000 60"
      preserveAspectRatio="xMidYMid meet"
      className="hidden md:block pointer-events-none absolute inset-x-0 top-[42px] lg:top-[48px] w-full text-brand-300"
    >
      <path d="M 180 30 Q 250 -8 320 30" stroke="currentColor" strokeWidth="1.6" strokeDasharray="4 6" fill="none" strokeLinecap="round" />
      <path d="M 430 30 Q 500 68 570 30" stroke="currentColor" strokeWidth="1.6" strokeDasharray="4 6" fill="none" strokeLinecap="round" />
      <path d="M 680 30 Q 750 -8 820 30" stroke="currentColor" strokeWidth="1.6" strokeDasharray="4 6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ─────────────── 3. Services Offered. Miami animated sweep ─────────────── */
function ServicesOffered() {
  const tiles: { title: string; copy: string; href: string; img: string }[] = [
    {
      title: "Cleaning",
      copy: "Studio-grade cleans for sneakers, suede, leather, white pairs, and more.",
      href: "/services#cleaning",
      img: IMG.cleaning,
    },
    {
      title: "Restoration",
      copy: "Repair, reglue, repaint, deyellow, and rebuild. For pairs that deserve more.",
      href: "/services#restoration",
      img: IMG.restoration,
    },
    {
      title: "Treatments",
      copy: "Oxidation reversal, sole whitening, waterproofing, and deodorising care.",
      href: "/services#treatment",
      img: IMG.treatments,
    },
  ];

  return (
    <Section className="bg-ink-50">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Every service. Available by mail."
          description="From everyday refreshes to full restoration. Every pair is hand-finished by specialists, regardless of where it came from."
          align="center"
        />

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {tiles.map((t, i) => (
            <ServiceTile key={t.title} {...t} delay={i * 800} />
          ))}
        </div>
      </Container>

      {/* Cleaning-sweep animation keyframes */}
      <style>{`
        @keyframes sk-reveal-clean {
          0%, 6%   { clip-path: inset(0 100% 0 0); opacity: 1; }
          50%      { clip-path: inset(0 0% 0 0);   opacity: 1; }
          85%      { clip-path: inset(0 0% 0 0);   opacity: 1; }
          95%      { clip-path: inset(0 0% 0 0);   opacity: 0; }
          100%     { clip-path: inset(0 100% 0 0); opacity: 0; }
        }
        @keyframes sk-sweep-arrow {
          0%, 6%   { left: 0%;   opacity: 0; }
          12%      { left: 0%;   opacity: 1; }
          50%      { left: 100%; opacity: 1; }
          60%      { left: 100%; opacity: 0; }
          100%     { left: 0%;   opacity: 0; }
        }
        .sk-reveal-clean { animation: sk-reveal-clean 6s ease-in-out infinite; will-change: clip-path, opacity; }
        .sk-sweep-arrow  { animation: sk-sweep-arrow  6s ease-in-out infinite; will-change: left, opacity; }
      `}</style>
    </Section>
  );
}

function ServiceTile({
  title,
  copy,
  href,
  img,
  delay = 0,
}: {
  title: string;
  copy: string;
  href: string;
  img: string;
  delay?: number;
}) {
  const animationDelay = `${-delay}ms`;

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-3xl ring-1 ring-black/[0.05] hover:ring-brand-500 transition-all flex flex-col bg-white"
    >
      <div className="relative aspect-[5/4] overflow-hidden bg-ink-100">
        {/* BEFORE: desaturated/warm filter */}
        <Image
          src={img}
          alt={`${title} before treatment`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          style={{
            filter: "saturate(0.5) brightness(0.86) sepia(0.32) contrast(1.04)",
          }}
        />

        {/* AFTER: overlay, clip-path animates */}
        <div
          aria-hidden
          className="absolute inset-0 sk-reveal-clean"
          style={{ animationDelay }}
        >
          <Image
            src={img}
            alt={`${title} after treatment`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Scrubber */}
        <div
          aria-hidden
          className="absolute inset-y-0 sk-sweep-arrow pointer-events-none"
          style={{ animationDelay, width: 0 }}
        >
          <div className="absolute inset-y-0 left-0 -translate-x-1/2 w-px bg-white/85 shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white ring-1 ring-black/[0.06] shadow-[0_8px_18px_-6px_rgba(0,0,0,0.35)] flex items-center justify-center text-ink-950">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Corner chips */}
        <span className="absolute top-4 left-4 inline-flex items-center h-7 px-3 rounded-full bg-ink-950/75 backdrop-blur-sm text-white text-[10.5px] font-semibold uppercase tracking-[0.16em]">
          Before
        </span>
        <span className="absolute top-4 right-4 inline-flex items-center h-7 px-3 rounded-full bg-brand-500 text-ink-950 text-[10.5px] font-semibold uppercase tracking-[0.16em]">
          After
        </span>

        {/* Title overlay */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        <h3 className="absolute bottom-5 left-5 right-5 text-white text-[24px] md:text-[28px] font-semibold tracking-[-0.02em] leading-[1.1]">
          {title}
        </h3>
      </div>

      <div className="p-6 md:p-7 flex items-center justify-between gap-4">
        <p className="text-[14px] text-ink-600 leading-[1.5]">{copy}</p>
        <span
          aria-hidden
          className="flex-none inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink-100 group-hover:bg-brand-500 group-hover:text-white text-ink-700 transition-colors"
        >
          →
        </span>
      </div>
    </Link>
  );
}

/* ─────────────── 4. Pricing ─────────────── */
function Pricing() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Mail-in pricing, no surprises."
          description="Same studio service. Three tiers for one-time cleans, plus restoration. Shipping label included."
          align="center"
        />

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <PricingCard
            name="Essential Clean"
            price="$35"
            priceLabel="Starting at"
            blurb="Quick refresh for everyday sneakers. Uppers, midsoles, and light detailing."
            items={[
              "Upper cleaning",
              "Midsole cleaning",
              "Prepaid shipping label included",
            ]}
            cta="Book this service"
            ctaHref="/book"
          />
          <PricingCard
            name="Signature Clean"
            price="$55"
            priceLabel="Starting at"
            blurb="Complete clean and detail. Deep upper, midsole, undersole, lace wash, and finish."
            items={[
              "Deep upper cleaning",
              "Midsole and undersole cleaning",
              "Lace wash and replacement option",
              "Full detail finish",
              "Prepaid shipping label included",
            ]}
            cta="Book this service"
            ctaHref="/book"
            featured
          />
          <PricingCard
            name="Premium Care"
            price="$85"
            priceLabel="Starting at"
            blurb="Advanced care for high-value, delicate, and specialty sneakers."
            items={[
              "Premium material treatment",
              "Advanced stain removal",
              "Suede, nubuck, and specialty fabric care",
              "Full detail and protection",
              "Prepaid shipping label included",
            ]}
            cta="Book this service"
            ctaHref="/book"
          />
          <PricingCard
            name="Restoration"
            price="$110+"
            priceLabel="From"
            blurb="For heavily worn or damaged sneakers that need more than a clean."
            items={[
              "Oxidation treatment",
              "Paint correction and touch-ups",
              "Specialized restoration work",
              "Custom quote required",
            ]}
            cta="Get a Quote"
            ctaHref="/quote"
            tone="brand"
          />
        </div>

        {/* Klean Club note */}
        <div className="mt-8 rounded-3xl bg-brand-50 ring-1 ring-brand-200 p-6 md:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 text-[14.5px] md:text-[15px] text-ink-900 leading-[1.55]">
            <span
              aria-hidden
              className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 flex-none"
            />
            <span>
              <strong className="text-ink-950">Klean Club</strong> members save
              up to 20% on every mail-in service, plus priority turnaround.
            </span>
          </div>
          <Link
            href="/klean-club/join"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-700 hover:text-brand-900 transition-colors"
          >
            Join Klean Club <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}

function PricingCard({
  name,
  price,
  priceLabel = "Starting at",
  blurb,
  items,
  cta,
  ctaHref,
  featured = false,
  tone = "default",
}: {
  name: string;
  price: string;
  priceLabel?: string;
  blurb: string;
  items: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
  tone?: "default" | "brand";
}) {
  const isFeatured = featured;
  const isBrand = tone === "brand";

  const cardCls = isFeatured
    ? "bg-ink-950 text-white ring-1 ring-brand-500"
    : isBrand
    ? "bg-gradient-to-br from-brand-500 to-brand-700 text-white ring-1 ring-brand-600"
    : "bg-white ring-1 ring-black/[0.05]";

  const labelTone = isFeatured || isBrand ? "text-white/65" : "text-ink-500";
  const priceTone = isFeatured || isBrand ? "text-white" : "text-ink-950";
  const blurbTone = isFeatured || isBrand ? "text-white/80" : "text-ink-600";
  const nameTone = isFeatured || isBrand ? "text-white" : "text-ink-950";
  const itemTone = isFeatured || isBrand ? "text-white/90" : "text-ink-800";
  const dotTone = isFeatured || isBrand ? "bg-brand-300" : "bg-brand-500";

  return (
    <div className={`relative rounded-3xl p-7 md:p-8 flex flex-col ${cardCls}`}>
      {isFeatured && (
        <div className="absolute -top-3 right-6 inline-flex items-center h-6 px-3 rounded-full bg-brand-500 text-ink-950 text-[10.5px] font-bold uppercase tracking-[0.14em]">
          Most popular
        </div>
      )}

      <h3 className={`text-[18px] font-semibold tracking-[-0.015em] ${nameTone}`}>
        {name}
      </h3>
      <div className={`mt-4 text-[12px] ${labelTone}`}>{priceLabel}</div>
      <div className={`mt-1 text-[44px] md:text-[48px] font-semibold tracking-[-0.035em] leading-none ${priceTone}`}>
        {price}
      </div>
      <p className={`mt-5 text-[14px] leading-[1.55] ${blurbTone}`}>{blurb}</p>
      <ul className="mt-5 space-y-2 flex-1">
        {items.map((it) => (
          <li
            key={it}
            className={`flex items-start gap-2.5 text-[13.5px] leading-[1.5] ${itemTone}`}
          >
            <span
              aria-hidden
              className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-none ${dotTone}`}
            />
            {it}
          </li>
        ))}
      </ul>
      <Button
        href={ctaHref}
        variant={isFeatured || isBrand ? "white" : "primary"}
        size="md"
        className="mt-7 w-full"
      >
        {cta}
      </Button>
    </div>
  );
}

/* ─────────────── 5. Reviews ─────────────── */
function Reviews() {
  const reviews = [
    {
      quote:
        "I live in Chicago and didn't trust any local cleaner with my Travis Scott 1s. The packaging alone told me these guys care. They came back better than new.",
      name: "Jordan K.",
      city: "Chicago, IL",
    },
    {
      quote:
        "Shipping was easy, the condition report was a nice touch, and my Off-Whites are unrecognizable in the best way. Worth every dollar.",
      name: "Priya S.",
      city: "Toronto, ON",
    },
    {
      quote:
        "I ship 3 to 4 pairs a month from Austin. Fast turnaround, perfect packaging, and they actually treat the shoes like they matter. Don't sleep on this.",
      name: "Marcus D.",
      city: "Austin, TX",
    },
    {
      quote:
        "Sent in a pair of yellowed AJ1s I'd given up on. They came back looking like new releases. Best money I've ever spent on shoes I already owned.",
      name: "Alex R.",
      city: "Vancouver, BC",
    },
  ];

  return (
    <Section className="bg-ink-50">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by sneaker lovers across North America."
          description="Real customers. Real pairs. Real distances."
          align="center"
        />

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-3xl bg-white ring-1 ring-black/[0.05] p-7 md:p-8 min-h-[280px] flex flex-col justify-between"
            >
              <div className="flex gap-0.5 text-brand-500" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M7 0l1.8 4.7L14 5l-4 3.4L11.4 14 7 11.2 2.6 14 4 8.4 0 5l5.2-.3z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-5 text-[15px] tracking-[-0.005em] leading-[1.55] text-ink-800 text-balance">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-ink-200">
                <div className="text-[14px] font-medium text-ink-950">{r.name}</div>
                <div className="text-[12.5px] text-ink-500">{r.city}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Google reviews pill */}
        <div className="mt-10 md:mt-12 flex justify-center">
          <a
            href="https://share.google/NCWzE3qOr41DL0bm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read all reviews on Google. 4.9 stars from 261 reviews"
            className="group inline-flex items-center h-14 sm:h-[60px] pl-4 sm:pl-5 pr-2 rounded-full bg-white ring-1 ring-ink-200 hover:ring-brand-500 shadow-[0_8px_22px_-10px_rgba(14,58,77,0.25)] hover:shadow-[0_12px_28px_-10px_rgba(14,58,77,0.4)] transition-all gap-3 sm:gap-4"
          >
            <GoogleGIcon />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[15px] sm:text-[17px] font-bold text-ink-950 tracking-[-0.005em]">
                4.9
              </span>
              <div className="flex gap-0.5 text-amber-400" aria-label="4.9 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
                    <path d="M7 0l1.8 4.7L14 5l-4 3.4L11.4 14 7 11.2 2.6 14 4 8.4 0 5l5.2-.3z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="h-5 w-px bg-ink-200" />
            <span className="text-[13px] sm:text-[14px] text-ink-700">
              <span className="font-semibold text-ink-950">261</span>{" "}
              <span className="hidden sm:inline">Google reviews</span>
              <span className="sm:hidden">reviews</span>
            </span>
            <span className="ml-1 sm:ml-2 inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-ink-950 text-white group-hover:bg-brand-500 group-hover:text-ink-950 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </span>
          </a>
        </div>
      </Container>
    </Section>
  );
}

function GoogleGIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" />
      <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" />
      <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" />
    </svg>
  );
}

/* ─────────────── 6. FAQs ─────────────── */
function FAQs() {
  const faqs = [
    {
      q: "How much does mail-in cleaning cost?",
      a: "Mail-in cleaning starts at $35 for Essential Clean. Signature is $55, Premium Care is $85, and Restoration starts at $110+. Shipping label is included in every service.",
    },
    {
      q: "How long does mail-in take?",
      a: "Most orders complete in 7 to 10 days from the day your pairs arrive at our studio. Restoration and specialty services may take longer depending on condition.",
    },
    {
      q: "Is my shipment insured?",
      a: "Yes. Every mail-in order is fully insured both ways, from your door to our studio and back. You'll get tracking at every step.",
    },
    {
      q: "What if my sneakers get lost or damaged in shipping?",
      a: "Every shipment is fully insured. In the rare case of loss or damage in transit, we work directly with the carrier and you. You're covered.",
    },
    {
      q: "How should I pack my sneakers?",
      a: "We recommend placing your sneakers in their original box (if you have it) inside a sturdy shipping box. Add a layer of bubble wrap or paper around the box for extra protection. Detailed packing instructions are sent with your prepaid label.",
    },
    {
      q: "How do I track my order?",
      a: "You'll get a tracking link the moment your label is generated. You'll also get text and email updates when your pairs arrive at the studio, when cleaning starts, and when they're shipped back.",
    },
    {
      q: "Will I see a before and after?",
      a: "Yes. Every mail-in order includes a full condition report with photos, before and after. You'll know exactly what we did.",
    },
    {
      q: "Do you clean designer, suede, and luxury sneakers via mail-in?",
      a: "Yes. Premium Care is designed for designer sneakers, suede, nubuck, luxury pairs, and specialty materials. Same hand-finishing as in studio.",
    },
    {
      q: "Can I ship multiple pairs in one box?",
      a: "Absolutely. Many customers send 2 to 4 pairs at once. Each pair is cleaned and reported individually.",
    },
    {
      q: "Where do you ship to?",
      a: "Anywhere in the continental US, Canada, and most of North America. Reach out for international inquiries.",
    },
    {
      q: "Can I use Klean Club for mail-in?",
      a: "Yes. Klean Club members save up to 20% on every mail-in service plus get priority turnaround.",
    },
  ];

  return (
    <Section className="bg-white pb-12 sm:pb-14 md:pb-16">
      <Container size="narrow">
        <SectionHeading
          eyebrow="FAQs"
          title="Common questions, answered."
          description="Everything we get asked about mail-in, in one place."
          align="center"
        />
        <ul className="mt-12 rounded-3xl ring-1 ring-black/[0.06] divide-y divide-black/[0.06] overflow-hidden">
          {faqs.map((item) => (
            <li key={item.q}>
              <details className="group">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-6 px-5 md:px-8 py-5 md:py-6 hover:bg-ink-50/60 transition-colors">
                  <span className="text-[15.5px] md:text-[17px] font-medium tracking-[-0.01em] text-ink-950 text-balance">
                    {item.q}
                  </span>
                  <span className="flex-none h-8 w-8 rounded-full bg-ink-100 inline-flex items-center justify-center text-ink-700 group-open:rotate-45 transition-transform">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 md:px-8 pb-6 text-[14.5px] md:text-[15px] text-ink-600 leading-[1.65]">
                  {item.a}
                </div>
              </details>
            </li>
          ))}
        </ul>

        {/* Help center CTA */}
        <div className="mt-10 md:mt-12 rounded-3xl bg-ink-50 ring-1 ring-black/[0.05] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
              Need more help?
            </div>
            <div className="mt-2 text-[18px] md:text-[20px] font-semibold tracking-[-0.015em] text-ink-950">
              Can't find what you're looking for?
            </div>
            <p className="mt-1 text-[14px] text-ink-600 leading-[1.5]">
              Browse the full Help Center or talk to our team directly.
            </p>
          </div>
          <div className="flex-none">
            <Button href="/help" size="lg">
              Visit Help Center
              <span aria-hidden>→</span>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─────────────── 7. Final CTA ─────────────── */
function FinalCta() {
  return (
    <Section className="bg-white pt-0 pb-16 md:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] md:rounded-[40px] bg-ink-950 text-white">
          {/* Atmospheric background */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 80% at 100% 0%, rgba(110,197,227,0.28) 0%, transparent 60%), radial-gradient(45% 60% at 0% 100%, rgba(110,197,227,0.16) 0%, transparent 60%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(110,197,227,0.55) 50%, transparent 100%)",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-16 p-6 sm:p-10 md:p-14 lg:p-20">
            {/* Left: closing statement + CTAs */}
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-300">
                Mail-in Service
              </div>
              <h2 className="mt-4 text-[36px] sm:text-[52px] md:text-[64px] lg:text-[76px] font-semibold tracking-[-0.04em] leading-[1.0] text-balance">
                Send in your pairs. We'll{" "}
                <span className="italic font-light text-brand-300">
                  handle
                </span>{" "}
                the rest.
              </h2>
              <p className="mt-5 max-w-md text-[15.5px] md:text-[16px] text-white/70 leading-[1.6]">
                Prepaid label. Fully insured. Returned in 7 to 10 days, cleaner
                than the day you bought them. Available anywhere in North
                America.
              </p>
              <div className="mt-8">
                <BookCta variant="light" />
              </div>
            </div>

            {/* Right: contact + helper */}
            <aside className="lg:border-l lg:border-white/[0.08] lg:pl-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-7 gap-x-8 self-center">
              <InfoBlock
                label="Questions"
                icon={<MailIcon />}
                lines={["mail@sneakky.com"]}
                actionLabel="Email us"
                actionHref="mailto:mail@sneakky.com"
              />
              <InfoBlock
                label="Call"
                icon={<PhoneIcon />}
                lines={["+1 (305) 555-0123"]}
                actionLabel="Call now"
                actionHref="tel:+13055550123"
              />
              <InfoBlock
                label="Track an order"
                icon={<TrackIcon />}
                lines={["Sign in to view real-time status."]}
                actionLabel="Go to account"
                actionHref="/account"
              />
            </aside>
          </div>
        </div>

        {/* Bottom helper strip */}
        <div className="mt-6 md:mt-8 max-w-4xl mx-auto px-2 text-center">
          <p className="text-[12.5px] text-ink-500 leading-[1.65]">
            Ship to: Sneakky Klean Mail-in Studio, address on your prepaid
            label.
          </p>
        </div>
      </Container>
    </Section>
  );
}

function InfoBlock({
  label,
  icon,
  lines,
  actionLabel,
  actionHref,
}: {
  label: string;
  icon: React.ReactNode;
  lines: string[];
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-300">
        <span className="text-brand-300">{icon}</span>
        {label}
      </div>
      <ul className="mt-3 space-y-1">
        {lines.map((line, i) => (
          <li key={i} className="text-[14.5px] text-white/85 leading-[1.5]">
            {line}
          </li>
        ))}
      </ul>
      {actionLabel && actionHref && (
        <a
          href={actionHref}
          className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-300 hover:text-brand-200 transition-colors"
        >
          {actionLabel}
          <span aria-hidden>→</span>
        </a>
      )}
    </div>
  );
}

/* ─────────────── Icons ─────────────── */
function GlobeDot() {
  return (
    <span className="inline-flex items-center justify-center text-brand-600">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
        <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M1.8 8h12.4M8 1.8c2.1 2.4 2.1 10 0 12.4M8 1.8c-2.1 2.4-2.1 10 0 12.4" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </span>
  );
}

function PriceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2v20" />
      <path d="M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 010 7H7" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
      <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" />
    </svg>
  );
}

function ToolIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14.7 6.3a4 4 0 015.6 5.6L9.6 22.6a2 2 0 01-2.8 0L1.4 17.2a2 2 0 010-2.8L12 3.8" />
      <path d="M14 8l3 3" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 7h14l-1.2 12.2A2 2 0 0115.8 21H8.2A2 2 0 016.2 19.2L5 7z" />
      <path d="M9 7V5a3 3 0 016 0v2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect x="2" y="3.5" width="12" height="9" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2.5 4.5L8 8.5l5.5-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 3.5h2.5L7 6.5l-1.5 1c.7 1.5 1.8 2.6 3.3 3.3l1-1.5L12.5 11v2.5a1.5 1.5 0 01-1.5 1.5C7 14.7 1.3 9 1.5 5 1.5 4.2 2.2 3.5 3 3.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function TrackIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M2 5h9v8H2zM11 7h2.5l1.5 2.5V13H11z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="5" cy="13.5" r="1.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="13.5" r="1.2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
