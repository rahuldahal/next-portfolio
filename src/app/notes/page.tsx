import type { Metadata } from "next";
import Link from "next/link";
import { recentNotes } from "@/content";
import { SectionHeader, Tag, FormatDate } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Notes",
  description: "Short thoughts, half-finished ideas, and observations.",
  openGraph: { title: "Notes — Rahul Dahal", url: "/notes" },
  alternates: { canonical: "/notes" },
};

export default function NotesIndex() {
  const items = recentNotes();
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <SectionHeader index="notes" title="Working out loud" />
      <p className="-mt-2 mb-10 max-w-xl text-sm text-muted-foreground">
        Short, dated, ungroomed. The opposite of essays — these are the thoughts I am still chewing.
      </p>
      <ul className="space-y-4">
        {items.map((n) => (
          <li key={n.slug}>
            <Link
              href={`/notes/${n.slug}`}
              className="block rounded-md border border-border bg-surface/40 p-5 transition-colors hover:border-border-strong hover:bg-surface"
            >
              <div className="flex items-baseline justify-between">
                <h2 className="font-serif text-xl leading-tight">{n.title}</h2>
                <FormatDate date={n.date} />
              </div>
              <p className="mt-2 text-muted-foreground">{n.body}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {n.tags.map((t) => <Tag key={t} name={t} />)}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
