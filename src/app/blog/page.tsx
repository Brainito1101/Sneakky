import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes from the studio — care guides, restoration stories, and the craft behind Sneakky Klean.",
};

const posts = [
  {
    category: "Care guide",
    title: "How to keep white sneakers white — the studio approach.",
    excerpt: "A field guide to the small habits that preserve white uppers and clear midsoles long after the first wear.",
    date: "May 18, 2026",
    readTime: "6 min",
  },
  {
    category: "Restoration",
    title: "Inside a full Air Max 95 restoration — start to finish.",
    excerpt: "A deep-dive into a deyellow, reglue, and paint-match restoration on a pair of grails.",
    date: "May 4, 2026",
    readTime: "9 min",
  },
  {
    category: "Materials",
    title: "Suede 101 — why it's so unforgiving, and how to keep it right.",
    excerpt: "Suede rewards care and punishes shortcuts. Here's the playbook our specialists use.",
    date: "April 22, 2026",
    readTime: "5 min",
  },
  {
    category: "Craft",
    title: "Why we'll never use ultrasonic cleaning on premium leather.",
    excerpt: "The reason a popular shortcut is one we'll never adopt, no matter how fast it seems.",
    date: "April 9, 2026",
    readTime: "7 min",
  },
  {
    category: "Studio",
    title: "Opening Miami — and what we learned along the way.",
    excerpt: "Lessons from launching our second studio on Lincoln Road.",
    date: "March 28, 2026",
    readTime: "4 min",
  },
  {
    category: "Sustainability",
    title: "The case for repair over replace.",
    excerpt: "On extending the life of every pair, and why restoration is the most sustainable choice you can make.",
    date: "March 14, 2026",
    readTime: "6 min",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <section className="bg-white">
        <Container className="pt-20 md:pt-28 pb-12">
          <div className="max-w-3xl">
            <div className="eyebrow">Journal</div>
            <h1 className="mt-4 text-[56px] md:text-[80px] font-bold tracking-[-0.04em] leading-[0.98]">
              Notes from the studio.
            </h1>
            <p className="mt-8 max-w-2xl text-[18px] text-ink-500 leading-relaxed">
              Care guides, restoration stories, and the craft behind Sneakky Klean.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-white pt-0">
        <Container>
          <article className="group rounded-[32px] overflow-hidden ring-1 ring-black/[0.06] grid lg:grid-cols-2 cursor-pointer hover:ring-brand-500 transition-all">
            <div className="aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-brand-300 via-brand-500 to-brand-800 relative">
              <div className="absolute inset-0 bg-grid opacity-30" />
            </div>
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <div className="eyebrow">{featured.category}</div>
              <h2 className="mt-4 text-[32px] md:text-[44px] font-semibold tracking-[-0.025em] leading-[1.1] text-balance">
                {featured.title}
              </h2>
              <p className="mt-4 text-[16px] text-ink-500 leading-relaxed">{featured.excerpt}</p>
              <div className="mt-8 flex items-center gap-4 text-[13px] text-ink-500">
                <span>{featured.date}</span>
                <span className="h-1 w-1 rounded-full bg-ink-300" />
                <span>{featured.readTime} read</span>
              </div>
            </div>
          </article>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <article
                key={post.title}
                className="group rounded-3xl overflow-hidden ring-1 ring-black/[0.06] hover:ring-brand-500 transition-all cursor-pointer flex flex-col"
              >
                <div className="aspect-[5/4] bg-gradient-to-br from-ink-200 via-brand-200 to-brand-500 relative">
                  <div className="absolute inset-0 bg-grid opacity-25" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="eyebrow text-brand-600">{post.category}</div>
                    <h3 className="mt-3 text-[20px] font-semibold tracking-[-0.018em] leading-[1.2] text-balance">
                      {post.title}
                    </h3>
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-[12px] text-ink-500">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-ink-300" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
