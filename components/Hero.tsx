import { WORKS } from "@/lib/works";

export default function Hero() {
  const count = WORKS.length;

  return (
    <section id="top" className="flex min-h-[92vh] flex-col">
      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-between gap-[clamp(2.4rem,7vh,5rem)] px-[clamp(1.25rem,5vw,5rem)] pb-[clamp(1.6rem,4vh,3rem)] pt-[clamp(2.2rem,6vh,4.5rem)]">
        <div
          className="flex flex-wrap items-center justify-between gap-4 font-mono text-[.72rem] uppercase tracking-[.2em] text-muted"
          style={{ animation: "revUp .8s ease both" }}
        >
          <span>Graphic &amp; Brand Designer</span>
          <span>Portfolio — 2025</span>
        </div>

        <div>
          <h1
            className="m-0 text-[clamp(3.3rem,13vw,13rem)] font-medium leading-[0.88] tracking-[-0.038em]"
            style={{ animation: "revUp 1s cubic-bezier(.2,.72,.2,1) both" }}
          >
            Sodienye
            <br />
            Wariso
          </h1>
          <p
            className="mt-[clamp(1.5rem,3.4vh,2.6rem)] max-w-[33ch] text-[clamp(1.08rem,1.7vw,1.45rem)] leading-[1.5] text-muted"
            style={{ animation: "revUp 1s ease .12s both", animationFillMode: "both", opacity: 0 }}
          >
            Independent designer crafting bold identities, print, and motion for
            brands that deserve to be remembered.
          </p>
        </div>

        <div
          className="flex flex-wrap items-end justify-between gap-4 font-mono text-[.72rem] uppercase tracking-[.16em] text-muted"
          style={{ animation: "revUp .9s ease .2s both", animationFillMode: "both", opacity: 0 }}
        >
          <span className="inline-flex items-center gap-[.6rem]">
            <span
              className="h-[7px] w-[7px] rounded-full bg-clay"
              style={{ boxShadow: "0 0 0 3px color-mix(in oklch, var(--clay) 20%, transparent)" }}
            />
            Available for work
          </span>
          <a href="#work" className="inline-flex items-center gap-[.6rem]">
            {count} Selected Works{" "}
            <span className="inline-block" style={{ animation: "cue 1.8s ease-in-out infinite" }}>
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
