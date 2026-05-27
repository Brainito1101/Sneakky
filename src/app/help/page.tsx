import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Help & Support",
  description: "Need a hand? Browse FAQs, get in touch, or contact your studio directly.",
};

const topics = [
  {
    title: "Bookings",
    items: ["Booking a service", "Modify or cancel a booking", "Studio drop-off times", "Mail-in instructions"],
  },
  {
    title: "Pricing & Payment",
    items: ["Price guide", "Klean Club pricing", "Payment methods", "Refund policy"],
  },
  {
    title: "Klean Club",
    items: ["Join Klean Club", "Tier comparison", "Pause or cancel", "Member pickup"],
  },
  {
    title: "Studios",
    items: ["Studio locations", "Hours", "Walk-ins", "Private consults"],
  },
  {
    title: "Care advice",
    items: ["After-service care", "Storage tips", "Material guides", "Studio products"],
  },
  {
    title: "Mail-in",
    items: ["How mail-in works", "Insurance & tracking", "International availability", "Return packaging"],
  },
];

export default function HelpPage() {
  return (
    <>
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-spotlight" aria-hidden />
        <Container className="relative pt-20 md:pt-28 pb-12">
          <div className="max-w-3xl">
            <div className="eyebrow">Help & Support</div>
            <h1 className="mt-4 text-[56px] md:text-[80px] font-bold tracking-[-0.04em] leading-[0.98]">
              How can we help?
            </h1>
            <p className="mt-8 max-w-2xl text-[18px] text-ink-500 leading-relaxed">
              Browse common questions, or talk to your studio directly.
            </p>
            <div className="mt-10 max-w-xl">
              <div className="flex items-center h-14 rounded-full bg-ink-50 ring-1 ring-black/[0.06] px-6 focus-within:ring-brand-500">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-ink-400">
                  <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <input
                  type="search"
                  placeholder="Search help articles…"
                  className="ml-3 bg-transparent flex-1 outline-none text-[15px] placeholder:text-ink-400"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-white pt-0">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((topic) => (
              <div key={topic.title} className="rounded-3xl ring-1 ring-black/[0.06] p-8 bg-white">
                <h3 className="text-[20px] font-semibold tracking-[-0.018em]">{topic.title}</h3>
                <ul className="mt-5 space-y-2.5">
                  {topic.items.map((item) => (
                    <li key={item}>
                      <Link href="/help/faqs" className="text-[14px] text-ink-700 hover:text-brand-600 leading-relaxed">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-ink-50">
        <Container>
          <div className="rounded-[32px] bg-ink-950 text-white p-10 md:p-16 grid md:grid-cols-[1.4fr_1fr] gap-8 items-end">
            <div>
              <div className="eyebrow text-brand-300">Talk to us</div>
              <h2 className="mt-4 text-[36px] md:text-[48px] font-semibold tracking-[-0.03em] leading-[1.05] text-balance">
                Can't find what you need? Our team is one message away.
              </h2>
            </div>
            <div className="flex gap-3 md:justify-end">
              <Button href="/contact" variant="white" size="lg">Contact us</Button>
              <Button href="/help/faqs" variant="ghost" size="lg" className="text-white hover:bg-white/10">
                FAQs
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
