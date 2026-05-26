import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg">
              t
            </span>
            <span className="font-display text-xl">Tiny Spoon Foods</span>
          </div>
          <p className="mt-4 text-sm text-background/70 leading-relaxed">
            Clean, wholesome nutrition crafted in Calgary for Canada's littlest eaters.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.instagram.com/tinyspoonfoods/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full bg-background/10 hover:bg-primary transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61590258816154"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full bg-background/10 hover:bg-primary transition-colors"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>
        <FooterCol
          title="Shop"
          links={[
            ["Infant Purees", "/shop"],
            ["Toddler Meals", "/shop"],
            ["Healthy Snacks", "/shop"],
            ["Nutrition Boosters", "/shop"],
          ]}
        />
        <FooterCol
          title="Learn"
          links={[
            ["About", "/about"],
            ["Nutrition & Safety", "/nutrition-safety"],
            ["Feeding Guide", "/feeding-guide"],
            ["FAQs", "/feeding-guide"],
          ]}
        />
        <div>
          <h4 className="font-display text-lg mb-4">Stay in touch</h4>
          <div className="space-y-2 text-sm text-background/70">
            <p className="flex items-center gap-2">
              <MapPin size={14} /> Calgary, Alberta, Canada
            </p>
            <p className="flex items-center gap-2">
              <Mail size={14} /> hello@tinyspoonfoods.ca
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-5 flex flex-wrap items-center justify-between text-xs text-background/60">
          <p>© {new Date().getFullYear()} Tiny Spoon Foods. Proudly Canadian.</p>
          <p>Made with care in Calgary 🍁</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="font-display text-lg mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-background/70">
        {links.map(([l, to]) => (
          <li key={l}>
            <Link to={to} className="hover:text-primary transition-colors">
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
