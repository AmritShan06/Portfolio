import Image from "next/image";
import { Layers, MessageSquare, Sparkles } from "lucide-react";

interface ProjectCardVisualProps {
  slug: string;
  large?: boolean;
}

export function ProjectCardVisual({ slug, large = false }: ProjectCardVisualProps) {
  const height = large ? "min-h-[220px] sm:min-h-[280px]" : "h-44 sm:h-52";

  switch (slug) {
    case "codebase-rag":
      return (
        <div
          className={`${large ? "relative h-[240px] sm:h-[360px] lg:h-[440px]" : "relative h-44 sm:h-52"} w-full overflow-hidden bg-[#f4f5ff]`}
        >
          <Image
            src="/images/codebase-rag-preview.png"
            alt="Codebase RAG platform interface with a natural-language query and cited answer"
            fill
            priority={large}
            sizes={large ? "(max-width: 640px) 100vw, 896px" : "(max-width: 768px) 100vw, 33vw"}
            className={large ? "object-contain" : "object-cover object-top"}
          />
        </div>
      );
    case "flowai":
      return (
        <div
          className={`${height} w-full bg-[#070707] p-6 sm:p-8 flex flex-col justify-center gap-6 relative overflow-hidden`}
        >
          <div className="flex items-center gap-2 text-white font-mono text-sm">
            <Layers className="w-5 h-5 text-[#ccff00]" />
            FlowAI architecture canvas
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
            <div className="px-4 py-3 rounded-xl bg-black border border-white/10">React UI</div>
            <div className="h-px w-8 bg-[#ccff00]/50" />
            <div className="px-4 py-3 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/40 text-[#ccff00]">
              AI Suggest
            </div>
            <div className="h-px w-8 bg-[#ccff00]/50" />
            <div className="px-4 py-3 rounded-xl bg-black border border-white/10">MySQL + JWT</div>
          </div>
        </div>
      );
    case "snapchat":
      return (
        <div
          className={`${large ? "relative h-[240px] sm:h-[360px] lg:h-[440px]" : "relative h-44 sm:h-52"} w-full overflow-hidden bg-[#f4f5ff]`}
        >
          <Image
            src="/images/snapchat-login.png"
            alt="SnapChat login screen with email and password fields"
            fill
            priority={large}
            sizes={large ? "(max-width: 640px) 100vw, 896px" : "(max-width: 768px) 100vw, 33vw"}
            className={large ? "object-contain" : "object-cover object-center"}
          />
        </div>
      );
    default:
      return (
        <div className={`${height} w-full bg-zinc-900 flex items-center justify-center`}>
          <Sparkles className="w-10 h-10 text-[#ccff00]" />
        </div>
      );
  }
}
