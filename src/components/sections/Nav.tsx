import { motion } from "framer-motion";

const links = ["About", "Services", "Projects", "City", "Contact"];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between glass rounded-full px-6 py-3">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Nirman<span className="text-primary">Edge</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <a href="#contact" className="text-xs uppercase tracking-[0.18em] rounded-full bg-primary text-primary-foreground px-4 py-2 hover:bg-primary-glow transition-colors">
          Start a project
        </a>
      </div>
    </motion.header>
  );
}