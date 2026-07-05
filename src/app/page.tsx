import Link from "next/link";
import {
  profile,
  recentWriting,
} from "@/content";
import { SectionHeader, Tag, FormatDate } from "@/components/primitives";
import { SocialIcon } from "@/components/SocialIcon";

export default function Stream() {
  const recent = recentWriting().slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Identity strip */}
      <section className="rise grid gap-8 border-b border-border/60 py-12 md:grid-cols-[1.4fr_1fr] md:py-16">
        <div>
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
    </div>
  );
}
