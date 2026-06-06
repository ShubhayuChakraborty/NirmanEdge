import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/fx/Reveal";
import { Quote } from "lucide-react";
import ownerImg from "@/assets/owner.png";

const items = [
  {
    q: "NirmanEdge delivered our flagship six weeks early. The craft is unmatched.",
    a: "Ananya Rao",
    r: "CEO, Meridian Group",
    img: null,
  },
  {
    q: "They turned a 92-story dream into a living, breathing landmark.",
    a: "Atanu Bhattacharya",
    r: "Founder & Principal, NirmanEdge",
    img: ownerImg,
  },
  {
    q: "Transparent, precise and quietly brilliant — the gold standard.",
    a: "Linh Tran",
    r: "Director, BR Capital",
    img: null,
  },
];

function Avatar({ name, img }: { name: string; img: string | null }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (img) {
    return (
      <img
        src={img}
        alt={name}
        className="h-12 w-12 rounded-full object-cover border-2 border-primary/30"
      />
    );
  }

  return (
    <div className="h-12 w-12 rounded-full bg-primary/20 border-2 border-primary/30 grid place-items-center text-primary font-display font-bold text-sm">
      {initials}
    </div>
  );
}

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
        <div className="relative h-[280px]">
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
              <div className="mt-8 flex items-center justify-center gap-4">
                <Avatar name={items[i].a} img={items[i].img} />
                <div className="text-left">
                  <p className="text-foreground font-semibold text-sm">{items[i].a}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{items[i].r}</p>
                </div>
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
