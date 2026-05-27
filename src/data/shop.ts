export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  highlights: string[];
  includes: string[];
};

export const products: Product[] = [
  {
    slug: "sneakky-klean-wipes",
    name: "Sneakky Klean Wipes",
    tagline: "Studio chemistry, pocket-sized.",
    description:
      "Our signature wipes — formulated in the studio, finished for the road. Lift dirt, scuffs, and surface stains from sneakers, leather, and most everyday materials. Biodegradable, fragrance-free, and built to be the only wipe you carry.",
    price: 14,
    highlights: [
      "Biodegradable substrate",
      "Material-safe formula",
      "Resealable, travel-ready pack",
    ],
    includes: ["12 individually sealed wipes", "Quick-care guide", "Brand-new box every batch"],
  },
  {
    slug: "sneaker-care-kits",
    name: "Sneaker Care Kits",
    tagline: "The studio standard, at home.",
    description:
      "The same products we use in-studio, organised into a single kit. Designed to extend the life of every pair between visits — brushes, solutions, and the small details that matter most.",
    price: 78,
    highlights: [
      "Studio-grade cleaning solution",
      "Three material-specific brushes",
      "Conditioned cloth, gloves, and tray",
    ],
    includes: [
      "250ml cleaning concentrate",
      "Soft, medium, and stiff brushes",
      "Microfiber cloth set",
      "Storage tray and gloves",
    ],
  },
];

export const getProduct = (slug: string) =>
  products.find((product) => product.slug === slug);
