"use client";

import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";
import { locations } from "@/data/locations";

/* ─────────────── Page ─────────────── */
export default function ContactPage() {
  return (
    <>
      <Hero />
      <ContactOptions />
      <ContactForm />
      <StudiosAndHours />
    </>
  );
}

/* ─────────────── 1. Hero ─────────────── */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-ink-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 70% at 90% 0%, rgba(110,197,227,0.18) 0%, transparent 60%), radial-gradient(40% 60% at 0% 100%, rgba(110,197,227,0.10) 0%, transparent 60%), linear-gradient(180deg, #f3fbff 0%, #ffffff 70%)",
        }}
      />

      <Container className="relative pt-12 sm:pt-20 md:pt-24 lg:pt-28 pb-10 sm:pb-14 md:pb-16">
        <div className="max-w-4xl text-center mx-auto">
          <div className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-white ring-1 ring-brand-200 shadow-[0_6px_18px_-8px_rgba(110,197,227,0.45)] text-[12.5px] font-medium text-ink-900">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_10px_rgba(110,197,227,0.85)]" />
            Contact us
          </div>

          <h1 className="mt-7 text-[40px] sm:text-[60px] md:text-[72px] lg:text-[80px] font-semibold tracking-[-0.04em] leading-[0.98] text-balance">
            We'd love to{" "}
            <span className="italic font-light text-brand-600">hear</span> from
            you.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-[16px] sm:text-[18px] text-ink-700 leading-[1.6] text-pretty">
            Questions about an order, partnerships, press, or just want to talk
            sneakers? Pick your channel and we'll get back to you within one
            business day.
          </p>
        </div>
      </Container>
    </section>
  );
}

