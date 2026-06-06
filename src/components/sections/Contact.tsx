import { useState } from "react";
import { Reveal } from "@/components/fx/Reveal";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { ArrowRight, MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,100,180,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,100,180,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
            Start a Project
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95]">
            Let&apos;s build the <span className="text-gradient">next landmark</span>.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            Tell us about your vision — site, scale and ambition. Our principals reply within 48
            hours.
          </p>
          <div className="mt-12 space-y-5 text-sm">
            <div className="flex items-center gap-4">
              <span className="h-10 w-10 rounded-full glass grid place-items-center text-primary">
                <MapPin className="h-4 w-4" />
              </span>
              NirmanEdge HQ · Bandra Kurla Complex, Mumbai
            </div>
            <div className="flex items-center gap-4">
              <span className="h-10 w-10 rounded-full glass grid place-items-center text-primary">
                <Phone className="h-4 w-4" />
              </span>
              +91 22 6178 0000
            </div>
            <div className="flex items-center gap-4">
              <span className="h-10 w-10 rounded-full glass grid place-items-center text-primary">
                <Mail className="h-4 w-4" />
              </span>
              studio@nirmanedge.com
            </div>
          </div>

          <div className="mt-12 relative aspect-[4/3] glass rounded-3xl overflow-hidden">
            <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="#0064B4"
                    strokeWidth="0.3"
                    opacity="0.6"
                  />
                </pattern>
              </defs>
              <rect width="400" height="300" fill="url(#grid)" />
              <path
                d="M 50 200 Q 150 100 250 180 T 380 120"
                stroke="#0064B4"
                strokeWidth="1.5"
                fill="none"
                opacity="0.7"
              />
              <path
                d="M 30 80 L 380 240"
                stroke="#0064B4"
                strokeWidth="1"
                fill="none"
                opacity="0.4"
                strokeDasharray="4 4"
              />
            </svg>
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute left-[60%] top-[45%] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40"
            />
            <div className="absolute left-[60%] top-[45%] -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_rgba(0,100,180,1)]" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            className="glass rounded-3xl p-8 md:p-10 space-y-5"
            onSubmit={handleSubmit}
            noValidate
          >
            <Field label="Name" id="name" autoComplete="name" required />
            <Field label="Email" id="email" type="email" autoComplete="email" required />
            <Field label="Company" id="co" autoComplete="organization" />
            <Field
              label="Project Type"
              id="type"
              placeholder="Residential tower / mixed-use / etc."
            />
            <div>
              <label
                htmlFor="vision"
                className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
              >
                Vision
              </label>
              <textarea
                id="vision"
                rows={5}
                className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-3 text-foreground resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-sm text-primary"
              >
                <CheckCircle className="h-4 w-4" />
                Thank you — our studio will be in touch shortly.
              </motion.div>
            )}

            <div className="pt-4">
              <MagneticButton type="submit">
                Send brief <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  autoComplete,
  required,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-3 text-foreground"
      />
    </div>
  );
}
