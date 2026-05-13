import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/feeding-guide")({
  head: () => ({
    meta: [
      { title: "Feeding Guide — Tiny Spoon Foods" },
      { name: "description", content: "Helpful guidance for every infant feeding stage — from first purees to confident toddler eaters." },
      { property: "og:title", content: "Feeding Guide — Tiny Spoon Foods" },
      { property: "og:description", content: "Helpful guidance for healthy infant nutrition." },
    ],
  }),
  component: Page,
});

const stages = [
  { age: "4–6 mo", title: "Infant Feeding Stages", body: "Watch for readiness cues: head control, tongue-thrust loss and curiosity at meals before introducing first tastes." },
  { age: "6+ mo", title: "Age Suitability Guide", body: "Begin with single-ingredient smooth purees. Introduce one new food every 3–5 days to monitor reactions." },
  { age: "7–9 mo", title: "Nutrition Tips for Parents", body: "Iron- and zinc-rich foods become essential. Combine veggies, grains and gentle proteins for balanced bowls." },
  { age: "9–12 mo", title: "Introducing New Foods", body: "Move toward thicker textures and soft finger foods to develop chewing and self-feeding confidence." },
  { age: "12+ mo", title: "FAQs for Parents", body: "Find answers about portion sizes, allergens, picky eating and balancing breast/formula with solids." },
];

function Page() {
  return (
    <>
      <section className="bg-peach/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-primary">Feeding Guide</span>
            <h1 className="mt-3 font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">Helpful guidance for healthy <span className="text-primary">infant nutrition.</span></h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 md:px-8 py-20 md:py-28">
        <div className="space-y-4">
          {stages.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <article className="grid gap-6 md:grid-cols-[140px_1fr] rounded-3xl bg-card border border-border p-7 md:p-9 hover:border-primary/40 transition-colors">
                <span className="font-display text-3xl text-primary">{s.age}</span>
                <div>
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <p className="mt-3 text-foreground/75 leading-relaxed">{s.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
