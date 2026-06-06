const cols = [
  { h: "Studio", l: ["About", "Team", "Careers", "Press"] },
  { h: "Services", l: ["Residential", "Commercial", "Infrastructure", "Smart Buildings"] },
  { h: "Projects", l: ["Aether Tower", "Helix Bridge", "Atrium Grand", "Northstar"] },
];

const socials = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.225 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="relative pt-32 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <p className="font-display text-3xl font-bold">
              Nirman<span className="text-primary">Edge</span>
            </p>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Engineering tomorrow&apos;s landmarks — one millimetre, one city, one quarter-century
              at a time.
            </p>
            {/* Social icons */}
            <div className="mt-6 flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="h-9 w-9 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4 ">{c.h}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {c.l.map((x) => (
                  <li key={x}>
                    <a href="#" className="hover:text-foreground transition-colors">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="font-display font-bold text-[clamp(3rem,15vw,16rem)] leading-none tracking-tighter text-black/10 dark:text-white/10 -ml-4 overflow-hidden">
          NIRMANEDGE
        </div>
        <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground text-center sm:text-left">
          <p>© {new Date().getFullYear()} NirmanEdge Studio. All rights reserved.</p>
          <p>Mumbai · Dubai · Singapore · London</p>
        </div>
      </div>
    </footer>
  );
}
