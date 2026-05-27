import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Page() {
  return (
    <LegalPage
      category="Privacy Policy"
      title="Privacy Policy"
      updated="May 1, 2026"
      intro="This policy describes how Sneakky Klean (we, us, our) collects, uses, and protects the personal information of people who use our services, app, and website."
      sections={[
        {
          title: "Information we collect",
          paragraphs: [
            "We collect information you provide directly when you book a service, sign up for Klean Club, contact our team, or shop in our store — including name, contact information, billing details, and shipping addresses.",
            "We collect limited information automatically when you use our site or app, including device information, IP address, and browser type, to help maintain and improve our services.",
          ],
        },
        {
          title: "How we use information",
          paragraphs: [
            "To deliver and improve our services, including processing bookings, payments, mail-in shipments, and membership benefits.",
            "To send service-related communications, and — with your consent — occasional marketing communications you can opt out of at any time.",
            "To meet legal obligations and protect our customers and team from fraud or misuse.",
          ],
        },
        {
          title: "Sharing",
          paragraphs: [
            "We do not sell personal information. We share information only with the vendors and partners who help us run our business — payments, shipping, analytics — under strict contractual protections.",
          ],
        },
        {
          title: "Your rights",
          paragraphs: [
            "You may request a copy of your information, ask us to delete it, or correct anything inaccurate. Contact us at privacy@sneakky.com.",
          ],
        },
        {
          title: "Contact",
          paragraphs: ["Privacy questions? Email privacy@sneakky.com."],
        },
      ]}
    />
  );
}
