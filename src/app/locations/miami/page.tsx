import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";
import { getLocation } from "@/data/locations";

export const metadata: Metadata = {
  title: "Premium Sneaker Cleaning in Miami",
  description:
    "Sneakky Klean Miami offers expert sneaker cleaning, restoration, pickup and delivery, and Klean Club membership. Studio in Miami Beach.",
};

const loc = getLocation("miami")!;

/* ── Image library — swap freely. All images.unsplash.com (whitelisted in next.config). ── */
const IMG = {
  heroBg:
    "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=2400&q=80", // Miami palms + pastel sky
  /**
   * White sneaker shot on a clean white background. Combined with
   * `mix-blend-mode: multiply` this lets the photo sit on the page as if it
   * were a transparent cutout, giving the "no background" feel.
   * Swap the photo-id if a better-isolated shot is preferred.
   */
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
    "https://images.unsplash.com/photo-1582820728137-e7e44c1ee43f?auto=format&fit=crop&w=2000&q=80", // Ocean Drive art deco
  kleanClub:
    "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=1600&q=80", // pastel skyline
};

/* Stylised wordmarks that evoke each premium brand without using protected logos. Top 7. */
const BRANDS: { name: string; cls: string }[] = [
  { name: "NIKE", cls: "font-bold italic tracking-[-0.04em]" },
  { name: "JORDAN", cls: "font-extrabold tracking-[0.04em]" },
  { name: "adidas", cls: "font-extrabold tracking-[-0.02em] lowercase" },
  { name: "YEEZY", cls: "font-bold tracking-[0.30em]" },
  { name: "NEW BALANCE", cls: "font-light tracking-[0.05em]" },
  { name: "LOUIS VUITTON", cls: "font-light tracking-[0.16em]" },
  { name: "BALENCIAGA", cls: "font-light tracking-[0.20em]" },
];

export default function MiamiPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ServicesOffered />
      <Pricing />
      <Reviews />
      <FAQs />
      <FinalCta />
    </>
  );
}



/* ─── Hero CTA — segmented pill with two field labels + circular brand-blue arrow.
       variant="dark"  (default) — dark pill, white type, for light backgrounds
       variant="light"          — white pill, dark type, for dark backgrounds       ─── */
