import { createFileRoute } from "@tanstack/react-router";
import { LenisProvider } from "@/components/fx/LenisProvider";
import { CustomCursor } from "@/components/fx/CustomCursor";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { ScrollStory } from "@/components/sections/ScrollStory";
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

function Index() {
  return (
    <LenisProvider>
      <CustomCursor />
      <main className="relative bg-background text-foreground">
        <Nav />
        <Hero />
        <ScrollStory />
        <About />
        <Services />
        <Projects />
        <City />
        <WhyUs />
        <Testimonials />
        <Awards />
        <Contact />
        <Footer />
      </main>
    </LenisProvider>
  );
}
