import { cn } from "@/lib/utils";

const tones = {
  brand:
    "bg-primary-fixed text-on-primary-fixed border-transparent",
  success:
    "bg-success-container text-success border-transparent",
  warning:
    "bg-warning-container text-on-warning border-transparent",
  neutral:
    "bg-surface-container text-on-surface-variant border-outline-variant",
  outline:
    "bg-surface-container-lowest text-on-surface-variant border-outline-variant",
} as const;

export function Badge({
  children,
  className,
  tone = "neutral",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: keyof typeof tones;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.6875rem] font-medium tracking-[0.01em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
