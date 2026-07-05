import type { Metadata } from "next";
import Link from "next/link";
import { people } from "@/content";
import { SectionHeader } from "@/components/primitives";

export const metadata: Metadata = {
  title: "People",
  description: "Engineers and writers whose thinking has shaped mine.",
  openGraph: { title: "People · Rahul Dahal", url: "/people" },
  alternates: { canonical: "/people" },
};

export default function PeopleIndex() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <SectionHeader index="people" title="A small academy" />
      <p className="-mt-2 mb-10 max-w-xl text-sm text-muted-foreground">
        The people I read, watch, and quietly steal ideas from. Not a follow list, but a syllabus.
      </p>
      <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
        {people.map((p) => (
          <Link
            key={p.slug}
            href={`/people/${p.slug}`}
            className="group block bg-background p-6 transition-colors hover:bg-surface"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif text-2xl group-hover:text-accent">{p.name}</h3>
              {p.handle && <span className="font-mono text-[11px] text-subtle">{p.handle}</span>}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{p.why}</p>
            <p className="mt-3 border-l-2 border-accent/40 pl-3 font-serif italic text-foreground">
              &ldquo;{p.favoriteIdea}&rdquo;
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