function BookCta({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light";

  const pillCls = isLight
    ? "bg-white ring-1 ring-black/[0.06] shadow-[0_18px_44px_-18px_rgba(0,0,0,0.35)] hover:shadow-[0_24px_56px_-18px_rgba(0,0,0,0.45)] hover:bg-[#fafafa]"
    : "bg-ink-950 ring-1 ring-white/[0.06] shadow-[0_18px_44px_-18px_rgba(14,58,77,0.55)] hover:shadow-[0_24px_56px_-18px_rgba(14,58,77,0.7)] hover:bg-[#0c1418]";

  const labelCls = isLight ? "text-ink-950" : "text-white";
  const valueCls = isLight ? "text-ink-500" : "text-white/55";
  const dividerCls = isLight ? "bg-ink-200" : "bg-white/15";

  return (
    <Link
      href="/book"
      aria-label="Book a sneaker cleaning"
      className={`group inline-flex items-stretch h-[64px] sm:h-[72px] rounded-full pl-1 pr-1.5 transition-all ${pillCls}`}
    >
      <div className="flex flex-col justify-center pl-4 sm:pl-7 pr-3 sm:pr-7">
        <span className={`text-[13px] sm:text-[16px] font-semibold tracking-[-0.005em] leading-tight ${labelCls}`}>
          Service
        </span>
        <span className={`text-[11.5px] sm:text-[13.5px] leading-tight mt-0.5 ${valueCls}`}>
          Sneaker Cleaning
        </span>
      </div>

      <div className={`self-center h-7 sm:h-9 w-px ${dividerCls}`} />

      <div className="flex flex-col justify-center pl-3 sm:pl-7 pr-3 sm:pr-5">
        <span className={`text-[13px] sm:text-[16px] font-semibold tracking-[-0.005em] leading-tight ${labelCls}`}>
          Pickup
        </span>
        <span className={`text-[11.5px] sm:text-[13.5px] leading-tight mt-0.5 ${valueCls}`}>
          Schedule today
        </span>
      </div>

      <div className="self-center h-[48px] w-[48px] sm:h-[56px] sm:w-[56px] flex-none rounded-full bg-brand-500 text-ink-950 inline-flex items-center justify-center shadow-[0_8px_24px_-6px_rgba(110,197,227,0.7)] group-hover:bg-brand-400 group-hover:scale-[1.04] transition-all">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          className="group-hover:translate-x-0.5 transition-transform"
        >
          <path
            d="M5 12h14M13 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}

/* ─────────────────────────── Hero ─────────────────────────── */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-ink-950">
      {/* Light brand-blue gradient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 70% at 90% 0%, rgba(110,197,227,0.18) 0%, transparent 60%), radial-gradient(50% 60% at 0% 100%, rgba(110,197,227,0.10) 0%, transparent 60%), linear-gradient(180deg, #f3fbff 0%, #ffffff 70%)",
        }}
      />

      {/* (Palm illustration removed) */}

      {/* ─── Headline + sneaker ─── */}
      <Container className="relative pt-12 sm:pt-20 md:pt-24 lg:pt-28 pb-14 sm:pb-20 md:pb-24">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-12 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2.5 h-10 pl-3 pr-4 rounded-full bg-white ring-1 ring-brand-200 shadow-[0_8px_24px_-12px_rgba(110,197,227,0.45)] text-[13px] font-medium text-ink-900">
              <LocationPin className="text-brand-600" />
              Miami Studio · 1207 Lincoln Road
            </div>

            <h1 className="mt-7 text-[44px] sm:text-[60px] md:text-[76px] lg:text-[88px] font-semibold tracking-[-0.04em] leading-[0.98] text-balance">
              Premium{" "}
              <span className="italic font-light text-brand-600">sneaker</span>{" "}
              cleaning, <br className="hidden md:block" />
              in Miami.
            </h1>

            <p className="mt-7 max-w-xl text-[16px] sm:text-[17px] md:text-[18px] text-ink-700 leading-[1.6] text-pretty">
              Expert cleaning, restoration, pickup, and Klean Club membership for the kicks you wear most. Built for Miami heat, humidity, beach dust, nightlife, and everyday sneaker culture.
            </p>

            <div className="mt-9">
              <BookCta />
            </div>
          </div>

          {/* Right column — featured sneaker on transparent background */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square hidden lg:block lg:-mr-6 xl:-mr-10">
            {/* Soft brand-blue glow behind the sneaker */}
            <div
              aria-hidden
              className="absolute inset-x-[6%] top-[10%] bottom-[8%] rounded-full"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 55%, rgba(110,197,227,0.48) 0%, rgba(110,197,227,0.16) 50%, transparent 75%)",
                filter: "blur(36px)",
              }}
            />

            {/* The sneaker — animated GIF on transparent background */}
            <Image
              src="/miami.gif"
              alt="Miami sneaker cleaning service showcase"
              fill
              priority
              sizes="(max-width: 1088px) 0vw, 48vw"
              className="object-contain drop-shadow-[0_36px_36px_rgba(14,58,77,0.28)]"
              unoptimized
            />

            {/* Soft ground-shadow ellipse under the sneaker */}
            <div
              aria-hidden
              className="absolute left-[16%] right-[16%] bottom-[6%] h-6 rounded-[50%] bg-ink-950/22"
              style={{ filter: "blur(18px)" }}
            />
          </div>
        </div>
      </Container>

      {/* ─── Premium brand strip with images ─── */}
      <div className="relative border-t border-ink-200/70 bg-white/60 backdrop-blur-sm">
        <Container className="py-8 md:py-10">
          <div className="text-center md:text-left">
            <div className="eyebrow mx-auto md:mx-0">Trusted with the world's most coveted brands</div>
          </div>
          <div className="mt-5 md:mt-6 overflow-hidden marquee-wrap">
            <div className="flex scroller animate-scroll">
              {[
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1779966518/image_50_b1wb7y.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1779966517/image_56_zlb4a0.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1779966518/image_52_zd0l46.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1779966517/image_51_ssngqh.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1779966517/image_53_vuoe4c.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1779966517/image_54_r3mnap.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1779966517/image_55_wn6kej.png",
              ].map((imgUrl, idx) => (
                <div key={idx} className="brand-item flex-none w-28 h-28 md:w-32 md:h-32 relative">
                  <Image
                    src={imgUrl}
                    alt={`Brand shoe ${idx + 1}`}
                    fill
                    className="object-contain brand-img"
                  />
                </div>
              ))}
              {[
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1779966518/image_50_b1wb7y.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1779966517/image_56_zlb4a0.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1779966518/image_52_zd0l46.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1779966517/image_51_ssngqh.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1779966517/image_53_vuoe4c.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1779966517/image_54_r3mnap.png",
                "https://res.cloudinary.com/dspez5cnn/image/upload/v1779966517/image_55_wn6kej.png",
              ].map((imgUrl, idx) => (
                <div key={`repeat-${idx}`} className="brand-item flex-none w-28 h-28 md:w-32 md:h-32 relative">
                  <Image
                    src={imgUrl}
                    alt={`Brand shoe ${idx + 1}`}
                    fill
                    className="object-contain brand-img"
                  />
                </div>
              ))}
            </div>
            {/* soft fade edges to create a white blur at entrance/exit */}
            <div aria-hidden className="fade-edge fade-left" />
            <div aria-hidden className="fade-edge fade-right" />
          </div>
        </Container>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .scroller { display:flex; gap: calc(2rem + 15px); align-items:center; }
          @media (min-width: 768px) { .scroller { gap: calc(3rem + 15px); } }

          .animate-scroll {
            animation: scroll 14s linear infinite; /* faster */
            will-change: transform;
          }

          /* Brand item shadow and image tweaks */
          .brand-item { display:block; position:relative; }
          .brand-img { filter: drop-shadow(0 12px 28px rgba(14,58,77,0.14)); }

          /* Fade edges to soften entrance/exit */
          .marquee-wrap { position:relative; }
          .fade-edge { position:absolute; top:0; bottom:0; width:8%; pointer-events:none; z-index:10; }
          .fade-left { left:0; background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%); }
          .fade-right { right:0; background: linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%); }
        `}</style>
      </div>
    </section>
  );
}

/* Location pin icon used in the hero pill */
function LocationPin({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M8 1.5c-3 0-5.25 2.35-5.25 5.2 0 3.7 5.25 7.8 5.25 7.8s5.25-4.1 5.25-7.8C13.25 3.85 11 1.5 8 1.5z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <circle cx="8" cy="6.7" r="1.9" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

/* Miami skyline — single detailed palm + beach, kept to the bottom band */
function MiamiSkyline() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 280"
      preserveAspectRatio="xMidYMax meet"
      className="pointer-events-none absolute inset-x-0 bottom-0 w-full h-[220px] sm:h-[260px] md:h-[300px] text-brand-500"
    >
      <defs>
        {/* One frond — central rachis (curved spine) with paired leaflets along it */}
        <symbol id="sk-frond" viewBox="-2 -22 100 44" overflow="visible">
          {/* Rachis */}
          <path
            d="M0,0 Q30,-3 60,-5 Q78,-4 92,2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Pinnate leaflets (top side) */}
          <g
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            fill="none"
          >
            <path d="M8,-1 Q10,-8 11,-15" />
            <path d="M19,-2 Q22,-10 23,-18" />
            <path d="M31,-3 Q34,-11 35,-19" />
            <path d="M44,-4 Q47,-12 48,-19" />
            <path d="M57,-5 Q59,-12 60,-17" />
            <path d="M68,-5 Q70,-10 71,-13" />
            <path d="M78,-4 Q79,-7 80,-10" />
          </g>
          {/* Pinnate leaflets (bottom side) */}
          <g
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            fill="none"
          >
            <path d="M8,-1 Q10,6 11,13" />
            <path d="M19,-2 Q22,8 23,16" />
            <path d="M31,-3 Q34,9 35,17" />
            <path d="M44,-4 Q47,8 48,16" />
            <path d="M57,-5 Q59,8 60,14" />
            <path d="M68,-5 Q70,7 71,10" />
            <path d="M78,-4 Q79,5 80,7" />
          </g>
        </symbol>
      </defs>

      {/* Ocean / beach — three layered waves */}
      <path
        d="M0 215 Q240 200 480 215 T960 212 T1440 218 L1440 280 L0 280 Z"
        fill="currentColor"
        opacity="0.30"
      />
      <path
        d="M0 235 Q360 224 720 238 T1440 232 L1440 280 L0 280 Z"
        fill="currentColor"
        opacity="0.20"
      />
      <path
        d="M0 256 Q300 248 600 258 T1200 254 T1440 256 L1440 280 L0 280 Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M0 215 L1440 215"
        stroke="currentColor"
        strokeOpacity="0.30"
        strokeWidth="1.2"
      />

      {/* ── Single palm — right side, detailed illustration ── */}
      <g transform="translate(1240 215)">
        {/* Curved tapered trunk */}
        <path
          d="M0,0 Q3,-38 8,-78 Q14,-118 22,-150 Q29,-176 38,-186"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeOpacity="0.9"
        />

        {/* Bark texture — subtle horizontal arcs along the trunk */}
        <g
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          strokeOpacity="0.55"
          strokeLinecap="round"
        >
          <path d="M-2,-22 Q3,-19 8,-23" />
          <path d="M0,-46 Q5,-43 10,-47" />
          <path d="M3,-70 Q8,-67 13,-71" />
          <path d="M7,-94 Q12,-91 17,-95" />
          <path d="M11,-118 Q16,-115 21,-119" />
          <path d="M16,-142 Q21,-139 26,-143" />
          <path d="M22,-164 Q27,-161 32,-165" />
        </g>

        {/* Crown of fronds — radiate from the trunk top */}
        <g transform="translate(38 -186)">
          {/* Coconut cluster sits behind the fronds */}
          <g fill="currentColor" fillOpacity="0.9">
            <circle cx="-2" cy="4" r="3.6" />
            <circle cx="5" cy="2" r="3.4" />
            <circle cx="1" cy="9" r="3.2" />
          </g>

          {/* 9 fronds at varied rotations — fan toward upper-right
              keeping the headline area on the left clear */}
          <use href="#sk-frond" transform="rotate(-95) scale(0.95)" />
          <use href="#sk-frond" transform="rotate(-60)" />
          <use href="#sk-frond" transform="rotate(-25) scale(1.05)" />
          <use href="#sk-frond" transform="rotate(15)" />
          <use href="#sk-frond" transform="rotate(50) scale(0.9)" />
          <use href="#sk-frond" transform="rotate(-130) scale(0.9)" />
          <use href="#sk-frond" transform="rotate(-160) scale(0.8)" />
          <use href="#sk-frond" transform="rotate(170) scale(0.75)" />
          <use href="#sk-frond" transform="rotate(-80) scale(0.7)" opacity="0.55" />
        </g>
      </g>
    </svg>
  );
}

/* Featured sneaker — sits with no background using mix-blend-multiply */
function FeaturedSneaker() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] aspect-square">
      {/* Soft brand glow behind */}
      <div
        aria-hidden
        className="absolute inset-x-[10%] top-[14%] bottom-[10%] rounded-[50%]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(110,197,227,0.32) 0%, rgba(110,197,227,0.10) 55%, transparent 75%)",
          filter: "blur(20px)",
        }}
      />

      {/* The sneaker (white-bg photo → multiply removes the background) */}
      <Image
        src={IMG.heroSneaker}
        alt="Freshly cleaned white sneaker"
        fill
        priority
        sizes="(max-width: 1024px) 80vw, 38vw"
        className="object-contain mix-blend-multiply"
        style={{
          filter:
            "contrast(1.04) drop-shadow(0 24px 28px rgba(14,58,77,0.18)) drop-shadow(0 6px 10px rgba(14,58,77,0.10))",
        }}
      />

      {/* Cleaning shimmer — diagonal light sweep, animates across the sneaker */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
      >
        <div
          className="absolute -inset-1/2 sk-shimmer"
          style={{
            background:
              "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.55) 50%, transparent 60%)",
          }}
        />
      </div>

      {/* Soft ellipse shadow under the sneaker */}
      <div
        aria-hidden
        className="absolute left-[14%] right-[14%] bottom-[4%] h-6 rounded-[50%] bg-ink-950/15 blur-md"
      />

      <style>{`
        @keyframes sk-shimmer {
          0%   { transform: translateX(-60%); opacity: 0; }
          15%  { opacity: 0.9; }
          50%  { transform: translateX(60%); opacity: 0; }
          100% { transform: translateX(60%); opacity: 0; }
        }
        .sk-shimmer { animation: sk-shimmer 3.8s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

/* ───────────────────────── How It Works ───────────────────────── */
function HowItWorks() {
  const steps: {
    step: string;
    title: string;
    copy: string;
    icon: React.ReactNode;
  }[] = [
    {
      step: "01",
      title: "Book Your Service",
      copy:
        "Select your sneaker cleaning service through our website and schedule your appointment instantly in just a few simple steps.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
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
      copy:
        "Bring your shoes to our Sneakky Klean Miami location or request pickup and delivery if available in your area.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
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
      copy:
        "Our team checks your shoes, cleans them professionally, and uses the right method based on material and service selected.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
          <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" />
          <path d="M6 16l.6 1.6L8 18l-1.4.4L6 20l-.6-1.6L4 18l1.4-.4z" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Receive Freshly Cleaned Shoes",
      copy:
        "Pick up your sneakers from our shop or get them delivered back clean, fresh, and ready to wear.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
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
        {/* Centered header */}
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <div className="eyebrow mx-auto">How it works</div>
          </div>
          <h2 className="mt-3 text-[32px] sm:text-[44px] md:text-[56px] lg:text-[60px] font-semibold tracking-[-0.03em] leading-[1.04] text-balance text-ink-950">
            Expert care from start to finish.
          </h2>
          <p className="mt-5 text-[16px] md:text-[18px] text-ink-600 leading-[1.6]">
            Get a fresh pair in 24 to 72 hours.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 md:mt-20 relative">
          {/* Dashed connectors layer (desktop only) */}
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

function StepCard({
  title,
  copy,
  icon,
}: {
  step: string;
  title: string;
  copy: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col items-center text-center px-2">
      {/* Circle with icon — locked size so all circles align horizontally */}
      <div className="h-[112px] w-[112px] rounded-full ring-1 ring-brand-200 flex items-center justify-center bg-white shadow-[0_12px_32px_-12px_rgba(110,197,227,0.40)]">
        <div className="h-[72px] w-[72px] rounded-full bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center text-brand-700 ring-1 ring-brand-200/70">
          {icon}
        </div>
      </div>

      {/* Title — uniform size, min-height reserves 2 lines so 1-line and
          2-line titles all start their bottom edge at the same y */}
      <h3 className="mt-7 text-[17px] font-semibold tracking-[-0.015em] leading-[1.3] text-ink-950 min-h-[2.6em] max-w-[230px] mx-auto flex items-center justify-center">
        {title}
      </h3>

      {/* Copy — uniform size, uniform max-width, balanced wrap */}
      <p className="mt-3 text-[14px] text-ink-600 leading-[1.6] max-w-[230px] mx-auto text-pretty">
        {copy}
      </p>
    </div>
  );
}

/* Three dashed arcs that flow between the 4 step circles (desktop only) */
function StepConnectors() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1000 60"
      preserveAspectRatio="xMidYMid meet"
      className="hidden md:block pointer-events-none absolute inset-x-0 top-[42px] lg:top-[48px] w-full text-brand-300"
    >
      {/* Centers of 4 circles at x = 125, 375, 625, 875 in a 1000-wide viewBox */}
      <path
        d="M 180 30 Q 250 -8 320 30"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeDasharray="4 6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 430 30 Q 500 68 570 30"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeDasharray="4 6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 680 30 Q 750 -8 820 30"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeDasharray="4 6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Small decorative sparkle cluster above the headline */
function DecorationMotif() {
  return (
    <svg
      width="46"
      height="36"
      viewBox="0 0 46 36"
      fill="none"
      className="mx-auto text-brand-500"
      aria-hidden
    >
      <g fill="currentColor">
        <path d="M23 0l1.4 3.6L28 5l-3.6 1.4L23 10l-1.4-3.6L18 5l3.6-1.4z" />
        <path d="M9 14l.9 2.2L12 17l-2.1.8L9 20l-.9-2.2L6 17l2.1-.8z" />
        <path d="M37 11l.9 2.2L40 14l-2.1.8L37 17l-.9-2.2L34 14l2.1-.8z" />
        <path d="M14 28l.7 1.6L16 30l-1.3.4L14 32l-.7-1.6L12 30l1.3-.4z" />
        <path d="M32 26l.7 1.6L34 28l-1.3.4L32 30l-.7-1.6L30 28l1.3-.4z" />
      </g>
    </svg>
  );
}

/* ───────────────────────── Before / After ───────────────────────── */
function BeforeAfter() {
  const beforeList = [
    "Dirty uppers",
    "Stained midsoles",
    "Yellow soles",
    "Sand and street buildup",
    "Bad odor",
    "Scuffed designer sneakers",
    "Sneakers you avoid wearing",
  ];
  const afterList = [
    "Cleaner uppers",
    "Brighter midsoles",
    "Fresher smell",
    "Detailed finish",
    "Better appearance",
    "More confidence",
    "Sneakers ready for your next fit",
  ];

  return (
    <Section className="bg-ink-50">
      <Container>
        <SectionHeading
          eyebrow="Before, after"
          title="See the Sneakky Klean difference."
          description="Miami heat, humidity, beach dust, rain, nightlife, and everyday city wear can make expensive sneakers look old fast. We restore confidence, protect your investment, and extend the life of every pair."
        />

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <CompareCard
            label="Before"
            src={IMG.before}
            tone="dark"
            items={beforeList}
          />
          <CompareCard
            label="After"
            src={IMG.after}
            tone="light"
            items={afterList}
          />
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/reviews" variant="secondary" size="lg">
            View Results
          </Button>
        </div>
      </Container>
    </Section>
  );
}

function CompareCard({
  label,
  src,
  tone,
  items,
}: {
  label: string;
  src: string;
  tone: "dark" | "light";
  items: string[];
}) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white ring-1 ring-black/[0.05] flex flex-col">
      <div className="relative aspect-[5/4]">
        <Image
          src={src}
          alt={`${label} sneaker care`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className={`absolute inset-0 ${
            tone === "dark"
              ? "bg-gradient-to-t from-black/55 via-black/10 to-transparent"
              : "bg-gradient-to-t from-white/40 via-transparent to-transparent"
          }`}
        />
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 h-8 px-3 rounded-full bg-white/95 backdrop-blur-sm ring-1 ring-black/5 text-[12px] font-semibold tracking-[-0.005em] text-ink-950">
          <span
            aria-hidden
            className={`h-1.5 w-1.5 rounded-full ${
              tone === "dark" ? "bg-rose-500" : "bg-brand-500"
            }`}
          />
          {label}
        </div>
      </div>
      <ul className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-[14px] text-ink-700 leading-[1.5]"
          >
            <span
              aria-hidden
              className={`mt-2 h-1.5 w-1.5 rounded-full flex-none ${
                tone === "dark" ? "bg-rose-400" : "bg-brand-500"
              }`}
            />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

/* ───────────────────────── Services Offered ───────────────────────── */
function ServicesOffered() {
  const tiles: {
    title: string;
    copy: string;
    href: string;
    img: string;
  }[] = [
    {
      title: "Cleaning",
      copy: "Studio-grade cleans for sneakers, suede, leather, white pairs, and more.",
      href: "/services#cleaning",
      img: "https://res.cloudinary.com/dspez5cnn/image/upload/v1779966518/image_50_b1wb7y.png",
    },
    {
      title: "Restoration",
      copy: "Repair, reglue, repaint, de-yellow, and rebuild. For pairs that deserve more.",
      href: "/services#restoration",
      img: "https://res.cloudinary.com/dspez5cnn/image/upload/v1779966517/image_51_ssngqh.png",
    },
    {
      title: "Treatments",
      copy: "Oxidation reversal, sole whitening, waterproofing, and deodorizing care.",
      href: "/services#treatment",
      img: "https://res.cloudinary.com/dspez5cnn/image/upload/v1779966517/image_53_vuoe4c.png",
    },
  ];

  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Services built for every sneaker condition."
          description="From regular maintenance to full restoration, every service is hand-finished by our Miami specialists."
          align="center"
        />
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiles.map((t, i) => (
            <ServiceTile key={t.title} {...t} delay={i * 800} />
          ))}
        </div>
      </Container>

      {/* Shared keyframes for the cleaning-sweep effect — server-rendered, applies globally */}
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
  // Negative animation-delay so the loop "ticks" from a randomized offset,
  // staggering the three tiles so they don't sweep in perfect lockstep.
  const animationDelay = `${-delay}ms`;

  // Use a single blue accent for all service tiles (matches middle card)
  const accent = "from-brand-50 to-brand-100";
  const checkStroke = "#3da6c8"; // brand blue

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-3xl ring-1 ring-black/[0.05] hover:ring-brand-500 transition-all flex flex-col bg-white"
    >
      {/* Top image panel with colored background; slightly shorter */}
      <div className={`relative aspect-[5/3] flex items-center justify-center rounded-t-3xl bg-gradient-to-br ${accent}`}>
        <div className="relative w-full h-full">
          {/* reduce shoe image size by 10px as requested */}
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain p-6 drop-shadow-[0_18px_36px_rgba(14,58,77,0.16)]"
          />
        </div>

        {/* Circular icon moved to left side, overlapping the image split */}
        <div className="absolute left-6 md:left-7 -bottom-7 z-20">
          <div
            className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-[0_6px_14px_-5px_rgba(0,0,0,0.14)]"
            style={{ border: "0.7px solid rgba(0,0,0,0.08)" }}
          >
            {/* Use provided Cloudinary icons per category */}
            {title.toLowerCase().includes("restor") ? (
              <Image
                src="https://res.cloudinary.com/dspez5cnn/image/upload/v1779973331/Group_243_btua0l.png"
                alt="Restoration icon"
                width={28}
                height={28}
                className="object-contain"
              />
            ) : title.toLowerCase().includes("treat") ? (
              <Image
                src="https://res.cloudinary.com/dspez5cnn/image/upload/v1779973331/Group_eeizel.png"
                alt="Treatments icon"
                width={28}
                height={28}
                className="object-contain"
              />
            ) : (
              <Image
                src="https://res.cloudinary.com/dspez5cnn/image/upload/v1779973331/Group_244_mbbavf.png"
                alt="Cleaning icon"
                width={28}
                height={28}
                className="object-contain"
              />
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-7 flex flex-col gap-4">
        <h3 className="text-[22px] font-semibold tracking-[-0.015em] text-ink-950">{title}</h3>
        <p className="text-[15px] text-ink-600 leading-[1.6]">{copy}</p>

        {/* Feature bullets matching screenshot spacing, using brand blue checks */}
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
          {/* Tier 1 — Essential Clean */}
          <PricingCard
            name="Essential Clean"
            price="$34"
            priceLabel="Starting at"
            blurb="Quick refresh for everyday sneakers-uppers, midsoles, and light detailing."
            cta="Book this service"
            ctaHref="/book"
            variant="essential"
            features={["Upper cleaning", "Midsole cleaning"]}
          />

          {/* Tier 2 — Signature (most popular) */}
          <PricingCard
            name="Signature Clean"
            price="$54"
            priceLabel="Starting at"
            blurb="Complete sneaker clean and restoration-deep upper, midsole, and detailing."
            cta="Book this service"
            ctaHref="/book"
            featured
            variant="signature"
            features={["Deep upper cleaning", "Midsole cleaning", "Undersole cleaning", "Lace wash", "Detail Finish"]}
          />

          {/* Tier 3 — Premium Care */}
          <PricingCard
            name="Premium Care"
            price="$84"
            priceLabel="Starting at"
            blurb="Advanced care for high-value, delicate, and specialty sneakers. Materials, repairs, and protection."
            cta="Book this service"
            ctaHref="/book"
            variant="premium"
            features={["Premium material treatment", "Advanced stain removal", "Suede / specialty fabric care", "Full detail cleaning"]}
          />

          {/* Tier 4 — Klean Club (subscription) */}
          <PricingCard
            name="Restoration Service"
            price="$110+"
            priceLabel=""
            priceSuffix={undefined}
            badge="Restoration"
            blurb="For heavily worn or damaged sneakers that need more than a clean."
            cta="Contact us"
            ctaHref="/contact"
            tone="brand"
            variant="klean"
            features={["Oxidation treatment", "Deep stain correction or paint touch up", "Specialized restoration work"]}
          />
        </div>
      </Container>
    </Section>
  );
}

function PricingCard({
  name,
  price,
  priceLabel = "Starting at",
  priceSuffix,
  blurb,
  cta,
  ctaHref,
  featured = false,
  tone = "default",
  variant = "essential",
  badge,
  features,
}: {
  name: string;
  price: string;
  priceLabel?: string;
  priceSuffix?: string;
  blurb: string;
  cta: string;
  ctaHref: string;
  featured?: boolean;
  tone?: "default" | "brand";
  variant?: "essential" | "signature" | "premium" | "klean";
  badge?: string;
  features?: string[];
}) {
  const isFeatured = featured;
  const isBrand = tone === "brand";
  const shoeVariant = variant || "essential";

  const cardCls = isFeatured
    ? "bg-ink-950 text-white ring-1 ring-brand-500"
    : isBrand
    ? "bg-gradient-to-br from-brand-500 to-brand-700 text-white ring-1 ring-brand-600"
    : "bg-white ring-1 ring-black/[0.05]";

  const labelTone = isFeatured || isBrand ? "text-white/65" : "text-ink-500";
  const priceTone = isFeatured || isBrand ? "text-white" : "text-ink-950";
  const blurbTone = isFeatured || isBrand ? "text-white/80" : "text-ink-600";
  const nameTone = isFeatured || isBrand ? "text-white" : "text-ink-950";

  return (
    <div className={`relative rounded-3xl p-7 md:p-8 flex flex-col h-full ${cardCls}`}>
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 inline-flex items-center h-6 px-3 rounded-full bg-brand-500 text-ink-950 text-[10.5px] font-bold tracking-[0.06em] z-10">
          Most popular
        </div>
      )}
      {badge && !isFeatured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 inline-flex items-center h-6 px-3 rounded-full bg-white text-ink-950 text-[10.5px] font-bold tracking-[0.06em] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.18)] z-10">
          {badge}
        </div>
      )}

      <h3 className={`text-[18px] font-semibold tracking-[-0.015em] ${nameTone}`}>
        {name}
      </h3>
      <div className={`mt-4 text-[12px] ${labelTone}`}>{priceLabel}</div>
      <div
        className={`mt-1 flex items-baseline gap-1 text-[44px] md:text-[48px] font-semibold tracking-[-0.035em] leading-none ${priceTone}`}
      >
        {price}
        {priceSuffix && (
          <span className={`text-[16px] font-medium ${labelTone}`}>
            {priceSuffix}
          </span>
        )}
      </div>
      <div className="flex-1 pb-2.5">
        <p className={`mt-5 text-[14px] leading-[1.55] ${blurbTone}`}>{blurb}</p>
        {features && features.length > 0 && (
          <ul className="mt-6 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-[14px]">
                <span
                  className={`flex-none mt-0.5 h-5 w-5 rounded-full flex items-center justify-center ${isFeatured || isBrand ? "bg-white" : "bg-ink-900"}`}
                  aria-hidden
                >
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
      <Button
        href={ctaHref}
        variant={isFeatured || isBrand ? "white" : "primary"}
        size="md"
        className="mt-auto w-full"
      >
        {cta}
      </Button>
    </div>
  );
}

/* ───────────────────────── Klean Club ───────────────────────── */
function KleanClubCallout() {
  const benefits = [
    "Member savings",
    "Priority service",
    "Easy repeat bookings",
    "Regular sneaker care",
    "Better value for frequent cleanings",
    "Perfect for sneaker rotations",
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] md:rounded-[36px] bg-ink-950 text-white">
          <div className="absolute inset-0">
            <Image
              src={IMG.kleanClub}
              alt="Miami skyline pastels"
              fill
              sizes="100vw"
              className="object-cover opacity-50"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(110deg, rgba(9,9,11,0.92) 0%, rgba(9,9,11,0.75) 45%, rgba(9,9,11,0.30) 100%), radial-gradient(40% 80% at 100% 100%, rgba(110,197,227,0.35) 0%, transparent 60%)",
              }}
            />
          </div>

          <div className="relative p-8 sm:p-12 md:p-16 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-end">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.06em] text-brand-300">
                Klean Club
              </div>
              <h2 className="mt-3 text-[36px] sm:text-[48px] md:text-[60px] font-semibold tracking-[-0.03em] leading-[1.02] text-balance">
                Keep your rotation fresh.
              </h2>
              <p className="mt-5 max-w-xl text-[15px] sm:text-[16px] text-white/75 leading-[1.6]">
                Klean Club is made for sneaker lovers who want regular sneaker care without booking from scratch every time. Ideal for collectors, athletes, professionals, students, and anyone who wears sneakers often in Miami.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button href="/klean-club/join" variant="white" size="lg">
                  Join Klean Club
                </Button>
                <Button href="/klean-club" variant="ghost" size="lg" className="text-white hover:bg-white/10">
                  Learn more
                </Button>
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-2xl bg-white/[0.06] backdrop-blur-sm ring-1 ring-white/10 px-4 py-3.5 text-[14px] text-white/90"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-400 flex-none shadow-[0_0_8px_rgba(110,197,227,0.7)]"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── Reviews ───────────────────────── */
function Reviews() {
  const reviews = [
    {
      quote:
        "My sneakers looked fresh again without feeling over-cleaned or damaged. The service felt premium, careful, and worth it.",
      name: "Camila R.",
      city: "Brickell, Miami",
    },
    {
      quote:
        "I used to clean my shoes at home, but Sneakky Klean gave a much better finish. My Jordans came back looking ready to wear again.",
      name: "Andre T.",
      city: "Wynwood, Miami",
    },
    {
      quote:
        "The booking process was simple, and the before and after result was clear. This is perfect for anyone who cares about how their sneakers look.",
      name: "Sofia M.",
      city: "Coral Gables, Miami",
    },
    {
      quote:
        "Klean Club makes sense if you wear sneakers every day. It keeps my rotation clean and saves me time.",
      name: "Marcus L.",
      city: "South Beach, Miami",
    },
  ];

  return (
    <Section className="bg-ink-50">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by sneaker lovers."
          description="Real customers, real pairs. A few words from the people who trust our Miami studio with their rotation."
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
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
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

        {/* Google reviews CTA */}
        <div className="mt-10 md:mt-12 flex justify-center">
          <a
            href="https://share.google/NCWzE3qOr41DL0bm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read all reviews on Google — 4.9 star rating from 261 reviews"
            className="group inline-flex items-center h-14 sm:h-[60px] pl-4 sm:pl-5 pr-2 rounded-full bg-white ring-1 ring-ink-200 hover:ring-brand-500 shadow-[0_8px_22px_-10px_rgba(14,58,77,0.25)] hover:shadow-[0_12px_28px_-10px_rgba(14,58,77,0.4)] transition-all gap-3 sm:gap-4"
          >
            <GoogleGIcon />

            {/* Rating + stars */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[15px] sm:text-[17px] font-bold text-ink-950 tracking-[-0.005em]">
                4.9
              </span>
              <div
                className="flex gap-0.5 text-amber-400"
                aria-label="4.9 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width="13"
                    height="13"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M7 0l1.8 4.7L14 5l-4 3.4L11.4 14 7 11.2 2.6 14 4 8.4 0 5l5.2-.3z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-5 w-px bg-ink-200" />

            {/* Review count */}
            <span className="text-[13px] sm:text-[14px] text-ink-700">
              <span className="font-semibold text-ink-950">261</span>{" "}
              <span className="hidden sm:inline">Google reviews</span>
              <span className="sm:hidden">reviews</span>
            </span>

            {/* Arrow button */}
            <span className="ml-1 sm:ml-2 inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-ink-950 text-white group-hover:bg-brand-500 group-hover:text-ink-950 transition-colors">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </span>
          </a>
        </div>
      </Container>
    </Section>
  );
}

/* Inline multi-color Google "G" mark */
function GoogleGIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
      />
    </svg>
  );
}

