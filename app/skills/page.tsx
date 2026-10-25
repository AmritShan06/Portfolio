import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { SkillsGrid } from "@/components/skills/skills-grid";
import { NextStepCta } from "@/components/layout/next-step-cta";

export const metadata: Metadata = {
  title: "Skills & Technologies | Amritanshu Shandilya",
  description:
    "Technical skills across programming languages, CS fundamentals, web development, databases, AI retrieval, and developer tools.",
  openGraph: {
    title: "Skills & Technologies",
    url: `${portfolioData.personal.siteUrl}/skills`,
  },
  alternates: { canonical: `${portfolioData.personal.siteUrl}/skills` },
};

export default function SkillsPage() {
  return (
    <div className="py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[min(100%,640px)] h-[640px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <SectionHeading
          badge="Interactive Stack"
          title="Skills &"
          titleAccent="Technologies"
          subtitle="Switch between slide and grid views to explore six technical domains from my portfolio and resume."
        />
        <SkillsGrid />
      </div>
      <NextStepCta label="View Projects" href="/projects" />
    </div>
  );
}
