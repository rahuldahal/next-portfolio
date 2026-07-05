import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPackage, getWriting, packages as allPackages, backlinksTo } from "@/content";
import { Tag, KindTag } from "@/components/primitives";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const { packages } = await import("@/content/packages");
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPackage(slug);
  if (!p) return {};
  return {
    title: `${p.name} · Packages`,
    description: p.summary,
    openGraph: { title: p.name, description: p.summary, url: `/packages/${p.slug}` },
    alternates: { canonical: `/packages/${p.slug}` },
  };
}

export default async function PackagePage({ params }: Props) {
  const { slug } = await params;
  const p = getPackage(slug);
  if (!p) notFound();

  const backlinks = backlinksTo("package", p.slug);

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="flex items-center gap-3">
        <KindTag type="package" />
        <span className="font-mono text-[11px] text-subtle">{p.tags.join(" · ")}</span>
      </div>
      <h1 className="mt-3 font-mono text-4xl">{p.name}</h1>
      <p className="mt-3 font-serif text-2xl text-muted-foreground">{p.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2 text-sm">
        <a href={p.url} target="_blank" rel="noreferrer" className="rounded border border-border-strong bg-surface px-3 py-1.5 hover:bg-surface-2">
          homepage ↗
        </a>
        {p.npm && (
          <a href={`https://www.npmjs.com/package/${p.npm}`} target="_blank" rel="noreferrer" className="rounded border border-border px-3 py-1.5 text-muted-foreground hover:text-foreground">
            npm
          </a>
        )}
        {p.repo && (
          <a href={p.repo} target="_blank" rel="noreferrer" className="rounded border border-border px-3 py-1.5 text-muted-foreground hover:text-foreground">
            repo
          </a>
        )}
      </div>

      <section className="mt-10">
        <div className="font-mono text-[11px] uppercase tracking-widest text-subtle">Why I like it</div>
        <p className="mt-2 text-lg text-foreground">{p.why}</p>
      </section>

      <section className="mt-10 flex flex-wrap gap-1.5">
        {p.tags.map((t) => <Tag key={t} name={t} />)}
      </section>

      <aside className="mt-16 grid gap-10 border-t border-border pt-10 sm:grid-cols-2">
        {p.alternatives?.length ? (
          <div>
            <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-subtle">Alternatives</div>
            <ul className="space-y-1.5 text-sm">
              {p.alternatives.map((a) => {
                const known = allPackages.find((x) => x.slug === a);
                return known ? (
                  <li key={a}><Link href={`/packages/${a}`} className="panel-row"><KindTag type="package" /> <span className="font-mono">{known.name}</span></Link></li>
                ) : (
                  <li key={a} className="font-mono text-muted-foreground">{a}</li>
                );
              })}
            </ul>
          </div>
        ) : null}
        {(p.relatedWriting?.length || backlinks.length) ? (
          <div>
            <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-subtle">Referenced in</div>
            <div className="space-y-1.5 text-sm">
              {p.relatedWriting?.map((slug) => {
                const w = getWriting(slug);
                if (!w) return null;
                return (
                  <Link key={slug} href={`/writing/${slug}`} className="panel-row">
                    <KindTag type="writing" /> <span>{w.title}</span>
                  </Link>
                );
              })}
              {backlinks.filter((b) => !p.relatedWriting?.includes(b.slug)).map((b) => {
                const prefix = b.type === "writing" ? "writing" : "people";
                return (
                  <Link key={b.slug} href={`/${prefix}/${b.slug}`} className="panel-row">
                    <KindTag type={b.type} /> <span>{b.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : null}
      </aside>
    </article>
  );
}
