import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Klean Club",
  description:
    "The Sneakky Klean membership. Priority service, member pricing, monthly care credit, and free pickup in studio cities.",
};

const tiers = [
  {
    name: "Klean Club Essentials",
    price: 24,
    cadence: "per month",
    description: "For the rotation that needs steady care.",
    features: [
      "10% off every service",
      "Priority studio queue",
      "$15 monthly care credit",
      "Free standard shipping (mail-in)",
    ],
    cta: "Start Essentials",
    accent: false,
  },
  {
    name: "Klean Club Signature",
    price: 49,
    cadence: "per month",
    description: "The standard for serious collectors.",
    features: [
      "20% off every service",
      "Top-priority studio queue",
      "$40 monthly care credit",
      "Free pickup in studio cities",
      "Quarterly studio-led restoration consult",
    ],
    cta: "Start Signature",
    accent: true,
  },
  {
    name: "Klean Club Archive",
    price: 129,
    cadence: "per month",
    description: "Concierge care for archive-level collections.",
    features: [
      "30% off every service",
      "Same-week turnaround target",
      "$120 monthly care credit",
      "On-demand pickup + return",
      "Dedicated specialist + condition reports",
      "Annual archive review",
    ],
    cta: "Speak to concierge",
    accent: false,
  },
];

export default function KleanClubPage() {
  return (
    <>
      <section className="relative bg-ink-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(50% 50% at 30% 0%, rgba(110,197,227,0.35) 0%, transparent 60%), radial-gradient(40% 40% at 90% 100%, rgba(110,197,227,0.25) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <Container className="relative pt-20 md:pt-32 pb-20 md:pb-28">
          <div className="max-w-3xl">
            <div className="eyebrow text-brand-300">Klean Club</div>
            <h1 className="mt-4 text-[56px] md:text-[80px] lg:text-[104px] font-bold tracking-[-0.04em] leading-[0.95] text-balance">
              The membership for the rotation.
            </h1>
            <p className="mt-8 max-w-2xl text-[18px] md:text-[20px] text-white/70 leading-relaxed">
              Priority care, member pricing, monthly care credit. Built for collectors who care about the long run.
            </p>
            <div className="mt-10 flex gap-3">
              <Button href="/klean-club/join" variant="white" size="lg">Join Klean Club</Button>
              <Button href="/contact" variant="ghost" size="lg" className="text-white hover:bg-white/10">
                Talk to us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="Membership tiers"
            title="Care that scales with your collection."
            description="Three tiers, designed around how often you wear and care. Cancel anytime."
          />
          <div className="mt-16 grid md:grid-cols-3 gap-5">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-[28px] p-8 md:p-10 flex flex-col ${
                  tier.accent
                    ? "bg-ink-950 text-white ring-1 ring-brand-500 shadow-soft scale-[1.02]"
                    : "bg-white ring-1 ring-black/[0.06]"
                }`}
              >
                <div className={`eyebrow ${tier.accent ? "text-brand-300" : "text-brand-600"}`}>
                  {tier.name.replace("Klean Club ", "")}
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-[56px] font-semibold tracking-[-0.035em] leading-none">${tier.price}</span>
                  <span className={`text-[14px] ${tier.accent ? "text-white/60" : "text-ink-500"}`}>
                    /{tier.cadence.replace("per ", "")}
                  </span>
                </div>
                <p className={`mt-3 text-[15px] leading-relaxed ${tier.accent ? "text-white/70" : "text-ink-500"}`}>
                  {tier.description}
                </p>
                <ul className="mt-8 space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[14px] leading-relaxed">
                      <span
                        className={`mt-1.5 inline-block h-1.5 w-1.5 rounded-full flex-none ${
                          tier.accent ? "bg-brand-300" : "bg-brand-500"
                        }`}
                      />
                      <span className={tier.accent ? "text-white/85" : "text-ink-700"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/klean-club/join"
                  variant={tier.accent ? "white" : "primary"}
                  size="md"
                  className="mt-10 w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-ink-50">
        <Container>
          <SectionHeading
            eyebrow="Membership perks"
            title="What you get, every month."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.06] rounded-3xl overflow-hidden">
            {[
              ["Priority queue", "Member orders move ahead — every studio, every time."],
              ["Member pricing", "Tier-based discounts on every service we offer."],
              ["Care credit", "Monthly credit toward services and shop, rolls over 30 days."],
              ["Free pickup", "On-demand pickup in studio cities for Signature and Archive."],
            ].map(([title, copy]) => (
              <div key={title} className="bg-white p-8 md:p-10 min-h-[220px] flex flex-col justify-between">
                <div className="text-[13px] font-semibold tracking-[0.14em] text-brand-600">{title}</div>
                <div className="text-[15px] text-ink-700 leading-relaxed">{copy}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
