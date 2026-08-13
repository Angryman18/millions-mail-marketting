import { Container } from "@/components/ui/container";
import {
  IconCalendar,
  IconChart,
  IconGauge,
  IconServer,
} from "@/components/ui/icons";

const items = [
  { icon: IconServer, label: "Bring Your SMTP" },
  { icon: IconGauge, label: "Respect Provider Limits" },
  { icon: IconCalendar, label: "Schedule Campaigns" },
  { icon: IconChart, label: "Track Progress" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-outline-variant bg-surface-container-low">
      <Container>
        <ul className="grid grid-cols-1 divide-y divide-outline-variant sm:grid-cols-2 sm:divide-y-0 md:grid-cols-4">
          {items.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 px-2 py-5 sm:justify-center sm:px-4"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-outline-variant bg-surface-container-lowest text-primary">
                <item.icon className="h-4 w-4" />
              </span>
              <span className="label-md text-on-surface">{item.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
