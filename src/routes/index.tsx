import { createFileRoute } from "@tanstack/react-router";
import { LenisProvider } from "@/components/fx/LenisProvider";
import { CustomCursor } from "@/components/fx/CustomCursor";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { lazy, Suspense } from "react";
const ScrollStory = lazy(() => import("@/components/sections/ScrollStory").then(m => ({ default: m.ScrollStory })));
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { City } from "@/components/sections/City";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Awards } from "@/components/sections/Awards";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NirmanEdge — Engineering Tomorrow's Landmarks" },
      { name: "description", content: "NirmanEdge is a luxury construction studio crafting iconic skyscrapers, infrastructure and interiors across 50+ cities." },
      { property: "og:title", content: "NirmanEdge — Engineering Tomorrow's Landmarks" },
      { property: "og:description", content: "Luxury construction, architecture and infrastructure for the world's most ambitious projects." },
    ],
  }),
  component: Index,
});

function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="relative flex items-center justify-center h-8">
        {/* Upward light beam */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] h-8 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 100% at 50% 100%, oklch(0.52 0.18 245 / 0.18), transparent 80%)",
          }}
        />
        {/* Line */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
      </div>
    </div>
  );
}

function Index() {
  return (
    <Suspense fallback={null}>
      <LenisProvider>
        <Suspense fallback={null}><CustomCursor /></Suspense>
        <main className="relative bg-background text-foreground">
          <Nav />
          <Hero />
          <Divider />
          <Suspense fallback={null}><ScrollStory /></Suspense>
          <Divider />
          <About />
          <Divider />
          <Services />
          <Divider />
          <Projects />
          <Divider />
          <City />
          <Divider />
          <WhyUs />
          <Divider />
          <Testimonials />
          <Divider />
          <Awards />
          <Divider />
          <Contact />
          <Footer />
        </main>
      </LenisProvider>
    </Suspense>
  );
}
