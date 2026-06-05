const cols = [
  { h: "Studio", l: ["About", "Team", "Careers", "Press"] },
  { h: "Services", l: ["Residential", "Commercial", "Infrastructure", "Smart Buildings"] },
  { h: "Projects", l: ["Aether Tower", "Helix Bridge", "Atrium Grand", "Northstar"] },
  { h: "Social", l: ["Instagram", "LinkedIn", "Behance", "Vimeo"] },
];

export function Footer() {
  return (
    <footer className="relative pt-32 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <p className="font-display text-3xl font-bold">Nirman<span className="text-primary">Edge</span></p>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Engineering tomorrow's landmarks — one millimetre, one city, one quarter-century at a time.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">{c.h}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {c.l.map((x) => (
                  <li key={x}><a href="#" className="hover:text-foreground transition-colors">{x}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="font-display font-bold text-[clamp(4rem,18vw,16rem)] leading-none text-white/[0.04] tracking-tighter">
          NIRMANEDGE
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} NirmanEdge Studio. All rights reserved.</p>
          <p>Mumbai · Dubai · Singapore · London</p>
        </div>
      </div>
    </footer>
  );
}