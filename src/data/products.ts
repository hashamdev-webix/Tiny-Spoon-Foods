import sweetPotato from "@/assets/product-sweet-potato.jpg";
import appleBanana from "@/assets/product-apple-banana.jpg";
import pearOat from "@/assets/product-pear-oat.jpg";
import avocadoSpinach from "@/assets/product-avocado-spinach.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  age: string;
  size: string;
  image: string;
  tagline: string;
};

export const products: Product[] = [
  { id: "sweet-potato", name: "Sweet Potato Puree", price: 5.99, age: "6+ Months", size: "120g", image: sweetPotato, tagline: "Naturally sweet & gentle on tiny tummies." },
  { id: "apple-banana", name: "Apple Banana Puree", price: 5.99, age: "6+ Months", size: "120g", image: appleBanana, tagline: "A creamy, fruity classic first taste." },
  { id: "pear-oat", name: "Pear Oat Puree", price: 6.49, age: "7+ Months", size: "120g", image: pearOat, tagline: "Wholesome oats meet juicy ripe pears." },
  { id: "avocado-spinach", name: "Avocado Spinach Blend", price: 6.99, age: "8+ Months", size: "120g", image: avocadoSpinach, tagline: "Buttery greens packed with goodness." },
];
