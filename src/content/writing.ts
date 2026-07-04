import type { Writing } from "./types";

export const writing: Writing[] = [
  {
    slug: "the-cost-of-a-thousand-pods",
    title: "The cost of a thousand pods",
    date: "2026-05-28",
    summary:
      "Horizontal scaling solves a lot of problems and creates one big one: every pod is a tiny machine with its own opinions about your database.",
    tags: ["scalability", "postgres", "kubernetes"],
    readingTime: 9,
    people: ["dax-raad", "anthony-fu"],
    packages: ["drizzle", "tigerbeetle"],
    related: ["postgres-pooling-in-2026", "type-driven-infra"],
    references: [
      { title: "PgBouncer transaction pooling", href: "https://www.pgbouncer.org/usage.html" },
      { title: "Use one big server", href: "https://specbranch.com/posts/one-big-server/" },
    ],
    body: [
      { kind: "p", text: "The first time I ran a service at a thousand pods I did not feel powerful. I felt like I had built a thousand small misbehaving children who all wanted to talk to the same database at once. Each one was reasonable on its own. Together they were a denial-of-service attack on my own infrastructure." },
      { kind: "h2", text: "Connections are a global resource" },
      { kind: "p", text: "The thing nobody warns you about — or, they do, in a footnote you skim — is that Postgres connections are not a per-pod concern. They are a global resource shared across the entire fleet, and your pods do not know about each other. They will happily open the maximum they are allowed, locally, until the database tips over." },
      { kind: "code", lang: "ts", text: "// the well-meaning default that scales linearly into a wall\nexport const pool = new Pool({\n  max: 20,\n  connectionString: env.DATABASE_URL,\n});" },
      { kind: "p", text: "Twenty connections per pod times a thousand pods is twenty thousand connections. Your database will refuse most of them and you will spend a Tuesday afternoon discovering that fact in production." },
      { kind: "h2", text: "Pooling is the boring answer" },
      { kind: "p", text: "PgBouncer in transaction mode in front of Postgres is the answer almost every time. It feels old-fashioned because it is. The thing you give up — session-scoped features like prepared statements and SET LOCAL — turns out to be a thing you were not really using on purpose anyway." },
      { kind: "callout", tone: "note", text: "If you are reaching for Aurora Serverless v2 or Neon proxy to avoid running PgBouncer, you are not wrong. You are just buying the same answer with a credit card." },
      { kind: "h2", text: "Observability is what makes it cheap" },
      { kind: "p", text: "The cost of a thousand pods is not really money. It is the cost of not being able to see them. Tracing every database call back to the request that caused it is the difference between a five-minute investigation and an afternoon." },
    ],
  },
  {
    slug: "postgres-pooling-in-2026",
    title: "Postgres pooling in 2026",
    date: "2026-04-14",
    summary:
      "A pragmatic survey of where pooling lives now — in the driver, in a sidecar, in the cloud — and which one to reach for first.",
    tags: ["postgres", "infrastructure"],
    readingTime: 7,
    packages: ["drizzle", "neon"],
    people: ["theo"],
    related: ["the-cost-of-a-thousand-pods"],
    body: [
      { kind: "p", text: "Pooling used to be a single decision. You ran PgBouncer or you did not. In 2026 the decision tree has grown teeth, mostly because serverless runtimes broke the assumption that a process lives long enough to amortize a connection." },
      { kind: "h2", text: "Three places pooling can live" },
      { kind: "list", items: [
        "In the application — fine on a long-lived server, catastrophic in a Lambda.",
        "In a sidecar (PgBouncer, pgcat) — the workhorse answer, still the right call for most teams.",
        "In the cloud, at the edge of the database — Neon, Supavisor, RDS Proxy. Pay for the operator you do not have.",
      ] },
      { kind: "p", text: "The fourth answer — HTTP drivers that wrap the Postgres wire protocol in a fetch call — is the one that has actually changed the landscape. If your runtime cannot hold a TCP connection, an HTTP driver lets you pretend you have a database without lying to yourself about pooling." },
    ],
  },
  {
    slug: "type-driven-infra",
    title: "Type-driven infrastructure, finally",
    date: "2026-03-02",
    summary:
      "SST and CDK pushed infra-as-code into TypeScript. The interesting part is what type inference does to the shape of a stack.",
    tags: ["devops", "typescript", "iac"],
    readingTime: 6,
    packages: ["sst", "hono"],
    related: ["the-cost-of-a-thousand-pods"],
    body: [
      { kind: "p", text: "Terraform taught us that infrastructure is software. SST taught us that it can also be a TypeScript program your editor understands." },
      { kind: "p", text: "The shift is small and important. When the bucket name is a value the compiler knows about, the function that reads from it cannot misspell the bucket. The classes of bugs that used to live in YAML — typos, missing permissions, drift — collapse into red squiggles you fix at the speed of thought." },
    ],
  },
  {
    slug: "the-quiet-case-for-monorepos",
    title: "The quiet case for monorepos",
    date: "2026-01-21",
    summary:
      "Not the Google-scale argument. The two-engineer argument: one repo, one CI, one shared types package, no coordination problem.",
    tags: ["tooling", "monorepo"],
    readingTime: 5,
    packages: ["biome", "vitest"],
    people: ["anthony-fu"],
    body: [
      { kind: "p", text: "Most monorepo writing assumes you have a problem at scale. I want to make the smaller argument: if you are two engineers and three services, a monorepo removes more friction than it adds, full stop." },
    ],
  },
  {
    slug: "observability-without-a-vendor",
    title: "Observability without a vendor",
    date: "2025-11-09",
    summary:
      "OpenTelemetry, a single collector, and the discipline to instrument only what you will actually read. A minimal stack that costs almost nothing.",
    tags: ["observability", "otel"],
    readingTime: 8,
    body: [
      { kind: "p", text: "The pitch for OpenTelemetry has always been portability — instrument once, send anywhere. The under-told pitch is austerity. You can run a single collector, a single Clickhouse, and read traces in Grafana for less than the cost of a side project." },
    ],
  },
  {
    slug: "deleting-code-as-a-practice",
    title: "Deleting code as a practice",
    date: "2025-09-17",
    summary:
      "On the strange, useful habit of opening a pull request whose only job is to remove things.",
    tags: ["craft", "process"],
    readingTime: 4,
    people: ["dax-raad"],
    body: [
      { kind: "p", text: "The best engineers I have worked with all share one habit: every few weeks, they open a pull request titled something like 'cleanup' or 'remove dead code' and quietly delete a thousand lines nobody noticed were there." },
      { kind: "quote", text: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.", cite: "Antoine de Saint-Exupéry" },
    ],
  },
];
