import { PHONE, PHONE_DISPLAY } from "@/lib/projects";

export default function Footer() {
  return (
    <footer className="section-x flex flex-col gap-7 border-t border-olive/15 pb-10 pt-[clamp(36px,5vw,60px)]">
      <div className="grid items-start gap-[clamp(20px,4vw,56px)] md:grid-cols-2">
        <div className="flex flex-col gap-2.5">
          <span className="font-serif text-[30px] uppercase leading-none tracking-[0.14em]">GoZamindar</span>
          <span className="text-[11px] uppercase tracking-btn text-olive-muted">Landowner share flats &amp; villas · Hyderabad</span>
          <a href={`tel:${PHONE}`} className="text-[11px] uppercase tracking-btn">{PHONE_DISPLAY}</a>
        </div>
        <p className="m-0 max-w-[56ch] text-pretty text-[13px] leading-[1.75] text-olive-muted">
          Prices, sizes and possession timelines are indicative and change with availability. Please confirm all details and
          documents before booking.
        </p>
      </div>
      <div className="flex flex-wrap justify-between gap-[18px] border-t border-olive/15 pt-5 text-[11px] uppercase tracking-[0.18em] text-olive-muted">
        <span>© {new Date().getFullYear()} GoZamindar</span>
        <span>Images courtesy of respective developers</span>
      </div>
    </footer>
  );
}
