import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Refund Policy" };

export default function Page() {
  return (
    <LegalPage
      category="Refund Policy"
      title="Refund Policy"
      updated="May 1, 2026"
      intro="At Sneakky Klean, we stand behind every service and product. If something isn't right, we'll make it right."
      sections={[
        {
          title: "Services",
          paragraphs: [
            "If you're not satisfied with a completed service, contact us within 7 days and we'll work with you to make it right. In most cases, that means a complimentary redo. If a redo isn't possible, we will issue a refund for the affected service.",
          ],
        },
        {
          title: "Shop products",
          paragraphs: [
            "Unopened products may be returned within 30 days of delivery for a full refund. Opened products are eligible for return if defective or damaged on arrival. Contact support@sneakky.com to start a return.",
          ],
        },
        {
          title: "Klean Club",
          paragraphs: [
            "Membership fees are non-refundable, but you may cancel anytime from your account. Cancellation takes effect at the end of your current billing cycle. Care credit unused at cancellation is forfeited.",
          ],
        },
        {
          title: "Mail-in shipping",
          paragraphs: [
            "Lost or damaged mail-in shipments are covered by our shipping insurance up to the declared value. File a claim within 14 days of shipping by emailing support@sneakky.com.",
          ],
        },
        {
          title: "Contact",
          paragraphs: ["For all refund inquiries, email support@sneakky.com."],
        },
      ]}
    />
  );
}
