import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";
import { BookCta } from "@/components/BookCta";
import { Location, locations, getLocation } from "@/data/locations";
import miamiHeroGif from "@/Videos/miami-hero-section.gif";

export async function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return { title: "Location" };
  return {
    title: `Premium Sneaker Cleaning in ${location.city}`,
    description: location.description,
  };
}

/* ── Image library — swap freely. All images.unsplash.com (whitelisted in next.config). ── */
const IMG = {
  heroBg:
    "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=2400&q=80",
  heroSneaker:
    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1400&q=85",
  before:
    "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1200&q=80",
  after:
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=1200&q=80",
  cleaning:
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1400&q=80",
  restoration:
    "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1400&q=80",
  treatments:
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1400&q=80",
  miamiAccent:
    "https://images.unsplash.com/photo-1582820728137-e7e44c1ee43f?auto=format&fit=crop&w=2000&q=80",
  kleanClub:
    "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=1600&q=80",
};

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  return (
    <>
      <Hero location={location} />
      <HowItWorks location={location} />
      <ServicesOffered location={location} />
      <Pricing />
      <Reviews location={location} />
      <FAQs location={location} />
      <FinalCta location={location} />
    </>
  );
}

/* ─────────────────────────── Hero ─────────────────────────── */
function Hero({ location }: { location: Location }) {
  return (
    <section className="relative isolate overflow-hidden bg-white text-ink-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 70% at 90% 0%, rgba(110,197,227,0.18) 0%, transparent 60%), radial-gradient(50% 60% at 0% 100%, rgba(110,197,227,0.10) 0%, transparent 60%), linear-gradient(180deg, #f3fbff 0%, #ffffff 70%)",
        }}
      />

      <Container className="relative pt-12 sm:pt-20 md:pt-24 lg:pt-28 pb-14 sm:pb-20 md:pb-24">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2.5 h-10 pl-3 pr-4 rounded-full bg-white ring-1 ring-brand-200 shadow-[0_8px_24px_-12px_rgba(110,197,227,0.45)] text-[13px] font-medium text-ink-900">
              <LocationPin className="text-brand-600" />
              {location.city} Studio · {location.address.split(',')[0]}
            </div>

            <h1 className="mt-7 text-[44px] sm:text-[60px] md:text-[76px] lg:text-[88px] font-semibold tracking-[-0.04em] leading-[0.98] text-balance">
              Premium{" "}
              <span className="italic font-light text-brand-600">sneaker</span>{" "}
              cleaning, <br className="hidden md:block" />
              in {location.city}.
            </h1>

            <p className="mt-7 max-w-xl text-[16px] sm:text-[17px] md:text-[18px] text-ink-700 leading-[1.6] text-pretty">
              Expert cleaning, restoration, pickup, and Klean Club membership for the kicks you wear most. Built for {location.city} heat, humidity, dust, nightlife, and everyday sneaker culture.
            </p>

            <div className="mt-9">
              <BookCta />
            </div>
          </div>

          <div className="relative w-full hidden lg:flex items-center justify-center lg:-mr-6 xl:-mr-10 p-4 lg:p-8">
            <div className="relative w-full max-w-[450px]">
              
              <div className="absolute -top-6 -left-8 z-10 px-5 py-3 rounded-2xl bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-ink-100 flex items-center gap-3 transition-all duration-300 hover:scale-105">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.8)] animate-pulse"></div>
                <span className="text-[14px] font-black uppercase tracking-[0.15em] text-ink-950">Before</span>
              </div>

              <div className="relative w-full rounded-[2.5rem] border-4 border-brand-500 overflow-hidden shadow-[0_20px_60px_-15px_rgba(110,197,227,0.4)] bg-ink-50 group">
                <Image
                  src={miamiHeroGif}
                  alt={`${location.city} sneaker cleaning service showcase`}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                  unoptimized
                />
              </div>
              
              <div className="absolute -bottom-6 -right-8 z-10 px-5 py-3 rounded-2xl bg-brand-500 shadow-[0_12px_40px_rgba(14,58,77,0.25)] border border-brand-400 flex items-center gap-3 transition-all duration-300 hover:scale-105">
                <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)] animate-pulse"></div>
                <span className="text-[14px] font-black uppercase tracking-[0.15em] text-white">After</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative bg-white/60 backdrop-blur-sm">
        <Container className="py-8 md:py-10">
          <div className="text-center md:text-left">
            <div className="eyebrow mx-auto md:mx-0">Trusted with the world's most coveted brands</div>
          </div>
          <div className="mt-10 overflow-hidden marquee-wrap relative">
            <div className="flex scroller animate-scroll relative z-10">
              {[
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1780045949/image_70_pvbvpz.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1780045949/image_71_s46swh.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1780045949/image_76_qahipd.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1780045949/image_69_ikn8lh.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1780045949/image_75_gb4z6t.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1780045949/image_73_mu5qxa.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1780045949/image_74_zzcro1.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1780045948/image_72_cjgkdj.png",
              ].map((logoUrl, i) => (
                <div
                  key={i}
                  className="flex-none relative h-10 w-28 sm:h-12 sm:w-32 md:h-14 md:w-36 flex items-center justify-center opacity-70 mix-blend-multiply"
                >
                  <Image src={logoUrl} alt={`Brand logo ${i}`} fill className="object-contain" />
                </div>
              ))}
              {[
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1780045949/image_70_pvbvpz.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1780045949/image_71_s46swh.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1780045949/image_76_qahipd.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1780045949/image_69_ikn8lh.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1780045949/image_75_gb4z6t.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1780045949/image_73_mu5qxa.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1780045949/image_74_zzcro1.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1780045948/image_72_cjgkdj.png",
              ].map((logoUrl, i) => (
                <div
                  key={`repeat-${i}`}
                  className="flex-none relative h-10 w-28 sm:h-12 sm:w-32 md:h-14 md:w-36 flex items-center justify-center opacity-70 mix-blend-multiply"
                >
                  <Image src={logoUrl} alt={`Brand logo ${i}`} fill className="object-contain" />
                </div>
              ))}
            </div>
            <div aria-hidden className="fade-edge fade-left" />
            <div aria-hidden className="fade-edge fade-right" />
          </div>
        </Container>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .scroller { display:flex; gap: 4rem; align-items:center; }
          @media (min-width: 768px) { .scroller { gap: 6rem; } }

          .animate-scroll {
            animation: scroll 14s linear infinite;
            will-change: transform;
          }

          .marquee-wrap { position:relative; }
          .fade-edge { position:absolute; top:0; bottom:0; width:8%; pointer-events:none; z-index:10; }
          .fade-left { left:0; background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%); }
          .fade-right { right:0; background: linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%); }
        `}</style>
      </div>
    </section>
  );
}

function LocationPin({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path d="M8 1.5c-3 0-5.25 2.35-5.25 5.2 0 3.7 5.25 7.8 5.25 7.8s5.25-4.1 5.25-7.8C13.25 3.85 11 1.5 8 1.5z" stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.12" />
      <circle cx="8" cy="6.7" r="1.9" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

/* ───────────────────────── How It Works ───────────────────────── */
function HowItWorks({ location }: { location: Location }) {
  const steps = [
    {
      step: "01",
      title: "Book Your Service",
      copy: "Select your sneaker cleaning service through our website and schedule your appointment instantly in just a few simple steps.",
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
      step: "02",
      title: "Drop Off or Schedule Pickup",
      copy: `Bring your shoes to our Sneakky Klean ${location.city} location or request pickup and delivery if available in ${location.city}.`,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="2" y="7" width="13" height="9" rx="1.5" />
          <path d="M15 10h4l2 3v3h-6z" />
          <circle cx="7" cy="17.5" r="1.6" />
          <circle cx="17" cy="17.5" r="1.6" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "We Inspect and Clean",
      copy: "Our team checks your shoes, cleans them professionally, and uses the right method based on material and service selected.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
          <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" />
          <path d="M6 16l.6 1.6L8 18l-1.4.4L6 20l-.6-1.6L4 18l1.4-.4z" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Receive Freshly Cleaned Shoes",
      copy: "Pick up your sneakers from our shop or get them delivered back clean, fresh, and ready to wear.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
          <polyline points="8 9 11 11 16 6" />
        </svg>
      ),
    },
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <div><div className="eyebrow mx-auto">How it works</div></div>
          <h2 className="mt-3 text-[32px] sm:text-[44px] md:text-[56px] lg:text-[60px] font-semibold tracking-[-0.03em] leading-[1.04] text-balance text-ink-950">
            Expert care from start to finish.
          </h2>
          <p className="mt-5 text-[16px] md:text-[18px] text-ink-600 leading-[1.6]">
            Get a fresh pair in 24 to 72 hours.
          </p>
        </div>

        <div className="mt-16 md:mt-20 relative">
          <StepConnectors />
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-14 md:gap-x-4 lg:gap-x-6 items-start">
            {steps.map((s) => (
              <StepCard key={s.step} {...s} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function StepCard({ title, copy, icon }: { step: string; title: string; copy: string; icon: React.ReactNode }) {
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
      <p className="mt-3 text-[14px] text-ink-600 leading-[1.6] max-w-[230px] mx-auto text-pretty">{copy}</p>
    </div>
  );
}

function StepConnectors() {
  return (
    <svg aria-hidden viewBox="0 0 1000 60" preserveAspectRatio="xMidYMid meet" className="hidden md:block pointer-events-none absolute inset-x-0 top-[42px] lg:top-[48px] w-full text-brand-300">
      <path d="M 180 30 Q 250 -8 320 30" stroke="currentColor" strokeWidth="1.6" strokeDasharray="4 6" fill="none" strokeLinecap="round" />
      <path d="M 430 30 Q 500 68 570 30" stroke="currentColor" strokeWidth="1.6" strokeDasharray="4 6" fill="none" strokeLinecap="round" />
      <path d="M 680 30 Q 750 -8 820 30" stroke="currentColor" strokeWidth="1.6" strokeDasharray="4 6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ───────────────────────── Services Offered ───────────────────────── */
function ServicesOffered({ location }: { location: Location }) {
  const tiles = [
    {
      title: "Cleaning",
      copy: "Studio-grade cleans for sneakers, suede, leather, white pairs, and more.",
      href: "/services#cleaning",
      img: "https://res.cloudinary.com/dspez5cnn/image/upload/v1780071586/Frame_1000003845_ayc9fw.png",
    },
    {
      title: "Restoration",
      copy: "Repair, reglue, repaint, de-yellow, and rebuild. For pairs that deserve more.",
      href: "/services#restoration",
      img: "https://res.cloudinary.com/dspez5cnn/image/upload/v1780071586/Frame_1000003846_ao2j2v.png",
    },
    {
      title: "Treatments",
      copy: "Oxidation reversal, sole whitening, waterproofing, and deodorizing care.",
      href: "/services#treatment",
      img: "https://res.cloudinary.com/dspez5cnn/image/upload/v1780071586/Frame_1000003847_m5gqi4.png",
    },
  ];

  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Services built for every sneaker condition."
          description={`From regular maintenance to full restoration, every service is hand-finished by our ${location.city} specialists.`}
          align="center"
        />
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiles.map((t) => (
            <ServiceTile key={t.title} {...t} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ServiceTile({ title, copy, href, img }: { title: string; copy: string; href: string; img: string; }) {
  const accent = "from-brand-50 to-brand-100";
  return (
    <Link href={href} className="group relative overflow-hidden rounded-3xl ring-1 ring-black/[0.05] hover:ring-brand-500 transition-all flex flex-col bg-white">
      <div className={`relative aspect-[5/3] flex items-center justify-center rounded-t-3xl bg-gradient-to-br ${accent}`}>
        <div className="relative w-full h-full">
          <Image src={img} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover w-full h-full" />
        </div>
      </div>
      <div className="p-4 md:p-5 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 flex-shrink-0 rounded-full bg-white flex items-center justify-center shadow-sm" style={{ border: "0.7px solid rgba(0,0,0,0.08)" }}>
            {title.toLowerCase().includes("restor") ? (
              <Image src="https://res.cloudinary.com/dspez5cnn/image/upload/v1779973331/Group_243_btua0l.png" alt="Restoration icon" width={21} height={21} className="object-contain" />
            ) : title.toLowerCase().includes("treat") ? (
              <Image src="https://res.cloudinary.com/dspez5cnn/image/upload/v1779973331/Group_eeizel.png" alt="Treatments icon" width={21} height={21} className="object-contain" />
            ) : (
              <Image src="https://res.cloudinary.com/dspez5cnn/image/upload/v1779973331/Group_244_mbbavf.png" alt="Cleaning icon" width={21} height={21} className="object-contain" />
            )}
          </div>
          <h3 className="text-[25px] md:text-[29px] font-semibold tracking-[-0.015em] text-ink-950">{title}</h3>
        </div>
        <p className="text-[15px] text-ink-600 leading-[1.6]">{copy}</p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-start gap-3 text-[14px] text-ink-700">
            <span className="mt-0.5 h-5 w-5 rounded-full flex items-center justify-center bg-brand-50 text-brand-600" aria-hidden>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#3da6c8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            Safe for all materials
          </li>
          <li className="flex items-start gap-3 text-[14px] text-ink-700">
            <span className="mt-0.5 h-5 w-5 rounded-full flex items-center justify-center bg-brand-50 text-brand-600" aria-hidden>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#3da6c8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            Stain & odor removal
          </li>
        </ul>
        <div className="mt-4 flex items-center justify-end">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink-50 ring-1 ring-black/[0.04] text-ink-900 transition-colors transition-transform group-hover:scale-105 group-hover:bg-brand-500">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ───────────────────────── Pricing ───────────────────────── */
function Pricing() {
  return (
    <Section className="bg-ink-50">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Sneaker cleaning pricing."
          description="Three service levels for one-time cleans, plus Klean Club for the rotation."
          align="center"
        />
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <PricingCard name="Essential Clean" price="$34" priceLabel="Starting at" blurb="Quick refresh for everyday sneakers-uppers, midsoles, and light detailing." cta="Book this service" ctaHref="/book" variant="essential" features={["Upper cleaning", "Midsole cleaning"]} />
          <PricingCard name="Signature Clean" price="$54" priceLabel="Starting at" blurb="Complete sneaker clean and restoration-deep upper, midsole, and detailing." cta="Book this service" ctaHref="/book" featured variant="signature" features={["Deep upper cleaning", "Midsole cleaning", "Undersole cleaning", "Lace wash", "Detail Finish"]} />
          <PricingCard name="Premium Care" price="$84" priceLabel="Starting at" blurb="Advanced care for high-value, delicate, and specialty sneakers." cta="Book this service" ctaHref="/book" variant="premium" features={["Premium material treatment", "Advanced stain removal", "Suede / specialty fabric care", "Full detail cleaning"]} />
          <PricingCard name="Restoration Service" price="$110+" priceLabel="" blurb="For heavily worn or damaged sneakers that need more than a clean." cta="Contact us" ctaHref="/contact" tone="brand" variant="klean" features={["Oxidation treatment", "Deep stain correction or paint touch up", "Specialized restoration work"]} badge="Restoration" />
        </div>
      </Container>
    </Section>
  );
}

function PricingCard({ name, price, priceLabel = "Starting at", priceSuffix, blurb, cta, ctaHref, featured = false, tone = "default", variant = "essential", badge, features }: { name: string; price: string; priceLabel?: string; priceSuffix?: string; blurb: string; cta: string; ctaHref: string; featured?: boolean; tone?: "default" | "brand"; variant?: "essential" | "signature" | "premium" | "klean"; badge?: string; features?: string[]; }) {
  const isFeatured = featured;
  const isBrand = tone === "brand";
  const cardCls = isFeatured ? "bg-ink-950 text-white ring-1 ring-brand-500" : isBrand ? "bg-gradient-to-br from-brand-500 to-brand-700 text-white ring-1 ring-brand-600" : "bg-white ring-1 ring-black/[0.05]";
  const labelTone = isFeatured || isBrand ? "text-white/65" : "text-ink-500";
  const priceTone = isFeatured || isBrand ? "text-white" : "text-ink-950";
  const blurbTone = isFeatured || isBrand ? "text-white/80" : "text-ink-600";
  const nameTone = isFeatured || isBrand ? "text-white" : "text-ink-950";

  return (
    <div className={`relative rounded-3xl p-7 md:p-8 flex flex-col h-full ${cardCls}`}>
      {isFeatured && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 inline-flex items-center h-6 px-3 rounded-full bg-brand-500 text-ink-950 text-[10.5px] font-bold tracking-[0.06em] z-10">Most popular</div>}
      {badge && !isFeatured && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 inline-flex items-center h-6 px-3 rounded-full bg-white text-ink-950 text-[10.5px] font-bold tracking-[0.06em] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.18)] z-10">{badge}</div>}
      <h3 className={`text-[18px] font-semibold tracking-[-0.015em] ${nameTone}`}>{name}</h3>
      <div className={`mt-4 text-[12px] ${labelTone}`}>{priceLabel}</div>
      <div className={`mt-1 flex items-baseline gap-1 text-[44px] md:text-[48px] font-semibold tracking-[-0.035em] leading-none ${priceTone}`}>
        {price}
        {priceSuffix && <span className={`text-[16px] font-medium ${labelTone}`}>{priceSuffix}</span>}
      </div>
      <div className="flex-1 pb-4">
        <p className={`mt-5 text-[14px] leading-[1.55] ${blurbTone}`}>{blurb}</p>
        {features && features.length > 0 && (
          <ul className="mt-6 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-[14px]">
                <span className={`flex-none mt-0.5 h-5 w-5 rounded-full flex items-center justify-center ${isFeatured || isBrand ? "bg-white" : "bg-ink-900"}`} aria-hidden>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M20 6L9 17l-5-5" stroke={isFeatured || isBrand ? "#0ea5c9" : "#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className={`${isFeatured || isBrand ? "text-white/90" : "text-ink-700"}`}>{f}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Button href={ctaHref} variant={isFeatured || isBrand ? "white" : "primary"} size="md" className="mt-auto w-full">{cta}</Button>
    </div>
  );
}

/* ───────────────────────── Reviews ───────────────────────── */
function Reviews({ location }: { location: Location }) {
  const reviews = [
    { quote: "My sneakers looked fresh again without feeling over-cleaned or damaged. The service felt premium, careful, and worth it.", name: "Camila R.", city: location.city },
    { quote: "I used to clean my shoes at home, but Sneakky Klean gave a much better finish. My Jordans came back looking ready to wear again.", name: "Andre T.", city: location.city },
    { quote: "The booking process was simple, and the before and after result was clear. This is perfect for anyone who cares about how their sneakers look.", name: "Sofia M.", city: location.city },
    { quote: "Klean Club makes sense if you wear sneakers every day. It keeps my rotation clean and saves me time.", name: "Marcus L.", city: location.city },
  ];

  return (
    <Section className="bg-ink-50">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="Trusted by sneaker lovers." description={`Real customers, real pairs. A few words from the people who trust our ${location.city} studio with their rotation.`} align="center" />
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-3xl bg-white ring-1 ring-black/[0.05] p-7 md:p-8 min-h-[280px] flex flex-col justify-between">
              <div className="flex gap-0.5 text-brand-500" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M7 0l1.8 4.7L14 5l-4 3.4L11.4 14 7 11.2 2.6 14 4 8.4 0 5l5.2-.3z" /></svg>
                ))}
              </div>
              <blockquote className="mt-5 text-[15px] tracking-[-0.005em] leading-[1.55] text-ink-800 text-balance">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-ink-200">
                <div className="text-[14px] font-medium text-ink-950">{r.name}</div>
                <div className="text-[12.5px] text-ink-500">{r.city}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 md:mt-12 flex justify-center">
          <a href="https://share.google/NCWzE3qOr41DL0bm" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center h-14 sm:h-[60px] pl-4 sm:pl-5 pr-2 rounded-full bg-white ring-1 ring-ink-200 hover:ring-brand-500 shadow-[0_8px_22px_-10px_rgba(14,58,77,0.25)] hover:shadow-[0_12px_28px_-10px_rgba(14,58,77,0.4)] transition-all gap-3 sm:gap-4">
            <GoogleGIcon />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[15px] sm:text-[17px] font-bold text-ink-950 tracking-[-0.005em]">4.9</span>
              <div className="flex gap-0.5 text-amber-400">{Array.from({ length: 5 }).map((_, i) => (<svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="currentColor"><path d="M7 0l1.8 4.7L14 5l-4 3.4L11.4 14 7 11.2 2.6 14 4 8.4 0 5l5.2-.3z" /></svg>))}</div>
            </div>
            <div className="h-5 w-px bg-ink-200" />
            <span className="text-[13px] sm:text-[14px] text-ink-700"><span className="font-semibold text-ink-950">261</span> <span className="hidden sm:inline">Google reviews</span></span>
            <span className="ml-1 sm:ml-2 inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-ink-950 text-white group-hover:bg-brand-500 group-hover:text-ink-950 transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8" /></svg></span>
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

/* ───────────────────────── FAQs ───────────────────────── */
function FAQs({ location }: { location: Location }) {
  const faqs = [
    { q: `How much does sneaker cleaning cost in ${location.city}?`, a: "Sneaker cleaning starts at $34. Deep cleaning starts at $54, premium care starts at $84, and restoration services start at $110+ depending on the condition and service needed." },
    { q: "How long does sneaker cleaning take?", a: "Most sneaker cleaning orders are completed within 24 to 72 hours. Restoration or specialty care may take longer depending on the condition of the sneakers." },
    { q: "Do you clean designer, suede, and luxury sneakers?", a: "Yes. Premium Care is designed for designer sneakers, suede, nubuck, luxury pairs, and specialty materials that need careful handling." },
    { q: "Can you remove every stain?", a: "Not every stain can be fully removed. Results depend on the material, stain type, age of the stain, and overall sneaker condition." },
    { q: `Do you offer pickup and delivery in ${location.city}?`, a: `Pickup and delivery may be available depending on your ${location.city} location and selected service.` },
    { q: "What is Klean Club?", a: "Klean Club is Sneakky Klean's membership option for customers who want regular sneaker cleaning, member savings, priority service, and easy repeat bookings." },
    { q: "Why should I choose professional sneaker cleaning instead of cleaning at home?", a: "Professional sneaker care helps reduce the risk of damaging expensive materials, saves time, and gives sneakers a more detailed finish than basic DIY cleaning." },
    { q: "Who is this service best for?", a: "This service is best for sneaker enthusiasts, professionals, athletes, collectors, luxury fashion buyers, students, busy professionals, parents, and anyone who wants clean sneakers without the hassle." },
  ];

  return (
    <Section className="bg-white pb-12 sm:pb-14 md:pb-16">
      <Container size="narrow">
        <SectionHeading eyebrow="FAQs" title="Common questions, answered." description={`The things customers ask most about Sneakky Klean ${location.city}, in one place.`} align="center" />
        <ul className="mt-12 rounded-3xl ring-1 ring-black/[0.06] divide-y divide-black/[0.06] overflow-hidden">
          {faqs.map((item) => (
            <li key={item.q}>
              <details className="group">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-6 px-5 md:px-8 py-5 md:py-6 hover:bg-ink-50/60 transition-colors">
                  <span className="text-[15.5px] md:text-[17px] font-medium tracking-[-0.01em] text-ink-950 text-balance">{item.q}</span>
                  <span className="flex-none h-8 w-8 rounded-full bg-ink-100 inline-flex items-center justify-center text-ink-700 group-open:rotate-45 transition-transform"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></span>
                </summary>
                <div className="px-5 md:px-8 pb-6 text-[14.5px] md:text-[15px] text-ink-600 leading-[1.65]">{item.a}</div>
              </details>
            </li>
          ))}
        </ul>
        <div className="mt-10 md:mt-12 rounded-3xl bg-ink-50 ring-1 ring-black/[0.05] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <div className="text-[11px] font-semibold tracking-[0.06em] text-brand-700">Need more help?</div>
            <div className="mt-2 text-[18px] md:text-[20px] font-semibold tracking-[-0.015em] text-ink-950">Can't find what you're looking for?</div>
            <p className="mt-1 text-[14px] text-ink-600 leading-[1.5]">Browse the full Help Center or talk to our {location.city} team directly.</p>
          </div>
          <div className="flex-none"><Button href="/help" size="lg">Visit Help Center <span aria-hidden>→</span></Button></div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── Final CTA ───────────────────────── */
function FinalCta({ location }: { location: Location }) {
  return (
    <Section className="bg-white pt-0 pb-16 md:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] md:rounded-[40px] bg-ink-950 text-white">
          <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(60% 80% at 100% 0%, rgba(110,197,227,0.28) 0%, transparent 60%), radial-gradient(45% 60% at 0% 100%, rgba(110,197,227,0.16) 0%, transparent 60%)" }} />
          <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div aria-hidden className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(110,197,227,0.55) 50%, transparent 100%)" }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-16 p-6 sm:p-10 md:p-14 lg:p-20">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.06em] text-brand-300">Sneakky Klean {location.city}</div>
              <h2 className="mt-5 text-[36px] sm:text-[52px] md:text-[64px] lg:text-[78px] font-semibold tracking-[-0.04em] leading-[1.0] text-balance">Bring your <span className="italic font-light text-brand-300">best</span> pairs in.</h2>
              <p className="mt-6 max-w-md text-[16px] md:text-[17px] text-white/70 leading-[1.6]">Drop off in studio, schedule a {location.city} pickup, or ship in from anywhere in North America. Most cleans finished within 72 hours.</p>
              <div className="mt-10"><BookCta variant="light" /></div>
            </div>
            <aside className="lg:border-l lg:border-white/[0.08] lg:pl-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-7 gap-x-8 self-center">
              <InfoBlock label="Studio" icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5c-3 0-5.25 2.35-5.25 5.2 0 3.7 5.25 7.8 5.25 7.8s5.25-4.1 5.25-7.8C13.25 3.85 11 1.5 8 1.5z" stroke="currentColor" strokeWidth="1.4" /><circle cx="8" cy="6.7" r="1.9" stroke="currentColor" strokeWidth="1.4" /></svg>} lines={[location.address.split(',')[0], location.address.split(',').slice(1).join(',').trim()]} actionLabel="Get directions" actionHref={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`} external />
              <InfoBlock label="Hours" icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" /><path d="M8 4.5V8l2.5 1.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>} lines={location.hours.map(h => `${h.days}  ${h.time}`)} />
              <InfoBlock label="Contact" icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3.5" width="12" height="9" rx="1.2" stroke="currentColor" strokeWidth="1.4" /><path d="M2.5 4.5L8 8.5l5.5-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>} lines={[location.phone, location.email]} actionLabel="Email the studio" actionHref={`mailto:${location.email}`} />
            </aside>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function InfoBlock({ label, icon, lines, actionLabel, actionHref, external }: { label: string; icon: React.ReactNode; lines: string[]; actionLabel?: string; actionHref?: string; external?: boolean; }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.06em] text-brand-300"><span className="text-brand-300">{icon}</span>{label}</div>
      <ul className="mt-3 space-y-1">{lines.map((line, i) => (<li key={i} className="text-[14.5px] text-white/85 leading-[1.5]">{line}</li>))}</ul>
      {actionLabel && actionHref && (<a href={actionHref} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="mt-4 inline-flex items-center gap-1.5 text-[14.5px] font-medium text-brand-300 hover:text-brand-200 transition-colors">{actionLabel} <span aria-hidden>→</span></a>)}
    </div>
  );
}
