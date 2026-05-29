import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Klean Club · The membership for the rotation",
  description:
    "$79/month. Two Signature Cleans, priority service, free pickup, and member-only perks. Cancel anytime.",
};

export default function KleanClubPage() {
  return (
    <>
      <Hero />
      <TheMath />
      <WhatsIncluded />
      <HowItWorks />
      <WhoItsFor />
      <MemberVsNonMember />
      <Reviews />
      <FAQs />
      <FinalCta />
    </>
  );
}

/* ─────────────── 1. Hero ─────────────── */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-ink-950">
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
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_10px_rgba(110,197,227,0.85)]" />
            Klean Club Membership
          </div>

          <h1 className="mt-7 text-[40px] sm:text-[60px] md:text-[76px] lg:text-[88px] font-semibold tracking-[-0.04em] leading-[0.98] text-balance">
            The membership for the{" "}
            <span className="italic font-light text-brand-600">rotation</span>.
          </h1>

          <p className="mt-7 max-w-2xl text-[16px] sm:text-[18px] text-ink-700 leading-[1.6] text-pretty">
            Two Signature Cleans every month. Priority service. Exclusive member
            benefits. Built for the people who actually wear their pairs.
          </p>

          <div className="mt-9">
            <JoinCta />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Hero CTA: segmented pill with price + brand-blue arrow ─── */
function JoinCta() {
  return (
    <Link
      href="/klean-club/join"
      aria-label="Join Klean Club for $79 per month"
      className="group inline-flex items-stretch h-[64px] sm:h-[72px] rounded-full bg-ink-950 ring-1 ring-white/[0.06] pl-1 pr-1.5 shadow-[0_18px_44px_-18px_rgba(14,58,77,0.55)] hover:shadow-[0_24px_56px_-18px_rgba(14,58,77,0.7)] hover:bg-[#0c1418] transition-all"
    >
      <div className="flex flex-col justify-center pl-5 sm:pl-7 pr-4 sm:pr-7">
        <span className="text-[14px] sm:text-[16px] font-semibold tracking-[-0.005em] leading-tight text-white">
          Join Klean Club
        </span>
        <span className="text-[12px] sm:text-[13.5px] leading-tight mt-0.5 text-white/55">
          Cancel anytime
        </span>
      </div>

      <div className="self-center h-7 sm:h-9 w-px bg-white/15" />

      <div className="flex flex-col justify-center pl-4 sm:pl-7 pr-3 sm:pr-5">
        <span className="text-[15px] sm:text-[18px] font-bold tracking-[-0.01em] leading-tight text-white">
          $79
        </span>
        <span className="text-[12px] sm:text-[13.5px] leading-tight mt-0.5 text-white/55">
          per month
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

/* ─────────────── 2. The Math ─────────────── */
function TheMath() {
  const rows: { metric: string; without: string; withClub: string }[] = [
    { metric: "2 Signature Cleans per month", without: "$108", withClub: "Included" },
    { metric: "Priority studio queue", without: "Standard wait", withClub: "Front of the line" },
    { metric: "Member-only perks", without: "Not available", withClub: "Yes" },
    { metric: "Monthly cost", without: "$108", withClub: "$79" },
  ];

  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="Why Klean Club"
          title="Less per clean. More per pair."
          description="Two Signature Cleans at retail is $108. Klean Club is $79. The math does the convincing."
          align="center"
        />

        <div className="mt-12 md:mt-16 overflow-x-auto rounded-3xl ring-1 ring-ink-200 bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-ink-50">
                <th className="text-[11px] font-semibold uppercase tracking-[0.16em] px-5 md:px-7 py-4 text-ink-700 w-2/5">
                  Metric
                </th>
                <th className="text-[11px] font-semibold uppercase tracking-[0.16em] px-5 md:px-7 py-4 text-ink-700">
                  Without Klean Club
                </th>
                <th className="text-[11px] font-semibold uppercase tracking-[0.16em] px-5 md:px-7 py-4 text-brand-700">
                  With Klean Club
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.metric} className="border-t border-ink-100">
                  <td className="px-5 md:px-7 py-4 text-[14.5px] font-medium text-ink-900 leading-[1.5]">
                    {r.metric}
                  </td>
                  <td className="px-5 md:px-7 py-4 text-[14.5px] text-ink-600 leading-[1.5]">
                    {r.without}
                  </td>
                  <td className="px-5 md:px-7 py-4 text-[14.5px] font-semibold text-ink-950 leading-[1.5] bg-brand-50/50">
                    {r.withClub}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Savings stats */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="rounded-3xl bg-brand-50 ring-1 ring-brand-200 p-7 md:p-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
              You save
            </div>
            <div className="mt-3 text-[44px] sm:text-[52px] md:text-[60px] font-semibold tracking-[-0.035em] leading-none text-brand-700">
              $29
              <span className="text-[20px] text-ink-700 font-medium ml-1">
                / month
              </span>
            </div>
          </div>
          <div className="rounded-3xl bg-ink-950 text-white p-7 md:p-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-300">
              Annual savings
            </div>
            <div className="mt-3 text-[44px] sm:text-[52px] md:text-[60px] font-semibold tracking-[-0.035em] leading-none text-white">
              $348
              <span className="text-[20px] text-white/65 font-medium ml-1">
                / year
              </span>
            </div>
          </div>
        </div>

        <p className="mt-6 md:mt-8 text-center text-[16px] md:text-[17px] text-ink-700 max-w-2xl mx-auto leading-[1.55]">
          Pay for the membership in one month.{" "}
          <strong className="text-ink-950">
            Save for the next eleven.
          </strong>
        </p>
      </Container>
    </Section>
  );
}

