import { useEffect, useRef, useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroStages } from "./data/stages.ts";

export function LaptopSlideshow() {
  const [current, setCurrent] = useState(0);
  const progressRef = useRef(0);
  const rafRef = useRef(0);

  const slides = useMemo(() => heroStages.slice(0, -1), []);

  useEffect(() => {
    const duration = 5000;
    const start = performance.now();
    let lastProgress = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = (elapsed % duration) / duration;
      
      if (progress < lastProgress) {
        setCurrent((c) => (c + 1) % slides.length);
      }
      lastProgress = progress;
      progressRef.current = progress;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [slides.length]);

  const goPrev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((c) => (c + 1) % slides.length);

  const currentSlide = slides[current];

  return (
    <div className="relative mx-auto max-w-md" aria-hidden="true">
      <div className="laptop-frame relative">
        <div className="laptop-lid" />
        <div className="laptop-body relative">
          <div className="laptop-screen rounded-xl bg-zinc-950 border border-zinc-800 overflow-hidden">
            <div className="screen-header flex items-center justify-between px-3 py-2 border-b border-zinc-800 bg-zinc-900">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                <span>figma</span>
                <span className="text-accent/60">Ambiguous → Shipped</span>
              </div>
            </div>
            
            <div className="screen-content p-4 md:p-6 h-[380px] md:h-[420px] flex flex-col">
              <div className="flex items-center justify-between gap-2 mb-4 md:mb-6">
                <span className={`rounded-full border px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.13em] ${
                  currentSlide.mode === "sketch" ? "border-zinc-600/50 text-zinc-500 bg-zinc-900/50" :
                  currentSlide.mode === "draft" ? "border-teal-400/30 bg-teal-400/5 text-teal-300" :
                  "border-violet-400/35 bg-violet-400/5 text-violet-300"
                }`}>
                  {currentSlide.name}
                </span>
                <div className="flex items-center gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        i === current
                          ? "bg-accent w-5"
                          : "bg-zinc-600/50 hover:bg-zinc-400"
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex-1 overflow-y-auto pr-1">
                <h3 className={`font-display font-semibold leading-snug text-zinc-100 ${currentSlide.mode === "sketch" ? "italic text-zinc-400" : ""} mb-3 md:mb-4`}>
                  {currentSlide.title}
                </h3>

                {currentSlide.body && (
                  <p className={`text-sm leading-relaxed text-zinc-400 ${currentSlide.mode === "sketch" ? "italic" : ""} mb-4`}>
                    {currentSlide.body}
                  </p>
                )}

                {currentSlide.bullets && (
                  <ul className="space-y-2.5 text-sm text-zinc-300">
                    {currentSlide.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                        {currentSlide.mode === "draft" ? (
                          <svg className="w-4 h-4 shrink-0 text-teal-400 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        ) : (
                          <div className="w-1.5 h-1.5 shrink-0 mt-1.5 rounded-sm border border-violet-300/50 bg-violet-400/10" aria-hidden />
                        )}
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {currentSlide.metric && (
                <div className="mt-4 md:mt-6 rounded-xl border border-violet-300/20 bg-zinc-950/50 p-3 md:p-4 animate-slide-up">
                  <p className="font-display font-bold tracking-tight text-violet-200 text-2xl md:text-3xl">
                    {currentSlide.metric.value}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-zinc-100">{currentSlide.metric.label}</p>
                  <p className="mt-1.5 text-[10px] leading-relaxed text-zinc-400">{currentSlide.metric.caption}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="laptop-trackpad w-20 h-3 rounded-full bg-zinc-800/50 mt-3 mx-auto" />
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 translate-y-1/2">
        <button
          onClick={goPrev}
          className="p-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-accent transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={goNext}
          className="p-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-accent transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

    </div>
  );
}