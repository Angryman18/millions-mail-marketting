import {
  CampaignManagementVisual,
  CsvImportVisual,
  ProgressVisual,
  RateLimitVisual,
  ReportsVisual,
  SchedulingVisual,
  SmtpProvidersVisual,
  SmtpVerificationVisual,
} from "@/components/marketing/feature-visuals";
import { Container } from "@/components/ui/container";
import {
  IconCalendar,
  IconChart,
  IconFile,
  IconGauge,
  IconLayers,
  IconReport,
  IconServer,
  IconShield,
} from "@/components/ui/icons";
import { Section, SectionHeading } from "@/components/ui/section";

const features = [
  {
    title: "Campaign Management",
    description:
      "Create and manage multiple email campaigns from a single dashboard.",
    icon: IconLayers,
    visual: CampaignManagementVisual,
  },
  {
    title: "Smart Rate Limiting",
    description:
      "The platform respects the configured limits of your SMTP provider instead of blindly sending everything at once.",
    icon: IconGauge,
    visual: RateLimitVisual,
  },
  {
    title: "Bring Your Own SMTP",
    description:
      "Connect Gmail, Amazon SES, SendGrid, Mailgun, or a custom SMTP server.",
    icon: IconServer,
    visual: SmtpProvidersVisual,
  },
  {
    title: "SMTP Verification",
    description:
      "Before a server can be used in campaigns, the system tests the configuration to confirm it actually works.",
    icon: IconShield,
    visual: SmtpVerificationVisual,
  },
  {
    title: "CSV Audience Import",
    description:
      "Upload a CSV of your audience. Parsed columns, validated emails, and a clear import summary.",
    icon: IconFile,
    visual: CsvImportVisual,
  },
  {
    title: "Campaign Scheduling",
    description:
      "Schedule campaigns in advance, with support up to 7 days from now.",
    icon: IconCalendar,
    visual: SchedulingVisual,
  },
  {
    title: "Live Campaign Progress",
    description:
      "See emails delivered, total contacts, failed sends, and campaign completion as the job runs.",
    icon: IconChart,
    visual: ProgressVisual,
  },
  {
    title: "Campaign Reports",
    description:
      "After a campaign finishes, review how many emails were delivered, how many failed, and whether the list completed.",
    icon: IconReport,
    visual: ReportsVisual,
  },
];

export function Features() {
  return (
    <Section id="features">
      <Container>
        <div data-reveal>
          <SectionHeading
            eyebrow="Features"
            title="Everything You Need to Run Better Email Campaigns."
            description="From importing your audience to watching a campaign complete, everything is designed to make email operations simple and reliable."
          />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="card card-interactive p-5 sm:p-6"
              data-reveal
              data-reveal-delay={(index % 2) + 1}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-outline-variant bg-surface-container-low text-primary">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="headline-md">{feature.title}</h3>
              <p className="body-md mt-2">{feature.description}</p>
              <div className="mt-5">
                <feature.visual />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
