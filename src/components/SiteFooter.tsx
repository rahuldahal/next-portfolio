import { profile } from "@/content";
import { SocialIcon } from "./SocialIcon";

export function SiteFooter() {
  return (
<footer className="mt-24 border-t border-border/60">
  <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 px-4 py-12 text-sm sm:px-6 md:flex-row md:items-start">
    <div>
      <div className="font-serif text-lg font-semibold">{profile.name}</div>
      <p className="mt-2 text-muted-foreground">{profile.role}</p>
      <p className="mt-1 font-mono text-xs text-subtle">{profile.location}</p>
    </div>

    <div>
      <div className="font-mono text-[11px] uppercase tracking-widest text-subtle">
        Elsewhere
      </div>

      <ul className="mt-3 space-y-2">
        {profile.socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <SocialIcon label={s.label} />
              <span className="underline-grow">{s.label}</span>
              <span className="font-mono text-xs text-subtle">{s.handle}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
</footer>
  );
}
