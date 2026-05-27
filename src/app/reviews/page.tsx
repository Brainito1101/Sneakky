import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Reviews",
  description: "What collectors, athletes, and sneakerheads are saying about Sneakky Klean.",
};

const reviews = [
  {
    quote: "Sent in a pair of grails I thought were unsavable. Came back perfect. Care report included. This is the standard.",
    name: "Marcus L.", city: "Brooklyn, NY", service: "Sneaker Restoration",
  },
  {
    quote: "Best in the game. The attention to materials is on another level — they treat your shoes like they belong in a museum.",
    name: "Avery T.", city: "Miami, FL", service: "Suede Cleaning",
  },
  {
    quote: "Joined Klean Club after my first mail-in. The pickup, the turnaround, the consistency — worth every dollar.",
    name: "Jordan K.", city: "Toronto, ON", service: "Klean Club Signature",
  },
  {
    quote: "I've tried four 'premium' services. Sneakky is the only one that came back without anything to complain about.",
    name: "Priya M.", city: "Vancouver, BC", service: "White Shoes Cleaning",
  },
  {
    quote: "The deyellow alone is worth it. Like a time machine for my Jordan 11s.",
    name: "Sam D.", city: "Austin, TX", service: "Yellow Sneaker Cleaning",
  },
  {
    quote: "Saskatoon studio crew goes above and beyond. Real craftspeople.",
    name: "Tariq H.", city: "Saskatoon, SK", service: "Sneaker Cleaning",
  },
  {
    quote: "Mailed in three pairs from LA. Returned in a week, immaculate, fully insured. I'm a customer for life.",
    name: "Jasmine R.", city: "Los Angeles, CA", service: "Mail-in Service",
  },
  {
    quote: "Red bottoms came back like they were lacquered yesterday. Hand application makes a real difference.",
    name: "Olivia W.", city: "Chicago, IL", service: "Red Bottom Restoration",
  },
  {
    quote: "Hand-bag cleaning saved my favorite tote. Hardware polished, leather soft again. Will use again.",
    name: "Kai N.", city: "New York, NY", service: "Handbag Cleaning",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-white">
        <Container className="pt-20 md:pt-28 pb-12">
          <div className="max-w-3xl">
            <div className="eyebrow">Reviews</div>
            <h1 className="mt-4 text-[56px] md:text-[80px] lg:text-[96px] font-bold tracking-[-0.04em] leading-[0.98]">
              4.9 average. <br className="hidden md:block" />
              12,000+ reviews.
            </h1>
            <p className="mt-8 max-w-2xl text-[18px] text-ink-500 leading-relaxed">
              Real reviews, real pairs. We share unedited words from the people who trust us with their rotation.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-white pt-0">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-3xl ring-1 ring-black/[0.06] p-8 min-h-[280px] flex flex-col justify-between bg-white">
                <div>
                  <div className="flex gap-0.5 text-brand-500" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                        <path d="M7 0l1.8 4.7L14 5l-4 3.4L11.4 14 7 11.2 2.6 14 4 8.4 0 5l5.2-.3z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mt-5 text-[16px] tracking-[-0.005em] leading-[1.55] text-ink-800 text-balance">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-6 pt-6 border-t border-black/[0.06]">
                  <div className="text-[14px] font-medium text-ink-900">{r.name}</div>
                  <div className="text-[12px] text-ink-500">{r.city} · {r.service}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-ink-50">
        <Container>
          <div className="rounded-[32px] bg-white ring-1 ring-black/[0.04] p-10 md:p-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <SectionHeading
              eyebrow="Tell us how we did"
              title="Recently used our services?"
              description="We read every review. Tell us what we got right — and what we can do better."
            />
            <div className="flex gap-3">
              <Button href="/contact" variant="secondary">Leave a review</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
