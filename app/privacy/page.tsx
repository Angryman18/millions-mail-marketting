import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";
import { PRODUCT_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Privacy information for the ${PRODUCT_NAME} website.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy" updated="Last updated: August 2026">
      <p>
        {PRODUCT_NAME} is in a coming-soon stage. This page is a placeholder
        until a complete privacy policy is published before launch.
      </p>
      <h2>What we collect</h2>
      <p>
        This marketing website does not currently collect account information
        or email sign-ups.
      </p>
      <h2>How we use it</h2>
      <p>
        Any information collected in the future will be used only to operate
        the product. We will not sell it.
      </p>
      <h2>Contact</h2>
      <p>
        Privacy questions can be sent through the contact page. This document
        is a placeholder until the full legal policy is ready.
      </p>
    </LegalPage>
  );
}
