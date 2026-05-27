import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";
import { services, getService, serviceCategories } from "@/data/services";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-spotlight" aria-hidden />
        <Container className="relative pt-16 md:pt-24 pb-12 md:pb-16">
          <div className="text-[13px] text-ink-500">
            <Link href="/services" className="hover:text-brand-600">Services</Link>
            <span className="mx-2">/</span>
            <span>{serviceCategories[service.category].title}</span>
          </div>
          <div className="mt-8 grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-start">
            <div>
              <div className="eyebrow">{serviceCategories[service.category].title}</div>
              <h1 className="mt-4 text-[52px] md:text-[72px] lg:text-[88px] font-bold tracking-[-0.04em] leading-[0.98] text-balance">
                {service.name}
              </h1>
              <p className="mt-6 text-[20px] md:text-[24px] text-ink-700 leading-[1.3] tracking-[-0.015em] max-w-2xl text-balance">
                {service.tagline}
              </p>
              <p className="mt-6 max-w-2xl text-[16px] md:text-[17px] text-ink-500 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Button href="/book" size="lg">Book this service</Button>
                <Button href="/quote" variant="white" size="lg">Get a quote</Button>
              </div>
            </div>
            <aside className="rounded-3xl bg-ink-950 text-white p-8">
              <div className="eyebrow text-brand-300">At a glance</div>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-[12px] text-white/55 uppercase tracking-[0.14em]">Starting at</dt>
                  <dd className="mt-1 text-[40px] font-semibold tracking-[-0.03em] leading-none">
                    ${service.priceFrom}
                  </dd>
                </div>
                <div className="pt-5 border-t border-white/10">
                  <dt className="text-[12px] text-white/55 uppercase tracking-[0.14em]">Turnaround</dt>
                  <dd className="mt-1 text-[20px] font-semibold tracking-[-0.015em]">
                    {service.turnaround}
                  </dd>
                </div>
                <div className="pt-5 border-t border-white/10">
                  <dt className="text-[12px] text-white/55 uppercase tracking-[0.14em]">Availability</dt>
                  <dd className="mt-1 text-[14px] text-white/75 leading-relaxed">
                    In-studio at Miami, New York, Saskatoon. Mail-in anywhere in North America.
                  </dd>
                </div>
              </dl>
              <Button href="/book" variant="white" size="md" className="mt-8 w-full">
                Book {service.name}
              </Button>
            </aside>
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <Section className="bg-white pt-0">
        <Container>
          <SectionHeading
            eyebrow="What's included"
            title="Built around the way the material wears."
          />
          <ul className="mt-12 grid md:grid-cols-3 gap-px bg-black/[0.06] rounded-3xl overflow-hidden">
            {service.highlights.map((highlight, i) => (
              <li key={i} className="bg-white p-8 md:p-10 min-h-[180px] flex flex-col">
                <div className="text-[13px] font-semibold tracking-[0.14em] text-brand-600">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-auto text-[20px] font-semibold tracking-[-0.015em] leading-[1.2] text-balance">
                  {highlight}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-ink-50">
        <Container>
          <SectionHeading
            eyebrow="Studio process"
            title="The same path. Every pair."
            description="Consistency is the craft. Every service follows the same disciplined process — adapted to the materials in front of us."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {service.process.map((step, i) => (
              <div key={i} className="rounded-3xl bg-white ring-1 ring-black/[0.04] p-8 min-h-[220px] flex flex-col justify-between">
                <div className="text-[13px] font-semibold tracking-[0.14em] text-brand-600">
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-[22px] font-semibold tracking-[-0.02em] leading-[1.15]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-ink-500 leading-relaxed">{step.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <Section className="bg-white">
          <Container>
            <div className="flex items-end justify-between">
              <SectionHeading eyebrow="Related" title="Care that pairs with this." />
              <Link
                href="/services"
                className="hidden md:inline-flex items-center gap-1.5 text-[15px] font-medium text-brand-600 hover:text-brand-700"
              >
                All services <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group rounded-3xl ring-1 ring-black/[0.06] hover:ring-brand-500 transition-all p-8 min-h-[220px] flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-[22px] font-semibold tracking-[-0.02em]">{rel.name}</h3>
                    <p className="mt-2 text-[14px] text-ink-500 leading-relaxed">{rel.tagline}</p>
                  </div>
                  <div className="mt-8 flex items-center justify-between text-[13px] text-ink-500">
                    <span>From ${rel.priceFrom}</span>
                    <span className="text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <Section className="bg-white pt-0">
        <Container>
          <div className="rounded-[32px] bg-brand-500 text-white p-10 md:p-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-[32px] md:text-[48px] font-semibold tracking-[-0.03em] leading-[1.05] text-balance">
                Ready to send in your {service.name.toLowerCase()}?
              </h2>
              <p className="mt-4 text-[16px] text-white/85 leading-relaxed">
                Book online in seconds. Studio drop-off or mail-in.
              </p>
            </div>
            <div className="flex gap-3">
              <Button href="/book" variant="white" size="lg">Book now</Button>
              <Button href="/quote" variant="ghost" size="lg" className="text-white hover:bg-white/10">
                Custom quote
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
