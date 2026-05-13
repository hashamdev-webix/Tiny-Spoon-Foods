import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Leaf, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import catPurees from "@/assets/cat-purees.jpg";
import catMeals from "@/assets/cat-meals.jpg";
import catSnacks from "@/assets/cat-snacks.jpg";
import catBoosters from "@/assets/cat-boosters.jpg";
import nutritionImg from "@/assets/nutrition-safety.jpg";
import calgaryImg from "@/assets/calgary.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tiny Spoon Foods — Wholesome Baby Food, Made in Calgary" },
      { name: "description", content: "Premium Canadian baby food: clean purees, toddler meals, healthy snacks and nutrition boosters made with love in Calgary." },
      { property: "og:title", content: "Tiny Spoon Foods — Wholesome Baby Food, Made in Calgary" },
      { property: "og:description", content: "Premium Canadian baby food: clean purees, toddler meals, healthy snacks and nutrition boosters made with love in Calgary." },
    ],
  }),
  component: Index,
});

const categories = [
  { name: "Infant Purees", desc: "Smooth, single-ingredient first foods.", img: catPurees },
  { name: "Toddler Meals", desc: "Balanced meals for tiny adventurers.", img: catMeals },
  { name: "Healthy Snacks", desc: "Wholesome bites between meals.", img: catSnacks },
  { name: "Nutrition Boosters", desc: "Pure boosts of essential nutrients.", img: catBoosters },
];

const reasons = [
  "Carefully selected, clean ingredients with no fillers",
  "Calgary-based, locally crafted in small batches",
  "Designed by parents, reviewed by nutrition experts",
  "Meets and exceeds Canadian food safety standards",
  "Allergen-aware recipes with transparent labeling",
  "Stage-appropriate textures for every age",
  "Recyclable, baby-safe packaging you can trust",
];

function Index() {
  return (
    <>
      <HeroSlideshow />

      {/* BRAND OVERVIEW */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-2">
          <Reveal>
            <span className="inline-block rounded-full bg-secondary/30 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-walnut">Our Story</span>
            <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05]">
              Tiny spoons.<br /><span className="text-primary">Big nourishment.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">Our Mission</p>
              <p className="text-lg text-foreground/80 leading-relaxed">To make clean, honest nutrition the easiest choice for every Canadian family — one tiny spoon at a time.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">Our Vision</p>
              <p className="text-lg text-foreground/80 leading-relaxed">A future where every baby in Canada starts life with food that's pure, safe, and made with care close to home.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-muted/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.2em] text-primary">Shop by Category</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Made for every stage</h2>
            </Reveal>
            <Reveal delay={0.1}><Link to="/shop" className="text-sm font-medium text-primary hover:underline">View all products →</Link></Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to="/shop" className="group block overflow-hidden rounded-3xl bg-card border border-border hover:shadow-[0_30px_60px_-25px_rgba(148,123,103,0.35)] transition-all">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={c.img} alt={c.name} loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl">{c.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
                    <span className="mt-4 inline-flex text-sm font-medium text-primary">Explore →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PARENTS CHOOSE US */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] items-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-primary">Why Parents Choose Us</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">A standard you can <span className="text-primary">taste & trust.</span></h2>
            <p className="mt-5 text-foreground/70 max-w-md">Every jar of Tiny Spoon is built around a promise: nothing artificial, nothing rushed, nothing your family wouldn't recognize.</p>
            <div className="mt-8 flex gap-3">
              <Sparkles className="text-accent" />
              <Leaf className="text-secondary" />
              <ShieldCheck className="text-primary" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="space-y-3">
              {reasons.map((r, i) => (
                <motion.li
                  key={r}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5 hover:border-primary/40 transition-colors"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary"><Check size={16} /></span>
                  <span className="text-foreground/90 pt-1">{r}</span>
                </motion.li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-muted/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-primary">Bestsellers</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl mb-12">Tiny jars, big love.</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* NUTRITION & SAFETY */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] aspect-[4/5]">
              <img src={nutritionImg} alt="Mother feeding baby with a wooden spoon" loading="lazy" width={1200} height={1200} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="text-xs uppercase tracking-[0.2em] text-primary">Nutrition & Safety</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">Held to a higher standard, every spoonful.</h2>
            <p className="mt-5 text-foreground/75 leading-relaxed">From soil to spoon, we follow rigorous Canadian food safety practices. Every batch is third-party tested for purity, with full transparency on ingredients, allergens, and nutritional value.</p>
            <ul className="mt-8 space-y-3">
              {["Cold-pressed & gently steamed","Lab-tested for heavy metals","Allergen-aware preparation","Recipes reviewed by pediatric nutritionists"].map((x) => (
                <li key={x} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-primary" />{x}</li>
              ))}
            </ul>
            <Link to="/nutrition-safety" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-primary transition-colors">Learn more →</Link>
          </Reveal>
        </div>
      </section>

      {/* CALGARY */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={calgaryImg} alt="Calgary skyline with the Rockies" loading="lazy" width={1600} height={900} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/60 to-foreground/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-28 md:py-36 text-background">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur border border-background/30 px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
              <MapPin size={12} /> Alberta, Canada
            </span>
            <h2 className="mt-5 font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">Proudly <span className="text-accent">Calgary-Based.</span></h2>
            <p className="mt-6 max-w-xl text-background/85 text-lg leading-relaxed">Born under the big skies of Alberta, Tiny Spoon Foods is rooted in a love for Canadian families and the wholesome ingredients our country grows best.</p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Meet the team →</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
