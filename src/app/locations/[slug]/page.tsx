import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";
import { locations, getLocation } from "@/data/locations";

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
    title: `${location.city} Studio`,
    description: location.description,
  };
}

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
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-spotlight" aria-hidden />
        <Container className="relative pt-16 md:pt-24 pb-12 md:pb-16">
          <div className="text-[13px] text-ink-500">
            <Link href="/locations" className="hover:text-brand-600">Locations</Link>
            <span className="mx-2">/</span>
            <span>{location.city}</span>
          </div>
          <div className="mt-8 grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16">
            <div>
              <div className="eyebrow">{location.country}</div>
              <h1 className="mt-4 text-[64px] md:text-[88px] lg:text-[104px] font-bold tracking-[-0.04em] leading-[0.95]">
                {location.city}
              </h1>
              <p className="mt-6 max-w-2xl text-[18px] md:text-[20px] text-ink-500 leading-relaxed">
                {location.description}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Button href="/book" size="lg">Book at {location.city}</Button>
                <Button href={`mailto:${location.email}`} variant="white" size="lg">
                  Email the studio
                </Button>
              </div>
            </div>
            <aside className="rounded-3xl bg-ink-950 text-white p-8 space-y-6">
              <div>
                <div className="eyebrow text-brand-300">Address</div>
                <div className="mt-2 text-[15px] leading-relaxed">{location.address}</div>
              </div>
              <div className="pt-6 border-t border-white/10">
                <div className="eyebrow text-brand-300">Hours</div>
                <ul className="mt-3 space-y-1.5">
                  {location.hours.map((h) => (
                    <li key={h.days} className="flex justify-between text-[14px]">
                      <span className="text-white/70">{h.days}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 border-t border-white/10 space-y-3">
                <div>
                  <div className="eyebrow text-brand-300">Phone</div>
                  <a href={`tel:${location.phone}`} className="mt-1.5 block text-[15px] hover:text-brand-300">
                    {location.phone}
                  </a>
                </div>
                <div>
                  <div className="eyebrow text-brand-300">Email</div>
                  <a href={`mailto:${location.email}`} className="mt-1.5 block text-[15px] hover:text-brand-300">
                    {location.email}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <Section className="bg-white pt-0">
        <Container>
          <SectionHeading eyebrow="In-studio" title="What you can do here." />
          <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.06] rounded-3xl overflow-hidden">
            {location.amenities.map((a, i) => (
              <li key={i} className="bg-white p-8 min-h-[160px] flex flex-col justify-between">
                <div className="text-[13px] font-semibold tracking-[0.14em] text-brand-600">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-[18px] font-semibold tracking-[-0.015em] leading-[1.2]">{a}</div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="bg-ink-50">
        <Container>
          <div className="rounded-[32px] overflow-hidden bg-gradient-to-br from-brand-300 via-brand-500 to-brand-800 aspect-[16/9] md:aspect-[21/9] relative">
            <div className="absolute inset-0 bg-grid opacity-25" />
            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 text-white">
              <div className="eyebrow text-white/80">Studio map</div>
              <div className="mt-2 text-[24px] md:text-[32px] font-semibold tracking-[-0.02em] max-w-2xl text-balance">
                {location.address}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
