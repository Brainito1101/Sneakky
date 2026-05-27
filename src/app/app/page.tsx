import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Sneakky Klean App",
  description: "The Sneakky Klean app — book services, track your pairs, manage Klean Club.",
};

export default function AppPage() {
  return (
    <>
      <section className="relative bg-ink-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(50% 50% at 30% 0%, rgba(110,197,227,0.3) 0%, transparent 60%), radial-gradient(40% 40% at 90% 100%, rgba(110,197,227,0.2) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <Container className="relative pt-20 md:pt-32 pb-20 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="eyebrow text-brand-300">App</div>
              <h1 className="mt-4 text-[56px] md:text-[80px] lg:text-[96px] font-bold tracking-[-0.04em] leading-[0.98]">
                Care, in your pocket.
              </h1>
              <p className="mt-8 max-w-xl text-[18px] md:text-[20px] text-white/70 leading-relaxed">
                Book services. Track your pairs. Manage Klean Club. Available on iOS and Android.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Button variant="white" size="lg">Download for iPhone</Button>
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
                  Download for Android
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[280px] h-[560px] rounded-[48px] bg-ink-900 ring-8 ring-white/10 shadow-soft overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-500/30 to-transparent" />
                <div className="absolute top-6 left-6 right-6">
                  <div className="text-white/60 text-[11px] uppercase tracking-[0.14em]">Klean Club</div>
                  <div className="mt-2 text-white text-[28px] font-semibold tracking-[-0.02em]">Hello, Marcus.</div>
                  <div className="mt-1 text-white/60 text-[13px]">2 pairs in-studio</div>
                </div>
                <div className="absolute top-44 left-6 right-6 space-y-3">
                  {["Air Jordan 4 'Bred'", "Stan Smith — White"].map((p) => (
                    <div key={p} className="rounded-2xl bg-white/[0.06] backdrop-blur ring-1 ring-white/10 p-4">
                      <div className="text-white text-[13px] font-medium">{p}</div>
                      <div className="text-white/55 text-[11px] mt-1">In treatment · Day 3 of 5</div>
                      <div className="mt-3 h-1 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-brand-400 w-3/5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="In the app"
            title="Everything you need, between studio visits."
          />
          <ul className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.06] rounded-3xl overflow-hidden">
            {[
              ["Live service tracking", "From drop-off to return. Every step, every photo."],
              ["One-tap booking", "Repeat services in two taps. Studio or mail-in."],
              ["Klean Club", "Status, credit, and tier upgrades in one place."],
              ["Care reminders", "Smart nudges based on what's in your rotation."],
              ["Member-only content", "Care guides, drop news, and studio tutorials."],
              ["Studio chat", "Talk directly to your studio team."],
            ].map(([title, copy]) => (
              <li key={title} className="bg-white p-8 md:p-10 min-h-[200px] flex flex-col justify-between">
                <div className="text-[13px] font-semibold tracking-[0.14em] text-brand-600">{title}</div>
                <div className="text-[15px] text-ink-700 leading-relaxed">{copy}</div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
