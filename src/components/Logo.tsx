import Image from "next/image";
import Link from "next/link";

const LOGO_URL =
  "https://d3k81ch9hvuctc.cloudfront.net/company/SXn2FJ/images/e3b9d51f-ba9b-4af8-867e-b66f64804763.png";

export function Logo({ className = "" }: { className?: string; invert?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Sneakky Klean"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src={LOGO_URL}
        alt="Sneakky Klean"
        width={480}
        height={160}
        priority
        unoptimized
        className="h-14 w-auto sm:h-16 md:h-20 lg:h-24 max-w-[260px] sm:max-w-[320px] md:max-w-[380px] object-contain"
      />
    </Link>
  );
}
