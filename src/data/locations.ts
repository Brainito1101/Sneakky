export type Location = {
  slug: string;
  city: string;
  region: string;
  country: string;
  address: string;
  hours: { days: string; time: string }[];
  phone: string;
  email: string;
  description: string;
  amenities: string[];
};

export const locations: Location[] = [
  {
    slug: "miami",
    city: "Miami",
    region: "FL",
    country: "USA",
    address: "1207 Lincoln Rd, Miami Beach, FL 33139",
    hours: [
      { days: "Mon – Fri", time: "10:00 — 8:00" },
      { days: "Saturday", time: "11:00 — 8:00" },
      { days: "Sunday", time: "12:00 — 6:00" },
    ],
    phone: "+1 (305) 555-0123",
    email: "miami@sneakky.com",
    description:
      "Our flagship Miami studio sits on Lincoln Road — a full-service workshop with same-day cleans, restoration bays, and member lounge.",
    amenities: [
      "Walk-in drop-off",
      "Same-day cleans",
      "Restoration studio on-site",
      "Klean Club lounge",
    ],
  },
  {
    slug: "new-york",
    city: "New York",
    region: "NY",
    country: "USA",
    address: "188 Grand St, New York, NY 10013",
    hours: [
      { days: "Mon – Fri", time: "10:00 — 8:00" },
      { days: "Saturday", time: "11:00 — 8:00" },
      { days: "Sunday", time: "12:00 — 6:00" },
    ],
    phone: "+1 (212) 555-0188",
    email: "nyc@sneakky.com",
    description:
      "Sneakky Klean SoHo is a studio-first experience: drop-off, consultation, and a curated retail bench for care kits and wipes.",
    amenities: [
      "Walk-in drop-off",
      "Retail bench",
      "Restoration consults",
      "Mail-in pickup",
    ],
  },
  {
    slug: "saskatoon",
    city: "Saskatoon",
    region: "SK",
    country: "Canada",
    address: "210 21st St E, Saskatoon, SK S7K 0B7",
    hours: [
      { days: "Mon – Fri", time: "10:00 — 7:00" },
      { days: "Saturday", time: "11:00 — 6:00" },
      { days: "Sunday", time: "Closed" },
    ],
    phone: "+1 (306) 555-0117",
    email: "saskatoon@sneakky.com",
    description:
      "Where it began. The Saskatoon studio remains the heart of Sneakky Klean — restoration-led and built on a decade of obsessive craft.",
    amenities: [
      "Restoration-led studio",
      "Walk-in drop-off",
      "Mail-in hub for Canada",
      "Founder's table consults",
    ],
  },
];

export const getLocation = (slug: string) =>
  locations.find((location) => location.slug === slug);
