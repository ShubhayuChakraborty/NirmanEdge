import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["About", "Services", "Projects", "City", "Contact"];

export function Nav() {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("nirmanedge-theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const nextIsDark = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", nextIsDark);
    setIsDark(nextIsDark);

    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      window.localStorage.setItem("nirmanedge-theme", next ? "dark" : "light");
      return next;
    });
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-12 py-4"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 glass ${scrolled ? "shadow-lg" : ""}`}
        >
          {/* Logo */}
          <a
            href="#top"
            className="font-display text-lg font-semibold tracking-tight text-black dark:text-white"
            onClick={closeMenu}
          >
            Nirman<span className="text-primary">Edge</span>
          </a>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.18em] text-black/70 dark:text-white/70"
          >
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-pressed={isDark}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="text-[10px] uppercase tracking-[0.32em] rounded-full border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10 px-4 py-2 text-black dark:text-white transition-colors hover:bg-black/20 dark:hover:bg-white/20"
            >
              {isDark ? "Light" : "Dark"}
            </button>
            <a
              href="#contact"
              className="text-xs uppercase tracking-[0.18em] rounded-full bg-primary text-primary-foreground px-4 py-2 hover:bg-primary-glow transition-colors"
            >
              Start a project
            </a>
          </div>

          {/* Mobile actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-pressed={isDark}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="text-[9px] uppercase tracking-[0.2em] rounded-full border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10 px-3 py-1.5 text-black dark:text-white"
            >
              {isDark ? "Light" : "Dark"}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="h-9 w-9 rounded-full glass flex items-center justify-center text-black dark:text-white"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((l, i) => (
                <motion.a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="font-display text-3xl font-bold text-black dark:text-white hover:text-primary transition-colors"
                >
                  {l}
                </motion.a>
              ))}
            </nav>
            <motion.a
              href="#contact"
              onClick={closeMenu}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.07 }}
              className="mt-4 text-xs uppercase tracking-[0.18em] rounded-full bg-primary text-primary-foreground px-8 py-3 hover:bg-primary-glow transition-colors"
            >
              Start a project
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
