import type { Person } from "./types";

export const people: Person[] = [
  {
    slug: "dax-raad",
    name: "Dax Raad",
    handle: "@thdxr",
    why: "He thinks about developer experience as a kind of systems engineering. SST is the artifact, but the way he talks about it on streams is the real material.",
    favoriteIdea: "The best abstractions are the ones you can replace in an afternoon.",
    handles: [
      { label: "X", href: "https://x.com/thdxr" },
      { label: "GitHub", href: "https://github.com/thdxr" },
    ],
    relatedWriting: ["the-cost-of-a-thousand-pods", "deleting-code-as-a-practice"],
    relatedPackages: ["sst"],
  },
  {
    slug: "anthony-fu",
    name: "Anthony Fu",
    handle: "@antfu7",
    why: "Tools that feel inevitable in retrospect. The discipline of shipping small, sharp libraries — unocss, vitest, slidev — is a craft I keep trying to learn.",
    favoriteIdea: "If a tool is annoying enough to use that you write a wrapper, ship the wrapper.",
    handles: [
      { label: "X", href: "https://x.com/antfu7" },
      { label: "GitHub", href: "https://github.com/antfu" },
      { label: "Site", href: "https://antfu.me" },
    ],
    relatedWriting: ["the-cost-of-a-thousand-pods", "the-quiet-case-for-monorepos"],
    relatedPackages: ["vitest", "biome"],
  },
  {
    slug: "theo",
    name: "Theo Browne",
    handle: "@t3dotgg",
    why: "Loud takes, but the underlying engineering judgment is sound. The yearly stack videos are an honest accounting of what changed and what did not.",
    favoriteIdea: "The framework you pick matters less than the boundary between your code and the framework.",
    handles: [
      { label: "X", href: "https://x.com/t3dotgg" },
      { label: "YouTube", href: "https://youtube.com/@t3dotgg" },
    ],
    relatedWriting: ["postgres-pooling-in-2026"],
  },
  {
    slug: "lee-robinson",
    name: "Lee Robinson",
    handle: "@leeerob",
    why: "Writes the kind of documentation that you wish came with every framework — narrative, specific, opinionated where it counts.",
    favoriteIdea: "Boring deploys are a feature.",
    handles: [
      { label: "X", href: "https://x.com/leeerob" },
      { label: "Site", href: "https://leerob.com" },
    ],
  },
  {
    slug: "pieter-levels",
    name: "Pieter Levels",
    handle: "@levelsio",
    why: "An ongoing demonstration that one PHP file and a domain is enough to start. The opposite of my usual instincts, which is why I keep paying attention.",
    favoriteIdea: "Ship before you are ready. Refactor only when something is bringing in money.",
    handles: [
      { label: "X", href: "https://x.com/levelsio" },
      { label: "Site", href: "https://levels.io" },
    ],
  },
  {
    slug: "john-ousterhout",
    name: "John Ousterhout",
    why: "A Philosophy of Software Design is the book I quote at code reviews. He treats complexity as the enemy with a precision most working engineers do not.",
    favoriteIdea: "Modules should be deep — small interface, large implementation.",
    handles: [
      { label: "Stanford", href: "https://web.stanford.edu/~ouster/" },
    ],
    relatedWriting: ["deleting-code-as-a-practice"],
  },
  {
    slug: "julia-evans",
    name: "Julia Evans",
    handle: "@b0rk",
    why: "The clearest technical writing on the internet. Every zine I have read has changed how I explain something the following week.",
    favoriteIdea: "If you cannot draw it on an index card, you do not understand it yet.",
    handles: [
      { label: "X", href: "https://x.com/b0rk" },
      { label: "Site", href: "https://jvns.ca" },
    ],
    relatedWriting: ["observability-without-a-vendor"],
  },
  {
    slug: "kelsey-hightower",
    name: "Kelsey Hightower",
    why: "The patron saint of running the boring thing in production. His talks have aged better than almost any other engineering talks I have rewatched.",
    favoriteIdea: "If you cannot operate it on a Sunday morning, do not deploy it on a Friday afternoon.",
    handles: [
      { label: "X", href: "https://x.com/kelseyhightower" },
    ],
    relatedWriting: ["observability-without-a-vendor", "type-driven-infra"],
  },
];
