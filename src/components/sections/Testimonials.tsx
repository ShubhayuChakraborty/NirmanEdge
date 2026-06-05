import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/fx/Reveal";
import { Quote } from "lucide-react";

const items = [
  { q: "NirmanEdge delivered our flagship six weeks early. The craft is unmatched.", a: "Ananya Rao", r: "CEO, Meridian Group" },
  { q: "They turned a 92-story dream into a living, breathing landmark.", a: "Karim El-Sayed", r: "Principal, ZSA Architects" },
  { q: "Transparent, precise and quietly brilliant — the gold standard.", a: "Linh Tran", r: "Director, BR Capital" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-40 pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative" style={{ perspective: 1200 }}>
        <Reveal>
          <Quote className="h-10 w-10 text-primary mx-auto mb-8" />
        </Reveal>
        <div className="relative h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateY: 60, y: 40 }}
              animate={{ opacity: 1, rotateY: 0, y: 0 }}
              exit={{ opacity: 0, rotateY: -60, y: -40 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 glass rounded-3xl p-10 md:p-14 flex flex-col justify-center"
            >
              <p className="font-display text-2xl md:text-3xl leading-snug">{items[i].q}</p>
              <div className="mt-8 text-sm text-muted-foreground">
                <p className="text-foreground font-medium">{items[i].a}</p>
                <p>{items[i].r}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-1.5 bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}