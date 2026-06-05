import { Reveal } from "@/components/fx/Reveal";
import { Lightbulb, Crosshair, Leaf, Eye, Award, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { icon: Lightbulb, t: "Innovation", d: "R&D-led building science." },
  { icon: Crosshair, t: "Precision", d: "Millimetre-accurate execution." },
  { icon: Leaf, t: "Sustainability", d: "Net-zero by 2030 across portfolio." },
  { icon: Eye, t: "Transparency", d: "Real-time client dashboards." },
  { icon: Award, t: "Quality", d: "Award-winning craft, every site." },
  { icon: ShieldCheck, t: "Safety", d: "Zero-incident philosophy." },
];

export function WhyUs() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Why NirmanEdge</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold max-w-3xl leading-[1.05]">
            Six commitments. <span className="text-gradient">Non-negotiable.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="glass rounded-3xl p-8 group relative overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <v.icon className="h-8 w-8 text-primary mb-6" />
                <h3 className="font-display text-2xl font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}