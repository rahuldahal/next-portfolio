import { writing, notes, profile } from "@/content";

const BASE_URL = "";

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export async function GET() {
  const items = [
    ...writing.map((w) => ({
      title: w.title,
      link: `${BASE_URL}/writing/${w.slug}`,
      date: w.date,
      description: w.summary,
    })),
    ...notes.map((n) => ({
      title: n.title,
      link: `${BASE_URL}/notes/${n.slug}`,
      date: n.date,
      description: n.body,
    })),
  ].sort((a, b) => b.date.localeCompare(a.date));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(profile.name)} · Writing &amp; Notes</title>
    <link>${BASE_URL}/</link>
    <description>${esc(profile.bio)}</description>
    <language>en</language>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items
  .map(
    (i) => `    <item>
      <title>${esc(i.title)}</title>
      <link>${i.link}</link>
      <guid>${i.link}</guid>
      <pubDate>${new Date(i.date).toUTCString()}</pubDate>
      <description>${esc(i.description)}</description>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml", "Cache-Control": "public, max-age=3600" },
  });
}
