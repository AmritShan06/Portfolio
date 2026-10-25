"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
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
  Sliders,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ElementType> = {
  "Programming Languages": Code2,
  "Computer Science Fundamentals": Terminal,
  "Web Development": Globe,
  "Databases": Database,
  "AI, Retrieval and Infrastructure": Cpu,
  "Developer Tools": Wrench,
};

export function Skills() {
  const { skillCategories } = portfolioData;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [direction, setDirection] = useState(0);

  const totalSlides = skillCategories.length;
  const currentCategory = skillCategories[currentSlideIndex] || skillCategories[0];
  const Icon = categoryIcons[currentCategory.title] || Sparkles;

  const handlePrevSlide = () => {
    setDirection(-1);
    setCurrentSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setDirection(1);
    setCurrentSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Keyboard arrow navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setDirection(-1);
        setCurrentSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setDirection(1);
        setCurrentSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalSlides]);

  return (
    <section id="skills" className="py-24 relative bg-black overflow-hidden">
      {/* Background Subtle Lime Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#ccff00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <SectionHeading
          badge="Interactive Stack"
          title="Skills &amp;"
          titleAccent="Technologies"
          subtitle="Slide through technical domains to explore verified competencies in AI pipelines, full-stack architecture, and algorithmic systems."
        />

        {/* 1. Interactive Slide Button / Slider Control Bar */}
        <div className="w-full max-w-2xl mx-auto mb-10 p-5 rounded-3xl bg-zinc-950/90 border border-white/[0.1] shadow-2xl relative">
          <div className="flex items-center justify-between mb-3 text-xs font-mono">
            <span className="text-zinc-400 flex items-center gap-2 font-medium">
              <Sliders className="w-4 h-4 text-[#ccff00]" />
              <span>Slide Button to Select:</span>
            </span>
            <span className="text-[#ccff00] font-bold">
              {currentCategory.title} ({currentSlideIndex + 1}/{totalSlides})
            </span>
          </div>

          {/* Interactive Slide Range Track */}
          <div className="relative py-2 flex items-center">
            <input
              type="range"
              min={0}
              max={totalSlides - 1}
              step={1}
              value={currentSlideIndex}
              onChange={(e) => {
                const newIdx = Number(e.target.value);
                setDirection(newIdx > currentSlideIndex ? 1 : -1);
                setCurrentSlideIndex(newIdx);
              }}
              className="w-full h-3 bg-zinc-900 rounded-full appearance-none cursor-pointer accent-[#ccff00] focus:outline-none focus:ring-2 focus:ring-[#ccff00]/50"
              aria-label="Technology category slider"
            />
          </div>

          {/* Step Markers / Quick Jump Numbers */}
          <div className="flex justify-between items-center mt-2 px-1">
            {skillCategories.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => {
                  setDirection(idx > currentSlideIndex ? 1 : -1);
                  setCurrentSlideIndex(idx);
                }}
                className={cn(
                  "text-[10px] font-mono px-2 py-1 rounded transition-colors",
                  idx === currentSlideIndex
                    ? "text-black font-bold bg-[#ccff00] rounded-full shadow-sm"
                    : "text-zinc-500 hover:text-zinc-300"
                )}
              >
                0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Slide Navigation Header Controls & Category Pills */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 max-w-4xl mx-auto">
          {/* Quick Slide Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevSlide}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-[#ccff00] text-white hover:text-black border border-white/[0.1] hover:border-[#ccff00] text-xs font-mono font-bold transition-all hover:scale-105 active:scale-95 shadow-sm"
              aria-label="Slide to previous technology"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
              <span>Slide Prev</span>
            </button>

            <button
              onClick={handleNextSlide}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ccff00] hover:bg-[#b8f000] text-black border border-[#ccff00] text-xs font-mono font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.35)]"
              aria-label="Slide to next technology"
            >
              <span>Slide Next</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Visual Category Indicator */}
          <div className="text-xs font-mono text-zinc-400">
            Swipe or use arrows to slide through stack
          </div>
        </div>

        {/* 3. Horizontal Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 max-w-5xl mx-auto scrollbar-none px-2">
          {skillCategories.map((category, idx) => {
            const isSelected = idx === currentSlideIndex;
            return (
              <button
                key={category.title}
                onClick={() => {
                  setDirection(idx > currentSlideIndex ? 1 : -1);
                  setCurrentSlideIndex(idx);
                }}
                className={cn(
                  "flex-shrink-0 px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 border",
                  isSelected
                    ? "bg-[#ccff00] text-black border-[#ccff00] font-bold shadow-[0_0_20px_rgba(204,255,0,0.35)] scale-105"
                    : "bg-white/[0.03] text-zinc-400 border-white/[0.08] hover:text-white hover:bg-white/[0.08]"
                )}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        {/* 4. The Heroic Slide Showcase Card (Draggable / Swipeable) */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Side Floating Arrow Buttons for Desktop */}
          <button
            onClick={handlePrevSlide}
            className="hidden lg:flex absolute -left-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-zinc-900/90 border border-white/[0.1] hover:border-[#ccff00] text-white hover:text-[#ccff00] items-center justify-center transition-all hover:scale-110 z-20 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <button
            onClick={handleNextSlide}
            className="hidden lg:flex absolute -right-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#ccff00] text-black items-center justify-center transition-all hover:scale-110 z-20 shadow-[0_0_25px_rgba(204,255,0,0.4)]"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.title}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, { offset }) => {
                if (offset.x > 60) handlePrevSlide();
                else if (offset.x < -60) handleNextSlide();
              }}
              className="card-dark rounded-3xl p-7 sm:p-11 border border-[#ccff00]/40 shadow-[0_0_40px_rgba(204,255,0,0.12)] relative overflow-hidden cursor-grab active:cursor-grabbing"
            >
              {/* Background Ambient Radial Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#ccff00]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-4">
                  <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-[#ccff00]/15 border border-[#ccff00]/30 text-[#ccff00] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#ccff00]/10">
                    <Icon className="w-7 sm:w-8 h-7 sm:h-8" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#ccff00] uppercase tracking-widest">
                      Domain 0{currentSlideIndex + 1} of 0{totalSlides}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-0.5">
                      {currentCategory.title}
                    </h3>
                  </div>
                </div>

                {/* Direct Dot Jump Selectors */}
                <div className="flex items-center gap-1.5 self-start sm:self-auto">
                  {skillCategories.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => {
                        setDirection(dotIdx > currentSlideIndex ? 1 : -1);
                        setCurrentSlideIndex(dotIdx);
                      }}
                      className={cn(
                        "h-2 rounded-full transition-all focus:outline-none",
                        dotIdx === currentSlideIndex
                          ? "w-7 bg-[#ccff00] shadow-[0_0_10px_#ccff00]"
                          : "w-2 bg-zinc-700 hover:bg-zinc-500"
                      )}
                      aria-label={`Jump to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Category Narrative */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed my-6 font-normal">
                {currentCategory.description}
              </p>

              {/* Selectable Technology Tags Grid */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                  <span>Verified Technologies (Click to highlight):</span>
                  <span className="text-[#ccff00] font-normal lowercase text-[11px]">
                    {currentCategory.skills.length} available
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {currentCategory.skills.map((skill) => {
                    const isSkillSelected = selectedSkill === skill;
                    return (
                      <button
                        type="button"
                        key={skill}
                        onClick={() => setSelectedSkill(isSkillSelected ? null : skill)}
                        className={cn(
                          "flex items-center gap-2.5 p-3.5 rounded-2xl border text-left transition-all",
                          isSkillSelected
                            ? "bg-[#ccff00]/20 border-[#ccff00] text-white shadow-[0_0_15px_rgba(204,255,0,0.25)] scale-[1.02]"
                            : "bg-black/70 border-white/[0.08] hover:border-[#ccff00]/40 text-zinc-200 hover:text-white"
                        )}
                      >
                        <div
                          className={cn(
                            "w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                            isSkillSelected
                              ? "bg-[#ccff00] text-black"
                              : "bg-[#ccff00]/10 text-[#ccff00]"
                          )}
                        >
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="text-xs sm:text-sm font-mono font-medium truncate">
                          {skill}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Card Slide Actions */}
              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrevSlide}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-[#ccff00] transition-colors focus:outline-none"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Prev Stack</span>
                </button>

                <div className="text-[11px] font-mono text-zinc-500 hidden sm:block">
                  Drag card or use slide buttons
                </div>

                <button
                  type="button"
                  onClick={handleNextSlide}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ccff00] hover:underline transition-colors focus:outline-none font-bold"
                >
                  <span>Next Stack</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
