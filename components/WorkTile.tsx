"use client";

import Image from "next/image";
import type { Work } from "@/lib/works";
import { useReveal } from "@/hooks/useReveal";
import { useInViewVideo } from "@/hooks/useInViewVideo";

interface WorkTileProps {
  work: Work;
  onClick: () => void;
}

const IMAGE_SIZES = "(max-width: 640px) 92vw, (max-width: 1280px) 45vw, 360px";

export default function WorkTile({ work, onClick }: WorkTileProps) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const videoRef = useInViewVideo<HTMLVideoElement>();

  return (
    <div ref={ref} className={`reveal ${shown ? "shown" : ""}`}>
      <figure className="tile-figure" onClick={onClick}>
        <div className={`tile-media ${work.padded ? "tile-media--padded" : "tile-media--full"}`}>
          {work.type === "image" ? (
            <Image
              src={work.src}
              alt={work.title}
              width={work.width}
              height={work.height}
              sizes={IMAGE_SIZES}
              style={{ width: "100%", height: "auto" }}
            />
          ) : (
            <video
              ref={videoRef}
              src={work.src}
              poster={work.poster}
              width={work.width}
              height={work.height}
              muted
              loop
              playsInline
              preload="metadata"
            />
          )}
        </div>
        <figcaption className="flex flex-col gap-[.35rem] pt-[.9rem]">
          <div className="flex items-baseline justify-between gap-4 font-mono text-[.66rem] uppercase tracking-[.13em] text-muted">
            <span>{work.client.toUpperCase()}</span>
            <span>{work.tag}</span>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-[1.05rem] font-medium tracking-[-.01em] text-ink">{work.title}</span>
            <span className="text-[.95rem] text-muted">↗</span>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
