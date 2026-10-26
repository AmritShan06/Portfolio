import Image from "next/image";
import { Sparkles } from "lucide-react";

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
          className={`${large ? "relative h-[240px] sm:h-[360px] lg:h-[440px]" : "relative h-44 sm:h-52"} w-full overflow-hidden bg-[#0b1220]`}
        >
          <Image
            src="/images/flowai-preview.png"
            alt="FlowAI flowchart builder with diagram tools and AI suggestions"
            fill
            priority={large}
            sizes={large ? "(max-width: 640px) 100vw, 896px" : "(max-width: 768px) 100vw, 33vw"}
            className={large ? "object-contain" : "object-cover object-center"}
          />
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
