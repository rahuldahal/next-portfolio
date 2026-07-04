import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allTags, writing, packages, notes } from "@/content";
import { SectionHeader, Tag, FormatDate } from "@/components/primitives";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allTags().map((t) => ({ slug: t }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `#${slug} — Tags`,
    description: `Everything tagged with #${slug}.`,
    alternates: { canonical: `/tag/${slug}` },
  };
}

export default async function TagPage({ params }: Props) {
  const { slug } = await params;
  const tags = allTags();
  if (!tags.includes(slug)) notFound();

  const taggedWriting = writing.filter((w) => w.tags.includes(slug));
  const taggedPackages = packages.filter((p) => p.tags.includes(slug));
  const taggedNotes = notes.filter((n) => n.tags.includes(slug));

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <SectionHeader index="tag" title={`#${slug}`} />

      {taggedWriting.length ? (
        <section className="mb-12">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-widest text-subtle">Writing</div>
          <ul className="divide-y divide-border">
            {taggedWriting.map((w) => (
              <li key={w.slug} className="py-4 first:pt-0">
                <Link href={`/writing/${w.slug}`} className="group block">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-xl group-hover:text-accent">{w.title}</h3>
                    <FormatDate date={w.date} />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{w.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {taggedPackages.length ? (
        <section className="mb-12">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-widest text-subtle">Packages</div>
          <ul className="divide-y divide-border">
            {taggedPackages.map((p) => (
              <li key={p.slug} className="py-3 first:pt-0">
                <Link href={`/packages/${p.slug}`} className="font-mono text-sm hover:text-accent">
                  {p.name}
                </Link>
                <p className="mt-0.5 text-sm text-muted-foreground">{p.summary}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {taggedNotes.length ? (
        <section>
          <div className="mb-4 font-mono text-[11px] uppercase tracking-widest text-subtle">Notes</div>
          <ul className="space-y-3">
            {taggedNotes.map((n) => (
              <li key={n.slug}>
                <Link href={`/notes/${n.slug}`} className="block rounded-md border border-border bg-surface/40 p-4 hover:border-border-strong hover:bg-surface">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-lg">{n.title}</h3>
                    <FormatDate date={n.date} />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{n.body}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
