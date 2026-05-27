import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 lg:py-32 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2
        className={`${
          eyebrow ? "mt-4" : ""
        } text-[40px] md:text-[56px] lg:text-[64px] font-semibold tracking-[-0.035em] leading-[1.02] text-balance text-ink-900`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-[17px] md:text-[19px] text-ink-500 leading-relaxed max-w-2xl text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
