import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";
import { products } from "@/data/shop";

export const metadata: Metadata = {
  title: "Shop",
  description: "Studio-grade products for sneaker care. Wipes, kits, and the tools we use in-studio.",
};

export default function ShopPage() {
  return (
    <>
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-spotlight" aria-hidden />
        <Container className="relative pt-20 md:pt-28 pb-12">
          <div className="max-w-3xl">
            <div className="eyebrow">Shop</div>
            <h1 className="mt-4 text-[56px] md:text-[80px] lg:text-[96px] font-bold tracking-[-0.04em] leading-[0.98]">
              The studio, at home.
            </h1>
            <p className="mt-8 max-w-2xl text-[18px] md:text-[20px] text-ink-500 leading-relaxed">
              Products engineered in our studios and used on every pair we touch. Built to extend the life of every silhouette in your rotation.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-white pt-0">
        <Container>
          <div className="grid md:grid-cols-2 gap-5">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/shop/${p.slug}`}
                className="group rounded-3xl ring-1 ring-black/[0.06] hover:ring-brand-500 transition-all overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 via-brand-300 to-brand-600 relative">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute bottom-5 right-5 rounded-full bg-white/90 backdrop-blur px-4 h-9 inline-flex items-center text-[13px] font-medium text-ink-900">
                    From ${p.price}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-[24px] font-semibold tracking-[-0.02em]">{p.name}</h2>
                    <p className="mt-2 text-[14px] text-ink-500 leading-relaxed">{p.tagline}</p>
                  </div>
                  <div className="mt-8 flex items-center justify-between text-[13px] text-ink-500">
                    <span>Free returns</span>
                    <span className="text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Shop now →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-ink-50">
        <Container>
          <div className="rounded-[32px] bg-ink-950 text-white p-10 md:p-16 grid md:grid-cols-[1.4fr_1fr] gap-8 items-end">
            <div>
              <div className="eyebrow text-brand-300">Bulk and wholesale</div>
              <h2 className="mt-4 text-[36px] md:text-[48px] font-semibold tracking-[-0.03em] leading-[1.05] text-balance">
                Outfitting a team, a studio, or a store?
              </h2>
              <p className="mt-4 max-w-xl text-[16px] text-white/65 leading-relaxed">
                Talk to our team about wholesale, co-branded kits, and team rates.
              </p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <Button href="/contact" variant="white" size="lg">Contact sales</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
