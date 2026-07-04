import Link from "next/link";

export default function NotFoundComponent() {
  return (
    <div className="grain flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-mono text-xs uppercase tracking-widest text-subtle">404 · not found</div>
        <h1 className="mt-3 font-serif text-5xl">A page that does not exist.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The link you followed has rotted, or never existed. The graph is the best way back.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/"
            className="rounded-md bg-accent px-4 py-2 text-sm text-accent-foreground hover:opacity-90"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
