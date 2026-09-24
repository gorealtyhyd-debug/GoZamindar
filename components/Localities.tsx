"use client";
import Image from "next/image";
import { useRef } from "react";
import { AREAS, LOC_IMG, PROJECTS, inr } from "@/lib/projects";
import { useSite } from "./SiteProvider";

const data = AREAS.map((a, i) => {
  const ps = PROJECTS.filter((p) => p.area === a);
  const psf = ps.map((p) => p.psf).filter((x): x is number => x != null);
  const types = Array.from(new Set(ps.map((p) => p.type)));
  return {
    name: a,
    idx: `${String(i + 1).padStart(2, "0")} / ${String(AREAS.length).padStart(2, "0")}`,
    img: PROJECTS[LOC_IMG[a]].imgLg,
    count: ps.length,
    from: psf.length ? inr(Math.min(...psf)) : "On request",
    types: types.length > 1 ? "Flats & villas" : types[0] === "Villa" ? "Villas" : "Flats",
  };
});

export default function Localities() {
  const { setArea } = useSite();
  const strip = useRef<HTMLDivElement>(null);
  const scroll = (d: number) => strip.current?.scrollBy({ left: d * strip.current.clientWidth * 0.8, behavior: "smooth" });
  const go = (a: (typeof AREAS)[number]) => {
    setArea(a);
    const el = document.getElementById("projects");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
  };

  return (
    <section id="localities" className="flex flex-col gap-10 border-y border-olive/15 bg-sand py-[clamp(56px,8vw,110px)]">
      <div className="section-x flex flex-wrap items-end justify-between gap-[22px]">
        <div>
          <div className="eyebrow">Explore by neighbourhood</div>
          <h2 className="h2 mt-[18px]">Eight addresses on<br />the <em>west side</em> of the city.</h2>
        </div>
        <div className="flex flex-wrap items-center gap-[18px]">
          <p className="m-0 max-w-[30ch] text-sm leading-[1.7] text-olive-muted">Tap a neighbourhood to see its landowner share projects.</p>
          <div className="flex gap-2.5">
            <button aria-label="Scroll left" onClick={() => scroll(-1)} className="h-[52px] w-[52px] rounded-full border border-olive/50 text-lg hover:bg-olive hover:text-paper">←</button>
            <button aria-label="Scroll right" onClick={() => scroll(1)} className="h-[52px] w-[52px] rounded-full border border-olive/50 text-lg hover:bg-olive hover:text-paper">→</button>
          </div>
        </div>
      </div>

      <div ref={strip} className="no-scrollbar section-x flex snap-x snap-mandatory gap-[18px] overflow-x-auto pb-2 scroll-px-[clamp(20px,5vw,72px)]">
        {data.map((l) => (
          <button
            key={l.name}
            onClick={() => go(l.name)}
            className="group relative aspect-[3/4] flex-[0_0_clamp(240px,24vw,320px)] snap-start overflow-hidden bg-stone text-left text-paper"
          >
            <Image src={l.img} alt={l.name} fill sizes="320px" className="object-cover transition-transform duration-700 group-hover:scale-[1.07]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/15" />
            <div className="pointer-events-none absolute inset-3 border border-paper/35" />
            <span className="absolute left-[26px] top-[26px] text-[10px] uppercase tracking-[0.28em] text-paper/85">{l.idx}</span>
            <div className="absolute inset-x-[26px] bottom-[26px] flex flex-col gap-3.5">
              <span className="font-serif text-[clamp(32px,3vw,42px)] font-light leading-none">{l.name}</span>
              <div className="grid grid-cols-2 gap-3 border-t border-paper/35 pt-3.5">
                <div className="flex flex-col gap-[3px]">
                  <span className="text-[9px] uppercase tracking-[0.24em] text-paper/70">Projects</span>
                  <span className="text-[22px] font-light">{l.count}</span>
                </div>
                <div className="flex flex-col gap-[3px]">
                  <span className="text-[9px] uppercase tracking-[0.24em] text-paper/70">From / sft</span>
                  <span className="whitespace-nowrap text-[22px] font-light">{l.from}</span>
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-[0.24em]">{l.types} · Explore →</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
