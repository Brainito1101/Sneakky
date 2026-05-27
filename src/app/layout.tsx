import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Sneakky Klean — Premium Sneaker Cleaning & Restoration",
    template: "%s · Sneakky Klean",
  },
  description:
    "Sneakky Klean is the premium sneaker cleaning and restoration service trusted by collectors. Expert care for sneakers, leather, suede, and the pieces you love.",
  metadataBase: new URL("https://sneakky.com"),
  openGraph: {
    title: "Sneakky Klean — Premium Sneaker Cleaning & Restoration",
    description:
      "Premium sneaker cleaning, restoration, and care. Studio drop-off, mail-in, and Klean Club membership.",
    type: "website",
    url: "https://sneakky.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white text-ink-900 antialiased">
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
