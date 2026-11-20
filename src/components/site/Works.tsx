import { site } from "@/config/site";

export function Works() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">My work</p>
          <h2 className="mt-4 text-4xl font-medium text-foreground md:text-5xl">
            What fills my days
          </h2>
        </div>
        <p className="max-w-sm text-muted-foreground">
          Four corners of my home, and the things I make in each of them.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {site.works.map((w, i) => (
          <article
            key={w.title}
            className={`group overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-lift ${
              i % 2 === 1 ? "md:mt-16" : ""
            }`}
          >
            <div className="overflow-hidden">
              <img
                src={w.image}
                alt={w.title}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-7">
              <p className="text-sm font-semibold text-terracotta">{w.kicker}</p>
              <h3 className="mt-1 text-2xl font-medium text-foreground">{w.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{w.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {w.tags.map((t) => (
                  <li
                    key={t}
                    className="stitch rounded-full border px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
