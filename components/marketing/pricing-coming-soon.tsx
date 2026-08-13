import { Container } from "@/components/ui/container";
import { IconCheck } from "@/components/ui/icons";
import { Section, SectionHeading } from "@/components/ui/section";

const notes = [
  "Simple, predictable plans",
  "Launch announcement",
  "Pricing announcement",
];

export function PricingComingSoon() {
  return (
    <Section id="pricing">
      <Container>
        <div data-reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Pricing Is Coming Soon."
            description="We're finalizing plans that keep the platform simple, predictable, and affordable. Details will be published when the product launches."
          />
        </div>

        <div
          className="card mx-auto mt-12 max-w-xl p-8 text-center shadow-[var(--elevation-2)]"
          data-reveal
          data-reveal-delay="2"
        >
          <p className="eyebrow justify-center">Early Access</p>
          <h3 className="headline-md">The product is still being finished.</h3>
          <p className="body-md mt-3">
            No invented plans. No placeholder prices. Pricing will appear here
            when it is ready.
          </p>
          <ul className="mx-auto mt-6 max-w-xs space-y-2 text-left">
            {notes.map((note) => (
              <li
                key={note}
                className="flex items-center gap-2 text-sm text-on-surface-variant"
              >
                <IconCheck className="h-4 w-4 text-primary" />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
