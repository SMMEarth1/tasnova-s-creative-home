import { ArrowRight, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/config/site";

export function Hero() {
  const [first, ...rest] = site.name.split(" ");
  const highlight = site.about.stats[0];

  return (
    <section id="top" className="leaf-glow relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.15fr_1fr] md:pb-28 md:pt-20">
        <div className="animate-rise">
          <p className="eyebrow">{site.greeting}</p>
          <h1 className="mt-6 text-6xl font-medium leading-[0.95] text-foreground sm:text-7xl lg:text-8xl">
            {first}
            <br />
            <em className="font-normal text-primary">{rest.join(" ")}</em>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
              {site.role}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" /> {site.location}
            </span>
          </div>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {site.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#work">
                See my work <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="soft" size="xl">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-rise [animation-delay:150ms]">
          <div className="arch stitch absolute -inset-4 border-2" aria-hidden />
          <img
            src={site.portrait}
            alt={`Portrait of ${site.name}`}
            width={1024}
            height={1536}
            className="arch relative aspect-[3/4] w-full object-cover shadow-lift"
          />
          {highlight && (
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card px-5 py-4 shadow-soft">
              <p className="font-display text-3xl font-semibold text-primary">{highlight.value}</p>
              <p className="text-xs font-medium text-muted-foreground">{highlight.label}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
