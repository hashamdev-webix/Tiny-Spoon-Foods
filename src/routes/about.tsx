import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tiny Spoon Foods" },
      { name: "description", content: "Learn about Tiny Spoon Foods — a Calgary-based baby food company built around clean, honest nutrition." },
      { property: "og:title", content: "About — Tiny Spoon Foods" },
      { property: "og:description", content: "A Calgary-based baby food company built around clean, honest nutrition." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: About,
});

const sections = [
  { title: "Introduction", body: "Tiny Spoon Foods began in a Calgary kitchen with a simple wish: that every baby's first foods could be as pure and lovingly made as those at home — without the daily struggle." },
  { title: "About the Company", body: "We are a small, family-led Canadian brand crafting nutrient-rich baby food in micro-batches, working directly with local farms and certified suppliers across Alberta." },
  { title: "Our Mission", body: "To make clean, honest nutrition the easiest choice for every Canadian family — one tiny spoon at a time." },
  { title: "Our Vision", body: "A future where every baby in Canada starts life with food that's pure, safe, and made with care close to home." },
  { title: "Why Us", body: "Because our standards are personal. Every recipe is one we'd serve our own children — transparent, allergen-aware, and crafted to support healthy growth." },
];

function About() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[460px] overflow-hidden">
        <img src={heroImg} alt="Family enjoying breakfast" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-foreground/30" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 h-full flex items-end pb-16 text-background">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em]">About</span>
            <h1 className="mt-3 font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">Built by parents,<br />for Canadian families.</h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 md:px-8 py-24 md:py-32 space-y-16">
        {sections.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <div className="grid gap-6 md:grid-cols-[200px_1fr]">
              <p className="text-xs uppercase tracking-[0.2em] text-primary pt-2">{s.title}</p>
              <p className="text-2xl md:text-3xl font-display leading-snug text-foreground/85">{s.body}</p>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <div className="rounded-3xl bg-secondary/25 p-10 md:p-14 text-center">
            <h3 className="font-display text-3xl md:text-4xl">Ready to taste the difference?</h3>
            <Link to="/shop" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Shop our range →</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
