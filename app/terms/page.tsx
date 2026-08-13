import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";
import { PRODUCT_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of use for the ${PRODUCT_NAME} marketing website.`,
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms" updated="Last updated: August 2026">
      <p>
        These terms apply to this marketing website. They are a placeholder
        and will be replaced with a complete agreement before the product is
        generally available.
      </p>
      <h2>The service</h2>
      <p>
        {PRODUCT_NAME} is not yet generally available. Browsing this site does
        not create a paid subscription or a guaranteed launch date.
      </p>
      <h2>Acceptable use</h2>
      <p>
        Do not attempt to disrupt the site or misuse any future product
        features described here.
      </p>
      <h2>No warranty</h2>
      <p>
        The site is provided as-is while the product is in development.
        Features described on this page may change before launch.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent through the contact page.
      </p>
    </LegalPage>
  );
}
