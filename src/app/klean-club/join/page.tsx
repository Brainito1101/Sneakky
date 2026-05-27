import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Join Klean Club",
  description: "Join Klean Club — priority service, member pricing, monthly care credit.",
};

export default function JoinPage() {
  return (
    <section className="bg-white min-h-[80vh]">
      <Container className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-[13px] text-ink-500">
            <Link href="/klean-club" className="hover:text-brand-600">Klean Club</Link>
            <span className="mx-2">/</span>
            <span>Join</span>
          </div>
          <h1 className="mt-6 text-[44px] md:text-[64px] font-semibold tracking-[-0.035em] leading-[1.02] text-balance">
            Join Klean Club.
          </h1>
          <p className="mt-4 text-[17px] md:text-[19px] text-ink-500 leading-relaxed">
            A few details — and you're in. Your first month of credit lands within 24 hours.
          </p>

          <form className="mt-12 space-y-6">
            <FormRow label="Full name" htmlFor="name">
              <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
            </FormRow>
            <FormRow label="Email" htmlFor="email">
              <input id="email" name="email" type="email" required placeholder="you@email.com" className={inputClass} />
            </FormRow>
            <FormRow label="Phone" htmlFor="phone">
              <input id="phone" name="phone" type="tel" placeholder="(optional)" className={inputClass} />
            </FormRow>
            <FormRow label="Preferred studio" htmlFor="studio">
              <select id="studio" name="studio" className={inputClass} defaultValue="">
                <option value="" disabled>Choose a studio</option>
                <option value="miami">Miami</option>
                <option value="new-york">New York</option>
                <option value="saskatoon">Saskatoon</option>
                <option value="mail-in">Mail-in only</option>
              </select>
            </FormRow>
            <FormRow label="Membership tier" htmlFor="tier">
              <select id="tier" name="tier" className={inputClass} defaultValue="signature">
                <option value="essentials">Essentials — $24/mo</option>
                <option value="signature">Signature — $49/mo</option>
                <option value="archive">Archive — $129/mo</option>
              </select>
            </FormRow>

            <div className="pt-4">
              <Button type="submit" size="lg" className="w-full">
                Join Klean Club
              </Button>
              <p className="mt-4 text-[12px] text-ink-500 text-center">
                By joining you agree to our{" "}
                <Link href="/legal/terms-and-conditions" className="underline hover:text-brand-600">Terms</Link>{" "}
                and{" "}
                <Link href="/legal/privacy-policy" className="underline hover:text-brand-600">Privacy Policy</Link>.
              </p>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

const inputClass =
  "w-full h-12 px-4 rounded-xl bg-ink-50 ring-1 ring-black/[0.06] text-[15px] text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow";

function FormRow({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-[13px] font-medium text-ink-700 mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
