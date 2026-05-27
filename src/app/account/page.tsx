import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Account",
  description: "Sign in to your Sneakky Klean account.",
};

export default function AccountPage() {
  return (
    <section className="bg-white min-h-[80vh]">
      <Container className="py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <div className="eyebrow">Account</div>
            <h1 className="mt-4 text-[44px] md:text-[64px] font-semibold tracking-[-0.035em] leading-[1.02] text-balance">
              Sign in.
            </h1>
            <p className="mt-4 text-[17px] text-ink-500 leading-relaxed max-w-md">
              Track services, manage Klean Club, view your history, and access exclusive member content.
            </p>
            <ul className="mt-8 space-y-3 text-[14px] text-ink-700">
              <li className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 flex-none" /> Service history with full condition reports</li>
              <li className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 flex-none" /> Klean Club status and care credit balance</li>
              <li className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 flex-none" /> Saved addresses and pickup preferences</li>
            </ul>
          </div>

          <form className="rounded-3xl bg-ink-50 p-8 md:p-10 space-y-5">
            <div>
              <label htmlFor="email" className="block text-[13px] font-medium text-ink-700 mb-2">Email</label>
              <input id="email" type="email" placeholder="you@email.com" className="w-full h-12 px-4 rounded-xl bg-white ring-1 ring-black/[0.06] text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-500" />
            </div>
            <div>
              <label htmlFor="password" className="block text-[13px] font-medium text-ink-700 mb-2">Password</label>
              <input id="password" type="password" placeholder="••••••••" className="w-full h-12 px-4 rounded-xl bg-white ring-1 ring-black/[0.06] text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-500" />
            </div>
            <Button type="submit" size="lg" className="w-full">Sign in</Button>
            <div className="flex items-center gap-3 my-2">
              <span className="flex-1 h-px bg-black/[0.06]" />
              <span className="text-[12px] text-ink-400 uppercase tracking-[0.14em]">or</span>
              <span className="flex-1 h-px bg-black/[0.06]" />
            </div>
            <Button variant="white" size="lg" className="w-full">Continue with Apple</Button>
            <Button variant="white" size="lg" className="w-full">Continue with Google</Button>
            <p className="text-center text-[13px] text-ink-500 pt-2">
              New to Sneakky Klean?{" "}
              <Link href="/klean-club/join" className="text-brand-600 hover:underline">Create an account</Link>
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
