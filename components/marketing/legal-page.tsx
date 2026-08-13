import { Container } from "@/components/ui/container";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <main id="main" className="section">
      <Container className="max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="headline-lg">{title}</h1>
        {updated ? (
          <p className="mt-3 text-sm text-on-surface-muted">{updated}</p>
        ) : null}
        <div className="legal-copy mt-8">{children}</div>
      </Container>
    </main>
  );
}
