import { PHONE } from "@/lib/projects";
import EnquireButton from "./EnquireButton";

export default function Header() {
  return (
    <header className="section-x sticky top-0 z-40 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-b border-olive/15 bg-paper/90 py-3.5 backdrop-blur-md">
      <a href="#top" className="flex flex-col gap-[3px]">
        <span className="font-serif text-[26px] uppercase leading-none tracking-[0.16em]">GoZamindar</span>
        <span className="text-[9px] uppercase tracking-[0.3em] text-olive-muted">Landowner share homes · Hyderabad</span>
      </a>
      <nav className="flex flex-wrap items-center gap-[clamp(12px,1.8vw,30px)] text-xs uppercase tracking-[0.16em]">
        <a href="#how">How it works</a>
        <a href="#projects">Projects</a>
        <a href="#localities">Localities</a>
        <a href="#contact">Contact</a>
        <a href={`tel:${PHONE}`} className="whitespace-nowrap">94409 12347</a>
        <EnquireButton className="btn-olive px-5 py-3 tracking-[0.16em]">Enquire now</EnquireButton>
      </nav>
    </header>
  );
}
