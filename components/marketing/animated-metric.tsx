"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

function formatValue(value: number, format: "number" | "percent") {
  if (format === "percent") {
    return `${value.toFixed(1)}%`;
  }

  return Math.round(value).toLocaleString("en-US");
}

export function AnimatedMetric({
  value,
  format = "number",
  className,
}: {
  value: number;
  format?: "number" | "percent";
  className?: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const animate = () => {
      if (started.current) return;
      started.current = true;

      if (reduceMotion) {
        setDisplay(value);
        return;
      }

      const duration = 1100;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(value * eased);
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={cn("data", className)}>
      {formatValue(display, format)}
    </span>
  );
}
