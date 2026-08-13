import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { howItWorks } from "@/lib/constants";

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="low">
      <Container>
        <div data-reveal>
          <SectionHeading
            eyebrow="How it works"
            title="From SMTP to Campaign in Minutes."
          />
        </div>

        <ol className="relative mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
          <div
            className="pointer-events-none absolute top-4 bottom-4 left-4 w-px bg-outline-variant md:top-4 md:right-4 md:bottom-auto md:left-4 md:h-px md:w-auto"
            aria-hidden="true"
          />
          {howItWorks.map((item, index) => (
            <li
              key={item.step}
              className="relative pl-12 md:pl-0"
              data-reveal
              data-reveal-delay={index + 1}
            >
              <span className="absolute top-0 left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-outline-variant bg-surface-container-low data text-xs font-semibold text-primary md:static md:mb-4">
                {item.step}
              </span>
              <h3 className="headline-md">{item.title}</h3>
              <p className="body-md mt-2">{item.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
