import { About } from "@/components/marketing/about";
import { Faq } from "@/components/marketing/faq";
import { Features } from "@/components/marketing/features";
import { FinalCta } from "@/components/marketing/final-cta";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { PricingComingSoon } from "@/components/marketing/pricing-coming-soon";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { Reliability } from "@/components/marketing/reliability";
import { RevealRoot } from "@/components/marketing/reveal-root";
import { TrustStrip } from "@/components/marketing/trust-strip";

export default function Home() {
  return (
    <main id="main" className="overflow-x-clip">
      <RevealRoot>
        <Hero />
        <TrustStrip />
        <Features />
        <HowItWorks />
        <ProductShowcase />
        <Reliability />
        <PricingComingSoon />
        <About />
        <Faq />
        <FinalCta />
      </RevealRoot>
    </main>
  );
}
