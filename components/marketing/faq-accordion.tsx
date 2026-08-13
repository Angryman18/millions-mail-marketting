"use client";

import { useId, useState } from "react";
import { IconChevronDown } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type Item = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: readonly Item[] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-outline-variant border-y border-outline-variant">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-display text-[1.0625rem] font-semibold tracking-[-0.02em] text-on-surface">
                  {item.question}
                </span>
                <IconChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-on-surface-variant transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-5"
            >
              <p className="body-md max-w-2xl">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
