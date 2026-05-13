import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-3xl bg-card overflow-hidden border border-border hover:shadow-[0_30px_60px_-25px_rgba(148,123,103,0.35)] transition-all duration-500"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-full bg-secondary/90 backdrop-blur px-3 py-1 text-xs font-medium text-secondary-foreground">
          {product.age}
        </span>
        <span className="absolute top-4 right-4 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-medium">
          {product.size}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl">{product.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.tagline}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="font-display text-2xl text-primary">${product.price.toFixed(2)}</span>
          <Link to="/shop" className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background hover:bg-primary transition-colors">
            <ShoppingBag size={14}/> Add
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
