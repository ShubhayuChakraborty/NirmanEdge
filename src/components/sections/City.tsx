import { Reveal } from "@/components/fx/Reveal";

export function City() {
  return (
    <section id="city" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
              The Living Grid
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold max-w-3xl leading-[1.05]">
              A city, built in <span className="text-gradient">real-time</span>.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Every project becomes a node in our digital twin. Hover the skyline to feel the pulse.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
            <iframe
              src="/3d_building_scene.html"
              title="3D City Scene"
              className="w-full h-full"
              style={{ border: "none" }}
              loading="lazy"
            />
            <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground glass rounded-full px-3 py-2 pointer-events-none">
              ◉ Live · 24 active sites
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
