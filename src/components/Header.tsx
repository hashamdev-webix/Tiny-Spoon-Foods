import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, ShoppingBag, X } from "lucide-react";

type MenuKey = "shop" | "nutrition" | "about" | "guide";

type MenuItem = {
  key: MenuKey;
  label: string;
  to: string;
  links: { label: string; to: string }[];
  feature?: { title: string; cta?: { label: string; to: string } };
};

const MENUS: MenuItem[] = [
  {
    key: "shop",
    label: "Shop",
    to: "/shop",
    links: [
      { label: "Infant Purees", to: "/shop" },
      { label: "Toddler Meals", to: "/shop" },
      { label: "Healthy Snacks", to: "/shop" },
      { label: "Nutrition Boosters", to: "/shop" },
    ],
    feature: {
      title: "Clean nutrition designed for growing Canadian families",
      cta: { label: "Shop Now", to: "/shop" },
    },
  },
  {
    key: "nutrition",
    label: "Nutrition & Safety",
    to: "/nutrition-safety",
    links: [
      { label: "Ingredients & Nutrition", to: "/nutrition-safety" },
      { label: "Food Safety Standards", to: "/nutrition-safety" },
      { label: "Allergen Information", to: "/nutrition-safety" },
      { label: "Age Suitability Guide", to: "/feeding-guide" },
      { label: "Canadian Quality Standards", to: "/nutrition-safety" },
    ],
    feature: { title: "Transparent nutrition for growing families" },
  },
  {
    key: "about",
    label: "About",
    to: "/about",
    links: [
      { label: "Introduction", to: "/about" },
      { label: "About the Company", to: "/about" },
      { label: "Our Mission", to: "/about" },
      { label: "Our Vision", to: "/about" },
      { label: "Why Us", to: "/about" },
    ],
  },
  {
    key: "guide",
    label: "Feeding Guide",
    to: "/feeding-guide",
    links: [
      { label: "Infant Feeding Stages", to: "/feeding-guide" },
      { label: "Age Suitability Guide", to: "/feeding-guide" },
      { label: "Nutrition Tips for Parents", to: "/feeding-guide" },
      { label: "Introducing New Foods", to: "/feeding-guide" },
      { label: "FAQs for Parents", to: "/feeding-guide" },
    ],
    feature: { title: "Helpful guidance for healthy infant nutrition" },
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(148,123,103,0.08)]" : "bg-background/60 backdrop-blur-md"
      }`}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg">t</span>
          <span className="font-display text-xl tracking-tight">Tiny Spoon <span className="text-primary">Foods</span></span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {MENUS.map((m) => (
            <button
              key={m.key}
              onMouseEnter={() => setOpen(m.key)}
              className="group inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {m.label}
              <ChevronDown size={14} className={`transition-transform ${open === m.key ? "rotate-180" : ""}`} />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/shop" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            <ShoppingBag size={16} /> Shop
          </Link>
          <button onClick={() => setMobile(true)} className="lg:hidden rounded-full p-2 hover:bg-muted">
            <Menu size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key={open}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setOpen(open)}
            className="absolute left-0 right-0 top-full hidden lg:block"
          >
            <div className="mx-auto max-w-7xl px-8 pb-6">
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_80px_-20px_rgba(148,123,103,0.25)]">
                <MegaPanel item={MENUS.find((m) => m.key === open)!} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background lg:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between p-5 border-b">
              <span className="font-display text-xl">Menu</span>
              <button onClick={() => setMobile(false)} className="rounded-full p-2 hover:bg-muted"><X /></button>
            </div>
            <div className="p-5 space-y-6">
              {MENUS.map((m) => (
                <div key={m.key}>
                  <Link to={m.to} onClick={() => setMobile(false)} className="font-display text-2xl text-primary">{m.label}</Link>
                  <ul className="mt-2 space-y-1">
                    {m.links.map((l) => (
                      <li key={l.label}>
                        <Link to={l.to} onClick={() => setMobile(false)} className="block py-1.5 text-foreground/70">{l.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MegaPanel({ item }: { item: MenuItem }) {
  return (
    <div className="grid md:grid-cols-[1.2fr_1fr]">
      <div className="p-8 md:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">{item.label}</p>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
          {item.links.map((l, i) => (
            <motion.li
              key={l.label}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <Link to={l.to} className="group flex items-center justify-between rounded-xl px-3 py-2.5 hover:bg-muted transition-colors">
                <span className="font-medium">{l.label}</span>
                <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary">→</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
      {item.feature && (
        <div className="relative bg-gradient-to-br from-secondary/30 via-accent/40 to-primary/20 p-10 flex flex-col justify-end min-h-[220px]">
          <h4 className="font-display text-2xl leading-snug text-foreground max-w-xs">{item.feature.title}</h4>
          {item.feature.cta && (
            <Link to={item.feature.cta.to} className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors">
              {item.feature.cta.label} →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
