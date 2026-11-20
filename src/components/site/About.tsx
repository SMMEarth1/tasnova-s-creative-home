import { site } from "@/config/site";

export function About() {
  return (
    <section id="about" className="border-y border-border/70 bg-card">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.2fr] md:py-28">
        <div>
          <p className="eyebrow">About me</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight text-foreground md:text-5xl">
            {site.about.title}
          </h2>
        </div>
        <div>
          {site.about.paragraphs.map((p) => (
            <p key={p.slice(0, 20)} className="mb-5 text-lg leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          <dl className="stitch mt-10 grid grid-cols-2 gap-6 border-t-2 pt-8 sm:grid-cols-4">
            {site.about.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl font-semibold text-primary">{s.value}</dd>
                <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
