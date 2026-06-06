import { Reveal, Counter } from "@/components/fx/Reveal";

const stats = [
  { v: 500, s: "+", label: "Landmark Projects" },
  { v: 25, s: "+", label: "Years of Mastery" },
  { v: 50, s: "+", label: "Cities Worldwide" },
  { v: 98, s: "%", label: "Client Satisfaction" },
];

const timeline = [
  { y: "2000", t: "Founded in Mumbai with a single residential tower." },
  { y: "2008", t: "First international project — a mixed-use district in Dubai." },
  { y: "2015", t: "Launched in-house smart building & sustainability lab." },
  { y: "2022", t: "Crossed 500 delivered projects across 50 cities." },
  { y: "2026", t: "Pioneering AI-driven construction digital twins." },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">About NirmanEdge</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
              A studio for builders of the <span className="text-gradient">extraordinary</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
              For 25 years, NirmanEdge has stood at the intersection of structural engineering,
              architectural vision and uncompromising craft. We don't pour concrete — we sculpt cities.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-6 mt-12">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="glass rounded-2xl p-6">
                  <p className="font-display text-4xl md:text-5xl font-bold text-gradient">
                    <Counter to={s.v} suffix={s.s} />
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal>
          <div className="aspect-square rounded-3xl overflow-hidden relative border border-white/10">
            <img
              src="https://plus.unsplash.com/premium_photo-1694475386078-af18b0f90223?q=80&w=687&auto=format&fit=crop"
              alt="NirmanEdge Architecture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.3em] text-white/60 pointer-events-none">
              ◉ Live Digital Twin
            </div>
          </div>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto mt-32">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Timeline</p>
          <h3 className="font-display text-3xl md:text-5xl font-bold mb-16">A quarter century in motion.</h3>
        </Reveal>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
          {timeline.map((e, i) => (
            <Reveal key={e.y} delay={i * 0.06}>
              <div className={`relative flex items-center mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                  <p className="font-display text-3xl text-primary font-bold">{e.y}</p>
                  <p className="mt-2 text-muted-foreground">{e.t}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary shadow-[0_0_20px_rgba(0,100,180,0.8)]" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}