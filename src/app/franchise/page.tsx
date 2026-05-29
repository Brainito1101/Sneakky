"use client";

import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";

/* ─────────────── Page ─────────────── */
export default function FranchisePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <IndustryOpportunity />
      <WhySneakky />
      <RevenueStreams />
      <TrainingSupport />
      <FranchiseProcess />
      <MeetTheFounder />
      <Territories />
      <FAQs />
      <FinalCta />
    </>
  );
}

/* ─────────────── 1. Hero ─────────────── */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-ink-950">
      {/* Soft brand gradient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 70% at 90% 0%, rgba(110,197,227,0.18) 0%, transparent 60%), radial-gradient(40% 60% at 0% 100%, rgba(110,197,227,0.10) 0%, transparent 60%), linear-gradient(180deg, #f3fbff 0%, #ffffff 70%)",
        }}
      />

      <Container className="relative pt-12 sm:pt-20 md:pt-24 lg:pt-28 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-white ring-1 ring-brand-200 shadow-[0_6px_18px_-8px_rgba(110,197,227,0.45)] text-[12.5px] font-medium text-ink-900">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_10px_rgba(110,197,227,0.85)]" />
            Franchise Opportunity
          </div>

          <h1 className="mt-7 text-[40px] sm:text-[60px] md:text-[76px] lg:text-[88px] font-semibold tracking-[-0.04em] leading-[0.98] text-balance">
            Turn your passion for sneakers into a{" "}
            <span className="italic font-light text-brand-600">profitable</span>{" "}
            business.
          </h1>

          <p className="mt-7 max-w-2xl text-[16px] sm:text-[18px] text-ink-700 leading-[1.6] text-pretty">
            Own a Sneakky Klean, the premium sneaker cleaning and restoration
            brand built for scale. A focused niche, recurring demand, and a
            proven system from day one.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Button href="#apply" size="lg">
              Apply Now
              <span aria-hidden>→</span>
            </Button>
            <Button
              href="https://www.youtube.com/watch?v=fsIaVUHRly0"
              variant="white"
              size="lg"
              className="ring-1 ring-ink-200"
            >
              <PlaySmall /> Watch the Webinar
              <span className="text-ink-500">(2 min)</span>
            </Button>
          </div>

          {/* Hero stats strip */}
          <dl className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-8 max-w-3xl">
            {[
              ["$99B", "Global sneaker market"],
              ["100%", "Sneaker-focused niche"],
              ["2019", "Founded in Miami, FL"],
            ].map(([stat, label]) => (
              <div key={label}>
                <dt className="text-[36px] sm:text-[40px] md:text-[44px] font-semibold tracking-[-0.03em] leading-none text-ink-950">
                  {stat}
                </dt>
                <dd className="mt-2 text-[13px] text-ink-600">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

/* ─────────────── 2. Trust Bar ─────────────── */
function TrustBar() {
  const items = [
    "4.9 stars on Google",
    "10,000+ pairs cleaned",
    "Studios in Miami, NYC and Saskatoon",
    "Founded 2019",
    "Featured at Art Basel, NCAA Final Four, PGA events",
  ];
  return (
    <section className="bg-ink-50 border-y border-ink-200/70">
      <Container className="py-10 md:py-12">
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700 text-center md:text-left">
          Backed by a proven brand
        </div>
        <ul className="mt-5 flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-3">
          {items.map((it) => (
            <li
              key={it}
              className="inline-flex items-center gap-2.5 text-[13.5px] sm:text-[14px] text-ink-800"
            >
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-brand-500 flex-none"
              />
              {it}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ─────────────── 3. Industry Opportunity ─────────────── */
function IndustryOpportunity() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="Industry opportunity"
          title="A $99B market. A growing problem. Almost no specialists."
          description="Sneaker culture is one of the fastest-growing lifestyle categories. Owners spend more, hold pairs longer, and demand professional care. Sneakky Klean sits at the intersection of fashion, hygiene, and recurring service."
          align="center"
        />

        {/* ── 1. Market infographic ── */}
        <div className="mt-12 md:mt-16 rounded-[28px] bg-ink-50 ring-1 ring-ink-200 overflow-hidden">
          <div className="p-6 sm:p-8 md:p-10 grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 items-center">
            {/* Hero stat with growth */}
            <div>
              <Eyebrow>The market</Eyebrow>
              <div className="mt-3 text-[64px] sm:text-[88px] md:text-[104px] lg:text-[120px] font-semibold tracking-[-0.04em] leading-[0.92] text-ink-950">
                $99B
              </div>
              <div className="mt-2 text-[14px] text-ink-600">
                Global sneaker market today.
              </div>
              <div className="mt-6 inline-flex items-center gap-3 h-12 pl-3 pr-5 rounded-full bg-white ring-1 ring-brand-200 shadow-[0_6px_18px_-8px_rgba(110,197,227,0.40)]">
                <GrowthArrow />
                <div>
                  <div className="text-[16px] font-semibold tracking-[-0.01em] text-brand-700 leading-none">
                    $159B by 2034
                  </div>
                  <div className="text-[11px] text-ink-500 leading-none mt-1">
                    5.26% CAGR
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting stats */}
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-ink-200 rounded-2xl overflow-hidden ring-1 ring-ink-200">
              {[
                ["$26B", "US spending in 2025"],
                ["2.5B", "Pairs sold per year"],
                ["12B+", "Pairs sold last 5 years"],
                ["$8.5B → $30B", "Resale market by 2030"],
                ["17.4% / 7.9%", "Designer share / CAGR"],
                ["$230M → $500M", "Refurbished by 2035"],
              ].map(([stat, label]) => (
                <li
                  key={label}
                  className="bg-white p-4 md:p-5 min-h-[100px] flex flex-col justify-between gap-2"
                >
                  <div className="text-[19px] sm:text-[22px] md:text-[24px] font-semibold tracking-[-0.02em] leading-tight text-ink-950">
                    {stat}
                  </div>
                  <div className="text-[12px] text-ink-600 leading-[1.4]">
                    {label}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── 2. Hygiene + Cadence side by side ── */}
        <div className="mt-5 md:mt-6 grid lg:grid-cols-2 gap-5 md:gap-6">
          {/* Hygiene */}
          <div className="rounded-[28px] bg-ink-50 ring-1 ring-ink-200 p-6 sm:p-8 flex flex-col">
            <div className="flex items-start justify-between gap-3">
              <div>
                <Eyebrow>The hygiene reality</Eyebrow>
                <h3 className="mt-2 text-[20px] sm:text-[24px] font-semibold tracking-[-0.02em] text-ink-950 leading-[1.2] text-balance">
                  People don't realise how dirty their sneakers are.
                </h3>
              </div>
              <GermIcon />
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-px bg-ink-200 rounded-2xl overflow-hidden ring-1 ring-ink-200 flex-1">
              {[
                ["421,000", "Bacteria outside"],
                ["3,000", "Bacteria inside"],
                ["½ pint", "Foot moisture per day"],
                ["90 to 99%", "Removed by a pro clean"],
              ].map(([stat, label]) => (
                <li key={label} className="bg-white p-4 min-h-[88px] flex flex-col justify-between gap-2">
                  <div className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.02em] leading-tight text-ink-950">
                    {stat}
                  </div>
                  <div className="text-[12px] text-ink-600 leading-[1.4]">{label}</div>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[11px] text-ink-500 leading-[1.5]">
              Shoes can carry E. coli, salmonella, MRSA, and fungal spores.
              Source: Yale School of Medicine, Touro University Nevada.
            </p>
          </div>

          {/* Cadence */}
          <div className="rounded-[28px] bg-ink-50 ring-1 ring-ink-200 p-6 sm:p-8 flex flex-col">
            <div className="flex items-start justify-between gap-3">
              <div>
                <Eyebrow>Cleaning cadence</Eyebrow>
                <h3 className="mt-2 text-[20px] sm:text-[24px] font-semibold tracking-[-0.02em] text-ink-950 leading-[1.2] text-balance">
                  Premium care needs regular service.
                </h3>
              </div>
              <CadenceIcon />
            </div>
            <ul className="mt-6 rounded-2xl ring-1 ring-ink-200 overflow-hidden bg-white flex-1">
              {[
                ["Daily-wear sneakers", "Every 2 to 4 weeks"],
                ["Gym and athletic shoes", "Every 2 to 3 weeks"],
                ["Premium and designer", "Every 6 to 8 weeks"],
                ["Suede and luxury", "Every 6 to 10 weeks"],
                ["Heavy outdoor use", "Weekly or after"],
              ].map(([type, freq], i) => (
                <li
                  key={type}
                  className={`flex items-center justify-between gap-4 px-5 py-3 ${
                    i ? "border-t border-ink-100" : ""
                  }`}
                >
                  <span className="text-[13.5px] text-ink-800">{type}</span>
                  <span className="text-[13px] font-semibold tracking-[-0.005em] text-brand-700">
                    {freq}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[11px] text-ink-500 leading-[1.5]">
              Industry and podiatrist guidance for hygiene and longevity.
            </p>
          </div>
        </div>

        {/* ── 3. Recurring revenue callout ── */}
        <div className="mt-5 md:mt-6 rounded-[28px] bg-brand-50 ring-1 ring-brand-200 p-6 md:p-8 grid sm:grid-cols-[auto_1fr] gap-6 items-center">
          <div className="text-center sm:text-left">
            <div className="text-[44px] sm:text-[52px] md:text-[60px] font-semibold tracking-[-0.035em] leading-none text-brand-700">
              30+
            </div>
            <div className="mt-1 text-[12px] uppercase tracking-[0.18em] font-semibold text-brand-700">
              cleans / customer / year
            </div>
          </div>
          <p className="text-[15px] md:text-[16px] text-ink-900 leading-[1.55]">
            The average premium sneaker owner with 5 pairs in rotation needs
            30+ professional cleans per year.{" "}
            <strong className="text-ink-950">
              Recurring revenue per customer, every customer.
            </strong>
          </p>
        </div>

        {/* ── 4. CTA strip ── */}
        <div className="mt-12 md:mt-16 rounded-[28px] bg-ink-950 text-white p-8 sm:p-10 md:p-12 grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-300">
              The opportunity
            </div>
            <p className="mt-3 text-[22px] sm:text-[26px] md:text-[30px] font-semibold tracking-[-0.025em] leading-[1.15] text-balance">
              A massive market. Built-in repeat demand. Almost no specialists.
              That's the Sneakky Klean opportunity.
            </p>
          </div>
          <div className="md:justify-self-end">
            <Button href="#apply" size="lg" variant="white">
              Apply Now
              <span aria-hidden>→</span>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* Small reusable eyebrow used inside the infographic */
function Eyebrow({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700 ${
        center ? "text-center" : ""
      }`}
    >
      {children}
    </div>
  );
}

function GrowthArrow() {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-white shadow-[0_4px_10px_-4px_rgba(110,197,227,0.6)]">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M5 19L19 5M19 5H9M19 5v10"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function GermIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      className="text-brand-500 flex-none"
      aria-hidden
    >
      <circle cx="20" cy="20" r="9" />
      <circle cx="20" cy="20" r="2.5" fill="currentColor" stroke="none" />
      <path d="M20 7v4M20 29v4M7 20h4M29 20h4M10.5 10.5l2.8 2.8M26.7 26.7l2.8 2.8M10.5 29.5l2.8-2.8M26.7 13.3l2.8-2.8" />
    </svg>
  );
}

function CadenceIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-brand-500 flex-none"
      aria-hidden
    >
      <circle cx="20" cy="20" r="13" />
      <path d="M20 12v8l5 3" />
      <path d="M20 4v3M20 33v3M36 20h-3M7 20H4" />
    </svg>
  );
}

/* ─────────────── 4. Why Sneakky Klean ─────────────── */
function WhySneakky() {
  const pillars = [
    { title: "Specialized niche", copy: "100% dedicated to sneaker care and restoration." },
    { title: "Premium positioning", copy: "We compete on quality and convenience, not price." },
    { title: "Multiple revenue streams", copy: "Cleaning services, add-on upgrades, and branded retail products." },
    { title: "Modern systems", copy: "POS integration, order tracking, mobile app, and SOP-driven operations." },
    { title: "End-to-end marketing", copy: "Dedicated landing page, Google Business profile, paid ads, and email funnels. We get the customers in the door." },
    { title: "Eco-conscious approach", copy: "Biodegradable cleaning solutions and sustainable practices customers care about." },
  ];
  return (
    <Section className="bg-ink-50">
      <Container>
        <SectionHeading
          eyebrow="Why Sneakky Klean"
          title="Not just another cleaning business."
          description="A modern lifestyle brand built around one of the fastest-growing markets in the world."
          align="center"
        />
        <ul className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-200 rounded-3xl overflow-hidden ring-1 ring-ink-200">
          {pillars.map((p, i) => (
            <li
              key={p.title}
              className="bg-white p-7 md:p-9 min-h-[220px] flex flex-col justify-between"
            >
              <div className="text-[13px] font-semibold tracking-[0.16em] text-brand-700">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-[20px] md:text-[22px] font-semibold tracking-[-0.018em] text-ink-950">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14.5px] text-ink-600 leading-[1.55]">{p.copy}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ─────────────── 5. Revenue Streams ─────────────── */
function RevenueStreams() {
  const streams = [
    {
      n: "01",
      title: "Core cleaning services",
      copy: "Essential, Signature, and Premium cleaning tiers covering everyday wear through luxury sneakers.",
    },
    {
      n: "02",
      title: "Add-on upgrades",
      copy: "Oxidation treatment, sole whitening, paint touch-ups, waterproofing, deodorizing, lace replacement, hat cleaning, and more.",
    },
    {
      n: "03",
      title: "Restoration services",
      copy: "Advanced restoration, paint correction, deep stain work, and specialty services for premium and designer sneakers.",
    },
    {
      n: "04",
      title: "Retail and branded products",
      copy: "Sneakky Klean Wipes, sneaker care kits, plus event activations, B2B partnerships, and mail-in service.",
    },
  ];
  return (
    <Section className="bg-ink-50">
      <Container>
        <SectionHeading
          eyebrow="Revenue model"
          title="Built to earn from day one."
          description="One storefront. Multiple income channels. Every customer is a chance to upsell, retain, and resell."
          align="center"
        />
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {streams.map((s) => (
            <div
              key={s.n}
              className="rounded-3xl bg-white ring-1 ring-black/[0.05] p-7 md:p-8 flex flex-col min-h-[260px]"
            >
              <div className="text-[13px] font-semibold tracking-[0.16em] text-brand-700">
                {s.n}
              </div>
              <h3 className="mt-6 text-[18px] md:text-[20px] font-semibold tracking-[-0.015em] text-ink-950">
                {s.title}
              </h3>
              <p className="mt-3 text-[14px] text-ink-600 leading-[1.6] flex-1">
                {s.copy}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─────────────── 7. Training & Support ─────────────── */
function TrainingSupport() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="Training and support"
          title="We set you up for success from day one."
          description="A structured, hands-on program that gets you operating with confidence."
          align="center"
        />

        {/* Big stat block */}
        <div className="mt-12 md:mt-16 rounded-[28px] bg-ink-950 text-white p-8 sm:p-10 md:p-12 grid md:grid-cols-[1fr_1.4fr] gap-8 items-center">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-300">
              Total training
            </div>
            <div className="mt-3 text-[60px] sm:text-[72px] md:text-[88px] font-semibold tracking-[-0.04em] leading-[0.95] text-white">
              80 hrs
            </div>
            <div className="mt-2 text-[14px] text-white/70">
              Structured training before opening day.
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
            <div className="bg-ink-950 p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-300">
                Classroom training
              </div>
              <div className="mt-2 text-[28px] font-semibold tracking-[-0.025em] text-white">
                16 hours
              </div>
              <ul className="mt-4 space-y-2 text-[13.5px] text-white/75">
                <li>Sneaker cleaning and restoration techniques</li>
                <li>Customer service excellence</li>
                <li>Marketing and business management fundamentals</li>
              </ul>
            </div>
            <div className="bg-ink-950 p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-300">
                On-the-job training
              </div>
              <div className="mt-2 text-[28px] font-semibold tracking-[-0.025em] text-white">
                64 hours
              </div>
              <ul className="mt-4 space-y-2 text-[13.5px] text-white/75">
                <li>Live store operations</li>
                <li>Workflow systems and SOPs</li>
                <li>Hands-on technical practice</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Ongoing support */}
        <div className="mt-10 md:mt-12">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700 text-center">
            Plus, ongoing support
          </div>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              "On-site pre-opening support",
              "Online training platform with step-by-step systems",
              "Ongoing operational guidance",
              "Marketing run for you: landing page, Google profile, paid ads, email funnel",
              "Access to exclusive tools and vendor networks",
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-ink-50 ring-1 ring-ink-200 p-4 text-[13.5px] text-ink-800 leading-[1.5]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

/* ─────────────── 8. Franchise Process ─────────────── */
function FranchiseProcess() {
  const steps = [
    {
      n: "01",
      title: "Apply",
      copy: "Submit the franchise application form. No obligation, fully confidential.",
    },
    {
      n: "02",
      title: "Discovery Call",
      copy: "A conversation with our franchise team to understand your goals and answer questions.",
    },
    {
      n: "03",
      title: "Review and qualification",
      copy: "Background, financial, and experience review. We're looking for the right fit on both sides.",
    },
    {
      n: "04",
      title: "Discovery Day",
      copy: "Visit Sneakky Klean HQ in Miami. Meet the founder, tour a live store, and see operations firsthand.",
    },
    {
      n: "05",
      title: "Sign and secure territory",
      copy: "Franchise agreement signed. Your territory is locked in.",
    },
    {
      n: "06",
      title: "Train, build, and launch",
      copy: "80 hours of training, site build-out, grand opening, and you're live.",
    },
  ];

  return (
    <Section className="bg-ink-50">
      <Container>
        <SectionHeading
          eyebrow="The process"
          title="From application to opening day."
          description="A clear, structured path. Here's exactly what to expect."
          align="center"
        />
        <ol className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-200 rounded-3xl overflow-hidden ring-1 ring-ink-200">
          {steps.map((s) => (
            <li
              key={s.n}
              className="bg-white p-7 md:p-9 min-h-[220px] flex flex-col justify-between gap-6"
            >
              <span className="text-[13px] font-semibold tracking-[0.16em] text-brand-700">
                Step {s.n}
              </span>
              <div>
                <h3 className="text-[20px] md:text-[22px] font-semibold tracking-[-0.018em] text-ink-950">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14.5px] text-ink-600 leading-[1.55]">{s.copy}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Marketing setup callout */}
        <MarketingSetupCallout />
      </Container>
    </Section>
  );
}

function MarketingSetupCallout() {
  const items: { title: string; copy: string }[] = [
    {
      title: "Dedicated landing page",
      copy: "Built for your territory, tuned for conversion.",
    },
    {
      title: "Google Business profile",
      copy: "Set up and optimised so local searches find you first.",
    },
    {
      title: "Paid ads",
      copy: "Meta and Google campaigns managed by our team.",
    },
    {
      title: "Email and SMS funnel",
      copy: "Automated win-back and Klean Club nurture flows.",
    },
    {
      title: "Playbook of proven strategies",
      copy: "The exact tactics we use across every studio.",
    },
  ];

  return (
    <div className="mt-12 md:mt-16 relative overflow-hidden rounded-[28px] md:rounded-[36px] bg-ink-950 text-white">
      {/* Atmospheric background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 70% at 100% 0%, rgba(110,197,227,0.25) 0%, transparent 60%), radial-gradient(40% 50% at 0% 100%, rgba(110,197,227,0.14) 0%, transparent 60%)",
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

      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 p-7 sm:p-10 md:p-12">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-300">
            End to end customer acquisition
          </div>
          <h3 className="mt-3 text-[26px] sm:text-[32px] md:text-[40px] font-semibold tracking-[-0.025em] leading-[1.1] text-balance">
            And we get the customers in the door.
          </h3>
          <p className="mt-4 max-w-md text-[14.5px] sm:text-[15px] text-white/70 leading-[1.6]">
            Beyond launch, we build out your entire marketing stack and run the
            campaigns. The strategies we use to fill our own studios, applied
            to yours. End to end.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.08] rounded-2xl overflow-hidden ring-1 ring-white/[0.06]">
          {items.map((it) => (
            <li
              key={it.title}
              className="bg-ink-950 p-5 md:p-6 min-h-[112px] flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 text-[14px] font-semibold text-white tracking-[-0.005em]">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-brand-400 flex-none shadow-[0_0_8px_rgba(110,197,227,0.7)]"
                />
                {it.title}
              </div>
              <p className="text-[13px] text-white/65 leading-[1.5]">
                {it.copy}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─────────────── Meet the Founder (video + bio + pull-quote) ─────────────── */
function MeetTheFounder() {
  const points = [
    "Proven multi-business operator",
    "Built Sneakky Klean from one store to a multi-location, franchise-ready brand",
    "Event partnerships with Art Basel, NCAA Final Four, PGA events, and luxury hospitality clients",
    "Featured across Miami's sneaker, sports, and lifestyle communities",
  ];
  return (
    <Section className="bg-white">
      <Container>
        {/* Centered header */}
        <SectionHeading
          eyebrow="The founder"
          title="Built by a founder who lived the problem."
          description="Devonn Vidal saw the gap firsthand. Hear from him, then read the story."
          align="center"
        />

        {/* Founder video */}
        <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-[24px] md:rounded-[28px] ring-1 ring-ink-200 shadow-[0_24px_60px_-24px_rgba(14,58,77,0.30)] aspect-video">
            <iframe
              src="https://www.youtube.com/embed/fsIaVUHRly0?rel=0&modestbranding=1"
              title="Devonn Vidal, Founder of Sneakky Klean"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <p className="mt-4 text-center text-[13px] text-ink-600">
            Devonn Vidal, Founder and CEO, Sneakky Klean
          </p>
        </div>

        {/* Story + pull-quote */}
        <div className="mt-14 md:mt-20 grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-[16px] md:text-[17px] text-ink-700 leading-[1.7]">
              Sneakky Klean was founded in 2019 by Devonn Vidal after seeing the
              gap firsthand. People were spending hundreds, sometimes thousands
              on sneakers, with no premium service dedicated to maintaining
              them. Coming from restaurants and hospitality, Dev knew what
              premium service looked like, and what was missing. He built
              Sneakky Klean to fill it.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-2xl bg-ink-50 ring-1 ring-ink-200 px-4 py-3.5 text-[14px] text-ink-800 leading-[1.5]"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 flex-none"
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <figure className="lg:sticky lg:top-32 rounded-[28px] bg-ink-950 text-white p-8 md:p-10">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-brand-300"
              aria-hidden
            >
              <path d="M9 7H5a2 2 0 00-2 2v4a2 2 0 002 2h2v3a2 2 0 01-2 2H4v2h1a4 4 0 004-4V9zm10 0h-4a2 2 0 00-2 2v4a2 2 0 002 2h2v3a2 2 0 01-2 2h-1v2h1a4 4 0 004-4V9z" />
            </svg>
            <blockquote className="mt-6 text-[22px] sm:text-[26px] font-semibold tracking-[-0.02em] leading-[1.25] text-balance">
              We're not just cleaners. We protect identity, confidence, and
              investment.
            </blockquote>
            <figcaption className="mt-6 pt-6 border-t border-white/15 text-[13.5px] text-white/70">
              <span className="text-white font-medium">Devonn Vidal</span> ·
              Founder and CEO
            </figcaption>
          </figure>
        </div>
      </Container>
    </Section>
  );
}

/* ─────────────── 10. Territories ─────────────── */
function Territories() {
  return (
    <Section className="bg-ink-50">
      <Container>
        <SectionHeading
          eyebrow="Territories"
          title="Ground-floor opportunity. Secure prime markets now."
          description="We're in early-stage expansion. The best territories go first."
          align="center"
        />

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <TerritoryColumn
            tone="brand"
            label="Open and operating"
            items={["Miami, FL", "New York, NY", "Saskatoon, SK"]}
          />
          <TerritoryColumn
            tone="accent"
            label="Now accepting applications"
            items={[
              "Florida (statewide)",
              "Tri-State Area",
              "Texas: Houston, Dallas, Austin",
              "California: LA, San Diego, Bay Area",
              "Georgia: Atlanta",
              "Illinois: Chicago",
              "And more",
            ]}
          />
          <TerritoryColumn
            tone="muted"
            label="Coming soon"
            items={["International expansion in active planning"]}
          />
        </div>

        <p className="mt-8 text-center text-[14px] text-ink-600 max-w-2xl mx-auto">
          Don't see your market? Apply anyway. We evaluate every qualified
          inquiry.
        </p>
      </Container>
    </Section>
  );
}

function TerritoryColumn({
  tone,
  label,
  items,
}: {
  tone: "brand" | "accent" | "muted";
  label: string;
  items: string[];
}) {
  const cls =
    tone === "brand"
      ? "bg-ink-950 text-white ring-1 ring-brand-500"
      : tone === "accent"
      ? "bg-white ring-1 ring-brand-200"
      : "bg-white ring-1 ring-ink-200";
  const dotCls =
    tone === "brand"
      ? "bg-brand-300"
      : tone === "accent"
      ? "bg-brand-500"
      : "bg-ink-400";
  const labelCls = tone === "brand" ? "text-brand-300" : "text-brand-700";
  const itemCls = tone === "brand" ? "text-white/90" : "text-ink-800";

  return (
    <div className={`rounded-3xl p-7 md:p-8 ${cls}`}>
      <div
        className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${labelCls}`}
      >
        {label}
      </div>
      <ul className="mt-5 space-y-2.5">
        {items.map((it) => (
          <li
            key={it}
            className={`flex items-start gap-3 text-[15px] leading-[1.5] ${itemCls}`}
          >
            <span
              aria-hidden
              className={`mt-2 h-1.5 w-1.5 rounded-full flex-none ${dotCls}`}
            />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────── 11. FAQs ─────────────── */
function FAQs() {
  const faqs = [
    {
      q: "How much does it cost to open a Sneakky Klean franchise?",
      a: "Investment varies by market and territory. Submit an application or contact our franchise team for a full breakdown.",
    },
    {
      q: "Do I need experience in sneakers or cleaning?",
      a: "No. Our 80-hour training program covers everything: cleaning techniques, store operations, customer service, and business management. Passion and work ethic matter more than experience.",
    },
    {
      q: "How long is training?",
      a: "80 total hours. 16 hours classroom plus 64 hours on-the-job, with pre-opening on-site support.",
    },
    {
      q: "How long until I can open?",
      a: "Most franchisees go from signed agreement to grand opening within a few months, depending on real estate and build-out timelines.",
    },
    {
      q: "What kind of ongoing support do I get?",
      a: "End-to-end marketing run by our team (dedicated landing page, Google Business profile, paid ads, email funnel, and the playbook of strategies we use across every studio), an online training platform, exclusive vendor networks, operational guidance, and continued access to brand systems and tools.",
    },
    {
      q: "How does Sneakky Klean make money beyond cleaning?",
      a: "Multiple revenue streams: core cleaning tiers, add-on upgrades, restoration, retail products, mail-in service, and event activations.",
    },
    {
      q: "Is there territory protection?",
      a: "Yes. Once your agreement is signed, your territory is secured.",
    },
    {
      q: "Do you finance the franchise?",
      a: "We don't provide direct financing, but we can connect you with vetted lending partners.",
    },
    {
      q: "How do I get started?",
      a: "Submit the application form on this page. It's confidential and places no obligation on either party.",
    },
  ];
  return (
    <Section className="bg-white pb-12 sm:pb-14 md:pb-16">
      <Container size="narrow">
        <SectionHeading
          eyebrow="FAQs"
          title="Franchise questions, answered."
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
      </Container>
    </Section>
  );
}

/* ─────────────── 12. Final CTA + Application form + Compliance ─────────────── */
function FinalCta() {
  return (
    <Section id="apply" className="bg-white pt-0 pb-16 md:pb-24">
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

          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 p-6 sm:p-10 md:p-14 lg:p-16">
            {/* Left: closing message + contact */}
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-300">
                Ready to start
              </div>
              <h2 className="mt-4 text-[36px] sm:text-[48px] md:text-[60px] lg:text-[68px] font-semibold tracking-[-0.04em] leading-[1.0] text-balance">
                Ready to own a{" "}
                <span className="italic font-light text-brand-300">
                  Sneakky Klean
                </span>
                ?
              </h2>
              <p className="mt-5 max-w-md text-[15.5px] md:text-[16px] text-white/70 leading-[1.6]">
                The sneaker care industry is just getting started. Get in on the
                ground floor.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button href="#application" size="lg" variant="white">
                  Apply Now
                  <span aria-hidden>→</span>
                </Button>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full ring-1 ring-white/15 text-white text-[14.5px] font-medium hover:bg-white/[0.06] transition-colors"
                >
                  <DownloadIcon />
                  Download the Franchise Brochure
                </a>
              </div>

              {/* Contact strip */}
              <ul className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-y-5 gap-x-4">
                <ContactItem
                  label="Call"
                  value="(305) 592-9229"
                  href="tel:+13055929229"
                />
                <ContactItem
                  label="Email"
                  value="fcsales@franchisecreator.com"
                  href="mailto:fcsales@franchisecreator.com"
                />
                <ContactItem
                  label="Web"
                  value="www.sneakky.com"
                  href="https://www.sneakky.com"
                  external
                />
              </ul>
            </div>

            {/* Right: application form */}
            <ApplicationForm />
          </div>
        </div>

        {/* Compliance footer */}
        <div className="mt-8 md:mt-10 max-w-4xl mx-auto px-2">
          <p className="text-[11.5px] text-ink-500 leading-[1.65] text-pretty">
            This franchising information is not intended as an offer to sell a
            franchise or the solicitation of an offer to buy a franchise.
            Certain states regulate the offer and sale of franchises. If you are
            a resident of one of these states, we will not offer or sell you a
            franchise unless and until we have complied with the applicable
            pre-sale filing, registration, and disclosure requirements in your
            state.
          </p>
        </div>
      </Container>
    </Section>
  );
}

function ContactItem({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <li>
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-300">
        {label}
      </div>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="mt-1.5 inline-block text-[14px] text-white hover:text-brand-300 transition-colors break-words"
      >
        {value}
      </a>
    </li>
  );
}

function ApplicationForm() {
  return (
    <form
      id="application"
      onSubmit={(e) => e.preventDefault()}
      className="rounded-[24px] md:rounded-[28px] bg-white text-ink-950 p-6 md:p-8 ring-1 ring-brand-200/40 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.50)]"
    >
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
        Application
      </div>
      <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.018em]">
        Confidential. No obligation.
      </h3>
      <div className="mt-6 space-y-3.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <Field id="first" label="First name" />
          <Field id="last" label="Last name" />
        </div>
        <Field id="email" label="Email" type="email" />
        <Field id="phone" label="Phone" type="tel" />
        <Field id="city" label="City of interest" />
        <div>
          <Label htmlFor="capital">Capital available to invest</Label>
          <select
            id="capital"
            name="capital"
            defaultValue=""
            className="mt-1.5 w-full h-12 px-4 rounded-xl bg-ink-50 ring-1 ring-ink-200 text-[14.5px] text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <option value="" disabled>
              Choose a range
            </option>
            <option value="under-150k">Under $150K</option>
            <option value="150k-300k">$150K to $300K</option>
            <option value="300k-500k">$300K to $500K</option>
            <option value="500k-plus">$500K and above</option>
          </select>
        </div>
        <div>
          <Label htmlFor="message">Tell us about yourself</Label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Operating experience, why Sneakky Klean, timeline."
            className="mt-1.5 w-full px-4 py-3 rounded-xl bg-ink-50 ring-1 ring-ink-200 text-[14.5px] text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full h-12 rounded-full bg-ink-950 text-white text-[14.5px] font-semibold tracking-[-0.005em] hover:bg-ink-900 transition-colors inline-flex items-center justify-center gap-2"
      >
        Submit application <span aria-hidden>→</span>
      </button>
      <p className="mt-3 text-[11.5px] text-ink-500 text-center">
        We respond within 5 business days.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
}: {
  id: string;
  label: string;
  type?: string;
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        name={id}
        type={type}
        required
        className="mt-1.5 w-full h-12 px-4 rounded-xl bg-ink-50 ring-1 ring-ink-200 text-[14.5px] text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
      />
    </div>
  );
}

function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="text-[12px] font-medium text-ink-700">
      {children}
    </label>
  );
}

/* ─────────────── Helpers ─────────────── */
function SubBlockHeader({
  title,
  subtitle,
  className = "",
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl mx-auto text-center ${className}`}>
      <h3 className="text-[24px] sm:text-[30px] md:text-[36px] font-semibold tracking-[-0.025em] leading-[1.15] text-ink-950 text-balance">
        {title}
      </h3>
      {subtitle && (
        <p className="mt-3 text-[15px] text-ink-600 leading-[1.6]">{subtitle}</p>
      )}
    </div>
  );
}

function FactCard({
  stat,
  statLabel,
  title,
  copy,
}: {
  stat: string;
  statLabel: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-3xl bg-ink-50 ring-1 ring-ink-200 p-7 md:p-8 flex flex-col">
      <div className="text-[26px] sm:text-[30px] font-semibold tracking-[-0.025em] leading-none text-brand-700">
        {stat}
      </div>
      <div className="mt-2 text-[12px] text-ink-500 leading-[1.5]">
        {statLabel}
      </div>
      <h4 className="mt-6 text-[18px] font-semibold tracking-[-0.015em] text-ink-950">
        {title}
      </h4>
      <p className="mt-2 text-[14px] text-ink-600 leading-[1.6]">{copy}</p>
    </div>
  );
}

function ComparisonTable({
  headers,
  rows,
  highlightLastCol = false,
}: {
  headers: string[];
  rows: string[][];
  highlightLastCol?: boolean;
}) {
  const cols = headers.length;
  return (
    <div className="mt-8 overflow-x-auto rounded-3xl ring-1 ring-ink-200 bg-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-ink-50">
            {headers.map((h, i) => (
              <th
                key={h}
                className={`text-[11px] font-semibold uppercase tracking-[0.16em] px-5 md:px-7 py-4 ${
                  highlightLastCol && i === cols - 1
                    ? "text-brand-700"
                    : "text-ink-700"
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-ink-100">
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={`px-5 md:px-7 py-4 text-[14.5px] leading-[1.5] ${
                    i === 0
                      ? "text-ink-900 font-medium w-1/3"
                      : highlightLastCol && i === cols - 1
                      ? "text-ink-950 font-semibold bg-brand-50/50"
                      : "text-ink-700"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PlaySmall() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="text-brand-600"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
  );
}
