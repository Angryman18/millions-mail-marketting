import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { faqItems } from "@/lib/constants";

export function Faq() {
  return (
    <Section id="faq">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div data-reveal>
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Answers before you start."
              description="The essentials about SMTP, scheduling, audiences, and launch timing."
            />
          </div>
          <div data-reveal data-reveal-delay="2">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
