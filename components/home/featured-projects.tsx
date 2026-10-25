import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  const featured = portfolioData.projects.slice(0, 3);

  return (
    <section className="py-16 sm:py-20 relative bg-transparent border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          badge="Selected Work"
          title="Featured"
          titleAccent="Projects"
          subtitle="Three production-oriented builds spanning AI retrieval, visual architecture tools, and real-time messaging."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} compact />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-mono font-bold text-[#ccff00] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00] rounded"
          >
            View all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
