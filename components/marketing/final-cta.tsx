import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconArrowRight } from "@/components/ui/icons";

export function FinalCta() {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-10">
      <div
        className="cta-gradient relative overflow-hidden rounded-[var(--radius-lg)]"
        data-reveal
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
          aria-hidden="true"
        />
        <Container className="relative py-16 text-center sm:py-20">
          <h2 className="headline-lg text-[var(--on-primary)]">
            Your Next Campaign Starts Here.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[1.125rem] leading-relaxed text-[color-mix(in_srgb,var(--on-primary)_86%,transparent)]">
            Bring your SMTP. Bring your audience. We&apos;ll handle the campaign
            execution.
          </p>
          <div className="mt-8">
            <Button
              href="/#features"
              size="lg"
              className="bg-surface-container-lowest text-primary hover:bg-surface-container-low"
            >
              Explore Features
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
