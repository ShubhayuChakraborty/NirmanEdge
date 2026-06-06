import { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Blueprint",
    body: "Every landmark begins with a precise vision. Our architects translate ambition into millimetre-perfect drawings.",
  },
  {
    n: "02",
    title: "Foundation",
    body: "Seismic-grade engineering, deep-pile foundations and structural ingenuity that will outlast generations.",
  },
  {
    n: "03",
    title: "Structure",
    body: "Steel and concrete rise in choreographed sequence, monitored by our digital twin command center.",
  },
  {
    n: "04",
    title: "Interior",
    body: "Material craft, climate intelligence and lighting design for spaces that feel as good as they look.",
  },
  {
    n: "05",
    title: "Reveal",
    body: "We deliver landmarks that define skylines and stand as quiet statements of what is possible.",
  },
];

export function ScrollStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [maxScroll, setMaxScroll] = useState(0);

  useLayoutEffect(() => {
    const update = () => {
      if (!trackRef.current) return;

      const totalWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      setMaxScroll(totalWidth - viewportWidth);
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScroll]);

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-white dark:bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div ref={trackRef} style={{ x }} className="flex gap-8 px-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="min-w-[80vw] md:min-w-[40vw] bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-10 md:p-14"
            >
              <p className="text-7xl font-bold text-primary/30">{s.n}</p>
              <h3 className="mt-6 text-3xl md:text-4xl font-semibold">{s.title}</h3>
              <p className="mt-4 opacity-70">{s.body}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
