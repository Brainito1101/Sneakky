import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function Page() {
  return (
    <LegalPage
      category="Cookie Policy"
      title="Cookie Policy"
      updated="May 1, 2026"
      intro="This policy explains how Sneakky Klean uses cookies and similar technologies on our website and app."
      sections={[
        {
          title: "What cookies are",
          paragraphs: [
            "Cookies are small text files stored on your device when you visit a website. They help the site remember preferences, enable functionality, and measure performance.",
          ],
        },
        {
          title: "How we use cookies",
          paragraphs: [
            "Strictly necessary cookies keep the site running and secure. Functional cookies remember your preferences. Analytics cookies help us understand how the site is used. Marketing cookies, where used, are only set with your consent.",
          ],
        },
        {
          title: "Managing cookies",
          paragraphs: [
            "You can manage cookie preferences using the consent banner. You can also use your browser settings to block or delete cookies at any time. Some features may not work as expected if you disable certain cookies.",
          ],
        },
        {
          title: "Contact",
          paragraphs: ["Questions? Email privacy@sneakky.com."],
        },
      ]}
    />
  );
}
