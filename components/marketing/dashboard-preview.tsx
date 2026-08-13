import { AnimatedMetric } from "@/components/marketing/animated-metric";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const metrics = [
  { label: "Emails Delivered", value: 32812, format: "number" as const },
  { label: "Total Contacts", value: 48240, format: "number" as const },
  { label: "Failed", value: 214, format: "number" as const },
  { label: "Campaign Progress", value: 68, format: "percent" as const, whole: true },
];

const recentCampaigns = [
  { name: "Product Launch — August", status: "Sending", tone: "warning" as const },
  { name: "Onboarding Series", status: "Scheduled", tone: "brand" as const },
  { name: "Weekly Digest", status: "Completed", tone: "success" as const },
];

export function DashboardPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "card min-w-0 overflow-hidden shadow-[var(--elevation-2)]",
        className,
      )}
      aria-label="Campaign dashboard preview showing Product Launch August campaign with sending progress, failed sends, and SMTP rate limits"
    >
      <div className="flex items-center justify-between gap-3 border-b border-outline-variant bg-surface-container-low px-4 py-3 sm:px-5">
        <div className="min-w-0">
          <p className="label-md text-on-surface-muted">Workspace / Campaigns</p>
          <p className="mt-0.5 truncate font-display text-sm font-semibold tracking-[-0.02em] text-on-surface">
            Product Launch — August Campaign
          </p>
        </div>
        <Badge tone="warning" className="shrink-0">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-warning" />
          Sending
        </Badge>
      </div>

      <div className="grid grid-cols-2 divide-x divide-y divide-outline-variant border-b border-outline-variant lg:grid-cols-4 lg:divide-y-0">
        {metrics.map((metric) => (
          <div key={metric.label} className="px-4 py-3 sm:px-5">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.06em] text-on-surface-muted">
              {metric.label}
            </p>
            <p className="mt-1 text-[1.35rem] font-semibold text-on-surface sm:text-[1.5rem]">
              {metric.whole ? (
                <AnimatedWholePercent value={metric.value} />
              ) : (
                <AnimatedMetric value={metric.value} format={metric.format} />
              )}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="border-b border-outline-variant p-4 sm:p-5 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between gap-3">
            <p className="label-md text-on-surface">Sending progress</p>
            <p className="data text-xs text-on-surface-variant">32,812 / 48,240</p>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-container-high">
            <div className="progress-fill h-full rounded-full bg-primary" />
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Badge tone="outline">Sending at 25 emails/min</Badge>
            <Badge tone="success">Rate limit protected</Badge>
          </div>

          <div className="mt-5 rounded-md border border-outline-variant bg-surface-container-low p-3">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.06em] text-on-surface-muted">
                  SMTP server
                </p>
                <p className="mt-1 text-sm font-medium text-on-surface">
                  Amazon SES
                </p>
                <p className="data truncate text-xs text-on-surface-variant">
                  email-smtp.us-east-1.amazonaws.com
                </p>
              </div>
              <Badge tone="success" className="shrink-0">
                Verified · Ready
              </Badge>
            </div>
          </div>
        </div>

        <div className="hidden border-b border-outline-variant p-4 sm:block sm:p-5 lg:border-b-0">
          <p className="label-md mb-3 text-on-surface">Recent campaigns</p>
          <ul className="space-y-2.5">
            {recentCampaigns.map((campaign) => (
              <li
                key={campaign.name}
                className="flex items-center justify-between gap-3 rounded-md border border-outline-variant bg-surface-container-lowest px-3 py-2"
              >
                <span className="truncate text-sm text-on-surface">
                  {campaign.name}
                </span>
                <Badge tone={campaign.tone}>{campaign.status}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid border-t border-outline-variant sm:grid-cols-3">
        <div className="border-b border-outline-variant p-4 sm:border-b-0 sm:border-r sm:p-5">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.06em] text-on-surface-muted">
            Remaining
          </p>
          <p className="data mt-1 text-lg font-semibold text-on-surface">15,214</p>
          <p className="mt-1 text-xs text-on-surface-muted">Still queued to send</p>
        </div>
        <div className="border-b border-outline-variant p-4 sm:border-b-0 sm:border-r sm:p-5">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.06em] text-on-surface-muted">
            Failed
          </p>
          <p className="data mt-1 text-lg font-semibold text-on-surface">214</p>
          <p className="mt-1 text-xs text-on-surface-muted">SMTP rejected or timed out</p>
        </div>
        <div className="p-4 sm:p-5">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.06em] text-on-surface-muted">
            Rate limit
          </p>
          <p className="data mt-1 text-lg font-semibold text-on-surface">25 / 30</p>
          <p className="mt-1 text-xs text-on-surface-muted">emails per minute</p>
        </div>
      </div>
    </div>
  );
}

function AnimatedWholePercent({ value }: { value: number }) {
  return (
    <span className="data">
      <AnimatedMetric value={value} format="number" />%
    </span>
  );
}

export function FloatingStatusCards() {
  return (
    <>
      <div
        className="float-card pointer-events-none absolute top-6 -left-[13rem] z-20 hidden w-[11.5rem] rounded-md border border-outline-variant bg-surface-container-lowest px-3 py-2 text-left shadow-[var(--elevation-2)] xl:block"
        aria-hidden="true"
      >
        <p className="text-xs font-medium text-success">SMTP Verified ✓</p>
        <p className="mt-0.5 text-[0.6875rem] text-on-surface-muted">
          Connection tested
        </p>
      </div>
      <div
        className="float-card pointer-events-none absolute top-20 -right-[13.25rem] z-20 hidden w-[11.75rem] rounded-md border border-outline-variant bg-surface-container-lowest px-3 py-2 text-left shadow-[var(--elevation-2)] xl:block"
        aria-hidden="true"
        style={{ animationDelay: "0.8s" }}
      >
        <p className="text-xs font-medium text-on-surface">Rate Limit Protected</p>
        <p className="mt-0.5 text-[0.6875rem] text-on-surface-muted">
          25 / 30 emails per min
        </p>
      </div>
      <div
        className="float-card pointer-events-none absolute bottom-2 -left-[12.5rem] z-20 hidden w-[11.5rem] rounded-md border border-outline-variant bg-surface-container-lowest px-3 py-2 text-left shadow-[var(--elevation-2)] xl:block"
        aria-hidden="true"
        style={{ animationDelay: "1.4s" }}
      >
        <p className="text-xs font-medium text-on-surface">Campaign Scheduled</p>
        <p className="mt-0.5 text-[0.6875rem] text-on-surface-muted">
          Friday, 10:30 AM
        </p>
      </div>
      <div
        className="float-card pointer-events-none absolute right-[-12rem] bottom-10 z-20 hidden w-[11rem] rounded-md border border-outline-variant bg-surface-container-lowest px-3 py-2 text-left shadow-[var(--elevation-2)] xl:block"
        aria-hidden="true"
        style={{ animationDelay: "1.9s" }}
      >
        <p className="text-xs font-medium text-on-surface">CSV Imported</p>
        <p className="mt-0.5 text-[0.6875rem] text-on-surface-muted">
          24,532 contacts
        </p>
      </div>
    </>
  );
}
