import {
  CampaignBuilderMock,
  CampaignProgressMock,
  SmtpManagerMock,
} from "@/components/marketing/showcase-visuals";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const showcases = [
  {
    eyebrow: "Campaigns",
    title: "Control Every Campaign",
    description:
      "Compose the message, choose the audience, pick a verified SMTP server, and decide exactly when it should send.",
    points: [
      "Name, subject, audience, and SMTP in one view",
      "Schedule up to 7 days ahead",
      "Rate limits applied before the first email leaves",
    ],
    visual: CampaignBuilderMock,
  },
  {
    eyebrow: "Progress",
    title: "Know What's Happening",
    description:
      "Watch how many emails were delivered, how many contacts remain, and how many failed — while the campaign is still running.",
    points: [
      "Delivered, remaining, and failed counts",
      "Campaign completion percentage",
      "Live rate-limit status for the active SMTP server",
    ],
    visual: CampaignProgressMock,
  },
  {
    eyebrow: "Infrastructure",
    title: "Never Guess About Your SMTP",
    description:
      "Add multiple providers, run verification, and only promote servers that pass connection, auth, and send tests.",
    points: [
      "Gmail, Amazon SES, SendGrid, Mailgun, or custom",
      "Verification required before campaign use",
      "Clear ready / testing states per server",
    ],
    visual: SmtpManagerMock,
  },
];

export function ProductShowcase() {
  return (
    <Section>
      <Container>
        <div className="space-y-20 lg:space-y-28">
          {showcases.map((item, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={item.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div
                  className={cn(reversed && "lg:order-2")}
                  data-reveal
                >
                  <p className="eyebrow">{item.eyebrow}</p>
                  <h2 className="headline-lg">{item.title}</h2>
                  <p className="body-lg mt-4">{item.description}</p>
                  <ul className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-[1rem] text-on-surface-variant"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={cn(reversed && "lg:order-1")}
                  data-reveal
                  data-reveal-delay="2"
                >
                  <item.visual />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
