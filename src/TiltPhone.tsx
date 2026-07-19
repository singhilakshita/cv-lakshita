import { useEffect, useRef } from "react";
import { TrendingUp, CreditCard, Sparkles } from "lucide-react";

const MAX_TILT_DEG = 14;
const BASE = { rx: 8, ry: -12 };

/**
 * 3D phone mockup for the hero. Pure CSS perspective transforms —
 * no WebGL payload for a decorative element. Three motion sources compose:
 * an idle float (CSS keyframes on the wrapper), scroll-driven sway, and
 * pointer tilt — the latter two write transforms directly to the DOM via
 * rAF so scrolling never re-renders React.
 */
export function TiltPhone() {
  const frameRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const pointer = useRef<{ rx: number; ry: number } | null>(null);
  const raf = useRef(0);

  useEffect(() => {
    const phone = phoneRef.current;
    if (!phone) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const apply = () => {
      raf.current = 0;
      // Pointer wins while hovering; otherwise sway back and forth with scroll.
      const sway = Math.sin(window.scrollY / 180) * 10;
      const { rx, ry } = pointer.current ?? { rx: BASE.rx, ry: BASE.ry + sway };
      phone.style.transform = `rotateX(${rx.toFixed(1)}deg) rotateY(${ry.toFixed(1)}deg)`;
    };
    const schedule = () => {
      if (!raf.current) raf.current = requestAnimationFrame(apply);
    };

    apply();
    if (reduced) return;
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      window.removeEventListener("scroll", schedule);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  function onPointerMove(e: React.PointerEvent) {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height;
    pointer.current = {
      rx: (0.5 - py) * 2 * MAX_TILT_DEG,
      ry: (px - 0.5) * 2 * MAX_TILT_DEG,
    };
    if (phoneRef.current) {
      phoneRef.current.style.transform = `rotateX(${pointer.current.rx.toFixed(1)}deg) rotateY(${pointer.current.ry.toFixed(1)}deg)`;
    }
    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.2), transparent 60%)`;
    }
  }

  function onPointerLeave() {
    pointer.current = null;
    if (phoneRef.current) {
      phoneRef.current.style.transform = `rotateX(${BASE.rx}deg) rotateY(${BASE.ry}deg)`;
    }
    if (glareRef.current) {
      glareRef.current.style.background =
        "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.12), transparent 60%)";
    }
  }

  return (
    <div
      ref={frameRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="phone-float mt-2 flex select-none justify-center lg:mt-0"
      style={{ perspective: "1100px" }}
      aria-hidden
    >
      <div
        ref={phoneRef}
        className="glow-pulse relative h-[360px] w-[180px] rounded-[2rem] border border-line bg-card shadow-2xl shadow-accent/10 transition-transform duration-150 ease-out sm:h-[420px] sm:w-[210px]"
        style={{ transform: `rotateX(${BASE.rx}deg) rotateY(${BASE.ry}deg)`, transformStyle: "preserve-3d" }}
      >
        {/* glare */}
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 rounded-[2rem]"
          style={{
            background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.12), transparent 60%)",
          }}
        />
        {/* punch-hole camera */}
        <div className="absolute left-1/2 top-3 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-ink" />

        {/* screen */}
        <div className="absolute inset-2 top-8 flex flex-col gap-2.5 overflow-hidden rounded-[1.4rem] bg-surface p-3">
          <p className="font-display text-[11px] font-bold text-zinc-400">
            lakshita<span className="text-accent">.</span>pm
          </p>

          <div className="rounded-xl bg-card p-2.5">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-accent">
              <TrendingUp size={11} className="nav-wiggle" /> Club Dice · growth
            </div>
            {/* ascending product-metrics bar chart */}
            <div className="mt-2 flex h-10 items-end gap-1">
              <div className="flex-1 rounded-sm bg-accent/30" style={{ height: "35%" }} />
              <div className="flex-1 rounded-sm bg-accent/45" style={{ height: "50%" }} />
              <div className="flex-1 rounded-sm bg-accent/60" style={{ height: "62%" }} />
              <div className="flex-1 rounded-sm bg-accent/75" style={{ height: "80%" }} />
              <div className="flex-1 rounded-sm bg-accent" style={{ height: "100%" }} />
            </div>
            <p className="mt-1.5 text-[9px] text-zinc-500">+30% engagement · +25% MAU</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl bg-card p-2.5">
              <p className="font-display text-base font-bold text-accent">50K</p>
              <p className="text-[9px] leading-tight text-zinc-500">consumers launched</p>
            </div>
            <div className="rounded-xl bg-card p-2.5">
              <p className="font-display text-base font-bold text-accent">$2.8M</p>
              <p className="text-[9px] leading-tight text-zinc-500">savings identified</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 rounded-xl bg-card p-2.5 text-[10px] text-zinc-400">
            <CreditCard size={11} className="shrink-0 text-accent" /> 12+ enterprise clients · 10K+ cards
          </div>
          <div className="flex items-center gap-1.5 rounded-xl bg-card p-2.5 text-[10px] text-zinc-400">
            <Sparkles size={11} className="shrink-0 text-accent" /> AI-native PRDs & prototyping
          </div>
        </div>
      </div>
    </div>
  );
}
