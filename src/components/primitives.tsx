import type { EntityType } from "@/content";

const KIND_CLASS: Record<EntityType, string> = {
  writing: "text-[oklch(0.78_0.14_80)] border-[oklch(0.78_0.14_80)]/30",
  package: "text-[oklch(0.74_0.12_200)] border-[oklch(0.74_0.12_200)]/30",
  person: "text-[oklch(0.76_0.13_320)] border-[oklch(0.76_0.13_320)]/30",
  note: "text-[oklch(0.78_0.10_150)] border-[oklch(0.78_0.10_150)]/30",
  link: "text-[oklch(0.72_0.10_50)] border-[oklch(0.72_0.10_50)]/30",
};

export function KindTag({ type }: { type: EntityType }) {
  return (
    <span
      className={`inline-flex items-center rounded border bg-background px-1.5 py-px font-mono text-[10px] uppercase tracking-widest ${KIND_CLASS[type]}`}
    >
      {type}
    </span>
  );
}

export function Tag({ name }: { name: string }) {
  return (
    <span className="rounded bg-surface-2 px-1.5 py-px font-mono text-[10px] text-muted-foreground">
      #{name}
    </span>
  );
}

export function SectionHeader({
  index,
  title,
  href,
}: {
  index: string;
  title: string;
  href?: string;
}) {
  return (
    <div className="mb-5 flex items-end justify-between border-b border-border/60 pb-2">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">{index}</span>
        <h2 className="font-serif text-2xl">{title}</h2>
      </div>
      {href && (
        <a href={href} className="font-mono text-[11px] text-subtle hover:text-foreground">
          all →
        </a>
      )}
    </div>
  );
}

export function FormatDate({ date }: { date: string }) {
  const d = new Date(date);
  return (
    <time dateTime={date} className="font-mono text-[11px] text-subtle">
      {d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" })}
    </time>
  );
}
