import { Leaf } from "lucide-react";

import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl">{site.name}</p>
          <p className="mt-1 inline-flex items-center gap-2 text-sm opacity-70">
            <Leaf className="size-4 text-marigold" /> {site.footerNote}
          </p>
        </div>
        <ul className="flex flex-wrap gap-5">
          {site.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium opacity-80 transition-opacity hover:opacity-100"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm opacity-60">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
