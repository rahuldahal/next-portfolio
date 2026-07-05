import type { Metadata } from "next";
import Link from "next/link";
import { packages } from "@/content";
import { SectionHeader, Tag } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Packages",
  description: "Libraries and tools I recommend, and why.",
  openGraph: { title: "Packages · Rahul Dahal", url: "/packages" },
  alternates: { canonical: "/packages" },
};

export default function PackagesIndex() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <SectionHeader index="packages" title="A working set" />
      <p className="-mt-2 mb-10 max-w-xl text-sm text-muted-foreground">
        Open-source libraries I reach for, with the actual reason I keep reaching.
      </p>
      <ul className="divide-y divide-border overflow-hidden rounded-md border border-border">
        {packages.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/packages/${p.slug}`}
              className="grid gap-1 p-5 transition-colors hover:bg-surface sm:grid-cols-[1fr_2fr]"
            >
              <div>
                <div className="font-mono text-sm">{p.name}</div>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 3).map((t) => <Tag key={t} name={t} />)}
                </div>
              </div>
              <div>
                <p className="text-foreground">{p.summary}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.why}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
