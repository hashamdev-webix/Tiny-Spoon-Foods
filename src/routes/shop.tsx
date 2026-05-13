import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Tiny Spoon Foods" },
      { name: "description", content: "Browse our clean, Canadian-made baby purees, toddler meals, snacks and nutrition boosters." },
      { property: "og:title", content: "Shop — Tiny Spoon Foods" },
      { property: "og:description", content: "Clean, Canadian-made baby food crafted in Calgary." },
    ],
  }),
  component: Shop,
});

function Shop() {
  return (
    <>
      <section className="bg-secondary/20 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-primary">Shop</span>
            <h1 className="mt-3 font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">Wholesome jars for every <span className="text-primary">tiny stage.</span></h1>
            <p className="mt-5 max-w-xl text-foreground/75 text-lg">Single-origin ingredients, gently prepared in Calgary and lab-tested for purity.</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>
    </>
  );
}