/* ─────────────── 3. What's Included ─────────────── */
function WhatsIncluded() {
  const benefits: { title: string; copy: string; icon: React.ReactNode }[] = [
    {
      title: "2 Signature Cleans / month",
      copy: "Deep clean, midsole detail, lace wash, and finish. Use them on the same pair or split across the rotation. Unused cleans roll over for 30 days.",
      icon: <SparkleIcon />,
    },
    {
      title: "Priority studio queue",
      copy: "Member orders move to the front. Every studio, every time.",
      icon: <BoltIcon />,
    },
    {
      title: "Free pickup in studio cities",
      copy: "On-demand pickup and return in Miami, NYC, and Saskatoon.",
      icon: <TruckIcon />,
    },
    {
      title: "Free mail-in shipping",
      copy: "Prepaid labels and free return shipping on every mail-in order, fully insured.",
      icon: <PackageIcon />,
    },
    {
      title: "Member-only pricing on add-ons",
      copy: "20% off restoration, treatments, oxidation reversal, sole whitening, and protection services.",
      icon: <PercentIcon />,
    },
    {
      title: "Exclusive perks",
      copy: "Early access to drops, member events, and the occasional surprise from the bench.",
      icon: <StarIcon />,
    },
  ];

  return (
    <Section className="bg-ink-50">
      <Container>
        <SectionHeading
          eyebrow="Membership benefits"
          title="What you get, every month."
          description="Everything built around how you actually use your sneakers."
          align="center"
        />
        <ul className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <li
              key={b.title}
              className="rounded-3xl bg-white ring-1 ring-black/[0.05] p-7 md:p-8 flex flex-col"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 ring-1 ring-brand-200 text-brand-700">
                {b.icon}
              </span>
              <h3 className="mt-6 text-[18px] md:text-[19px] font-semibold tracking-[-0.015em] text-ink-950">
                {b.title}
              </h3>
              <p className="mt-2 text-[14px] text-ink-600 leading-[1.6] flex-1">
                {b.copy}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ─────────────── 4. How It Works ─────────────── */
function HowItWorks() {
  const steps: { title: string; copy: string; icon: React.ReactNode }[] = [
    {
      title: "Sign up",
      copy: "Join online. $79/month, billed monthly. No setup fees, no contracts.",
      icon: <UserPlusIcon />,
    },
    {
      title: "Book your cleans",
      copy: "Schedule pickup, drop off in studio, or mail in from anywhere in North America. Two Signature Cleans every month, ready when you are.",
      icon: <CalendarIcon />,
    },
    {
      title: "Wear, repeat",
      copy: "We clean. You wear. Roll over unused cleans for 30 days. Cancel anytime, no questions asked.",
      icon: <RepeatIcon />,
    },
  ];

  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Join in 60 seconds. Use it the same day."
          align="center"
        />

        <div className="mt-12 md:mt-16 relative">
          <StepConnectors />
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-y-14 md:gap-x-6 items-start">
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
      <h3 className="mt-7 text-[17px] font-semibold tracking-[-0.015em] leading-[1.3] text-ink-950 min-h-[2.6em] max-w-[260px] mx-auto flex items-center justify-center">
        {title}
      </h3>
      <p className="mt-3 text-[14px] text-ink-600 leading-[1.6] max-w-[280px] mx-auto text-pretty">
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
      <path
        d="M 220 30 Q 333 -8 446 30"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeDasharray="4 6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 553 30 Q 666 68 779 30"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeDasharray="4 6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ─────────────── 5. Who It's For ─────────────── */
function WhoItsFor() {
  const personas: {
    title: string;
    tag: string;
    copy: string;
    icon: React.ReactNode;
  }[] = [
    {
      title: "The Daily Driver",
      tag: "Hygiene first",
      copy: "Wears the same one or two pairs all week. Gym, work, errands. Needs hygiene more than aesthetics. Two cleans a month keeps everything fresh.",
      icon: <RepeatIcon />,
    },
    {
      title: "The Collector",
      tag: "Display-ready rotation",
      copy: "Rotates through 8+ pairs. Wants every pair in display condition. Two cleans a month covers regular maintenance and frees up budget for restoration.",
      icon: <StackIcon />,
    },
    {
      title: "The Investor",
      tag: "Protect the grails",
      copy: "Owns $300+ pairs, designer sneakers, or limited drops. Wants professional care without paying retail every time. Klean Club is the cheapest way to keep grails fresh.",
      icon: <DiamondIcon />,
    },
  ];

  return (
    <Section className="bg-ink-50">
      <Container>
        <SectionHeading
          eyebrow="Built for"
          title="Made for the people who actually wear their pairs."
          description="Three customer types get the most out of Klean Club."
          align="center"
        />
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {personas.map((p) => (
            <article
              key={p.title}
              className="rounded-3xl bg-white ring-1 ring-black/[0.05] p-7 md:p-9 flex flex-col"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 ring-1 ring-brand-200 text-brand-700">
                  {p.icon}
                </span>
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-6 text-[22px] md:text-[24px] font-semibold tracking-[-0.018em] text-ink-950">
                {p.title}
              </h3>
              <p className="mt-3 text-[14.5px] text-ink-600 leading-[1.65] flex-1">
                {p.copy}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─────────────── 6. Member vs Non-Member ─────────────── */
function MemberVsNonMember() {
  const rows: { feature: string; nonMember: string; member: string }[] = [
    { feature: "Signature Clean", nonMember: "$54 each", member: "2 included monthly" },
    { feature: "Priority service", nonMember: "Standard queue", member: "Front of the line" },
    { feature: "Pickup in studio cities", nonMember: "Pay per request", member: "Free" },
    { feature: "Mail-in shipping", nonMember: "Paid label", member: "Free, both ways" },
    { feature: "Restoration and add-ons", nonMember: "Full price", member: "20% off" },
    { feature: "Member events and drops", nonMember: "Not available", member: "Included" },
    { feature: "Monthly cost", nonMember: "Pay per clean", member: "$79 flat" },
  ];

  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="Compare"
          title="The difference, side by side."
          align="center"
        />
        <div className="mt-12 md:mt-16 overflow-x-auto rounded-3xl ring-1 ring-ink-200 bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-ink-50">
                <th className="text-[11px] font-semibold uppercase tracking-[0.16em] px-5 md:px-7 py-4 text-ink-700 w-2/5">
                  Feature
                </th>
                <th className="text-[11px] font-semibold uppercase tracking-[0.16em] px-5 md:px-7 py-4 text-ink-700">
                  Non-member
                </th>
                <th className="text-[11px] font-semibold uppercase tracking-[0.16em] px-5 md:px-7 py-4 text-brand-700">
                  Klean Club member
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature} className="border-t border-ink-100">
                  <td className="px-5 md:px-7 py-4 text-[14.5px] font-medium text-ink-900 leading-[1.5]">
                    {r.feature}
                  </td>
                  <td className="px-5 md:px-7 py-4 text-[14.5px] text-ink-600 leading-[1.5]">
                    {r.nonMember}
                  </td>
                  <td className="px-5 md:px-7 py-4 text-[14.5px] font-semibold text-ink-950 leading-[1.5] bg-brand-50/50">
                    {r.member}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}

/* ─────────────── 7. Reviews ─────────────── */
function Reviews() {
  const reviews = [
    {
      quote:
        "I have 12 pairs in rotation. Klean Club pays for itself in the first week of every month. Best subscription I've ever signed up for.",
      name: "Marcus L.",
      city: "South Beach, Miami",
    },
    {
      quote:
        "I was spending $200 a month on cleaning anyway. Now I spend $79 and get priority. Wish I'd joined sooner.",
      name: "Jordan K.",
      city: "Brickell, Miami",
    },
    {
      quote:
        "The pickup alone is worth it. I don't even think about my sneakers anymore. They just come back clean.",
      name: "Priya S.",
      city: "Manhattan, NY",
    },
    {
      quote:
        "Klean Club plus mail-in equals I never have to clean a shoe again. Living the dream.",
      name: "Alex R.",
      city: "Toronto, ON",
    },
  ];

  return (
    <Section className="bg-ink-50">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Members say it best."
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

/* ─────────────── 8. FAQs ─────────────── */
function FAQs() {
  const faqs = [
    {
      q: "How much is Klean Club?",
      a: "$79 per month. Billed monthly. Cancel anytime, no contracts.",
    },
    {
      q: "What's included?",
      a: "Two Signature Cleans per month, priority studio queue, free pickup in studio cities, free mail-in shipping, 20% off restoration and add-ons, and member-only perks.",
    },
    {
      q: "What's a Signature Clean?",
      a: "Our most popular service. Deep clean of the upper, midsole, undersole, lace wash, and full detail finish. Retail price: $54 per clean.",
    },
    {
      q: "Can I use both cleans on the same pair?",
      a: "Yes. Use them however you want, on one pair or split across your rotation.",
    },
    {
      q: "Do unused cleans roll over?",
      a: "Yes. Unused cleans roll over for 30 days. After that, they reset with your next billing cycle.",
    },
    {
      q: "Can I use Klean Club for mail-in?",
      a: "Absolutely. Free prepaid shipping labels both ways, fully insured, on every mail-in order.",
    },
    {
      q: "Can I upgrade a clean to Premium Care?",
      a: "Yes. You can apply your monthly Signature Clean toward a Premium Care or Restoration service and pay the difference at member pricing.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. No contracts, no cancellation fees. Cancel in your account in two clicks.",
    },
    {
      q: "Does Klean Club work at all locations?",
      a: "Yes. Use it at Miami, NYC, and Saskatoon studios, plus mail-in anywhere in North America.",
    },
    {
      q: "Is there a sign-up fee?",
      a: "No setup fees, no hidden costs. $79 covers everything.",
    },
    {
      q: "Can I gift Klean Club?",
      a: "Yes. Gift memberships are available. Contact us to set one up.",
    },
  ];

  return (
    <Section className="bg-white pb-12 sm:pb-14 md:pb-16">
      <Container size="narrow">
        <SectionHeading
          eyebrow="FAQs"
          title="Membership questions, answered."
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

/* ─────────────── 9. Final CTA ─────────────── */
function FinalCta() {
  return (
    <Section className="bg-white pt-0 pb-16 md:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] md:rounded-[40px] bg-ink-950 text-white">
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

          <div className="relative p-6 sm:p-10 md:p-14 lg:p-16">
            <div className="max-w-3xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-300">
                Klean Club
              </div>
              <h2 className="mt-4 text-[36px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-semibold tracking-[-0.04em] leading-[1.0] text-balance">
                Join the club.{" "}
                <span className="italic font-light text-brand-300">Save</span>{" "}
                the rotation.
              </h2>
              <p className="mt-5 max-w-md text-[15.5px] md:text-[16px] text-white/70 leading-[1.6]">
                $79 per month. Two Signature Cleans, priority service,
                member-only perks. Cancel anytime.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button href="/klean-club/join" size="lg" variant="white">
                  Join Klean Club
                  <span aria-hidden>→</span>
                </Button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-full ring-1 ring-white/15 text-white text-[14.5px] font-medium hover:bg-white/[0.06] transition-colors"
                >
                  Have questions? Talk to us
                </Link>
              </div>
            </div>

            {/* Bottom helper strip */}
            <div className="mt-10 md:mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <p className="text-[13px] text-white/70">Already a member?</p>
              <Link
                href="/account"
                className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-300 hover:text-brand-200 transition-colors"
              >
                Sign in to your account
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─────────────── Icons ─────────────── */
function DollarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2v20" />
      <path d="M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 010 7H7" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
      <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" />
      <path d="M6 16l.6 1.6L8 18l-1.4.4L6 20l-.6-1.6L4 18l1.4-.4z" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l2.5 2.5L16 9" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 7h13v10H3z" />
      <path d="M16 10h4l2 3v4h-6z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function PercentIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="19" y1="5" x2="5" y2="19" />
      <circle cx="7.5" cy="7.5" r="2.5" />
      <circle cx="16.5" cy="16.5" r="2.5" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l2.5 6.5L21 10l-5 4.5L17.5 21 12 17.5 6.5 21 8 14.5 3 10l6.5-.5z" />
    </svg>
  );
}

function UserPlusIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="8" r="4" />
      <path d="M2 21v-1a6 6 0 016-6h2a6 6 0 016 6v1" />
      <path d="M19 8v6M16 11h6" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
      <path d="M9 15l2 2 4-4" />
    </svg>
  );
}

function RepeatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 014-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 01-4 4H3" />
    </svg>
  );
}

function StackIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2L2 7l10 5 10-5z" />
      <path d="M2 12l10 5 10-5" />
      <path d="M2 17l10 5 10-5" />
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 3h12l4 6-10 12L2 9z" />
      <path d="M2 9h20M9 3l3 6 3-6M9 9l3 12 3-12" />
    </svg>
  );
}
