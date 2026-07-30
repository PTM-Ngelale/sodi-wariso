import type { Work } from "@/lib/works";
import WorkTile from "./WorkTile";

interface WorkGridProps {
  works: Work[];
  onOpen: (index: number) => void;
}

export default function WorkGrid({ works, onOpen }: WorkGridProps) {
  return (
    <div style={{ columns: "var(--colw, 360px)", columnGap: "clamp(1rem,2.2vw,1.9rem)" }}>
      {works.map((work, i) => (
        <div key={work.id} className="mb-[clamp(1.1rem,2.4vw,2rem)]" style={{ breakInside: "avoid" }}>
          <WorkTile work={work} onClick={() => onOpen(i)} />
        </div>
      ))}
    </div>
  );
}
