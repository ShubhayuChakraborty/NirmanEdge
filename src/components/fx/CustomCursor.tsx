import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    let mx = 0,
      my = 0;
    let dx = 0,
      dy = 0;
    let rx = 0,
      ry = 0;
    let isHover = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      isHover = !!t.closest("a,button,[data-hover]");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    let raf = 0;
    const loop = () => {
      // dot: fast lerp (0.35) — tracks closely but still smooth
      dx += (mx - dx) * 0.35;
      dy += (my - dy) * 0.35;

      // ring: slow lerp (0.1) — trails behind for a fluid feel
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;

      const dotSize = 4;
      const ringSize = isHover ? 40 : 20;

      if (dot.current) {
        dot.current.style.transform = `translate3d(${dx - dotSize / 2}px, ${dy - dotSize / 2}px, 0)`;
      }

      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx - ringSize / 2}px, ${ry - ringSize / 2}px, 0)`;
        ring.current.style.width = `${ringSize * 1.8}px`;
        ring.current.style.height = `${ringSize * 1.8}px`;
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-primary mix-blend-difference hidden md:block"
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-primary/70 mix-blend-difference hidden md:block"
        style={{ width: "36px", height: "36px" }}
      />
    </>
  );
}
