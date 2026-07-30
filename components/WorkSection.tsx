"use client";

import { useMemo, useState } from "react";
import { WORKS, CATEGORIES } from "@/lib/works";
import { useReveal } from "@/hooks/useReveal";
import Filters, { type FilterValue } from "./Filters";
import WorkGrid from "./WorkGrid";
import Lightbox from "./Lightbox";

export default function WorkSection() {
  const [filter, setFilter] = useState<FilterValue>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { ref: headerRef, shown: headerShown } = useReveal<HTMLDivElement>();

  const filteredWorks = useMemo(
    () => WORKS.filter((w) => filter === "All" || w.category === filter),
    [filter]
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: WORKS.length };
    WORKS.forEach((w) => {
      c[w.category] = (c[w.category] || 0) + 1;
    });
    return c;
  }, []);

  function handleSelectFilter(next: FilterValue) {
    setFilter(next);
    setLightboxIndex(null);
  }

  return (
    <section id="work" className="py-[clamp(3.6rem,9vh,7rem)]">
      <div className="mx-auto max-w-[1600px] px-[clamp(1.25rem,5vw,5rem)]">
        <div
          ref={headerRef}
          className={`reveal ${headerShown ? "shown" : ""} flex flex-wrap items-end justify-between gap-x-10 gap-y-6 border-b border-line pb-[1.4rem]`}
        >
          <div>
            <div className="mb-[.7rem] font-mono text-[.72rem] uppercase tracking-[.2em] text-muted">
              ( 01 ) — Selected Work
            </div>
            <h2 className="m-0 text-[clamp(1.9rem,4.6vw,3.4rem)] font-medium tracking-[-.025em]">
              Recent projects
            </h2>
          </div>
          <p className="m-0 max-w-[32ch] text-base leading-[1.5] text-muted">
            A selection of work across visual identity, print, and short-form motion.
          </p>
        </div>

        <Filters options={CATEGORIES} counts={counts} active={filter} onSelect={handleSelectFilter} />

        <WorkGrid works={filteredWorks} onOpen={setLightboxIndex} />
      </div>

      <Lightbox
        works={filteredWorks}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
