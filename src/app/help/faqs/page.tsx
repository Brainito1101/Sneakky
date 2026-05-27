import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about Sneakky Klean services, mail-in, Klean Club, and more.",
};

const faqGroups = [
  {
    title: "Services",
    items: [
      {
        q: "How long does a service typically take?",
        a: "Most cleans turn around in 3–5 days. Restorations and complex treatments take 7–14 days. Every service shows its turnaround target on the service page.",
      },
      {
        q: "Can you clean my Air Jordan 1s / Yeezys / Dunks?",
        a: "Yes. We treat every modern silhouette and material we can identify. If we're unsure, we'll send you a free consultation before starting.",
      },
      {
        q: "Do you guarantee your work?",
        a: "We back every service with a satisfaction guarantee. If something isn't right, we'll redo it — or refund you.",
      },
      {
        q: "Will cleaning damage my shoes?",
        a: "Our material-specific process is designed to avoid the common pitfalls. Each pair is inspected and assigned a custom plan before treatment.",
      },
    ],
  },
  {
    title: "Mail-in",
    items: [
      {
        q: "How does mail-in work?",
        a: "Book online, print a prepaid insured label, drop off with your carrier. We clean, photograph, report, and ship back — typically within 7–10 days door-to-door.",
      },
      {
        q: "Is my package insured?",
        a: "Yes. Every mail-in is fully insured for both directions of shipping.",
      },
      {
        q: "Do you ship internationally?",
        a: "Currently US and Canada. We're working on more markets — sign up for updates.",
      },
    ],
  },
  {
    title: "Klean Club",
    items: [
      {
        q: "What's included with Klean Club?",
        a: "Priority service, member pricing across every service, monthly care credit, free pickup in studio cities (Signature & Archive), and members-only consultations.",
      },
      {
        q: "Can I pause or cancel?",
        a: "Anytime, from your account. No fees, no contracts.",
      },
      {
        q: "Does care credit roll over?",
        a: "Yes — for 30 days. Use it on services or anything in the shop.",
      },
    ],
  },
  {
    title: "Pricing",
    items: [
      {
        q: "How is pricing determined?",
        a: "Each service has a starting price tied to material and complexity. We'll always confirm before starting on restoration or treatment work.",
      },
      {
        q: "Do you offer custom quotes?",
        a: "Yes — send us a request via the quote page and we'll respond within 24 hours.",
      },
    ],
  },
];

export default function FAQsPage() {
  return (
    <>
      <section className="bg-white">
        <Container className="pt-20 md:pt-28 pb-12">
          <div className="text-[13px] text-ink-500">
            <Link href="/help" className="hover:text-brand-600">Help</Link>
            <span className="mx-2">/</span>
            <span>FAQs</span>
          </div>
          <h1 className="mt-6 text-[56px] md:text-[80px] font-bold tracking-[-0.04em] leading-[0.98] max-w-3xl">
            FAQs
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] text-ink-500 leading-relaxed">
            Everything we get asked, in one place.
          </p>
        </Container>
      </section>

      <Section className="bg-white pt-0">
        <Container>
          <div className="space-y-12">
            {faqGroups.map((group) => (
              <div key={group.title}>
                <div className="eyebrow">{group.title}</div>
                <ul className="mt-6 rounded-3xl ring-1 ring-black/[0.06] divide-y divide-black/[0.06] overflow-hidden">
                  {group.items.map((item) => (
                    <li key={item.q}>
                      <details className="group">
                        <summary className="cursor-pointer list-none flex items-center justify-between gap-6 px-6 md:px-8 py-6 hover:bg-ink-50/60 transition-colors">
                          <span className="text-[17px] font-medium tracking-[-0.01em] text-ink-900 text-balance">
                            {item.q}
                          </span>
                          <span className="flex-none h-8 w-8 rounded-full bg-ink-50 inline-flex items-center justify-center text-ink-500 group-open:rotate-45 transition-transform">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          </span>
                        </summary>
                        <div className="px-6 md:px-8 pb-6 text-[15px] text-ink-600 leading-relaxed max-w-3xl">
                          {item.a}
                        </div>
                      </details>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
