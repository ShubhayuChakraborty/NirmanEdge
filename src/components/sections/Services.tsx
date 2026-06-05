import Tilt from "react-parallax-tilt";
import { Reveal } from "@/components/fx/Reveal";
import { Building2, Building, Waypoints, Sofa, ClipboardList, Cpu } from "lucide-react";

const services = [
  { icon: Building2, t: "Residential Construction", d: "Bespoke towers and gated estates designed for lifetime value." },
  { icon: Building, t: "Commercial Projects", d: "Headquarters, mixed-use districts and retail destinations." },
  { icon: Waypoints, t: "Infrastructure", d: "Bridges, transit hubs and civic works built to last centuries." },
  { icon: Sofa, t: "Interior Design", d: "Material-led interiors with bespoke lighting and acoustics." },
  { icon: ClipboardList, t: "Project Management", d: "End-to-end delivery with transparent reporting and KPIs." },
  { icon: Cpu, t: "Smart Buildings", d: "IoT, energy automation and AI-driven facility intelligence." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-60 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Expertise</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold max-w-3xl leading-[1.05]">
            Six disciplines. <span className="text-gradient">One studio.</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.06}>
              <Tilt
                glareEnable
                glareMaxOpacity={0.18}
                glareColor="#0064B4"
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                transitionSpeed={1200}
                className="h-full"
              >
                <div className="group h-full glass rounded-3xl p-8 relative overflow-hidden hover:bg-white/[0.06] transition-colors">
                  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 grid place-items-center text-primary">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">{s.t}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{s.d}</p>
                  <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Discover →
                  </div>
                  <p className="absolute bottom-6 right-6 font-display text-5xl text-white/5 font-bold">0{i + 1}</p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}