import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sneakky Klean — general inquiries, press, partnerships, and your local studio.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-white">
        <Container className="pt-20 md:pt-28 pb-12">
          <div className="max-w-3xl">
            <div className="eyebrow">Contact</div>
            <h1 className="mt-4 text-[56px] md:text-[80px] font-bold tracking-[-0.04em] leading-[0.98]">
              Let's talk.
            </h1>
            <p className="mt-8 max-w-2xl text-[18px] text-ink-500 leading-relaxed">
              Use the form for general inquiries, or contact your local studio directly. We respond within one business day.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-white pt-0">
        <Container>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12">
            <form className="rounded-3xl bg-ink-50 p-8 md:p-12 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="First name" id="first" />
                <Field label="Last name" id="last" />
              </div>
              <Field label="Email" id="email" type="email" />
              <div>
                <label htmlFor="topic" className="block text-[13px] font-medium text-ink-700 mb-2">
                  What's this about?
                </label>
                <select
                  id="topic"
                  name="topic"
                  defaultValue=""
                  className="w-full h-12 px-4 rounded-xl bg-white ring-1 ring-black/[0.06] text-[15px] text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
                >
                  <option value="" disabled>Choose a topic</option>
                  <option value="general">General inquiry</option>
                  <option value="press">Press</option>
                  <option value="partnerships">Partnerships</option>
                  <option value="careers">Careers</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-[13px] font-medium text-ink-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white ring-1 ring-black/[0.06] text-[15px] text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
                  placeholder="Tell us a little more…"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">Send message</Button>
            </form>

            <aside className="space-y-8">
              <div>
                <div className="eyebrow">Studios</div>
                <ul className="mt-4 space-y-4">
                  {locations.map((loc) => (
                    <li key={loc.slug} className="rounded-2xl ring-1 ring-black/[0.06] p-5">
                      <div className="text-[15px] font-semibold tracking-[-0.01em]">{loc.city}</div>
                      <a href={`mailto:${loc.email}`} className="mt-1 block text-[14px] text-brand-600 hover:underline">{loc.email}</a>
                      <a href={`tel:${loc.phone}`} className="block text-[14px] text-ink-500">{loc.phone}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="eyebrow">Press</div>
                <a href="mailto:press@sneakky.com" className="mt-3 block text-[15px] text-brand-600 hover:underline">press@sneakky.com</a>
              </div>
              <div>
                <div className="eyebrow">Partnerships</div>
                <a href="mailto:partnerships@sneakky.com" className="mt-3 block text-[15px] text-brand-600 hover:underline">partnerships@sneakky.com</a>
              </div>
            </aside>
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
        className="w-full h-12 px-4 rounded-xl bg-white ring-1 ring-black/[0.06] text-[15px] text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
      />
    </div>
  );
}
