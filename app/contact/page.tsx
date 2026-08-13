import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information for Millions Mail.",
};

export default function ContactPage() {
  return (
    <main id="main" className="section">
      <Container className="max-w-2xl">
        <p className="eyebrow">Company</p>
        <h1 className="headline-lg">Contact</h1>
        <p className="body-lg mt-4">
          We&apos;re still in a coming-soon stage and not staffing a public
          inbox yet. Check back here when the product launches.
        </p>
        <div className="mt-8">
          <Button href="/#features">Explore Features</Button>
        </div>
      </Container>
    </main>
  );
}
