import Link from "next/link";
import { Container } from "./Container";

type LegalSection = { title: string; paragraphs: string[] };

export function LegalPage({
  category,
  title,
  intro,
  updated,
  sections,
}: {
  category: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24 max-w-4xl">
        <div className="text-[13px] text-ink-500">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/legal/privacy-policy" className="hover:text-brand-600">Legal</Link>
          <span className="mx-2">/</span>
          <span>{category}</span>
        </div>
        <h1 className="mt-6 text-[44px] md:text-[64px] font-semibold tracking-[-0.035em] leading-[1.02]">
          {title}
        </h1>
        <p className="mt-4 text-[15px] text-ink-500">Last updated: {updated}</p>
        <p className="mt-8 text-[17px] text-ink-700 leading-[1.65] max-w-2xl">{intro}</p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-[22px] font-semibold tracking-[-0.02em]">{section.title}</h2>
              <div className="mt-3 space-y-3 text-[15px] text-ink-700 leading-[1.7]">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
