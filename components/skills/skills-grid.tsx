"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import {
  Code2,
  Terminal,
  Globe,
  Database,
  Cpu,
  Wrench,
  Check,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Presentation,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ElementType> = {
  "Programming Languages": Code2,
  "Computer Science Fundamentals": Terminal,
  "Web Development": Globe,
  Databases: Database,
  "AI, Retrieval and Infrastructure": Cpu,
  "Developer Tools": Wrench,
};

type ViewMode = "slide" | "grid";

export function SkillsGrid() {
  const { skillCategories } = portfolioData;
  const [viewMode, setViewMode] = useState<ViewMode>("slide");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const totalSlides = skillCategories.length;
  const currentCategory = skillCategories[currentSlideIndex] ?? skillCategories[0];
  const Icon = categoryIcons[currentCategory.title] || Sparkles;

  const goToSlide = (idx: number) => {
    setCurrentSlideIndex(idx);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (viewMode !== "slide") return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrevSlide();
      else if (e.key === "ArrowRight") handleNextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewMode, currentSlideIndex, totalSlides]);

  return (
    <div className="relative">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
        <div
          className="inline-flex p-1 rounded-full bg-white/[0.04] border border-white/[0.08]"
          role="tablist"
          aria-label="Skills view mode"
        >
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === "slide"}
            onClick={() => setViewMode("slide")}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold transition-all",
              viewMode === "slide"
                ? "bg-[#ccff00] text-black"
                : "text-zinc-400 hover:text-white"
            )}
          >
            <Presentation className="w-3.5 h-3.5" />
            Slide view
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === "grid"}
            onClick={() => setViewMode("grid")}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold transition-all",
              viewMode === "grid"
                ? "bg-[#ccff00] text-black"
                : "text-zinc-400 hover:text-white"
            )}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            Grid view
          </button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category) => {
            const CatIcon = categoryIcons[category.title] || Sparkles;
            return (
              <div
                key={category.title}
                className="card-dark rounded-2xl p-6 border border-white/[0.08] hover:border-[#ccff00]/35 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/25 text-[#ccff00] flex items-center justify-center">
                    <CatIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug">{category.title}</h3>
                </div>
                <p className="text-xs text-zinc-500 mb-4 leading-relaxed">{category.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/60 text-zinc-300 border border-white/[0.08]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between gap-4 mb-6 max-w-4xl mx-auto">
            <button
              type="button"
              onClick={handlePrevSlide}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-white/[0.05] hover:bg-[#ccff00] hover:text-black border border-white/[0.1] text-xs font-mono font-bold transition-all"
              aria-label="Previous category"
            >
              <ChevronLeft className="w-4 h-4" />
              Prev
            </button>
            <span className="text-xs font-mono text-[#ccff00] font-bold tabular-nums">
              {String(currentSlideIndex + 1).padStart(2, "0")} /{" "}
              {String(totalSlides).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={handleNextSlide}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-[#ccff00] text-black text-xs font-mono font-bold transition-all"
              aria-label="Next category"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div
            className="flex gap-2 overflow-x-auto pb-3 mb-8 max-w-full scrollbar-thin px-1 snap-x snap-mandatory"
            style={{ scrollbarWidth: "thin" }}
          >
            {skillCategories.map((category, idx) => (
              <button
                key={category.title}
                type="button"
                onClick={() => goToSlide(idx)}
                className={cn(
                  "snap-start flex-shrink-0 max-w-[85vw] sm:max-w-none px-3 py-2 rounded-full text-[11px] sm:text-xs font-mono font-medium border transition-all",
                  idx === currentSlideIndex
                    ? "bg-[#ccff00] text-black border-[#ccff00] font-bold"
                    : "bg-white/[0.03] text-zinc-400 border-white/[0.08] hover:text-white"
                )}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto relative px-0 sm:px-2">
            <div
              key={currentCategory.title}
              className="card-dark animate-skill-category rounded-3xl p-6 sm:p-10 border border-[#ccff00]/30 relative overflow-hidden"
            >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-6 border-b border-white/[0.08]">
                  <div className="w-14 h-14 rounded-2xl bg-[#ccff00]/15 border border-[#ccff00]/30 text-[#ccff00] flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-[#ccff00] uppercase tracking-widest">
                      {String(currentSlideIndex + 1).padStart(2, "0")} /{" "}
                      {String(totalSlides).padStart(2, "0")}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{currentCategory.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed my-6">{currentCategory.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentCategory.skills.map((skill) => {
                    const active = selectedSkill === skill;
                    return (
                      <button
                        type="button"
                        key={skill}
                        onClick={() => setSelectedSkill(active ? null : skill)}
                        className={cn(
                          "flex items-center gap-2 p-3 rounded-xl border text-left text-xs font-mono transition-all",
                          active
                            ? "bg-[#ccff00]/15 border-[#ccff00] text-white"
                            : "bg-black/50 border-white/[0.08] text-zinc-300 hover:border-[#ccff00]/30"
                        )}
                      >
                        <Check className="w-3.5 h-3.5 text-[#ccff00] shrink-0" />
                        <span className="break-words">{skill}</span>
                      </button>
                    );
                  })}
                </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
