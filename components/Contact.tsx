import { siteConfig } from "@/lib/site-config";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line pt-[clamp(3.6rem,10vh,8rem)]">
      <div className="mx-auto max-w-[1600px] px-[clamp(1.25rem,5vw,5rem)]">
        <Reveal className="mb-[clamp(1.4rem,3vh,2.2rem)] font-mono text-[.72rem] uppercase tracking-[.2em] text-muted">
          ( 03 ) — Contact
        </Reveal>

        <Reveal delayMs={50}>
          <h2 className="m-0 max-w-[16ch] text-[clamp(2.4rem,8vw,6.5rem)] font-medium leading-[.96] tracking-[-.035em]">
            Let&rsquo;s make something worth looking at.
          </h2>
        </Reveal>

        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-[clamp(1.8rem,4vh,2.8rem)] inline-flex items-center gap-[.6rem] border-b border-line pb-[.3rem] text-[clamp(1.4rem,3.2vw,2.5rem)] font-normal tracking-[-.02em]"
        >
          {siteConfig.email} <span className="text-[.7em]">↗</span>
        </a>

        <div className="mt-[clamp(2rem,4.5vh,3rem)] flex flex-wrap gap-[clamp(1.4rem,3vw,2.6rem)] font-mono text-[.74rem] uppercase tracking-[.15em]">
          {siteConfig.socials.map((s) => (
            <a key={s.label} href={s.href}>
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
