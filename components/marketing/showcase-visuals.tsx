import { Badge } from "@/components/ui/badge";

export function CampaignBuilderMock() {
  return (
    <div className="card overflow-hidden shadow-[var(--elevation-2)]">
      <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-low px-4 py-3">
        <div>
          <p className="text-[0.6875rem] uppercase tracking-[0.06em] text-on-surface-muted">
            New campaign
          </p>
          <p className="font-display text-sm font-semibold text-on-surface">
            Product Launch — August
          </p>
        </div>
        <Badge tone="brand">Draft</Badge>
      </div>

      <div className="grid gap-0 md:grid-cols-2">
        <div className="space-y-3 border-b border-outline-variant p-4 md:border-b-0 md:border-r">
          <Field label="Subject" value="Introducing the new workspace" />
          <Field label="From" value="hello@yourdomain.com" />
          <Field label="Audience" value="customers.csv · 24,532 contacts" />
          <Field label="SMTP" value="Amazon SES · Verified" />
        </div>
        <div className="space-y-3 p-4">
          <Field label="Schedule" value="Friday, 10:30 AM" />
          <Field label="Rate limit" value="30 emails / minute" />
          <div className="rounded-md border border-outline-variant bg-surface-container-low px-3 py-2.5">
            <p className="text-[0.6875rem] uppercase tracking-[0.06em] text-on-surface-muted">
              Preview
            </p>
            <p className="mt-1 text-sm text-on-surface">
              A concise launch note with a single clear action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CampaignProgressMock() {
  return (
    <div className="card overflow-hidden shadow-[var(--elevation-2)]">
      <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-low px-4 py-3">
        <div>
          <p className="text-[0.6875rem] uppercase tracking-[0.06em] text-on-surface-muted">
            Live progress
          </p>
          <p className="font-display text-sm font-semibold text-on-surface">
            Product Launch — August
          </p>
        </div>
        <Badge tone="warning">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-warning" />
          Sending
        </Badge>
      </div>
      <div className="grid grid-cols-2 divide-x divide-outline-variant border-b border-outline-variant sm:grid-cols-4">
        {[
          ["Delivered", "32,812"],
          ["Contacts", "48,240"],
          ["Failed", "214"],
          ["Progress", "68%"],
        ].map(([label, value]) => (
          <div key={label} className="px-4 py-3">
            <p className="text-[0.625rem] uppercase tracking-[0.06em] text-on-surface-muted">
              {label}
            </p>
            <p className="data text-lg font-semibold text-on-surface">{value}</p>
          </div>
        ))}
      </div>
      <div className="space-y-4 p-4 sm:p-5">
        <div>
          <div className="flex items-center justify-between gap-3">
            <p className="label-md text-on-surface">Campaign completion</p>
            <p className="data text-xs text-on-surface-variant">32,812 / 48,240</p>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-container-high">
            <div className="progress-fill h-full rounded-full bg-primary" />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="outline">Sending at 25 emails/min</Badge>
          <Badge tone="success">Rate limit 25 / 30</Badge>
        </div>
      </div>
    </div>
  );
}

export function SmtpManagerMock() {
  const servers = [
    {
      name: "Amazon SES",
      host: "email-smtp.us-east-1.amazonaws.com",
      status: "Ready",
      tone: "success" as const,
    },
    {
      name: "SendGrid",
      host: "smtp.sendgrid.net",
      status: "Ready",
      tone: "success" as const,
    },
    {
      name: "Workspace Gmail",
      host: "smtp.gmail.com",
      status: "Testing",
      tone: "warning" as const,
    },
  ];

  return (
    <div className="card overflow-hidden shadow-[var(--elevation-2)]">
      <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-low px-4 py-3">
        <div>
          <p className="text-[0.6875rem] uppercase tracking-[0.06em] text-on-surface-muted">
            SMTP servers
          </p>
          <p className="font-display text-sm font-semibold text-on-surface">
            Connected infrastructure
          </p>
        </div>
        <Badge tone="outline">3 configured</Badge>
      </div>
      <ul className="divide-y divide-outline-variant">
        {servers.map((server) => (
          <li key={server.name} className="flex items-center justify-between gap-3 px-4 py-3">
            <div className="min-w-0">
              <p className="text-sm font-medium text-on-surface">{server.name}</p>
              <p className="data truncate text-xs text-on-surface-variant">
                {server.host}
              </p>
            </div>
            <Badge tone={server.tone}>{server.status}</Badge>
          </li>
        ))}
      </ul>
      <div className="border-t border-outline-variant bg-surface-container-low p-4">
        <p className="text-[0.6875rem] uppercase tracking-[0.06em] text-on-surface-muted">
          Last verification
        </p>
        <ul className="mt-2 grid grid-cols-2 gap-2 text-xs text-on-surface">
          {["Connection ✓", "Authentication ✓", "Sending Test ✓", "Configuration Valid ✓"].map(
            (item) => (
              <li key={item}>{item}</li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-outline-variant bg-surface-container-low px-3 py-2.5">
      <p className="text-[0.6875rem] uppercase tracking-[0.06em] text-on-surface-muted">
        {label}
      </p>
      <p className="mt-1 truncate text-sm text-on-surface">{value}</p>
    </div>
  );
}
