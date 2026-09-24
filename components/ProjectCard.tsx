"use client";
import Image from "next/image";
import { Project } from "@/lib/projects";
import { useSite } from "./SiteProvider";

const Corner = ({ pos }: { pos: string }) => <span className={`pointer-events-none absolute h-[18px] w-[18px] border-olive ${pos}`} />;

export default function ProjectCard({ p, num }: { p: Project; num: number }) {
  const { openEnquiry } = useSite();
  const status = p.ready ? "Ready to move" : `Possession · ${p.poss}`;
  const rows: [string, string][] = [["Configuration", p.bhk], ["Size", p.size], ["Possession", p.poss]];

  return (
    <div className="group relative border border-olive/15 bg-paper p-[9px] shadow-[0_24px_50px_-36px_rgba(30,32,22,0.5)] transition duration-500 hover:-translate-y-1.5 hover:border-olive/50 hover:shadow-[0_36px_70px_-34px_rgba(30,32,22,0.55)]">
      <Corner pos="-left-px -top-px border-l-2 border-t-2" />
      <Corner pos="-right-px -top-px border-r-2 border-t-2" />
      <Corner pos="-bottom-px -left-px border-b-2 border-l-2" />
      <Corner pos="-bottom-px -right-px border-b-2 border-r-2" />

      <article className="flex h-full flex-col border border-olive/30 bg-paper">
        <div className="flex items-center justify-between gap-2.5 border-b border-olive/15 px-4 py-[11px] text-[9px] uppercase tracking-[0.3em] text-olive-muted">
          <span className="whitespace-nowrap">Landowner share</span>
          <span className="font-serif text-base tracking-[0.08em] text-olive">No. {String(num).padStart(2, "0")}</span>
        </div>

        <button
          type="button"
          onClick={() => openEnquiry(p)}
          aria-label={`Enquire about ${p.name}`}
          className="relative mx-2.5 mt-2.5 block aspect-[4/3] overflow-hidden bg-stone outline outline-1 -outline-offset-8 outline-paper/60"
        >
          <Image src={p.img} alt={p.name} fill sizes="(min-width:1280px) 30vw, (min-width:768px) 45vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
          <span className={`absolute left-3.5 top-3.5 whitespace-nowrap rounded-full px-[13px] py-[7px] text-[10px] uppercase tracking-btn ${p.ready ? "bg-olive text-paper" : "bg-paper/95 text-olive"}`}>
            {status}
          </span>
        </button>

        <div className="flex flex-1 flex-col gap-[18px] px-6 pb-[26px] pt-6">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-[0.26em] text-olive-muted">{p.loc} · {p.type}</span>
            <h3 className="m-0 font-serif text-[30px] font-normal leading-[1.05]">{p.name}</h3>
          </div>

          <div className="flex flex-col border-t border-olive/15">
            {rows.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3 border-b border-olive/10 py-2.5 text-[13px]">
                <span className="text-[10px] uppercase tracking-btn text-olive-muted">{k}</span>
                <span className="text-right">{v}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-1.5 border-l-2 border-olive bg-sand px-[18px] py-4">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-[36px] font-light leading-none">{p.price}</span>
              <span className="whitespace-nowrap text-[11px] uppercase tracking-[0.14em] text-olive-muted">{p.unit}</span>
            </div>
            <span className="text-[13px] text-olive-muted">{p.pay}</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button type="button" onClick={() => openEnquiry(p)} className="btn-olive flex-auto px-5 py-3.5 text-[11px]">Get best price</button>
            <button type="button" onClick={() => openEnquiry(p)} className="btn-outline px-[18px] py-[13px] text-[11px]">Site visit</button>
          </div>
        </div>
      </article>
    </div>
  );
}
