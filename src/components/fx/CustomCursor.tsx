import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let x = 0, y = 0, rx = 0, ry = 0;
    const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    window.addEventListener("mousemove", move);
    let raf = 0;
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dot.current) dot.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[data-hover]"));
    };
    window.addEventListener("mouseover", over);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (!mounted) return null;
  return (
    <>
      <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-primary mix-blend-difference hidden md:block" />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-9 w-9 rounded-full border border-primary/70 transition-transform duration-200 mix-blend-difference hidden md:block"
        style={{ scale: hover ? 1.8 : 1 } as React.CSSProperties}
      />
    </>
  );
}