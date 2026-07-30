import type { Category } from "@/lib/works";

export type FilterValue = "All" | Category;

interface FiltersProps {
  options: readonly FilterValue[];
  counts: Record<string, number>;
  active: FilterValue;
  onSelect: (value: FilterValue) => void;
}

export default function Filters({ options, counts, active, onSelect }: FiltersProps) {
  return (
    <div className="my-[clamp(1.8rem,4vh,2.8rem)] flex flex-wrap gap-[clamp(1.3rem,3vw,2.8rem)]">
      {options.map((opt) => {
        const isActive = opt === active;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onSelect(opt)}
            className={`flex flex-col items-start gap-[.5rem] border-0 bg-transparent p-0 py-[.4rem] font-mono text-[.74rem] uppercase tracking-[.15em] transition-colors duration-300 ${
              isActive ? "text-ink" : "text-muted hover:text-ink"
            }`}
          >
            <span>
              {opt} <span className="opacity-50">{String(counts[opt] ?? 0).padStart(2, "0")}</span>
            </span>
            {isActive && <span className="block h-[2px] w-full bg-clay" />}
          </button>
        );
      })}
    </div>
  );
}
