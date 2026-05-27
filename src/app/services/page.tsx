import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";
import { services, serviceCategories, ServiceCategory } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore every Sneakky Klean service — cleaning, restoration, treatments, and accessory care. Hand-finished by specialists.",
};

const categoryOrder: ServiceCategory[] = ["cleaning", "restoration", "treatment", "accessory"];

export default function ServicesPage() {
  return (
    <>
      <PageHero />
      {categoryOrder.map((category) => {
        const items = services.filter((s) => s.category === category);
        if (!items.length) return null;
        const meta = serviceCategories[category];
        return (
          <Section key={category} className={category === "cleaning" ? "pt-0" : "bg-white"}>
            <Container>
              <div className="grid lg:grid-cols-[1fr_2.4fr] gap-12 lg:gap-16">
                <div>
                  <div className="eyebrow">{meta.title}</div>
                  <h2 className="mt-3 text-[36px] md:text-[44px] font-semibold tracking-[-0.03em] leading-[1.05] text-balance">
                    {meta.title}
                  </h2>
                  <p className="mt-4 text-[16px] text-ink-500 leading-relaxed max-w-md">
                    {meta.description}
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {items.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group rounded-2xl ring-1 ring-black/[0.06] hover:ring-brand-500 transition-all p-6 min-h-[180px] flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="text-[18px] font-semibold tracking-[-0.015em]">{service.name}</h3>
                        <p className="mt-2 text-[13px] text-ink-500 leading-relaxed">{service.tagline}</p>
                      </div>
                      <div className="mt-6 flex items-center justify-between text-[12px] text-ink-500">
                        <span>From ${service.priceFrom}</span>
                        <span className="text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn more →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Container>
          </Section>
        );
      })}
      <FinalCta />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-spotlight" aria-hidden />
      <Container className="relative pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="max-w-3xl">
          <div className="eyebrow">Services</div>
          <h1 className="mt-4 text-[56px] md:text-[80px] lg:text-[96px] font-bold tracking-[-0.04em] leading-[0.98] text-balance">
            Every material. <br className="hidden md:block" />
            Every silhouette.
          </h1>
          <p className="mt-8 max-w-2xl text-[18px] md:text-[20px] text-ink-500 leading-relaxed">
            Twenty-plus services, each engineered for a specific material and construction. Choose your service — or send it to us and we'll match it.
          </p>
          <div className="mt-10 flex gap-3">
            <Button href="/book" size="lg">Book a service</Button>
            <Button href="/quote" variant="white" size="lg">Get a quote</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FinalCta() {
  return (
    <Section className="bg-ink-50">
      <Container>
        <div className="rounded-[32px] bg-white ring-1 ring-black/[0.04] p-10 md:p-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <SectionHeading
              eyebrow="Not sure where to start?"
              title="Send it in. We'll match the right service."
              description="Tell us what you have, and we'll recommend a care plan within 24 hours."
            />
          </div>
          <div className="flex gap-3">
            <Button href="/quote" size="lg">Get a custom quote</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
