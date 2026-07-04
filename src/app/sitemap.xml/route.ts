import { writing, packages, people, notes } from "@/content";

const BASE_URL = "";

export async function GET() {
  const paths: string[] = [
    "/",
    "/writing",
    "/packages",
    "/people",
    "/notes",
    "/links",
    "/about",
    ...writing.map((w) => `/writing/${w.slug}`),
    ...packages.map((p) => `/packages/${p.slug}`),
    ...people.map((p) => `/people/${p.slug}`),
    ...notes.map((n) => `/notes/${n.slug}`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc></url>`).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
  });
}