/* ─────────────── 2. Contact Options ─────────────── */
function ContactOptions() {
  const options: {
    label: string;
    value: string;
    sub: string;
    href: string;
    icon: React.ReactNode;
    external?: boolean;
  }[] = [
    {
      label: "Call",
      value: "+1 (305) 555-0123",
      sub: "Mon to Fri, 10am to 8pm ET",
      href: "tel:+13055550123",
      icon: <PhoneIcon />,
    },
    {
      label: "Email",
      value: "hello@sneakky.com",
      sub: "Replies within 24 hours",
      href: "mailto:hello@sneakky.com",
      icon: <EmailIcon />,
    },
    {
      label: "Chat",
      value: "Start a chat",
      sub: "Live, fastest response time",
      href: "/help",
      icon: <ChatIcon />,
    },
    {
      label: "Locations",
      value: "Visit a studio",
      sub: "Miami, New York, Saskatoon",
      href: "/locations",
      icon: <PinIcon />,
    },
  ];

  return (
    <Section className="bg-white pt-0">
      <Container>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {options.map((o) => (
            <li key={o.label}>
              <a
                href={o.href}
                {...(o.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group block h-full rounded-3xl bg-white ring-1 ring-ink-200 hover:ring-brand-500 transition-all p-7 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 ring-1 ring-brand-200 text-brand-700">
                    {o.icon}
                  </span>
                  <span
                    aria-hidden
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink-50 text-ink-700 group-hover:bg-brand-500 group-hover:text-ink-950 transition-colors"
                  >
                    <ArrowIcon />
                  </span>
                </div>
                <div className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                  {o.label}
                </div>
                <div className="mt-2 text-[18px] md:text-[19px] font-semibold tracking-[-0.015em] text-ink-950 leading-[1.25] text-balance">
                  {o.value}
                </div>
                <div className="mt-1 text-[13px] text-ink-600 leading-[1.5]">
                  {o.sub}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ─────────────── 3. Contact Form ─────────────── */
function ContactForm() {
  const topics = [
    "General inquiry",
    "Order help",
    "Partnerships",
    "Press",
    "Careers",
    "Other",
  ];

  return (
    <Section id="form" className="bg-ink-50">
      <Container>
        <SectionHeading
          eyebrow="Send a message"
          title="Tell us what you need."
          description="Fill out the form and we'll route it to the right person. Most replies arrive within one business day."
          align="center"
        />

        <div className="mt-12 md:mt-16 grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start">
          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl bg-white ring-1 ring-ink-200 p-6 sm:p-8 md:p-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="first" label="First name" />
              <Field id="last" label="Last name" />
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="email" label="Email" type="email" />
              <Field id="phone" label="Phone (optional)" type="tel" />
            </div>

            <div className="mt-4">
              <Label htmlFor="topic">Topic</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {topics.map((t, i) => (
                  <label
                    key={t}
                    className="inline-flex items-center gap-2 h-9 px-3.5 rounded-full bg-ink-50 ring-1 ring-ink-200 text-[13px] text-ink-800 cursor-pointer hover:bg-white has-[:checked]:bg-ink-950 has-[:checked]:text-white has-[:checked]:ring-ink-950 transition-colors"
                  >
                    <input
                      type="radio"
                      name="topic"
                      value={t.toLowerCase().replace(/\s+/g, "-")}
                      defaultChecked={i === 0}
                      className="sr-only"
                    />
                    {t}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Share the details, we'll take care of the rest."
                className="mt-2 w-full px-4 py-3 rounded-xl bg-ink-50 ring-1 ring-ink-200 text-[14.5px] text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
              />
            </div>

            <div className="mt-4 flex items-start gap-2 text-[12.5px] text-ink-600">
              <input
                id="consent"
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded accent-brand-500"
              />
              <label htmlFor="consent" className="leading-[1.5]">
                I agree to be contacted by Sneakky Klean and have read the{" "}
                <a
                  href="/legal/privacy-policy"
                  className="underline underline-offset-2 hover:text-ink-900"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <Button type="submit" size="lg" className="mt-6 w-full">
              Send message
              <span aria-hidden>→</span>
            </Button>
            <p className="mt-3 text-[12px] text-ink-500 text-center">
              We respond within one business day.
            </p>
          </form>

          {/* Sidebar info */}
          <aside className="rounded-3xl bg-ink-950 text-white p-6 sm:p-8 md:p-10 lg:sticky lg:top-32">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-300">
              Quick answers
            </div>
            <h3 className="mt-3 text-[22px] sm:text-[26px] font-semibold tracking-[-0.02em] leading-[1.2] text-balance">
              Looking for something specific?
            </h3>

            <ul className="mt-7 space-y-5">
              <SidebarLink
                label="Browse help articles"
                copy="FAQs, order tracking, and care guides."
                href="/help"
              />
              <SidebarLink
                label="Press inquiries"
                copy="press@sneakky.com"
                href="mailto:press@sneakky.com"
              />
              <SidebarLink
                label="Partnerships"
                copy="partnerships@sneakky.com"
                href="mailto:partnerships@sneakky.com"
              />
              <SidebarLink
                label="Open a franchise"
                copy="Apply or talk to the franchise team."
                href="/franchise"
              />
            </ul>
          </aside>
        </div>
      </Container>
    </Section>
  );
}

function SidebarLink({
  label,
  copy,
  href,
}: {
  label: string;
  copy: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        className="group block py-1 transition-colors"
      >
        <div className="text-[14px] font-medium text-white group-hover:text-brand-300 transition-colors flex items-center gap-2">
          {label}
          <span
            aria-hidden
            className="text-brand-300 group-hover:translate-x-0.5 transition-transform"
          >
            →
          </span>
        </div>
        <div className="mt-0.5 text-[13px] text-white/65">{copy}</div>
      </a>
    </li>
  );
}

function Field({
  id,
  label,
  type = "text",
}: {
  id: string;
  label: string;
  type?: string;
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        name={id}
        type={type}
        required
        className="mt-2 w-full h-12 px-4 rounded-xl bg-ink-50 ring-1 ring-ink-200 text-[14.5px] text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
      />
    </div>
  );
}

function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="text-[12px] font-medium text-ink-700">
      {children}
    </label>
  );
}

/* ─────────────── 4. Studios & Hours ─────────────── */
function StudiosAndHours() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="Studios and hours"
          title="Visit a studio in person."
          description="Three studios across North America. Walk-in drop-off, consultations, and same-day cleans where available."
          align="center"
        />

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {locations.map((loc) => (
            <article
              key={loc.slug}
              className="rounded-3xl bg-white ring-1 ring-ink-200 overflow-hidden flex flex-col"
            >
              {/* Visual */}
              <div
                className="relative h-32 sm:h-36 bg-gradient-to-br from-brand-200 via-brand-400 to-brand-700"
                aria-hidden
              >
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3 text-white">
                  <div>
                    <div className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/80">
                      {loc.country}
                    </div>
                    <div className="mt-0.5 text-[24px] font-semibold tracking-[-0.02em] leading-none">
                      {loc.city}
                    </div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 md:p-7 flex-1 flex flex-col">
                {/* Address */}
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                    Address
                  </div>
                  <div className="mt-2 text-[14.5px] text-ink-900 leading-[1.5]">
                    {loc.address}
                  </div>
                </div>

                {/* Hours */}
                <div className="mt-5 pt-5 border-t border-ink-200">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                    Hours
                  </div>
                  <ul className="mt-2 space-y-1">
                    {loc.hours.map((h) => (
                      <li
                        key={h.days}
                        className="flex justify-between text-[13.5px] text-ink-800"
                      >
                        <span className="text-ink-600">{h.days}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="mt-5 pt-5 border-t border-ink-200 grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${loc.phone}`}
                    className="text-[13px] text-ink-800 hover:text-brand-700 transition-colors"
                  >
                    <span className="block text-[10.5px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                      Call
                    </span>
                    <span className="mt-1 block">{loc.phone}</span>
                  </a>
                  <a
                    href={`mailto:${loc.email}`}
                    className="text-[13px] text-ink-800 hover:text-brand-700 transition-colors break-all"
                  >
                    <span className="block text-[10.5px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                      Email
                    </span>
                    <span className="mt-1 block">{loc.email}</span>
                  </a>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-5 border-t border-ink-200 flex items-center justify-between gap-3 mt-auto">
                  <Button href={`/locations/${loc.slug}`} variant="ghost" size="sm">
                    Studio page
                  </Button>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-700 hover:text-brand-900 transition-colors"
                  >
                    Get directions
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─────────────── Icons ─────────────── */
function PhoneIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2C9.7 18.8 5.2 14.3 3 6a2 2 0 012-2z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5l8.5 6 8.5-6" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12a8 8 0 11-3.6-6.7L21 5l-1 3.5A8 8 0 0121 12z" />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 22s-7-7-7-12a7 7 0 1114 0c0 5-7 12-7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
