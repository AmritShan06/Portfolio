import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  portfolioData,
} from "@/data/portfolio";
import { ProjectDetails } from "@/components/projects/project-details";
import { NextStepCta } from "@/components/layout/next-step-cta";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }

  const url = `${portfolioData.personal.siteUrl}/projects/${project.slug}`;

  return {
    title: `${project.title} | Amritanshu Shandilya`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.overview,
      url,
    },
    alternates: { canonical: url },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <ProjectDetails project={project} />
      </div>
      <NextStepCta
        label="Contact Me"
        href="/contact"
        description="Interested in this project? Let's connect."
      />
    </div>
  );
}
