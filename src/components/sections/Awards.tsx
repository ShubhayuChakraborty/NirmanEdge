import { Reveal } from "@/components/fx/Reveal";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

const awards = [
  { y: "2025", t: "Awwwards Site of the Year", o: "Construction" },
  { y: "2024", t: "Architectural Digest 100", o: "Global Firms" },
  { y: "2024", t: "LEED Platinum", o: "Aether Tower" },
  { y: "2023", t: "RIBA Excellence", o: "Helix Bridge" },
  { y: "2022", t: "Dezeen Awards", o: "Best Mixed-Use" },
  { y: "2021", t: "WAF Future Project", o: "Northstar District" },
];

export function Awards() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Recognition</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold max-w-3xl leading-[1.05]">
            A trophy wall, quietly <span className="text-gradient">earned</span>.
          </h2>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((a, i) => (
            <Reveal key={a.t} delay={i * 0.05}>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                className="glass rounded-2xl p-6 flex items-center gap-4 relative overflow-hidden"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center">
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold">{a.t}</p>
                  <p className="text-xs text-muted-foreground">{a.y} · {a.o}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}