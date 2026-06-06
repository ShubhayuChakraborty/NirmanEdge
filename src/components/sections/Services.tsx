import { lazy, Suspense, useRef, useState } from "react";
import { Reveal } from "@/components/fx/Reveal";
import { Building2, Building, Waypoints, Sofa, ClipboardList, Cpu } from "lucide-react";
import heroVideo from "@/assets/hero1.mp4";

const Tilt = lazy(() => import("react-parallax-tilt").then((m) => ({ default: m.default ?? m })));

const services = [
  {
    icon: Building2,
    t: "Residential Construction",
    d: "Bespoke towers and gated estates designed for lifetime value.",
    video: heroVideo,
  },
  {
    icon: Building,
    t: "Commercial Projects",
    d: "Headquarters, mixed-use districts and retail destinations.",
    video: heroVideo,
  },
  {
    icon: Waypoints,
    t: "Infrastructure",
    d: "Bridges, transit hubs and civic works built to last centuries.",
    video: heroVideo,
  },
  {
    icon: Sofa,
    t: "Interior Design",
    d: "Material-led interiors with bespoke lighting and acoustics.",
    video: heroVideo,
  },
  {
    icon: ClipboardList,
    t: "Project Management",
    d: "End-to-end delivery with transparent reporting and KPIs.",
    video: heroVideo,
  },
  {
    icon: Cpu,
    t: "Smart Buildings",
    d: "IoT, energy automation and AI-driven facility intelligence.",
    video: heroVideo,
  },
];

function ServiceCard({ s, i }: { s: (typeof services)[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Suspense fallback={<div className="h-full glass rounded-3xl p-8" />}>
      <Tilt
        glareEnable
        glareMaxOpacity={0.18}
        glareColor="#0064B4"
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        transitionSpeed={1200}
        className="h-full"
      >
        <div
          className="group h-full glass rounded-3xl p-8 relative overflow-hidden cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Video overlay */}
          <video
            ref={videoRef}
            src={s.video}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 rounded-3xl"
            style={{ opacity: hovered ? 0.35 : 0 }}
          />

          {/* Dark overlay on hover */}
          <div
            className="absolute inset-0 bg-black rounded-3xl transition-opacity duration-500"
            style={{ opacity: hovered ? 0.5 : 0 }}
          />

          {/* Glow */}
          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Content */}
          <div className="relative z-10">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 grid place-items-center text-primary">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold">{s.t}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm group-hover:text-white/80 transition-colors duration-300">
              {s.d}
            </p>
            <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Discover →
            </div>
          </div>

          <p className="absolute bottom-6 right-6 font-display text-5xl text-white/5 font-bold z-10">
            0{i + 1}
          </p>
        </div>
      </Tilt>
    </Suspense>
  );
}

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
              <ServiceCard s={s} i={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
