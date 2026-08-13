export const PRODUCT_NAME = "Millions Mail";

export const PRODUCT_TAGLINE = "Email Campaigns, Powered by Your SMTP.";

export const PRODUCT_DESCRIPTION =
  "Create, schedule, and run email campaigns using your own SMTP infrastructure.";

export const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const footerNav = {
  product: [
    { href: "/#features", label: "Features" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#faq", label: "FAQ" },
  ],
  company: [
    { href: "/#about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
} as const;

export const smtpProviders = [
  "Gmail",
  "Amazon SES",
  "SendGrid",
  "Mailgun",
  "Custom SMTP",
] as const;

export const howItWorks = [
  {
    step: "01",
    title: "Connect SMTP",
    description:
      "Add and verify your Gmail, Amazon SES, or custom SMTP server.",
  },
  {
    step: "02",
    title: "Import Your Audience",
    description:
      "Upload your CSV and let the platform process your contact list.",
  },
  {
    step: "03",
    title: "Create & Schedule",
    description:
      "Build your campaign, select the SMTP server, choose your audience, and schedule when it should run.",
  },
  {
    step: "04",
    title: "Track Progress",
    description:
      "Watch delivered, failed, and remaining counts in real time, then review the completed campaign report.",
  },
] as const;

export const faqItems = [
  {
    question: "What SMTP providers can I use?",
    answer:
      "Connect supported SMTP providers such as Gmail, Amazon SES, SendGrid, Mailgun, or any custom SMTP server. If it speaks SMTP, you can bring it.",
  },
  {
    question: "Do you provide SMTP servers?",
    answer:
      "No. The platform does not require a proprietary sending server. You bring your own SMTP infrastructure and keep full control of deliverability, reputation, and provider choice.",
  },
  {
    question: "Does the platform respect SMTP rate limits?",
    answer:
      "Yes. Campaign sending is paced according to the configured or provider limits for each SMTP server, so you do not overwhelm your infrastructure.",
  },
  {
    question: "Can I upload a CSV?",
    answer:
      "Yes. Upload a CSV containing your email audience. The platform parses columns, validates addresses, and prepares the list for campaign use.",
  },
  {
    question: "Can I schedule campaigns?",
    answer:
      "Yes. Campaigns can be scheduled up to 7 days in advance, then run automatically at the selected time.",
  },
  {
    question: "Can I connect multiple SMTP servers?",
    answer:
      "Yes. Add multiple SMTP servers, verify each one, and choose which server a campaign should use.",
  },
  {
    question: "Is pricing available?",
    answer:
      "Pricing will be announced soon.",
  },
] as const;

export const reliabilityPrinciples = [
  {
    title: "Respect Rate Limits",
    description: "Avoid overwhelming your SMTP provider.",
  },
  {
    title: "Validate Before Sending",
    description: "SMTP servers are tested before they can be used.",
  },
  {
    title: "Controlled Campaign Execution",
    description:
      "Campaigns progress according to your configured sending limits.",
  },
  {
    title: "Transparent Reporting",
    description:
      "See emails delivered, failed sends, remaining contacts, and campaign completion.",
  },
] as const;
