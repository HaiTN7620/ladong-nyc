import { ReactNode } from "react";

export function Text({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-lg md:text-2xl text-neutral-700 leading-relaxed ${className}`}>{children}</p>
  );
}
