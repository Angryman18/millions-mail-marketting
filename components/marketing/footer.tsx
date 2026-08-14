import Link from "next/link";
// Social profiles are not live yet — restore icons when URLs are ready.
// import { IconGitHub, IconLinkedIn, IconX } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { footerNav, PRODUCT_NAME } from "@/lib/constants";

// const social = [
//   { href: "#", label: "X / Twitter", icon: IconX },
//   { href: "#", label: "LinkedIn", icon: IconLinkedIn },
//   { href: "#", label: "GitHub", icon: IconGitHub },
// ];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-outline-variant bg-surface-container-low">
      <div className="container-site py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,minmax(0,0.7fr))]">
          <div className="max-w-sm">
            <Logo />
            <p className="body-md mt-4">
              Create, schedule, and run email campaigns on the SMTP
              infrastructure you already control.
            </p>
            {/* Social icons hidden until accounts exist
            <div className="mt-5 flex items-center gap-2">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-outline-variant text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            */}
          </div>

          <FooterColumn title="Product" links={footerNav.product} />
          <FooterColumn title="Company" links={footerNav.company} />
          <FooterColumn title="Legal" links={footerNav.legal} />
        </div>
      </div>
      <div className="border-t border-outline-variant">
        <div className="container-site flex flex-col gap-2 py-5 text-sm text-on-surface-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {PRODUCT_NAME}. All rights reserved.
          </p>
          <p>Coming soon.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="label-md text-on-surface">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-on-surface-variant transition-colors hover:text-on-surface"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
