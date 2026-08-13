import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-container shadow-[0_1px_0_color-mix(in_srgb,var(--on-primary)_12%,transparent)_inset]",
  secondary:
    "bg-surface-container-lowest text-primary border border-outline-variant hover:border-[color-mix(in_srgb,var(--primary)_32%,var(--outline-variant))] hover:bg-surface-container-low",
  ghost:
    "bg-transparent text-on-surface hover:bg-surface-container",
} as const;

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.9375rem]",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type Common = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
};

type ButtonAsButton = Common & {
  href?: undefined;
  type?: "button" | "submit";
  disabled?: boolean;
};

type ButtonAsLink = Common & {
  href: string;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    children,
    className,
    variant = "primary",
    size = "md",
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-[background-color,border-color,box-shadow,transform] duration-200 ease-out",
    "disabled:pointer-events-none disabled:opacity-55",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <button
      type={buttonProps.type ?? "button"}
      disabled={buttonProps.disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
