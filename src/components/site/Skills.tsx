import { ChefHat, Scissors, Sofa, Sprout, type LucideIcon } from "lucide-react";

import { site } from "@/config/site";

const icons: Record<string, LucideIcon> = {
  cooking: ChefHat,
  home: Sofa,
  craft: Scissors,
  garden: Sprout,
};

export function Skills() {
  return (
    <section id="skills" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="eyebrow text-marigold">Skills</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-medium md:text-5xl">
          Things my hands know how to do
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.skills.map((s) => {
            const Icon = icons[s.icon] ?? Sprout;
            return (
              <div
                key={s.title}
                className="rounded-3xl border border-dashed border-primary-foreground/30 p-7"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-marigold text-foreground">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-6 text-xl font-medium">{s.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-primary-foreground/85">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-marigold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
