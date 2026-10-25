import Link from "next/link";
import { Project, getAdjacentProjects } from "@/data/portfolio";
import { ProjectCardVisual } from "@/components/projects/project-visual";
import { GithubIcon } from "@/components/icons";
import { ExternalLink, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <article className="max-w-4xl mx-auto">
      <nav className="text-xs font-mono text-zinc-500 mb-8 flex flex-wrap items-center gap-2" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#ccff00] transition-colors">
          Home
        </Link>
        <span aria-hidden>/</span>
        <Link href="/projects" className="hover:text-[#ccff00] transition-colors">
          Projects
        </Link>
        <span aria-hidden>/</span>
        <span className="text-zinc-300">{project.title}</span>
      </nav>

      <header className="mb-10">
        <p className="text-xs font-mono font-bold text-[#ccff00] uppercase tracking-wider mb-2">
          {project.category}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{project.title}</h1>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">{project.overview}</p>
      </header>

      <div className="rounded-3xl overflow-hidden border border-white/[0.08] mb-10 card-dark">
        <ProjectCardVisual slug={project.slug} large />
      </div>

      <div className="space-y-10 mb-12">
        <section>
          <h2 className="text-lg font-bold text-white mb-3">Problem &amp; motivation</h2>
          <p className="text-sm text-zinc-400 leading-relaxed">{project.problem}</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-white mb-3">Solution &amp; features</h2>
          <p className="text-sm text-zinc-400 leading-relaxed mb-4">{project.solution}</p>
          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="text-sm text-zinc-300 flex gap-2">
                <span className="text-[#ccff00]" aria-hidden>
                  —
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-bold text-white mb-3">Architecture &amp; data flow</h2>
          <p className="text-sm text-zinc-400 leading-relaxed font-mono text-[13px] bg-black/50 p-4 rounded-2xl border border-white/[0.06]">
            {project.architecture}
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-white mb-3">Technical implementation</h2>
          <ul className="space-y-2">
            {project.implementation.map((item) => (
              <li key={item} className="text-sm text-zinc-400 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-bold text-white mb-3">Technology stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>

      <div className="flex flex-wrap gap-3 mb-12 pb-10 border-b border-white/[0.08]">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-white/[0.06] border border-white/[0.1] hover:border-[#ccff00]/40 transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-[#ccff00]" />
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-black bg-[#ccff00]"
          >
            Live demo
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-black bg-[#ccff00] hover:bg-[#b8f000] transition-colors"
        >
          Discuss this project
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <nav
        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4"
        aria-label="Adjacent projects"
      >
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-[#ccff00] transition-colors p-3 rounded-xl border border-white/[0.06] hover:border-[#ccff00]/30"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-[#ccff00] transition-colors p-3 rounded-xl border border-white/[0.06] hover:border-[#ccff00]/30 sm:text-right sm:ml-auto"
          >
            <span>{next.title}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
