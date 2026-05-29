import Link from "next/link";

/**
 * The signature booking pill used in every hero across the site.
 *
 * - variant="dark"  (default) — dark pill, white type, sits on light backgrounds
 * - variant="light"          — white pill, dark type, sits on dark backgrounds
 *
 * Field labels are intentionally fixed to keep the CTA consistent
 * everywhere: Service / Sneaker Cleaning · Pickup / Schedule today
 * with a brand-blue circular arrow button on the right.
 */
type BookCtaProps = {
  variant?: "dark" | "light";
  href?: string;
};

export function BookCta({ variant = "dark", href = "/book" }: BookCtaProps) {
  const isLight = variant === "light";

  const pillCls = isLight
    ? "bg-white ring-1 ring-black/[0.06] shadow-[0_18px_44px_-18px_rgba(0,0,0,0.35)] hover:shadow-[0_24px_56px_-18px_rgba(0,0,0,0.45)] hover:bg-[#fafafa]"
    : "bg-ink-950 ring-1 ring-white/[0.06] shadow-[0_18px_44px_-18px_rgba(14,58,77,0.55)] hover:shadow-[0_24px_56px_-18px_rgba(14,58,77,0.7)] hover:bg-[#0c1418]";

  const labelCls = isLight ? "text-ink-950" : "text-white";
  const valueCls = isLight ? "text-ink-500" : "text-white/55";
  const dividerCls = isLight ? "bg-ink-200" : "bg-white/15";

  return (
    <Link
      href={href}
      aria-label="Book a sneaker cleaning"
      className={`group inline-flex items-stretch h-[64px] sm:h-[72px] rounded-full pl-1 pr-1.5 transition-all ${pillCls}`}
    >
      <div className="flex flex-col justify-center pl-4 sm:pl-7 pr-3 sm:pr-7">
        <span
          className={`text-[13px] sm:text-[16px] font-semibold tracking-[-0.005em] leading-tight ${labelCls}`}
        >
          Service
        </span>
        <span
          className={`text-[11.5px] sm:text-[13.5px] leading-tight mt-0.5 ${valueCls}`}
        >
          Sneaker Cleaning
        </span>
      </div>

      <div className={`self-center h-7 sm:h-9 w-px ${dividerCls}`} />

      <div className="flex flex-col justify-center pl-3 sm:pl-7 pr-3 sm:pr-5">
        <span
          className={`text-[13px] sm:text-[16px] font-semibold tracking-[-0.005em] leading-tight ${labelCls}`}
        >
          Pickup
        </span>
        <span
          className={`text-[11.5px] sm:text-[13.5px] leading-tight mt-0.5 ${valueCls}`}
        >
          Schedule today
        </span>
      </div>

      <div className="self-center h-[48px] w-[48px] sm:h-[56px] sm:w-[56px] flex-none rounded-full bg-brand-500 text-ink-950 inline-flex items-center justify-center shadow-[0_8px_24px_-6px_rgba(110,197,227,0.7)] group-hover:bg-brand-400 group-hover:scale-[1.04] transition-all">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          className="group-hover:translate-x-0.5 transition-transform"
        >
          <path
            d="M5 12h14M13 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}
