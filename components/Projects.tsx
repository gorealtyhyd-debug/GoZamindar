"use client";
import { useMemo, useState } from "react";
import { AREAS, PROJECTS } from "@/lib/projects";
import { useSite } from "./SiteProvider";
import ProjectCard from "./ProjectCard";

type TypeFilter = "All" | "Flat" | "Villa";
type Sort = "featured" | "low" | "high";

export default function Projects() {
  const { area, setArea } = useSite();
  const [type, setType] = useState<TypeFilter>("All");
  const [readyOnly, setReadyOnly] = useState(false);
  const [sort, setSort] = useState<Sort>("featured");

  const byType = useMemo(() => PROJECTS.filter((p) => (type === "All" || p.type === type) && (!readyOnly || p.ready)), [type, readyOnly]);
  const list = useMemo(() => {
    const l = byType.filter((p) => area === "All" || p.area === area);
    if (sort === "featured") return l;
    const d = sort === "low" ? 1 : -1;
    return [...l].sort((a, b) => Number(a.psf == null) - Number(b.psf == null) || d * ((a.psf ?? 0) - (b.psf ?? 0)));
  }, [byType, area, sort]);

  const tabs = ["All", ...AREAS] as const;

  return (
    <section id="projects" className="section-x section-y border-b border-olive/15 bg-sand">
      <div className="flex flex-wrap items-end justify-between gap-[22px]">
        <div>
          <div className="eyebrow">Available now</div>
          <h2 className="h2 mt-[18px]">{list.length} landowner share<br />projects, one list.</h2>
        </div>
        <p className="m-0 max-w-[34ch] text-sm leading-[1.7] text-olive-muted">
          Prices are indicative per-sft rates from owners. OTP = one-time payment · PLC = preferential location charges.
        </p>
      </div>

      <div className="mb-3.5 mt-[38px] flex flex-wrap gap-2.5">
        {tabs.map((a) => {
          const on = area === a;
          const count = a === "All" ? byType.length : byType.filter((p) => p.area === a).length;
          return (
            <button
              key={a}
              onClick={() => setArea(a)}
              className={`whitespace-nowrap rounded-full border px-5 py-[11px] text-xs uppercase tracking-[0.16em] transition-colors ${on ? "border-olive bg-olive text-paper" : "border-olive/30 text-olive hover:border-olive"}`}
            >
              {a === "All" ? "All localities" : a} <span className="ml-1 opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="mb-7 flex flex-wrap items-center gap-2.5 border-b border-olive/20 pb-7">
        {([["All", "Flats & villas"], ["Flat", "Flats"], ["Villa", "Villas"]] as [TypeFilter, string][]).map(([k, l]) => (
          <button key={k} onClick={() => setType(k)} className={`mr-3.5 whitespace-nowrap border-b px-0.5 py-2 text-xs uppercase tracking-[0.18em] ${type === k ? "border-olive text-olive" : "border-transparent text-olive-muted"}`}>
            {l}
          </button>
        ))}
        <button onClick={() => setReadyOnly(!readyOnly)} className={`whitespace-nowrap border-b px-0.5 py-2 text-xs uppercase tracking-[0.18em] ${readyOnly ? "border-olive text-olive" : "border-transparent text-olive-muted"}`}>
          Ready to move only
        </button>
        <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="ml-auto cursor-pointer rounded-full border border-olive/30 bg-paper px-4 py-2.5 text-xs uppercase tracking-[0.12em] text-olive">
          <option value="featured">Sort · Featured</option>
          <option value="low">Price / sft · Low to high</option>
          <option value="high">Price / sft · High to low</option>
        </select>
      </div>

      {list.length === 0 ? (
        <div className="flex flex-col items-center gap-3.5 border border-olive/25 bg-paper px-6 py-14 text-center">
          <span className="font-serif text-[32px]">Nothing listed here right now.</span>
          <span className="text-sm text-olive-muted">New landowner units come up every week — call and we’ll tell you first.</span>
          <button onClick={() => { setArea("All"); setType("All"); setReadyOnly(false); }} className="btn-outline">Clear filters</button>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,330px),1fr))] gap-[clamp(24px,2.6vw,36px)]">
          {list.map((p, i) => <ProjectCard key={p.id} p={p} num={i + 1} />)}
        </div>
      )}
    </section>
  );
}
