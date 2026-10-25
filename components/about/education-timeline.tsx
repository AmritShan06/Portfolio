import { portfolioData } from "@/data/portfolio";
import { BookOpen, Calendar, MapPin } from "lucide-react";

export function EducationTimeline() {
  const { education } = portfolioData;

  return (
    <div className="relative">
      <div className="hidden md:block absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-[#ccff00]/50 via-white/10 to-transparent" />

      <div className="space-y-6">
        {education.map((item) => (
          <div
            key={item.institution}
            className="relative md:pl-12"
          >
            <div
              className="hidden md:flex absolute left-0 top-6 w-10 h-10 rounded-full bg-black border-2 border-[#ccff00]/50 items-center justify-center shadow-[0_0_12px_rgba(204,255,0,0.25)]"
              aria-hidden
            >
              <span className="w-2 h-2 rounded-full bg-[#ccff00]" />
            </div>

            <div className="card-dark rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-white/[0.08]">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center text-zinc-400 md:hidden">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{item.institution}</h3>
                    <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">{item.degree}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 font-mono pt-3 border-t border-white/[0.06]">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                  {item.duration}
                </span>
                {item.location && (
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#ccff00]" />
                    {item.location}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
