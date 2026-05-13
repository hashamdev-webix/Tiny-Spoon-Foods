import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ShieldCheck, Leaf, AlertCircle, Baby, Sprout } from "lucide-react";
import nutritionImg from "@/assets/nutrition-safety.jpg";

export const Route = createFileRoute("/nutrition-safety")({
  head: () => ({
    meta: [
      { title: "Nutrition & Safety — Tiny Spoon Foods" },
      { name: "description", content: "Transparent nutrition, ingredient sourcing, allergen guidance and Canadian quality standards behind every Tiny Spoon jar." },
      { property: "og:title", content: "Nutrition & Safety — Tiny Spoon Foods" },
      { property: "og:description", content: "Transparent nutrition for growing families." },
      { property: "og:image", content: nutritionImg },
    ],
  }),
  component: Page,
});

const items = [
  { icon: Leaf, title: "Ingredients & Nutrition", body: "Single-origin produce, organic where possible, with full nutrient breakdowns on every label." },
  { icon: ShieldCheck, title: "Food Safety Standards", body: "HACCP-aligned facility, third-party batch testing for heavy metals, microbes and pesticide residues." },
  { icon: AlertCircle, title: "Allergen Information", body: "Clear allergen icons on every product. Dedicated lines reduce the risk of cross-contamination." },
  { icon: Baby, title: "Age Suitability Guide", body: "Stage-by-stage textures and portion sizes designed with pediatric nutritionists." },
  { icon: Sprout, title: "Canadian Quality Standards", body: "Crafted under Health Canada and CFIA guidelines, sourced primarily from Canadian farms." },
];

function Page() {
  return (
    <>
      <section className="bg-accent/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-primary">Nutrition & Safety</span>
            <h1 className="mt-3 font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">Transparent nutrition for <span className="text-primary">growing families.</span></h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28 grid gap-12 lg:grid-cols-2 items-start">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] aspect-[4/5] sticky top-28">
            <img src={nutritionImg} alt="Mother feeding baby" loading="lazy" width={1200} height={1200} className="h-full w-full object-cover" />
          </div>
        </Reveal>
        <div className="space-y-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <div className="flex gap-5 rounded-2xl bg-card border border-border p-6 hover:border-primary/40 transition-colors">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary"><it.icon size={20}/></span>
                <div>
                  <h3 className="font-display text-xl">{it.title}</h3>
                  <p className="mt-2 text-foreground/75 leading-relaxed">{it.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
