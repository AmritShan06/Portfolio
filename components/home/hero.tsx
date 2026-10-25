import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon, LeetCodeIcon } from "@/components/icons";
import { TechOrbit } from "@/components/home/tech-orbit";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pb-16 text-white">
      <div className="home-hero-blackhole" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="auto">
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono text-[#ccff00] bg-white/[0.05] border border-white/[0.1] backdrop-blur-md mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
              <span>Full-Stack &bull; AI Systems</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold tracking-tight text-white leading-[1.12] mb-4">
              {personal.heroHeading}
            </h1>

            <p className="text-base sm:text-lg font-semibold text-white mb-3">
              {personal.name}
            </p>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl mb-8">
              {personal.shortBio}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-black bg-[#ccff00] hover:bg-[#b8f000] shadow-[0_0_25px_rgba(204,255,0,0.4)] hover:scale-[1.02] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00]"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                About Me
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.08] w-full">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#ccff00]" />
                GitHub
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
              <a
                href={personal.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
              >
                <LeetCodeIcon className="w-3.5 h-3.5 text-[#ccff00]" />
                LeetCode
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center min-w-0">
            <TechOrbit />
          </div>
        </div>
      </div>
    </section>
  );
}
