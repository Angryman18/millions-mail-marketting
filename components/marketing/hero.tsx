import {
  DashboardPreview,
  FloatingStatusCards,
} from "@/components/marketing/dashboard-preview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconArrowRight } from "@/components/ui/icons";

export function Hero() {
  return (
    <section className="relative overflow-x-clip pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div
        className="hero-orb left-[8%] top-8 h-56 w-56 bg-primary-fixed"
        aria-hidden="true"
      />
      <div
        className="hero-orb right-[10%] top-24 h-64 w-64 bg-[#c9d8ff]"
        style={{ animationDelay: "-6s" }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="relative mx-auto max-w-3xl text-center" data-reveal>
          <FloatingStatusCards />
          <Badge tone="brand" className="px-3 py-1 text-[0.75rem]">
            Coming Soon
          </Badge>
          <h1 className="display mx-auto mt-5 max-w-[13ch] sm:max-w-[18ch]">
            Email Campaigns, Powered by Your SMTP.
          </h1>
          <p className="body-lg mx-auto mt-5 max-w-2xl">
            Create, schedule, and run email campaigns while keeping control of
            your sending infrastructure. Connect your SMTP provider, upload
            your audience, and let the platform handle the rest.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/#features" size="lg">
              Explore Features
              <IconArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/#how-it-works" variant="secondary" size="lg">
              How It Works
            </Button>
          </div>
        </div>

        <div
          className="relative mx-auto mt-14 w-full min-w-0 max-w-5xl lg:mt-16"
          data-reveal
          data-reveal-delay="2"
        >
          <DashboardPreview />
        </div>
      </Container>
    </section>
  );
}
