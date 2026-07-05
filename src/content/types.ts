// Central content store. Pragmatic: typed TS modules, easy to extend.
// Each entity has a slug. Cross-references resolve to backlinks at query time.

export type EntityType = "writing" | "package" | "person" | "note" | "link";

export interface Profile {
  name: string;
  role: string;
  location: string;
  socials: { label: string; href: string; handle: string }[];
  now: string[]; // current interests
  nowUpdated: string;
  bio: string;
}

export interface Writing {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  summary: string;
  tags: string[];
  readingTime: number;
  // refs
  people?: string[];
  packages?: string[];
  related?: string[];
  references?: { title: string; href: string }[];
  // body: array of paragraphs / heading / code blocks
  body: Block[];
}

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "quote"; text: string; cite?: string }
  | { kind: "code"; lang?: string; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "callout"; tone?: "note" | "warn"; text: string };

export interface Package {
  slug: string;
  name: string;
  summary: string;
  why: string;
  url: string;
  repo?: string;
  npm?: string;
  tags: string[];
  alternatives?: string[];
  relatedWriting?: string[];
}

export interface Person {
  slug: string;
  name: string;
  handle?: string;
  why: string;
  favoriteIdea: string;
  handles: { label: string; href: string }[];
  relatedWriting?: string[];
  relatedPackages?: string[];
}

export interface Note {
  slug: string;
  date: string;
  title: string;
  body: string;
  tags: string[];
  links?: { title: string; href: string }[];
}

export interface Link {
  url: string;
  title: string;
  why: string;
  date: string;
  tags: string[];
  domain: string;
}
