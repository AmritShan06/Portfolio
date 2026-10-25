import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { ProjectsGallery } from "@/components/projects/projects-gallery";
import { NextStepCta } from "@/components/layout/next-step-cta";

export const metadata: Metadata = {
  title: "Projects | Amritanshu Shandilya",
  description:
    "Featured projects: Codebase RAG, FlowAI, and SnapChat — AI retrieval, architecture visualization, and real-time chat.",
  openGraph: {
    title: "Projects Portfolio",
    url: `${portfolioData.personal.siteUrl}/projects`,
  },
  alternates: { canonical: `${portfolioData.personal.siteUrl}/projects` },
};

export default function ProjectsPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          badge="Engineering Work"
          title="Project"
          titleAccent="Gallery"
          subtitle="Production-oriented applications spanning AI retrieval, developer tooling, and real-time full-stack systems."
        />
        <ProjectsGallery />
      </div>
      <NextStepCta label="Explore Skills" href="/skills" />
    </div>
  );
}