/* ───────────────────────── FAQs ───────────────────────── */
function FAQs() {
  const faqs = [
    {
      q: "How much does sneaker cleaning cost in Miami?",
      a: "Sneaker cleaning starts at $34. Deep cleaning starts at $54, premium care starts at $84, and restoration services start at $110+ depending on the condition and service needed.",
    },
    {
      q: "How long does sneaker cleaning take?",
      a: "Most sneaker cleaning orders are completed within 24 to 72 hours. Restoration or specialty care may take longer depending on the condition of the sneakers.",
    },
    {
      q: "Do you clean designer, suede, and luxury sneakers?",
      a: "Yes. Premium Care is designed for designer sneakers, suede, nubuck, luxury pairs, and specialty materials that need careful handling.",
    },
    {
      q: "Can you remove every stain?",
      a: "Not every stain can be fully removed. Results depend on the material, stain type, age of the stain, and overall sneaker condition.",
    },
    {
      q: "Do you offer pickup and delivery in Miami?",
      a: "Pickup and delivery may be available depending on your Miami location and selected service.",
    },
    {
      q: "What is Klean Club?",
      a: "Klean Club is Sneakky Klean's membership option for customers who want regular sneaker cleaning, member savings, priority service, and easy repeat bookings.",
    },
    {
      q: "Why should I choose professional sneaker cleaning instead of cleaning at home?",
      a: "Professional sneaker care helps reduce the risk of damaging expensive materials, saves time, and gives sneakers a more detailed finish than basic DIY cleaning.",
    },
    {
      q: "Who is this service best for?",
      a: "This service is best for sneaker enthusiasts, professionals, athletes, collectors, luxury fashion buyers, students, busy professionals, parents, and anyone who wants clean sneakers without the hassle.",
    },
  ];

  return (
    <Section className="bg-white pb-12 sm:pb-14 md:pb-16">
      <Container size="narrow">
        <SectionHeading
          eyebrow="FAQs"
          title="Common questions, answered."
          description="The things customers ask most about Sneakky Klean Miami, in one place."
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
                      <path
                        d="M7 2v10M2 7h10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
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

        {/* Help-page CTA */}
        <div className="mt-10 md:mt-12 rounded-3xl bg-ink-50 ring-1 ring-black/[0.05] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <div className="text-[11px] font-semibold tracking-[0.06em] text-brand-700">
              Need more help?
            </div>
            <div className="mt-2 text-[18px] md:text-[20px] font-semibold tracking-[-0.015em] text-ink-950">
              Can't find what you're looking for?
            </div>
            <p className="mt-1 text-[14px] text-ink-600 leading-[1.5]">
              Browse the full Help Center or talk to our Miami team directly.
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

/* ───────────────────────── Final CTA ───────────────────────── */
function FinalCta() {
  return (
    <Section className="bg-white pt-0 pb-16 md:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] md:rounded-[40px] bg-ink-950 text-white">
          {/* Atmospheric background — brand glows + subtle grid */}
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
          {/* Top accent line */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(110,197,227,0.55) 50%, transparent 100%)",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-16 p-6 sm:p-10 md:p-14 lg:p-20">
            {/* Left: editorial statement + CTA */}
            <div>
              <div className="text-[11px] font-semibold tracking-[0.06em] text-brand-300">
                Sneakky Klean Miami
              </div>
              <h2 className="mt-5 text-[36px] sm:text-[52px] md:text-[64px] lg:text-[78px] font-semibold tracking-[-0.04em] leading-[1.0] text-balance">
                Bring your{" "}
                <span className="italic font-light text-brand-300">best</span>{" "}
                pairs in.
              </h2>
              <p className="mt-6 max-w-md text-[16px] md:text-[17px] text-white/70 leading-[1.6]">
                Drop off in studio, schedule a Miami pickup, or ship in from anywhere in North America. Most cleans finished within 72 hours.
              </p>
              <div className="mt-10">
                <BookCta variant="light" />
              </div>
            </div>

            {/* Right: studio info */}
            <aside className="lg:border-l lg:border-white/[0.08] lg:pl-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-7 gap-x-8 self-center">
              <InfoBlock
                label="Studio"
                icon={
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M8 1.5c-3 0-5.25 2.35-5.25 5.2 0 3.7 5.25 7.8 5.25 7.8s5.25-4.1 5.25-7.8C13.25 3.85 11 1.5 8 1.5z" stroke="currentColor" strokeWidth="1.4" />
                    <circle cx="8" cy="6.7" r="1.9" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                }
                lines={["1207 Lincoln Road", "Miami Beach, FL 33139"]}
                actionLabel="Get directions"
                actionHref="https://maps.google.com/?q=1207+Lincoln+Rd+Miami+Beach+FL"
                external
              />
              <InfoBlock
                label="Hours"
                icon={
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M8 4.5V8l2.5 1.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                lines={[
                  "Mon–Fri  10:00 – 8:00",
                  "Saturday  11:00 – 8:00",
                  "Sunday  12:00 – 6:00",
                ]}
              />
              <InfoBlock
                label="Contact"
                icon={
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <rect x="2" y="3.5" width="12" height="9" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M2.5 4.5L8 8.5l5.5-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                lines={[loc.phone, loc.email]}
                actionLabel="Email the studio"
                actionHref={`mailto:${loc.email}`}
              />
            </aside>
          </div>
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
  external,
}: {
  label: string;
  icon: React.ReactNode;
  lines: string[];
  actionLabel?: string;
  actionHref?: string;
  external?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.06em] text-brand-300">
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
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-300 hover:text-brand-200 transition-colors"
        >
          {actionLabel}
          <span aria-hidden>→</span>
        </a>
      )}
    </div>
  );
}
