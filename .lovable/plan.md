
# NirmanEdge — Cinematic 3D Construction Website

## Important note on stack
This project runs on **TanStack Start (React 19 + Vite 7)**, not Next.js 15. All requested libraries (React, TypeScript, Tailwind, Framer Motion, GSAP, Three.js, R3F, Drei, Lenis, shadcn) work identically here, so the visual/feature result will match — only the framework wrapper differs. Routing will use TanStack file-based routes instead of Next's app router. Confirm if you'd rather I stop and migrate, otherwise I'll proceed on TanStack.

## Color palette (overriding the brief per your last line)
- Primary Blue `#0064B4`
- White `#FFFFFF`
- Black `#000000`
- Derived tokens: deep black bg, near-black surfaces, blue glow/accent, white text, muted gray-on-black for secondary copy. Tokens defined in `src/styles.css` via `@theme` (oklch) — no hardcoded hex in components.

## Routes
- `/` — single long-form cinematic scroll experience (all sections below)
- `/projects/$slug` — fullscreen project detail (timeline, before/after, metrics)
- `/_root` head metadata + Lenis + global cursor + GSAP ScrollTrigger provider

## Sections (single-page narrative)
1. **Hero** — fullscreen R3F canvas: blueprint grid floor, skyscraper assembling from extruded box segments, particles, fog, directional "sun" light, mouse-parallax camera. Title "NirmanEdge", tagline, two magnetic CTA buttons.
2. **Scroll story** — GSAP ScrollTrigger pinned timeline: blueprint → foundation → structure → interior → finished. Drives the hero scene's build progress and a parallel copy column.
3. **About** — rotating 3D building (R3F), animated stat counters (500+/25+/50+/98%), vertical timeline of milestones.
4. **Services** — 6 glass tilt cards (react-parallax-tilt) with blue particle trail on hover: Residential, Commercial, Infrastructure, Interior, PM, Smart Buildings.
5. **Project showcase** — large parallax cards, hover depth, click → `/projects/$slug` detail page with construction timeline, before/after slider, KPI grid.
6. **3D City** — Three.js miniature city: instanced building meshes, emissive windows that light on hover, glowing road strips, day/night toggle via lerped lighting.
7. **Why Choose Us** — floating glass cards with magnetic hover and animated counters (Innovation, Precision, Sustainability, Transparency, Quality, Safety).
8. **Testimonials** — 3D perspective carousel of glass cards, auto-rotate, drag to spin.
9. **Awards** — floating trophy meshes on a reflective floor with rim lighting.
10. **Contact** — interactive blueprint-style form, animated SVG map pin, glass inputs.
11. **Footer** — dark, columns for company/services/projects/social.

## Global UX systems
- **Lenis** smooth scroll provider mounted at root
- **Custom cursor** (blended, scales on interactive elements)
- **Magnetic button** component
- **ScrollReveal** wrapper (Framer Motion `whileInView` + GSAP for pinned sequences)
- **R3F Canvas wrapper** with Suspense + lazy load; mobile fallback renders static hero image
- SEO: per-route `head()` with unique title/description/og

## Technical details
- Deps to add: `three @react-three/fiber @react-three/drei gsap @studio-freight/lenis framer-motion react-parallax-tilt`
- Tokens in `src/styles.css`: `--primary: oklch(...)` mapped from `#0064B4`, `--background: #000`, `--foreground: #fff`, plus `--gradient-blue`, `--shadow-glow`, `--glass-bg`.
- Image/video assets: generated via `imagegen` (project thumbnails, hero fallback) + free CDN dummy video for hero ambient loop.
- Performance: dynamic import of all R3F scenes, `Suspense` fallbacks, `dpr={[1,1.5]}`, instanced meshes for city, mobile breakpoint disables heavy scenes.
- File layout:
  - `src/routes/index.tsx`
  - `src/routes/projects.$slug.tsx`
  - `src/components/3d/{HeroScene,RotatingBuilding,MiniCity,Trophies}.tsx`
  - `src/components/sections/{Hero,About,Services,Projects,City,WhyUs,Testimonials,Awards,Contact,Footer}.tsx`
  - `src/components/ui-fx/{MagneticButton,CustomCursor,LenisProvider,SectionReveal}.tsx`
  - `src/lib/projects.ts` (dummy data)

## Scope/sequencing
Given the size, I'll build in this order in a single pass: tokens & providers → Hero (3D) → scroll story → About → Services → Projects + detail route → City → WhyUs → Testimonials → Awards → Contact → Footer → polish & mobile fallbacks.

## Out of scope
- Real CMS/backend (dummy data only)
- Real auth/contact submission (form is visual only unless you want Lovable Cloud wired in)
- True PBR-quality skyscraper model (will use stylized procedural geometry — high quality but not GLTF asset pipeline)

Ready to build on approval.
