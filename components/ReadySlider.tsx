"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { READY } from "@/lib/projects";
import { useSite } from "./SiteProvider";

export default function ReadySlider() {
  const { openEnquiry } = useSite();
  const [i, setI] = useState(0);
  const n = READY.length;
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % n), 5000);
    return () => clearInterval(t);
  }, [n]);
  const s = READY[i];

  return (
    <section className="section-x py-[clamp(56px,8vw,110px)]">
      <div className="grid items-stretch gap-[clamp(20px,3vw,40px)] bg-olive p-[clamp(20px,3vw,34px)] text-paper md:grid-cols-2">
        <div className="relative aspect-[16/10] w-full min-w-0 overflow-hidden">
          {READY.map((p, k) => (
            <Image key={p.id} src={p.imgLg} alt={p.name} fill sizes="(min-width:768px) 50vw, 100vw" className={`object-cover transition-opacity duration-[900ms] ${k === i ? "opacity-100" : "opacity-0"}`} />
          ))}
          <div className="absolute left-[18px] top-[18px] rounded-full bg-ink/70 px-3.5 py-2 text-[10px] uppercase tracking-[0.24em]">
            {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 py-[clamp(6px,1vw,16px)]">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-paper/70">Ready to move · {s.area}</span>
            <h3 className="m-0 font-serif text-[clamp(34px,3.6vw,56px)] font-light leading-[1.02]">{s.name}</h3>
            <p className="m-0 max-w-[40ch] text-[15px] leading-[1.75] text-paper/90">{s.bhk} · {s.size}. {s.pay}.</p>
            <div className="flex items-baseline gap-2.5">
              <span className="text-[clamp(38px,4vw,54px)] font-light leading-none">{s.price}</span>
              <span className="text-[11px] uppercase tracking-[0.16em] text-paper/70">{s.unit}</span>
            </div>
            <button onClick={() => openEnquiry(s)} className="btn-ghost-light self-start hover:bg-paper hover:text-olive">Book a site visit</button>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-[18px]">
            <div className="flex flex-wrap gap-2">
              {READY.map((p, k) => (
                <button key={p.id} aria-label={`Show ${p.name}`} onClick={() => setI(k)} className={`h-1 w-[30px] ${k === i ? "bg-paper" : "bg-paper/35"}`} />
              ))}
            </div>
            <div className="flex gap-2.5">
              <button aria-label="Previous" onClick={() => setI((i + n - 1) % n)} className="h-[52px] w-[52px] rounded-full border border-paper/50 text-lg hover:bg-paper hover:text-olive">←</button>
              <button aria-label="Next" onClick={() => setI((i + 1) % n)} className="h-[52px] w-[52px] rounded-full border border-paper/50 text-lg hover:bg-paper hover:text-olive">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
