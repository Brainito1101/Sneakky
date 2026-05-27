import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Book a service",
  description: "Book a Sneakky Klean service — studio drop-off, mail-in, or Klean Club pickup.",
};

export default function BookPage() {
  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <div>
            <div className="eyebrow">Book</div>
            <h1 className="mt-4 text-[44px] md:text-[64px] font-semibold tracking-[-0.035em] leading-[1.02] text-balance">
              Send in your next pair.
            </h1>
            <p className="mt-4 text-[17px] text-ink-500 leading-relaxed max-w-xl">
              Choose your service, your studio, and a date. We'll confirm within minutes.
            </p>

            <form className="mt-12 space-y-8">
              <div>
                <div className="eyebrow mb-3">1. Service</div>
                <select className="w-full h-14 px-5 rounded-xl bg-ink-50 ring-1 ring-black/[0.06] text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-500" defaultValue="">
                  <option value="" disabled>Choose a service</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.name} — from ${s.priceFrom}</option>
                  ))}
                </select>
              </div>
              <div>
                <div className="eyebrow mb-3">2. Studio</div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {locations.map((loc) => (
                    <label key={loc.slug} className="rounded-xl ring-1 ring-black/[0.06] p-5 cursor-pointer hover:ring-brand-500 transition-all flex items-start gap-3">
                      <input type="radio" name="studio" value={loc.slug} className="mt-1 accent-brand-500" />
                      <div>
                        <div className="text-[15px] font-medium">{loc.city}</div>
                        <div className="text-[13px] text-ink-500">{loc.address.split(",")[0]}</div>
                      </div>
                    </label>
                  ))}
                  <label className="rounded-xl ring-1 ring-black/[0.06] p-5 cursor-pointer hover:ring-brand-500 transition-all flex items-start gap-3 sm:col-span-2">
                    <input type="radio" name="studio" value="mail-in" className="mt-1 accent-brand-500" defaultChecked />
                    <div>
                      <div className="text-[15px] font-medium">Mail-in</div>
                      <div className="text-[13px] text-ink-500">Prepaid label. Insured both ways. Anywhere in North America.</div>
                    </div>
                  </label>
                </div>
              </div>
              <div>
                <div className="eyebrow mb-3">3. Contact</div>
                <div className="space-y-3">
                  <input type="text" placeholder="Full name" className="w-full h-12 px-4 rounded-xl bg-ink-50 ring-1 ring-black/[0.06] text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-500" />
                  <input type="email" placeholder="Email" className="w-full h-12 px-4 rounded-xl bg-ink-50 ring-1 ring-black/[0.06] text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-500" />
                  <input type="tel" placeholder="Phone (optional)" className="w-full h-12 px-4 rounded-xl bg-ink-50 ring-1 ring-black/[0.06] text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-500" />
                </div>
              </div>
              <div>
                <div className="eyebrow mb-3">4. Notes</div>
                <textarea rows={4} placeholder="Anything we should know about your pair?" className="w-full px-4 py-3 rounded-xl bg-ink-50 ring-1 ring-black/[0.06] text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-500" />
              </div>
              <Button type="submit" size="lg" className="w-full">Confirm booking</Button>
            </form>
          </div>

          <aside className="lg:sticky lg:top-24 self-start rounded-3xl bg-ink-950 text-white p-8">
            <div className="eyebrow text-brand-300">Booking summary</div>
            <dl className="mt-6 space-y-5 text-[14px]">
              <Row label="Service" value="Choose a service" />
              <Row label="Studio" value="Mail-in" />
              <Row label="Estimated turnaround" value="3–10 days" />
              <Row label="Starting price" value="—" />
            </dl>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-[13px] text-white/55 leading-relaxed">
                Pricing confirmed after inspection. No charge until you approve the plan.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-white/55">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
