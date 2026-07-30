"use client";

import { WORKS } from "@/lib/works";

export default function Marquee() {
  const images = WORKS.filter((w) => w.type === "image");
  const items = [...images, ...images];

  return (
    <section
      className="group overflow-hidden border-y border-line py-[clamp(1.1rem,2.6vw,2rem)]"
      style={{ background: "color-mix(in oklch, var(--card) 55%, var(--paper))" }}
    >
      <div className="marquee-track flex w-max gap-[clamp(.9rem,1.8vw,1.6rem)] group-hover:[animation-play-state:paused]">
        {items.map((w, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`${w.id}-${i}`}
            src={w.src}
            alt={w.title}
            className="h-[clamp(118px,17vh,210px)] w-auto border border-line bg-card"
          />
        ))}
      </div>
    </section>
  );
}
