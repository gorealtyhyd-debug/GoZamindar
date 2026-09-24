import Image from "next/image";
import { CONTACT_IMG, PHONE, PHONE_DISPLAY } from "@/lib/projects";
import EnquireButton from "./EnquireButton";

export default function Contact() {
  const rows: [string, React.ReactNode][] = [
    ["Call", <a key="c" href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>],
    ["WhatsApp", <a key="w" href="https://wa.me/919440912347" target="_blank" rel="noopener">Message us ↗</a>],
    ["City", "Hyderabad"],
    ["Site visits", "By appointment"],
  ];
  return (
    <section id="contact" className="section-x section-y grid items-start gap-[clamp(28px,5vw,64px)] md:grid-cols-2">
      <div className="flex flex-col gap-[22px]">
        <div className="eyebrow">Contact</div>
        <h2 className="m-0 font-serif text-[clamp(34px,4vw,58px)] font-light leading-[1.05]">Your home is<br /><em>one call</em> away.</h2>
        <p className="m-0 max-w-[42ch] text-pretty text-[15px] leading-[1.7] text-olive-muted">
          Tell us the project or locality you like. We’ll share current landowner units, floor plans and the best price available.
        </p>
        <div className="flex flex-col border-t border-olive/20">
          {rows.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 border-b border-olive/15 py-[15px] text-sm">
              <span className="whitespace-nowrap text-[11px] uppercase tracking-[0.14em] text-olive-muted">{k}</span>
              <span className="text-right">{v}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex min-h-[clamp(320px,34vw,440px)] items-end overflow-hidden bg-stone">
        <Image src={CONTACT_IMG} alt="Landowner share project, Hyderabad" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-ink/10" />
        <div className="relative flex flex-col gap-[18px] p-[clamp(22px,3vw,40px)] text-paper">
          <span className="text-[11px] uppercase tracking-[0.3em] text-paper/80">Enquiry</span>
          <span className="max-w-[22ch] font-serif text-[clamp(28px,3vw,42px)] leading-[1.08]">Get current landowner units, plans and the best price.</span>
          <EnquireButton className="btn self-start bg-paper text-olive hover:bg-stone">Enquire now</EnquireButton>
        </div>
      </div>
    </section>
  );
}
