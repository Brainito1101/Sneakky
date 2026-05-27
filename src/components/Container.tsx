import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
};

export function Container({ children, className = "", size = "default" }: ContainerProps) {
  const max =
    size === "narrow" ? "max-w-4xl" : size === "wide" ? "max-w-[1440px]" : "max-w-7xl";
  return (
    <div className={`${max} mx-auto px-6 md:px-8 lg:px-10 ${className}`}>{children}</div>
  );
}
