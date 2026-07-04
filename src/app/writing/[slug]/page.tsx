import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWriting, getPackage, getPerson, backlinksTo, type Block } from "@/content";
import { Tag, FormatDate, KindTag } from "@/components/primitives";

export async function generateStaticParams() {
  const { writing } = await import("@/content/writing");
  return writing.map((w) => ({ slug: w.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const w = getWriting(slug);
  if (!w) return {};
  return {
    title: w.title,
    description: w.summary,
    openGraph: {
      type: "article",
      title: w.title,
      description: w.summary,
      url: `/writing/${w.slug}`,
      publishedTime: w.date,
    },
    alternates: { canonical: `/writing/${w.slug}` },
    other: {
      "article:published_time": w.date,
    },
  };
}

export default async function WritingPage({ params }: Props) {
  const { slug } = await params;
  const w = getWriting(slug);
  if (!w) notFound();

  const backlinks = backlinksTo("writing", w.slug);

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <header className="mb-10 border-b border-border pb-8">
        <div className="flex items-center gap-3">
          <KindTag type="writing" />
          <FormatDate date={w.date} />
          <span className="font-mono text-[10px] text-subtle">{w.readingTime} min read</span>
        </div>
        <h1 className="mt-4 font-serif text-5xl leading-[1.05]">{w.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{w.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {w.tags.map((t) => <Tag key={t} name={t} />)}
        </div>
      </header>

      <div className="prose-rd">
        {w.body.map((b, i) => <Render key={i} block={b} />)}
      </div>

      {(w.people?.length || w.packages?.length || w.related?.length || backlinks.length) && (
        <aside className="mt-16 grid gap-10 border-t border-border pt-10 sm:grid-cols-2">
          {w.people?.length ? (
            <Panel label="People referenced">
              {w.people.map((slug) => {
                const p = getPerson(slug);
                if (!p) return null;
                return (
                  <Link key={slug} href={`/people/${slug}`} className="panel-row">
                    <KindTag type="person" /> <span>{p.name}</span>
                  </Link>
                );
              })}
            </Panel>
          ) : null}
          {w.packages?.length ? (
            <Panel label="Packages referenced">
              {w.packages.map((slug) => {
                const p = getPackage(slug);
                if (!p) return null;
                return (
                  <Link key={slug} href={`/packages/${slug}`} className="panel-row">
                    <KindTag type="package" /> <span className="font-mono text-sm">{p.name}</span>
                  </Link>
                );
              })}
            </Panel>
          ) : null}
          {w.related?.length ? (
            <Panel label="Related writing">
              {w.related.map((slug) => {
                const r = getWriting(slug);
                if (!r) return null;
                return (
                  <Link key={slug} href={`/writing/${slug}`} className="panel-row">
                    <KindTag type="writing" /> <span>{r.title}</span>
                  </Link>
                );
              })}
            </Panel>
          ) : null}
          {backlinks.length ? (
            <Panel label="Referenced by">
              {backlinks.map((b) => {
                const prefix = b.type === "writing" ? "writing" : b.type === "package" ? "packages" : b.type === "person" ? "people" : "notes";
                return (
                  <Link key={b.slug} href={`/${prefix}/${b.slug}`} className="panel-row">
                    <KindTag type={b.type} /> <span>{b.title}</span>
                  </Link>
                );
              })}
            </Panel>
          ) : null}
        </aside>
      )}

      {w.references?.length ? (
        <section className="mt-12 border-t border-border pt-6">
          <div className="font-mono text-[11px] uppercase tracking-widest text-subtle">References</div>
          <ol className="mt-3 space-y-1 text-sm">
            {w.references.map((r) => (
              <li key={r.href}>
                <a href={r.href} className="underline-grow text-muted-foreground hover:text-foreground" target="_blank" rel="noreferrer">
                  {r.title}
                </a>
              </li>
            ))}
          </ol>
        </section>
      ) : null}
    </article>
  );
}

function Panel({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-subtle">{label}</div>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function Render({ block }: { block: Block }) {
  switch (block.kind) {
    case "p":
      return <p>{block.text}</p>;
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "quote":
      return (
        <blockquote>
          <p>&ldquo;{block.text}&rdquo;</p>
          {block.cite && <cite>&mdash; {block.cite}</cite>}
        </blockquote>
      );
    case "code":
      return (
        <pre>
          <code>{block.text}</code>
        </pre>
      );
    case "list":
      return <ul>{block.items.map((i) => <li key={i}>{i}</li>)}</ul>;
    case "callout":
      return <div className={`callout callout-${block.tone ?? "note"}`}>{block.text}</div>;
  }
}
