import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const values = [
  {
    title: "Simplicity",
    text: "Campaign operations should not require a specialist team just to press send.",
  },
  {
    title: "Reliability",
    text: "Sending is paced, verified, and observable so the work stays predictable.",
  },
  {
    title: "Transparency",
    text: "Every campaign should leave a clear record of what was delivered, what failed, and what remains.",
  },
  {
    title: "User control",
    text: "Your SMTP, your audience, your reputation. The platform orchestrates; it does not take over.",
  },
];

export function About() {
  return (
    <Section id="about" tone="low">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20">
          <div data-reveal>
            <p className="eyebrow">About</p>
            <h2 className="headline-lg">
              Email Infrastructure Shouldn&apos;t Feel Complicated.
            </h2>
            <div className="mt-6 space-y-5">
              <p className="body-lg">
                Most email tools either hide the sending layer or force you
                onto someone else&apos;s infrastructure. Both options trade away
                control for convenience.
              </p>
              <p className="body-lg">
                This platform was built for the opposite case: you already have
                SMTP — Gmail, Amazon SES, SendGrid, Mailgun, or your own
                server — and you need a precise way to create campaigns, import
                audiences, respect provider limits, and watch the send complete.
              </p>
              <p className="body-lg">
                The work is orchestration. Verify the server. Pace the send.
                Schedule the window. Track delivered, failed, and remaining. Keep
                the operator in command of the infrastructure they already trust.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2" data-reveal data-reveal-delay="2">
            {values.map((value) => (
              <article key={value.title} className="card p-5">
                <h3 className="font-display text-base font-semibold tracking-[-0.02em] text-on-surface">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
