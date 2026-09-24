"use client";
import { Project } from "@/lib/projects";
import { useSite } from "./SiteProvider";

export default function EnquireButton({
  project, className = "btn-olive", children, ariaLabel,
}: { project?: Project; className?: string; children: React.ReactNode; ariaLabel?: string }) {
  const { openEnquiry } = useSite();
  return (
    <button type="button" aria-label={ariaLabel} onClick={() => openEnquiry(project)} className={className}>
      {children}
    </button>
  );
}
