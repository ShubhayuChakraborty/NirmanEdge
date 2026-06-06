import { motion } from "framer-motion";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { ArrowRight, Compass } from "lucide-react";
import heroVideo from "@/assets/hero1.mp4";

export function Hero() {
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-36 text-center px-6 pointer-events-none">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white mb-6 glass rounded-full px-4 py-2"
        >
          ✦ Est. 2000 — Building Iconic Futures
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-52 max-w-xl text-sm md:text-base text-white/70"
        >
          Engineering Tomorrow&apos;s Landmarks — luxury construction, architecture and
          infrastructure solutions for the world&apos;s most ambitious projects.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 flex flex-wrap gap-4 justify-center pointer-events-auto"
        >
          <MagneticButton
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Projects <ArrowRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton
            variant="ghost"
            onClick={() =>
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Compass className="h-4 w-4" /> Our Expertise
          </MagneticButton>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-white/60 flex flex-col items-center gap-2"
      >
        Scroll
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="h-8 w-px bg-linear-to-b from-primary to-transparent"
        />
      </motion.div>
      <div
        className="absolute top-1/2 left-6 -translate-y-1/2 text-[10px] uppercase tracking-[0.4em] text-white/50 hidden md:block rotate-180"
        style={{ writingMode: "vertical-rl" }}
      >
        Site of the Future
      </div>
      <div
        className="absolute top-1/2 right-6 -translate-y-1/2 text-[10px] uppercase tracking-[0.4em] text-white/50 hidden md:block"
        style={{ writingMode: "vertical-rl" }}
      >
        24 / 175 Skyline
      </div>
    </section>
  );
}
