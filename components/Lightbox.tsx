"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { Work } from "@/lib/works";

interface LightboxProps {
  works: Work[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ works, index, onClose, onNavigate }: LightboxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const isOpen = index !== null && !!works[index];

  // Body scroll lock + focus management — runs once per open/close cycle.
  useEffect(() => {
    if (!isOpen) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = originalOverflow;
      previouslyFocused.current?.focus();
    };
  }, [isOpen]);

  // Keyboard nav + focus trap — re-attached whenever the active index changes.
  useEffect(() => {
    if (!isOpen || index === null) return;

    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        onNavigate(((index as number) + 1) % works.length);
      } else if (e.key === "ArrowLeft") {
        onNavigate(((index as number) - 1 + works.length) % works.length);
      } else if (e.key === "Tab") {
        const container = containerRef.current;
        if (!container) return;
        const focusables = container.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [isOpen, index, works.length, onClose, onNavigate]);

  if (!isOpen || typeof document === "undefined" || index === null) return null;

  const work = works[index];
  const stop = (e: React.SyntheticEvent) => e.stopPropagation();

  return createPortal(
    <div
      ref={containerRef}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${work.title} — enlarged view`}
      className="fixed inset-0 z-[100] flex items-center justify-center px-[clamp(3rem,10vw,7rem)] py-[clamp(3.5rem,8vh,6rem)]"
      style={{ background: "rgba(15,13,11,.92)", backdropFilter: "blur(8px)" }}
    >
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-[clamp(1rem,4vw,3rem)] py-[1.2rem] font-mono text-[.72rem] uppercase tracking-[.14em] text-white/70">
        <span>
          {index + 1} / {works.length}
        </span>
        <button
          ref={closeBtnRef}
          type="button"
          onClick={(e) => {
            stop(e);
            onClose();
          }}
          className="border-0 bg-transparent text-white/75 transition-colors duration-300 hover:text-white"
        >
          Close ✕
        </button>
      </div>

      <button
        type="button"
        aria-label="Previous work"
        onClick={(e) => {
          stop(e);
          onNavigate((index - 1 + works.length) % works.length);
        }}
        className="absolute left-[clamp(.4rem,2vw,2rem)] top-1/2 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/5 text-lg text-white transition-colors duration-300 hover:bg-white/[.16]"
      >
        ←
      </button>
      <button
        type="button"
        aria-label="Next work"
        onClick={(e) => {
          stop(e);
          onNavigate((index + 1) % works.length);
        }}
        className="absolute right-[clamp(.4rem,2vw,2rem)] top-1/2 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/5 text-lg text-white transition-colors duration-300 hover:bg-white/[.16]"
      >
        →
      </button>

      <figure onClick={stop} className="m-0 flex max-w-[min(1050px,90vw)] flex-col items-center gap-[1.1rem]">
        {work.type === "image" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={work.src}
            alt={work.title}
            className="border border-white/10"
            style={{
              maxWidth: "min(1050px,90vw)",
              maxHeight: "74vh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
          />
        ) : (
          <video
            src={work.src}
            controls
            autoPlay
            loop
            playsInline
            className="border border-white/10 bg-black"
            style={{ maxWidth: "min(1050px,90vw)", maxHeight: "74vh", width: "auto", height: "auto" }}
          />
        )}
        <figcaption className="flex w-full flex-wrap items-baseline justify-between gap-[1.2rem] font-mono text-[.74rem] uppercase tracking-[.12em]">
          <span className="text-white">{work.title}</span>
          <span className="text-white/55">
            {work.client.toUpperCase()} — {work.tag}
          </span>
        </figcaption>
      </figure>
    </div>,
    document.body
  );
}
