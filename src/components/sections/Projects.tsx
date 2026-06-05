import { motion } from "framer-motion";
import { Reveal } from "@/components/fx/Reveal";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { img: p1, t: "Aether Tower", loc: "Mumbai · 2024", cat: "Residential", h: "92F" },
  { img: p2, t: "Helix Bridge", loc: "Dubai · 2023", cat: "Infrastructure", h: "1.2 km" },
  { img: p3, t: "Atrium Grand", loc: "Singapore · 2025", cat: "Hospitality", h: "240 keys" },
  { img: p4, t: "Northstar District", loc: "London · 2026", cat: "Mixed-Use", h: "6 blocks" },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto flex items-end justify-between mb-16 flex-wrap gap-6">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Selected Works</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold max-w-3xl leading-[1.05]">
            Landmarks we've <span className="text-gradient">delivered</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <a href="#contact" className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground flex items-center gap-2">
            View all archive <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.t} delay={(i % 2) * 0.1}>
            <motion.a
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              href="#contact"
              className="group relative block aspect-[4/3] overflow-hidden rounded-3xl glass"
            >
              <motion.img
                src={p.img}
                alt={p.t}
                loading="lazy"
                width={1280}
                height={896}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary mb-3">
                  <span className="h-px w-6 bg-primary" /> {p.cat}
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold">{p.t}</h3>
                <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
                  <span>{p.loc}</span>
                  <span>{p.h}</span>
                </div>
              </div>
              <div className="absolute top-6 right-6 h-12 w-12 rounded-full glass grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}