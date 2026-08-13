import { cn } from "@/lib/utils";

const tones = {
  default: "bg-surface",
  low: "bg-surface-container-low",
  lowest: "bg-surface-container-lowest",
} as const;

export function Section({
  id,
  children,
  className,
  tone = "default",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: keyof typeof tones;
}) {
  return (
    <section id={id} className={cn("section", tones[tone], className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="headline-lg text-on-surface">{title}</h2>
      {description ? <p className="body-lg mt-4">{description}</p> : null}
    </div>
  );
}
