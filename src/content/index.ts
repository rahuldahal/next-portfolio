import { writing } from './writing';
import { packages } from './packages';
import { people } from './people';
import { notes } from './notes';
import { links } from './links';
import { profile } from './profile';
import type { EntityType } from './types';

export { writing, packages, people, notes, links, profile };
export type {
  Writing,
  Package,
  Person,
  Note,
  Link,
  Profile,
  Block,
  EntityType,
} from './types';

export function getWriting(slug: string) {
  return writing.find((w) => w.slug === slug);
}
export function getPackage(slug: string) {
  return packages.find((p) => p.slug === slug);
}
export function getPerson(slug: string) {
  return people.find((p) => p.slug === slug);
}
export function getNote(slug: string) {
  return notes.find((n) => n.slug === slug);
}

export const recentWriting = () =>
  [...writing].sort((a, b) => b.date.localeCompare(a.date));
export const recentNotes = () =>
  [...notes].sort((a, b) => b.date.localeCompare(a.date));
export const recentLinks = () =>
  [...links].sort((a, b) => b.date.localeCompare(a.date));

// Backlinks: who references a given slug?
export function backlinksTo(type: EntityType, slug: string) {
  const result: { type: EntityType; slug: string; title: string }[] = [];
  if (type === 'writing') {
    for (const w of writing) {
      if (w.related?.includes(slug))
        result.push({ type: 'writing', slug: w.slug, title: w.title });
    }
  }
  if (type === 'package') {
    for (const w of writing) {
      if (w.packages?.includes(slug))
        result.push({ type: 'writing', slug: w.slug, title: w.title });
    }
    for (const p of people) {
      if (p.relatedPackages?.includes(slug))
        result.push({ type: 'person', slug: p.slug, title: p.name });
    }
  }
  if (type === 'person') {
    for (const w of writing) {
      if (w.people?.includes(slug))
        result.push({ type: 'writing', slug: w.slug, title: w.title });
    }
  }
  return result;
}

// Build a graph: nodes + edges across all content
export function buildGraph() {
  const nodes: { id: string; type: EntityType; label: string }[] = [];
  const edges: { source: string; target: string }[] = [];

  for (const w of writing)
    nodes.push({ id: `writing:${w.slug}`, type: 'writing', label: w.title });
  for (const p of packages)
    nodes.push({ id: `package:${p.slug}`, type: 'package', label: p.name });
  for (const p of people)
    nodes.push({ id: `person:${p.slug}`, type: 'person', label: p.name });
  for (const n of notes)
    nodes.push({ id: `note:${n.slug}`, type: 'note', label: n.title });

  for (const w of writing) {
    const src = `writing:${w.slug}`;
    w.packages?.forEach((s) =>
      edges.push({ source: src, target: `package:${s}` }),
    );
    w.people?.forEach((s) =>
      edges.push({ source: src, target: `person:${s}` }),
    );
    w.related?.forEach((s) =>
      edges.push({ source: src, target: `writing:${s}` }),
    );
  }
  for (const p of people) {
    const src = `person:${p.slug}`;
    p.relatedPackages?.forEach((s) =>
      edges.push({ source: src, target: `package:${s}` }),
    );
  }
  for (const p of packages) {
    const src = `package:${p.slug}`;
    p.alternatives?.forEach((s) => {
      if (packages.some((x) => x.slug === s))
        edges.push({ source: src, target: `package:${s}` });
    });
  }
  return { nodes, edges };
}

export function allTags() {
  const tags = new Set<string>();
  writing.forEach((w) => w.tags.forEach((t) => tags.add(t)));
  packages.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  notes.forEach((n) => n.tags.forEach((t) => tags.add(t)));
  return [...tags].sort();
}
