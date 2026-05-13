import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    eyebrow: "Tiny Spoon Foods",
    h1: "Wholesome First Bites for Your Little One",
    p: "Lovingly crafted baby food made with clean, Canadian-sourced ingredients — designed for every stage of your baby's journey.",
  },
  {
    image: hero2,
    eyebrow: "Pure & Honest",
    h1: "Real Ingredients. Nothing Hidden.",
    p: "No fillers. No preservatives. Just gentle, nutrient-rich purees and meals you can trust to nourish growing bodies.",
  },
  {
    image: hero3,
    eyebrow: "Made in Calgary",
    h1: "Nutrition Built for Canadian Families",
    p: "From our Calgary kitchen to your highchair — every spoonful follows Canada's highest food safety and quality standards.",
  },
];

export function HeroSlideshow() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);
  const s = slides[i];
  return (
    <section className="relative h-[88vh] min-h-[640px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img src={s.image} alt={s.h1} className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 md:px-8 pb-20 md:pb-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-background"
          >
            <span className="inline-block rounded-full border border-background/30 bg-background/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
              {s.eyebrow}
            </span>
            <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.05]">{s.h1}</h1>
            <p className="mt-5 max-w-xl text-base md:text-lg text-background/85 leading-relaxed">{s.p}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:gap-3">
                Shop Our Range →
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-background/40 bg-background/10 backdrop-blur px-7 py-3.5 text-sm font-medium text-background hover:bg-background/20 transition-colors">
                Our Story
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex items-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className="group relative h-1 w-12 overflow-hidden rounded-full bg-background/30"
            >
              <span className={`absolute inset-y-0 left-0 bg-background transition-all duration-500 ${i === idx ? "w-full" : "w-0 group-hover:w-1/2"}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
