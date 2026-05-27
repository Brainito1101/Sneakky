import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { products, getProduct } from "@/data/shop";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  return { title: product.name, description: product.description };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      <Section className="bg-white pt-12">
        <Container>
          <div className="text-[13px] text-ink-500">
            <Link href="/shop" className="hover:text-brand-600">Shop</Link>
            <span className="mx-2">/</span>
            <span>{product.name}</span>
          </div>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="aspect-square rounded-[32px] bg-gradient-to-br from-brand-100 via-brand-300 to-brand-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/90 text-[40px] font-semibold tracking-[-0.025em] text-center max-w-xs text-balance">
                  {product.name}
                </div>
              </div>
            </div>
            <div>
              <div className="eyebrow">Shop</div>
              <h1 className="mt-4 text-[44px] md:text-[64px] font-semibold tracking-[-0.035em] leading-[1.02] text-balance">
                {product.name}
              </h1>
              <p className="mt-4 text-[18px] md:text-[20px] text-ink-700 leading-[1.35] tracking-[-0.01em]">
                {product.tagline}
              </p>
              <p className="mt-6 text-[16px] text-ink-500 leading-relaxed max-w-xl">
                {product.description}
              </p>
              <div className="mt-8 flex items-baseline gap-3">
                <span className="text-[48px] font-semibold tracking-[-0.03em] leading-none">${product.price}</span>
                <span className="text-[14px] text-ink-500">free shipping over $50</span>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button size="lg">Add to cart</Button>
                <Button variant="white" size="lg">Buy now</Button>
              </div>

              <div className="mt-12 grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="eyebrow">Highlights</div>
                  <ul className="mt-3 space-y-2">
                    {product.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-[14px] text-ink-700 leading-relaxed">
                        <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-brand-500 flex-none" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="eyebrow">What's in the box</div>
                  <ul className="mt-3 space-y-2">
                    {product.includes.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-[14px] text-ink-700 leading-relaxed">
                        <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-brand-500 flex-none" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section className="bg-ink-50">
          <Container>
            <div className="eyebrow">Also from the shop</div>
            <div className="mt-8 grid md:grid-cols-2 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/shop/${p.slug}`}
                  className="group rounded-3xl bg-white ring-1 ring-black/[0.06] hover:ring-brand-500 transition-all p-8 flex items-center justify-between gap-6"
                >
                  <div>
                    <h3 className="text-[22px] font-semibold tracking-[-0.02em]">{p.name}</h3>
                    <p className="mt-1 text-[14px] text-ink-500">{p.tagline}</p>
                    <div className="mt-4 text-[13px] text-brand-600">From ${p.price} →</div>
                  </div>
                  <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-brand-200 to-brand-500 shrink-0" />
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
