import type { Metadata } from "next";
import Link from "next/link";
import { recentWriting } from "@/content";
import { SectionHeader, Tag, FormatDate } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Writing",
  description: "Long-form essays on scalability, JavaScript, and the boring middle of software.",
  openGraph: { title: "Writing — Rahul Dahal", url: "/writing" },
  alternates: { canonical: "/writing" },
};

export default function WritingIndex() {
  const items = recentWriting();
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <SectionHeader index="writing" title="Long-form" />
      <p className="-mt-2 mb-10 text-sm text-muted-foreground">
        Essays on scalability, JavaScript, and the operational seams of running software in production.
      </p>
      <ul className="divide-y divide-border">
        {items.map((w) => (
          <li key={w.slug} className="py-8 first:pt-0">
            <Link href={`/writing/${w.slug}`} className="group block">
              <div className="flex items-baseline justify-between">
                <FormatDate date={w.date} />
                <span className="font-mono text-[10px] text-subtle">{w.readingTime} min</span>
              </div>
              <h2 className="mt-2 font-serif text-3xl leading-tight group-hover:text-accent">
                {w.title}
              </h2>
              <p className="mt-2 text-muted-foreground">{w.summary}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {w.tags.map((t) => <Tag key={t} name={t} />)}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
