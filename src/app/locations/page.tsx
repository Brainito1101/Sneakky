import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Locations",
  description: "Find a Sneakky Klean studio near you — Miami, New York, Saskatoon. Mail-in available across North America.",
};

export default function LocationsPage() {
  return (
    <>
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-spotlight" aria-hidden />
        <Container className="relative pt-20 md:pt-28 pb-12">
          <div className="max-w-3xl">
            <div className="eyebrow">Studios</div>
            <h1 className="mt-4 text-[56px] md:text-[80px] lg:text-[96px] font-bold tracking-[-0.04em] leading-[0.98]">
              Three studios. <br className="hidden md:block" />
              One standard.
            </h1>
            <p className="mt-8 max-w-2xl text-[18px] md:text-[20px] text-ink-500 leading-relaxed">
              Visit us in Miami, New York, or Saskatoon for in-studio drop-off, consultations, and Klean Club services. Or ship from anywhere in North America.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-white pt-0">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group rounded-3xl ring-1 ring-black/[0.06] hover:ring-brand-500 hover:bg-ink-50/40 transition-all overflow-hidden flex flex-col"
              >
                <div className="aspect-[5/4] bg-gradient-to-br from-brand-200 via-brand-400 to-brand-700 relative">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute bottom-5 left-5 text-white">
                    <div className="eyebrow text-white/80">{loc.country}</div>
                    <div className="mt-1 text-[36px] font-semibold tracking-[-0.025em] leading-none">{loc.city}</div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-[14px] text-ink-500 leading-relaxed">{loc.description}</p>
                  <div className="mt-6 text-[13px] text-ink-500 flex items-center justify-between">
                    <span>{loc.address.split(",")[0]}</span>
                    <span className="text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Visit →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-[32px] bg-ink-950 text-white p-10 md:p-16 grid md:grid-cols-[1.4fr_1fr] gap-8 items-end">
            <div>
              <div className="eyebrow text-brand-300">Mail-in</div>
              <h2 className="mt-4 text-[36px] md:text-[48px] font-semibold tracking-[-0.03em] leading-[1.05] text-balance">
                Not near a studio? Ship from anywhere.
              </h2>
              <p className="mt-4 max-w-xl text-[16px] text-white/65 leading-relaxed">
                Prepaid label in. Fully insured. Returned with a full condition report. Available across North America.
              </p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <Button href="/services/mail-in" variant="white" size="lg">Start mail-in</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
