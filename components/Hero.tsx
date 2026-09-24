import Image from "next/image";
import { AREAS, HERO_IMG, PROJECTS, READY } from "@/lib/projects";
import EnquireButton from "./EnquireButton";

const stats = [
  { v: PROJECTS.length, l: "Live projects" },
  { v: AREAS.length, l: "Localities" },
  { v: READY.length, l: "Ready to move" },
  { v: PROJECTS.filter((p) => p.type === "Villa").length, l: "Villa communities" },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[min(92vh,880px)] items-end overflow-hidden">
      <Image src={HERO_IMG} alt="Aerial view of a landowner share project in West Hyderabad" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/25" />
      <div className="section-x relative flex max-w-[1100px] animate-rise flex-col gap-6 py-[clamp(36px,6vw,84px)] text-paper">
        <div className="flex items-center gap-3.5">
          <span className="block h-px w-[46px] bg-paper" />
          <span className="text-[11px] uppercase tracking-eyebrow">West Hyderabad · Inventory updated daily</span>
        </div>
        <h1 className="m-0 font-serif text-[clamp(46px,7vw,104px)] font-light leading-[0.95]">
          The landowner’s share,<br /><em>quietly</em> below list price.
        </h1>
        <p className="m-0 max-w-[54ch] text-pretty text-[clamp(15px,1.2vw,19px)] leading-[1.7] text-paper/90">
          Flats and villas allotted to landowners in Kokapet, Narsingi, Financial District, Kollur and Tellapur — the same
          buildings as the builder’s inventory, sold direct at discounted pricing.
        </p>
        <div className="flex max-w-[640px] flex-wrap bg-paper text-olive">
          <div className="flex flex-[1_1_240px] flex-col gap-1 px-6 py-[18px]">
            <span className="text-[10px] uppercase tracking-[0.28em] text-olive-muted">Flats starting at</span>
            <span className="text-[clamp(32px,3.8vw,46px)] font-light leading-none">
              ₹4,700<span className="ml-2.5 text-xs uppercase tracking-[0.16em] text-olive-muted">per sft</span>
            </span>
          </div>
          <div className="flex flex-[0_1_240px] flex-col justify-center gap-1 bg-olive px-6 py-[18px] text-paper">
            <span className="text-[10px] uppercase tracking-[0.28em] text-paper/70">Direct from owners</span>
            <span className="text-sm leading-snug">One-time, loan &amp; progressive payment options</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3.5">
          <EnquireButton className="btn bg-paper text-olive hover:bg-stone">Enquire now</EnquireButton>
          <a href="#projects" className="btn-ghost-light hover:!text-paper">View all projects</a>
          <EnquireButton className="btn-ghost-light">Book a site visit</EnquireButton>
        </div>
        <div className="grid max-w-[720px] grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-5 border-t border-paper/30 pt-5">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="text-[38px] font-light leading-none">{s.v}</div>
              <div className="mt-1.5 text-[10px] uppercase tracking-label text-paper/80">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
