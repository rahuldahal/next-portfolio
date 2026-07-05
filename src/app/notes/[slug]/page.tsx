import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNote } from "@/content";
import { Tag, FormatDate, KindTag } from "@/components/primitives";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const { notes } = await import("@/content/notes");
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const n = getNote(slug);
  if (!n) return {};
  return {
    title: `${n.title} · Notes`,
    description: n.body.slice(0, 160),
    openGraph: { title: n.title, description: n.body.slice(0, 160), url: `/notes/${n.slug}` },
    alternates: { canonical: `/notes/${n.slug}` },
  };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const n = getNote(slug);
  if (!n) notFound();

  return (
    <article className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <div className="flex items-center gap-3">
        <KindTag type="note" />
        <FormatDate date={n.date} />
      </div>
      <h1 className="mt-3 font-serif text-4xl leading-tight">{n.title}</h1>
      <p className="mt-6 text-lg leading-relaxed text-foreground">{n.body}</p>
      <div className="mt-6 flex flex-wrap gap-1.5">
        {n.tags.map((t) => <Tag key={t} name={t} />)}
      </div>
      {n.links?.length ? (
        <section className="mt-10 border-t border-border pt-6">
          <div className="font-mono text-[11px] uppercase tracking-widest text-subtle">Links</div>
          <ul className="mt-2 space-y-1 text-sm">
            {n.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noreferrer" className="underline-grow text-muted-foreground hover:text-foreground">
                  {l.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
