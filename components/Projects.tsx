"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { projects } from "@/data/projects";

const CARD_WIDTH = 320;

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const cardClass =
    "rounded-2xl overflow-hidden border border-[var(--border)] group transition-all duration-300 block shrink-0 snap-start";

  const inner = (
    <>
      <div className="relative aspect-[4/3] bg-[var(--teal-faint,#F0F8FA)]">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
          sizes="(max-width: 768px) 85vw, 320px"
        />
      </div>
      <div className="p-4 bg-white flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h4 className="font-display font-bold text-sm text-[var(--dark)] group-hover:text-[var(--teal)] transition-colors">
            {project.name}
          </h4>
          <p className="text-xs text-[var(--muted)] mt-0.5">{project.category}</p>
        </div>
        {project.url && <span className="text-[var(--teal)] font-bold text-base shrink-0">→</span>}
      </div>
    </>
  );

  if (!project.url) {
    return (
      <div className={`${cardClass} opacity-90`} style={{ width: CARD_WIDTH }}>
        {inner}
      </div>
    );
  }

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cardClass} hover:-translate-y-1 hover:shadow-xl no-underline`}
      style={{ width: CARD_WIDTH }}
    >
      {inner}
    </a>
  );
}

export default function Projects() {
  const { t } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(projects.length > 1);

  const updateButtons = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  const scroll = (dir: -1 | 1) => {
    trackRef.current?.scrollBy({ left: dir * (CARD_WIDTH + 20), behavior: "smooth" });
    window.setTimeout(updateButtons, 350);
  };

  const showNav = projects.length > 1;

  return (
    <section id="projektet" className="py-20 px-6 md:px-[5vw] bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-8 flex-wrap">
          <div>
            <p className="text-xs font-bold tracking-[1.5px] uppercase text-[var(--teal)] mb-2">
              {t("PROJEKTET", "PROJECTS")}
            </p>
            <h2 className="font-display font-bold text-[clamp(1.5rem,2.8vw,2.2rem)] text-[var(--dark)] mb-2">
              {t("Disa nga projektet tona", "Some of our work")}
            </h2>
            <p className="text-[var(--mid)] text-sm leading-relaxed max-w-lg">
              {t(
                "Çdo projekt është i menduar, dizajnuar dhe ndërtuar me kujdes për të arritur qëllimin.",
                "Every project is thoughtfully designed and built to achieve the client's goals."
              )}
            </p>
          </div>

          {showNav && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scroll(-1)}
                disabled={!canPrev}
                aria-label={t("Projekti i mëparshëm", "Previous project")}
                className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--mid)] hover:border-[var(--teal)] hover:text-[var(--teal)] transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => scroll(1)}
                disabled={!canNext}
                aria-label={t("Projekti tjetër", "Next project")}
                className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--mid)] hover:border-[var(--teal)] hover:text-[var(--teal)] transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        <div
          ref={trackRef}
          onScroll={updateButtons}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
