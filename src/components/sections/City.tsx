import { lazy, Suspense, useState } from "react";
import { Reveal } from "@/components/fx/Reveal";
import { Sun, Moon } from "lucide-react";

const MiniCity = lazy(() => import("@/components/3d/MiniCity"));

export function City() {
  const [night, setNight] = useState(true);
  return (
    <section id="city" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">The Living Grid</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold max-w-3xl leading-[1.05]">
              A city, built in <span className="text-gradient">real-time</span>.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Every project becomes a node in our digital twin. Hover the skyline to feel the pulse.
            </p>
          </Reveal>
          <button
            onClick={() => setNight(!night)}
            className="glass rounded-full px-5 py-3 text-xs uppercase tracking-[0.3em] flex items-center gap-2 hover:bg-white/10 transition-colors"
          >
            {night ? <Moon className="h-4 w-4 text-primary" /> : <Sun className="h-4 w-4 text-primary" />}
            {night ? "Night" : "Day"}
          </button>
        </div>
        <Reveal>
          <div className="relative aspect-video glass rounded-3xl overflow-hidden">
            <Suspense fallback={<div className="h-full w-full bg-black" />}>
              <MiniCity />
            </Suspense>
            <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground glass rounded-full px-3 py-2">
              ◉ Live · 24 active sites
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}