import Link from "next/link";
import {
  profile,
  recentWriting,
  packages,
  people,
  recentNotes,
  recentLinks,
} from "@/content";
import { SectionHeader, Tag, FormatDate } from "@/components/primitives";
import { SocialIcon } from "@/components/SocialIcon";

export default function Stream() {
  const recent = recentWriting().slice(0, 3);
  const pkgs = packages.slice(0, 4);
  const ppl = people.slice(0, 6);
  const ns = recentNotes().slice(0, 6);
  const lns = recentLinks().slice(0, 6);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Identity strip */}
      <section className="rise grid gap-8 border-b border-border/60 py-12 md:grid-cols-[1.4fr_1fr] md:py-16">
        <div>
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.14_150)]" />
            {profile.status}
          </div>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            Hi, I&apos;m Rahul.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground">{profile.bio}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
            {profile.socials.slice(0, 4).map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <SocialIcon label={s.label} size={16} />
                <span className="underline-grow">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
        <aside className="rounded-md border border-border bg-surface/60 p-5">
          <div className="flex items-center justify-between">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
              What I&apos;m on right now
            </div>
            <FormatDate date={profile.nowUpdated} />
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            {profile.now.map((n) => (
              <li key={n} className="flex gap-2 text-foreground">
                <span aria-hidden className="mt-2 inline-block h-px w-3 flex-shrink-0 bg-border-strong" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      {/* Recent writing */}
      <section className="py-12">
        <SectionHeader index="01" title="Recent writing" href="/writing" />
        <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
          {recent.map((w) => (
            <Link
              key={w.slug}
              href={`/writing/${w.slug}`}
              className="group block bg-background p-5 transition-colors hover:bg-surface"
            >
              <FormatDate date={w.date} />
              <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight group-hover:text-accent">
                {w.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.summary}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {w.tags.slice(0, 3).map((t) => (
                    <Tag key={t} name={t} />
                  ))}
                </div>
                <span className="font-mono text-[10px] text-subtle">{w.readingTime} min</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="py-12">
        <SectionHeader index="02" title="Packages I keep reaching for" href="/packages" />
        <ul className="divide-y divide-border overflow-hidden rounded-md border border-border bg-background">
          {pkgs.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/packages/${p.slug}`}
                className="grid grid-cols-[1fr_auto] items-baseline gap-4 p-4 transition-colors hover:bg-surface sm:grid-cols-[1.2fr_2fr_auto]"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-foreground">{p.name}</span>
                </div>
                <span className="hidden text-sm text-muted-foreground sm:block">{p.summary}</span>
                <div className="flex gap-1.5">
                  {p.tags.slice(0, 2).map((t) => (
                    <Tag key={t} name={t} />
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* People */}
      <section className="py-12">
        <SectionHeader index="03" title="People I read" href="/people" />
        <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {ppl.map((p) => (
            <Link
              key={p.slug}
              href={`/people/${p.slug}`}
              className="group block bg-background p-5 transition-colors hover:bg-surface"
            >
              <div className="flex items-baseline justify-between">
                <div className="font-serif text-xl font-semibold group-hover:text-accent">{p.name}</div>
                {p.handle && (
                  <span className="font-mono text-[11px] text-subtle">{p.handle}</span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.why}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Notes + Links: two columns */}
      <section className="grid gap-10 py-12 lg:grid-cols-2">
        <div>
          <SectionHeader index="04" title="Short notes" href="/notes" />
          <ul className="space-y-3">
            {ns.map((n) => (
              <li key={n.slug}>
                <Link
                  href={`/notes/${n.slug}`}
                  className="block rounded-md border border-border bg-surface/40 p-4 transition-colors hover:border-border-strong hover:bg-surface"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-lg font-semibold leading-tight">{n.title}</h3>
                    <FormatDate date={n.date} />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{n.body}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeader index="05" title="Things I bookmarked" href="/links" />
          <ul className="space-y-2">
            {lns.map((l) => (
              <li key={l.url} className="border-b border-border/50 pb-2">
                <a
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block py-1"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-serif text-base font-medium text-foreground underline-grow">
                      {l.title}
                    </span>
                    <span className="flex-shrink-0 font-mono text-[10px] text-subtle">
                      {l.domain}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">{l.why}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
