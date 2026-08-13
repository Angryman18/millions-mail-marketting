import { Badge } from "@/components/ui/badge";
import { smtpProviders } from "@/lib/constants";

export function CampaignManagementVisual() {
  const rows = [
    ["Name", "Product Launch — August"],
    ["Subject", "Introducing the new workspace"],
    ["Audience", "customers.csv · 24,532"],
    ["SMTP", "Amazon SES"],
    ["Status", "Scheduled"],
    ["Send time", "Fri, 10:30 AM"],
  ];

  return (
    <div className="rounded-md border border-outline-variant bg-surface-container-low p-3">
      <dl className="space-y-2">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-3">
            <dt className="text-[0.6875rem] uppercase tracking-[0.06em] text-on-surface-muted">
              {label}
            </dt>
            <dd className="truncate text-right text-xs font-medium text-on-surface">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function RateLimitVisual() {
  return (
    <div className="rounded-md border border-outline-variant bg-surface-container-low p-3">
      <div className="flex items-center justify-between">
        <p className="text-xs text-on-surface-variant">SMTP Limit: 30 emails/min</p>
        <Badge tone="success">Protected ✓</Badge>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-container-highest">
        <div className="gauge-fill h-full rounded-full bg-primary" />
      </div>
      <p className="data mt-2 text-xs text-on-surface">
        Current: 28 emails/min
      </p>
      <p className="mt-1 text-[0.6875rem] text-on-surface-muted">
        Sending is automatically paced to stay under the provider cap.
      </p>
    </div>
  );
}

export function SmtpProvidersVisual() {
  return (
    <div className="rounded-md border border-outline-variant bg-surface-container-low p-3">
      <div className="flex flex-wrap gap-1.5">
        {smtpProviders.map((provider) => (
          <Badge key={provider} tone="outline">
            {provider}
          </Badge>
        ))}
      </div>
      <p className="mt-3 text-xs font-medium leading-relaxed text-on-surface">
        Your SMTP. Your sending infrastructure. Your control.
      </p>
    </div>
  );
}

export function SmtpVerificationVisual() {
  const checks = [
    "Connection",
    "Authentication",
    "Sending Test",
    "Configuration Valid",
  ];

  return (
    <div className="rounded-md border border-outline-variant bg-surface-container-low p-3">
      <ul className="space-y-2">
        {checks.map((item, index) => (
          <li
            key={item}
            className="check-in flex items-center justify-between text-xs text-on-surface"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <span>{item}</span>
            <span className="font-medium text-success">✓</span>
          </li>
        ))}
      </ul>
      <div className="mt-3">
        <Badge tone="success">SMTP Ready</Badge>
      </div>
    </div>
  );
}

export function CsvImportVisual() {
  return (
    <div className="rounded-md border border-outline-variant bg-surface-container-low p-3">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-medium text-on-surface">customers.csv</p>
        <Badge tone="success">Validated</Badge>
      </div>
      <p className="data mt-2 text-xs text-on-surface-variant">
        24,532 contacts imported
      </p>
      <p className="mt-2 text-[0.6875rem] text-on-surface-muted">
        Columns: email, first_name, company
      </p>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-container-highest">
        <div className="h-full w-full rounded-full bg-success" />
      </div>
      <p className="mt-1.5 text-[0.6875rem] text-on-surface-muted">
        Email validation complete
      </p>
    </div>
  );
}

export function SchedulingVisual() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div className="rounded-md border border-outline-variant bg-surface-container-low p-3">
      <div className="grid grid-cols-7 gap-1.5 text-center">
        {days.map((day, index) => (
          <span
            key={`${day}-${index}`}
            className={`flex h-8 items-center justify-center rounded-md text-[0.6875rem] font-medium ${
              index === 4
                ? "bg-primary text-on-primary"
                : "bg-surface-container-lowest text-on-surface-variant"
            }`}
          >
            {day}
          </span>
        ))}
      </div>
      <div className="mt-3">
        <Badge tone="brand">Campaign scheduled</Badge>
        <p className="data mt-2 text-xs text-on-surface">Friday, 10:30 AM</p>
        <p className="mt-1 text-[0.6875rem] text-on-surface-muted">
          Up to 7 days in advance
        </p>
      </div>
    </div>
  );
}

export function ProgressVisual() {
  const stats = [
    ["Delivered", "32,812"],
    ["Contacts", "48,240"],
    ["Failed", "214"],
    ["Progress", "68%"],
  ];

  return (
    <div className="rounded-md border border-outline-variant bg-surface-container-low p-3">
      <div className="grid grid-cols-2 gap-2">
        {stats.map(([label, value]) => (
          <div
            key={label}
            className="rounded-md border border-outline-variant bg-surface-container-lowest px-2.5 py-2"
          >
            <p className="text-[0.625rem] uppercase tracking-[0.05em] text-on-surface-muted">
              {label}
            </p>
            <p className="data text-sm font-semibold text-on-surface">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-container-highest">
        <div className="progress-fill h-full rounded-full bg-primary" />
      </div>
      <p className="mt-1.5 text-[0.6875rem] text-on-surface-muted">
        25 / 30 emails per min
      </p>
    </div>
  );
}

export function ReportsVisual() {
  const stats = [
    ["Delivered", "48,026"],
    ["Contacts", "48,240"],
    ["Failed", "214"],
    ["Complete", "100%"],
  ];

  return (
    <div className="rounded-md border border-outline-variant bg-surface-container-low p-3">
      <div className="grid grid-cols-2 gap-2">
        {stats.map(([label, value]) => (
          <div
            key={label}
            className="rounded-md border border-outline-variant bg-surface-container-lowest px-2.5 py-2"
          >
            <p className="text-[0.625rem] uppercase tracking-[0.05em] text-on-surface-muted">
              {label}
            </p>
            <p className="data text-sm font-semibold text-on-surface">{value}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[0.6875rem] text-on-surface-muted">
        Failed sends and remaining contacts are included in the finished report.
      </p>
    </div>
  );
}
