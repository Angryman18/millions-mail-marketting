import { Container } from "@/components/ui/container";
import {
  IconActivity,
  IconGauge,
  IconReport,
  IconShield,
} from "@/components/ui/icons";
import { Section, SectionHeading } from "@/components/ui/section";
import { reliabilityPrinciples } from "@/lib/constants";

const icons = [IconGauge, IconShield, IconActivity, IconReport];

export function Reliability() {
  return (
    <Section tone="low" className="relative overflow-hidden">
      <NetworkBackdrop />
      <Container className="relative">
        <div className="max-w-3xl" data-reveal>
          <SectionHeading
            align="left"
            eyebrow="Infrastructure"
            title="Built Around Reliable Sending."
            description="The platform doesn't try to replace your SMTP provider. It works with your infrastructure and handles campaign orchestration, scheduling, rate limits, and reporting around it."
          />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {reliabilityPrinciples.map((principle, index) => {
            const Icon = icons[index];
            return (
              <article
                key={principle.title}
                className="card p-6"
                data-reveal
                data-reveal-delay={(index % 2) + 1}
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-outline-variant bg-surface-container-low text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="headline-md">{principle.title}</h3>
                <p className="body-md mt-2">{principle.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

function NetworkBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="reliability-dots"
          width="28"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.5" cy="1.5" r="1" fill="var(--outline-variant)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#reliability-dots)" />
      <g
        fill="none"
        stroke="var(--primary)"
        strokeOpacity="0.22"
        strokeWidth="1"
        strokeDasharray="4 6"
      >
        <path
          className="motion-safe:animate-[dash-flow_8s_linear_infinite]"
          d="M80 120 C 220 80, 340 200, 520 160 S 860 80, 1100 180"
        />
        <path
          className="motion-safe:animate-[dash-flow_11s_linear_infinite]"
          d="M40 280 C 260 240, 400 360, 640 300 S 980 220, 1240 340"
        />
      </g>
    </svg>
  );
}
