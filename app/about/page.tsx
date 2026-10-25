import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { EducationTimeline } from "@/components/about/education-timeline";
import { NextStepCta } from "@/components/layout/next-step-cta";
import { CheckCircle2, Brain, Code, Server, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Amritanshu Shandilya",
  description:
    "About Amritanshu Shandilya — ECE student at Siddaganga Institute of Technology, full-stack developer, and AI enthusiast.",
  openGraph: {
    title: "About Amritanshu Shandilya",
    description: portfolioData.personal.shortBio,
    url: `${portfolioData.personal.siteUrl}/about`,
  },
  alternates: { canonical: `${portfolioData.personal.siteUrl}/about` },
};

const pillars = [
  {
    icon: Code,
    title: "Full-Stack Architecture",
    desc: "React, Node.js, Express, and API-driven products with thoughtful UX.",
  },
  {
    icon: Brain,
    title: "AI & Retrieval",
    desc: "RAG pipelines, vector search, and LLM-assisted developer tools.",
  },
  {
    icon: Server,
    title: "Data & Real-Time",
    desc: "MongoDB, MySQL, Docker, and Socket.IO for scalable communication.",
  },
  {
    icon: Zap,
    title: "Algorithmic Practice",
    desc: "400+ LeetCode problems and competitive programming discipline.",
  },
];

export default function AboutPage() {
  const { personal } = portfolioData;

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          badge="Background"
          title="About"
          titleAccent="Me"
          subtitle="Electronics and Communication Engineering undergraduate focused on software engineering, AI applications, and system architecture."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-6 card-dark rounded-3xl p-7 sm:p-9 border border-white/[0.08]">
            <h3 className="text-lg font-bold text-white mb-4">Professional introduction</h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">{personal.bio}</p>
            <ul className="space-y-2 mb-6">
              {personal.interests.map((interest) => (
                <li key={interest} className="flex gap-2 text-sm text-zinc-400">
                  <CheckCircle2 className="w-4 h-4 text-[#ccff00] shrink-0 mt-0.5" />
                  {interest}
                </li>
              ))}
            </ul>
            <p className="text-sm text-zinc-400 leading-relaxed border-t border-white/[0.08] pt-4">
              {personal.careerGoals}
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="card-dark rounded-2xl p-5 border border-white/[0.08]"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#ccff00]/10 border border-[#ccff00]/25 text-[#ccff00] flex items-center justify-center mb-2">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{pillar.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <SectionHeading
          align="left"
          badge="Education"
          title="Academic"
          titleAccent="Journey"
          subtitle="Verified academic records from Siddaganga Institute of Technology, Trident Public School, and DAV Public School."
          className="mx-0 text-left max-w-none"
        />
        <EducationTimeline />
      </div>
      <NextStepCta
        label="Explore Skills"
        href="/skills"
        description="Continue to the interactive skills and technologies page."
      />
    </div>
  );
}
