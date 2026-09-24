import { AREAS } from "@/lib/projects";

export default function Marquee() {
  const items = [...AREAS, ...AREAS];
  return (
    <div className="overflow-hidden whitespace-nowrap bg-olive py-[15px] text-paper">
      <div className="inline-flex animate-marquee gap-[46px] text-[11px] uppercase tracking-[0.3em]">
        {items.map((a, i) => (
          <span key={i} className="flex gap-[46px]"><span>{a}</span><span>·</span></span>
        ))}
      </div>
    </div>
  );
}
