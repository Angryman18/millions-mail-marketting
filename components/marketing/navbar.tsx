"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IconClose, IconMenu } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 h-[var(--header-height)] border-b transition-[background-color,border-color,box-shadow] duration-200",
          scrolled || open
            ? "border-outline-variant bg-[color-mix(in_srgb,var(--surface)_78%,transparent)] shadow-[0_1px_0_color-mix(in_srgb,var(--outline-variant)_40%,transparent)] backdrop-blur-xl"
            : "border-transparent bg-[color-mix(in_srgb,var(--surface)_55%,transparent)] backdrop-blur-md",
        )}
      >
        <div className="container-site flex h-full items-center justify-between gap-4">
          <Logo />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 lg:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="label-md text-on-surface-variant transition-colors hover:text-on-surface"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-on-surface lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <IconClose className="h-5 w-5" />
            ) : (
              <IconMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-[var(--header-height)] bottom-0 z-[60] overflow-y-auto bg-surface lg:hidden"
        >
          <nav
            aria-label="Mobile"
            className="container-site flex flex-col gap-1 py-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-[1.0625rem] font-medium text-on-surface hover:bg-surface-container"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
