import type { Metadata } from "next";
import { recentLinks } from "@/content";
import { SectionHeader, Tag, FormatDate } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Links",
  description: "Bookmarks I keep coming back to.",
  openGraph: { title: "Links — Rahul Dahal", url: "/links" },
  alternates: { canonical: "/links" },
};

export default function LinksIndex() {
  const items = recentLinks();
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <SectionHeader index="links" title="A linkroll" />
      <p className="-mt-2 mb-10 max-w-xl text-sm text-muted-foreground">
        The internet I save. Mostly essays, occasionally a tool, never a tweet.
      </p>
      <ul className="divide-y divide-border">
        {items.map((l) => (
          <li key={l.url} className="py-4">
            <a href={l.url} target="_blank" rel="noreferrer" className="group block">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="font-serif text-xl underline-grow">{l.title}</h2>
                <span className="flex items-center gap-2 font-mono text-[10px] text-subtle">
                  {l.domain}
                  <FormatDate date={l.date} />
                </span>
              </div>
              <p className="mt-1 text-muted-foreground">{l.why}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {l.tags.map((t) => <Tag key={t} name={t} />)}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
