import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/writing", label: "Writing" },
  { href: "/packages", label: "Packages" },
  { href: "/people", label: "People" },
  { href: "/notes", label: "Notes" },
  { href: "/links", label: "Links" },
  { href: "/about", label: "About" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <img src="/favicon.svg" alt="" aria-hidden className="h-6 w-6 rounded-sm" />
          <span className="font-serif text-lg font-semibold leading-none">Rahul Dahal</span>
        </Link>

        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-1 text-sm md:flex">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded-md px-2.5 py-1.5 text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
