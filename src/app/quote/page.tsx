import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Get a quote",
  description: "Custom quote within 24 hours. Tell us about your pair and we'll match the right service.",
};

export default function QuotePage() {
  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <div>
            <div className="eyebrow">Quote</div>
            <h1 className="mt-4 text-[44px] md:text-[64px] font-semibold tracking-[-0.035em] leading-[1.02] text-balance">
              Custom care plan. Within 24 hours.
            </h1>
            <p className="mt-4 text-[17px] text-ink-500 leading-relaxed max-w-xl">
              Tell us what you have. We'll recommend the right service, an honest price, and an expected turnaround.
            </p>
            <ul className="mt-10 space-y-3">
              {[
                "Specialist review of every submission",
                "No charge until you approve the plan",
                "Custom services available for archive-level pairs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-ink-700">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 flex-none" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <form className="rounded-3xl bg-ink-50 p-8 md:p-12 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" id="name" />
              <Field label="Email" id="email" type="email" />
            </div>
            <Field label="Phone" id="phone" type="tel" />
            <Field label="Pair (make / model)" id="pair" placeholder="e.g. Air Jordan 4 'Bred' (2019)" />
            <div>
              <label htmlFor="condition" className="block text-[13px] font-medium text-ink-700 mb-2">
                Current condition
              </label>
              <textarea
                id="condition"
                rows={4}
                placeholder="Describe the wear, staining, or damage…"
                className="w-full px-4 py-3 rounded-xl bg-white ring-1 ring-black/[0.06] text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label htmlFor="goal" className="block text-[13px] font-medium text-ink-700 mb-2">
                What outcome are you after?
              </label>
              <textarea
                id="goal"
                rows={3}
                placeholder="Clean for daily wear, deyellow, full restoration…"
                className="w-full px-4 py-3 rounded-xl bg-white ring-1 ring-black/[0.06] text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <Button type="submit" size="lg" className="w-full">Request quote</Button>
            <p className="text-[12px] text-ink-500 text-center">
              We respond within 24 hours, Monday to Saturday.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-medium text-ink-700 mb-2">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="w-full h-12 px-4 rounded-xl bg-white ring-1 ring-black/[0.06] text-[15px] text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
      />
    </div>
  );
}
