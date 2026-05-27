export type ServiceCategory = "cleaning" | "restoration" | "treatment" | "accessory";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  tagline: string;
  description: string;
  highlights: string[];
  process: { title: string; copy: string }[];
  priceFrom: number;
  turnaround: string;
};

export const services: Service[] = [
  {
    slug: "sneaker-cleaning",
    name: "Sneaker Cleaning",
    category: "cleaning",
    tagline: "The signature clean. Built around your rotation.",
    description:
      "A complete deep clean engineered for modern sneakers. We hand-treat uppers, midsoles, and laces with material-specific solutions — bringing your pair back to a fresh, gallery-ready finish without compromising the build.",
    highlights: [
      "Material-specific cleaning agents",
      "Hand-finished upper, midsole, and outsole",
      "Fresh laces and deodorising treatment included",
    ],
    process: [
      { title: "Inspect", copy: "We assess construction, materials, and condition before lifting a brush." },
      { title: "Treat", copy: "Targeted agents lift dirt, grime, and discoloration from every panel." },
      { title: "Finish", copy: "Conditioned, deodorised, re-laced, and packaged for return." },
    ],
    priceFrom: 35,
    turnaround: "3–5 days",
  },
  {
    slug: "shoe-cleaning",
    name: "Shoe Cleaning",
    category: "cleaning",
    tagline: "For every pair beyond the sneaker rotation.",
    description:
      "From dress shoes to casual silhouettes, our team brings the same studio standard to every shoe in your collection. Material-aware, hand-finished, and returned without a trace of the process.",
    highlights: [
      "Works on leather, canvas, mesh, knit, and more",
      "Restores colour, structure, and softness",
      "Optional protective finish",
    ],
    process: [
      { title: "Inspect", copy: "Every shoe is reviewed for material, construction, and wear." },
      { title: "Treat", copy: "We select agents and tools to match each surface." },
      { title: "Finish", copy: "Conditioned, polished, and presented in protective packaging." },
    ],
    priceFrom: 30,
    turnaround: "3–5 days",
  },
  {
    slug: "white-shoes-cleaning",
    name: "White Shoes Cleaning",
    category: "cleaning",
    tagline: "Bring white back to white.",
    description:
      "White sneakers and shoes need a specialist approach. Our white-shoe service combines pH-balanced cleaning, targeted brightening, and sole renewal to restore that out-of-the-box finish.",
    highlights: [
      "Brightens uppers without bleach damage",
      "Sole and midsole renewal included",
      "Optional UV-safe protective coat",
    ],
    process: [
      { title: "Inspect", copy: "We map staining, yellowing, and material condition." },
      { title: "Brighten", copy: "Layered treatments lift discoloration safely." },
      { title: "Protect", copy: "Optional finish helps maintain the white longer." },
    ],
    priceFrom: 40,
    turnaround: "4–6 days",
  },
  {
    slug: "suede-cleaning",
    name: "Suede Cleaning",
    category: "cleaning",
    tagline: "Suede done right. Texture, color, restored.",
    description:
      "Suede is unforgiving — and exactly what we specialise in. Dry-method cleaning, nap restoration, and colour-safe spot treatment return the surface to a uniform, premium texture.",
    highlights: [
      "Dry-method, water-controlled cleaning",
      "Nap brushed and reset",
      "Colour-safe stain removal",
    ],
    process: [
      { title: "Inspect", copy: "Map staining and damage; protect colour-sensitive areas." },
      { title: "Treat", copy: "Specialist suede tools and agents only." },
      { title: "Restore", copy: "Nap reset; optional waterproof finish." },
    ],
    priceFrom: 45,
    turnaround: "5–7 days",
  },
  {
    slug: "leather-shoes-cleaning",
    name: "Leather Shoes Cleaning",
    category: "cleaning",
    tagline: "Conditioned. Conditioned. Conditioned.",
    description:
      "Leather is an investment. Our process cleans, conditions, and restores suppleness with high-grade products that protect the grain and preserve patina.",
    highlights: [
      "pH-balanced leather cleaning",
      "Deep conditioning treatment",
      "Optional colour-match polish",
    ],
    process: [
      { title: "Clean", copy: "Surface and pore-level cleaning without stripping oils." },
      { title: "Condition", copy: "Multi-stage conditioning restores softness and depth." },
      { title: "Finish", copy: "Hand-polished with optional colour-match treatment." },
    ],
    priceFrom: 45,
    turnaround: "4–6 days",
  },
  {
    slug: "sneaker-restoration",
    name: "Sneaker Restoration",
    category: "restoration",
    tagline: "Beyond clean. We bring them back.",
    description:
      "When cleaning isn't enough, restoration steps in. Reglue, repaint, deyellow, and rebuild — our restoration program is designed for grails, deadstock, and pairs with stories to tell.",
    highlights: [
      "Reglue and structural repair",
      "Deyellow and sole renewal",
      "Custom paint-matched touch-ups",
    ],
    process: [
      { title: "Assess", copy: "We document everything before we touch the shoe." },
      { title: "Rebuild", copy: "Repairs are layered and material-matched." },
      { title: "Finish", copy: "Returned with a full condition report." },
    ],
    priceFrom: 95,
    turnaround: "10–14 days",
  },
  {
    slug: "shoe-restoration",
    name: "Shoe Restoration",
    category: "restoration",
    tagline: "Repair, restore, return.",
    description:
      "From soles to stitching, our shoe restoration program is for the pieces you don't want to replace. We handle the complex work and return them feeling like an old favourite — better.",
    highlights: [
      "Stitching and sole repair",
      "Leather and material restoration",
      "Heel and toe reconstruction",
    ],
    process: [
      { title: "Diagnose", copy: "We assess every layer of construction." },
      { title: "Restore", copy: "Hand repair, material-matched and meticulous." },
      { title: "Finish", copy: "Polished, conditioned, and ready for years more wear." },
    ],
    priceFrom: 85,
    turnaround: "10–14 days",
  },
  {
    slug: "yellow-sneaker-cleaning",
    name: "Yellow Sneaker Cleaning",
    category: "treatment",
    tagline: "Reverse the yellow. Restore the icon.",
    description:
      "Oxidation turns icy soles yellow over time. Our deyellowing process safely reverses oxidation in midsoles and outsoles, bringing translucents and whites back to their original clarity.",
    highlights: [
      "UV-controlled deyellowing",
      "Safe for clear and translucent soles",
      "Often paired with sole whitening",
    ],
    process: [
      { title: "Prep", copy: "Sole isolation; upper masking." },
      { title: "Treat", copy: "Multi-stage UV-controlled oxidation reversal." },
      { title: "Finish", copy: "Cleaned, polished, and returned." },
    ],
    priceFrom: 60,
    turnaround: "7–10 days",
  },
  {
    slug: "oxidation-treatment",
    name: "Oxidation Treatment",
    category: "treatment",
    tagline: "Engineered chemistry. Genuine results.",
    description:
      "Targeted oxidation treatment for translucent and white materials. Designed for the most sensitive midsoles, outsoles, and accents.",
    highlights: [
      "Specialist-grade chemistry",
      "Safe on icy and gum soles",
      "Long-lasting clarity",
    ],
    process: [
      { title: "Isolate", copy: "Sensitive areas are masked and prepped." },
      { title: "Treat", copy: "Controlled UV exposure and chemistry." },
      { title: "Stabilise", copy: "Finished to slow re-yellowing." },
    ],
    priceFrom: 60,
    turnaround: "7–10 days",
  },
  {
    slug: "sole-whitening",
    name: "Sole Whitening",
    category: "treatment",
    tagline: "Soles, brought back to bright.",
    description:
      "Layered cleaning and treatment specifically for midsoles and outsoles. We bring rubber and EVA back to their original tone without compromising material integrity.",
    highlights: [
      "Targeted to soles only",
      "Safe for rubber, EVA, and Boost",
      "Pairs perfectly with full cleans",
    ],
    process: [
      { title: "Mask", copy: "Upper protected; sole isolated." },
      { title: "Whiten", copy: "Layered brightening treatments." },
      { title: "Finish", copy: "Conditioned and matte-finished as needed." },
    ],
    priceFrom: 30,
    turnaround: "3–5 days",
  },
  {
    slug: "red-bottom-restoration",
    name: "Red Bottom Restoration",
    category: "restoration",
    tagline: "The icon. Restored.",
    description:
      "Red bottoms are made to be seen — and they wear. We restore that signature red with colour-matched lacquer applied by hand to preserve the silhouette.",
    highlights: [
      "Colour-matched lacquer",
      "Hand-applied, multi-coat finish",
      "Preserves brand authenticity",
    ],
    process: [
      { title: "Prep", copy: "Sole cleaned and gently prepared." },
      { title: "Coat", copy: "Multiple layers of matched lacquer." },
      { title: "Cure", copy: "Cured, polished, and returned." },
    ],
    priceFrom: 120,
    turnaround: "7–10 days",
  },
  {
    slug: "paint-touch-ups",
    name: "Paint Touch-ups",
    category: "restoration",
    tagline: "Invisible repair. Colour-matched. Hand-applied.",
    description:
      "Scuffs, scratches, creases — we match the colour and apply paint by hand to make the repair disappear. Available on leather, canvas, and most synthetic uppers.",
    highlights: [
      "Custom-mixed colour match",
      "Flexible, crack-resistant finish",
      "Multi-coat for durability",
    ],
    process: [
      { title: "Match", copy: "Colour mixed to the original tone." },
      { title: "Apply", copy: "Layered for depth and durability." },
      { title: "Finish", copy: "Sealed and conditioned." },
    ],
    priceFrom: 25,
    turnaround: "3–5 days",
  },
  {
    slug: "waterproofing",
    name: "Waterproofing",
    category: "treatment",
    tagline: "An invisible shield. Built in.",
    description:
      "A premium protective treatment for sneakers, suede, leather, and canvas. Water, dirt, and oil-resistant — without changing how your shoes look or feel.",
    highlights: [
      "Invisible, breathable finish",
      "Works on most materials",
      "Repels water, oil, and dirt",
    ],
    process: [
      { title: "Clean", copy: "Surfaces prepped for maximum bond." },
      { title: "Treat", copy: "Multi-layer protective coating." },
      { title: "Cure", copy: "Set fully before return." },
    ],
    priceFrom: 20,
    turnaround: "2–3 days",
  },
  {
    slug: "deodorizing",
    name: "Deodorizing",
    category: "treatment",
    tagline: "Reset the inside, too.",
    description:
      "A controlled, ozone-based deodorising treatment that neutralises odour at the source. Safe for all materials and included in every full cleaning service.",
    highlights: [
      "Eliminates odour at the source",
      "Safe for all interior materials",
      "Included with full cleans",
    ],
    process: [
      { title: "Prep", copy: "Interior assessed and lightly cleaned." },
      { title: "Treat", copy: "Controlled ozone treatment." },
      { title: "Air", copy: "Aired and finished for fresh return." },
    ],
    priceFrom: 15,
    turnaround: "1–2 days",
  },
  {
    slug: "lace-replacement",
    name: "Lace Replacement",
    category: "accessory",
    tagline: "Fresh laces. Free with every clean.",
    description:
      "A small detail with a big impact. We carry an in-house lace library and match length and tone to your pair. Included with every full cleaning service.",
    highlights: [
      "In-house lace library",
      "Length and tone matched",
      "Included with full cleans",
    ],
    process: [
      { title: "Match", copy: "Length, width, and colour matched." },
      { title: "Lace", copy: "Hand-laced and finished." },
      { title: "Return", copy: "Ready to wear." },
    ],
    priceFrom: 8,
    turnaround: "Same day",
  },
  {
    slug: "shoe-stretch-removal",
    name: "Shoe Stretch Removal",
    category: "restoration",
    tagline: "Tighten the fit. Restore the form.",
    description:
      "Over time, materials relax. Our stretch removal service tightens the upper and restores original form — without damaging the construction.",
    highlights: [
      "Restores original fit",
      "Material-safe shrinking",
      "Best paired with restoration",
    ],
    process: [
      { title: "Assess", copy: "We measure stretch and fit." },
      { title: "Treat", copy: "Controlled shrinking process." },
      { title: "Set", copy: "Form reset and conditioned." },
    ],
    priceFrom: 35,
    turnaround: "5–7 days",
  },
  {
    slug: "crocs-cleaning",
    name: "Crocs Cleaning",
    category: "cleaning",
    tagline: "Yes, even those. Treated like the rest.",
    description:
      "We treat every pair the same — Crocs included. A studio-grade clean that handles every nook, strap, and jibbitz.",
    highlights: [
      "Includes strap and jibbitz care",
      "Material-safe cleaning",
      "Deodorised and finished",
    ],
    process: [
      { title: "Inspect", copy: "Charms removed; pair assessed." },
      { title: "Clean", copy: "Deep clean across all surfaces." },
      { title: "Return", copy: "Charms returned, fully reassembled." },
    ],
    priceFrom: 20,
    turnaround: "2–3 days",
  },
  {
    slug: "slides-cleaning",
    name: "Slides Cleaning",
    category: "cleaning",
    tagline: "Slip them back on. Studio-fresh.",
    description:
      "A full clean for slides, sandals, and pool-side staples — restored to a fresh-out-of-box feel.",
    highlights: [
      "Footbed deep clean",
      "Strap and upper treatment",
      "Deodorised finish",
    ],
    process: [
      { title: "Inspect", copy: "Pair reviewed and prepped." },
      { title: "Clean", copy: "Surface and footbed deep clean." },
      { title: "Finish", copy: "Conditioned, deodorised, returned." },
    ],
    priceFrom: 20,
    turnaround: "2–3 days",
  },
  {
    slug: "heel-cleaning",
    name: "Heel Cleaning",
    category: "cleaning",
    tagline: "From boardroom to ballroom.",
    description:
      "Specialist cleaning and conditioning for heels — leather, suede, and patent. Polished, restored, and returned ready for the next event.",
    highlights: [
      "Material-specific treatment",
      "Heel-tip inspection",
      "Polished finish",
    ],
    process: [
      { title: "Inspect", copy: "Material and heel-tip reviewed." },
      { title: "Treat", copy: "Material-specific cleaning." },
      { title: "Polish", copy: "Conditioned and finished." },
    ],
    priceFrom: 40,
    turnaround: "4–6 days",
  },
  {
    slug: "hat-cleaning",
    name: "Hat Cleaning",
    category: "accessory",
    tagline: "Brims, crowns, brand-new.",
    description:
      "Caps and structured hats restored to their original shape and colour. Sweat stains, brim fading, and crown distortion handled by hand.",
    highlights: [
      "Maintains structure and form",
      "Sweat stain removal",
      "Safe on patches and logos",
    ],
    process: [
      { title: "Inspect", copy: "Hat assessed for material and structure." },
      { title: "Clean", copy: "Hand-cleaned, structure preserved." },
      { title: "Reset", copy: "Brim and crown reset before return." },
    ],
    priceFrom: 30,
    turnaround: "4–6 days",
  },
  {
    slug: "handbag-cleaning",
    name: "Handbag Cleaning",
    category: "accessory",
    tagline: "The detail your wardrobe deserves.",
    description:
      "Designer and everyday handbags restored with the same precision we bring to grails. Leather, suede, canvas, hardware — all handled in-house.",
    highlights: [
      "Material-specific care",
      "Hardware polished",
      "Interior deodorised",
    ],
    process: [
      { title: "Inspect", copy: "Material and hardware assessed." },
      { title: "Treat", copy: "Hand-cleaned and conditioned." },
      { title: "Finish", copy: "Polished, deodorised, presented." },
    ],
    priceFrom: 80,
    turnaround: "5–7 days",
  },
  {
    slug: "mail-in",
    name: "Mail-in Service",
    category: "cleaning",
    tagline: "The studio, anywhere you are.",
    description:
      "Ship your pairs from anywhere in North America. Prepaid label in, fully insured. Returned cleaner, faster, and packaged to a standard you'll notice.",
    highlights: [
      "Prepaid label, fully insured",
      "Free returns on every order",
      "Full condition report included",
    ],
    process: [
      { title: "Book", copy: "Select services and request your label." },
      { title: "Ship", copy: "Drop off — we handle the rest." },
      { title: "Receive", copy: "Returned with care and a full report." },
    ],
    priceFrom: 35,
    turnaround: "7–10 days",
  },
];

export const serviceCategories: Record<ServiceCategory, { title: string; description: string }> = {
  cleaning: {
    title: "Cleaning",
    description:
      "Studio-grade cleans for sneakers, shoes, and the materials you wear most.",
  },
  restoration: {
    title: "Restoration",
    description:
      "Repair, rebuild, and return. For pairs that deserve more than a clean.",
  },
  treatment: {
    title: "Treatments",
    description:
      "Specialist treatments — deyellowing, sole whitening, waterproofing, and more.",
  },
  accessory: {
    title: "Accessories",
    description: "Care for the rest of the wardrobe — hats, bags, laces, and beyond.",
  },
};

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);

export const getServicesByCategory = (category: ServiceCategory) =>
  services.filter((service) => service.category === category);
