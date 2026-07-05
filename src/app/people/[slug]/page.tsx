import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPerson, getWriting, getPackage, backlinksTo } from "@/content";
import { KindTag } from "@/components/primitives";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const { people } = await import("@/content/people");
  return people.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPerson(slug);
  if (!p) return {};
  return {
    title: `${p.name} · People`,
    description: p.why,
    openGraph: { title: p.name, description: p.why, url: `/people/${p.slug}` },
    alternates: { canonical: `/people/${p.slug}` },
  };
}

export default async function PersonPage({ params }: Props) {
  const { slug } = await params;
  const p = getPerson(slug);
  if (!p) notFound();

  const back = backlinksTo("person", p.slug);

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <KindTag type="person" />
      <h1 className="mt-3 font-serif text-5xl">{p.name}</h1>
      {p.handle && <p className="mt-1 font-mono text-sm text-subtle">{p.handle}</p>}

      <section className="mt-8">
        <div className="font-mono text-[11px] uppercase tracking-widest text-subtle">Why I follow</div>
        <p className="mt-2 text-lg">{p.why}</p>
      </section>

      <section className="mt-8 border-l-2 border-accent/40 pl-4">
        <div className="font-mono text-[11px] uppercase tracking-widest text-subtle">A favorite idea</div>
        <p className="mt-2 font-serif text-2xl italic">&ldquo;{p.favoriteIdea}&rdquo;</p>
      </section>

      <section className="mt-8 flex flex-wrap gap-2 text-sm">
        {p.handles.map((h) => (
          <a key={h.label} href={h.href} target="_blank" rel="noreferrer" className="rounded border border-border-strong bg-surface px-3 py-1.5 hover:bg-surface-2">
            {h.label} ↗
          </a>
        ))}
      </section>

      <aside className="mt-16 grid gap-10 border-t border-border pt-10 sm:grid-cols-2">
        {(p.relatedWriting?.length || back.length) ? (
          <div>
            <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-subtle">Connected writing</div>
            <div className="space-y-1.5 text-sm">
              {(p.relatedWriting ?? []).map((slug) => {
                const w = getWriting(slug);
                if (!w) return null;
                return (
                  <Link key={slug} href={`/writing/${slug}`} className="panel-row">
                    <KindTag type="writing" /> <span>{w.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : null}
        {p.relatedPackages?.length ? (
          <div>
            <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-subtle">Associated packages</div>
            <div className="space-y-1.5 text-sm">
              {p.relatedPackages.map((slug) => {
                const pk = getPackage(slug);
                if (!pk) return null;
                return (
                  <Link key={slug} href={`/packages/${slug}`} className="panel-row">
                    <KindTag type="package" /> <span className="font-mono">{pk.name}</span>
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
