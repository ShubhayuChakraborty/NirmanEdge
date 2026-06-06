import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PANELS = 5;

export function ShutterLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 3200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[99999] flex pointer-events-none">
          {Array.from({ length: PANELS }).map((_, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-black origin-top flex items-center justify-center"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{
                duration: 1.3,
                ease: [0.76, 0, 0.24, 1],
                delay: 1.0 + i * 0.1,
              }}
            >
              {/* Show logo only in the middle panel */}
              {i === Math.floor(PANELS / 2) && (
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 origin-top"
                >
                  <p className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-white">
                    Nirman<span className="text-primary">Edge</span>
                  </p>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
                    className="h-px w-48 bg-linear-to-r from-transparent via-primary to-transparent origin-left"
                  />
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white/50">
                    Engineering Tomorrow&apos;s Landmarks
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
