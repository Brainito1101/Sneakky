import Link from "next/link";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";
import { BookCta } from "@/components/BookCta";
import { Marquee } from "@/components/Marquee";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
const featuredServices = [
  "sneaker-cleaning",
  "sneaker-restoration",
  "suede-cleaning",
  "yellow-sneaker-cleaning",
  "leather-shoes-cleaning",
  "mail-in",
];

export default function Home() {
  return (
    <>
      <Hero />
      <PressMarquee />
      <FeaturedServices />
      <ProcessSection />
      <BeforeAfter />
      <KleanClubSection />
      <LocationsSection />
      <Testimonials />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-spotlight" aria-hidden />
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <Container className="relative pt-20 md:pt-28 lg:pt-32 pb-24 md:pb-32 lg:pb-40">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 h-8 px-3 rounded-full bg-brand-50 text-brand-700 text-[12px] font-medium tracking-[0.01em] ring-1 ring-brand-500/10">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
            Now serving Miami, New York, and Saskatoon
          </div>
          <h1 className="mt-8 text-[56px] sm:text-[72px] md:text-[88px] lg:text-[104px] font-bold tracking-[-0.045em] leading-[0.95] text-ink-900 text-balance">
            The studio behind <br className="hidden md:block" />
            your{" "}
            <span className="text-brand-500">best pairs.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-[18px] md:text-[20px] text-ink-500 leading-relaxed text-pretty">
            Sneakky Klean is the premium cleaning and restoration service trusted by collectors. Material-specific care, hand-finished by our team, returned looking — and feeling — better than new.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <BookCta />
            <Link
              href="/services"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full ring-1 ring-ink-200 bg-white text-ink-950 text-[14.5px] font-medium hover:bg-ink-50 transition-colors"
            >
              Explore services
            </Link>
          </div>

          <dl className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-10 max-w-3xl">
            {[
              ["120k+", "Pairs restored"],
              ["98%", "Customer satisfaction"],
              ["3", "Studio cities"],
              ["10 yrs", "Building the craft"],
            ].map(([stat, label]) => (
              <div key={label as string}>
                <dt className="text-[40px] md:text-[44px] font-semibold tracking-[-0.03em] leading-none text-ink-900">
                  {stat}
                </dt>
                <dd className="mt-2 text-[13px] text-ink-500">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

function PressMarquee() {
  return (
    <div className="border-y border-black/[0.06] py-6 bg-white">
      <Marquee
        items={[
          "Featured in Hypebeast",
          "Trusted by Sole Collector",
          "As seen in GQ",
          "Complex Sneakers",
          "Highsnobiety",
          "SneakerNews",
          "Sneaker Freaker",
        ]}
      />
    </div>
  );
}

function FeaturedServices() {
  const featured = featuredServices
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  return (
    <Section className="bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            eyebrow="Services"
            title="A service for every material, every wear."
            description="Twenty-plus specialist services, each engineered for the construction and finish you're sending in."
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-[15px] font-medium text-brand-600 hover:text-brand-700"
          >
            Browse all services <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`group relative overflow-hidden rounded-3xl bg-ink-50 ring-1 ring-black/[0.04] hover:ring-brand-500 transition-all p-8 min-h-[280px] flex flex-col justify-between ${
                i === 0 ? "lg:row-span-2 lg:min-h-[580px] bg-gradient-to-br from-brand-500 to-brand-700 text-white ring-0" : ""
              }`}
            >
              <div>
                <div
                  className={`eyebrow ${
                    i === 0 ? "text-white/70" : "text-brand-600"
                  }`}
                >
                  {service.category}
                </div>
                <h3
                  className={`mt-4 ${
                    i === 0
                      ? "text-[32px] md:text-[40px] leading-[1.05]"
                      : "text-[24px] leading-[1.15]"
                  } font-semibold tracking-[-0.025em] text-balance`}
                >
                  {service.name}
                </h3>
                <p
                  className={`mt-3 text-[14px] leading-relaxed max-w-sm ${
                    i === 0 ? "text-white/75" : "text-ink-500"
                  }`}
                >
                  {service.tagline}
                </p>
              </div>
              <div
                className={`mt-8 flex items-center justify-between text-[13px] ${
                  i === 0 ? "text-white/80" : "text-ink-500"
                }`}
              >
                <span>From ${service.priceFrom}</span>
                <span
                  className={`inline-flex items-center gap-1 ${
                    i === 0 ? "text-white" : "text-brand-600"
                  } opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Drop off or mail in",
      copy: "Visit a studio or use our prepaid mail-in service. Pickup available for Klean Club members.",
    },
    {
      step: "02",
      title: "We diagnose",
      copy: "Every pair is inspected and documented. Materials, condition, and care plan agreed before we lift a brush.",
    },
    {
      step: "03",
      title: "Studio care",
      copy: "Hand-finished by specialists. Material-specific chemistry. No shortcuts, ever.",
    },
    {
      step: "04",
      title: "Returned, better",
      copy: "Packaged with a full condition report and care recommendations.",
    },
  ];

  return (
    <Section className="bg-ink-50">
      <Container>
        <SectionHeading
          eyebrow="The process"
          title="Studio-grade care, end to end."
          description="A four-step process built around quality, consistency, and the long life of every pair."
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.06] rounded-3xl overflow-hidden">
          {steps.map((step) => (
            <div key={step.step} className="bg-white p-8 md:p-10 min-h-[260px] flex flex-col justify-between">
              <div className="text-[13px] font-semibold tracking-[0.14em] text-brand-600">{step.step}</div>
              <div>
                <h3 className="text-[22px] font-semibold tracking-[-0.02em] leading-[1.15]">{step.title}</h3>
                <p className="mt-3 text-[14px] text-ink-500 leading-relaxed">{step.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function BeforeAfter() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Before, after"
              title="The work speaks. Quietly."
              description="No filters. No retouching. Just the difference a specialist process makes — across every material, every silhouette."
            />
            <div className="mt-8 flex gap-3">
              <Button href="/reviews" variant="secondary">See more results</Button>
              <Button href="/book" variant="white">Book your pair</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              "from-ink-300 to-ink-500",
              "from-brand-300 to-brand-600",
              "from-ink-200 to-ink-400",
              "from-brand-200 to-brand-500",
            ].map((gradient, i) => (
              <div
                key={i}
                className={`aspect-[4/5] rounded-3xl bg-gradient-to-br ${gradient} relative overflow-hidden ${
                  i % 2 === 1 ? "translate-y-8" : ""
                }`}
              >
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/85 backdrop-blur-sm px-3 py-2 text-[12px] font-medium text-ink-900">
                  {i % 2 === 0 ? "Before" : "After"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function KleanClubSection() {
  return (
    <Section className="bg-ink-950 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 0%, rgba(110,197,227,0.25) 0%, transparent 60%), radial-gradient(40% 40% at 100% 100%, rgba(110,197,227,0.2) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <Container className="relative">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="eyebrow text-brand-300">Klean Club</div>
            <h2 className="mt-4 text-[44px] md:text-[64px] font-semibold tracking-[-0.035em] leading-[1.02] text-balance">
              Membership for the rotation that doesn't stop.
            </h2>
            <p className="mt-6 max-w-xl text-[17px] md:text-[19px] text-white/65 leading-relaxed">
              Priority queue. Member pricing across every service. Free pickup in studio cities. Monthly care credit toward the shop. Built for collectors who care about the long run.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button href="/klean-club/join" variant="white" size="lg">
                Join Klean Club
              </Button>
              <Button href="/klean-club" variant="ghost" size="lg" className="text-white hover:bg-white/10">
                See what's included
              </Button>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-4">
            {[
              ["Priority", "Member queue"],
              ["Pricing", "Lower rates"],
              ["Pickup", "Free, in studio cities"],
              ["Credit", "Monthly care credit"],
            ].map(([title, copy]) => (
              <li key={title} className="rounded-2xl bg-white/[0.04] backdrop-blur-sm ring-1 ring-white/10 p-6">
                <div className="eyebrow text-brand-300">{title}</div>
                <div className="mt-2 text-[18px] font-semibold tracking-[-0.015em]">{copy}</div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

function LocationsSection() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="Studios"
          title="In-studio in three cities. Mail-in everywhere else."
          description="Visit us in Miami, New York, or Saskatoon — or ship from anywhere in North America."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group rounded-3xl ring-1 ring-black/[0.06] bg-ink-50/60 hover:ring-brand-500 hover:bg-white transition-all p-8 min-h-[280px] flex flex-col justify-between"
            >
              <div>
                <div className="eyebrow text-brand-600">{loc.country}</div>
                <h3 className="mt-3 text-[32px] font-semibold tracking-[-0.025em] leading-[1.05]">
                  {loc.city}
                </h3>
                <p className="mt-2 text-[14px] text-ink-500 leading-relaxed">{loc.address}</p>
              </div>
              <div className="mt-8 flex items-center justify-between text-[13px]">
                <span className="text-ink-500">{loc.hours[0].time} weekdays</span>
                <span className="text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Visit studio →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Testimonials() {
  const reviews = [
    {
      quote:
        "Sent in a pair of grails I thought were unsavable. Came back perfect. Care report included. This is the standard.",
      name: "Marcus L.",
      city: "Brooklyn, NY",
    },
    {
      quote:
        "Best in the game. The attention to materials is on another level — they treat your shoes like they belong in a museum.",
      name: "Avery T.",
      city: "Miami, FL",
    },
    {
      quote:
        "Joined Klean Club after my first mail-in. The pickup, the turnaround, the consistency — worth every dollar.",
      name: "Jordan K.",
      city: "Toronto, ON",
    },
  ];

  return (
    <Section className="bg-ink-50">
      <Container>
        <SectionHeading
          eyebrow="The work, in their words"
          title="Trusted by collectors. Recommended on instinct."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="rounded-3xl bg-white ring-1 ring-black/[0.04] p-8 min-h-[280px] flex flex-col justify-between"
            >
              <blockquote className="text-[18px] tracking-[-0.01em] leading-[1.45] text-ink-800 text-balance">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-black/[0.06]">
                <div className="text-[14px] font-medium text-ink-900">{review.name}</div>
                <div className="text-[13px] text-ink-500">{review.city}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FinalCta() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[36px] bg-brand-500 text-white p-10 md:p-16 lg:p-20">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(60% 60% at 100% 0%, rgba(255,255,255,0.4) 0%, transparent 60%), radial-gradient(40% 40% at 0% 100%, rgba(255,255,255,0.3) 0%, transparent 60%)",
            }}
            aria-hidden
          />
          <div className="relative max-w-3xl">
            <h2 className="text-[44px] md:text-[64px] lg:text-[80px] font-semibold tracking-[-0.035em] leading-[1.0] text-balance">
              Ready to ship in your next pair?
            </h2>
            <p className="mt-6 max-w-xl text-[17px] md:text-[19px] text-white/85 leading-relaxed">
              Book a service in seconds, or request a custom quote. Studio drop-off, mail-in, and Klean Club pickup available.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button href="/book" variant="white" size="lg">
                Book a service
              </Button>
              <Button href="/quote" variant="ghost" size="lg" className="text-white hover:bg-white/10">
                Get a quote
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
