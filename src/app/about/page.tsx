import type { Metadata } from "next";
import { profile, writing, packages, people, notes, links } from "@/content";
import { SectionHeader } from "@/components/primitives";
import { SocialIcon } from "@/components/SocialIcon";

export const metadata: Metadata = {
  title: "About",
  description: "About Rahul Dahal, the site, and how it is built.",
  openGraph: { title: "About — Rahul Dahal", url: "/about" },
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <SectionHeader index="about" title="About this place" />

      <section className="mt-2 space-y-5 text-lg leading-relaxed">
        <p>
          I am <strong className="text-foreground">{profile.name}</strong>, a software engineer
          working primarily in JavaScript and TypeScript on the seams where applications meet
          infrastructure — pooling, observability, deploys, the boring middle.
        </p>
        <p>{profile.bio}</p>
        <p>
          This site is not a portfolio and not a resume. It&apos;s the reading list, the
          writing, and the small notes that make up how I actually think about the
          work — kept in one place so I can find them, and so anyone curious can too.
        </p>
      </section>

      <section className="mt-12">
        <div className="font-mono text-[11px] uppercase tracking-widest text-subtle">Elsewhere</div>
        <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} className="flex items-center gap-3 rounded border border-border bg-surface/40 p-3 hover:border-border-strong hover:bg-surface" target={s.href.startsWith("http") ? "_blank" : undefined} rel={s.href.startsWith("http") ? "noreferrer" : undefined}>
                <SocialIcon label={s.label} size={18} />
                <div className="min-w-0">
                  <div className="text-sm">{s.label}</div>
                  <div className="truncate font-mono text-[11px] text-subtle">{s.handle}</div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <div className="font-mono text-[11px] uppercase tracking-widest text-subtle">Inventory</div>
        <dl className="mt-3 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-4">
          {([
            ["Essays", writing.length],
            ["Packages", packages.length],
            ["People", people.length],
            ["Notes", notes.length],
            ["Links", links.length],
            ["Tags", new Set([...writing.flatMap((w) => w.tags), ...packages.flatMap((p) => p.tags), ...notes.flatMap((n) => n.tags)]).size],
          ] as const).map(([k, v]) => (
            <div key={k} className="bg-background p-4">
              <div className="font-mono text-3xl text-foreground">{v}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-subtle">{k}</div>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-12">
        <div className="font-mono text-[11px] uppercase tracking-widest text-subtle">Colophon</div>
        <p className="mt-3 text-muted-foreground">
          Built on Next.js, React 19, and Tailwind v4. Set in Poppins and Roboto,
          with JetBrains Mono for code. No analytics, no tracking, no cookie banner.
        </p>
      </section>
    </div>
  );
}
