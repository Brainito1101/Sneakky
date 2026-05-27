import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function Page() {
  return (
    <LegalPage
      category="Terms & Conditions"
      title="Terms & Conditions"
      updated="May 1, 2026"
      intro="These terms govern the use of Sneakky Klean's services, app, and website. By booking a service or shopping with us, you agree to these terms."
      sections={[
        {
          title: "Services",
          paragraphs: [
            "We provide premium cleaning, restoration, and care services for sneakers, shoes, and select accessories. Service availability and pricing may vary by studio and over time.",
            "Service estimates are based on initial information. Final pricing is confirmed after inspection. You will be notified of any changes before work begins.",
          ],
        },
        {
          title: "Bookings & Cancellations",
          paragraphs: [
            "Bookings may be cancelled or rescheduled at no cost until our specialists begin work on your item. After work begins, we charge for work completed to date.",
          ],
        },
        {
          title: "Care & limitations",
          paragraphs: [
            "We treat every pair with care and disclose any material limitations we identify before starting. We are not responsible for damage that is the result of pre-existing material failure, manufacturer defects, or counterfeits not disclosed at intake.",
          ],
        },
        {
          title: "Mail-in",
          paragraphs: [
            "Our mail-in service includes insured shipping both ways. Our liability for loss or damage during shipping is limited to the value declared at intake.",
          ],
        },
        {
          title: "Intellectual property",
          paragraphs: [
            "All Sneakky Klean trademarks, brand assets, and content are owned by Sneakky Klean. You may not use any of these without written permission.",
          ],
        },
        {
          title: "Contact",
          paragraphs: ["Questions about these terms? Email legal@sneakky.com."],
        },
      ]}
    />
  );
}
