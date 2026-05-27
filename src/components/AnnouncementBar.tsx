"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "sk_announce_dismissed_v1";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      setDismissed(localStorage.getItem(STORAGE_KEY) === "1");
    } catch {}
    setMounted(true);
  }, []);

  if (!mounted || dismissed) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  };

  return (
    <div
      className="relative text-ink-900"
      style={{
        background:
          "linear-gradient(90deg, #ffffff 0%, #d8f1fb 35%, #b3e3f4 50%, #d8f1fb 65%, #ffffff 100%)",
      }}
    >
      {/* Subtle top highlight for polish */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      {/* Bottom brand hairline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(110,197,227,0.6) 50%, transparent 100%)",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10">
        <div className="min-h-[40px] py-2 flex items-center justify-between gap-3">
          <Link
            href="/klean-club/join"
            className="group flex-1 flex items-center justify-center md:justify-start gap-2.5 text-center md:text-left"
          >
            <span
              aria-hidden
              className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-brand-600 shadow-[0_0_8px_rgba(110,197,227,0.7)] flex-none"
            />
            {/* Mobile short copy */}
            <span className="md:hidden text-[12.5px] font-semibold tracking-[-0.005em] text-brand-900">
              Join Klean Club from $24/mo
              <span aria-hidden className="ml-1.5 text-brand-700 group-hover:translate-x-0.5 inline-block transition-transform">
                →
              </span>
            </span>
            {/* Desktop full copy */}
            <span className="hidden md:inline-flex items-center gap-2 text-[13px] tracking-[-0.005em]">
              <span className="font-semibold text-brand-900">
                Join Sneakky Klean Club for $24/mo
              </span>
              <span className="text-ink-700">
                and get member pricing on every clean
              </span>
              <span
                aria-hidden
                className="ml-1 inline-flex items-center justify-center text-brand-700 group-hover:translate-x-0.5 transition-transform"
              >
                →
              </span>
            </span>
          </Link>

          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss announcement"
            className="flex-none inline-flex h-7 w-7 items-center justify-center text-ink-500 hover:text-ink-900 transition-colors"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
              <path
                d="M1 1l8 8M9 1l-8 8"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
