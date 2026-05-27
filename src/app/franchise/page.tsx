import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Franchise",
  description: "Open a Sneakky Klean studio in your city. A franchise model built around craft and consistency.",
};

export default function FranchisePage() {
  return (
    <>
      <section className="relative bg-ink-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(50% 50% at 20% 0%, rgba(110,197,227,0.3) 0%, transparent 60%), radial-gradient(40% 40% at 100% 100%, rgba(110,197,227,0.2) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <Container className="relative pt-20 md:pt-32 pb-20 md:pb-28">
          <div className="max-w-3xl">
            <div className="eyebrow text-brand-300">Franchise</div>
            <h1 className="mt-4 text-[56px] md:text-[80px] lg:text-[96px] font-bold tracking-[-0.04em] leading-[0.98]">
              Bring Sneakky Klean to your city.
            </h1>
            <p className="mt-8 max-w-2xl text-[18px] md:text-[20px] text-white/70 leading-relaxed">
              A franchise model designed around craft, consistency, and the standard we've built over a decade. Limited partnerships, hand-selected operators.
            </p>
            <div className="mt-10">
              <Button href="#apply" variant="white" size="lg">Apply for a franchise</Button>
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="The opportunity"
            title="A premium service category. A proven model."
            description="A studio-driven, low-footprint operation with strong unit economics and a brand built for the next decade of sneaker culture."
          />
          <ul className="mt-16 grid md:grid-cols-3 gap-px bg-black/[0.06] rounded-3xl overflow-hidden">
            {[
              ["Brand & playbook", "A complete operations and brand playbook — from build-out to bench."],
              ["Specialist training", "Every operator and specialist is trained in-studio before opening."],
              ["Marketing engine", "Co-funded local launch, supported by national brand spend."],
              ["Tech stack", "Bookings, member management, and studio ops, ready on day one."],
              ["Supplier network", "Studio-grade chemistry, packaging, and equipment, ready-to-order."],
              ["Ongoing support", "Quarterly studio reviews and an operator community."],
            ].map(([title, copy]) => (
              <li key={title} className="bg-white p-8 md:p-10 min-h-[220px] flex flex-col justify-between">
                <div className="text-[13px] font-semibold tracking-[0.14em] text-brand-600">{title}</div>
                <div className="text-[15px] text-ink-700 leading-relaxed">{copy}</div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="apply" className="bg-ink-50">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12">
            <div>
              <SectionHeading
                eyebrow="Apply"
                title="Tell us about you."
                description="A short application — we'll respond within five business days."
              />
            </div>
            <form className="rounded-3xl bg-white ring-1 ring-black/[0.06] p-8 md:p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="First name" id="first" />
                <Field label="Last name" id="last" />
              </div>
              <Field label="Email" id="email" type="email" />
              <Field label="Phone" id="phone" type="tel" />
              <Field label="City of interest" id="city" />
              <div>
                <label htmlFor="message" className="block text-[13px] font-medium text-ink-700 mb-2">
                  Tell us about your background
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-ink-50 ring-1 ring-black/[0.06] text-[15px] text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
                  placeholder="Operating experience, financial readiness, why Sneakky Klean…"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">Submit application</Button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Field({ label, id, type = "text" }: { label: string; id: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-medium text-ink-700 mb-2">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className="w-full h-12 px-4 rounded-xl bg-ink-50 ring-1 ring-black/[0.06] text-[15px] text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
      />
    </div>
  );
}
