import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Our Story",
  description: "The story behind Sneakky Klean — a decade of craft, care, and a quiet obsession with detail.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-spotlight" aria-hidden />
        <Container className="relative pt-20 md:pt-32 pb-20">
          <div className="max-w-4xl">
            <div className="eyebrow">Our story</div>
            <h1 className="mt-4 text-[56px] md:text-[88px] lg:text-[104px] font-bold tracking-[-0.04em] leading-[0.95] text-balance">
              Built on a quiet <br className="hidden md:block" />
              obsession with detail.
            </h1>
            <p className="mt-8 max-w-2xl text-[18px] md:text-[20px] text-ink-500 leading-relaxed">
              Sneakky Klean started in a single garage in Saskatoon — a side project for a small group of collectors who couldn't find anyone they trusted with their grails. A decade later, we're still doing it the same way: by hand, on the bench, with no shortcuts.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-white pt-0">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="aspect-[4/5] rounded-[32px] bg-gradient-to-br from-brand-300 via-brand-500 to-brand-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-30" />
            </div>
            <div className="lg:sticky lg:top-24 self-start">
              <div className="eyebrow">What we believe</div>
              <h2 className="mt-4 text-[36px] md:text-[48px] font-semibold tracking-[-0.03em] leading-[1.05] text-balance">
                Craft is the only way through.
              </h2>
              <div className="mt-6 space-y-5 text-[16px] md:text-[17px] text-ink-700 leading-[1.65]">
                <p>
                  We don't believe in shortcuts, miracle solutions, or marketing claims that outpace the work. Every pair gets a specialist. Every service follows a process. Every material gets the chemistry it needs.
                </p>
                <p>
                  We treat every sneaker like an investment — because, increasingly, they are. Our job is to extend the life of what you wear, with quiet care and consistent results.
                </p>
                <p>
                  We're proud to serve collectors, athletes, and people who just love their shoes. The standard is the same for everyone.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-ink-50">
        <Container>
          <SectionHeading
            eyebrow="Pillars"
            title="The things we won't compromise on."
          />
          <ul className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.06] rounded-3xl overflow-hidden">
            {[
              ["Premium quality", "Every product, every process, built to a luxury standard — without exception."],
              ["Expertise", "Specialists with years of bench time. Material-deep knowledge in every studio."],
              ["Convenience", "Mail-in across North America. Studio pickup for Klean Club members."],
              ["Sustainability", "Biodegradable chemistry, low-impact packaging, and a focus on extending life."],
              ["Trust", "Full condition reports, transparent pricing, fully insured services."],
              ["Confidence", "Treat every pair like an investment — because we know they are."],
            ].map(([title, copy]) => (
              <li key={title} className="bg-white p-8 md:p-10 min-h-[220px] flex flex-col justify-between">
                <div className="text-[13px] font-semibold tracking-[0.14em] text-brand-600">{title}</div>
                <div className="text-[15px] text-ink-700 leading-relaxed">{copy}</div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="rounded-[32px] bg-brand-500 text-white p-10 md:p-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-xl">
              <div className="eyebrow text-white/80">Join the team</div>
              <h2 className="mt-3 text-[36px] md:text-[48px] font-semibold tracking-[-0.03em] leading-[1.05] text-balance">
                We're always looking for specialists.
              </h2>
              <p className="mt-4 text-[16px] text-white/85 leading-relaxed">
                If you obsess over materials and craft, we'd love to talk.
              </p>
            </div>
            <Button href="/contact" variant="white" size="lg">Get in touch</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
