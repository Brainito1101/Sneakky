import Image from "next/image";
import Link from "next/link";

const LOGO_URL =
  "https://d3k81ch9hvuctc.cloudfront.net/company/SXn2FJ/images/e3b9d51f-ba9b-4af8-867e-b66f64804763.png";

type LogoProps = {
  className?: string;
  /**
   * - default: render the logo in its natural colors
   * - light: pure white silhouette (for dark backgrounds)
   * - blue: solid brand-blue (#6EC5E3) silhouette
   */
  variant?: "default" | "light" | "blue";
  /** Visual size preset */
  size?: "default" | "footer";
};

/**
 * CSS filter chain that drops any source image to pure black, then
 * tints up to approximately #6EC5E3 (brand-500). The two leading
 * filters flatten the original, the rest map black → brand.
 */
const BLUE_FILTER =
  "brightness(0) saturate(100%) invert(74%) sepia(50%) saturate(540%) hue-rotate(155deg) brightness(96%) contrast(86%)";

export function Logo({
  className = "",
  variant = "default",
  size = "default",
}: LogoProps) {
  // The source logo is a 2500×2500 square — size strictly by height, width auto.
  const heightCls =
    size === "footer"
      ? "h-16 sm:h-20 md:h-24 lg:h-28"
      : "h-14 sm:h-16 md:h-20 lg:h-24";

  const variantCls = variant === "light" ? "brightness-0 invert" : "";
  const variantStyle =
    variant === "blue" ? { filter: BLUE_FILTER } : undefined;

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
        height={480}
        priority
        unoptimized
        className={`object-contain w-auto ${heightCls} ${variantCls}`}
        style={variantStyle}
      />
    </Link>
  );
}
