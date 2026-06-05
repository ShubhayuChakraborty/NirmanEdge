import { useRef, type ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function MagneticButton({ children, variant = "primary", className = "", ...rest }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };

  const base = "relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide uppercase rounded-full transition-[transform,background,color] duration-300 will-change-transform";
  const styles = variant === "primary"
    ? "bg-primary text-primary-foreground hover:bg-primary-glow shadow-[var(--shadow-glow)]"
    : "glass text-foreground hover:bg-white/10";

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`${base} ${styles} ${className}`}
      whileTap={{ scale: 0.96 }}
      {...(rest as any)}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}