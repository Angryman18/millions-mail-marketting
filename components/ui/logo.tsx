import Link from "next/link";
import { PRODUCT_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect width="32" height="32" rx="8" fill="var(--primary)" />
      <path
        d="M8 21h3v-6H8v6Zm6.5 0h3V10h-3v11ZM21 21h3V7h-3v14Z"
        fill="var(--on-primary)"
      />
    </svg>
  );
}

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 text-on-surface no-underline",
        className,
      )}
    >
      <LogoMark className="h-8 w-8 shrink-0" />
      <span
        className={cn(
          "font-display text-[1.0625rem] font-semibold tracking-[-0.03em]",
          compact && "sr-only sm:not-sr-only",
        )}
      >
        {PRODUCT_NAME}
      </span>
    </Link>
  );
}
