import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { ArrowRight } from "lucide-react";

export function SkillsPreview() {
  const previewCategories = portfolioData.skillCategories.slice(0, 4);
  const flatSkills = previewCategories.flatMap((c) => c.skills).slice(0, 12);

  return (
    <section className="py-16 sm:py-20 bg-transparent border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          badge="Stack Preview"
          title="Technical"
          titleAccent="Skills"
          subtitle="A snapshot of languages, web tooling, databases, and AI infrastructure—explore the full interactive skills page."
        />
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto mb-8">
          {flatSkills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-full text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-black bg-[#ccff00] hover:bg-[#b8f000] transition-colors"
          >
            Explore all skills
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
