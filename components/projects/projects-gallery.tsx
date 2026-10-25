"use client";

import { useState } from "react";
import { portfolioData, projectFilterOptions, ProjectFilter } from "@/data/portfolio";
import { ProjectCard } from "@/components/projects/project-card";
import { cn } from "@/lib/utils";

export function ProjectsGallery() {
  const [filter, setFilter] = useState<ProjectFilter>("All");

  const filtered =
    filter === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.filterTags.includes(filter));

  return (
    <>
      <div
        className="flex flex-wrap justify-center gap-2 mb-10"
        role="group"
        aria-label="Filter projects by category"
      >
        {projectFilterOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFilter(option)}
            className={cn(
              "px-4 py-2 rounded-full text-xs font-mono font-bold border transition-all",
              filter === option
                ? "bg-[#ccff00] text-black border-[#ccff00]"
                : "bg-white/[0.03] text-zinc-400 border-white/[0.08] hover:text-white"
            )}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-sm text-zinc-500 font-mono py-12">
          No projects match this filter.
        </p>
      )}
    </>
  );
}
