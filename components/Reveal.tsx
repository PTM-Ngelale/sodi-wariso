"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delayMs?: number;
}

export default function Reveal({ children, className = "", threshold, delayMs }: RevealProps) {
  const { ref, shown } = useReveal<HTMLDivElement>(threshold);
  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "shown" : ""} ${className}`.trim()}
      style={delayMs ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
