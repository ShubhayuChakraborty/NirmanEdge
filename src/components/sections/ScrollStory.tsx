import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  { n: "01", title: "Blueprint", body: "Every landmark begins with a precise vision. Our architects translate ambition into millimetre-perfect drawings." },
  { n: "02", title: "Foundation", body: "Seismic-grade engineering, deep-pile foundations and structural ingenuity that will outlast generations." },
  { n: "03", title: "Structure", body: "Steel and concrete rise in choreographed sequence, monitored by our digital twin command center." },
  { n: "04", title: "Interior", body: "Material craft, climate intelligence and lighting design for spaces that feel as good as they look." },
  { n: "05", title: "Reveal", body: "We deliver landmarks that define skylines and stand as quiet statements of what is possible." },
];

export function ScrollStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);
  return (
    <section ref={ref} className="relative bg-black py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">The Process</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold max-w-3xl">
          From the first <span className="text-gradient">blueprint</span> to the final reveal.
        </h2>
      </div>
      <motion.div style={{ x }} className="flex gap-8 px-6 will-change-transform">
        {steps.map((s) => (
          <div key={s.n} className="min-w-[80vw] md:min-w-[40vw] glass rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <p className="text-7xl font-display font-bold text-primary/30">{s.n}</p>
            <h3 className="mt-6 font-display text-3xl md:text-4xl font-semibold">{s.title}</h3>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">{s.body}</p>
            <div className="mt-10 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}