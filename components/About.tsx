import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-line py-[clamp(3.6rem,9vh,7rem)]">
      <div className="mx-auto max-w-[1600px] px-[clamp(1.25rem,5vw,5rem)]">
        <div className="mb-[clamp(1.6rem,3.4vh,2.6rem)] font-mono text-[.72rem] uppercase tracking-[.2em] text-muted">
          ( 02 ) — About
        </div>

        <div className="flex flex-wrap items-start gap-[clamp(2rem,5vw,5rem)]">
          <Reveal className="max-w-[400px] flex-[1_1_260px]">
            <div
              className="relative flex aspect-[4/5] items-center justify-center overflow-hidden border border-line"
              style={{ background: "linear-gradient(150deg, var(--card), var(--paper))" }}
            >
              {siteConfig.portrait ? (
                <Image
                  src={siteConfig.portrait}
                  alt="Portrait of Sodienye Wariso"
                  fill
                  className="object-cover"
                />
              ) : (
                <>
                  <div
                    className="absolute inset-0 opacity-60"
                    style={{
                      background:
                        "repeating-linear-gradient(45deg, transparent 0 15px, color-mix(in oklch, var(--line) 55%, transparent) 15px 16px)",
                    }}
                  />
                  <span className="relative text-center font-mono text-[.7rem] uppercase leading-[1.7] tracking-[.18em] text-muted">
                    Portrait
                    <br />
                    <span className="opacity-60">drop a photo here</span>
                  </span>
                </>
              )}
            </div>
          </Reveal>

          <Reveal className="flex-[2_1_440px]" delayMs={80}>
            <p className="m-0 mb-[1.4rem] max-w-[24ch] text-[clamp(1.35rem,2.5vw,2.05rem)] font-normal leading-[1.32] tracking-[-.015em] text-ink">
              Identity, print, and motion — handled end to end.
            </p>
            <p className="m-0 mb-4 max-w-[56ch] leading-[1.65] text-muted">
              Sodienye Wariso is a graphic and brand designer working across
              visual identity, print, and motion. He helps small businesses
              and independent labels show up with clarity and confidence —
              from logos and flyers to menus, cover art, and short-form
              motion.
            </p>
            <p className="m-0 max-w-[56ch] leading-[1.65] text-muted">
              The work here is a selection of recent projects. For full case
              studies or a collaboration, get in touch.
            </p>

            <div className="mt-[clamp(2rem,4.5vh,3rem)] border-t border-line">
              {siteConfig.capabilities.map((label, i) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between border-b border-line py-[.85rem]"
                >
                  <span className="text-[1.05rem]">{label}</span>
                  <span className="font-mono text-[.68rem] tracking-[.14em] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-[clamp(1.8rem,4vh,2.6rem)] font-mono text-[.72rem] uppercase leading-[1.9] tracking-[.14em] text-muted">
              <span className="text-ink">Selected clients — </span>
              {siteConfig.clients.join(" · ")}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
