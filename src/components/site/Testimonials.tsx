import { Quote } from "lucide-react";

import { site } from "@/config/site";

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <p className="eyebrow">Kind words</p>
      <h2 className="mt-4 text-4xl font-medium text-foreground md:text-5xl">
        From neighbours &amp; friends
      </h2>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {site.testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-soft"
          >
            <div>
              <Quote className="size-8 text-marigold" />
              <blockquote className="mt-5 font-display text-lg leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
            </div>
            <figcaption className="stitch mt-8 border-t-2 pt-5">
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.relation}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
