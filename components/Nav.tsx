import { siteConfig } from "@/lib/site-config";

export default function Nav() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-line backdrop-blur-[14px]"
      style={{ background: "color-mix(in oklch, var(--paper) 78%, transparent)" }}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-[clamp(1.25rem,5vw,5rem)] py-[.95rem]">
        <a href="#top" className="text-base font-semibold tracking-[-0.015em]">
          {siteConfig.name}
        </a>
        <nav className="flex items-center gap-[clamp(1.1rem,2.6vw,2.4rem)] font-mono text-[.7rem] tracking-[.16em] uppercase text-ink">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
