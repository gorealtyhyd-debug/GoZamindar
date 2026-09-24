import Image from "next/image";
import { GALLERY } from "@/lib/projects";
import EnquireButton from "./EnquireButton";

export default function Gallery() {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-0.5 bg-olive/20">
      {GALLERY.map((p) => (
        <EnquireButton key={p.id} project={p} ariaLabel={`Enquire about ${p.name}`} className="group relative block aspect-[4/3] overflow-hidden bg-stone text-left">
          <Image src={p.imgLg} alt={p.name} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-[18px] py-4 text-[11px] uppercase tracking-label text-paper">
            {p.name} — {p.area}
          </span>
        </EnquireButton>
      ))}
    </section>
  );
}
