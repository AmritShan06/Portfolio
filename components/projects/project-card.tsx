import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/portfolio";
import {
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const renderVisualMockup = () => {
    switch (project.slug) {
      case "codebase-rag":
        return (
          <div className="relative h-44 sm:h-52 w-full overflow-hidden border-b border-white/[0.08] bg-[#f4f5ff] group-hover:border-[#ccff00]/40 transition-colors">
            <Image
              src="/images/codebase-rag-preview.png"
              alt="Preview of the Codebase RAG platform"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-top"
            />
          </div>
        );
      case "flowai":
        return (
          <div className="h-44 sm:h-52 w-full bg-[#070707] p-4 sm:p-5 flex flex-col justify-between border-b border-white/[0.08] relative overflow-hidden group-hover:border-[#ccff00]/40 transition-colors">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
              <span className="flex items-center gap-2 text-white font-semibold font-mono text-[11px]">
                <Layers className="w-4 h-4 text-[#ccff00]" />
                FlowAI
              </span>
              <span className="px-2 py-0.5 rounded-full text-[9px] bg-white/[0.06] text-zinc-300 border border-white/[0.1]">
                React Flow
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2">
              <div className="p-2 rounded-lg bg-black border border-white/[0.1] text-[9px]">Client</div>
              <div className="h-px w-6 bg-[#ccff00]/60" />
              <div className="p-2 rounded-lg bg-[#ccff00]/10 border border-[#ccff00]/40 text-[9px] text-[#ccff00]">
                AI
              </div>
              <div className="h-px w-6 bg-[#ccff00]/60" />
              <div className="p-2 rounded-lg bg-black border border-white/[0.1] text-[9px]">MySQL</div>
            </div>
          </div>
        );
      case "snapchat":
        return (
          <div className="relative h-44 sm:h-52 w-full overflow-hidden border-b border-white/[0.08] bg-[#f4f5ff] group-hover:border-[#ccff00]/40 transition-colors">
            <Image
              src="/images/snapchat-login.png"
              alt="SnapChat login screen with email and password fields"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center"
            />
          </div>
        );
      default:
        return (
          <div className="h-44 sm:h-52 w-full bg-zinc-900 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-[#ccff00]" />
          </div>
        );
    }
  };

  const featureLimit = compact ? 2 : project.features.length;

  return (
    <article className="card-dark rounded-3xl border border-white/[0.08] overflow-hidden flex flex-col justify-between group transition-all duration-300 h-full">
      <Link href={`/projects/${project.slug}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00] rounded-t-3xl">
        {renderVisualMockup()}
      </Link>

      <div className="p-5 sm:p-7 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold text-[#ccff00] uppercase tracking-wider truncate">
              {project.category}
            </span>
            {project.badge && !compact && (
              <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-white/[0.05] text-zinc-300 border border-white/[0.08] shrink-0">
                {project.badge}
              </span>
            )}
          </div>

          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#ccff00] transition-colors">
              {project.title}
            </h3>
          </Link>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {!compact && (
            <div className="space-y-1.5 mb-4">
              {project.features.slice(0, featureLimit).map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ccff00] mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-1">{feature}</span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, compact ? 4 : undefined).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-black/60 text-zinc-300 border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-black bg-[#ccff00] hover:bg-[#b8f000] transition-colors"
          >
            Details
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#ccff00]" />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full text-xs font-bold text-black bg-[#ccff00]/90"
            >
              Demo
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
