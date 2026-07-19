import { useEffect, useId, useRef, type CSSProperties } from "react";
import { Check } from "lucide-react";
import type { PipelineStage } from "./data/stages.ts";

interface ProcessPipelineProps {
  stages: PipelineStage[];
  compact?: boolean;
}

const modeClasses: Record<PipelineStage["mode"], string> = {
  sketch: "pipeline-card-sketch border-zinc-600/45 bg-[#100f16]/95",
  draft: "border-teal-400/30 bg-teal-950/85 shadow-[inset_0_1px_rgba(94,234,212,0.08)]",
  proto: "pipeline-card-proto border-violet-400/35 bg-violet-950/85 shadow-[inset_0_1px_rgba(196,181,253,0.09)]",
  shipped: "border-violet-300/45 bg-[#20163a] shadow-[0_16px_36px_-22px_rgba(139,92,246,0.85)]",
};

const labelClasses: Record<PipelineStage["mode"], string> = {
  sketch: "border-zinc-600/50 text-zinc-500",
  draft: "border-teal-400/30 bg-teal-400/5 text-teal-300",
  proto: "border-violet-400/35 bg-violet-400/5 text-violet-300",
  shipped: "border-violet-300/40 bg-violet-300/10 text-violet-200",
};

function StageContent({ stage, compact }: { stage: PipelineStage; compact: boolean }) {
  const copyClass = stage.mode === "sketch" ? "pipeline-sketch-copy" : "";

  return (
    <>
      <div className="flex items-center justify-between gap-2">
        <span
          className={`rounded-full border px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.13em] ${labelClasses[stage.mode]}`}
        >
          {stage.name}
        </span>
        <span className={`pipeline-node pipeline-node-${stage.mode}`} aria-hidden />
      </div>

      <h3 className={`${copyClass} mt-3 font-display font-semibold leading-snug text-zinc-100 ${compact ? "text-sm" : "text-base"}`}>
        {stage.title}
      </h3>

      {stage.body && (
        <p className={`${copyClass} mt-2 text-xs leading-relaxed text-zinc-400`}>{stage.body}</p>
      )}

      {stage.bullets && (
        <ul className={`mt-3 space-y-2 text-zinc-300 ${compact ? "text-[11px]" : "text-xs"}`}>
          {stage.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2 leading-snug">
              {stage.mode === "draft" ? (
                <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-sm border border-teal-400/40 bg-teal-400/10 text-teal-300">
                  <Check size={9} strokeWidth={3} />
                </span>
              ) : (
                <span className="mt-1 h-2 w-2 shrink-0 border border-violet-300/50 bg-violet-400/10" aria-hidden />
              )}
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {stage.metric && (
        <div className={`mt-4 rounded-xl border border-violet-300/20 bg-ink/45 ${compact ? "p-3" : "p-4"}`}>
          <p className={`font-display font-bold tracking-tight text-violet-200 ${compact ? "text-2xl" : "text-3xl"}`}>
            {stage.metric.value}
          </p>
          <p className="mt-0.5 text-xs font-semibold text-zinc-100">{stage.metric.label}</p>
          <p className="mt-2 text-[10px] leading-relaxed text-zinc-400">{stage.metric.caption}</p>
        </div>
      )}
    </>
  );
}

export function ProcessPipeline({ stages, compact = false }: ProcessPipelineProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const gradientId = useId().replaceAll(":", "");

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          root.classList.add("pipeline-revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className={`process-pipeline relative ${compact ? "process-pipeline-compact mt-5 mb-6" : "mt-12"}`}
      style={{ "--pipeline-columns": stages.length } as CSSProperties}
      aria-label="Product development pipeline"
    >
      <svg
        className="pointer-events-none absolute bottom-3 left-0 top-3 z-0 w-8 md:hidden"
        viewBox="0 0 32 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`${gradientId}-vertical`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#71717a" />
            <stop offset="0.35" stopColor="#5eead4" />
            <stop offset="0.7" stopColor="#a78bfa" />
            <stop offset="1" stopColor="#ddd6fe" />
          </linearGradient>
        </defs>
        <path className="pipeline-connector-base" d="M16 0 V100" pathLength="1" />
        <path
          className="pipeline-connector-draw"
          d="M16 0 V100"
          pathLength="1"
          stroke={`url(#${gradientId}-vertical)`}
        />
      </svg>
      <svg
        className="pointer-events-none absolute left-3 right-3 top-7 z-0 hidden h-8 w-auto md:block"
        viewBox="0 0 100 32"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`${gradientId}-horizontal`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#71717a" />
            <stop offset="0.35" stopColor="#5eead4" />
            <stop offset="0.7" stopColor="#a78bfa" />
            <stop offset="1" stopColor="#ddd6fe" />
          </linearGradient>
        </defs>
        <path className="pipeline-connector-base" d="M0 16 H100" pathLength="1" />
        <path
          className="pipeline-connector-draw"
          d="M0 16 H100"
          pathLength="1"
          stroke={`url(#${gradientId}-horizontal)`}
        />
      </svg>

      <ol className="pipeline-track relative z-10 grid gap-4 pl-10 md:gap-3 md:pl-0">
        {stages.map((stage, index) => (
          <li
            key={`${stage.name}-${index}`}
            className={`pipeline-stage min-w-0 rounded-xl border ${modeClasses[stage.mode]} ${compact ? "p-3" : "p-4"}`}
            style={{ "--pipeline-delay": `${180 + index * 100}ms` } as CSSProperties}
          >
            <StageContent stage={stage} compact={compact} />
          </li>
        ))}
      </ol>
    </div>
  );
}
