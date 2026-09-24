const steps = [
  { t: "Development agreement", b: "The builder and landowner sign an agreement giving the builder the right to develop the land." },
  { t: "Units allotted to the owner", b: "In exchange, the landowner receives ownership of a fixed number of flats or villas in the project." },
  { t: "You buy direct, for less", b: "GoZamindar connects you with these owners and supports you through to registration." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section-x section-y flex flex-col gap-[clamp(36px,5vw,64px)]">
      <div className="grid items-end gap-[clamp(24px,4vw,64px)] md:grid-cols-2">
        <div>
          <div className="eyebrow">What is a landowner share?</div>
          <h2 className="mt-[18px] font-serif text-[clamp(38px,5vw,76px)] font-light leading-[1.02] tracking-[-0.01em]">
            Same building. Same specs.<br /><em>A better</em> price.
          </h2>
        </div>
        <p className="m-0 max-w-[46ch] text-pretty text-[clamp(15px,1.15vw,18px)] leading-[1.75] text-olive-muted">
          Builders often pay for land with apartments instead of cash. Landowners who receive those units usually sell them
          below the builder’s list price — and that’s the inventory we bring you.
        </p>
      </div>
      <div className="grid gap-[clamp(24px,3vw,48px)] md:grid-cols-3">
        {steps.map((s, i) => (
          <div key={s.t} className="flex flex-col gap-3 border-t border-olive/30 pt-[22px]">
            <span className="font-mono text-xs text-olive-muted">0{i + 1}</span>
            <span className="font-serif text-[clamp(26px,2.4vw,34px)] leading-[1.1]">{s.t}</span>
            <span className="max-w-[34ch] text-sm leading-[1.7] text-olive-muted">{s.b}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
