"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Area, PHONE, PROJECTS, Project, waLink } from "@/lib/projects";

type Ctx = {
  openEnquiry: (p?: Project | null) => void;
  area: Area | "All";
  setArea: (a: Area | "All") => void;
};
const SiteCtx = createContext<Ctx | null>(null);
export const useSite = () => {
  const c = useContext(SiteCtx);
  if (!c) throw new Error("useSite must be used inside SiteProvider");
  return c;
};

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [sel, setSel] = useState<Project | null>(null);
  const [area, setArea] = useState<Area | "All">("All");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", project: "" });

  const openEnquiry = useCallback((p?: Project | null) => {
    setSel(p ?? null);
    setSent(false);
    if (p) setForm((f) => ({ ...f, project: p.name }));
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: POST to your CRM / email endpoint, e.g. await fetch("/api/enquiry", { method: "POST", body: JSON.stringify(form) })
    setSent(true);
  };

  return (
    <SiteCtx.Provider value={{ openEnquiry, area, setArea }}>
      {children}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/60 p-[clamp(14px,4vw,40px)] backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            className="relative max-h-[92vh] w-full max-w-[520px] animate-pop overflow-y-auto border border-olive/25 bg-paper p-[clamp(24px,4vw,40px)]"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3.5 top-3.5 h-[38px] w-[38px] rounded-full border border-olive/30 text-base hover:bg-olive hover:text-paper"
            >
              ✕
            </button>
            <div className="mb-6 flex flex-col gap-1.5 border-b border-olive/20 pb-5 pr-11">
              <span className="text-[10px] uppercase tracking-[0.3em] text-olive-muted">{sel ? sel.loc : "GoZamindar · Enquiry"}</span>
              <span className="font-serif text-[34px] leading-[1.05]">{sel ? sel.name : "Talk to our team"}</span>
              <span className="text-[13px] text-olive-muted">
                {sel ? `${sel.bhk} · ${sel.size} · ${sel.price} ${sel.unit}` : "Share your details and we’ll send current landowner units and prices."}
              </span>
            </div>

            {sent ? (
              <div className="flex flex-col gap-4">
                <div className="border border-olive/25 bg-sand p-5 text-sm leading-relaxed">
                  Thank you, {form.name} — we’ll call you on {form.phone} within one working day.
                </div>
                <button onClick={() => setOpen(false)} className="btn-olive self-start">Close</button>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-4">
                <label className="flex flex-col gap-2 text-[10px] uppercase tracking-label text-olive-muted">
                  Name
                  <input required className="field" placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </label>
                <label className="flex flex-col gap-2 text-[10px] uppercase tracking-label text-olive-muted">
                  Phone number
                  <input required type="tel" className="field" placeholder="+91 00000 00000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </label>
                <label className="flex flex-col gap-2 text-[10px] uppercase tracking-label text-olive-muted">
                  Project
                  <select className="field" value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })}>
                    <option value="">Not decided yet</option>
                    {PROJECTS.map((p) => <option key={p.id} value={p.name}>{p.name}</option>)}
                  </select>
                </label>
                <button type="submit" className="btn-olive mt-2">Send me the best price</button>
                <div className="flex flex-wrap gap-2.5">
                  <a href={`tel:${PHONE}`} className="btn-outline flex-1 py-3 text-[11px]">Call now</a>
                  <a href={waLink(sel?.name)} target="_blank" rel="noopener" className="btn-outline flex-1 py-3 text-[11px]">WhatsApp</a>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </SiteCtx.Provider>
  );
}
